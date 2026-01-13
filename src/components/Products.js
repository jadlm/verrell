import React from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'framer-motion';
import { useRef } from 'react';
import { Link } from 'react-router-dom';
import { Droplet, Sparkles } from 'lucide-react';

// IDs des produits pour les liens (à adapter selon votre base de données)
const productIds = {
  1: 1, // Douches Modernes
  2: 3, // Robinets Design
  3: 5, // Équipements Premium
};

const Products = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-100px' });

  const products = [
    {
      id: 1,
      name: 'Douches Modernes',
      description: 'Design épuré et fonctionnel pour une expérience de douche premium',
      image: '/images/exemple.webp',
      icon: Droplet,
    },
    {
      id: 2,
      name: 'Robinets Design',
      description: 'Robinetterie haut de gamme alliant esthétique et performance',
      image: '/images/exemple.webp',
      icon: Sparkles,
    },
    {
      id: 3,
      name: 'Équipements Premium',
      description: 'Accessoires et équipements pour compléter votre salle de bain',
      image: '/images/exemple.webp',
      icon: Droplet,
    },
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
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
    <section
      id="products"
      ref={ref}
      className="py-24 bg-white"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-display font-bold text-gray-800 mb-4">
            Nos Collections
          </h2>
          <div className="w-24 h-1 bg-luxe-gold mx-auto mb-6"></div>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Découvrez notre sélection de produits premium pour transformer votre salle de bain
          </p>
        </motion.div>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate={isInView ? 'visible' : 'hidden'}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
        >
          {products.map((product) => {
            const Icon = product.icon;
            return (
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
                  <div className="absolute top-4 right-4 bg-luxe-gold/90 p-3 rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                    <Icon className="text-white" size={24} />
                  </div>
                </div>
                <div className="p-6">
                  <h3 className="text-2xl font-display font-semibold text-gray-800 mb-3 group-hover:text-luxe-gold transition-colors">
                    {product.name}
                  </h3>
                  <p className="text-gray-600 mb-4">{product.description}</p>
                  <Link to={`/produits/${productIds[product.id] || 1}`}>
                    <motion.button
                      whileHover={{ scale: 1.05 }}
                      whileTap={{ scale: 0.95 }}
                      className="text-luxe-gold font-semibold hover:underline flex items-center space-x-2"
                    >
                      <span>En savoir plus</span>
                      <span>→</span>
                    </motion.button>
                  </Link>
                </div>
                <div className="absolute inset-0 border-2 border-luxe-gold rounded-lg opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none"></div>
              </motion.div>
            );
          })}
        </motion.div>
      </div>
    </section>
  );
};

export default Products;

