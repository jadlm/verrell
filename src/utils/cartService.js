// Service pour gérer le panier (localStorage)

export const getCart = () => {
  const cart = localStorage.getItem('cart');
  if (cart) {
    return JSON.parse(cart);
  }
  return [];
};

export const addToCart = (product) => {
  const cart = getCart();
  const existingItem = cart.find(item => item.id === product.id);
  
  if (existingItem) {
    existingItem.quantity += 1;
  } else {
    cart.push({
      ...product,
      quantity: 1
    });
  }
  
  localStorage.setItem('cart', JSON.stringify(cart));
  return cart;
};

export const removeFromCart = (productId) => {
  const cart = getCart();
  const updatedCart = cart.filter(item => item.id !== productId);
  localStorage.setItem('cart', JSON.stringify(updatedCart));
  return updatedCart;
};

export const updateCartItemQuantity = (productId, quantity) => {
  const cart = getCart();
  const updatedCart = cart.map(item => {
    if (item.id === productId) {
      return { ...item, quantity: Math.max(1, quantity) };
    }
    return item;
  });
  localStorage.setItem('cart', JSON.stringify(updatedCart));
  return updatedCart;
};

export const clearCart = () => {
  localStorage.removeItem('cart');
  return [];
};

export const getCartTotal = () => {
  const cart = getCart();
  return cart.reduce((total, item) => {
    const price = typeof item.price === 'string' 
      ? parseFloat(item.price.toString().replace(/\s/g, '').replace('MAD', '')) 
      : item.price;
    return total + (price * item.quantity);
  }, 0);
};

export const getCartItemsCount = () => {
  const cart = getCart();
  return cart.reduce((total, item) => total + item.quantity, 0);
};
