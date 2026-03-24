import React, { createContext, useContext, useState, useEffect, useCallback } from 'react';
import { getCart, getCartItemsCount } from '../utils/cartService';

const CartContext = createContext();

export const useCart = () => {
  const context = useContext(CartContext);
  if (!context) {
    throw new Error('useCart must be used within a CartProvider');
  }
  return context;
};

export const CartProvider = ({ children }) => {
  const [cartItems, setCartItems] = useState([]);
  const [cartCount, setCartCount] = useState(0);

  useEffect(() => {
    // Charger le panier depuis localStorage au montage
    const loadCart = () => {
      const cart = getCart();
      setCartItems(cart);
      setCartCount(getCartItemsCount());
    };

    loadCart();

    // Écouter les changements de localStorage (pour synchroniser entre onglets)
    const handleStorageChange = (e) => {
      if (e.key === 'cart') {
        loadCart();
      }
    };

    window.addEventListener('storage', handleStorageChange);
    return () => window.removeEventListener('storage', handleStorageChange);
  }, []);

  const updateCart = useCallback(() => {
    const cart = getCart();
    setCartItems(cart);
    setCartCount(getCartItemsCount());
  }, []);

  const value = {
    cartItems,
    cartCount,
    updateCart,
  };

  return (
    <CartContext.Provider value={value}>
      {children}
    </CartContext.Provider>
  );
};
