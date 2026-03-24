import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { motion } from 'framer-motion';
import { Lock, User } from 'lucide-react';

const AdminLogin = () => {
  const [credentials, setCredentials] = useState({ username: '', password: '' });
  const [error, setError] = useState('');
  const navigate = useNavigate();

  // Credentials par défaut (à changer en production)
  const ADMIN_USERNAME = 'admin';
  const ADMIN_PASSWORD = 'verrell2024';

  const handleSubmit = (e) => {
    e.preventDefault();
    setError('');

    if (credentials.username === ADMIN_USERNAME && credentials.password === ADMIN_PASSWORD) {
      // Stocker la session admin
      localStorage.setItem('adminSession', 'true');
      localStorage.setItem('adminLoginTime', new Date().toISOString());
      navigate('/admin/dashboard');
    } else {
      setError('Identifiants incorrects');
    }
  };

  const handleChange = (e) => {
    setCredentials({
      ...credentials,
      [e.target.name]: e.target.value,
    });
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-luxe-gold/10 via-white to-luxe-gray-soft flex items-center justify-center py-12 px-4 sm:px-6 lg:px-8">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        className="max-w-md w-full space-y-8 bg-white p-8 rounded-lg shadow-xl"
      >
        <div className="text-center">
          <div className="flex justify-center mb-4">
            <div className="w-16 h-16 bg-luxe-gold/10 rounded-full flex items-center justify-center">
              <Lock className="text-luxe-gold" size={32} />
            </div>
          </div>
          <h2 className="text-3xl font-display font-bold text-gray-800">Administration</h2>
          <p className="mt-2 text-sm text-gray-600">Connectez-vous pour gérer le site</p>
        </div>

        <form className="mt-8 space-y-6" onSubmit={handleSubmit}>
          {error && (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              className="bg-red-50 border border-red-200 text-red-700 px-4 py-3 rounded-lg text-sm"
            >
              {error}
            </motion.div>
          )}

          <div className="space-y-4">
            <div>
              <label htmlFor="username" className="block text-sm font-medium text-gray-700 mb-2">
                Nom d'utilisateur
              </label>
              <div className="relative">
                <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                  <User className="h-5 w-5 text-gray-400" />
                </div>
                <input
                  id="username"
                  name="username"
                  type="text"
                  required
                  value={credentials.username}
                  onChange={handleChange}
                  className="block w-full pl-10 pr-3 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-luxe-gold focus:border-luxe-gold outline-none"
                  placeholder="Nom d'utilisateur"
                />
              </div>
            </div>

            <div>
              <label htmlFor="password" className="block text-sm font-medium text-gray-700 mb-2">
                Mot de passe
              </label>
              <div className="relative">
                <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                  <Lock className="h-5 w-5 text-gray-400" />
                </div>
                <input
                  id="password"
                  name="password"
                  type="password"
                  required
                  value={credentials.password}
                  onChange={handleChange}
                  className="block w-full pl-10 pr-3 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-luxe-gold focus:border-luxe-gold outline-none"
                  placeholder="Mot de passe"
                />
              </div>
            </div>
          </div>

          <motion.button
            type="submit"
            whileHover={{ scale: 1.02 }}
            whileTap={{ scale: 0.98 }}
            className="w-full bg-luxe-gold text-white py-3 px-4 rounded-lg font-semibold text-lg shadow-lg hover:shadow-xl transition-all duration-300"
          >
            Se connecter
          </motion.button>
        </form>

        <div className="text-center">
          <p className="text-xs text-gray-500">
            Identifiants par défaut : admin / verrell2024
          </p>
        </div>
      </motion.div>
    </div>
  );
};

export default AdminLogin;
