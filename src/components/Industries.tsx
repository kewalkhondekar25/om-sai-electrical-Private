"use client";
import { motion } from 'motion/react';
import { ArrowUpRight } from 'lucide-react';
import Image from 'next/image';

export default function Industries() {
  const industries = [
    "Food and Beverage",
    "Water and Wastewater",
    "Chemical Processing",
    "Packaging Systems",
    "HVACR Solutions",
    "Marine and Offshore",
    "Pharmaceuticals",
    "Cranes and Hoists",
    "Metals and Mining",
    "Rubber and Plastics",
    "Textile Manufacturing"
  ];

  return (
    <section className="py-32 bg-white relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-20 items-center">
          
          {/* Content */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <h2 className="font-display text-4xl md:text-5xl font-bold text-charcoal mb-12 tracking-tight">
              Industries We <span className="text-electric-teal-dark">Serve</span>
            </h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-x-12 gap-y-6">
              {industries.map((industry, index) => (
                <motion.div 
                  key={index}
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.4, delay: index * 0.05 }}
                  className="flex items-center group cursor-default border-b border-gray-100 pb-4"
                >
                  <span className="text-gray-500 font-light text-lg group-hover:text-charcoal transition-colors flex-grow">{industry}</span>
                  <ArrowUpRight className="w-5 h-5 text-gray-300 group-hover:text-electric-teal transition-colors" strokeWidth={1.5} />
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* Image */}
          <motion.div
            initial={{ opacity: 0, x: 40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <div className="relative rounded-[2.5rem] overflow-hidden shadow-2xl h-[650px] group">
              <Image 
                src="/images/cement-spreader-2.jpg" 
                alt="Industrial Plant Automation" 
                fill
                className="object-cover transition-transform duration-1000 group-hover:scale-105"
              />
              {/* Cinematic cool-tone overlay */}
              <div className="absolute inset-0 bg-blue-900/40 mix-blend-overlay transition-opacity duration-500 group-hover:opacity-30"></div>
              <div className="absolute inset-0 bg-gradient-to-t from-charcoal via-charcoal/40 to-transparent flex items-end p-12">
                <p className="text-white text-3xl font-display font-medium tracking-wide leading-tight">
                  Powering diverse sectors with <span className="text-electric-teal">precision automation.</span>
                </p>
              </div>
            </div>
          </motion.div>

        </div>
      </div>
    </section>
  );
}
