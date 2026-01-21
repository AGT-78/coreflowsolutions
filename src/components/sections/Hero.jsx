import React from 'react';
import { Spotlight } from '@/components/ui/spotlight-new';
import { Button } from '@/components/ui/button';
import AnimatedButton from '@/components/common/AnimatedButton';
import { TypographyH1, TypographyH3, TypographyP } from '@/components/typography';

const Hero = () => {
  return (
    <section className="relative min-h-screen w-full flex items-center justify-center overflow-hidden bg-background">
      {/* Spotlight Background */}
      <Spotlight 
        gradientFirst="radial-gradient(68.54% 68.72% at 55.02% 31.46%, hsla(210, 100%, 85%, .12) 0, hsla(210, 100%, 55%, .04) 50%, hsla(210, 100%, 45%, 0) 80%)"
        gradientSecond="radial-gradient(50% 50% at 50% 50%, hsla(210, 100%, 85%, .08) 0, hsla(210, 100%, 55%, .03) 80%, transparent 100%)"
        gradientThird="radial-gradient(50% 50% at 50% 50%, hsla(210, 100%, 85%, .05) 0, hsla(210, 100%, 45%, .02) 80%, transparent 100%)"
      />

      {/* Hero Content */}
      <div className="relative z-10 mx-auto max-w-7xl px-6 text-center">
        <div className="space-y-8">
          {/* Main Heading */}
          <div className="space-y-4">
            <TypographyH1 className="text-7xl md:text-9xl text-center text-balance text-foreground font-semibold">
              <span className="bg-gradient-to-r from-[#f72585] via-[#7209b7] via-[#4361ee] to-[#4cc9f0] bg-clip-text text-transparent">
                Core Flow
              </span>
            </TypographyH1>
            <TypographyH3 className="text-3xl md:text-4xl text-center">
                Transform Your Business with AI
            </TypographyH3>
          </div>

          {/* Subheading */}
          <TypographyP className="mx-auto max-w-2xl text-lg md:text-xl text-muted-foreground text-center mt-6">
            We deliver cutting-edge artificial intelligence solutions that drive growth, 
            automate processes, and unlock new possibilities for your business.
          </TypographyP>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 pt-4">
            <Button 
              size="lg" 
              className="h-14 w-[180px] rounded-full bg-white/20 backdrop-blur-sm border border-white/30 text-white hover:bg-white/30 px-8 text-base"
            >
              View Our Work
            </Button>
            <AnimatedButton className="w-[180px]">
              Get Started
            </AnimatedButton>
          </div>
          
        </div>
      </div>
    </section>
  );
};

export default Hero;

