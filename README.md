# Verrell - Site Vitrine Premium

Site vitrine moderne et élégant pour une entreprise spécialisée dans la vente de douches, robinets et équipements de salle de bain.

## 🎨 Caractéristiques

- **Design premium** : Style luxe, moderne et épuré
- **Animations fluides** : Utilisation de Framer Motion pour des transitions élégantes
- **100% Responsive** : Optimisé pour desktop, tablette et mobile
- **Palette de couleurs** : Blanc, or élégant, gris doux
- **Composants React** : Architecture modulaire et maintenable

## 🚀 Technologies

- React 18.2.0
- Tailwind CSS 3.3.6
- Framer Motion 10.16.16
- Lucide React (icônes)

## 📦 Installation

1. Installer les dépendances :
```bash
npm install
```

2. Lancer le serveur de développement :
```bash
npm start
```

3. Ouvrir [http://localhost:3000](http://localhost:3000) dans votre navigateur

## 🏗️ Structure du projet

```
src/
├── components/
│   ├── Navbar.js       # Navigation avec menu animé
│   ├── Hero.js         # Section hero avec effet visuel
│   ├── Products.js     # Section produits avec cartes
│   ├── About.js        # Section à propos
│   ├── Gallery.js      # Galerie showroom
│   ├── Advantages.js   # Section avantages
│   ├── Contact.js      # Formulaire de contact
│   └── Footer.js       # Footer élégant
├── App.js              # Composant principal
├── index.js            # Point d'entrée
└── index.css           # Styles globaux
```

## 🎯 Sections du site

1. **Navbar** : Navigation fixe avec animations au scroll
2. **Hero** : Section d'accueil avec image de fond et CTA
3. **Produits** : Cartes produits avec effets hover
4. **À propos** : Présentation de l'entreprise et valeurs
5. **Galerie** : Showroom avec lightbox
6. **Avantages** : Points forts de l'entreprise
7. **Contact** : Formulaire de contact élégant
8. **Footer** : Pied de page avec liens et réseaux sociaux

## 🎨 Personnalisation

Les couleurs peuvent être modifiées dans `tailwind.config.js` :
- `luxe-gold` : Couleur principale dorée
- `luxe-gray-soft` : Gris doux pour les fonds

## 📱 Responsive

Le site est entièrement responsive avec des breakpoints pour :
- Mobile (< 768px)
- Tablette (768px - 1024px)
- Desktop (> 1024px)

## 🚀 Build pour production

```bash
npm run build
```

Les fichiers optimisés seront générés dans le dossier `build/`.

