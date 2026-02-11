import React from 'react';
import { motion } from 'framer-motion';
import NebulaGradient from '../common/NebulaGradient';
const ProductChatbot = () => {
  const stats = [
    { label: "Year founded", value: "2021" },
    { label: "Total funding", value: "$35M" },
    { label: "Team members", value: "20+" },
  ];

  return (
    <section className="bg-black py-12 sm:py-16 md:py-20 lg:py-24 px-4 sm:px-6 lg:px-8">
      <div className="mx-auto max-w-7xl">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 sm:gap-12 lg:gap-16 items-center">
          
          {/* Left Content Column */}
          <div className="flex flex-col space-y-6 sm:space-y-8">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
            >
              <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold tracking-tighter leading-[1.1]">
                <span className="bg-gradient-to-b from-[#FFFFFF] via-[#E4E4E7] to-[#71717A] bg-clip-text text-transparent">
                  Built for people, powered <br />
                  <span className="text-zinc-500">by advanced AI</span>
                </span>
              </h2>
              
              <p className="mt-4 sm:mt-6 text-base sm:text-lg text-zinc-400 leading-relaxed max-w-xl">
                We're a team of engineers, designers, and builders on a mission to 
                make advanced AI simple, intuitive, and genuinely useful. We believe 
                AI should empower people, not replace them.
              </p>
            </motion.div>

            {/* Stats Row */}
            <div className="grid grid-cols-3 gap-4 sm:gap-6 md:gap-8 pt-6 sm:pt-8 border-t border-zinc-800">
              {stats.map((stat, index) => (
                <div key={index} className="flex flex-col space-y-1 sm:space-y-2">
                  <span className="text-xl sm:text-2xl md:text-3xl font-bold tracking-tighter text-zinc-200">
                    {stat.value}
                  </span>
                  <span className="text-[10px] sm:text-xs uppercase tracking-widest text-zinc-500 font-medium">
                    {stat.label}
                  </span>
                </div>
              ))}
            </div>
          </div>

          {/* Right Image Column */}
          <NebulaGradient />

        </div>
      </div>
    </section>
  );
};

export default ProductChatbot;