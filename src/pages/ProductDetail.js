import React from 'react';
import { useParams, useNavigate, Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { ArrowLeft, Check, Star, ShoppingCart, Heart } from 'lucide-react';

const ProductDetail = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const [selectedImage, setSelectedImage] = React.useState(0);

  // Base de données des produits (en production, cela viendrait d'une API)
  const productsDatabase = {
    1: {
      id: 1,
      name: 'Douche Moderne Premium',
      category: 'douches',
      description: 'Design épuré et fonctionnel pour une expérience de douche premium. Finition chromée brillante.',
      fullDescription: 'Cette douche moderne premium allie esthétique et performance. Conçue avec les meilleurs matériaux, elle offre une expérience de douche exceptionnelle. La finition chromée brillante apporte une touche d\'élégance à votre salle de bain.',
      image: '/images/exemple.webp',
      images: ['/images/exemple.webp', '/images/exemple.webp', '/images/exemple.webp'],
      price: '1 299€',
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
    2: {
      id: 2,
      name: 'Douche Rainshower',
      category: 'douches',
      description: 'Plaque de douche extra-large pour une sensation de pluie naturelle. Design minimaliste.',
      fullDescription: 'Profitez d\'une expérience de douche unique avec cette plaque rainshower extra-large. Le design minimaliste s\'intègre parfaitement dans tous les styles de salle de bain. La technologie de pluie naturelle offre un confort incomparable.',
      image: '/images/exemple.webp',
      images: ['/images/exemple.webp', '/images/exemple.webp', '/images/exemple.webp'],
      price: '899€',
      originalPrice: null,
      discount: null,
      isPromo: false,
      features: [
        'Plaque extra-large 80x80cm',
        'Effet pluie naturelle',
        'Design minimaliste',
        'Installation simple',
        'Garantie 3 ans',
        'Économie d\'eau'
      ],
      specifications: {
        dimensions: '80 x 80 cm',
        matériau: 'Acier inoxydable',
        finition: 'Chrome mat',
        garantie: '3 ans',
        installation: 'Plafond',
      },
      rating: 4.6,
      reviews: 89,
    },
    3: {
      id: 3,
      name: 'Robinet Design Chrome',
      category: 'robinets',
      description: 'Robinetterie haut de gamme alliant esthétique et performance. Finition chromée miroir.',
      fullDescription: 'Ce robinet design allie esthétique moderne et performance exceptionnelle. La finition chromée miroir apporte une touche de luxe à votre salle de bain. Conçu pour durer, il résiste à l\'usure et aux taches.',
      image: '/images/exemple.webp',
      images: ['/images/exemple.webp', '/images/exemple.webp', '/images/exemple.webp'],
      price: '349€',
      originalPrice: null,
      discount: null,
      isPromo: false,
      features: [
        'Finition chromée miroir',
        'Mitigeur thermostatique',
        'Économie d\'eau',
        'Design contemporain',
        'Garantie 5 ans',
        'Facile à entretenir'
      ],
      specifications: {
        dimensions: '15 x 25 cm',
        matériau: 'Laiton chromé',
        finition: 'Chrome miroir',
        garantie: '5 ans',
        installation: 'Évier/Lavabo',
      },
      rating: 4.9,
      reviews: 203,
    },
    4: {
      id: 4,
      name: 'Robinet Évier Moderne',
      category: 'robinets',
      description: 'Robinet mitigeur avec bec haute portée. Design contemporain et fonctionnel.',
      fullDescription: 'Robinet mitigeur moderne avec bec haute portée pour plus de confort. Le design contemporain s\'adapte à tous les styles. Facile à utiliser et à entretenir.',
      image: '/images/exemple.webp',
      images: ['/images/exemple.webp', '/images/exemple.webp', '/images/exemple.webp'],
      price: '279€',
      originalPrice: null,
      discount: null,
      isPromo: false,
      features: [
        'Bec haute portée',
        'Mitigeur moderne',
        'Design contemporain',
        'Installation facile',
        'Garantie 3 ans',
        'Résistant aux taches'
      ],
      specifications: {
        dimensions: '20 x 30 cm',
        matériau: 'Laiton chromé',
        finition: 'Chrome brillant',
        garantie: '3 ans',
        installation: 'Évier',
      },
      rating: 4.7,
      reviews: 156,
    },
    5: {
      id: 5,
      name: 'Porte-serviettes Premium',
      category: 'equipements',
      description: 'Porte-serviettes chauffant design. Matériaux premium et finition élégante.',
      fullDescription: 'Porte-serviettes chauffant premium pour un confort optimal. Les matériaux de qualité supérieure garantissent une longue durée de vie. La finition élégante s\'intègre parfaitement dans votre salle de bain.',
      image: '/images/exemple.webp',
      images: ['/images/exemple.webp', '/images/exemple.webp', '/images/exemple.webp'],
      price: '199€',
      originalPrice: null,
      discount: null,
      isPromo: false,
      features: [
        'Chauffage intégré',
        'Design élégant',
        'Matériaux premium',
        'Installation murale',
        'Garantie 2 ans',
        'Économie d\'énergie'
      ],
      specifications: {
        dimensions: '60 x 20 cm',
        matériau: 'Acier inoxydable',
        finition: 'Chrome',
        garantie: '2 ans',
        installation: 'Murale',
      },
      rating: 4.5,
      reviews: 78,
    },
    6: {
      id: 6,
      name: 'Miroir LED Intégré',
      category: 'equipements',
      description: 'Miroir avec éclairage LED intégré. Design épuré et fonctionnalité premium.',
      fullDescription: 'Miroir LED intégré pour un éclairage optimal de votre salle de bain. Le design épuré et moderne s\'adapte à tous les styles. Les LED offrent un éclairage doux et uniforme.',
      image: '/images/exemple.webp',
      images: ['/images/exemple.webp', '/images/exemple.webp', '/images/exemple.webp'],
      price: '449€',
      originalPrice: null,
      discount: null,
      isPromo: false,
      features: [
        'Éclairage LED intégré',
        'Design épuré',
        'Anti-buée',
        'Installation facile',
        'Garantie 3 ans',
        'Économie d\'énergie'
      ],
      specifications: {
        dimensions: '80 x 60 cm',
        matériau: 'Verre trempé',
        finition: 'Chrome',
        garantie: '3 ans',
        installation: 'Murale',
      },
      rating: 4.8,
      reviews: 142,
    },
    7: {
      id: 7,
      name: 'Douche Premium -30%',
      category: 'douches',
      description: 'Design épuré et fonctionnel pour une expérience de douche premium. Finition chromée brillante.',
      fullDescription: 'Cette douche moderne premium allie esthétique et performance. Conçue avec les meilleurs matériaux, elle offre une expérience de douche exceptionnelle. En promotion limitée !',
      image: '/images/exemple.webp',
      images: ['/images/exemple.webp', '/images/exemple.webp', '/images/exemple.webp'],
      price: '909€',
      originalPrice: '1 299€',
      discount: '-30%',
      isPromo: true,
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
    8: {
      id: 8,
      name: 'Robinet Design -25%',
      category: 'robinets',
      description: 'Robinetterie haut de gamme alliant esthétique et performance. Finition chromée miroir.',
      fullDescription: 'Ce robinet design allie esthétique moderne et performance exceptionnelle. La finition chromée miroir apporte une touche de luxe à votre salle de bain. Promotion spéciale !',
      image: '/images/exemple.webp',
      images: ['/images/exemple.webp', '/images/exemple.webp', '/images/exemple.webp'],
      price: '262€',
      originalPrice: '349€',
      discount: '-25%',
      isPromo: true,
      features: [
        'Finition chromée miroir',
        'Mitigeur thermostatique',
        'Économie d\'eau',
        'Design contemporain',
        'Garantie 5 ans',
        'Facile à entretenir'
      ],
      specifications: {
        dimensions: '15 x 25 cm',
        matériau: 'Laiton chromé',
        finition: 'Chrome miroir',
        garantie: '5 ans',
        installation: 'Évier/Lavabo',
      },
      rating: 4.9,
      reviews: 203,
    },
    9: {
      id: 9,
      name: 'Pack Salle de bain -20%',
      category: 'equipements',
      description: 'Pack complet pour équiper votre salle de bain avec style. Design moderne et fonctionnel.',
      fullDescription: 'Pack complet incluant tous les équipements essentiels pour votre salle de bain. Design moderne et cohérent pour un rendu professionnel. Économisez avec ce pack promotionnel !',
      image: '/images/exemple.webp',
      images: ['/images/exemple.webp', '/images/exemple.webp', '/images/exemple.webp'],
      price: '719€',
      originalPrice: '899€',
      discount: '-20%',
      isPromo: true,
      features: [
        'Pack complet',
        'Design cohérent',
        'Installation incluse',
        'Garantie 3 ans',
        'Économie importante',
        'Livraison gratuite'
      ],
      specifications: {
        dimensions: 'Variable',
        matériau: 'Multi-matériaux',
        finition: 'Chrome',
        garantie: '3 ans',
        installation: 'Complète',
      },
      rating: 4.7,
      reviews: 95,
    },
    10: {
      id: 10,
      name: 'Douche Rainshower -15%',
      category: 'douches',
      description: 'Plaque de douche extra-large pour une sensation de pluie naturelle. Design minimaliste.',
      fullDescription: 'Profitez d\'une expérience de douche unique avec cette plaque rainshower extra-large. Le design minimaliste s\'intègre parfaitement dans tous les styles de salle de bain. En promotion !',
      image: '/images/exemple.webp',
      images: ['/images/exemple.webp', '/images/exemple.webp', '/images/exemple.webp'],
      price: '764€',
      originalPrice: '899€',
      discount: '-15%',
      isPromo: true,
      features: [
        'Plaque extra-large 80x80cm',
        'Effet pluie naturelle',
        'Design minimaliste',
        'Installation simple',
        'Garantie 3 ans',
        'Économie d\'eau'
      ],
      specifications: {
        dimensions: '80 x 80 cm',
        matériau: 'Acier inoxydable',
        finition: 'Chrome mat',
        garantie: '3 ans',
        installation: 'Plafond',
      },
      rating: 4.6,
      reviews: 89,
    },
  };

  const product = productsDatabase[parseInt(id)];

  if (!product) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="text-center">
          <h1 className="text-4xl font-bold text-gray-800 mb-4">Produit non trouvé</h1>
          <Link to="/produits" className="text-luxe-gold hover:underline">
            Retour aux produits
          </Link>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-white pt-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        {/* Breadcrumb */}
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          className="mb-6 md:mb-8"
        >
          <div className="flex items-center space-x-2 text-xs sm:text-sm text-gray-600 flex-wrap">
            <Link to="/" className="hover:text-luxe-gold">Accueil</Link>
            <span>/</span>
            <Link to="/produits" className="hover:text-luxe-gold">Produits</Link>
            <span>/</span>
            <span className="text-gray-800 truncate max-w-[150px] sm:max-w-none">{product.name}</span>
          </div>
        </motion.div>

        {/* Back Button */}
        <motion.button
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          onClick={() => navigate(-1)}
          className="flex items-center space-x-2 text-gray-600 hover:text-luxe-gold mb-8 transition-colors"
        >
          <ArrowLeft size={20} />
          <span>Retour</span>
        </motion.button>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 md:gap-12 mb-12 md:mb-16">
          {/* Images Gallery */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
          >
            <div className="mb-4">
              <motion.img
                key={selectedImage}
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                src={product.images[selectedImage]}
                alt={product.name}
                className="w-full h-64 sm:h-80 md:h-96 object-cover rounded-lg shadow-lg"
              />
            </div>
            <div className="grid grid-cols-4 gap-2 sm:gap-4">
              {product.images.map((img, index) => (
                <motion.button
                  key={index}
                  onClick={() => setSelectedImage(index)}
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className={`h-16 sm:h-20 rounded-lg overflow-hidden ${
                    selectedImage === index ? 'ring-2 ring-luxe-gold' : ''
                  }`}
                >
                  <img
                    src={img}
                    alt={`${product.name} ${index + 1}`}
                    className="w-full h-full object-cover"
                  />
                </motion.button>
              ))}
            </div>
          </motion.div>

          {/* Product Info */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
          >
            {/* Category Badge */}
            <div className="mb-4 flex flex-wrap items-center gap-2">
              <span className="inline-block bg-luxe-gold/10 text-luxe-gold px-3 sm:px-4 py-1.5 sm:py-2 rounded-full text-xs sm:text-sm font-semibold capitalize">
                {product.category === 'douches' ? 'Douche' : product.category === 'robinets' ? 'Robinet' : 'Équipement'}
              </span>
              {product.isPromo && (
                <span className="inline-block bg-red-500 text-white px-3 sm:px-4 py-1.5 sm:py-2 rounded-full text-xs sm:text-sm font-bold">
                  {product.discount} PROMO
                </span>
              )}
            </div>

            {/* Title */}
            <h1 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-display font-bold text-gray-800 mb-4">
              {product.name}
            </h1>

            {/* Rating */}
            <div className="flex items-center space-x-2 mb-4 sm:mb-6 flex-wrap">
              <div className="flex items-center">
                {[...Array(5)].map((_, i) => (
                  <Star
                    key={i}
                    size={18}
                    className={`sm:w-5 sm:h-5 ${
                      i < Math.floor(product.rating) ? 'text-yellow-400 fill-current' : 'text-gray-300'
                    }`}
                  />
                ))}
              </div>
              <span className="text-sm sm:text-base text-gray-600">
                {product.rating} ({product.reviews} avis)
              </span>
            </div>

            {/* Price */}
            <div className="mb-6">
              {product.isPromo ? (
                <div className="flex flex-col sm:flex-row sm:items-center sm:space-x-4 space-y-1 sm:space-y-0">
                  <span className="text-3xl sm:text-4xl font-bold text-luxe-gold">{product.price}</span>
                  <span className="text-xl sm:text-2xl text-gray-400 line-through">{product.originalPrice}</span>
                </div>
              ) : (
                <span className="text-3xl sm:text-4xl font-bold text-luxe-gold">{product.price}</span>
              )}
            </div>

            {/* Description */}
            <div className="mb-6 md:mb-8">
              <h2 className="text-xl sm:text-2xl font-display font-semibold text-gray-800 mb-3 sm:mb-4">Description</h2>
              <p className="text-sm sm:text-base text-gray-600 leading-relaxed">{product.fullDescription}</p>
            </div>

            {/* Features */}
            <div className="mb-6 md:mb-8">
              <h2 className="text-xl sm:text-2xl font-display font-semibold text-gray-800 mb-3 sm:mb-4">Caractéristiques</h2>
              <ul className="grid grid-cols-1 md:grid-cols-2 gap-2 sm:gap-3">
                {product.features.map((feature, index) => (
                  <motion.li
                    key={index}
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: index * 0.1 }}
                    className="flex items-start sm:items-center space-x-2 text-sm sm:text-base text-gray-600"
                  >
                    <Check className="text-luxe-gold flex-shrink-0 mt-0.5 sm:mt-0" size={18} />
                    <span>{feature}</span>
                  </motion.li>
                ))}
              </ul>
            </div>

            {/* Specifications */}
            <div className="mb-6 md:mb-8 bg-luxe-gray-soft p-4 sm:p-6 rounded-lg">
              <h2 className="text-xl sm:text-2xl font-display font-semibold text-gray-800 mb-3 sm:mb-4">Spécifications techniques</h2>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 sm:gap-4">
                {Object.entries(product.specifications).map(([key, value]) => (
                  <div key={key} className="flex flex-col sm:block">
                    <span className="text-xs sm:text-sm text-gray-500 capitalize">{key.replace(/([A-Z])/g, ' $1').trim()}:</span>
                    <span className="ml-0 sm:ml-2 text-sm sm:text-base text-gray-800 font-medium block sm:inline">{value}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Action Buttons */}
            <div className="flex flex-col sm:flex-row gap-3 sm:gap-4">
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="flex-1 bg-luxe-gold text-white px-6 sm:px-8 py-3 sm:py-4 rounded-lg font-semibold text-base sm:text-lg shadow-lg hover:shadow-xl transition-all duration-300 flex items-center justify-center space-x-2"
              >
                <ShoppingCart size={18} className="sm:w-5 sm:h-5" />
                <span>Ajouter au panier</span>
              </motion.button>
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="px-6 sm:px-8 py-3 sm:py-4 border-2 border-luxe-gold text-luxe-gold rounded-lg font-semibold hover:bg-luxe-gold hover:text-white transition-all duration-300 flex items-center justify-center"
              >
                <Heart size={18} className="sm:w-5 sm:h-5" />
              </motion.button>
            </div>
          </motion.div>
        </div>

        {/* Related Products Section */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3 }}
          className="mt-12 sm:mt-16"
        >
          <h2 className="text-2xl sm:text-3xl font-display font-bold text-gray-800 mb-6 sm:mb-8">Produits similaires</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4 sm:gap-6">
            {Object.values(productsDatabase)
              .filter(p => p.category === product.category && p.id !== product.id)
              .slice(0, 3)
              .map((relatedProduct) => (
                <Link key={relatedProduct.id} to={`/produits/${relatedProduct.id}`}>
                  <motion.div
                    whileHover={{ y: -5 }}
                    className="bg-white rounded-lg overflow-hidden shadow-md hover:shadow-xl transition-all duration-300"
                  >
                    <img
                      src={relatedProduct.image}
                      alt={relatedProduct.name}
                      className="w-full h-48 object-cover"
                    />
                    <div className="p-3 sm:p-4">
                      <h3 className="text-sm sm:text-base font-semibold text-gray-800 mb-2">{relatedProduct.name}</h3>
                      <p className="text-sm sm:text-base text-luxe-gold font-bold">{relatedProduct.price}</p>
                    </div>
                  </motion.div>
                </Link>
              ))}
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default ProductDetail;
