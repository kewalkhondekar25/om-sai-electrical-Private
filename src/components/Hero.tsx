import { motion } from 'motion/react';
import { ArrowRight } from 'lucide-react';

export default function Hero() {
  return (
    <div className="relative bg-charcoal overflow-hidden min-h-[700px] flex items-center">
      {/* Geometric Gradient Background */}
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top_right,_var(--tw-gradient-stops))] from-teal-900/40 via-charcoal to-charcoal"></div>
      
      {/* Subtle grid overlay for tech feel */}
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#ffffff05_1px,transparent_1px),linear-gradient(to_bottom,#ffffff05_1px,transparent_1px)] bg-[size:4rem_4rem] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_0%,#000_70%,transparent_100%)]"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 w-full py-20">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          
          {/* Text Content */}
          <motion.div 
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            className="text-white"
          >
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full glass-panel text-electric-teal text-xs font-medium tracking-widest uppercase mb-8">
              <span className="w-2 h-2 rounded-full bg-electric-teal animate-pulse"></span>
              Enterprise Automation
            </div>
            <h1 className="font-display text-5xl md:text-7xl font-bold leading-[1.1] mb-6 tracking-tight">
              ABB Authorised <br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-electric-teal to-blue-400">Channel Partner</span>
            </h1>
            <p className="text-lg text-gray-400 mb-10 max-w-lg font-light leading-relaxed">
              Delivering cutting-edge automation solutions, VFDs, PLCs, and custom control panels to optimize your industrial processes with precision.
            </p>
            <motion.button 
              whileHover={{ scale: 1.02, y: -2 }}
              whileTap={{ scale: 0.98 }}
              className="bg-electric-teal text-charcoal px-8 py-4 rounded-xl font-bold flex items-center gap-3 hover:bg-white transition-all shadow-[0_4px_20px_rgba(0,229,255,0.2)] hover:shadow-[0_8px_30px_rgba(0,229,255,0.4)]"
            >
              Explore Solutions <ArrowRight className="w-5 h-5" strokeWidth={2} />
            </motion.button>
          </motion.div>

          {/* Image Grid / Composition */}
          <motion.div 
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1, delay: 0.2 }}
            className="relative h-[550px] hidden lg:block"
          >
            {/* Floating Glass Panels */}
            <div className="absolute top-4 right-4 w-64 h-64 glass-panel p-3 rounded-3xl transform rotate-3 hover:rotate-0 transition-all duration-500 z-20 hover:scale-105 hover:z-40">
              <img src="https://images.unsplash.com/photo-1581092160562-40aa08e78837?auto=format&fit=crop&q=80&w=400&h=400" alt="PLC Systems" className="w-full h-full object-cover rounded-2xl" />
            </div>
            <div className="absolute bottom-4 left-4 w-56 h-56 glass-panel p-3 rounded-3xl transform -rotate-6 hover:rotate-0 transition-all duration-500 z-30 hover:scale-105 hover:z-40">
              <img src="https://images.unsplash.com/photo-1537462715879-360eeb61a0ad?auto=format&fit=crop&q=80&w=400&h=400" alt="Drives" className="w-full h-full object-cover rounded-2xl" />
            </div>
            <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-72 h-72 glass-panel p-3 rounded-3xl z-10 hover:scale-105 transition-all duration-500 hover:z-40">
              <img src="https://images.unsplash.com/photo-1581092335397-9583eb92d232?auto=format&fit=crop&q=80&w=500&h=500" alt="Automation" className="w-full h-full object-cover rounded-2xl" />
            </div>
            
            {/* Decorative elements */}
            <div className="absolute top-1/4 left-1/4 w-32 h-32 bg-electric-teal/20 rounded-full blur-3xl"></div>
            <div className="absolute bottom-1/4 right-1/4 w-40 h-40 bg-blue-500/20 rounded-full blur-3xl"></div>
          </motion.div>

        </div>
      </div>
    </div>
  );
}
