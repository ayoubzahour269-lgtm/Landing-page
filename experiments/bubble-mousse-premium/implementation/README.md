# Bubble Mousse — landing COD (KSA)

## Les fichiers

| Fichier | Rôle |
|---|---|
| `landing-v3.template.html` | **La source à modifier.** Contient les marqueurs `{{FONTS}}` et `{{IMG:nom}}`. |
| `landing-v3.html` | Build autonome (~770 Ko) : polices et images inlinées en base64. C'est ce qui est publié en artefact. **Ne pas éditer à la main.** |
| `../assets/fonts/inline-fonts.css` | Tajawal 800/900 + IBM Plex Sans Arabic 400/600 + IBM Plex Mono 500, sous-ensembles arabe et latin. |
| `../assets/media/*.webp` | Les 10 visuels générés, compressés (341 Ko au total). |

## Rebuild

```bash
python3 - <<'EOF'
import base64, re
t = open('landing-v3.template.html', encoding='utf-8').read()
t = t.replace('{{FONTS}}', open('../assets/fonts/inline-fonts.css').read())
for m in set(re.findall(r'\{\{IMG:([a-z0-9-]+)\}\}', t)):
    b64 = base64.b64encode(open(f'../assets/media/{m}.webp','rb').read()).decode()
    t = t.replace('{{IMG:%s}}' % m, 'data:image/webp;base64,' + b64)
assert '{{' not in t
open('landing-v3.html','w',encoding='utf-8').write(t)
EOF
```

## Ce que la page contient

Héro plein écran (canvas de particules réactif au curseur) → offre condensée →
éditorial problème → sélecteur de 4 teintes qui pilote la lumière ambiante et un
spotlight sur le bandeau → macro mousse → ingrédients → 3 étapes + compteur →
curseur avant/après → résultat → cadeau → garantie → avis → comparatif → offre et
formulaire COD → FAQ → CTA final.

## À compléter avant publication

Les emplacements sont **marqués en rouge dans la page** :

- Les 3 avis clients (réels, avec photos). Cinq avis suffisent — le gain plafonne
  vers dix.
- La troisième carte garantie : la durée de retour réelle.
- Le nombre de tests derrière la note 4,8.
- Les paliers 1 unité (65 ر.س) et 3 unités (150 ر.س) sont **supposés** : seul le
  pack de 2 à 110 ر.س / 199 ر.س barré est confirmé côté boutique.
- Le packshot du vrai flacon, absent : le héro utilise un décor botanique.

## Passage en production Shopify

Le build inline existe parce que la CSP des artefacts interdit toute ressource
externe. **En production, ne pas servir ce fichier tel quel** : le base64 gonfle
de ~33 % et bloque le rendu. Servir les `.webp` comme fichiers, avec `srcset`,
`sizes`, `loading="lazy"` partout sauf l'image LCP qui prend `fetchpriority="high"`.

Le formulaire est une simulation. En production, EasySell remplace le bloc via
l'ancre `#easysell-form-here`, et les événements de conversion se déclenchent sur
l'état de succès, jamais au clic.

Voir `../docs/RECHERCHE.md` pour ce qui a motivé chaque choix.
