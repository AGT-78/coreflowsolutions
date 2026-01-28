import React, { useRef } from 'react';
import { motion, useScroll, useTransform } from 'motion/react';
import { TypographyH2, TypographyP } from '@/components/typography';
import { Wind, Activity, Stethoscope, Scale, Wrench } from 'lucide-react';

const Industries = () => {
  const sectionRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start end", "start center"]
  });

  const opacity = useTransform(scrollYProgress, [0, 0.4, 0.8], [0, 0.6, 1]);
  const scale = useTransform(scrollYProgress, [0, 0.4, 0.8], [0.92, 0.96, 1]);
  const y = useTransform(scrollYProgress, [0, 0.4, 0.8], [80, 40, 0]);

  const industries = [
    {
      icon: Wind,
      name: "HVAC Services",
      color: "text-cyan-400"
    },
    {
      icon: Activity,
      name: "Dental Practices",
      color: "text-purple-400"
    },
    {
      icon: Stethoscope,
      name: "Medical Clinics",
      color: "text-emerald-400"
    },
    {
      icon: Scale,
      name: "Law Firms",
      color: "text-amber-400"
    },
    {
      icon: Wrench,
      name: "Plumbing Services",
      color: "text-indigo-400"
    }
  ];

  return (
    <section ref={sectionRef} className="relative pt-12 pb-24 bg-background">
      <motion.div 
        style={{ opacity, scale, y }}
        className="relative z-10 mx-auto max-w-7xl px-6"
      >
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-20"
        >
          <TypographyH2 className="text-4xl md:text-5xl font-bold mb-6 border-b-0 pb-0">
            <span className="bg-gradient-to-b from-[#FFFFFF] via-[#E4E4E7] to-[#71717A] bg-clip-text text-transparent">
              Industries We Serve
            </span>
          </TypographyH2>
          <TypographyP className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Tailored AI solutions for businesses across industries
          </TypographyP>
        </motion.div>

        {/* Industries Grid */}
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-12 md:gap-16">
          {industries.map((industry, index) => {
            const Icon = industry.icon;
            return (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="flex flex-col items-center text-center gap-4"
              >
                {/* Icon */}
                <div className="relative">
                  <Icon className={`w-16 h-16 md:w-20 md:h-20 ${industry.color} transition-transform duration-300 hover:scale-110`} strokeWidth={1.5} />
                </div>

                {/* Label */}
                <p className="text-sm md:text-base font-medium text-foreground/80">
                  {industry.name}
                </p>
              </motion.div>
            );
          })}
        </div>
      </motion.div>
    </section>
  );
};

export default Industries;
