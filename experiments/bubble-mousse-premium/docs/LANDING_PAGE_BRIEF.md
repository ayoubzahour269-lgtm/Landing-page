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

---

# Refonte visuelle complète — journal de décisions

Passe de refonte menée avec le skill `premium-landing-page-designer`, en mode
*redesign*. La structure en neuf sections, le CTA unique, la teinte noire seule
et l'interdiction de fabriquer une preuve de résultat sont conservés tels quels.
Ce qui change est la direction artistique et la mise en œuvre.

## L'idée visuelle, en une phrase

**Une nature morte de salon** : ivoire chaud, lumière rasante, ombres longues
portées, et la mousse blanche comme unique matière.

Toutes les photographies ont été produites sur le même fond ivoire, et la page
adopte exactement ce ton (`--ivory-3: #E3D7C4`, échantillonné sur les fichiers).
Les images n'ont donc plus de bord : elles se fondent dans la mise en page au
lieu d'être posées dessus. C'est le geste qui porte tout le reste.

Conséquences appliquées partout :

- aucune carte, aucune ombre portée d'interface — uniquement des filets d'un pixel ;
- l'or n'est jamais un aplat, seulement une lumière : dégradé, trait fin, anneau ;
- composition asymétrique tenue par une grille éditoriale ;
- un grain photographique unique relie les photos et les à-plats.

## Système typographique

| Usage | Famille | Graisses |
|---|---|---|
| Titres | El Messiri | 600, 700 |
| Texte courant | IBM Plex Sans Arabic | 400, 500 |
| Chiffres, numéros de chapitre, prix | IBM Plex Mono | 500 |

Polices auto-hébergées en woff2, sous-ensembles arabe et latin séparés par
`unicode-range` : le latin n'est téléchargé que pour « BEIROU » et « +966 ».
`font-synthesis: none` — aucun faux gras sur de l'arabe. `letter-spacing`
laissé à `normal` sur tous les titres : l'arabe est une écriture liée, et
resserrer les grands titres, règle latine courante, y détruit les ligatures.

## Animation signature

L'anneau des 25 minutes se remplit en 1600 ms pendant que le nombre compte
jusqu'à 25, sur la même courbe pour que les deux finissent ensemble. C'est le
seul moment cinématographique ; tout le reste du mouvement tient en 340 ms
d'entrée et 200 ms de sortie, sur `cubic-bezier(.05, .7, .1, 1)`.

Le nombre final est écrit en dur dans le HTML et l'anneau s'affiche déjà
rempli quand le script ne tourne pas.

## Trois décisions qui contredisent la documentation existante

Elles sont signalées ici plutôt que tranchées en silence.

### 1. Chiffres occidentaux, et non arabo-indiens

`01-architecture.md` écrit ٢٥ دقيقة. La page écrit **25 دقيقة**.

Motif : relevé sur sept sites saoudiens majeurs (Nice One, Golden Scent,
ministère de la Santé, Tamara, Tabby, NEOM, Zid). Tous utilisent les chiffres
0-9 exclusivement, zéro occurrence arabo-indienne. Un prix en ٢٤٩ sur une page
d'achat saoudienne lit comme une traduction, pas comme un commerçant local.

**À valider.** Si la décision documentée prime, l'inversion est mécanique.

### 2. L'échelle de prix ne correspond pas à la boutique en ligne

| Source | Pack de 2 |
|---|---|
| `03-pricing.md` et cette page | **199 SAR** |
| Boutique Shopify en production | **110 SAR** (barré 199) |
| Tableur, ligne `SA04030400BUMO` | vente 110, panier moyen 171, COD 199 |

La page applique l'échelle documentée 149 / 199 / 249. Trois sources, trois
chiffres : **il faut trancher avant toute mise en ligne**, sinon la page
annonce un prix que le paiement ne confirmera pas — exactement le mécanisme
qui produit un refus à la livraison.

### 3. Le comparateur avant/après de la version précédente est abandonné

La version développée dans le dépôt `e-com` contenait un curseur avant/après
alimenté par des images générées. `01-architecture.md` l'interdit
explicitement. Il n'est pas repris ici et ne doit pas revenir.

## Médias

Cinq photographies retenues, toutes dans le registre matière et jamais dans
le registre preuve : mousse sur pierre, mèche noire, macro de mousse, geste
ganté, matières botaniques. Format WebP, deux largeurs chacune, 170 Ko au total.

Deux générations ont été écartées après contrôle :

- un plan « kit » montrant un flacon pompe qui n'est pas le produit ;
- un plan « rinçage » sur cheveux **châtains**, en contradiction directe avec
  le positionnement noir uniquement.

Restent en repère de mise en page, clairement marqués comme tels : le packshot
du flacon, l'applicateur et les trois visuels de paliers.

## Mesures relevées

| Contrôle | Résultat |
|---|---|
| Débordement horizontal de 320 à 1920 px | aucun |
| Sans JavaScript | page entière lisible, formulaire soumissible |
| `prefers-reduced-motion` | aucun élément masqué, anneau rempli |
| Contrastes de texte | 4,6:1 minimum, AA sur tous les couples |
| Chiffres arabo-indiens résiduels | 0 |
| Navigation clavier | tous les points d'arrêt ont un contour visible |
| Défilement complet, processeur bridé 6× | 482 ms |
| Poids total transféré | 338 Ko |

## Ce qui manque encore, et que la page ne peut pas inventer

1. Le packshot réel du flacon et de l'applicateur.
2. Des photographies de résultat réelles.
3. Des avis clients authentiques, avec leur nombre.
4. Les délais de livraison par pays.
5. La durée de la fenêtre de retour.
6. La liste INCI complète.
