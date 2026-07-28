# Bubble Mousse — Architecture de la landing page

Concept retenu : **A — الصالون الصامت (Le Salon Silencieux)**
Marché : Arabie saoudite, Émirats, Oman (+ Égypte, page séparée recommandée)
Langue : arabe standard simplifié, interface RTL
Paiement : COD
Statut : Phase 4 — architecture validée à produire, prototype non commencé

---

## 1. Décisions verrouillées

| Sujet | Décision |
|---|---|
| Concept créatif | A — éditorial minimal, ivoire chaud dominant |
| Marque affichée | BEIROU — gamme Bubble Mousse |
| Produit | Shampoing colorant rêveur noir, 500 ml, sans ammoniaque (déclaré fabricant) |
| Teinte vendue | **Noir uniquement** — les 3 bruns ne sont pas proposés sur cette page |
| Paliers d'offre | 1 flacon + kit / 2 flacons + kit / 3 flacons + kit |
| Palier mis en avant | 2 flacons |
| Paiement | COD, confirmation WhatsApp |
| Registre de langue | فصحى مبسّطة, adresse au féminin |
| Photographie | Tout généré par IA à partir des références produit réelles |
| Avant/après | **Interdit en IA.** Aucune preuve de résultat fabriquée. |

## 2. Contraintes économiques qui pilotent le design

```
COD affiché      199        CPA breakeven    6 $
Profit après TVA  76        CR               78,9 %
                            DR               53,3 %
                            NDR              42,1 %
```

**Le NDR de 42 % est la contrainte dominante.** La page est optimisée pour la
commande livrée, pas pour la commande passée. Traductions concrètes :

- Le prix est visible **avant** le formulaire, jamais après. Une cliente qui
  découvre le prix à la livraison refuse le colis.
- Aucun compte à rebours, aucun faux stock, aucune pression artificielle. Ces
  mécaniques augmentent le volume de commandes et détruisent le NDR.
- Formulaire court mais champs de contact fiables : ville en liste déroulante
  plutôt qu'en texte libre, format de numéro validé par pays.
- L'étape de confirmation WhatsApp est annoncée sur la page, pas subie.
- Les délais de livraison sont annoncés avant la commande.

## 3. Sitemap — 9 sections

| # | Section | Objectif commercial |
|---|---|---|
| 1 | Hero | Promesse comprise en moins de 3 secondes, offre et paiement immédiatement lisibles |
| 2 | Le résultat | Rendre le bénéfice désirable sans fabriquer de preuve |
| 3 | Les 25 minutes | Détruire l'objection « c'est compliqué » |
| 4 | Quatre bénéfices | Justifier le prix, sans surcharge |
| 5 | Univers botanique | Rassurer sur la douceur, sans allégation |
| 6 | Le kit offert | Augmenter la valeur perçue du panier |
| 7 | Réassurance | Lever le risque perçu avant le prix |
| 8 | L'offre + commande | Convertir, et convertir en commande livrable |
| 9 | FAQ | Absorber les objections restantes |

Ordre voulu : désir → simplicité → preuve douce → valeur → risque levé → prix.
Le prix arrive **après** la réassurance, jamais avant.

---

## 4. Contenu section par section

### Section 1 — Hero

```
Surtitre     صبغة شعر رغوية — بدون أمونيا
Titre        صالونكِ في بيتكِ
Sous-titre   لون أسود متجانس ولمعان طبيعي خلال ٢٥ دقيقة
CTA          اطلبي الآن — الدفع عند الاستلام
Bandeau      الدفع عند الاستلام · شحن سريع · صلاحية ٣ سنوات
```

Visuel : packshot du flacon sur ivoire chaud, ombre longue et douce, cadrage
vertical sur mobile. Image fixe — aucune animation au chargement.

**Desktop** : titre à droite, produit à gauche, colonne de texte à 45 %.
**Mobile** : produit en haut à 55 % de hauteur d'écran, texte en dessous, CTA
visible sans scroll.

