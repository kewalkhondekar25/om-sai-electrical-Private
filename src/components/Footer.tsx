"use client";
import { motion } from 'motion/react';
import { Mail, MapPin, Phone, ArrowRight } from 'lucide-react';

export default function Footer() {
  return (
    <footer className="bg-charcoal text-gray-400 pt-20 pb-12 border-t border-white/5 relative overflow-hidden mt-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* CTA Banner - Overlapping */}
        <motion.div 
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="bg-charcoal-light rounded-[2.5rem] p-10 md:p-16 flex flex-col md:flex-row items-center justify-between shadow-2xl border border-white/5 relative mb-20 group overflow-hidden z-20"
        >
          <div className="absolute inset-0 bg-gradient-to-r from-electric-teal/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-700"></div>
          <div className="relative z-10">
            <h3 className="text-3xl md:text-4xl font-display font-bold text-white mb-4 tracking-tight">Ready to upgrade your systems?</h3>
            <p className="text-gray-400 font-light">Connect with our engineering team for a consultation.</p>
          </div>
          <button className="mt-8 md:mt-0 bg-electric-teal text-charcoal px-8 py-4 rounded-xl font-bold flex items-center gap-3 hover:bg-white transition-all shadow-[0_4px_20px_rgba(0,229,255,0.2)] hover:shadow-[0_8px_30px_rgba(0,229,255,0.4)] hover:-translate-y-1 relative z-10">
            Contact Us <ArrowRight className="w-5 h-5" strokeWidth={2} />
          </button>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-12 lg:gap-8 mb-20">
          {/* Company Info */}
          <div className="lg:col-span-2 pr-8">
            <div className="flex items-center mb-8 cursor-pointer group">
              <div className="w-[280px] h-20 flex items-center justify-center rounded-xl bg-white overflow-hidden flex-shrink-0 -ml-2">
                <img src="https://res.cloudinary.com/kewalkhondekar/image/upload/v1774897473/labs/om-sai-electrical/om-sai-electrical-logo_ynrnqi.png" alt="Om Sai Electrical Logo" className="w-full h-full object-contain scale-[2.2]" />
              </div>
            </div>
            <p className="text-sm leading-relaxed font-light text-gray-500 mb-6 max-w-sm">
              Authorized ABB Channel Partner delivering premium automation solutions, VFDs, PLCs, and custom control panels for enterprise industries.
            </p>
            <div className="text-xs font-medium text-electric-teal tracking-widest uppercase">
              ISO 9001:2015 Certified
            </div>
          </div>

          {/* Quick Links */}
          <div className="lg:col-span-1">
            <h4 className="text-white font-display font-semibold text-lg mb-8 tracking-wide">Quick Links</h4>
            <ul className="space-y-4 text-sm font-light">
              {['Home', 'About Us', 'Clientele', 'Career', 'Contact Us', 'Enquiry'].map((link) => (
                <li key={link}>
                  <a href="#" className="hover:text-electric-teal transition-colors flex items-center gap-2 group">
                    <span className="w-1 h-1 rounded-full bg-gray-700 group-hover:bg-electric-teal transition-colors"></span>
                    {link}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Products */}
          <div className="lg:col-span-1">
            <h4 className="text-white font-display font-semibold text-lg mb-8 tracking-wide">Products</h4>
            <ul className="space-y-4 text-sm font-light">
              {['ABB Drives', 'ABB PLC', 'ABB Soft Starters', 'ABB Switchgears', 'Control Panels', 'SCADA Systems'].map((product) => (
                <li key={product}>
                  <a href="#" className="hover:text-electric-teal transition-colors flex items-center gap-2 group">
                    <span className="w-1 h-1 rounded-full bg-gray-700 group-hover:bg-electric-teal transition-colors"></span>
                    {product}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div className="lg:col-span-1">
            <h4 className="text-white font-display font-semibold text-lg mb-8 tracking-wide">Contact</h4>
            <ul className="space-y-6 text-sm font-light">
              <li className="flex items-start">
                <MapPin className="w-5 h-5 mr-4 text-electric-teal flex-shrink-0 mt-0.5" strokeWidth={1.5} />
                <span className="leading-relaxed">
                  Office -: ground floor G-3 krushna kunj building, <br/>
                  Tata Power, Kalyan, <br/>
                  Thane, Mumbai, Maharashtra, <br/>
                  India - 421306
                </span>
              </li>
              <li className="flex items-center">
                <Phone className="w-5 h-5 mr-4 text-electric-teal flex-shrink-0" strokeWidth={1.5} />
                <span className="leading-relaxed">+91 9867977353</span>
              </li>
              <li className="flex items-center">
                <Mail className="w-5 h-5 mr-4 text-electric-teal flex-shrink-0" strokeWidth={1.5} />
                <span className="leading-relaxed">omsaielectrical4685@gmail.com</span>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-white/5 pt-8 flex flex-col md:flex-row justify-between items-center text-xs font-light">
          <p>&copy; {new Date().getFullYear()} Om Sai Electrical. All rights reserved.</p>
          <div className="flex space-x-6 mt-4 md:mt-0">
            <a href="#" className="hover:text-electric-teal transition-colors">Privacy Policy</a>
            <a href="#" className="hover:text-electric-teal transition-colors">Terms of Service</a>
          </div>
        </div>
      </div>
    </footer>
  );
}
