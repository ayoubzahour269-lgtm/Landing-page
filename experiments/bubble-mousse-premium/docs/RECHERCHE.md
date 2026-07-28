# Notes de recherche — landing page Bubble Mousse

Ce que six recherches ont établi, et ce qui a été appliqué à `landing-v3.html`.
Les chiffres non sourcés ont été volontairement écartés : la section « folklore » à la fin
liste ceux qui circulent partout sans source primaire vérifiable.

---

## 1. Ce qui a changé la page

| Constat | Source | Application |
|---|---|---|
| Frais surprises = **40 %** des abandons de panier, cause n°1 | Baymard, méta-analyse de 50 études (2006-2025) | Livraison gratuite affichée dans le héro, la barre fixe, la pile d'inclus et le récapitulatif ; ligne « pas de frais ni de taxe supplémentaire » |
| Livraison lente = **20 %** des abandons, et en COD le délai fait passer le RTO de **22 % (<2 j) à 35 % (>5 j)** | Baymard ; Shipway ShipNotes FY25 | Délai 2–5 jours remonté à côté du CTA principal |
| Les interventions sur **le prix et l'offre** ont un effet **~127 % supérieur** aux interventions de design | Wharton, méta-analyse de 2 732 tests A/B sur 252 entreprises | L'offre est le premier bloc lisible après le titre |
| `backdrop-filter` = premier poste de saccade sur GPU Mali/Adreno d'entrée de gamme (rendu multi-passes par frame) | web.dev, chromium.org | Coupé sous 4 cœurs / 4 Go, fond opaque à la place |
| `content-visibility: auto` → **plus de 50 %** de coût de rendu en moins | web.dev | Appliqué aux 8 sections sous la ligne de flottaison |
| Les gagnants Awwwards scorent **8,0-9,2** en animation mais **5,8-7,0** en accessibilité | Grille de notation Awwwards | C'est l'écart qu'on exploite : accessibilité traitée au même niveau que le mouvement |
| Palette primée = deux couleurs, un noir **chaud** (jamais `#000`), un blanc cassé chaud, **un** accent saturé | Relevé de 11 Sites of the Day | Palette déjà conforme : `#0A0E0B` / `#F4F1E9` / or `#D9AC55` |
| Display à caractère + néo-grotesque en corps + **mono pour les libellés** | Typewolf, appariements réels de 10 sites retenus | Tajawal + IBM Plex Sans Arabic + IBM Plex Mono |

## 2. Deux erreurs corrigées dans le code

**Le tracking négatif ne se transpose pas à l'arabe.** La règle des titres primés
(`letter-spacing: -0.02em` à `-0.05em`) est une règle **latine**. L'arabe est une écriture
cursive dont les lettres se lient : resserrer le tracking écrase ces liaisons. Remis à
`normal` sur tous les titres arabes, conservé uniquement sur le wordmark latin.

**`aria-label` est ignoré sur les rôles génériques.** En découpant les titres mot à mot pour
l'animation, la correction usuelle (libellé sur le parent, mots en `aria-hidden`) ne
fonctionne que sur `h1`-`h6`, `a`, `button`. Sur un `<p>`, `aria-label` n'est pas honoré et
le texte disparaît entièrement de l'arbre d'accessibilité. Les éléments non nommables
reçoivent donc un doublon `.sr-only`. Vérifié par instantané de l'arbre d'accessibilité.

## 3. Longueur de page et attention — mesure faite sur notre page

L'étude d'eye-tracking de référence (NN/g, **120 participants, 130 000 fixations**, 2018)
donne la répartition de l'attention : **57 %** du temps au-dessus de la ligne de flottaison,
**74 %** sur les deux premiers écrans, **81 %** sur les trois premiers. Et on ne lit que
**20 à 28 %** des mots d'une page : chaque tranche de 100 mots supplémentaires n'achète que
**4,4 secondes** d'attention (Weinreich et al., 45 237 pages vues).

Mesure sur `landing-v3.html` : **709 mots** — dans la fourchette e-commerce d'Unbounce
(285-930) — mais **15 écrans de haut**, avec le sélecteur de baquets au **10e écran**.
Or c'est le levier de panier moyen, et Wharton établit que les interventions sur l'offre ont
l'effet le plus fort. Il se trouvait donc dans les 19 % d'attention résiduelle.
→ Une section d'offre condensée a été ajoutée au **2e écran** (1 / 2 / 3 unités, prix, cadeau,
livraison gratuite), qui renvoie au formulaire complet plus bas.

**Ce qui n'est PAS établi**, malgré ce qu'on lit partout : qu'un produit cher appelle une page
longue. La matrice « long copy vs short copy » qui fonde ce discours date de 2011 et son auteur
la présente explicitement comme une heuristique, sans aucune donnée. Le meilleur test interne
publié (37signals/Highrise) donne l'inverse : la page longue bat l'originale de 37,5 %, puis
une page **courte** bat la page longue de **47 %**, et y rajouter du contenu la dégrade de 22 %.

