# 🔐 Guide d'Administration - Verrell

## Accès à l'interface Admin

### URL d'accès
```
https://votre-site.com/admin/login
```

### Identifiants par défaut
- **Nom d'utilisateur :** `admin`
- **Mot de passe :** `verrell2024`

⚠️ **Important :** Changez ces identifiants en production en modifiant les constantes dans `src/pages/AdminLogin.js`

---

## Fonctionnalités Admin

### 1. Gestion des Produits

#### Ajouter un produit
1. Cliquez sur le bouton **"Ajouter un produit"**
2. Remplissez tous les champs :
   - Nom du produit
   - Catégorie (Douches, Robinets, Équipements, Promotions)
   - Description courte et complète
   - **Prix en MAD (Dirham Marocain)** - Entrez uniquement le nombre (ex: 12990)
   - Spécifications techniques
   - Caractéristiques
   - URL de l'image

#### Modifier un produit
1. Cliquez sur l'icône **✏️ (Modifier)** dans la liste des produits
2. Modifiez les informations souhaitées
3. Cliquez sur **"Enregistrer"**

#### Supprimer un produit
1. Cliquez sur l'icône **🗑️ (Supprimer)** dans la liste des produits
2. Confirmez la suppression

### 2. Gestion des Prix en MAD

#### Format des prix
- Entrez uniquement le **nombre** dans le champ prix (ex: `12990`)
- Le système formate automatiquement en **MAD** (ex: `12 990 MAD`)
- Pour les promotions :
  - Prix actuel : prix en promotion
  - Prix original : prix avant réduction
  - Remise : pourcentage ou montant (ex: `-30%`)

#### Exemple de prix
```
Prix normal : 12990 → Affiche "12 990 MAD"
Prix promo : 9090 (original: 12990) → Affiche "9 090 MAD" avec "12 990 MAD" barré
```

### 3. Gestion des Images

#### Ajout d'images
1. Placez vos images dans le dossier `public/images/`
2. Dans l'admin, entrez le chemin relatif :
   - Exemple : `/images/mon-produit.jpg`
   - Exemple : `/images/douches/douche-premium.webp`

#### Formats recommandés
- **Format :** WebP (recommandé), JPG, PNG
- **Taille :** Optimisez vos images (max 500KB par image)
- **Dimensions :** 800x600px minimum pour une bonne qualité

#### Structure recommandée
```
public/
  images/
    produits/
      douches/
        douche-1.webp
        douche-2.webp
      robinets/
        robinet-1.webp
    exemple.webp
```

---

## Statistiques du Dashboard

Le dashboard affiche :
- **Total Produits** : Nombre total de produits
- **Produits en Promo** : Nombre de produits en promotion
- **Catégories** : Nombre de catégories différentes

---

## Stockage des Données

### LocalStorage
Les produits sont actuellement stockés dans le **localStorage** du navigateur.

⚠️ **Limitations :**
- Les données sont stockées localement (par navigateur)
- Pour un stockage permanent, il faudra intégrer une API/Base de données

### Migration future
Pour migrer vers une base de données :
1. Créez une API backend
2. Remplacez les appels `localStorage` par des appels API
3. Modifiez `src/utils/productService.js`

---

## Sécurité

### Recommandations
1. **Changez les identifiants** par défaut
2. **Utilisez HTTPS** en production
3. **Implémentez une authentification** plus robuste (JWT, OAuth)
4. **Ajoutez un rate limiting** pour éviter les abus
5. **Validez les données** côté serveur

---

## Support

Pour toute question ou problème :
1. Vérifiez la console du navigateur (F12)
2. Vérifiez que les images sont bien dans `public/images/`
3. Vérifiez le format des prix (nombres uniquement)

---

## Mise à jour des Produits

Les modifications sont **immédiatement visibles** sur le site public après sauvegarde dans l'admin.

**Note :** Les visiteurs doivent actualiser la page pour voir les changements.
