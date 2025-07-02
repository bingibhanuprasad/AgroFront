import React, { useState, useEffect } from 'react';
import { Routes, Route } from 'react-router-dom';
import HeroSection from './Components/HeroSection';
import ServicesSection from './Components/ServicesSection';
import ProductsSection from './Components/ProductsSection';
import TestimonialsSection from './Components/TestimonialsSection';
import ProductsPage from './Components/ProductsPage';
import VegetableCategoryPage from './Components/VegitableCategoryPage';
import Navbar from './Components/Navbar';
import Footer from './Components/Footer';
import Login from './Components/Login';
import Signup from './Components/Signup';
import Weprovide from './Components/Weprovide';
import ContactUs from './Components/ContactUs';

const HomePage = () => (
  <>
    <HeroSection />
    <ServicesSection />
    <ProductsSection />
    <Weprovide />
    <TestimonialsSection />
  </>
);

const App = () => {
  const [user, setUser] = useState(null);

  // Load user from localStorage safely
  useEffect(() => {
    try {
      const stored = localStorage.getItem('user');
      if (stored && stored !== 'undefined') {
        const parsedUser = JSON.parse(stored);
        if (parsedUser && parsedUser.name) {
          setUser(parsedUser);
        } else {
          setUser(null);
        }
      } else {
        setUser(null);
      }
    } catch (error) {
      console.error('Invalid JSON in localStorage:', error);
      setUser(null);
    }
  }, []);

  return (
    <>
      <Navbar user={user} />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/products" element={<ProductsPage />} />
        <Route path="/vegetables" element={<VegetableCategoryPage />} />
        <Route path="/login" element={<Login setUser={setUser} />} />
        <Route path="/signup" element={<Signup />} />
        <Route path="/contact" element={<ContactUs/>}/>
      </Routes>
      <Footer />
    </>
  );
};

export default App;
