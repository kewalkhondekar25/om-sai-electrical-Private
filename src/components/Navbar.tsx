"use client";
import { Menu, X } from 'lucide-react';
import { useState } from 'react';

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  const navLinks = [
    { name: 'Home', href: '#' },
    { name: 'About', href: '#' },
    { name: 'Products', href: '#' },
    { name: 'Clientele', href: '#' },
    { name: 'Contact', href: '#' },
    { name: 'Enquiry', href: '#' },
    { name: 'Career', href: '#' },
  ];

  return (
    <nav className="bg-white/90 backdrop-blur-md shadow-sm sticky top-0 z-40 border-b border-gray-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-24">
          {/* Logo Area */}
          <div className="flex items-center">
            <div className="flex-shrink-0 flex items-center cursor-pointer group">
              <div className="w-[340px] h-24 overflow-hidden flex items-center justify-center -ml-4">
                <img src="https://res.cloudinary.com/kewalkhondekar/image/upload/v1774897473/labs/om-sai-electrical/om-sai-electrical-logo_ynrnqi.png" alt="Om Sai Electrical Logo" className="w-full h-full object-contain scale-[2.2] mix-blend-multiply" />
              </div>
            </div>
          </div>

          {/* Desktop Menu */}
          <div className="hidden md:flex items-center space-x-8">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                className="relative text-gray-500 hover:text-charcoal py-2 text-sm font-medium transition-colors group tracking-wide"
              >
                {link.name}
                <span className="absolute bottom-0 left-0 w-full h-[2px] bg-electric-teal scale-x-0 group-hover:scale-x-100 transition-transform origin-left duration-300 rounded-full"></span>
              </a>
            ))}
            {/* ABB Partner Logo */}
            <div className="ml-6 border-l pl-6 border-gray-200">
              <div className="flex flex-col items-end">
                <span className="text-[8px] font-bold text-gray-400 uppercase tracking-widest">Authorized</span>
                <span className="text-[8px] font-bold text-gray-400 uppercase leading-none tracking-widest">Value Provider</span>
                <span className="text-red-600 font-display font-black text-xl leading-none mt-1 tracking-tighter">ABB</span>
              </div>
            </div>
          </div>

          {/* Mobile menu button */}
          <div className="flex items-center md:hidden">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="inline-flex items-center justify-center p-2 rounded-md text-gray-400 hover:text-charcoal hover:bg-gray-50 focus:outline-none transition-colors"
            >
              {isOpen ? <X className="block h-6 w-6" strokeWidth={1.5} /> : <Menu className="block h-6 w-6" strokeWidth={1.5} />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="md:hidden bg-white border-t border-gray-100 absolute w-full shadow-xl">
          <div className="px-4 pt-2 pb-6 space-y-1">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                className="block px-3 py-3 rounded-lg text-base font-medium text-gray-600 hover:text-charcoal hover:bg-gray-50 transition-colors"
              >
                {link.name}
              </a>
            ))}
          </div>
        </div>
      )}
    </nav>
  );
}
