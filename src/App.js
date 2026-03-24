import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Layout from './components/Layout';
import Home from './pages/Home';
import ProductsPage from './pages/ProductsPage';
import ProductDetail from './pages/ProductDetail';
import AboutPage from './pages/AboutPage';
import GalleryPage from './pages/GalleryPage';
import ContactPage from './pages/ContactPage';
import Cart from './pages/Cart';
import AdminLogin from './pages/AdminLogin';
import AdminDashboard from './pages/AdminDashboard';

function App() {
  return (
    <Router>
      <Routes>
        {/* Routes Admin (sans Layout) */}
        <Route path="/admin/login" element={<AdminLogin />} />
        <Route path="/admin/dashboard" element={<AdminDashboard />} />
        
        {/* Routes publiques (avec Layout) */}
        <Route path="/*" element={
          <Layout>
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/produits" element={<ProductsPage />} />
              <Route path="/produits/:id" element={<ProductDetail />} />
              <Route path="/a-propos" element={<AboutPage />} />
              <Route path="/galerie" element={<GalleryPage />} />
              <Route path="/contact" element={<ContactPage />} />
              <Route path="/panier" element={<Cart />} />
            </Routes>
          </Layout>
        } />
      </Routes>
    </Router>
  );
}

export default App;

