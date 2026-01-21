import React from 'react';
import Navbar from '../layout/Navbar';
import Footer from '../layout/Footer';
import Hero from './Hero';
import Features from './Features';

const HomePage = () => {
    return (
      <div className="flex flex-col min-h-screen bg-background text-foreground">
        <Navbar />
        <Hero />
        <Features />
        <Footer />
      </div>
    )
  }

export default HomePage