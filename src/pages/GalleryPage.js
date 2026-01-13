import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { useInView } from 'framer-motion';
import { useRef } from 'react';
import { X, Filter } from 'lucide-react';

const GalleryPage = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-100px' });
  const [selectedImage, setSelectedImage] = useState(null);
  const [selectedCategory, setSelectedCategory] = useState('all');

  const categories = [
    { id: 'all', name: 'Toutes' },
    { id: 'douches', name: 'Douches' },
    { id: 'robinets', name: 'Robinets' },
    { id: 'salles-de-bain', name: 'Salles de bain' },
    { id: 'details', name: 'Détails' },
  ];

  const galleryImages = [
    {
      id: 1,
      src: '/images/exemple.webp',
      title: 'Salle de bain moderne',
      category: 'salles-de-bain',
    },
    {
      id: 2,
      src: '/images/exemple.webp',
      title: 'Douche premium',
      category: 'douches',
    },
    {
      id: 3,
      src: '/images/exemple.webp',
      title: 'Robinetterie élégante',
      category: 'robinets',
    },
    {
      id: 4,
      src: '/images/exemple.webp',
      title: 'Design épuré',
      category: 'salles-de-bain',
    },
    {
      id: 5,
      src: '/images/exemple.webp',
      title: 'Espace luxueux',
      category: 'salles-de-bain',
    },
    {
      id: 6,
      src: '/images/exemple.webp',
      title: 'Ambiance premium',
      category: 'salles-de-bain',
    },
    {
      id: 7,
      src: '/images/exemple.webp',
      title: 'Robinet design',
      category: 'robinets',
    },
    {
      id: 8,
      src: '/images/exemple.webp',
      title: 'Douche rainshower',
      category: 'douches',
    },
    {
      id: 9,
      src: '/images/exemple.webp',
      title: 'Détail finition',
      category: 'details',
    },
    {
      id: 10,
      src: '/images/exemple.webp',
      title: 'Installation complète',
      category: 'salles-de-bain',
    },
    {
      id: 11,
      src: '/images/exemple.webp',
      title: 'Robinet mitigeur',
      category: 'robinets',
    },
    {
      id: 12,
      src: '/images/exemple.webp',
      title: 'Douche moderne',
      category: 'douches',
    },
  ];

  const filteredImages = selectedCategory === 'all'
    ? galleryImages
    : galleryImages.filter(img => img.category === selectedCategory);

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.05,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, scale: 0.8 },
    visible: {
      opacity: 1,
      scale: 1,
      transition: {
        duration: 0.5,
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
            Galerie Showroom
          </h1>
          <div className="w-24 h-1 bg-luxe-gold mx-auto mb-6"></div>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Découvrez nos réalisations et l'élégance de nos produits en situation
          </p>
        </motion.div>

        {/* Category Filters */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="flex flex-wrap justify-center items-center gap-2 sm:gap-4 mb-8 sm:mb-12"
        >
          <Filter className="text-luxe-gold" size={20} />
          {categories.map((category) => (
            <motion.button
              key={category.id}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              onClick={() => setSelectedCategory(category.id)}
              className={`px-3 sm:px-6 py-1.5 sm:py-2 rounded-full text-xs sm:text-base font-medium transition-all duration-300 ${
                selectedCategory === category.id
                  ? 'bg-luxe-gold text-white shadow-lg'
                  : 'bg-luxe-gray-soft text-gray-700 hover:bg-luxe-gold/10'
              }`}
            >
              {category.name}
            </motion.button>
          ))}
        </motion.div>

        {/* Gallery Grid */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate={isInView ? 'visible' : 'hidden'}
          key={selectedCategory}
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4"
        >
          <AnimatePresence mode="popLayout">
            {filteredImages.map((image) => (
              <motion.div
                key={image.id}
                layout
                variants={itemVariants}
                exit={{ opacity: 0, scale: 0.8 }}
                whileHover={{ scale: 1.05 }}
                onClick={() => setSelectedImage(image)}
                className="relative h-64 md:h-80 overflow-hidden rounded-lg cursor-pointer group"
              >
                <motion.img
                  src={image.src}
                  alt={image.title}
                  className="w-full h-full object-cover"
                  whileHover={{ scale: 1.1 }}
                  transition={{ duration: 0.4 }}
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                <div className="absolute inset-0 border-4 border-luxe-gold opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                <div className="absolute bottom-0 left-0 right-0 p-4 transform translate-y-4 group-hover:translate-y-0 transition-transform duration-300 opacity-0 group-hover:opacity-100">
                  <div className="flex items-center justify-between">
                    <h3 className="text-white font-semibold text-lg">{image.title}</h3>
                    <span className="text-luxe-gold text-sm font-medium capitalize">
                      {image.category.replace('-', ' ')}
                    </span>
                  </div>
                </div>
              </motion.div>
            ))}
          </AnimatePresence>
        </motion.div>

        {filteredImages.length === 0 && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            className="text-center py-12"
          >
            <p className="text-gray-600 text-lg">Aucune image dans cette catégorie.</p>
          </motion.div>
        )}
      </div>

      {/* Lightbox */}
      <AnimatePresence>
        {selectedImage && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setSelectedImage(null)}
            className="fixed inset-0 z-50 bg-black/95 flex items-center justify-center p-4"
          >
            <motion.div
              initial={{ scale: 0.8, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.8, opacity: 0 }}
              className="relative max-w-6xl max-h-[90vh]"
              onClick={(e) => e.stopPropagation()}
            >
              <img
                src={selectedImage.src}
                alt={selectedImage.title}
                className="max-w-full max-h-[90vh] object-contain rounded-lg"
              />
              <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/80 to-transparent p-6 rounded-b-lg">
                <h3 className="text-white text-2xl font-semibold mb-2">{selectedImage.title}</h3>
                <span className="text-luxe-gold text-sm font-medium capitalize">
                  {selectedImage.category.replace('-', ' ')}
                </span>
              </div>
              <button
                onClick={() => setSelectedImage(null)}
                className="absolute top-4 right-4 bg-white/20 hover:bg-white/30 text-white p-3 rounded-full transition-colors"
              >
                <X size={24} />
              </button>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
};

export default GalleryPage;

