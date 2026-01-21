import React from 'react';
import Navbar from '../layout/Navbar';
import Hero from './Hero';

const HomePage = () => {
    return (
      <div className="flex flex-col min-h-screen bg-background text-foreground">
        <Navbar />
        <Hero />
      </div>
    )
  }

export default HomePage