## 4. Preuve sociale — ce qu'il faut viser

- **Note optimale : 4,2 à 4,7.** Dans aucune catégorie l'optimum n'est 5,0 : les acheteurs
  perçoivent les notes extrêmes comme « trop belles pour être vraies ». PowerReviews mesure
  qu'un produit noté 5,0 convertit comme un produit noté 3,0-3,5 (20 M+ de pages produit).
  → Les étoiles de la page affichent désormais 4,8 avec une cinquième étoile atténuée, au lieu
  de cinq étoiles pleines qui suggéraient 5,0.
- **Cinq avis suffisent.** L'essentiel du gain se joue sur les **5 premiers avis**, le plateau
  est atteint vers 10 (Spiegel, Northwestern). Inutile de viser des centaines d'avis.
- **Les avis vérifiés valent mieux** : +15 % de probabilité d'achat, et ils sont notés en
  moyenne 0,45 étoile plus haut que les avis anonymes (biais de friction et d'influence sociale).
- **Le piège de lecture n°1 de tout le secteur** : afficher des avis ou des photos clients vaut
  environ **+2,5 % à +8,5 %** de conversion. Les fameux « +100 % » mesurent des visiteurs qui
  ont **cliqué** dans les avis — c'est un marqueur d'intention d'achat, pas un levier.
- **Badges de confiance** : le seul test A/B correctement rapporté est **négatif** (−5,3 % avec
  un badge BBB). Et un sceau « fait maison » a battu les sceaux SSL établis dans les tests
  Baymard — ce qui compte est l'apparence de sécurité, pas l'émetteur. Rien n'a été ajouté.

## 5. Points de vigilance pour la mise en production Shopify

- **Le poids.** La version artefact inline polices et images en base64 (~750 Ko) parce que la
  CSP y interdit toute ressource externe. En production, servir des fichiers réels :
  `srcset` + `sizes`, `loading="lazy"` partout sauf l'image LCP, `fetchpriority="high"` sur
  celle-ci. Le base64 gonfle de ~33 % et bloque le rendu.
- **Vitesse et conversion.** 1 s → 3,05 % de conversion, 2 s → 1,68 %, 3 s → 1,12 %
  (Portent, 5,6 M de sessions — corrélationnel, pas causal, mais l'ordre de grandeur tient).
- **Longueur de copie.** Unbounce (41 000 pages, 464 M de visiteurs) : mots difficiles
  −24,3 %, temps de lecture −19,4 %, nombre de mots −18,6 % de conversion. La page gagnerait
  à être resserrée si les tests le confirment.
- **Le COD recule dans le Golfe.** Checkout.com mesure la préférence COD à **20 %** en 2023
  (contre 41 % en 2020), et jusqu'à **10 %** en Arabie saoudite, aux Émirats et au Koweït.
  Les « 70-80 % de COD en MENA » viennent d'infographies de 2016-2019. À vérifier sur les
  données réelles de la boutique avant d'exclure le prépaiement.
- **Trois leviers RTO validés sur données transactionnelles** (RTO passé de 39 % à 21 %,
  410 M d'expéditions) : incitation au prépaiement, routage transporteur par code postal,
  vérification d'adresse avant expédition.

## 6. Folklore — chiffres à ne pas reprendre

Ces chiffres circulent partout sans source primaire vérifiable :

- « Amazon : 100 ms = −1 % de ventes » — billet de blog personnel de 2006 sur un test interne
  d'avant 2002, jamais publié ni reproduit.
- « Akamai : 100 ms = −7 % de conversion » — page source disparue, aucune méthodologie publique.
- « 53 % des visites mobiles abandonnées au-delà de 3 s » — URL Think with Google morte.
- « +270 % de conversion avec 5 avis » (Spiegel) — étude observationnelle sur la probabilité
  d'achat relative, ni causale ni un test A/B.
- « Lire sur mobile est deux fois plus difficile » — invalidé par NN/g eux-mêmes en 2016.
- « Multi-étapes = +300 % » — auto-déclaré par l'éditeur qui vend le produit multi-étapes.
- Toutes les règles chiffrées sur le nombre de champs de formulaire attribuées à Baymard.
- Compte à rebours, rareté artificielle, compteurs « X personnes regardent » : **aucune étude
  avec méthodologie publiée ne démontre un effet net positif.** Rien de tout cela n'est sur
  la page, et rien ne doit y être ajouté.

## 7. Ce que la recherche n'a pas pu établir

Aucune donnée fiable n'a été trouvée sur : les benchmarks de conversion du secteur
beauté/cosmétique, l'effet isolé du champ téléphone, multi-étapes contre une seule étape à
contenu constant, les positions de libellés, et l'effet net d'un popup mobile sur le chiffre
d'affaires. Ces sujets sont dominés par la citation circulaire.
