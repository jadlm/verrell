import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Layout from './components/Layout';
import Home from './pages/Home';
import ProductsPage from './pages/ProductsPage';
import ProductDetail from './pages/ProductDetail';
import AboutPage from './pages/AboutPage';
import GalleryPage from './pages/GalleryPage';
import ContactPage from './pages/ContactPage';

function App() {
  return (
    <Router>
      <Layout>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/produits" element={<ProductsPage />} />
          <Route path="/produits/:id" element={<ProductDetail />} />
          <Route path="/a-propos" element={<AboutPage />} />
          <Route path="/galerie" element={<GalleryPage />} />
          <Route path="/contact" element={<ContactPage />} />
        </Routes>
      </Layout>
    </Router>
  );
}

export default App;

