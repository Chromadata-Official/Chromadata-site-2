import React, { useState, useEffect } from 'react';
import { Menu, X, ChevronRight, Search } from 'lucide-react';
import { NAV_ITEMS, LOGO_URL } from '../constants';

const Header: React.FC = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <header 
      className={`fixed w-full z-50 transition-all duration-300 bg-white shadow-sm border-b border-gray-100 h-20`}
    >
      <div className="container mx-auto px-6 lg:px-12 flex items-center justify-between h-full">
        {/* Logo */}
        <a href="#" className="flex items-center cursor-pointer group">
            <img 
              src={LOGO_URL}
              alt="ChromaData" 
              className="h-10 w-auto object-contain" 
            />
        </a>

        {/* Desktop Nav */}
        <nav className="hidden lg:flex items-center space-x-8 h-full">
          {NAV_ITEMS.map((item) => (
            <a 
              key={item.label} 
              href={item.href}
              className="relative h-full flex items-center text-sm font-semibold text-slate-700 hover:text-blue-900 transition-colors group"
            >
              {item.label}
              <span className="absolute bottom-0 left-0 w-full h-1 bg-blue-600 scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-left"></span>
            </a>
          ))}
        </nav>

        {/* Utilities */}
        <div className="hidden lg:flex items-center space-x-6">
            <button className="text-slate-600 hover:text-blue-900">
                <Search className="w-5 h-5" />
            </button>
            <button className="text-sm font-bold text-slate-700 hover:text-blue-900">
                Login
            </button>
            <button className={`px-6 py-2 text-sm font-bold rounded-sm transition-colors bg-blue-900 text-white hover:bg-blue-800`}>
                Contact Us
            </button>
        </div>

        {/* Mobile Menu Toggle */}
        <button 
          className="lg:hidden text-slate-900"
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
        >
          {mobileMenuOpen ? <X /> : <Menu />}
        </button>
      </div>

      {/* Mobile Menu Overlay */}
      {mobileMenuOpen && (
        <div className="absolute top-full left-0 w-full bg-white shadow-lg py-6 px-6 lg:hidden flex flex-col space-y-4 text-slate-900 border-t border-slate-100">
          {NAV_ITEMS.map((item) => (
            <a 
              key={item.label} 
              href={item.href}
              className="flex items-center justify-between text-lg font-medium border-b border-slate-100 pb-3"
              onClick={() => setMobileMenuOpen(false)}
            >
              {item.label}
              <ChevronRight className="w-4 h-4 text-slate-400" />
            </a>
          ))}
          <div className="pt-4 space-y-4">
             <button className="w-full text-center font-bold text-slate-900 py-2">Login</button>
             <button className="w-full bg-green-600 text-white py-3 font-bold rounded-sm shadow-sm">
                Get Started
            </button>
          </div>
        </div>
      )}
    </header>
  );
};

export default Header;