### Section 2 — Le résultat

```
Titre        لون أسود متجانس من الجذور إلى الأطراف
Corps        تغطية واضحة ومتساوية للشعر الأبيض، بلا خطوط ولا فوارق.
             وبعد الغسيل، يبقى اللون حيويًا لفترة أطول.
```

Visuel : macro d'une chevelure noire brillante, lumière rasante, **aucun
visage, aucun avant/après**. La preuve viendra de photos clientes réelles quand
elles existeront — un emplacement est réservé.

> **Bloqué :** cette section reste la plus faible tant qu'il n'y a pas de photo
> de résultat authentique. Priorité asset n°1.

### Section 3 — Les 25 minutes

```
Titre        أربع خطوات. خمس وعشرون دقيقة.

١  ضعي الرغوة على شعرٍ مبلّل، تمامًا كما تفعلين مع الشامبو
٢  وزّعيها بالتساوي حتى تغطي الشعر بالكامل
٣  اتركيها ٢٥ دقيقة
٤  اشطفي بالماء الفاتر

CTA          اطلبي الآن
```

**Animation signature de la page** : un anneau qui se remplit progressivement
jusqu'à ٢٥ à l'entrée de la section. C'est la seule animation non triviale du
site. Elle sert la narration : elle rend le temps concret.

### Section 4 — Quatre bénéfices

Quatre, pas dix. La liste de dix bénéfices du brief dilue le message.

```
تغطية متساوية للشعر الأبيض        من الجذور إلى الأطراف، بلا فوارق
لون يدوم بعد الغسيل               يبقى حيويًا لفترة أطول
رائحة فواكه خفيفة                 تبقى على الشعر بعد الاستعمال
ملمس ناعم ولمعة طبيعية            شعر مرن وسهل التصفيف
```

Les six bénéfices écartés (types de cheveux, formule légère, usage domestique…)
sont redistribués dans la FAQ et la section réassurance.

### Section 5 — Univers botanique

```
Titre        خلاصات نباتية في التركيبة
Corps        تحتوي التركيبة على خلاصات الجينسنغ والسابونين والفوتي
             والسمسم الأسود.

الجينسنغ        خلاصة نباتية تقليدية في العناية بالشعر
السابونين       معروف بخصائصه المنظّفة اللطيفة
الفوتي          عشبة تقليدية في العناية بالشعر
السمسم الأسود   خلاصة نباتية غنية
```

> **Formulation juridiquement prudente et volontaire.** On dit ce que la
> formule *contient*, jamais ce que les extraits *font*. Interdiction stricte
> d'écrire « صبغة نباتية » tant que l'INCI n'est pas fourni : une coloration
> noire agissant en 25 minutes repose presque certainement sur des colorants
> d'oxydation. Le mot « نباتية » n'apparaît nulle part sur cette page.

Visuel : nature morte d'herbier sur ivoire — racines, graines de sésame noir,
tranches de ginseng. Composition éditoriale, pas fond de feuillage.

### Section 6 — Le kit offert

```
Titre        وأداة التطبيق، هدية مع كل طلب
Corps        زجاجة بأسنان مشط توزّع الصبغة بالتساوي على فروة الرأس.

أسنان مشط توزّع بالتساوي
خطوط قياس للتحكم بالكمية
تصلين إلى الجذور دون تلطيخ اليدين
سهلة الفك والتنظيف
حجم صغير مناسب للسفر
```

Le flacon applicateur est **bleu** et jure avec la palette. Parti pris assumé :
photographié sur ivoire avec une ombre chaude et une lumière latérale, le bleu
devient un accent froid volontaire. On ne repeint pas le produit réel.

**Interaction** : trois points chauds sur l'image de l'applicateur (dents,
graduations, corps souple). Au tap, une légende apparaît. Pas de 3D, pas de
WebGL — une image et trois zones cliquables.

### Section 7 — Réassurance

