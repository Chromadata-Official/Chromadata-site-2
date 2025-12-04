import React from 'react';
import { Twitter, Linkedin, Facebook, Globe } from 'lucide-react';
import { LOGO_URL } from '../constants';

const Footer: React.FC = () => {
  return (
    <footer className="bg-[#1b1b1b] text-slate-400 py-16 text-sm">
      <div className="container mx-auto px-6 lg:px-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-12 mb-16">
          {/* Brand Column */}
          <div className="lg:col-span-2">
            <div className="flex items-center space-x-3 mb-6">
                {/* Logo Container - white background for contrast */}
                <div className="bg-white p-3 rounded-md inline-block">
                    <img 
                      src={LOGO_URL}
                      alt="ChromaData" 
                      className="h-8 w-auto object-contain" 
                    />
                </div>
            </div>
            <p className="leading-relaxed mb-6 max-w-sm">
              We engineer the data that drives the world's most complex industries. From automotive configuration to music metadata and material handling logistics.
            </p>
            <div className="flex space-x-4">
               <a href="#" className="p-2 bg-slate-800 rounded-full hover:bg-cyan-600 hover:text-white transition-colors"><Linkedin size={18} /></a>
               <a href="#" className="p-2 bg-slate-800 rounded-full hover:bg-cyan-600 hover:text-white transition-colors"><Twitter size={18} /></a>
               <a href="#" className="p-2 bg-slate-800 rounded-full hover:bg-cyan-600 hover:text-white transition-colors"><Facebook size={18} /></a>
            </div>
          </div>

          {/* Links 1 */}
          <div>
            <h4 className="text-white font-bold mb-6">Solutions</h4>
            <ul className="space-y-4">
              <li><a href="#" className="hover:text-cyan-400 transition-colors">Data Standardization</a></li>
              <li><a href="#" className="hover:text-cyan-400 transition-colors">Configuration Logic</a></li>
              <li><a href="#" className="hover:text-cyan-400 transition-colors">Inventory Syndication</a></li>
              <li><a href="#" className="hover:text-cyan-400 transition-colors">Metadata Management</a></li>
              <li><a href="#" className="hover:text-cyan-400 transition-colors">Tableau Integration</a></li>
            </ul>
          </div>

           {/* Links 2 */}
           <div>
            <h4 className="text-white font-bold mb-6">Industries</h4>
            <ul className="space-y-4">
              <li><a href="#" className="hover:text-cyan-400 transition-colors">Automotive</a></li>
              <li><a href="#" className="hover:text-cyan-400 transition-colors">Music & Entertainment</a></li>
              <li><a href="#" className="hover:text-cyan-400 transition-colors">Material Handling</a></li>
              <li><a href="#" className="hover:text-cyan-400 transition-colors">Technology</a></li>
              <li><a href="#" className="hover:text-cyan-400 transition-colors">Logistics</a></li>
            </ul>
          </div>

          {/* Links 3 */}
          <div>
            <h4 className="text-white font-bold mb-6">Partners</h4>
            <ul className="space-y-4">
              <li><a href="#" className="hover:text-cyan-400 transition-colors">Google</a></li>
              <li><a href="#" className="hover:text-cyan-400 transition-colors">Tableau</a></li>
              <li><a href="#" className="hover:text-cyan-400 transition-colors">Sony</a></li>
              <li><a href="#" className="hover:text-cyan-400 transition-colors">Microsoft</a></li>
              <li><a href="#" className="hover:text-cyan-400 transition-colors">Partner Program</a></li>
            </ul>
          </div>
        </div>

        <div className="border-t border-slate-800 pt-8 flex flex-col md:flex-row justify-between items-center text-xs">
          <div className="flex flex-col md:flex-row md:items-center gap-4 mb-4 md:mb-0">
             <span>&copy; {new Date().getFullYear()} ChromaData. All rights reserved.</span>
             <span className="hidden md:inline text-slate-700">|</span>
             <a href="#" className="hover:text-white">Sitemap</a>
          </div>
          <div className="flex space-x-6">
            <a href="#" className="hover:text-white">Privacy Notice</a>
            <a href="#" className="hover:text-white">Terms of Use</a>
            <a href="#" className="hover:text-white flex items-center gap-1"><Globe size={12}/> Global</a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;