import React from 'react';
import { motion } from 'framer-motion';

const NebulaGradient = () => {
  return (
    <div className="relative flex items-center justify-center p-3 sm:p-4 md:p-8 overflow-hidden bg-[#0d0d0d] rounded-2xl sm:rounded-3xl min-h-[300px] sm:min-h-[400px] md:min-h-[500px] lg:min-h-[600px] w-full border border-white/5">
      
      {/* 1. Static "Nebula" Glow Effect */}
      <div 
        className="absolute w-[140%] h-[140%] opacity-50 blur-[100px] pointer-events-none z-0"
        style={{
          background: 'radial-gradient(circle at center, #22c55e 0%, #3b82f6 30%, transparent 70%)'
        }}
      />

      {/* 2. Expanded Floating Chatbot Container */}
      <motion.div 
        initial={{ y: 30, opacity: 0 }}
        whileInView={{ y: 0, opacity: 1 }}
        transition={{ duration: 1, ease: [0.16, 1, 0.3, 1] }}
        className="relative z-10 w-full h-full flex items-center justify-center transform transition-all duration-700 hover:scale-[1.01]"
      >
        {/* Expanded Glassmorphism Frame: Now uses w-full and h-full logic */}
        <div className="relative w-full max-w-5xl rounded-xl sm:rounded-2xl border border-white/10 bg-black/40 backdrop-blur-xl shadow-[0_0_50px_rgba(0,0,0,0.5)] overflow-hidden">
          
          {/* Increased Image Size */}
          <img 
            src="/Chatbot-rep.png"
            alt="AI Chatbot Interface"
            className="w-full h-auto object-contain sm:object-cover scale-100 sm:scale-105 transition-transform duration-700 hover:scale-100"
          />

          {/* Subtle Reflection Overlay */}
          <div className="absolute inset-0 rounded-2xl bg-gradient-to-tr from-white/10 via-transparent to-transparent pointer-events-none" />
        </div>
      </motion.div>
    </div>
  );
};

export default NebulaGradient;