```
الدفع عند الاستلام            لا تدفعين قبل أن تستلمي
شحن إلى السعودية والإمارات وعُمان
صلاحية ٣ سنوات
يناسب جميع أنواع الشعر         الطبيعي والكثيف والمجعد
```

Emplacement réservé pour les avis clients. **Aucun avis ne sera écrit tant que
de vrais avis n'existent pas.** Si aucun n'est disponible au lancement, la
section avis est simplement absente — elle n'est pas remplie de faux.

### Section 8 — L'offre et la commande

Trois cartes, flux RTL, la carte centrale mise en avant.

| Palier | Contenu | Prix | Badge |
|---|---|---|---|
| 1 | flacon + kit | `{{PRIX_1}}` | — |
| 2 | flacons + kit | **199** | الأكثر طلبًا |
| 3 | flacons + kit | `{{PRIX_3}}` | أفضل سعر للقطعة |

> Seul le prix du palier 2 est connu (COD 199, devise à confirmer). Principe de
> construction recommandé : écart de 30 à 35 % entre le palier 1 et le palier 2,
> puis de 25 à 30 % entre le 2 et le 3, avec l'économie par flacon affichée sur
> les paliers 2 et 3. Le palier 2 doit rester le choix évident.

Formulaire :

```
الاسم الكامل        texte
رقم الجوال          numérique, indicatif et format validés par pays
المدينة             liste déroulante — jamais du texte libre
العنوان بالتفصيل    texte

CTA                 أكّدي طلبك — الدفع عند الاستلام
Sous le bouton      سنتواصل معكِ عبر واتساب لتأكيد الطلب قبل الشحن
```

Quatre champs. La ville en liste déroulante et le format de téléphone validé
sont les deux seuls leviers de la page qui agissent directement sur le NDR.

### Section 9 — FAQ

```
هل يحتوي على أمونيا؟
كم يدوم اللون؟
هل يناسب الشعر المصبوغ سابقًا؟
كم كمية المنتج المناسبة لطول شعري؟
هل يناسب الشعر المجعد أو الكثيف؟
متى يصل الطلب؟
هل الدفع عند الاستلام متاح؟
```

Les réponses restent factuelles. Aucune réponse n'affirme un résultat
dermatologique ni une durée chiffrée non prouvée.

---

## 5. CTA — placement

| Position | Libellé | Action |
|---|---|---|
| Hero | اطلبي الآن — الدفع عند الاستلام | scroll vers §8 |
| Après §3 | اطلبي الآن | scroll vers §8 |
| Après §6 | اطلبي الآن | scroll vers §8 |
| §8 | أكّدي طلبك | envoi |
| Barre fixe mobile | اطلبي الآن · 199 | scroll vers §8 |

La barre fixe mobile apparaît après le dépassement du hero et disparaît quand
la section 8 entre dans le viewport. Le prix y figure : le NDR se protège en
affichant le prix tôt et souvent.

## 6. Transitions et animations

Budget d'animation volontairement pauvre. Chaque animation a une fonction.

| Élément | Comportement | Fonction |
|---|---|---|
| Texte au scroll | opacité 0→1 + translation 12 px, 400 ms | rythme de lecture |
| Images | fondu au chargement, 300 ms | masquer le chargement |
| Anneau 25 minutes | remplissage à l'entrée, 1200 ms | rendre le temps concret |
| Parallaxe | ≤ 8 % sur les images plein cadre uniquement | profondeur |
| Boutons | échelle 0,98 au tap, 120 ms | retour tactile |
| Points chauds applicateur | légende en fondu au tap | compréhension produit |

Pas de scroll-jacking. Pas de scroll lissé sur mobile. Pas de séquence
d'images. Pas de 3D. Pas de WebGL.

## 7. Comportement desktop et mobile

**Mobile — prioritaire.** Colonne unique, marges 20 px, corps 17 px minimum,
titres 30 à 38 px, hauteur de ligne 1,7 (l'arabe demande plus d'air que le
latin). Barre CTA fixe. Aucune section ne dépasse une hauteur d'écran et demie.

