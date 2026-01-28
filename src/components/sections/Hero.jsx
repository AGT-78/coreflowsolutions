import React, { useRef } from 'react';
import { motion, useScroll, useTransform } from 'motion/react';
import { Spotlight } from '@/components/ui/spotlight-new';
import { Button } from '@/components/ui/button';
import { TypographyH1, TypographyH3, TypographyP } from '@/components/typography';
import AnimatedGradient from '@/components/common/AnimatedGradient';
const Hero = () => {
  const sectionRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start start", "end start"]
  });

  // Parallax and fade effects
  const opacity = useTransform(scrollYProgress, [0, 0.6, 1], [1, 0.85, 0.4]);
  const scale = useTransform(scrollYProgress, [0, 0.6, 1], [1, 0.98, 0.96]);
  const y = useTransform(scrollYProgress, [0, 1], [0, 80]);

  return (
    <section ref={sectionRef} className="relative min-h-screen w-full flex items-center justify-center overflow-hidden bg-background">
      {/* Spotlight Background */}
      <Spotlight 
        gradientFirst="radial-gradient(68.54% 68.72% at 55.02% 31.46%, hsla(210, 100%, 85%, .12) 0, hsla(210, 100%, 55%, .04) 50%, hsla(210, 100%, 45%, 0) 80%)"
        gradientSecond="radial-gradient(50% 50% at 50% 50%, hsla(210, 100%, 85%, .08) 0, hsla(210, 100%, 55%, .03) 80%, transparent 100%)"
        gradientThird="radial-gradient(50% 50% at 50% 50%, hsla(210, 100%, 85%, .05) 0, hsla(210, 100%, 45%, .02) 80%, transparent 100%)"
      />
      <AnimatedGradient />

      {/* Hero Content */}
      <motion.div 
        style={{ opacity, scale, y }}
        className="relative z-20 mx-auto max-w-7xl px-6 text-center"
      >
        <div className="flex flex-col items-center">
          {/* Trust Badge */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, ease: "easeOut" }}
            className="mb-6"
          >
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/5 backdrop-blur-md border border-white/10 shadow-lg">
              {/* Pulsing Signal Circle */}
              <div className="relative flex items-center justify-center">
                <svg width="12" height="12" viewBox="0 0 12 12" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <circle cx="6" cy="6" r="6" fill="#3B82F6" className="animate-pulse" />
                  <circle cx="6" cy="6" r="3" fill="#60A5FA" />
                </svg>
              </div>
              {/* Text */}
              <span className="text-sm font-medium bg-gradient-to-r from-blue-400 to-cyan-400 bg-clip-text text-transparent">
                Trusted by hundreds of businesses
              </span>
            </div>
          </motion.div>

          {/* Main Heading */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.1, ease: "easeOut" }}
          >
            <TypographyH1 className="text-4xl md:text-6xl text-center text-balance font-medium leading-tight">
              <span className="bg-gradient-to-b from-[#FFFFFF] via-[#E4E4E7] to-[#71717A] bg-clip-text text-transparent">
              Building the future with 
                <br />
                <span className="inline-flex items-center gap-3">
                human-centered AI
                </span>
              </span>
            </TypographyH1>
          </motion.div>

          {/* Lower Content Group - Tightly Spaced */}
          <div className="mt-3 space-y-6">
            {/* Tagline */}
            {/* Sub-headline */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2, ease: "easeOut" }}
            >
              <TypographyP className="mx-auto max-w-2xl text-base md:text-lg text-muted-foreground text-center leading-relaxed">
                We build intuitive AI tools that help people work smarter, move faster, and stay focused on what matters.
              </TypographyP>
            </motion.div>

            {/* CTA Buttons */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.3, ease: "easeOut" }}
              className="flex flex-col sm:flex-row items-center justify-center gap-5 pt-2"
            >
              <Button 
                className="h-12 px-8 rounded-full bg-primary text-primary-foreground hover:bg-primary/90 text-sm font-semibold shadow-[0_0_20px_rgba(99,102,241,0.5)] hover:shadow-[0_0_30px_rgba(99,102,241,0.7)] transition-all duration-300"
              >
                Get Started
              </Button>
              <Button 
                variant="outline" 
                className="h-12 px-8 rounded-full border-2 border-border bg-transparent hover:bg-accent text-foreground text-sm font-semibold transition-all duration-300"
              >
                View Our Work
              </Button>
            </motion.div>
          </div>
        </div>
      </motion.div>
    </section>
  );
};

export default Hero;

