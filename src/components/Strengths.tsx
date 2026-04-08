"use client";
import { motion } from 'motion/react';
import { Hexagon, Zap } from 'lucide-react';

export default function Strengths() {
  const strengths = [
    "20+ Years of Expertise in industrial automation.",
    "ABB Authorized Channel Partner for PLCs, VFDs, Servo Drives & Switchgears.",
    "10000 sq. feet working area in MIDC.",
    "In-House MS & SS Fabrication Facility for custom panel building.",
    "Skilled Technical Team ensuring reliable, high-performance systems.",
    "Seamless Integration with existing workflows.",
    "Innovative, Future-Ready Solutions using the latest technologies.",
    "Commitment to Quality and long-term client support.",
    "Proven Success across diverse industries."
  ];

  return (
    <section className="py-32 bg-gray-50 relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-20 items-center">
          
          {/* Image */}
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="order-2 lg:order-1 relative"
          >
            <div className="relative rounded-[2.5rem] overflow-hidden shadow-2xl group">
              <div className="absolute inset-0 bg-charcoal mix-blend-overlay opacity-20 group-hover:opacity-10 transition-opacity duration-500 z-10"></div>
              <img 
                src="https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?auto=format&fit=crop&q=80&w=1000&h=1000" 
                alt="Engineers working" 
                className="w-full h-[650px] object-cover transition-transform duration-1000 group-hover:scale-105"
              />
            </div>
            {/* Floating accent */}
            <div className="absolute -bottom-8 -right-8 w-48 h-48 bg-electric-teal/10 rounded-full blur-2xl -z-10"></div>
          </motion.div>

          {/* Content */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="order-1 lg:order-2"
          >
            <h2 className="font-display text-4xl md:text-5xl font-bold text-charcoal mb-12 tracking-tight">
              Our Key <span className="text-electric-teal-dark">Strengths</span>
            </h2>
            <ul className="space-y-8">
              {strengths.map((strength, index) => (
                <motion.li 
                  key={index}
                  initial={{ opacity: 0, x: 20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: index * 0.05 }}
                  className="flex items-start group"
                >
                  <div className="relative mr-6 flex-shrink-0 mt-1">
                    <Hexagon className="w-7 h-7 text-gray-200 group-hover:text-electric-teal transition-colors duration-300" strokeWidth={1.5} />
                    <Zap className="w-3.5 h-3.5 text-electric-teal absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 icon-glow opacity-0 group-hover:opacity-100 transition-opacity duration-300" strokeWidth={2} />
                  </div>
                  <span className="text-gray-600 text-lg font-light leading-relaxed group-hover:text-charcoal transition-colors duration-300">{strength}</span>
                </motion.li>
              ))}
            </ul>
          </motion.div>

        </div>
      </div>
    </section>
  );
}
