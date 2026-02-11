import React, { useRef } from 'react';
import { motion, useScroll, useTransform } from 'motion/react';
import { GlowingEffect } from '@/components/ui/glowing-effect';
import { TypographyH2, TypographyH3, TypographyP } from '@/components/typography';
import { Zap, Brain, Workflow, BarChart3, Lock, Headphones } from 'lucide-react';

const Features = () => {
  const sectionRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start end", "start center"]
  });

  // Entrance animation based on scroll
  const opacity = useTransform(scrollYProgress, [0, 0.4, 0.8], [0, 0.6, 1]);
  const scale = useTransform(scrollYProgress, [0, 0.4, 0.8], [0.92, 0.96, 1]);
  const y = useTransform(scrollYProgress, [0, 0.4, 0.8], [80, 40, 0]);
  const features = [
    {
      icon: Zap,
      title: "Lightning Fast Automation",
      description: "Automate repetitive tasks in seconds. Our AI solutions reduce manual work by up to 80%, letting your team focus on what matters most."
    },
    {
      icon: Brain,
      title: "Intelligent Decision Making",
      description: "Leverage machine learning models that learn from your data and provide actionable insights for smarter business decisions."
    },
    {
      icon: Workflow,
      title: "Seamless Integration",
      description: "Deploy AI solutions that integrate perfectly with your existing tools and workflows. No disruption, just enhancement."
    },
    {
      icon: BarChart3,
      title: "Real-Time Analytics",
      description: "Track performance, monitor KPIs, and gain instant visibility into your automated processes with powerful dashboards."
    },
    {
      icon: Lock,
      title: "Enterprise Security",
      description: "Bank-grade encryption and compliance standards. Your data stays secure while AI works its magic behind the scenes."
    },
    {
      icon: Headphones,
      title: "24/7 Expert Support",
      description: "Our team of AI specialists is always available to help you optimize, troubleshoot, and scale your automation solutions."
    }
  ];

  return (
    <section ref={sectionRef} className="relative pt-8 sm:pt-12 pb-16 sm:pb-20 md:pb-24 bg-background">
      <motion.div 
        style={{ opacity, scale, y }}
        className="relative z-10 mx-auto max-w-7xl px-4 sm:px-6"
      >
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-12 sm:mb-16 md:mb-20 lg:mb-28"
        >
          <TypographyH2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold mb-4 sm:mb-6 md:mb-8 border-b-0 pb-0 px-2">
            <span className="bg-gradient-to-b from-[#FFFFFF] via-[#E4E4E7] to-[#71717A] bg-clip-text text-transparent">
              Why Choose Our AI Solutions
            </span>
          </TypographyH2>
          <TypographyP className="text-sm sm:text-base md:text-lg text-muted-foreground max-w-2xl mx-auto px-4">
            Powerful features designed to transform the way you work
          </TypographyP>
        </motion.div>

        {/* Features Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-5 md:gap-6">
          {features.map((feature, index) => {
            const Icon = feature.icon;
            return (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="relative group p-[2px] rounded-2xl bg-gradient-to-br from-border/30 via-border/10 to-transparent"
              >
                {/* Feature Card */}
                <div className="relative h-full min-h-[250px] sm:min-h-[280px] md:min-h-[300px] p-6 sm:p-7 md:p-8 rounded-xl sm:rounded-2xl bg-card border border-border/50 hover:border-transparent transition-all duration-300">
                  {/* Glowing Effect */}
                  <GlowingEffect
                    disabled={false}
                    proximity={200}
                    spread={50}
                    blur={8}
                    movementDuration={1.2}
                    borderWidth={3}
                    className="opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                  />
                  
                  {/* Icon */}
                  <div className="mb-3 sm:mb-4 inline-flex p-2.5 sm:p-3 rounded-lg sm:rounded-xl bg-gradient-to-br from-[#7209b7]/10 via-[#4361ee]/10 to-[#4cc9f0]/10 border border-[#4361ee]/20">
                    <Icon className="w-5 h-5 sm:w-6 sm:h-6 text-[#4cc9f0]" />
                  </div>

                  {/* Content */}
                  <TypographyH3 className="text-lg sm:text-xl font-semibold mb-2 sm:mb-3 text-foreground">
                    {feature.title}
                  </TypographyH3>
                  <TypographyP className="text-xs sm:text-sm text-muted-foreground leading-relaxed">
                    {feature.description}
                  </TypographyP>
                </div>
              </motion.div>
            );
          })}
        </div>
      </motion.div>
    </section>
  );
};

export default Features;

