import React, { useState, useEffect, useCallback } from 'react';
import { useNavigate } from 'react-router-dom';
import { motion } from 'framer-motion';
import { 
  Package, 
  Image as ImageIcon, 
  DollarSign, 
  LogOut, 
  Plus, 
  Edit, 
  Trash2,
  Save,
  X
} from 'lucide-react';
import { formatPriceMAD } from '../utils/productService';

const AdminDashboard = () => {
  const navigate = useNavigate();
  const [products, setProducts] = useState([]);
  const [editingProduct, setEditingProduct] = useState(null);
  const [showAddForm, setShowAddForm] = useState(false);
  const [newProduct, setNewProduct] = useState({
    id: null,
    name: '',
    category: 'douches',
    description: '',
    fullDescription: '',
    price: '',
    originalPrice: '',
    discount: '',
    isPromo: false,
    image: '/images/exemple.webp',
    images: ['/images/exemple.webp', '/images/exemple.webp', '/images/exemple.webp'],
    features: [],
    specifications: {
      dimensions: '',
      matériau: '',
      finition: '',
      garantie: '',
      installation: '',
    },
    rating: 4.5,
    reviews: 0,
  });

  const loadProducts = useCallback(() => {
    const savedProducts = localStorage.getItem('adminProducts');
    if (savedProducts) {
      setProducts(JSON.parse(savedProducts));
    } else {
      // Charger les produits par défaut depuis ProductDetail
      const defaultProducts = getDefaultProducts();
      setProducts(defaultProducts);
      saveProducts(defaultProducts);
    }
  }, []);

  useEffect(() => {
    // Vérifier la session admin
    const adminSession = localStorage.getItem('adminSession');
    if (!adminSession) {
      navigate('/admin/login');
      return;
    }

    // Charger les produits depuis localStorage ou utiliser les produits par défaut
    loadProducts();
  }, [navigate, loadProducts]);

  const getDefaultProducts = () => {
    // Produits par défaut (même structure que ProductDetail)
    return [
      {
        id: 1,
        name: 'Douche Moderne Premium',
        category: 'douches',
        description: 'Design épuré et fonctionnel pour une expérience de douche premium. Finition chromée brillante.',
        fullDescription: 'Cette douche moderne premium allie esthétique et performance. Conçue avec les meilleurs matériaux, elle offre une expérience de douche exceptionnelle.',
        image: '/images/exemple.webp',
        images: ['/images/exemple.webp', '/images/exemple.webp', '/images/exemple.webp'],
        price: '12990',
        originalPrice: null,
        discount: null,
        isPromo: false,
        features: [
          'Finition chromée brillante',
          'Installation facile',
          'Garantie 5 ans',
          'Design européen',
          'Économie d\'eau',
          'Régulateur de température'
        ],
        specifications: {
          dimensions: '100 x 80 cm',
          matériau: 'Acier inoxydable',
          finition: 'Chrome brillant',
          garantie: '5 ans',
          installation: 'Murale',
        },
        rating: 4.8,
        reviews: 124,
      },
      {
        id: 2,
        name: 'Douche Rainshower',
        category: 'douches',
        description: 'Plaque de douche extra-large pour une sensation de pluie naturelle. Design minimaliste.',
        fullDescription: 'Plaque de douche extra-large pour une sensation de pluie naturelle. Design minimaliste.',
        image: '/images/exemple.webp',
        images: ['/images/exemple.webp', '/images/exemple.webp', '/images/exemple.webp'],
        price: '9890',
        originalPrice: null,
        discount: null,
        isPromo: false,
        features: [],
        specifications: {
          dimensions: '',
          matériau: '',
          finition: '',
          garantie: '',
          installation: '',
        },
        rating: 4.6,
        reviews: 89,
      },
      {
        id: 3,
        name: 'Robinet Design Chrome',
        category: 'robinets',
        description: 'Robinetterie haut de gamme alliant esthétique et performance. Finition chromée miroir.',
        fullDescription: 'Robinetterie haut de gamme alliant esthétique et performance. Finition chromée miroir.',
        image: '/images/exemple.webp',
        images: ['/images/exemple.webp', '/images/exemple.webp', '/images/exemple.webp'],
        price: '3840',
        originalPrice: null,
        discount: null,
        isPromo: false,
        features: [],
        specifications: {
          dimensions: '',
          matériau: '',
          finition: '',
          garantie: '',
          installation: '',
        },
        rating: 4.7,
        reviews: 112,
      },
      {
        id: 4,
        name: 'Robinet Évier Moderne',
        category: 'robinets',
        description: 'Robinet mitigeur avec bec haute portée. Design contemporain et fonctionnel.',
        fullDescription: 'Robinet mitigeur avec bec haute portée. Design contemporain et fonctionnel.',
        image: '/images/exemple.webp',
        images: ['/images/exemple.webp', '/images/exemple.webp', '/images/exemple.webp'],
        price: '3070',
        originalPrice: null,
        discount: null,
        isPromo: false,
        features: [],
        specifications: {
          dimensions: '',
          matériau: '',
          finition: '',
          garantie: '',
          installation: '',
        },
        rating: 4.5,
        reviews: 73,
      },
      {
        id: 5,
        name: 'Porte-serviettes Premium',
        category: 'equipements',
        description: 'Porte-serviettes chauffant design. Matériaux premium et finition élégante.',
        fullDescription: 'Porte-serviettes chauffant design. Matériaux premium et finition élégante.',
        image: '/images/exemple.webp',
        images: ['/images/exemple.webp', '/images/exemple.webp', '/images/exemple.webp'],
        price: '2190',
        originalPrice: null,
        discount: null,
        isPromo: false,
        features: [],
        specifications: {
          dimensions: '',
          matériau: '',
          finition: '',
          garantie: '',
          installation: '',
        },
        rating: 4.4,
        reviews: 41,
      },
      {
        id: 6,
        name: 'Miroir LED Intégré',
        category: 'equipements',
        description: 'Miroir avec éclairage LED intégré. Design épuré et fonctionnalité premium.',
        fullDescription: 'Miroir avec éclairage LED intégré. Design épuré et fonctionnalité premium.',
        image: '/images/exemple.webp',
        images: ['/images/exemple.webp', '/images/exemple.webp', '/images/exemple.webp'],
        price: '4940',
        originalPrice: null,
        discount: null,
        isPromo: false,
        features: [],
        specifications: {
          dimensions: '',
          matériau: '',
          finition: '',
          garantie: '',
          installation: '',
        },
        rating: 4.5,
        reviews: 58,
      },
      {
        id: 7,
        name: 'Douche Premium -30%',
        category: 'promo',
        description: 'Design épuré et fonctionnel pour une expérience de douche premium. Finition chromée brillante.',
        fullDescription: 'Design épuré et fonctionnel pour une expérience de douche premium. Finition chromée brillante.',
        image: '/images/exemple.webp',
        images: ['/images/exemple.webp', '/images/exemple.webp', '/images/exemple.webp'],
        price: '10000',
        originalPrice: '14290',
        discount: '-30%',
        isPromo: true,
        features: [],
        specifications: {
          dimensions: '',
          matériau: '',
          finition: '',
          garantie: '',
          installation: '',
        },
        rating: 4.8,
        reviews: 124,
      },
      {
        id: 8,
        name: 'Robinet Design -25%',
        category: 'promo',
        description: 'Robinetterie haut de gamme alliant esthétique et performance. Finition chromée miroir.',
        fullDescription: 'Robinetterie haut de gamme alliant esthétique et performance. Finition chromée miroir.',
        image: '/images/exemple.webp',
        images: ['/images/exemple.webp', '/images/exemple.webp', '/images/exemple.webp'],
        price: '2880',
        originalPrice: '3840',
        discount: '-25%',
        isPromo: true,
        features: [],
        specifications: {
          dimensions: '',
          matériau: '',
          finition: '',
          garantie: '',
          installation: '',
        },
        rating: 4.7,
        reviews: 112,
      },
      {
        id: 9,
        name: 'Pack Salle de bain -20%',
        category: 'promo',
        description: 'Pack complet pour équiper votre salle de bain avec style. Design moderne et fonctionnel.',
        fullDescription: 'Pack complet pour équiper votre salle de bain avec style. Design moderne et fonctionnel.',
        image: '/images/exemple.webp',
        images: ['/images/exemple.webp', '/images/exemple.webp', '/images/exemple.webp'],
        price: '7910',
        originalPrice: '9890',
        discount: '-20%',
        isPromo: true,
        features: [],
        specifications: {
          dimensions: '',
          matériau: '',
          finition: '',
          garantie: '',
          installation: '',
        },
        rating: 4.6,
        reviews: 89,
      },
      {
        id: 10,
        name: 'Douche Rainshower -15%',
        category: 'promo',
        description: 'Plaque de douche extra-large pour une sensation de pluie naturelle. Design minimaliste.',
        fullDescription: 'Plaque de douche extra-large pour une sensation de pluie naturelle. Design minimaliste.',
        image: '/images/exemple.webp',
        images: ['/images/exemple.webp', '/images/exemple.webp', '/images/exemple.webp'],
        price: '8400',
        originalPrice: '9890',
        discount: '-15%',
        isPromo: true,
        features: [],
        specifications: {
          dimensions: '',
          matériau: '',
          finition: '',
          garantie: '',
          installation: '',
        },
        rating: 4.6,
        reviews: 89,
      },
    ];
  };

  const saveProducts = (productsToSave) => {
    localStorage.setItem('adminProducts', JSON.stringify(productsToSave));
  };

  const handleLogout = () => {
    localStorage.removeItem('adminSession');
    localStorage.removeItem('adminLoginTime');
    navigate('/admin/login');
  };

  const handleEdit = (product) => {
    setEditingProduct({ ...product });
    setShowAddForm(false);
  };

  const handleDelete = (productId) => {
    if (window.confirm('Êtes-vous sûr de vouloir supprimer ce produit ?')) {
      const updatedProducts = products.filter(p => p.id !== productId);
      setProducts(updatedProducts);
      saveProducts(updatedProducts);
    }
  };

  const handleSave = () => {
    if (editingProduct) {
      // Modifier un produit existant
      const updatedProducts = products.map(p => 
        p.id === editingProduct.id ? editingProduct : p
      );
      setProducts(updatedProducts);
      saveProducts(updatedProducts);
      setEditingProduct(null);
    } else if (showAddForm) {
      // Ajouter un nouveau produit
      const newId = products.length > 0 ? Math.max(...products.map(p => p.id)) + 1 : 1;
      const productToAdd = {
        ...newProduct,
        id: newId,
        price: newProduct.price || '0',
      };
      const updatedProducts = [...products, productToAdd];
      setProducts(updatedProducts);
      saveProducts(updatedProducts);
      setShowAddForm(false);
      setNewProduct({
        id: null,
        name: '',
        category: 'douches',
        description: '',
        fullDescription: '',
        price: '',
        originalPrice: '',
        discount: '',
        isPromo: false,
        image: '/images/exemple.webp',
        images: ['/images/exemple.webp', '/images/exemple.webp', '/images/exemple.webp'],
        features: [],
        specifications: {
          dimensions: '',
          matériau: '',
          finition: '',
          garantie: '',
          installation: '',
        },
        rating: 4.5,
        reviews: 0,
      });
    }
  };

  return (
    <div className="min-h-screen bg-luxe-gray-soft pt-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {/* Header */}
        <div className="bg-white rounded-lg shadow-lg p-6 mb-6">
          <div className="flex justify-between items-center">
            <div>
              <h1 className="text-3xl font-display font-bold text-gray-800">Tableau de bord Admin</h1>
              <p className="text-gray-600 mt-2">Gérez vos produits et prix en MAD</p>
            </div>
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              onClick={handleLogout}
              className="flex items-center space-x-2 bg-red-500 text-white px-4 py-2 rounded-lg hover:bg-red-600 transition-colors"
            >
              <LogOut size={20} />
              <span>Déconnexion</span>
            </motion.button>
          </div>
        </div>

        {/* Stats */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-6">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="bg-white rounded-lg shadow-lg p-6"
          >
            <div className="flex items-center justify-between">
              <div>
                <p className="text-gray-600 text-sm">Total Produits</p>
                <p className="text-3xl font-bold text-luxe-gold mt-2">{products.length}</p>
              </div>
              <Package className="text-luxe-gold" size={40} />
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="bg-white rounded-lg shadow-lg p-6"
          >
            <div className="flex items-center justify-between">
              <div>
                <p className="text-gray-600 text-sm">Produits en Promo</p>
                <p className="text-3xl font-bold text-red-500 mt-2">
                  {products.filter(p => p.isPromo).length}
                </p>
              </div>
              <DollarSign className="text-red-500" size={40} />
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="bg-white rounded-lg shadow-lg p-6"
          >
            <div className="flex items-center justify-between">
              <div>
                <p className="text-gray-600 text-sm">Catégories</p>
                <p className="text-3xl font-bold text-luxe-gold mt-2">
                  {new Set(products.map(p => p.category)).size}
                </p>
              </div>
              <ImageIcon className="text-luxe-gold" size={40} />
            </div>
          </motion.div>
        </div>

        {/* Add Product Button */}
        <div className="mb-6">
          <motion.button
            whileHover={{ scale: 1.02 }}
            whileTap={{ scale: 0.98 }}
            onClick={() => {
              setShowAddForm(true);
              setEditingProduct(null);
            }}
            className="flex items-center space-x-2 bg-luxe-gold text-white px-6 py-3 rounded-lg font-semibold shadow-lg hover:shadow-xl transition-all"
          >
            <Plus size={20} />
            <span>Ajouter un produit</span>
          </motion.button>
        </div>

        {/* Products List */}
        <div className="bg-white rounded-lg shadow-lg overflow-hidden">
          <div className="overflow-x-auto">
            <table className="min-w-full divide-y divide-gray-200">
              <thead className="bg-luxe-gold/10">
                <tr>
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-700 uppercase tracking-wider">
                    Produit
                  </th>
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-700 uppercase tracking-wider">
                    Catégorie
                  </th>
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-700 uppercase tracking-wider">
                    Prix (MAD)
                  </th>
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-700 uppercase tracking-wider">
                    Promo
                  </th>
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-700 uppercase tracking-wider">
                    Actions
                  </th>
                </tr>
              </thead>
              <tbody className="bg-white divide-y divide-gray-200">
                {products.map((product) => (
                  <tr key={product.id} className="hover:bg-luxe-gray-soft transition-colors">
                    <td className="px-6 py-4 whitespace-nowrap">
                      <div className="text-sm font-medium text-gray-900">{product.name}</div>
                      <div className="text-sm text-gray-500 truncate max-w-xs">
                        {product.description}
                      </div>
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap">
                      <span className="px-2 py-1 text-xs font-semibold rounded-full bg-luxe-gold/10 text-luxe-gold capitalize">
                        {product.category}
                      </span>
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap">
                      <div className="text-sm font-semibold text-luxe-gold">
                        {formatPriceMAD(product.price)}
                      </div>
                      {product.isPromo && product.originalPrice && (
                        <div className="text-xs text-gray-400 line-through">
                          {formatPriceMAD(product.originalPrice)}
                        </div>
                      )}
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap">
                      {product.isPromo ? (
                        <span className="px-2 py-1 text-xs font-bold rounded-full bg-red-500 text-white">
                          {product.discount || 'PROMO'}
                        </span>
                      ) : (
                        <span className="text-gray-400">-</span>
                      )}
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap text-sm font-medium">
                      <div className="flex space-x-2">
                        <motion.button
                          whileHover={{ scale: 1.1 }}
                          whileTap={{ scale: 0.9 }}
                          onClick={() => handleEdit(product)}
                          className="text-luxe-gold hover:text-luxe-gold-dark"
                        >
                          <Edit size={18} />
                        </motion.button>
                        <motion.button
                          whileHover={{ scale: 1.1 }}
                          whileTap={{ scale: 0.9 }}
                          onClick={() => handleDelete(product.id)}
                          className="text-red-500 hover:text-red-700"
                        >
                          <Trash2 size={18} />
                        </motion.button>
                      </div>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>

        {/* Edit/Add Form Modal */}
        {(editingProduct || showAddForm) && (
          <ProductForm
            product={editingProduct || newProduct}
            setProduct={editingProduct ? setEditingProduct : setNewProduct}
            onSave={handleSave}
            onCancel={() => {
              setEditingProduct(null);
              setShowAddForm(false);
            }}
            isEditing={!!editingProduct}
          />
        )}
      </div>
    </div>
  );
};

// Composant formulaire pour éditer/ajouter un produit
const ProductForm = ({ product, setProduct, onSave, onCancel, isEditing }) => {
  const handleChange = (e) => {
    const { name, value, checked } = e.target;
    if (name.startsWith('specifications.')) {
      const specKey = name.split('.')[1];
      setProduct({
        ...product,
        specifications: {
          ...product.specifications,
          [specKey]: value,
        },
      });
    } else if (name === 'isPromo') {
      setProduct({
        ...product,
        [name]: checked,
      });
    } else {
      setProduct({
        ...product,
        [name]: value,
      });
    }
  };

  const handleFeatureChange = (index, value) => {
    const newFeatures = [...product.features];
    newFeatures[index] = value;
    setProduct({
      ...product,
      features: newFeatures,
    });
  };

  const addFeature = () => {
    setProduct({
      ...product,
      features: [...product.features, ''],
    });
  };

  const removeFeature = (index) => {
    const newFeatures = product.features.filter((_, i) => i !== index);
    setProduct({
      ...product,
      features: newFeatures,
    });
  };

  return (
    <div className="fixed inset-0 bg-black/50 flex items-center justify-center z-50 p-4">
      <motion.div
        initial={{ opacity: 0, scale: 0.9 }}
        animate={{ opacity: 1, scale: 1 }}
        className="bg-white rounded-lg shadow-2xl max-w-4xl w-full max-h-[90vh] overflow-y-auto"
      >
        <div className="sticky top-0 bg-luxe-gold text-white p-4 flex justify-between items-center">
          <h2 className="text-2xl font-display font-bold">
            {isEditing ? 'Modifier le produit' : 'Ajouter un produit'}
          </h2>
          <button onClick={onCancel} className="text-white hover:text-gray-200">
            <X size={24} />
          </button>
        </div>

        <div className="p-6 space-y-6">
          {/* Informations de base */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                Nom du produit *
              </label>
              <input
                type="text"
                name="name"
                value={product.name}
                onChange={handleChange}
                className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-luxe-gold focus:border-luxe-gold outline-none"
                required
              />
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                Catégorie *
              </label>
              <select
                name="category"
                value={product.category}
                onChange={handleChange}
                className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-luxe-gold focus:border-luxe-gold outline-none"
              >
                <option value="douches">Douches</option>
                <option value="robinets">Robinets</option>
                <option value="equipements">Équipements</option>
                <option value="promo">Promotions</option>
              </select>
            </div>
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">
              Description courte *
            </label>
            <textarea
              name="description"
              value={product.description}
              onChange={handleChange}
              rows="2"
              className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-luxe-gold focus:border-luxe-gold outline-none"
              required
            />
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">
              Description complète *
            </label>
            <textarea
              name="fullDescription"
              value={product.fullDescription}
              onChange={handleChange}
              rows="4"
              className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-luxe-gold focus:border-luxe-gold outline-none"
              required
            />
          </div>

          {/* Prix en MAD */}
          <div className="bg-luxe-gold/5 p-4 rounded-lg">
            <h3 className="font-semibold text-gray-800 mb-4">Prix en MAD (Dirham Marocain)</h3>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Prix (MAD) *
                </label>
                <input
                  type="number"
                  name="price"
                  value={product.price}
                  onChange={handleChange}
                  placeholder="12990"
                  className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-luxe-gold focus:border-luxe-gold outline-none"
                  required
                />
                <p className="text-xs text-gray-500 mt-1">
                  {product.price ? formatPriceMAD(product.price) : '0 MAD'}
                </p>
              </div>

              <div>
                <label className="flex items-center space-x-2 mb-2">
                  <input
                    type="checkbox"
                    name="isPromo"
                    checked={product.isPromo}
                    onChange={handleChange}
                    className="rounded"
                  />
                  <span className="text-sm font-medium text-gray-700">Produit en promotion</span>
                </label>
                {product.isPromo && (
                  <>
                    <input
                      type="number"
                      name="originalPrice"
                      value={product.originalPrice || ''}
                      onChange={handleChange}
                      placeholder="Prix original"
                      className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-luxe-gold focus:border-luxe-gold outline-none mb-2"
                    />
                    <input
                      type="text"
                      name="discount"
                      value={product.discount || ''}
                      onChange={handleChange}
                      placeholder="-30%"
                      className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-luxe-gold focus:border-luxe-gold outline-none"
                    />
                  </>
                )}
              </div>
            </div>
          </div>

          {/* Spécifications */}
          <div>
            <h3 className="font-semibold text-gray-800 mb-4">Spécifications techniques</h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {Object.keys(product.specifications).map((key) => (
                <div key={key}>
                  <label className="block text-sm font-medium text-gray-700 mb-2 capitalize">
                    {key.replace(/([A-Z])/g, ' $1').trim()}
                  </label>
                  <input
                    type="text"
                    name={`specifications.${key}`}
                    value={product.specifications[key]}
                    onChange={handleChange}
                    className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-luxe-gold focus:border-luxe-gold outline-none"
                  />
                </div>
              ))}
            </div>
          </div>

          {/* Caractéristiques */}
          <div>
            <h3 className="font-semibold text-gray-800 mb-4">Caractéristiques</h3>
            {product.features.map((feature, index) => (
              <div key={index} className="flex space-x-2 mb-2">
                <input
                  type="text"
                  value={feature}
                  onChange={(e) => handleFeatureChange(index, e.target.value)}
                  className="flex-1 px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-luxe-gold focus:border-luxe-gold outline-none"
                  placeholder={`Caractéristique ${index + 1}`}
                />
                <button
                  type="button"
                  onClick={() => removeFeature(index)}
                  className="px-4 py-2 bg-red-500 text-white rounded-lg hover:bg-red-600"
                >
                  <Trash2 size={18} />
                </button>
              </div>
            ))}
            <button
              type="button"
              onClick={addFeature}
              className="mt-2 px-4 py-2 bg-luxe-gold text-white rounded-lg hover:bg-luxe-gold-dark"
            >
              <Plus size={18} className="inline mr-2" />
              Ajouter une caractéristique
            </button>
          </div>

          {/* Image URL */}
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">
              URL de l'image principale
            </label>
            <input
              type="text"
              name="image"
              value={product.image}
              onChange={handleChange}
              placeholder="/images/exemple.webp"
              className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-luxe-gold focus:border-luxe-gold outline-none"
            />
            <p className="text-xs text-gray-500 mt-1">
              Placez vos images dans le dossier public/images/
            </p>
          </div>

          {/* Actions */}
          <div className="flex justify-end space-x-4 pt-4 border-t">
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              onClick={onCancel}
              className="px-6 py-2 border-2 border-gray-300 text-gray-700 rounded-lg hover:bg-gray-50"
            >
              Annuler
            </motion.button>
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              onClick={onSave}
              className="px-6 py-2 bg-luxe-gold text-white rounded-lg hover:bg-luxe-gold-dark flex items-center space-x-2"
            >
              <Save size={18} />
              <span>Enregistrer</span>
            </motion.button>
          </div>
        </div>
      </motion.div>
    </div>
  );
};

export default AdminDashboard;
