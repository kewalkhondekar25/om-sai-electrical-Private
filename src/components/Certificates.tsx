"use client";
import { motion } from 'motion/react';

export default function Certificates() {
  return (
    <section className="py-32 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-20"
        >
          <h2 className="font-display text-4xl md:text-5xl font-bold text-charcoal tracking-tight">Our Certificates</h2>
          <div className="w-24 h-1 bg-electric-teal mx-auto mt-8 rounded-full"></div>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-16 max-w-5xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="bg-charcoal p-3 rounded-[2.5rem] shadow-2xl relative hover:-translate-y-2 transition-transform duration-500"
          >
            {/* Tablet Camera Dot */}
            <div className="absolute top-1/2 -left-1.5 w-3 h-3 bg-gray-900 rounded-full border border-gray-700 transform -translate-y-1/2 hidden md:block"></div>
            <div className="absolute -top-1.5 left-1/2 w-3 h-3 bg-gray-900 rounded-full border border-gray-700 transform -translate-x-1/2 md:hidden"></div>
            
            <div className="bg-gray-50 rounded-[2rem] h-full w-full overflow-hidden relative border border-gray-200">
              <div className="aspect-[3/4] flex flex-col items-center justify-center p-12 text-center relative">
                <div className="absolute top-10 right-10 text-red-600 font-display font-black text-3xl tracking-tighter">ABB</div>
                <h3 className="text-3xl font-serif text-charcoal mb-4">Certificate</h3>
                <p className="text-gray-500 uppercase tracking-[0.2em] text-sm mb-12 font-medium">Authorized Channel Partner</p>
                <div className="w-full h-px bg-gray-300 my-6"></div>
                <p className="text-charcoal font-display font-bold text-xl mt-6">Om Sai Electrical</p>
                <p className="text-gray-500 text-sm mt-2 tracking-wide">Kalyan, Thane</p>
              </div>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="bg-charcoal p-3 rounded-[2.5rem] shadow-2xl relative hover:-translate-y-2 transition-transform duration-500"
          >
            {/* Tablet Camera Dot */}
            <div className="absolute top-1/2 -right-1.5 w-3 h-3 bg-gray-900 rounded-full border border-gray-700 transform -translate-y-1/2 hidden md:block"></div>
            <div className="absolute -top-1.5 left-1/2 w-3 h-3 bg-gray-900 rounded-full border border-gray-700 transform -translate-x-1/2 md:hidden"></div>
            
            <div className="bg-gray-50 rounded-[2rem] h-full w-full overflow-hidden relative border border-gray-200">
              <div className="aspect-[3/4] flex flex-col items-center justify-center p-12 text-center relative">
                <div className="absolute top-10 right-10 text-red-600 font-display font-black text-3xl tracking-tighter">ABB</div>
                <h3 className="text-5xl font-serif text-gray-300 mb-10 uppercase tracking-widest">Distributor</h3>
                <p className="text-gray-500 uppercase tracking-[0.2em] text-xs mb-4 font-medium">Channel Partner</p>
                <div className="w-full h-px bg-gray-300 my-6"></div>
                <p className="text-charcoal font-display font-bold text-xl mt-6">Om Sai Electrical, Kalyan</p>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
