"use client";
import { motion } from 'motion/react';
import { Activity } from 'lucide-react';
import Image from 'next/image';

export default function About() {
  const stats = [
    { number: '20+', label: 'Years Experience' },
    { number: '100+', label: 'Projects Deployed' },
    { number: '50+', label: 'Enterprise Clients' },
  ];

  return (
    <section className="py-32 bg-white relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-20 items-center">
          
          {/* Text Content */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.8 }}
          >
            <h2 className="font-display text-4xl md:text-5xl font-bold text-charcoal mb-8 tracking-tight">
              Engineering the Future of <span className="text-electric-teal-dark">Automation</span>
            </h2>
            <div className="space-y-6 text-gray-500 text-lg font-light leading-relaxed">
              <p>
                Welcome to Om Sai Electrical, an ISO Certified Company, your trusted partner in industrial automation with nearly 20 years of expertise. As an authorized channel partner of ABB, we provide top-tier solutions in VFDs, PLCs, servo drives & switchgears.
              </p>
              <p>
                We specialize in building custom automation panels and offer comprehensive services for PLC and SCADA systems, helping businesses enhance operational efficiency and control.
              </p>
            </div>

            {/* Stats Grid */}
            <div className="grid grid-cols-3 gap-6 mt-16">
              {stats.map((stat, index) => (
                <motion.div 
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  className="bg-charcoal text-white p-6 rounded-2xl shadow-xl relative overflow-hidden group border border-gray-800 hover:-translate-y-1 transition-transform duration-300"
                >
                  <div className="absolute inset-0 -translate-x-full bg-gradient-to-r from-transparent via-white/10 to-transparent group-hover:animate-[shimmer_1.5s_infinite]"></div>
                  <div className="font-display text-4xl md:text-5xl font-bold text-electric-teal mb-3">{stat.number}</div>
                  <div className="text-[10px] md:text-xs font-medium text-gray-400 uppercase tracking-widest">{stat.label}</div>
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* Single Cohesive Vertical Card */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.8 }}
            className="relative"
          >
            <div className="bg-charcoal rounded-[2.5rem] p-3 shadow-2xl relative overflow-hidden border border-gray-800 group h-[600px]">
              <div className="absolute inset-0 bg-gradient-to-b from-electric-teal/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-700 z-10"></div>
              
              <Image 
                src="/images/Pharma company water distributor panel.jpg" 
                alt="Control Panel Interior" 
                fill
                className="object-cover rounded-[2rem] transition-transform duration-1000 group-hover:scale-105"
              />
              
              {/* Simulated Live HMI Overlay */}
              <div className="absolute bottom-8 left-8 right-8 glass-panel rounded-2xl p-5 flex flex-col gap-4 z-20">
                <div className="flex items-center justify-between border-b border-white/10 pb-3">
                  <div className="flex items-center gap-3">
                    <div className="w-2.5 h-2.5 rounded-full bg-electric-teal animate-pulse shadow-[0_0_10px_rgba(0,229,255,0.8)]"></div>
                    <span className="text-white font-mono text-sm tracking-wide">System Active</span>
                  </div>
                  <Activity className="w-5 h-5 text-electric-teal" strokeWidth={1.5} />
                </div>
                <div className="grid grid-cols-3 gap-4">
                  <div>
                    <div className="text-gray-400 text-[10px] uppercase tracking-wider mb-1">Uptime</div>
                    <div className="text-white font-mono text-lg">99.9%</div>
                  </div>
                  <div>
                    <div className="text-gray-400 text-[10px] uppercase tracking-wider mb-1">Load</div>
                    <div className="text-white font-mono text-lg">42%</div>
                  </div>
                  <div>
                    <div className="text-gray-400 text-[10px] uppercase tracking-wider mb-1">Status</div>
                    <div className="text-electric-teal font-mono text-lg">Optimal</div>
                  </div>
                </div>
              </div>
            </div>
            
            {/* Decorative blur behind the card */}
            <div className="absolute -inset-4 bg-electric-teal/20 blur-3xl -z-10 rounded-[3rem] opacity-50"></div>
          </motion.div>

        </div>
      </div>
    </section>
  );
}
