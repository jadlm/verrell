# Dossier Images - Assets

Ce dossier contient les images importées dans les composants.

## Structure recommandée :

```
src/assets/images/
├── hero/
├── products/
├── gallery/
└── logo/
```

## Utilisation dans le code :

```jsx
// Import de l'image
import heroImage from '../assets/images/hero/hero-bathroom.jpg';

// Utilisation
<img src={heroImage} alt="Description" />
```

Les images importées sont optimisées par webpack lors du build.

