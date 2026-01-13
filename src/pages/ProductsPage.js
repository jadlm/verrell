import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'framer-motion';
import { useRef } from 'react';
import { useSearchParams, Link } from 'react-router-dom';
import { Droplet, Sparkles, ShowerHead, Wrench, Tag } from 'lucide-react';

const ProductsPage = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-100px' });
  const [searchParams] = useSearchParams();
  const [selectedCategory, setSelectedCategory] = useState('all');

  // Initialize category from URL parameter
  useEffect(() => {
    const categoryParam = searchParams.get('category');
    if (categoryParam === 'promo') {
      setSelectedCategory('promo');
    }
  }, [searchParams]);

  const categories = [
    { id: 'all', name: 'Tous les produits', icon: Sparkles },
    { id: 'douches', name: 'Douches', icon: ShowerHead },
    { id: 'robinets', name: 'Robinets', icon: Droplet },
    { id: 'equipements', name: 'Équipements', icon: Wrench },
    { id: 'promo', name: 'Promotions', icon: Tag },
  ];

  const products = [
    {
      id: 1,
      name: 'Douche Moderne Premium',
      category: 'douches',
      description: 'Design épuré et fonctionnel pour une expérience de douche premium. Finition chromée brillante.',
      image: '/images/exemple.webp',
      price: 'À partir de 1 299€',
      isPromo: false,
    },
    {
      id: 2,
      name: 'Douche Rainshower',
      category: 'douches',
      description: 'Plaque de douche extra-large pour une sensation de pluie naturelle. Design minimaliste.',
      image: '/images/exemple.webp',
      price: 'À partir de 899€',
      isPromo: false,
    },
    {
      id: 3,
      name: 'Robinet Design Chrome',
      category: 'robinets',
      description: 'Robinetterie haut de gamme alliant esthétique et performance. Finition chromée miroir.',
      image: '/images/exemple.webp',
      price: 'À partir de 349€',
      isPromo: false,
    },
    {
      id: 4,
      name: 'Robinet Évier Moderne',
      category: 'robinets',
      description: 'Robinet mitigeur avec bec haute portée. Design contemporain et fonctionnel.',
      image: '/images/exemple.webp',
      price: 'À partir de 279€',
      isPromo: false,
    },
    {
      id: 5,
      name: 'Porte-serviettes Premium',
      category: 'equipements',
      description: 'Porte-serviettes chauffant design. Matériaux premium et finition élégante.',
      image: '/images/exemple.webp',
      price: 'À partir de 199€',
      isPromo: false,
    },
    {
      id: 6,
      name: 'Miroir LED Intégré',
      category: 'equipements',
      description: 'Miroir avec éclairage LED intégré. Design épuré et fonctionnalité premium.',
      image: '/images/exemple.webp',
      price: 'À partir de 449€',
      isPromo: false,
    },
    // Produits en promo
    {
      id: 7,
      name: 'Douche Premium -30%',
      category: 'douches',
      description: 'Design épuré et fonctionnel pour une expérience de douche premium. Finition chromée brillante.',
      image: '/images/exemple.webp',
      price: '909€',
      originalPrice: '1 299€',
      discount: '-30%',
      isPromo: true,
    },
    {
      id: 8,
      name: 'Robinet Design -25%',
      category: 'robinets',
      description: 'Robinetterie haut de gamme alliant esthétique et performance. Finition chromée miroir.',
      image: '/images/exemple.webp',
      price: '262€',
      originalPrice: '349€',
      discount: '-25%',
      isPromo: true,
    },
    {
      id: 9,
      name: 'Pack Salle de bain -20%',
      category: 'equipements',
      description: 'Pack complet pour équiper votre salle de bain avec style. Design moderne et fonctionnel.',
      image: '/images/exemple.webp',
      price: '719€',
      originalPrice: '899€',
      discount: '-20%',
      isPromo: true,
    },
    {
      id: 10,
      name: 'Douche Rainshower -15%',
      category: 'douches',
      description: 'Plaque de douche extra-large pour une sensation de pluie naturelle. Design minimaliste.',
      image: '/images/exemple.webp',
      price: '764€',
      originalPrice: '899€',
      discount: '-15%',
      isPromo: true,
    },
  ];

  const filteredProducts = selectedCategory === 'all' 
    ? products 
    : selectedCategory === 'promo'
    ? products.filter(product => product.isPromo === true)
    : products.filter(product => product.category === selectedCategory);

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.6,
      },
    },
  };

  return (
    <section ref={ref} className="py-24 bg-white min-h-screen">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-display font-bold text-gray-800 mb-4">
            Nos Produits
          </h1>
          <div className="w-24 h-1 bg-luxe-gold mx-auto mb-6"></div>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Découvrez notre sélection complète de produits premium pour votre salle de bain
          </p>
        </motion.div>

        {/* Category Filters */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="flex flex-wrap justify-center gap-4 mb-12"
        >
          {categories.map((category) => {
            const Icon = category.icon;
            return (
              <motion.button
                key={category.id}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                onClick={() => setSelectedCategory(category.id)}
                className={`flex items-center space-x-1 sm:space-x-2 px-3 sm:px-6 py-2 sm:py-3 rounded-full text-xs sm:text-base font-medium transition-all duration-300 ${
                  selectedCategory === category.id
                    ? 'bg-luxe-gold text-white shadow-lg'
                    : 'bg-luxe-gray-soft text-gray-700 hover:bg-luxe-gold/10'
                }`}
              >
                <Icon size={16} className="sm:w-5 sm:h-5" />
                <span>{category.name}</span>
              </motion.button>
            );
          })}
        </motion.div>

        {/* Products Grid */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate={isInView ? 'visible' : 'hidden'}
          key={selectedCategory}
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6 md:gap-8"
        >
          {filteredProducts.map((product) => (
            <motion.div
              key={product.id}
              variants={itemVariants}
              whileHover={{ y: -10 }}
              className="group relative bg-white rounded-lg overflow-hidden shadow-md hover:shadow-2xl transition-all duration-300"
            >
              <div className="relative h-64 overflow-hidden">
                <motion.img
                  src={product.image}
                  alt={product.name}
                  className="w-full h-full object-cover"
                  whileHover={{ scale: 1.1 }}
                  transition={{ duration: 0.4 }}
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                
                {/* Category Badge */}
                <div className="absolute top-4 left-4 bg-luxe-gold text-white px-3 py-1 rounded-full text-sm font-semibold">
                  {product.category === 'douches' ? 'Douche' : product.category === 'robinets' ? 'Robinet' : 'Équipement'}
                </div>
                
                {/* Promo Badge */}
                {product.isPromo && (
                  <div className="absolute top-4 right-4 bg-red-500 text-white px-4 py-2 rounded-full text-sm font-bold shadow-lg animate-pulse">
                    {product.discount}
                  </div>
                )}
              </div>
              <div className="p-4 sm:p-6">
                <h3 className="text-xl sm:text-2xl font-display font-semibold text-gray-800 mb-2 sm:mb-3 group-hover:text-luxe-gold transition-colors">
                  {product.name}
                </h3>
                <p className="text-sm sm:text-base text-gray-600 mb-3 sm:mb-4">{product.description}</p>
                <div className="flex items-center justify-between mb-4">
                  {product.isPromo ? (
                    <div className="flex flex-col">
                      <span className="text-2xl font-bold text-luxe-gold">
                        {product.price}
                      </span>
                      <span className="text-sm text-gray-400 line-through">
                        {product.originalPrice}
                      </span>
                    </div>
                  ) : (
                    <span className="text-luxe-gold font-bold text-lg">{product.price}</span>
                  )}
                  <Link to={`/produits/${product.id}`}>
                    <motion.button
                      whileHover={{ scale: 1.05 }}
                      whileTap={{ scale: 0.95 }}
                      className="text-luxe-gold font-semibold hover:underline flex items-center space-x-2"
                    >
                      <span>Détails</span>
                      <span>→</span>
                    </motion.button>
                  </Link>
                </div>
              </div>
              <div className="absolute inset-0 border-2 border-luxe-gold rounded-lg opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none"></div>
            </motion.div>
          ))}
        </motion.div>

        {filteredProducts.length === 0 && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            className="text-center py-12"
          >
            <p className="text-gray-600 text-lg">Aucun produit dans cette catégorie.</p>
          </motion.div>
        )}
      </div>
    </section>
  );
};

export default ProductsPage;

