"use client";
import { motion } from 'motion/react';
import Image from 'next/image';

const applications = [
  { name: 'AC Drum Manufacturing', image: '/images/AC drum manufacturing system machine and automation.jpg' },
  { name: 'Fire Training Systems', image: '/images/BA gallery fire training system.jpg' },
  { name: 'Perfume Tank Systems', image: '/images/Perfume tank systems2.jpg' },
  { name: 'Pharma Water Distribution', image: '/images/Pharma company water distributor panel.jpg' },
  { name: 'Soap Line Automation', image: '/images/Soap line automation plant1.jpg' },
  { name: 'Cement Spreader Systems', image: '/images/cement-spreader-1.jpg' },
  { name: 'VFD Control Panels', image: '/images/AC drum manufacturing system machine and automation2.jpg' },
  { name: 'PLC / SCADA Systems', image: '/images/Pharma company water distributor panel2.jpg' },
];

export default function Applications() {
  return (
    <section className="py-32 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-20"
        >
          <h2 className="font-display text-4xl md:text-5xl font-bold text-charcoal tracking-tight">Applications & Systems We Build</h2>
          <p className="mt-4 text-lg text-gray-600 max-w-2xl mx-auto">
            From custom control panels to full-scale plant automation, we deliver precision-engineered solutions across diverse industrial applications.
          </p>
          <div className="w-24 h-1 bg-electric-teal mx-auto mt-8 rounded-full"></div>
        </motion.div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {applications.map((app, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.05 }}
              className="group bg-white rounded-2xl overflow-hidden shadow-sm hover:shadow-2xl transition-all duration-500 hover:-translate-y-2 border border-gray-100"
            >
              <div className="relative h-56 overflow-hidden">
                <div className="absolute inset-0 bg-charcoal/10 group-hover:bg-transparent transition-colors duration-500 z-10"></div>
                <Image 
                  src={app.image} 
                  alt={app.name} 
                  fill
                  className="object-cover transform group-hover:scale-105 transition-transform duration-700"
                />
              </div>
              <div className="p-6 bg-white relative z-20">
                <h3 className="text-lg font-display font-medium text-charcoal text-center tracking-wide group-hover:text-electric-teal-dark transition-colors">
                  {app.name}
                </h3>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