**Desktop.** Largeur maximale 1120 px centrée. Deux colonnes uniquement sur
les sections 1, 5 et 8. Les autres restent en colonne unique centrée à 720 px.
Le desktop n'est pas une réorganisation, c'est le même récit plus aéré.

**RTL.** `dir="rtl"` au niveau du document. Toutes les marges en propriétés
logiques (`margin-inline-start`), aucune valeur directionnelle codée en dur.
Les chiffres de prix restent en chiffres latins, les chiffres narratifs (٢٥)
en arabes orientaux. Les icônes directionnelles sont retournées.

## 8. Fallback sans animation

Sous `prefers-reduced-motion: reduce` :

- tous les éléments sont rendus dans leur état final, opacité 1, sans transform
- l'anneau des 25 minutes est dessiné directement à 100 %
- la parallaxe est désactivée
- les fondus d'image sont supprimés
- la barre CTA fixe et les points chauds restent fonctionnels

La page doit rester intégralement compréhensible et vendeuse avec JavaScript
désactivé. Le formulaire doit rester soumettable sans JS.

## 9. Plan analytics

**Événements**

| Événement | Déclencheur |
|---|---|
| `view_content` | chargement |
| `scroll_25` / `scroll_50` / `scroll_75` | profondeur |
| `view_offer` | section 8 visible à 50 % |
| `select_tier` | choix d'un palier (paramètre : 1, 2 ou 3) |
| `begin_checkout` | premier champ du formulaire focalisé |
| `add_shipping_info` | ville sélectionnée |
| `purchase` | soumission validée |
| `order_confirmed` | confirmation WhatsApp — **hors site** |
| `order_delivered` | livraison confirmée — **hors site** |

**Implémentation.** Meta Pixel + Conversions API avec `event_id` partagé pour
la déduplication, TikTok Events API, Snap CAPI. Consentement géré avant tout
chargement de pixel.

**Le point critique.** Avec un NDR de 42 %, optimiser Meta sur `purchase`
revient à optimiser sur des commandes dont 58 % n'existeront jamais.
`order_confirmed` et `order_delivered` doivent être renvoyés en conversions
hors ligne via la CAPI, avec l'identifiant de commande d'origine. C'est le
réglage qui a le plus d'impact sur la rentabilité réelle, davantage que
n'importe quelle décision de design de cette page.

**Métriques de suivi** : taux de sélection par palier (pilote le panier moyen),
taux d'abandon par champ du formulaire, profondeur de scroll à l'atteinte de la
section 8.

## 10. Points ouverts

| # | Question | Bloque |
|---|---|---|
| 1 | Devise du 199 — SAR, AED ? | prix affichés |
| 2 | Prix des paliers 1 et 3 | section 8 |
| 3 | Composition INCI complète | sections 5 et 9, allégations |
| 4 | Photos de résultat réelles | section 2 |
| 5 | Avis clients réels | section 7 |
| 6 | Le « مجموعة أدوات » = kit accessoires, applicateur, ou les deux ? | section 6 |
| 7 | Délais de livraison par pays | sections 7 et 9 |
| 8 | Égypte : grille de prix propre ou report | périmètre |
| 9 | Où la page est hébergée — Shopify ou autonome | Phase 7 |

## 11. Allégations à ne pas publier sans preuve

| Allégation | Statut |
|---|---|
| صبغة نباتية | **Interdite** sans INCI |
| لطيفة على فروة الرأس الحساسة | **Interdite** sans test dermatologique |
| رائحة تدوم ٩٦ ساعة | Interdite sous forme chiffrée — remplacée par « رائحة فواكه خفيفة » |
| خالٍ من الأمونيا | Déclarée fabricant, à confirmer par l'INCI |
| يقلل من التساقط / الكولاجين / يعالج التلف | **Supprimées** — allégations thérapeutiques, produit différent |
| نتائج كصالون التجميل | Reformulée en promesse d'expérience, pas de résultat garanti |
