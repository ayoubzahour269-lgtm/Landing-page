# Bubble Mousse — Banque de prompts images

Pour génération manuelle sur Higgsfield (transposable à Kie AI).
Direction : Concept A — الصالون الصامت, ivoire chaud éditorial.

---

## Règles absolues

1. **Toujours joindre une image de référence produit.** Aucun prompt de cette
   banque ne doit être lancé sans la photo réelle du flacon en référence. Le
   produit existe, on ne l'invente pas.
2. **Jamais d'avant/après.** Aucune image montrant des cheveux blancs devenant
   noirs. C'est une preuve de résultat — elle doit être photographiée, pas
   générée.
3. **Jamais de faux témoignage.** Aucun portrait présenté comme une cliente.
4. **Le texte de l'étiquette n'est jamais généré.** Les modèles d'image
   déforment systématiquement l'arabe et le latin. Trois parades, dans l'ordre :
   cadrer pour que l'étiquette sorte partiellement du champ, la placer en
   profondeur de champ courte, ou compositer la vraie étiquette après coup.
   **Vérifier chaque sortie : si l'étiquette est lisible et fausse, l'image est
   à jeter.**
5. **Peu ou pas de visages.** Le Concept A travaille la matière, le geste et
   l'objet. Cela évite l'effet IA sur les visages, contourne les questions de
   casting pour le Golfe, et coûte moins cher en itérations.
6. **Le produit ne change pas de couleur.** Flacon vert, étiquette dorée,
   applicateur bleu. Aucune reconstruction chromatique.

## Palette de référence à citer dans les prompts

```
Ivoire chaud    #F4EFE6    fond dominant
Ivoire ombré    #EDE5D8    ombres douces
Vert profond    #1B3A2F    packaging
Vert émeraude   #2E6B52    accents
Or mat          #B08D4F    filets, étiquette
Noir encre      #14120F    texte
```

## Références à conserver dans `references/`

| Nom à donner | Visuel d'origine |
|---|---|
| `ref-bottle-front.jpg` | packshot flacon seul sur fond clair |
| `ref-box-bottle.jpg` | boîte verte + flacon, packshot studio |
| `ref-applicator.jpg` | flacon applicateur bleu à dents de peigne |
| `ref-herbal.jpg` | planche des extraits (ginseng, sésame noir, fo-ti) |

---

## §1 — Hero

### P01 · Packshot héros

> Référence : `ref-bottle-front.jpg` — Format 4:5 (mobile) et 16:9 (desktop)

```
Editorial product photograph of a single green cosmetic bottle with a gold
label and a translucent cap, standing upright on a seamless warm ivory
background (#F4EFE6). Single soft key light from the upper left, long soft
diffused shadow falling to the lower right. Minimalist luxury beauty
advertising aesthetic, generous negative space around the product, product
occupying the lower third of the frame. Muted warm color grading, matte
finish, no reflections, no props, no text, no logo overlay. Shot on medium
format, 100mm lens, f/8, extremely sharp product edges, subtle film grain.
```

Négatif : `harsh reflections, white clinical background, glossy studio sweep,
promotional badges, floating elements, text, watermark, multiple products`

### P02 — Variante verticale respirante

> Même référence — Format 9:16

Identique à P01, en ajoutant :

```
Vertical composition, product placed in the lower 40% of the frame, upper 60%
left as empty warm ivory space for typography.
```

---

## §2 — Le résultat

### P03 · Macro chevelure noire

> Sans référence produit — Format 16:9

```
Extreme macro photograph of glossy jet-black hair strands, soft raking light
revealing natural sheen and individual strand definition, shallow depth of
field, warm ivory background bokeh. Editorial beauty photography, calm and
restrained, no face visible, no styling products, no water. Muted warm grade,
fine grain, 100mm macro lens, f/2.8.
```

Négatif : `face, person, portrait, before after, split image, comparison,
grey hair, text`

> **Rappel :** cette image illustre une qualité de matière. Elle ne prouve
> aucun résultat de coloration et ne doit jamais être légendée comme telle.

---

## §3 — Les 25 minutes

### P04 · Mousse en macro

> Sans référence — Format 1:1

```
Extreme macro photograph of soft white cosmetic foam, delicate bubble
structure catching soft directional light, resting on a warm ivory surface.
Minimal editorial beauty still life, very shallow depth of field, clean
negative space. Warm neutral color grade, no hands, no packaging, no text.
```

### P05 · Le geste

> Sans référence — Format 4:5

```
Close-up editorial photograph of hands lathering white foam into dark wet
hair, cropped tightly so no face is visible, warm ivory bathroom light,
shallow depth of field. Calm, quiet, premium skincare advertising mood.
Natural skin tone, short clean nails, no jewelry, no visible branding, no
text. Soft diffused light from a window on the left.
```

Négatif : `face, eyes, smiling model, rings, bracelets, nail polish, clinical
lighting, text`

