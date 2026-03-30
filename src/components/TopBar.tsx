import { Mail, Phone } from 'lucide-react';

export default function TopBar() {
  return (
    <div className="bg-charcoal text-gray-400 py-2 px-4 md:px-8 text-xs flex flex-col md:flex-row justify-between items-center z-50 relative border-b border-white/5">
      <div className="flex items-center space-x-8 mb-2 md:mb-0">
        <span className="hidden md:inline tracking-wider uppercase text-[10px] font-medium">ISO 9001:2015 Certified</span>
        <div className="flex items-center space-x-6">
          <span className="flex items-center hover:text-electric-teal transition-colors cursor-pointer">
            <Phone className="w-3 h-3 mr-2 text-electric-teal" strokeWidth={1.5} /> +91 9867977353
          </span>
        </div>
      </div>
      <div className="flex items-center space-x-8">
        <a href="mailto:omsaielectrical4685@gmail.com" className="flex items-center hover:text-electric-teal transition-colors">
          <Mail className="w-3 h-3 mr-2 text-electric-teal" strokeWidth={1.5} /> omsaielectrical4685@gmail.com
        </a>
      </div>
    </div>
  );
}
