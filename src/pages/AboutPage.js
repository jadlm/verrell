import React from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'framer-motion';
import { useRef } from 'react';
import { Award, Palette, Shield, Heart, Users, Target, Star } from 'lucide-react';

const AboutPage = () => {
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
      description: 'Esthétique moderne et épurée inspirée des plus grands designers européens',
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

  const stats = [
    { icon: Users, number: '15+', label: 'Années d\'expérience' },
    { icon: Target, number: '5000+', label: 'Clients satisfaits' },
    { icon: Star, number: '4.9/5', label: 'Note moyenne' },
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
    <section ref={ref} className="py-24 bg-gradient-to-b from-white to-luxe-gray-soft min-h-screen">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-display font-bold text-gray-800 mb-4">
            À Propos de Verrell
          </h1>
          <div className="w-24 h-1 bg-luxe-gold mx-auto mb-6"></div>
        </motion.div>

        {/* Story Section */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="max-w-4xl mx-auto mb-20"
        >
          <div className="bg-white p-8 md:p-12 rounded-lg shadow-lg">
            <h2 className="text-3xl font-display font-semibold text-gray-800 mb-6">
              Notre Histoire
            </h2>
            <div className="space-y-4 text-gray-600 leading-relaxed">
              <p>
                Depuis notre création, Verrell s'engage à offrir des solutions premium pour
                transformer votre salle de bain en un espace d'élégance et de bien-être.
                Notre expertise allie savoir-faire artisanal et innovation pour vous proposer
                des produits d'exception.
              </p>
              <p>
                Fondée avec la vision de démocratiser le luxe dans l'univers de la salle de bain,
                Verrell sélectionne rigoureusement chaque produit pour garantir qualité, design
                et durabilité. Nous collaborons avec les meilleurs fabricants européens pour
                vous offrir une gamme complète de douches, robinets et équipements.
              </p>
              <p>
                Notre équipe d'experts est passionnée par l'art de la salle de bain et vous
                accompagne dans chaque étape de votre projet, de la conception à l'installation.
              </p>
            </div>
          </div>
        </motion.div>

        {/* Stats */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-20"
        >
          {stats.map((stat, index) => {
            const Icon = stat.icon;
            return (
              <motion.div
                key={index}
                whileHover={{ y: -5, scale: 1.02 }}
                className="bg-white p-8 rounded-lg shadow-lg text-center"
              >
                <div className="flex items-center justify-center w-16 h-16 bg-luxe-gold/10 rounded-full mx-auto mb-4">
                  <Icon className="text-luxe-gold" size={32} />
                </div>
                <div className="text-4xl font-display font-bold text-luxe-gold mb-2">
                  {stat.number}
                </div>
                <div className="text-gray-600">{stat.label}</div>
              </motion.div>
            );
          })}
        </motion.div>

        {/* Values */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate={isInView ? 'visible' : 'hidden'}
          className="mb-16"
        >
          <h2 className="text-4xl font-display font-bold text-gray-800 mb-12 text-center">
            Nos Valeurs
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
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
          </div>
        </motion.div>

        {/* Mission */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.6 }}
          className="bg-luxe-gold/10 p-8 md:p-12 rounded-lg"
        >
          <h2 className="text-3xl font-display font-semibold text-gray-800 mb-6 text-center">
            Notre Mission
          </h2>
          <p className="text-lg text-gray-700 text-center max-w-3xl mx-auto leading-relaxed">
            Offrir à chaque client une expérience unique en transformant leur salle de bain
            en un véritable espace de bien-être et d'élégance, grâce à des produits d'exception
            et un service irréprochable.
          </p>
        </motion.div>
      </div>
    </section>
  );
};

export default AboutPage;

