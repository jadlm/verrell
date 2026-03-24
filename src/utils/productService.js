// Service pour gérer les produits (localStorage pour l'instant, peut être remplacé par une API)

export const getProducts = () => {
  const savedProducts = localStorage.getItem('adminProducts');
  if (savedProducts) {
    return JSON.parse(savedProducts);
  }
  return null; // Retourne null si pas de produits sauvegardés
};

export const getProductById = (id) => {
  const products = getProducts();
  if (products) {
    return products.find(p => p.id === parseInt(id));
  }
  return null;
};

export const formatPriceMAD = (price) => {
  if (!price) return '0 MAD';
  // Si c'est déjà une string avec "MAD", on la retourne
  if (typeof price === 'string' && price.includes('MAD')) {
    return price;
  }
  // Sinon on formate le nombre
  const numPrice = typeof price === 'string' ? parseFloat(price.toString().replace(/\s/g, '').replace('MAD', '')) : price;
  if (isNaN(numPrice)) return '0 MAD';
  return `${numPrice.toLocaleString('fr-FR')} MAD`;
};

export const formatPriceDisplay = (price, isPromo = false, originalPrice = null) => {
  if (isPromo && originalPrice) {
    return {
      current: formatPriceMAD(price),
      original: formatPriceMAD(originalPrice),
    };
  }
  return {
    current: formatPriceMAD(price),
    original: null,
  };
};
