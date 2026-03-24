import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { ShoppingCart, Trash2, Plus, Minus, Mail, MessageCircle, ArrowLeft, Copy, Check } from 'lucide-react';
import { removeFromCart, updateCartItemQuantity, getCartTotal } from '../utils/cartService';
import { formatPriceMAD } from '../utils/productService';
import { useCart } from '../context/CartContext';

const Cart = () => {
  const { cartItems, updateCart } = useCart();
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    address: '',
    message: '',
  });
  const [quoteMethod, setQuoteMethod] = useState('email'); // 'email' or 'whatsapp'
  const [emailCopied, setEmailCopied] = useState(false);
  const [showEmailLink, setShowEmailLink] = useState(false);

  useEffect(() => {
    updateCart();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const handleRemoveItem = (productId) => {
    removeFromCart(productId);
    updateCart();
  };

  const handleQuantityChange = (productId, newQuantity) => {
    if (newQuantity < 1) {
      handleRemoveItem(productId);
    } else {
      updateCartItemQuantity(productId, newQuantity);
      updateCart();
    }
  };

  const handleInputChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const generateQuoteMessage = (forEmail = false) => {
    const itemsList = cartItems.map(item => {
      const price = typeof item.price === 'string' 
        ? parseFloat(item.price.toString().replace(/\s/g, '').replace('MAD', '')) 
        : item.price;
      return `• ${item.name} (x${item.quantity}) - ${formatPriceMAD(price * item.quantity)}`;
    }).join(forEmail ? '%0A' : '\n');

    const total = getCartTotal();
    
    let message = '';
    if (forEmail) {
      // Format pour email (mailto)
      message = `Bonjour,%0A%0AJe souhaite demander un devis pour les produits suivants :%0A%0A${itemsList}%0A%0ATotal : ${encodeURIComponent(formatPriceMAD(total))}%0A%0AInformations de contact :%0ANom : ${encodeURIComponent(formData.name)}%0AEmail : ${encodeURIComponent(formData.email)}%0ATéléphone : ${encodeURIComponent(formData.phone)}%0AAdresse : ${encodeURIComponent(formData.address || 'Non renseignée')}`;
      if (formData.message) {
        message += `%0A%0AMessage :%0A${encodeURIComponent(formData.message)}`;
      }
      message += `%0A%0AMerci de me contacter pour finaliser ma commande.%0A%0ACordialement,%0A${encodeURIComponent(formData.name)}`;
    } else {
      // Format pour WhatsApp
      message = `Bonjour,

Je souhaite demander un devis pour les produits suivants :

${itemsList}

Total : ${formatPriceMAD(total)}

Informations de contact :
Nom : ${formData.name}
Email : ${formData.email}
Téléphone : ${formData.phone}
Adresse : ${formData.address || 'Non renseignée'}`;
      if (formData.message) {
        message += `\n\nMessage :\n${formData.message}`;
      }
      message += `\n\nMerci de me contacter pour finaliser ma commande.\n\nCordialement,\n${formData.name}`;
    }
    
    return message;
  };

  const handleSubmitQuote = (e) => {
    e.preventDefault();
    
    if (!formData.name || !formData.email || !formData.phone) {
      alert('Veuillez remplir tous les champs obligatoires (Nom, Email, Téléphone)');
      return;
    }

    if (cartItems.length === 0) {
      alert('Votre panier est vide');
      return;
    }

    if (quoteMethod === 'email') {
      const subject = encodeURIComponent('Demande de devis - Verrell');
      const body = generateQuoteMessage(true); // true pour le format email
      
      // Créer un lien mailto avec tous les paramètres correctement encodés
      const mailtoLink = `mailto:contact@verrell.fr?subject=${subject}&body=${body}`;
      
      // Utiliser window.location.href directement - fonctionne mieux avec Edge et Chrome
      // Cette méthode ouvre le client email par défaut du système
      window.location.href = mailtoLink;
      
      // Afficher aussi un lien visible au cas où le client email ne s'ouvre pas
      setShowEmailLink(true);
      setTimeout(() => setShowEmailLink(false), 10000);
    } else if (quoteMethod === 'whatsapp') {
      const phoneNumber = '212660570537'; // Format international sans +
      const message = generateQuoteMessage(false); // false pour le format WhatsApp
      const whatsappMessage = encodeURIComponent(message);
      window.open(`https://wa.me/${phoneNumber}?text=${whatsappMessage}`, '_blank');
    }
  };

  const total = getCartTotal();

  if (cartItems.length === 0) {
    return (
      <div className="min-h-screen bg-white pt-24">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-center py-16"
          >
            <ShoppingCart size={64} className="mx-auto text-gray-300 mb-6" />
            <h2 className="text-3xl font-display font-bold text-gray-800 mb-4">
              Votre panier est vide
            </h2>
            <p className="text-gray-600 mb-8">
              Découvrez notre collection de produits premium pour votre salle de bain.
            </p>
            <Link to="/produits">
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="bg-luxe-gold text-white px-8 py-3 rounded-lg font-semibold shadow-lg hover:shadow-xl transition-all duration-300"
              >
                Voir les produits
              </motion.button>
            </Link>
          </motion.div>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-white pt-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          className="mb-8"
        >
          <div className="flex items-center justify-between mb-6">
            <div className="flex items-center space-x-4">
              <Link to="/produits">
                <motion.button
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="flex items-center space-x-2 text-gray-600 hover:text-luxe-gold transition-colors"
                >
                  <ArrowLeft size={20} />
                  <span>Continuer les achats</span>
                </motion.button>
              </Link>
            </div>
            <h1 className="text-3xl sm:text-4xl font-display font-bold text-gray-800">
              Mon Panier
            </h1>
            <div className="w-32"></div> {/* Spacer for centering */}
          </div>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Cart Items */}
          <div className="lg:col-span-2">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              className="bg-white rounded-lg shadow-md p-6"
            >
              <h2 className="text-2xl font-display font-semibold text-gray-800 mb-6">
                Produits ({cartItems.length})
              </h2>
              <div className="space-y-6">
                {cartItems.map((item) => {
                  const price = typeof item.price === 'string' 
                    ? parseFloat(item.price.toString().replace(/\s/g, '').replace('MAD', '')) 
                    : item.price;
                  const itemTotal = price * item.quantity;

                  return (
                    <motion.div
                      key={item.id}
                      initial={{ opacity: 0, y: 20 }}
                      animate={{ opacity: 1, y: 0 }}
                      className="flex flex-col sm:flex-row gap-4 pb-6 border-b border-gray-200 last:border-0"
                    >
                      <Link to={`/produits/${item.id}`} className="flex-shrink-0">
                        <img
                          src={item.image}
                          alt={item.name}
                          className="w-full sm:w-32 h-32 object-cover rounded-lg"
                        />
                      </Link>
                      <div className="flex-1 flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4">
                        <div className="flex-1">
                          <Link to={`/produits/${item.id}`}>
                            <h3 className="text-lg font-semibold text-gray-800 hover:text-luxe-gold transition-colors mb-2">
                              {item.name}
                            </h3>
                          </Link>
                          <p className="text-luxe-gold font-bold text-lg mb-2">
                            {formatPriceMAD(price)} / unité
                          </p>
                          <p className="text-gray-600 text-sm">
                            Total : {formatPriceMAD(itemTotal)}
                          </p>
                        </div>
                        <div className="flex items-center gap-4">
                          <div className="flex items-center border-2 border-gray-200 rounded-lg">
                            <button
                              onClick={() => handleQuantityChange(item.id, item.quantity - 1)}
                              className="p-2 hover:bg-luxe-gold hover:text-white transition-colors"
                            >
                              <Minus size={16} />
                            </button>
                            <span className="px-4 py-2 font-semibold">{item.quantity}</span>
                            <button
                              onClick={() => handleQuantityChange(item.id, item.quantity + 1)}
                              className="p-2 hover:bg-luxe-gold hover:text-white transition-colors"
                            >
                              <Plus size={16} />
                            </button>
                          </div>
                          <button
                            onClick={() => handleRemoveItem(item.id)}
                            className="p-2 text-red-500 hover:bg-red-50 rounded-lg transition-colors"
                          >
                            <Trash2 size={20} />
                          </button>
                        </div>
                      </div>
                    </motion.div>
                  );
                })}
              </div>
            </motion.div>
          </div>

          {/* Quote Form */}
          <div className="lg:col-span-1">
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              className="bg-white rounded-lg shadow-md p-6 sticky top-24"
            >
              <h2 className="text-2xl font-display font-semibold text-gray-800 mb-6">
                Demande de devis
              </h2>

              {/* Total */}
              <div className="mb-6 p-4 bg-luxe-gray-soft rounded-lg">
                <div className="flex justify-between items-center mb-2">
                  <span className="text-gray-600">Total</span>
                  <span className="text-2xl font-bold text-luxe-gold">
                    {formatPriceMAD(total)}
                  </span>
                </div>
                <p className="text-xs text-gray-500">
                  {cartItems.reduce((sum, item) => sum + item.quantity, 0)} article(s)
                </p>
              </div>

              {/* Quote Method Selection */}
              <div className="mb-6">
                <label className="block text-sm font-semibold text-gray-700 mb-3">
                  Méthode de contact
                </label>
                <div className="flex gap-3">
                  <button
                    type="button"
                    onClick={() => setQuoteMethod('email')}
                    className={`flex-1 flex items-center justify-center space-x-2 px-4 py-3 rounded-lg border-2 transition-all ${
                      quoteMethod === 'email'
                        ? 'border-luxe-gold bg-luxe-gold/10 text-luxe-gold'
                        : 'border-gray-200 text-gray-600 hover:border-luxe-gold/50'
                    }`}
                  >
                    <Mail size={18} />
                    <span>Email</span>
                  </button>
                  <button
                    type="button"
                    onClick={() => setQuoteMethod('whatsapp')}
                    className={`flex-1 flex items-center justify-center space-x-2 px-4 py-3 rounded-lg border-2 transition-all ${
                      quoteMethod === 'whatsapp'
                        ? 'border-luxe-gold bg-luxe-gold/10 text-luxe-gold'
                        : 'border-gray-200 text-gray-600 hover:border-luxe-gold/50'
                    }`}
                  >
                    <MessageCircle size={18} />
                    <span>WhatsApp</span>
                  </button>
                </div>
              </div>

              {/* Form */}
              <form onSubmit={handleSubmitQuote} className="space-y-4">
                <div>
                  <label className="block text-sm font-semibold text-gray-700 mb-2">
                    Nom complet <span className="text-red-500">*</span>
                  </label>
                  <input
                    type="text"
                    name="name"
                    value={formData.name}
                    onChange={handleInputChange}
                    required
                    className="w-full px-4 py-2 border-2 border-gray-200 rounded-lg focus:border-luxe-gold focus:outline-none transition-colors"
                    placeholder="Votre nom"
                  />
                </div>

                <div>
                  <label className="block text-sm font-semibold text-gray-700 mb-2">
                    Email <span className="text-red-500">*</span>
                  </label>
                  <input
                    type="email"
                    name="email"
                    value={formData.email}
                    onChange={handleInputChange}
                    required
                    className="w-full px-4 py-2 border-2 border-gray-200 rounded-lg focus:border-luxe-gold focus:outline-none transition-colors"
                    placeholder="votre@email.com"
                  />
                </div>

                <div>
                  <label className="block text-sm font-semibold text-gray-700 mb-2">
                    Téléphone <span className="text-red-500">*</span>
                  </label>
                  <input
                    type="tel"
                    name="phone"
                    value={formData.phone}
                    onChange={handleInputChange}
                    required
                    className="w-full px-4 py-2 border-2 border-gray-200 rounded-lg focus:border-luxe-gold focus:outline-none transition-colors"
                    placeholder="06 12 34 56 78"
                  />
                </div>

                <div>
                  <label className="block text-sm font-semibold text-gray-700 mb-2">
                    Adresse
                  </label>
                  <textarea
                    name="address"
                    value={formData.address}
                    onChange={handleInputChange}
                    rows={3}
                    className="w-full px-4 py-2 border-2 border-gray-200 rounded-lg focus:border-luxe-gold focus:outline-none transition-colors resize-none"
                    placeholder="Votre adresse de livraison"
                  />
                </div>

                <div>
                  <label className="block text-sm font-semibold text-gray-700 mb-2">
                    Message (optionnel)
                  </label>
                  <textarea
                    name="message"
                    value={formData.message}
                    onChange={handleInputChange}
                    rows={3}
                    className="w-full px-4 py-2 border-2 border-gray-200 rounded-lg focus:border-luxe-gold focus:outline-none transition-colors resize-none"
                    placeholder="Informations complémentaires..."
                  />
                </div>

                <motion.button
                  type="submit"
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                  className="w-full bg-luxe-gold text-white px-6 py-3 rounded-lg font-semibold text-lg shadow-lg hover:shadow-xl transition-all duration-300 flex items-center justify-center space-x-2"
                >
                  {quoteMethod === 'email' ? (
                    <>
                      <Mail size={20} />
                      <span>Envoyer par Email</span>
                    </>
                  ) : (
                    <>
                      <MessageCircle size={20} />
                      <span>Envoyer par WhatsApp</span>
                    </>
                  )}
                </motion.button>

                {/* Message d'aide si le client email ne s'ouvre pas */}
                {showEmailLink && quoteMethod === 'email' && (
                  <motion.div
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    className="mt-4 p-4 bg-luxe-gold/10 border-2 border-luxe-gold/30 rounded-lg"
                  >
                    <p className="text-sm text-gray-700 mb-2">
                      Si votre client email ne s'est pas ouvert automatiquement, cliquez sur le lien ci-dessous :
                    </p>
                    <a
                      href={`mailto:contact@verrell.fr?subject=${encodeURIComponent('Demande de devis - Verrell')}&body=${generateQuoteMessage(true)}`}
                      className="text-luxe-gold hover:text-luxe-gold-dark font-semibold underline flex items-center space-x-2"
                    >
                      <Mail size={16} />
                      <span>Ouvrir le client email</span>
                    </a>
                  </motion.div>
                )}
              </form>
            </motion.div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Cart;
