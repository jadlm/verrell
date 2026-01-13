import React from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { Facebook, Instagram, Twitter, Linkedin } from 'lucide-react';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  const footerLinks = {
    produits: [
      { name: 'Douches', path: '/produits' },
      { name: 'Robinets', path: '/produits' },
      { name: 'Équipements', path: '/produits' },
    ],
    entreprise: [
      { name: 'À propos', path: '/a-propos' },
      { name: 'Galerie', path: '/galerie' },
      { name: 'Contact', path: '/contact' },
    ],
  };

  const socialLinks = [
    { icon: Facebook, href: 'https://facebook.com', name: 'Facebook' },
    { icon: Instagram, href: 'https://instagram.com', name: 'Instagram' },
    { icon: Twitter, href: 'https://twitter.com', name: 'Twitter' },
    { icon: Linkedin, href: 'https://linkedin.com', name: 'LinkedIn' },
  ];

  return (
    <footer className="bg-white border-t-2 border-luxe-gold/30">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-8">
          {/* Logo & Description */}
          <div className="lg:col-span-1">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="mb-4"
            >
              <Link to="/">
                <div className="flex items-center space-x-2 mb-4 cursor-pointer">
                  <div className="text-2xl font-display font-bold text-luxe-gold">
                    Verrell
                  </div>
                  <div className="h-6 w-px bg-luxe-gold"></div>
                </div>
              </Link>
              <p className="text-gray-600 text-sm leading-relaxed">
                Élégance et luxe pour transformer votre salle de bain en un espace d'exception.
              </p>
            </motion.div>
          </div>

          {/* Produits */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.1 }}
          >
            <h4 className="font-display font-semibold text-gray-800 mb-4">Produits</h4>
            <ul className="space-y-2">
              {footerLinks.produits.map((link, index) => (
                <li key={index}>
                  <Link
                    to={link.path}
                    className="text-gray-600 hover:text-luxe-gold transition-colors text-sm"
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </motion.div>

          {/* Entreprise */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <h4 className="font-display font-semibold text-gray-800 mb-4">Entreprise</h4>
            <ul className="space-y-2">
              {footerLinks.entreprise.map((link, index) => (
                <li key={index}>
                  <Link
                    to={link.path}
                    className="text-gray-600 hover:text-luxe-gold transition-colors text-sm"
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </motion.div>

          {/* Social Media */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.3 }}
          >
            <h4 className="font-display font-semibold text-gray-800 mb-4">Suivez-nous</h4>
            <div className="flex space-x-4">
              {socialLinks.map((social, index) => {
                const Icon = social.icon;
                return (
                  <motion.a
                    key={index}
                    href={social.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    whileHover={{ scale: 1.2, y: -2 }}
                    whileTap={{ scale: 0.9 }}
                    className="w-10 h-10 bg-luxe-gold/10 rounded-full flex items-center justify-center text-luxe-gold hover:bg-luxe-gold hover:text-white transition-all duration-300"
                    aria-label={social.name}
                  >
                    <Icon size={18} />
                  </motion.a>
                );
              })}
            </div>
          </motion.div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-gray-200 pt-8 mt-8">
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0"
          >
            <p className="text-gray-600 text-sm">
              © {currentYear} Verrell. Tous droits réservés.
            </p>
            <div className="flex space-x-6 text-sm">
              <button
                onClick={() => {
                  // TODO: Navigate to legal page when created
                  console.log('Mentions légales');
                }}
                className="text-gray-600 hover:text-luxe-gold transition-colors cursor-pointer"
              >
                Mentions légales
              </button>
              <button
                onClick={() => {
                  // TODO: Navigate to privacy policy page when created
                  console.log('Politique de confidentialité');
                }}
                className="text-gray-600 hover:text-luxe-gold transition-colors cursor-pointer"
              >
                Politique de confidentialité
              </button>
              <button
                onClick={() => {
                  // TODO: Navigate to terms page when created
                  console.log('CGV');
                }}
                className="text-gray-600 hover:text-luxe-gold transition-colors cursor-pointer"
              >
                CGV
              </button>
            </div>
          </motion.div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;

