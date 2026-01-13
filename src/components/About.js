import React from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'framer-motion';
import { useRef } from 'react';
import { Award, Palette, Shield, Heart } from 'lucide-react';

const About = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-100px' });

  const values = [
    {
      icon: Award,
      title: 'Qualité',
      description: 'Matériaux premium sélectionnés avec soin pour une durabilité exceptionnelle',
    },
    {
      icon: Palette,
      title: 'Design',
      'description': 'Esthétique moderne et épurée inspirée des plus grands designers européens',
    },
    {
      icon: Shield,
      title: 'Durabilité',
      description: 'Engagement envers l\'environnement et la longévité de nos produits',
    },
    {
      icon: Heart,
      title: 'Excellence',
      description: 'Passion pour l\'artisanat et l\'attention aux détails dans chaque création',
    },
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.15,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, x: -30 },
    visible: {
      opacity: 1,
      x: 0,
      transition: {
        duration: 0.6,
      },
    },
  };

  return (
    <section
      id="about"
      ref={ref}
      className="py-24 bg-gradient-to-b from-white to-luxe-gray-soft"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-display font-bold text-gray-800 mb-4">
            À Propos de Verrell
          </h2>
          <div className="w-24 h-1 bg-luxe-gold mx-auto mb-6"></div>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto leading-relaxed">
            Depuis notre création, Verrell s'engage à offrir des solutions premium pour
            transformer votre salle de bain en un espace d'élégance et de bien-être.
            Notre expertise allie savoir-faire artisanal et innovation pour vous proposer
            des produits d'exception.
          </p>
        </motion.div>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate={isInView ? 'visible' : 'hidden'}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8"
        >
          {values.map((value, index) => {
            const Icon = value.icon;
            return (
              <motion.div
                key={index}
                variants={itemVariants}
                whileHover={{ y: -5, scale: 1.02 }}
                className="bg-white p-8 rounded-lg shadow-md hover:shadow-xl transition-all duration-300 text-center"
              >
                <motion.div
                  whileHover={{ rotate: 360 }}
                  transition={{ duration: 0.6 }}
                  className="inline-flex items-center justify-center w-16 h-16 bg-luxe-gold/10 rounded-full mb-4"
                >
                  <Icon className="text-luxe-gold" size={32} />
                </motion.div>
                <h3 className="text-xl font-display font-semibold text-gray-800 mb-3">
                  {value.title}
                </h3>
                <p className="text-gray-600">{value.description}</p>
              </motion.div>
            );
          })}
        </motion.div>
      </div>
    </section>
  );
};

export default About;

