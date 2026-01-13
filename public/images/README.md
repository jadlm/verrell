# Dossier Images - Public

Ce dossier contient les images accessibles publiquement.

## Structure recommandée :

```
public/images/
├── hero/              # Images pour la section Hero
│   └── hero-bathroom.jpg
├── products/          # Images des produits
│   ├── douches/
│   ├── robinets/
│   └── equipements/
├── gallery/           # Images de la galerie
│   ├── salles-de-bain/
│   ├── douches/
│   ├── robinets/
│   └── details/
└── logo/              # Logo de l'entreprise
    └── logo.png
```

## Utilisation dans le code :

```jsx
// Dans un composant React
<img src="/images/hero/hero-bathroom.jpg" alt="Description" />
```

Les images dans `public/` sont accessibles directement via `/images/...`

