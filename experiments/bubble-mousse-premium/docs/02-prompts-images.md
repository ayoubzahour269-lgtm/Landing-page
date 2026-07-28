# Bubble Mousse — Banque de prompts images

Direction : Concept A — الصالون الصامت, ivoire chaud éditorial.
Méthode révisée après audit de `e-com/docs/HANDOFF.md`.

---

## Changement de méthode

La version précédente de ce document proposait de générer le flacon avec une
image de référence, puis de vérifier l'étiquette. **Cette approche est
abandonnée.** Le projet Mechat a démontré en production qu'elle échoue :

> « NE JAMAIS générer ni animer le produit par IA. Tout modèle, même avec
> référence ou character sheet, redessine l'étiquette et fausse les
> proportions. »

La méthode retenue est celle qui a été validée sur le projet précédent :

1. **Détourer le vrai flacon** depuis la photo produit — upscale ×3 avant
   détourage, `rembg` avec alpha matting. Vérifier le redressement : sur Mechat,
   le détourage brut penchait de 5°.
2. Produire le master : `assets/bottle_straight.png`, fond transparent.
3. **Générer les décors SANS aucun produit dedans.**
4. **Compositer** le cutout dans le décor : ombre de contact elliptique floutée,
   reflet court à 12–15 %, réchauffement r ×1,03 / b ×0,985.
5. Pour un pack de 2 ou 3 : le même cutout dupliqué, même ligne de base,
   espacement régulier.

Fallback acceptable uniquement : `google/nano-banana-edit` avec double référence
(décor déjà généré + packshot), puis vérification systématique à l'œil.

## Modèles Kie — lequel pour quoi

| Modèle | Coût | Usage |
|---|---|---|
| `google/nano-banana` | 4 cr | décors, matières, fonds — **sans produit** |
| `google/nano-banana-edit` | 4 cr | compositing avec référence(s) — le seul à qui confier le flacon |
| `nano-banana-pro` | 18 cr | qualité art-directed 2K — **ignore souvent la référence, ne jamais lui confier le flacon** |

`image_size` acceptés : `1:1`, `3:4`, `9:16`, `16:9`. Le ratio `1:2` est refusé.

```
POST https://api.kie.ai/api/v1/jobs/createTask
{"model":"google/nano-banana","input":{"prompt":"…","image_urls":[],
 "output_format":"png","image_size":"9:16"}}
→ GET https://api.kie.ai/api/v1/jobs/recordInfo?taskId=…
  state: waiting | success | fail — URL dans resultJson
```

Upload d'une référence :
`POST https://kieai.redpandaai.co/api/file-stream-upload`, multipart
`file=@x.png`, `uploadPath=user-uploads` → `data.downloadUrl`.

## Règles absolues

1. **Aucun produit dans les prompts de décor.** Le flacon est composité après.
2. **Jamais d'avant/après.** Aucune image montrant des cheveux blancs devenant
   noirs. C'est une preuve de résultat : elle se photographie, elle ne se génère
   pas. Le projet Mechat étiquetait ses avant/après « صورة توضيحية » — sur une
   coloration, cette précaution ne suffit pas.
3. **Jamais de texte arabe généré.** Il se déforme systématiquement. Rendu en
   PIL + libraqm avec `direction='rtl', language='ar'`, polices Cairo. Fallback :
   rendu HTML puis capture Chromium.
4. **Jamais de faux témoignage.**
5. **Peu ou pas de visages.** Le Concept A travaille la matière, le geste et
   l'objet. Cela évite l'uncanny, contourne les questions de casting pour le
   Golfe, et réduit le nombre d'itérations.
6. **Le produit ne change pas de couleur.** Flacon vert, étiquette dorée,
   applicateur bleu.

## Palette à citer dans les prompts

```
Ivoire chaud    #F4EFE6    fond dominant
Ivoire ombré    #EDE5D8    ombres douces
Vert profond    #1B3A2F    packaging
Or mat          #B08D4F    accents
```

Saturation cible ≈ 0,86–0,88. Pas de fond noir continu — la doctrine Mechat a
retenu que les fonds sombres prolongés fatiguent et nuisent à la conversion.

---

## Étape 0 — Préparer les masters produit

Avant tout prompt.

| Master | Source | Usage |
|---|---|---|
| `bottle_straight.png` | packshot flacon seul | tous les compositings |
| `box_straight.png` | packshot boîte verte | section offre |
| `applicator_straight.png` | flacon applicateur bleu | section kit |

Détourage : upscale ×3 → `rembg` alpha matting → vérifier et corriger
l'inclinaison → exporter en PNG alpha.

---

## §1 — Hero · décor seul

> `google/nano-banana` — 9:16 (mobile) et 16:9 (desktop)

```
Empty editorial product photography set: seamless warm ivory backdrop
(#F4EFE6), a single soft key light from the upper left creating a long soft
diffused shadow across the lower right of the frame, subtle paper grain, no
objects, no products, no props, no text. Minimal luxury beauty advertising
aesthetic, generous negative space, muted warm color grading, medium format
look, shot at f/8.
```

