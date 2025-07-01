 import React from 'react';
import { Routes, Route } from 'react-router-dom';
import HeroSection from './Components/HeroSection';
import ContentSection from './Components/ContentSection';
import ServicesSection from './Components/ServicesSection';
import ProductsSection from './Components/ProductsSection';
import TestimonialsSection from './Components/TestimonialsSection';
import ProductsPage from './Components/ProductsPage';
import Navbar from './Components/Navbar';
import Footer from './Components/Footer';
import VegetableCategoryPage from './Components/VegitableCategoryPage';
 
const HomePage = () => (
  <>
    <HeroSection />
    <ContentSection />
    <ServicesSection />
    <ProductsSection />
    <TestimonialsSection />
  </>
);

const App = () => (
  <>
    <Navbar />
    <Routes>
      <Route path="/" element={<HomePage />} />
      <Route path="/products" element={<ProductsPage />} />
      <Route path="/vegetables" element={<VegetableCategoryPage/>}/>
    </Routes>
    <Footer />
  </>
);

export default App;