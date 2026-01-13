import React from 'react';
import Hero from '../components/Hero';
import Products from '../components/Products';
import PromoSection from '../components/PromoSection';
import About from '../components/About';
import Advantages from '../components/Advantages';

const Home = () => {
  return (
    <>
      <Hero />
      <Products />
      <PromoSection />
      <About />
      <Advantages />
    </>
  );
};

export default Home;