Négatif : `product, bottle, object, text, watermark, logo, people, glossy
studio sweep, white clinical background`

Compositer ensuite `bottle_straight.png` dans le tiers inférieur, avec ombre de
contact alignée sur la direction de lumière du décor.

## §2 — Macro chevelure noire

> `google/nano-banana` — 16:9

```
Extreme macro photograph of glossy jet-black hair strands, soft raking light
revealing individual strand definition and natural sheen, shallow depth of
field, warm ivory background bokeh. Editorial beauty photography, restrained,
no face, no product, no water droplets. Muted warm grade, fine grain, 100mm
macro, f/2.8.
```

Négatif : `face, person, before after, split image, comparison, grey hair,
plastic look, text`

## §3 — Mousse et geste

> `google/nano-banana` — 1:1 puis 3:4

**Mousse**
```
Extreme macro of soft white cosmetic foam, delicate bubble structure catching
soft directional light, resting on a warm ivory surface. Minimal editorial
still life, very shallow depth of field, clean negative space, no hands, no
packaging, no text.
```

**Geste**
```
Close-up of hands lathering white foam into dark wet hair, cropped so no face
is visible, warm ivory bathroom light, shallow depth of field. Quiet premium
skincare mood, natural skin, short clean nails, no jewelry, no branding, no
text. Soft window light from the left.
```

Négatif : `face, eyes, smiling model, rings, nail polish, six fingers, deformed
hands, clinical lighting, text`

## §5 — Herbier botanique

> `google/nano-banana` — 16:9 puis 1:1 par actif

```
Editorial still life of botanical ingredients on a warm ivory surface: dried
ginseng root slices, a small pile of black sesame seeds, a dried fo-ti root,
a few dark green leaves. Museum herbarium aesthetic, soft overhead light, long
delicate shadows, generous spacing, no bowls, no packaging, no labels, no text.
Muted earthy palette, medium format, fine grain.
```

Décliner en 1:1 par actif : `{ginseng root slice | black sesame seeds | dried
fo-ti root | soap-bark shavings}`.

Négatif : `tropical foliage background, water splash, laboratory glassware,
text, labels, badges`

## §6 — Décor pour l'applicateur

> `google/nano-banana` — 3:4, puis compositing de `applicator_straight.png`

```
Empty warm ivory surface with soft side light from the right, long soft shadow
extending to the left, subtle paper texture, no objects, no products, no text.
Minimal luxury still life set, generous negative space.
```

Le bleu de l'applicateur reste un accent froid volontaire contre l'ivoire
chaud. Ne pas le corriger vers le vert.

## §8 — Paliers 1, 2, 3

> **Aucune génération.** Compositing uniquement.

Le même `bottle_straight.png` dupliqué 1, 2 ou 3 fois sur le décor du §1, même
ligne de base, espacement régulier (0,26 / 0,50 / 0,74 en fractions de largeur
pour le trio). Ajouter `box_straight.png` en retrait si l'offre montre la boîte.

C'est le seul moyen d'obtenir trois étiquettes strictement identiques. Toute
génération produira des variantes divergentes, immédiatement visibles.

## Ambiances

**Fond de section** — `google/nano-banana`, 16:9
```
Abstract minimal background: warm ivory paper surface (#F4EFE6) with extremely
subtle tonal variation and soft shadow gradients entering from one edge, no
objects, no text, no pattern. Calm editorial aesthetic, fine paper grain.
```

**Salle de bain** — `google/nano-banana`, 16:9
```
Quiet minimal bathroom corner in warm ivory and pale stone, soft morning light
through a sheer curtain, a folded ivory towel, a small green plant slightly out
of focus. Calm, empty, luxurious, no people, no mirror reflection, no branding,
no text. Muted warm grade, f/4.
```

---

## Contrôle qualité

- [ ] Aucun décor ne contient de produit généré
- [ ] Le flacon visible est toujours le cutout réel, jamais une génération
- [ ] Sur les visuels multi-flacons, les étiquettes sont strictement identiques
- [ ] L'ombre du cutout suit la direction de lumière du décor
- [ ] Aucun texte incrusté, aucun badge, aucun prix
- [ ] Aucun visage, sauf décision contraire explicite
- [ ] Le fond est ivoire chaud, jamais blanc pur
- [ ] Aucune déformation anatomique sur les mains
- [ ] L'image ne suggère aucun résultat de coloration

Règle de vérification héritée du projet Mechat : **décrire ce qui a réellement
été rendu, pas ce qui a été demandé.**

## Export

| Usage | Format | Cible |
|---|---|---|
| Hero mobile | AVIF + WebP | ≤ 120 ko, 1080 px |
| Hero desktop | AVIF + WebP | ≤ 180 ko, 1920 px |
| Sections | AVIF + WebP | ≤ 90 ko |
| Vignettes offre | AVIF + WebP | ≤ 60 ko |

Hero en `fetchpriority="high"`, tout le reste en `loading="lazy"`, dimensions
déclarées en dur.
