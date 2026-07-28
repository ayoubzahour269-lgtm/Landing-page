# Premium Landing Page Designer — Skill Claude Code

Ce skill transforme Claude Code en spécialiste des landing pages premium : direction artistique, conversion, UX, animations fluides, scroll storytelling, 3D, responsive, performance et accessibilité.

## Contenu

```text
premium-landing-page-designer/
├── SKILL.md
├── README_FR.md
├── references/
│   ├── discovery-and-strategy.md
│   ├── visual-system.md
│   ├── motion-and-3d.md
│   ├── conversion-copy.md
│   ├── stack-recipes.md
│   ├── implementation-standards.md
│   └── qa-checklist.md
├── examples/
│   ├── cosmetic-product-brief.md
│   └── invocation-examples.md
└── scripts/
    ├── install.sh
    └── audit_web_assets.py
```

## Installation personnelle sur macOS ou Linux

Cette installation rend le skill disponible dans tous tes projets Claude Code.

```bash
cd /chemin/vers/premium-landing-page-designer
./scripts/install.sh --personal
```

Le skill sera copié dans :

```text
~/.claude/skills/premium-landing-page-designer/
```

## Installation dans un projet précis

```bash
cd /chemin/vers/premium-landing-page-designer
./scripts/install.sh --project /chemin/vers/ton-projet
```

Le skill sera copié dans :

```text
TON_PROJET/.claude/skills/premium-landing-page-designer/
```

## Utilisation

Dans Claude Code :

```text
/premium-landing-page-designer
```

Avec une demande complète :

```text
/premium-landing-page-designer Je veux construire une landing page premium pour ce produit cosmétique. Analyse les assets du projet, propose deux directions artistiques vraiment différentes, recommande la meilleure, puis implémente-la. Je veux une animation fluide, une interaction 3D utile, un excellent rendu mobile et une structure optimisée pour la conversion. N'invente aucun avis ni bénéfice non fourni.
```

Pour demander une amélioration :

```text
/premium-landing-page-designer Audite la landing page actuelle et améliore la direction artistique, la hiérarchie, les animations, le responsive et la conversion sans casser le panier existant.
```

## Audit des médias

Le script suivant signale les images, vidéos et fichiers 3D potentiellement trop lourds :

```bash
python3 scripts/audit_web_assets.py /chemin/vers/ton-projet
```

Les seuils peuvent être ajustés :

```bash
python3 scripts/audit_web_assets.py . --image-kb 500 --video-mb 4 --model-mb 3
```

## Fonctionnement du skill

Claude Code doit :

1. analyser le projet et les assets existants ;
2. comprendre le produit, l'audience, l'offre et le but de la page ;
3. créer une direction artistique cohérente ;
4. concevoir une narration de landing page orientée vente ;
5. construire d'abord une excellente version statique ;
6. ajouter ensuite le motion design et la 3D de façon contrôlée ;
7. créer des alternatives pour mobile, mouvement réduit et absence de WebGL ;
8. lancer les commandes de build, lint et type-check disponibles ;
9. livrer un compte rendu clair, sans résultat brut en JSON.
