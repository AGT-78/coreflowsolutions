import { motion } from "framer-motion";

const LightBeam = () => {
  return (
    <div className="absolute inset-0 z-0 overflow-hidden pointer-events-none">
      <svg
        viewBox="0 0 1000 1000"
        preserveAspectRatio="none"
        className="h-full w-full opacity-60"
      >
        <defs>
          <linearGradient id="beamGradient" x1="0%" y1="0%" x2="100%" y2="0%">
            <stop offset="0%" stopColor="transparent" />
            <stop offset="45%" stopColor="#4cc9f0" stopOpacity="0.1" />
            <stop offset="50%" stopColor="#ffffff" stopOpacity="1" /> {/* The "Core" */}
            <stop offset="55%" stopColor="#4361ee" stopOpacity="0.1" />
            <stop offset="100%" stopColor="transparent" />
          </linearGradient>
          
          <filter id="beamBlur">
            <feGaussianBlur stdDeviation="15" result="blur" />
            <feComposite in="SourceGraphic" in2="blur" operator="over" />
          </filter>
        </defs>
        
        {/* The Main Diagonal Beam */}
        <motion.path
          d="M -200 200 L 1200 800"
          stroke="url(#beamGradient)"
          strokeWidth="2"
          filter="url(#beamBlur)"
          initial={{ pathLength: 0.2, pathOffset: -0.2 }}
          animate={{ 
            pathOffset: [0, 1.2],
            opacity: [0, 1, 1, 0]
          }}
          transition={{
            duration: 4,
            repeat: Infinity,
            ease: "easeInOut",
            repeatDelay: 2
          }}
        />
      </svg>
    </div>
  );
};

export default LightBeam;