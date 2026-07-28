# Bubble Mousse — Grille tarifaire et économie de l'offre

Devise de référence : **SAR**. Marchés au lancement : Arabie saoudite, Émirats,
Oman. Égypte reportée (voir §5).

---

## 1. Lecture de la ligne SKU SA04030400BUMO

```
COD              199        prix affiché, TVA comprise
ASP              171        ≈ 199 ÷ 1,15 → prix hors TVA (TVA KSA 15 %)
Profit après TVA  76        par commande livrée
CPA breakeven      6 $
CR              78,9 %      taux de confirmation
DR              53,3 %      taux de livraison
NDR             42,1 %      = CR × DR
```

Vérification du breakeven, qui confirme la lecture :

```
Profit par commande passée   76 × 0,421            = 32,0 SAR
Coût des colis refusés       ~15 × 0,579           = -8,7 SAR
Marge disponible pour l'acquisition                = 23,3 SAR ≈ 6,2 $
```

Cohérent avec le CPA breakeven de 6 $ du Sheet. **Le modèle est validé.**

> Colonnes non résolues : `Selling 110` et `profit 25`. Ma reconstitution des
> coûts (≈ 97 SAR de coût total pour le palier 2, dont ≈ 25 de logistique et
> frais COD) est une déduction, pas une donnée. À confirmer.

## 2. Grille des trois paliers

Construction : le palier 2 est ancré sur ton prix existant de 199. Le palier 1
est délibérément peu attractif — il sert d'ancre pour rendre le palier 2
évident. Le palier 3 récompense l'engagement.

| Palier | Contenu | Prix | Prix/flacon | Économie | Badge |
|---|---|---|---|---|---|
| 1 | 1 flacon + kit | **149** | 149 | — | — |
| 2 | 2 flacons + kit | **199** | 99,5 | −33 % | الأكثر طلبًا |
| 3 | 3 flacons + kit | **249** | 83 | −44 % | أفضل سعر للقطعة |

L'écart clé est celui entre 149 et 199 : **50 SAR pour un second flacon**,
contre 149 pour le premier. C'est le levier de bascule de toute la page.

## 3. Marge estimée par palier

Sur la base d'un coût marchandise d'environ 36 SAR par flacon kit compris et
d'environ 25 SAR de logistique et frais COD par commande.

| Palier | Prix HT | Coût estimé | Profit livré | Profit / commande passée |
|---|---|---|---|---|
| 1 | 129,6 | 61 | ≈ 69 | ≈ 29 |
| 2 | 173,0 | 97 | **76** | ≈ 32 |
| 3 | 216,5 | 133 | ≈ 84 | ≈ 35 |

**Conclusion importante : la cannibalisation du palier 1 n'est pas dangereuse.**
Une commande à 149 rapporte encore ≈ 69 SAR livrés, soit 91 % du palier 2. Le
risque d'ajouter une offre à un flacon est donc faible, à condition que le
palier 1 ne soit jamais mis en avant visuellement.

## 4. Grille par pays

Conversions aux parités fixes en vigueur (SAR, AED et OMR sont ancrés au
dollar), puis arrondies à des paliers psychologiques.

| Pays | Devise | Palier 1 | Palier 2 | Palier 3 |
|---|---|---|---|---|
| Arabie saoudite | SAR | 149 | **199** | 249 |
| Émirats | AED | 149 | **199** | 249 |
| Oman | OMR | 14,9 | **19,9** | 24,9 |

La parité nominale SAR/AED est une coïncidence commode : les deux devises sont
à moins de 2 % l'une de l'autre. Elle simplifie les créatives publicitaires,
qui peuvent afficher le même nombre sur les deux marchés.

> **À vérifier avant lancement :** la TVA n'est pas identique partout — 15 % en
> Arabie saoudite, 5 % aux Émirats, 5 % à Oman. La marge par commande livrée
> est donc mécaniquement **meilleure aux Émirats et à Oman** à prix affiché
> égal. Environ +17 SAR équivalent par commande. Ces deux marchés méritent
> d'être testés en priorité malgré leur volume plus faible.

## 5. Égypte — pourquoi je la reporte

199 SAR ≈ 53 $ ≈ plus de 2 500 EGP au taux courant. Le marché égyptien du COD
beauté se situe entre 400 et 900 EGP. Une conversion directe est hors marché
d'un facteur trois à cinq.

L'Égypte demande :

- une grille de prix propre, construite sur son propre coût marchandise ;
- très probablement un format à un seul flacon comme offre principale ;
- un transporteur local et une structure de frais différente ;
- un NDR structurellement inférieur à celui du Golfe en COD.

**Recommandation : lancer sur KSA, EAU et Oman.** Traiter l'Égypte comme une
page distincte avec sa propre économie, une fois les trois premiers marchés
stabilisés. Le taux EGP flotte — toute grille égyptienne devra être recalculée
à sa date de construction, pas reprise d'ici.

## 6. Le levier qui compte le plus

Sensibilité du CPA breakeven au NDR, à prix et coûts constants :

| NDR | Profit / commande passée | Coût des refus | CPA breakeven |
|---|---|---|---|
| 42,1 % *(actuel)* | 32,0 | −8,7 | **6,2 $** |
| 50 % | 38,0 | −7,5 | **8,1 $** |
| 55 % | 41,8 | −6,8 | **9,3 $** |
| 60 % | 45,6 | −6,0 | **10,6 $** |

**Passer de 42 % à 50 % de NDR augmente ton budget d'acquisition tolérable de
31 %.** Aucune optimisation de taux de conversion sur la landing page ne peut
produire un gain de cette ampleur. C'est pourquoi l'architecture de la page
protège le NDR avant de chercher le volume :

- prix affiché tôt et en permanence dans la barre CTA ;
- aucune urgence artificielle, aucun faux stock, aucun compte à rebours ;
- ville en liste déroulante, jamais en texte libre ;
- format de numéro validé par pays ;
- étape de confirmation WhatsApp annoncée avant la commande ;
- délais de livraison annoncés avant le formulaire.

## 7. Projection à valider en test

Hypothèse de répartition des paliers sur trafic froid, à mesurer via
l'événement `select_tier` :

| Mix | Panier moyen |
|---|---|
| 25 % / 55 % / 20 % | 196,5 SAR |
| 15 % / 55 % / 30 % | 206,5 SAR |
| 10 % / 50 % / 40 % | 213,9 SAR |

L'objectif de la section offre est de déplacer le mix vers la droite. Le levier
n'est pas de supprimer le palier 1, mais de rendre l'économie des paliers 2 et
3 immédiatement lisible en prix par flacon.
