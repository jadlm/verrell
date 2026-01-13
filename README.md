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

## 🌐 Déploiement sur GitHub Pages

### Prérequis
1. Avoir un compte GitHub
2. Créer un nouveau repository sur GitHub (ex: `virelle`)

### Étapes de déploiement

1. **Installer gh-pages** (déjà ajouté dans package.json) :
```bash
npm install
```

2. **Modifier la homepage dans `package.json`** :
   - Remplacez `VOTRE_USERNAME` par votre nom d'utilisateur GitHub
   - Remplacez `virelle` par le nom de votre repository
   - Exemple : `"homepage": "https://monusername.github.io/virelle"`

3. **Initialiser Git et pousser sur GitHub** (si pas déjà fait) :
```bash
git init
git add .
git commit -m "Initial commit"
git branch -M main
git remote add origin https://github.com/VOTRE_USERNAME/virelle.git
git push -u origin main
```

4. **Déployer sur GitHub Pages** :
```bash
npm run deploy
```

Cette commande va :
- Construire le site (`npm run build`)
- Créer une branche `gh-pages` avec les fichiers de build
- Pousser cette branche sur GitHub

5. **Activer GitHub Pages** :
   - Allez dans les **Settings** de votre repository GitHub
   - Dans la section **Pages**
   - Sélectionnez la source : **Deploy from a branch**
   - Choisissez la branche : **gh-pages** / **/ (root)**
   - Cliquez sur **Save**

6. **Votre site sera disponible à** :
   `https://VOTRE_USERNAME.github.io/virelle`

### Mise à jour du site

À chaque modification, exécutez simplement :
```bash
npm run deploy
```

### Note importante

Le site utilise `HashRouter` pour la compatibilité avec GitHub Pages. Les URLs seront donc :
- `https://votreusername.github.io/virelle/#/`
- `https://votreusername.github.io/virelle/#/produits`
- `https://votreusername.github.io/virelle/#/contact`
- etc.

Cela fonctionne parfaitement et ne nécessite aucune configuration serveur supplémentaire.
