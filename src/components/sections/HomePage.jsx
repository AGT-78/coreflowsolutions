import React from 'react';
import Navbar from '../layout/Navbar';
import Bucket from "../ui/bucket";

const HomePage = () => {
    return (
      // Add bg-background and text-foreground here
      <div className="flex flex-col min-h-screen bg-background text-foreground">
        <Navbar />
        <main className="flex flex-1 items-center justify-center">
          <Bucket className="bg-white text-black border border-gray-200 shadow-sm" />
        </main>
      </div>
    )
  }

export default HomePage