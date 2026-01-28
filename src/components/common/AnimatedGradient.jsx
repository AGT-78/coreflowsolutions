import { motion } from "motion/react";

const AnimatedGradient = () => {
  return (
    <div className="absolute inset-0 z-[2] pointer-events-none">
      {/* 1. Left Arc: Vibrant Blue-Purple */}
      <motion.div
        animate={{
          opacity: [0.6, 0.8, 0.6],
          scale: [1, 1.1, 1],
          x: [0, 30, 0],
        }}
        transition={{
          duration: 8,
          repeat: Infinity,
          ease: "easeInOut",
        }}
        className="absolute left-0 top-1/4 h-[600px] w-[600px] rounded-full"
        style={{
          background: "radial-gradient(circle, rgba(99, 102, 241, 0.4) 0%, rgba(168, 85, 247, 0.2) 40%, transparent 70%)",
          filter: "blur(80px)",
        }}
      />

      {/* 2. Right Arc: Vibrant Cyan-Blue */}
      <motion.div
        animate={{
          opacity: [0.6, 0.8, 0.6],
          scale: [1, 1.1, 1],
          x: [0, -30, 0],
        }}
        transition={{
          duration: 10,
          repeat: Infinity,
          ease: "easeInOut",
        }}
        className="absolute right-0 top-1/3 h-[600px] w-[600px] rounded-full"
        style={{
          background: "radial-gradient(circle, rgba(56, 189, 248, 0.4) 0%, rgba(59, 130, 246, 0.2) 40%, transparent 70%)",
          filter: "blur(80px)",
        }}
      />

      {/* 3. Central Top Glow */}
      <motion.div
        animate={{
          opacity: [0.3, 0.5, 0.3],
          scale: [1, 1.05, 1],
        }}
        transition={{
          duration: 6,
          repeat: Infinity,
          ease: "easeInOut",
        }}
        className="absolute left-1/2 top-0 h-[400px] w-[800px] -translate-x-1/2 rounded-full"
        style={{
          background: "radial-gradient(ellipse, rgba(255, 255, 255, 0.15) 0%, rgba(148, 163, 184, 0.1) 40%, transparent 70%)",
          filter: "blur(60px)",
        }}
      />
    </div>
  );
};

export default AnimatedGradient;