---

## §5 — Univers botanique

### P06 · Nature morte d'herbier

> Référence : `ref-herbal.jpg` — Format 16:9

```
Editorial still life of botanical hair-care ingredients arranged on a warm
ivory surface: dried ginseng root slices, black sesame seeds in a small pile,
a dried fo-ti root, a few dark green leaves. Museum herbarium aesthetic,
overhead soft light, long delicate shadows, generous spacing between each
element, no bowls, no packaging, no text, no labels. Muted earthy palette
against warm ivory, fine grain, shot on medium format.
```

Négatif : `bright green leaves background, tropical foliage, water splash,
laboratory glassware, text, labels, badges`

### P07 · Détail unitaire d'actif

> Format 1:1 — à générer 4 fois, une par actif

```
Single macro still life of {ginseng root slice | black sesame seeds | dried
fo-ti root | soap-bark shavings} centered on a warm ivory surface, soft
overhead light, long soft shadow, extreme detail, editorial herbarium plate
aesthetic, generous negative space, no text, no props.
```

---

## §6 — Le kit offert

### P08 · Applicateur héroïsé

> Référence : `ref-applicator.jpg` — Format 4:5

```
Editorial product photograph of a translucent blue plastic applicator bottle
with comb-teeth dispensing tip and measurement markings, standing on a warm
ivory background. Warm side light from the right creating a long soft shadow,
the cool blue of the plastic reading as a deliberate accent against the warm
ivory. Minimal luxury beauty still life, generous negative space, no text, no
props, no hands.
```

> Le contraste chaud/froid est intentionnel. Ne pas corriger le bleu vers le
> vert : le produit livré est bleu.

### P09 · Le kit complet à plat

> Références : `ref-bottle-front.jpg` + `ref-applicator.jpg` — Format 16:9

```
Overhead flat lay on a warm ivory surface: one green cosmetic bottle with gold
label lying horizontally, one translucent blue comb applicator bottle beside
it, a pair of folded plastic gloves, a shower cap. Arranged with generous
spacing, editorial minimal composition, soft overhead light, long delicate
shadows, no text, no badges, no promotional graphics.
```

---

## §8 — L'offre

### P10 · Groupes 1, 2, 3 flacons

> Référence : `ref-bottle-front.jpg` — Format 1:1, trois générations

```
Editorial product photograph of {one | two | three} identical green cosmetic
bottles with gold labels standing together on a warm ivory background, slight
overlapping arrangement with depth, single soft key light from the upper left,
long soft shadows. Minimal luxury packaging photography, generous negative
space, no text overlays, no price badges, no promotional graphics.
```

> **Contrôle qualité indispensable :** vérifier que les étiquettes des flacons
> sont **identiques entre elles**. Les modèles génèrent souvent des variantes
> divergentes sur les objets répétés. Si les étiquettes divergent, régénérer
> ou compositer un flacon unique dupliqué.

---

## Ambiances et fonds

### P11 · Fond de section

> Sans référence — Format 16:9, à décliner

```
Abstract minimal background texture, warm ivory paper surface (#F4EFE6) with
extremely subtle tonal variation and soft shadow gradients entering from one
edge, no objects, no text, no pattern. Calm editorial beauty aesthetic, fine
paper grain.
```

### P12 · Salle de bain, atmosphère

> Sans référence — Format 16:9

```
Interior photograph of a quiet minimal bathroom corner in warm ivory and pale
stone, soft morning light through a sheer curtain, a folded ivory towel, a
small green plant slightly out of focus. Calm, empty, luxurious, no people, no
mirror reflection, no visible branding, no text. Muted warm grade, wide angle,
f/4.
```

---

## Contrôle qualité — à vérifier sur chaque sortie

- [ ] L'étiquette n'affiche aucun texte lisible mais faux
- [ ] La forme du flacon correspond au produit réel
- [ ] Les couleurs correspondent : flacon vert, étiquette dorée, applicateur bleu
- [ ] Aucun visage, sauf décision contraire explicite
- [ ] Aucun badge, prix, pourcentage ou texte incrusté
- [ ] Le fond est ivoire chaud, jamais blanc pur
- [ ] Sur les images multi-flacons, les étiquettes sont identiques
- [ ] Aucune main à six doigts, aucune déformation anatomique
- [ ] L'image ne suggère aucun résultat de coloration

## Export

| Usage | Format | Cible |
|---|---|---|
| Hero mobile | AVIF + WebP | ≤ 120 ko, 1080 px de large |
| Hero desktop | AVIF + WebP | ≤ 180 ko, 1920 px |
| Sections | AVIF + WebP | ≤ 90 ko |
| Vignettes offre | AVIF + WebP | ≤ 60 ko |

Toutes les images en `loading="lazy"` sauf le hero, en `fetchpriority="high"`.
Dimensions déclarées en dur pour éviter tout décalage de mise en page.
