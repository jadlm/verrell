# 📸 Guide d'ajout des images

## 📁 Où placer vos images ?

Vous avez **2 options** pour ajouter des images dans votre projet React :

### Option 1 : Dossier `public/images/` (Recommandé pour les images statiques)

**Avantages :**
- Accessibles directement via l'URL
- Pas besoin d'importer dans le code
- Idéal pour les images qui changent souvent

**Structure :**
```
public/
└── images/
    ├── hero/
    │   └── hero-bathroom.jpg
    ├── products/
    │   ├── douches/
    │   ├── robinets/
    │   └── equipements/
    ├── gallery/
    │   ├── salles-de-bain/
    │   ├── douches/
    │   ├── robinets/
    │   └── details/
    └── logo/
        └── logo.png
```

**Utilisation :**
```jsx
// Dans vos composants
<img src="/images/hero/hero-bathroom.jpg" alt="Salle de bain" />
```

---

### Option 2 : Dossier `src/assets/images/` (Recommandé pour les images importées)

**Avantages :**
- Optimisées par webpack lors du build
- Vérification des erreurs si l'image n'existe pas
- Meilleure performance

**Structure :**
```
src/
└── assets/
    └── images/
        ├── hero/
        ├── products/
        ├── gallery/
        └── logo/
```

**Utilisation :**
```jsx
// Import en haut du fichier
import heroImage from '../assets/images/hero/hero-bathroom.jpg';

// Utilisation
<img src={heroImage} alt="Salle de bain" />
```

---

## 🎯 Comment remplacer les images actuelles ?

### 1. Images Hero (Section d'accueil)

**Fichier :** `src/components/Hero.js`

**Ligne 17 :** Remplacez l'URL Unsplash par :
```jsx
backgroundImage: `url('/images/hero/hero-bathroom.jpg')`,
```

---

### 2. Images Produits

**Fichier :** `src/pages/ProductsPage.js`

**Lignes 15-67 :** Remplacez les URLs dans le tableau `products` :

```jsx
{
  id: 1,
  name: 'Douche Moderne Premium',
  category: 'douches',
  image: '/images/products/douches/douche-moderne.jpg', // ← Remplacez ici
  // ...
}
```

---

### 3. Images Galerie

**Fichier :** `src/pages/GalleryPage.js`

**Lignes 15-80 :** Remplacez les URLs dans le tableau `galleryImages` :

```jsx
{
  id: 1,
  src: '/images/gallery/salles-de-bain/salle-1.jpg', // ← Remplacez ici
  title: 'Salle de bain moderne',
  category: 'salles-de-bain',
}
```

---

## 📝 Exemple complet

### Étape 1 : Créer la structure de dossiers

Créez ces dossiers dans `public/` :
```
public/images/
├── hero/
├── products/
│   ├── douches/
│   ├── robinets/
│   └── equipements/
└── gallery/
    ├── salles-de-bain/
    ├── douches/
    ├── robinets/
    └── details/
```

### Étape 2 : Ajouter vos images

Placez vos images dans les dossiers correspondants :
- `public/images/hero/hero-bathroom.jpg`
- `public/images/products/douches/douche-1.jpg`
- `public/images/gallery/salles-de-bain/salle-1.jpg`
- etc.

### Étape 3 : Mettre à jour le code

Remplacez les URLs Unsplash par vos chemins locaux.

---

## 💡 Astuces

1. **Noms de fichiers :** Utilisez des noms descriptifs en minuscules avec des tirets :
   - ✅ `douche-moderne.jpg`
   - ❌ `Douche Moderne.jpg`

2. **Formats recommandés :**
   - JPG pour les photos
   - PNG pour les logos et images avec transparence
   - WebP pour une meilleure compression (optionnel)

3. **Tailles recommandées :**
   - Hero : 1920x1080px minimum
   - Produits : 800x600px
   - Galerie : 1200x800px

4. **Optimisation :** Compressez vos images avant de les ajouter pour améliorer les performances.

---

## 🔧 Fichier centralisé (Optionnel)

J'ai créé `src/utils/imagePaths.js` pour centraliser tous les chemins d'images. Vous pouvez l'utiliser ainsi :

```jsx
import { heroImages, productImages } from '../utils/imagePaths';

// Utilisation
<img src={heroImages.main} alt="Hero" />
```

