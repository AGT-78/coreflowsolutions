import React from 'react';
import Navbar from '../layout/Navbar';
import Footer from '../layout/Footer';
import Hero from './Hero';
import Industries from './Industries';
import Features from './Features';
import ProductChatbot from './ProductChatbot';

const HomePage = () => {
    return (
      <div className="flex flex-col min-h-screen bg-background text-foreground">
        <Navbar />
        <Hero />
        <ProductChatbot />
        <Features />
        <Footer />
      </div>
    )
  }

export default HomePage