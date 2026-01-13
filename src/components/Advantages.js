import React from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'framer-motion';
import { useRef } from 'react';
import { Gem, Globe, CheckCircle, Wrench } from 'lucide-react';

const Advantages = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-100px' });

  const advantages = [
    {
      icon: Gem,
      title: 'Matériaux Premium',
      description: 'Sélection rigoureuse des meilleurs matériaux pour garantir qualité et durabilité',
    },
    {
      icon: Globe,
      title: 'Design Européen',
      description: 'Inspiration des plus grands designers européens pour un style intemporel',
    },
    {
      icon: CheckCircle,
      title: 'Garantie Qualité',
      description: 'Engagement total avec garanties étendues sur tous nos produits',
    },
    {
      icon: Wrench,
      title: 'Installation Facile',
      description: 'Support technique et assistance pour une installation sans tracas',
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
      className="py-24 bg-gradient-to-b from-luxe-gray-soft to-white"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-display font-bold text-gray-800 mb-4">
            Nos Avantages
          </h2>
          <div className="w-24 h-1 bg-luxe-gold mx-auto mb-6"></div>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Pourquoi choisir Verrell pour votre salle de bain
          </p>
        </motion.div>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate={isInView ? 'visible' : 'hidden'}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8"
        >
          {advantages.map((advantage, index) => {
            const Icon = advantage.icon;
            return (
              <motion.div
                key={index}
                variants={itemVariants}
                whileHover={{ y: -10, scale: 1.02 }}
                className="bg-white p-8 rounded-lg shadow-lg hover:shadow-2xl transition-all duration-300 border-t-4 border-luxe-gold"
              >
                <div className="flex items-center justify-center w-16 h-16 bg-luxe-gold/10 rounded-full mb-6">
                  <Icon className="text-luxe-gold" size={32} />
                </div>
                <h3 className="text-xl font-display font-semibold text-gray-800 mb-4">
                  {advantage.title}
                </h3>
                <p className="text-gray-600 leading-relaxed">
                  {advantage.description}
                </p>
              </motion.div>
            );
          })}
        </motion.div>
      </div>
    </section>
  );
};

export default Advantages;

