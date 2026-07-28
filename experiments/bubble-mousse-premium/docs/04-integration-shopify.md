# Bubble Mousse — Stratégie d'intégration Shopify

Hébergement retenu : **Shopify**. Contrainte non négociable : la landing page
ne doit hériter d'aucun style ni script du thème principal.

---

## 1. Le problème à résoudre

Une page Shopify classique passe par `layout/theme.liquid`, qui charge le CSS
global du thème, son JavaScript, ses polices, son en-tête, son pied de page et
tous les scripts injectés par les applications installées. C'est exactement ce
qui produirait une landing page générique, lente et visuellement contaminée.

## 2. Architecture retenue — layout alternatif

Shopify permet à un template de déclarer un layout différent de `theme`. C'est
le mécanisme d'isolation natif, et il ne nécessite ni application, ni headless,
ni sortie de l'écosystème.

```
layout/
└── lp-bare.liquid                    ← layout minimal, aucun héritage

templates/
└── page.bubble-mousse.liquid         ← {% layout 'lp-bare' %}

sections/
├── lp-bm-hero.liquid
├── lp-bm-result.liquid
├── lp-bm-steps.liquid
├── lp-bm-benefits.liquid
├── lp-bm-botanical.liquid
├── lp-bm-kit.liquid
├── lp-bm-trust.liquid
├── lp-bm-offer.liquid
└── lp-bm-faq.liquid

assets/
├── lp-bm.css                         ← unique feuille de style chargée
├── lp-bm.js
└── lp-bm-*.avif
```

`lp-bare.liquid` ne contient que `{{ content_for_header }}`, la feuille
`lp-bm.css`, `{{ content_for_layout }}` et `lp-bm.js`. Aucun `header`, aucun
`footer`, aucun `theme.css`, aucune police du thème.

**Préfixe `lp-bm-` sur tout.** Chaque classe CSS, chaque fichier, chaque
section. Cela garantit qu'aucune règle du thème ne peut atteindre la page et
qu'aucune règle de la page ne peut fuiter vers la boutique.

**Vérification d'isolation :** la page doit rester identique si l'on désactive
entièrement le CSS du thème. Si elle change, elle est contaminée.

### Ce que `content_for_header` impose

Cette balise est obligatoire et injecte les scripts Shopify ainsi que ceux des
applications configurées pour toutes les pages. C'est le seul vecteur de
contamination résiduel. À auditer application par application dans les
paramètres de pixels et de scripts, et à désactiver sur ce template lorsque
c'est possible. Chaque script d'application non nécessaire coûte directement
en LCP, donc en CPA.

## 3. Le formulaire COD

Le checkout Shopify natif est inadapté à ce funnel : plusieurs étapes, création
de compte suggérée, champs superflus, et il n'expose pas la ville en liste
déroulante contrôlée dont dépend le NDR.

Trois options, par ordre de préférence :

| Option | Description | Verdict |
|---|---|---|
| **A** | Formulaire custom → App Proxy → création de commande via Admin API | **Recommandé.** Contrôle total sur les champs, la validation et le tracking. |
| B | Application COD du marché (type Releasit, EasySell) | Acceptable si déjà installée et éprouvée. Moins de contrôle sur le markup et la performance. |
| C | Checkout Shopify natif avec méthode de paiement manuelle « الدفع عند الاستلام » | À éviter sur trafic froid. Trop d'étapes, NDR dégradé. |

L'option A suppose une application privée sur la boutique. À trancher après
l'audit du dépôt `e-com` : si une application COD éprouvée est déjà en place et
que ses taux de confirmation sont connus, la conserver vaut mieux que de
reconstruire.

**Non négociable quelle que soit l'option :** ville en liste déroulante, format
de téléphone validé par pays, prix visible avant le formulaire, confirmation
WhatsApp annoncée.

## 4. Multi-pays

Shopify Markets pour l'Arabie saoudite, les Émirats et Oman : un marché par
pays, prix fixés manuellement selon la grille de `03-pricing.md` plutôt que par
conversion automatique — les paliers psychologiques (149 / 199 / 249) doivent
être identiques d'un marché à l'autre, ce qu'une conversion automatique casse.

La liste des villes et le format de téléphone suivent le marché détecté, avec
un sélecteur de pays visible et modifiable par la cliente : une détection
géographique erronée sur un formulaire COD produit une adresse non livrable.

## 5. Produit et variantes

Un seul produit, trois variantes correspondant aux trois paliers. La teinte
noire est la seule vendue sur cette page — les trois bruns ne sont pas exposés
comme options, afin de ne pas introduire de décision supplémentaire sur trafic
froid.

Le kit applicateur n'est pas une variante ni un produit lié : il est inclus
dans chaque palier et présenté comme cadeau. Le gérer comme un article séparé
créerait une ligne de panier et une hésitation.

## 6. RTL

`<html dir="rtl" lang="ar">` dans `lp-bare.liquid`. Toutes les propriétés CSS
en logique directionnelle : `margin-inline`, `padding-inline`, `inset-inline`,
`text-align: start`. Aucune valeur `left` ou `right` codée en dur.

Polices auto-hébergées dans `assets/`, en `woff2`, avec `font-display: swap` et
préchargement de la seule graisse utilisée en titrage. Ne pas dépendre de
Google Fonts : requête tierce, coût en LCP, et blocage possible selon les
réseaux.

## 7. Performance — budget

| Ressource | Budget |
|---|---|
| CSS | ≤ 25 ko compressé |
| JS de la page | ≤ 15 ko compressé |
| Image hero | ≤ 180 ko AVIF |
| Total au premier rendu | ≤ 400 ko |
| LCP mobile 4G | ≤ 2,0 s |
| CLS | ≤ 0,05 |

Aucune bibliothèque d'animation externe. Les six animations de la page sont
réalisables en CSS et en `IntersectionObserver`. GSAP, Lenis, Three.js et
Framer Motion sont **écartés** : le Concept A ne les justifie pas, et leur coût
se paierait en CPA.

## 8. Séquence de mise en production

1. Audit du dépôt `e-com` — version du thème, applications installées, pixels
   en place, solution COD existante, marchés configurés. **En attente
   d'attachement du dépôt.**
2. Duplication du thème en brouillon. Aucune modification sur le thème publié.
3. Ajout du layout, du template et des sections préfixés. Aucun fichier
   existant modifié — l'ensemble de l'intégration est additif.
4. Prévisualisation sur le thème brouillon, contrôle d'isolation CSS.
5. Contrôle Lighthouse mobile et test sur appareil Android d'entrée de gamme.
6. Câblage des pixels et vérification de la déduplication `event_id`.
7. Publication, puis mise en place des conversions hors ligne
   `order_confirmed` et `order_delivered`.

**Risque de régression : quasi nul.** L'intégration n'écrase aucun fichier
existant. Le seul point de contact avec la boutique est `content_for_header` et
la configuration des Markets.

## 9. En attente

- Attachement du dépôt `e-com` pour l'audit technique.
- Version et nature du thème actuel (Online Store 2.0 requis pour les sections
  de template).
- Existence et performance d'une solution COD déjà en place.
- Applications injectant des scripts sur toutes les pages.
