"use client";
import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { ArrowRight } from 'lucide-react';
import Image from 'next/image';

const CAROUSEL_SLIDES = [
  {
    image: '/images/AC drum manufacturing system machine and automation.jpg',
    title: 'ABB Authorised',
    highlight: 'Channel Partner',
    description: 'Delivering cutting-edge automation solutions, VFDs, PLCs, and custom control panels to optimize your industrial processes with precision.'
  },
  {
    image: '/images/Pharma company water distributor panel.jpg',
    title: 'Advanced PLC &',
    highlight: 'Drive Systems',
    description: 'State-of-the-art programmable logic controllers and variable frequency drives for seamless industrial operations.'
  },
  {
    image: '/images/Soap line automation plant1.jpg',
    title: 'Industrial',
    highlight: 'Automation',
    description: 'End-to-end automation solutions from concept to commissioning for diverse manufacturing sectors.'
  },
  {
    image: '/images/BA gallery fire training system.jpg',
    title: 'Custom Control',
    highlight: 'Panels',
    description: 'Expertly designed and manufactured control panels meeting the highest international safety and quality standards.'
  }
];

export default function Hero() {
  const [currentSlide, setCurrentSlide] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % CAROUSEL_SLIDES.length);
    }, 6000); // Change slide every 6 seconds
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="relative bg-charcoal overflow-hidden min-h-[85vh] flex items-center justify-center">
      {/* Background Image Carousel */}
      <div className="absolute inset-0 z-0">
        <AnimatePresence mode="popLayout">
          <motion.div
            key={currentSlide}
            initial={{ opacity: 0, scale: 1.05 }}
            animate={{ opacity: 0.5, scale: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 1.5, ease: "easeInOut" }}
            className="absolute inset-0"
          >
            <Image
              src={CAROUSEL_SLIDES[currentSlide].image}
              alt={CAROUSEL_SLIDES[currentSlide].title}
              fill
              className="object-cover"
              priority
            />
          </motion.div>
        </AnimatePresence>
        {/* Dark gradient overlay to ensure text readability */}
        <div className="absolute inset-0 bg-gradient-to-b from-charcoal/70 via-charcoal/50 to-charcoal/90"></div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 w-full py-20 flex flex-col items-center text-center mt-10">
        <AnimatePresence mode="wait">
          <motion.div 
            key={currentSlide}
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -30 }}
            transition={{ duration: 0.6, ease: "easeOut" }}
            className="text-white max-w-4xl flex flex-col items-center"
          >
            <h1 className="font-display text-5xl md:text-7xl lg:text-8xl font-bold leading-[1.1] mb-6 tracking-tight drop-shadow-2xl">
              {CAROUSEL_SLIDES[currentSlide].title} <br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-electric-teal to-blue-400">
                {CAROUSEL_SLIDES[currentSlide].highlight}
              </span>
            </h1>
            
            <p className="text-lg md:text-xl text-gray-200 mb-10 max-w-2xl font-light leading-relaxed drop-shadow-md">
              {CAROUSEL_SLIDES[currentSlide].description}
            </p>
            
            <motion.button 
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="bg-electric-teal text-charcoal px-8 py-4 rounded-full font-bold flex items-center gap-3 hover:bg-white transition-all shadow-[0_4px_20px_rgba(0,229,255,0.3)] hover:shadow-[0_8px_30px_rgba(0,229,255,0.5)]"
            >
              Explore Solutions <ArrowRight className="w-5 h-5" strokeWidth={2} />
            </motion.button>
          </motion.div>
        </AnimatePresence>
      </div>
    </div>
  );
}
