# Bubble Mousse — Stratégie d'intégration Shopify

Rédigé après audit du dépôt `ayoubzahour269-lgtm/e-com` (commit `8e62d46`).
Remplace la version spéculative précédente.

---

## 1. Ce que l'audit a trouvé

L'écosystème existe et il est plus solide que prévu. Le pattern d'isolation que
j'avais recommandé à l'aveugle **est déjà en place et éprouvé en production**.

| Élément | État constaté |
|---|---|
| Boutique | `dw0dwe-bp.myshopify.com` |
| Thème live | Horizon, id `188180398382` |
| Thème dev | id `188183183662` (vierge, CLI) |
| Accès | Theme Kit Access, proxy `theme-kit-access.shopifyapps.com` |
| Layouts | `theme.liquid`, `landing.liquid` (300 l.), `landing-v3.liquid` (25 l.) |
| Sections | 19 sections préfixées `landing-*` |
| Templates | `product.mechat-landing.json` → layout `landing-v3` |
| COD | **EasySell installé**, ancre `#easysell-form-here` |
| Langue | فصحى, `dir="rtl"` au niveau du layout |
| Devise | ر.س codée en dur dans les sections |
| Analytics | **Aucun pixel dans le thème** — tout est côté admin Shopify |

`landing-v3.liquid` fait 25 lignes : `content_for_header`, deux polices Google,
un `<style>` minimal, `content_for_layout`. Aucun en-tête, aucun pied de page,
aucun CSS de thème. **C'est exactement l'isolation recherchée**, déjà validée.

## 2. Corrections à mes recommandations précédentes

| Ce que j'avais recommandé | Ce qu'il faut faire |
|---|---|
| Créer un layout `lp-bare.liquid` | **Réutiliser `landing-v3.liquid`** — il fait déjà le travail |
| Formulaire custom via App Proxy (option A) | **Garder EasySell** — installé, rodé, taux connus |
| Auditer les scripts d'applications | Confirmé nécessaire : `content_for_header` reste le seul vecteur |

Le formulaire custom reste préférable **sur le papier** — ville en liste
déroulante et validation du numéro par pays sont les deux leviers directs sur le
NDR, et EasySell ne les expose pas forcément. Mais reconstruire un tunnel COD
éprouvé pour un gain non mesuré est un mauvais échange. **Décision : garder
EasySell**, et vérifier dans son back-office si la liste de villes et le format
de téléphone sont configurables. Si oui, le gain NDR est obtenu sans réécriture.

## 3. Architecture retenue

```
layout/landing-v3.liquid                    ← existant, réutilisé tel quel
templates/product.bubble-mousse.json        ← nouveau, layout: landing-v3
sections/lpbm-hero.liquid
sections/lpbm-result.liquid
sections/lpbm-steps.liquid
sections/lpbm-benefits.liquid
sections/lpbm-botanical.liquid
sections/lpbm-kit.liquid
sections/lpbm-trust.liquid
sections/lpbm-offer.liquid
sections/lpbm-faq.liquid
assets/lpbm-*.webp
```

Préfixe `lpbm-`, distinct du `landing-*` existant. Aucun fichier existant n'est
modifié : l'intégration est purement additive.

## 4. Pièges Shopify hérités du projet précédent

Ces contraintes ont été apprises en production sur ce thème. Les respecter évite
de refaire les mêmes erreurs.

**Ne jamais nommer une clé de section `order`.** Une section nommée `"order"`
dans le tableau `order[]` d'un template JSON casse le rendu de la page —
collision avec le tableau lui-même. Toujours préfixer : `lpbm_order`.

**Les pages d'erreur sont cachées par URL pendant 15 à 60 minutes.** Pour
tester, dupliquer le template sous un autre suffixe et appeler `?view=<suffixe>`
sur une URL fraîche, puis supprimer le doublon.

