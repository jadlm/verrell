import React from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'framer-motion';
import { useRef } from 'react';
import { Link } from 'react-router-dom';
import { Tag, ArrowRight } from 'lucide-react';

// IDs des produits promo pour les liens
const promoProductIds = {
  1: 7, // Douche Premium -30%
  2: 8, // Robinet Design -25%
  3: 9, // Pack Salle de bain -20%
};

const PromoSection = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-100px' });

  const promoProducts = [
    {
      id: 1,
      name: 'Douche Premium -30%',
      originalPrice: '1 299€',
      promoPrice: '909€',
      discount: '-30%',
      description: 'Design épuré et fonctionnel pour une expérience de douche premium',
      image: '/images/exemple.webp',
    },
    {
      id: 2,
      name: 'Robinet Design -25%',
      originalPrice: '349€',
      promoPrice: '262€',
      discount: '-25%',
      description: 'Robinetterie haut de gamme alliant esthétique et performance',
      image: '/images/exemple.webp',
    },
    {
      id: 3,
      name: 'Pack Salle de bain -20%',
      originalPrice: '899€',
      promoPrice: '719€',
      discount: '-20%',
      description: 'Pack complet pour équiper votre salle de bain avec style',
      image: '/images/exemple.webp',
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
      ref={ref}
      className="py-24 bg-gradient-to-b from-luxe-gold/5 to-white relative overflow-hidden"
    >
      {/* Decorative elements */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-luxe-gold/5 rounded-full blur-3xl"></div>
      <div className="absolute bottom-0 left-0 w-96 h-96 bg-luxe-gold/5 rounded-full blur-3xl"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <div className="inline-flex items-center space-x-2 bg-luxe-gold/10 px-4 py-2 rounded-full mb-4">
            <Tag className="text-luxe-gold" size={20} />
            <span className="text-luxe-gold font-semibold">PROMOTIONS</span>
          </div>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-display font-bold text-gray-800 mb-4">
            Offres Spéciales
          </h2>
          <div className="w-24 h-1 bg-luxe-gold mx-auto mb-6"></div>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Profitez de nos promotions exclusives sur une sélection de produits premium
          </p>
        </motion.div>

        {/* Promo Products Grid */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate={isInView ? 'visible' : 'hidden'}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12"
        >
          {promoProducts.map((product) => (
            <motion.div
              key={product.id}
              variants={itemVariants}
              whileHover={{ y: -10, scale: 1.02 }}
              className="group relative bg-white rounded-lg overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-300"
            >
              {/* Promo Badge */}
              <div className="absolute top-4 right-4 z-20">
                <div className="bg-red-500 text-white px-4 py-2 rounded-full font-bold text-sm shadow-lg animate-pulse">
                  {product.discount}
                </div>
              </div>

              {/* Image */}
              <div className="relative h-64 overflow-hidden">
                <motion.img
                  src={product.image}
                  alt={product.name}
                  className="w-full h-full object-cover"
                  whileHover={{ scale: 1.1 }}
                  transition={{ duration: 0.4 }}
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
              </div>

              {/* Content */}
              <div className="p-4 sm:p-6">
                <h3 className="text-xl sm:text-2xl font-display font-semibold text-gray-800 mb-2 sm:mb-3 group-hover:text-luxe-gold transition-colors">
                  {product.name}
                </h3>
                <p className="text-sm sm:text-base text-gray-600 mb-3 sm:mb-4">{product.description}</p>
                
                {/* Prices */}
                <div className="flex flex-col sm:flex-row sm:items-center sm:space-x-4 space-y-1 sm:space-y-0 mb-3 sm:mb-4">
                  <span className="text-xl sm:text-2xl font-bold text-luxe-gold">
                    {product.promoPrice}
                  </span>
                  <span className="text-base sm:text-lg text-gray-400 line-through">
                    {product.originalPrice}
                  </span>
                </div>

                {/* CTA Button */}
                <Link to={`/produits/${promoProductIds[product.id] || 7}`}>
                  <motion.button
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    className="w-full bg-luxe-gold text-white px-6 py-3 rounded-lg font-semibold hover:bg-luxe-gold-dark transition-colors flex items-center justify-center space-x-2"
                  >
                    <span>Voir l'offre</span>
                    <ArrowRight size={18} />
                  </motion.button>
                </Link>
              </div>

              {/* Border effect */}
              <div className="absolute inset-0 border-2 border-luxe-gold rounded-lg opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none"></div>
            </motion.div>
          ))}
        </motion.div>

        {/* View All Link */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={isInView ? { opacity: 1 } : {}}
          transition={{ duration: 0.6, delay: 0.6 }}
          className="text-center"
        >
          <Link to="/produits?category=promo">
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="inline-flex items-center space-x-2 bg-white border-2 border-luxe-gold text-luxe-gold px-6 sm:px-8 py-3 sm:py-4 rounded-full font-semibold text-base sm:text-lg hover:bg-luxe-gold hover:text-white transition-all duration-300 shadow-lg"
            >
              <span>Voir toutes les promotions</span>
              <ArrowRight size={20} />
            </motion.button>
          </Link>
        </motion.div>
      </div>
    </section>
  );
};

export default PromoSection;

