# LANDING PAGE BRIEF — Bubble Mousse

Format imposé par le skill `premium-landing-page-designer`.
Détail complet dans `01-architecture.md`, `03-pricing.md`, `04-integration-shopify.md`.

---

## Objectif commercial et CTA principal

Vendre le pack Bubble Mousse en paiement à la livraison sur trafic payant froid
(Meta, TikTok, Snapchat).

**CTA unique et constant : `اطلبي الآن`**, décliné en `أكّدي طلبك` au moment de
la soumission du formuaire. Aucun autre libellé d'action sur la page.

L'objectif n'est pas la commande passée mais la **commande livrée** : le NDR
mesuré est de 42,1 %, donc 58 % des commandes n'existent jamais. Toute la page
est arbitrée sur ce chiffre.

## Audience, marché, langue, priorité d'appareil

- Femmes couvrant leurs cheveux blancs, coloration à domicile.
- Arabie saoudite, Émirats, Oman. Égypte reportée — hors marché à ce prix.
- Arabe standard simplifié, adresse au féminin, interface RTL.
- **Mobile prioritaire.** Le desktop est le même récit, plus aéré.

## Promesse et offre

> صالونكِ في بيتكِ — لون أسود متجانس ولمعان طبيعي خلال ٢٥ دقيقة

| Palier | Contenu | SAR / AED | OMR | Par flacon |
|---|---|---|---|---|
| 1 | 1 flacon + kit | 149 | 14,9 | 149 |
| 2 | 2 flacons + kit | **199** | **19,9** | **99,5** |
| 3 | 3 flacons + kit | 249 | 24,9 | 83 |

Teinte noire uniquement. Les trois bruns du catalogue ne sont pas exposés :
une décision supplémentaire sur trafic froid coûte plus qu'elle ne rapporte.

## Objections et preuves disponibles

| Objection | Réponse sur la page | Preuve |
|---|---|---|
| « Je vais rater ma couleur » | Section 3, quatre étapes, geste identique au shampoing | — |
| « C'est compliqué et salissant » | Section 6, kit applicateur offert | Photo produit réelle |
| « Ça va abîmer mes cheveux » | Section 5, extraits botaniques, formulation descriptive | **INCI manquant** |
| « Et si ça ne marche pas ? » | Section 7, paiement à la livraison | — |
| « Est-ce que ça couvre vraiment ? » | Section 2 | **Aucune preuve visuelle — asset manquant** |

## Hiérarchie du message

désir → simplicité → preuve douce → valeur → risque levé → prix

Le prix arrive après la réassurance, jamais avant. Il reste visible en
permanence dans la barre CTA fixe dès la sortie du hero.

## Récit de la page

Neuf sections : hero, résultat, les 25 minutes, quatre bénéfices, univers
botanique, kit offert, réassurance, offre et commande, FAQ.

Sections volontairement absentes : compte à rebours, stock limité, bandeau
promotionnel, avis fabriqués. Elles augmenteraient le volume de commandes et
détruiraient le taux de livraison.

## Concept visuel en une phrase

**Le silence d'un salon de beauté haut de gamme, transposé dans une salle de
bain : ivoire chaud, vide généreux, un seul objet éclairé.**

## Système de matière

Papier ivoire et mousse. Un fond de papier chaud légèrement texturé, des ombres
longues et douces, et la mousse comme unique matière en mouvement. Aucun autre
effet visuel n'est introduit — ni verre, ni chrome, ni dégradé, ni particule.

## Interaction signature

**L'anneau des 25 minutes** qui se remplit à l'entrée de la section mode
d'emploi. C'est la seule animation non triviale de la page. Elle rend le temps
concret et transforme une contrainte en promesse.

## Intensité du mouvement et stratégie 3D

Mouvement volontairement pauvre : six animations au total, toutes en `transform`
et `opacity`. Parallaxe plafonnée à 8 %. Pas de scroll lissé, pas de
scroll-jacking.

**Aucune 3D, aucun WebGL.** Décision argumentée : il n'existe ni modèle 3D, ni
prise de vue tournante du produit. Une 3D reconstruite serait un faux objet, et
la génération image par image ne garantit pas la cohérence de l'étiquette entre
les frames. Le coût se paierait en LCP, donc en CPA, pour un gain de
compréhension nul. Les points chauds de l'applicateur remplacent la 3D à coût
quasi nul.

GSAP, Lenis, Three.js, React Three Fiber et Framer Motion sont **écartés**.

## Contraintes de performance et d'accessibilité

| Ressource | Budget |
|---|---|
| CSS | ≤ 25 ko compressé |
| JS | ≤ 15 ko compressé |
| Total au premier rendu | ≤ 400 ko |
| LCP mobile 4G | ≤ 2,0 s |
| CLS | ≤ 0,05 |

- Contraste vérifié : aucun texte sous 4,5:1, aucun contrôle sous 3:1.
- L'or `#B08D4F` est **décoratif uniquement**. Le texte et les bordures de
  contrôle utilisent `#7E6029` (5,1:1 sur ivoire).
- `prefers-reduced-motion` : tout est rendu à l'état final, anneau à 100 %,
  parallaxe désactivée.
- La page reste lisible et le formulaire soumissible sans JavaScript.
- Aucun débordement horizontal, vérifié en 390 px et 1280 px.

## Hypothèses posées

1. Le `199` du Sheet est en **SAR** — confirmé par ASP 171 ≈ 199 ÷ 1,15 (TVA KSA).
2. Les paliers 1 et 3 sont **calculés**, pas fournis. Écarts de +33 % et +25 %.
3. Le coût marchandise est déduit du profit après TVA, non communiqué.
4. « قطعتين » = 2 flacons + kit offert, conformément au brief initial.

## Assets et contenus manquants

| Manquant | Bloque | Contournement en place |
|---|---|---|
| Photos de résultat réelles | Section 2 | Macro de matière, aucune preuve affirmée |
| Composition INCI | Section 5, FAQ, allégations | Formulation descriptive, « نباتية » absent |
| Avis clients authentiques | Section 7 | Zone absente plutôt que remplie |
| Délais de livraison par pays | Section 7, FAQ | Placeholder explicite |
| Images générées (12 prompts prêts) | Toute la page | Placeholders SVG |
| Dépôt `e-com` | Audit technique, Phase 7 | Architecture spécifiée sans audit |

## Allégations interdites sans preuve

`صبغة نباتية` · `لطيفة على فروة الرأس الحساسة` · `رائحة تدوم ٩٦ ساعة` ·
`يقلل من التساقط` · `الكولاجين` · `يعالج التلف`

Les trois dernières provenaient d'une fiche produit différente et ont été
supprimées : ce sont des allégations thérapeutiques, rejetées par les régies
publicitaires et sanctionnables par la SFDA.