**L'API Products est bloquée pour les tokens Theme Access** (redirection 302).
Toute modification de prix, de SKU ou d'image produit se fait à la main dans
l'admin. Les paliers 149 / 199 / 249 devront donc être créés manuellement en
variantes.

**Le CDN Shopify ré-encode les images.** Vérifier le rendu à l'œil, pas par
comparaison de hash.

**Throttling.** Des 503 apparaissent après une série de PUT — prévoir un retry
avec backoff lors du déploiement des sections.

## 5. Deux dettes techniques repérées

**Police manquante.** `landing-order.liquid` déclare `font-family:'Cairo'` dans
sept règles CSS, mais `landing-v3.liquid` ne charge que Amiri et IBM Plex Sans
Arabic. Cairo n'est jamais chargée : tout ce texte retombe silencieusement sur
la sans-serif système. Soit ajouter Cairo au chargement, soit retirer la
déclaration. En l'état, la typographie affichée n'est pas celle qui est écrite.

**Minuteur permanent.** `landing-order.liquid` lance un `setInterval(sync, 2000)`
sans jamais l'arrêter. Il tourne indéfiniment pour surveiller l'apparition du
formulaire EasySell. Un `clearInterval` une fois le formulaire détecté suffirait.

Aucune des deux n'est bloquante. Toutes deux sont hors de mon périmètre — je les
signale sans y toucher.

## 6. Polices — décision révisée

Le thème charge Amiri et IBM Plex Sans Arabic depuis Google Fonts. Mon
prototype utilise une pile système avec Tajawal en tête.

**Décision : aligner le prototype sur IBM Plex Sans Arabic**, déjà chargée par
le layout. Cela supprime une requête réseau supplémentaire et garantit un rendu
identique. Amiri (serif) reste disponible si un contraste éditorial est
souhaité sur les titres — à trancher visuellement.

L'auto-hébergement des `woff2` reste préférable à terme, mais ce n'est pas la
priorité tant que le layout existant dépend de Google Fonts.

## 7. Multi-pays

Le thème actuel code `ر.س` en dur et ne cible que l'Arabie saoudite. Pour les
Émirats et Oman, il faut Shopify Markets avec des prix fixés manuellement selon
`03-pricing.md` — les paliers 149 / 199 / 249 doivent rester identiques d'un
marché à l'autre, ce qu'une conversion automatique casserait.

Le sélecteur de pays du prototype devra être remplacé par la détection Markets,
en gardant un contrôle manuel visible : une détection erronée sur un formulaire
COD produit une adresse non livrable.

## 8. Analytics

Aucun pixel n'est présent dans le code du thème — ils sont configurés côté admin
Shopify. Le plan de `01-architecture.md` §9 reste valable, avec une précision :
les événements devront être poussés via les Customer Events de Shopify plutôt
qu'en dur dans les sections.

Le point critique reste inchangé : avec un NDR de 42 %, `order_confirmed` et
`order_delivered` doivent être renvoyés en conversions hors ligne via la CAPI.
EasySell expose les statuts de commande — c'est la source à brancher.

## 9. Séquence de déploiement

1. Créer le produit et ses trois variantes **à la main dans l'admin** (API
   Products inaccessible).
2. Configurer EasySell : ancre `#easysell-form-here`, offres quantité.
3. Pousser les sections `lpbm-*` et le template sur le **thème de développement**
   (id `188183183662`), jamais sur le thème live.
4. Tester via `?view=` sur une URL fraîche.
5. Lighthouse mobile + test sur Android d'entrée de gamme.
6. Publication, puis conversions hors ligne.

## 10. Blocage réseau à lever

Cette session ne peut atteindre **aucun** hôte externe nécessaire :

```
theme-kit-access.shopifyapps.com   refusé
api.kie.ai                         refusé
kieai.redpandaai.co                refusé
cdn.shopify.com                    refusé
```

À ajouter à la politique réseau de l'environnement, puis rouvrir une session.
Sans cela, le déploiement des sections et la génération d'images doivent être
faits depuis une machine locale.
