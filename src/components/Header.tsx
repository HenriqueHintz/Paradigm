import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Menu, X, ChevronDown, ArrowRight, User } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';

const navigation = [
  { name: 'About', href: '/about' },
  { name: 'Services', href: '#', dropdown: [
    { name: 'Real Estate Development', href: '/services/development' },
    { name: 'Construction', href: '/services/construction' },
    { name: 'Property Management', href: '/services/management' },
    { name: 'Affordable Housing', href: '/services/affordable-housing' },
  ]},
  { name: 'Communities', href: '/communities' },
  { name: 'Careers', href: '/careers' },
];

const Header = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const [activeDropdown, setActiveDropdown] = useState<string | null>(null);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 50);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => { setIsOpen(false); }, [location]);

  // Lock body scroll when mobile menu is open
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = 'hidden';
      document.body.style.touchAction = 'none';
      document.body.style.position = 'fixed';
      document.body.style.inset = '0';
      document.body.style.width = '100%';
    } else {
      document.body.style.overflow = '';
      document.body.style.touchAction = '';
      document.body.style.position = '';
      document.body.style.inset = '';
      document.body.style.width = '';
    }
    return () => {
      document.body.style.overflow = '';
      document.body.style.touchAction = '';
      document.body.style.position = '';
      document.body.style.inset = '';
      document.body.style.width = '';
    };
  }, [isOpen]);

  const isDarkPage = location.pathname === '/';

  return (
    <header className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ease-expo ${isScrolled ? 'bg-white/95 backdrop-blur-md shadow-sm py-3' : 'bg-transparent py-5'}`}>
      <nav className="max-w-7xl mx-auto px-6 flex items-center justify-between">
        <Link to="/" className="flex items-center group">
          <div className="flex flex-col">
            <span className={`font-display text-2xl font-bold tracking-[0.15em] transition-colors duration-300 ${isScrolled || !isDarkPage ? 'text-navy' : 'text-white'}`}>PARADIGM</span>
            <span className={`text-[9px] font-bold tracking-[0.4em] uppercase transition-colors duration-300 ${isScrolled || !isDarkPage ? 'text-gold' : 'text-gold/80'}`}>Companies</span>
          </div>
        </Link>

        <div className="hidden lg:flex items-center space-x-8">
          {navigation.map((item) => (
            <div key={item.name} className="relative group" onMouseEnter={() => item.dropdown && setActiveDropdown(item.name)} onMouseLeave={() => setActiveDropdown(null)}>
              <Link to={item.href} className={`flex items-center text-[13px] font-bold tracking-[0.12em] uppercase transition-colors duration-300 py-2 ${isScrolled || !isDarkPage ? 'text-navy/60 hover:text-navy' : 'text-white/70 hover:text-white'}`}>
                {item.name}
                {item.dropdown && <ChevronDown className={`ml-1 size-3 transition-transform duration-300 ${activeDropdown === item.name ? 'rotate-180' : ''}`} />}
              </Link>
              {item.dropdown && (
                <AnimatePresence>
                  {activeDropdown === item.name && (
                    <motion.div initial={{ opacity: 0, y: 8 }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0, y: 8 }} transition={{ duration: 0.2 }} className="absolute top-full left-0 w-64 bg-white shadow-2xl border border-navy/5 mt-2 py-3 overflow-hidden">
                      {item.dropdown.map((sub) => (
                        <Link key={sub.name} to={sub.href} className="block px-6 py-3 text-[12px] font-semibold tracking-wider text-navy/60 hover:text-navy hover:bg-cream transition-all flex items-center justify-between group/item">
                          {sub.name}
                          <ArrowRight className="size-3 opacity-0 -translate-x-2 group-hover/item:opacity-100 group-hover/item:translate-x-0 transition-all" />
                        </Link>
                      ))}
                    </motion.div>
                  )}
                </AnimatePresence>
              )}
            </div>
          ))}
          <div className="h-4 w-px bg-navy/10 mx-2" />
          <Link to="/contact" className={`text-[13px] font-bold tracking-[0.12em] uppercase transition-colors duration-300 ${isScrolled || !isDarkPage ? 'text-navy/60 hover:text-navy' : 'text-white/70 hover:text-white'}`}>Contact</Link>
          <Link to="/portal" className={`flex items-center px-5 py-2 text-[11px] font-bold tracking-[0.12em] uppercase transition-all duration-300 border ${isScrolled || !isDarkPage ? 'border-navy text-navy hover:bg-navy hover:text-white' : 'border-white/30 text-white hover:bg-white hover:text-navy'}`}>
            <User className="size-3 mr-2" />Employees
          </Link>
        </div>

        <button className={`lg:hidden p-2 transition-colors ${isScrolled || !isDarkPage ? 'text-navy' : 'text-white'}`} onClick={() => setIsOpen(!isOpen)} aria-label="Toggle menu">
          {isOpen ? <X className="size-6" /> : <Menu className="size-6" />}
        </button>
      </nav>

      <AnimatePresence>
        {isOpen && (
          <motion.div initial={{ opacity: 0, x: '100%' }} animate={{ opacity: 1, x: 0 }} exit={{ opacity: 0, x: '100%' }} transition={{ type: 'spring', damping: 25, stiffness: 200 }} className="fixed inset-0 z-[100] bg-navy lg:hidden" style={{ touchAction: 'none', overscrollBehavior: 'contain' }}>
            <div className="flex flex-col h-full p-8">
              <div className="flex justify-between items-center mb-16">
                <span className="font-display text-2xl font-bold tracking-[0.15em] text-white">PARADIGM</span>
                <button onClick={() => setIsOpen(false)} className="text-white"><X className="size-8" /></button>
              </div>
              <div className="flex-1 space-y-6 overflow-y-auto" style={{ touchAction: 'pan-y', overscrollBehavior: 'contain', WebkitOverflowScrolling: 'touch' }}>
                {navigation.map((item) => (
                  <div key={item.name} className="space-y-3">
                    <Link to={item.href} className="block text-2xl font-display text-white/90 hover:text-gold transition-colors">{item.name}</Link>
                    {item.dropdown && (
                      <div className="pl-4 space-y-2 border-l border-gold/20">
                        {item.dropdown.map((sub) => (
                          <Link key={sub.name} to={sub.href} className="block text-sm text-white/40 hover:text-gold transition-colors">{sub.name}</Link>
                        ))}
                      </div>
                    )}
                  </div>
                ))}
                <Link to="/contact" className="block text-2xl font-display text-white/90 hover:text-gold transition-colors">Contact</Link>
              </div>
              <div className="pt-8 border-t border-white/10">
                <Link to="/portal" className="flex items-center justify-center w-full py-4 border border-gold/30 text-gold text-xs font-bold tracking-widest uppercase hover:bg-gold hover:text-navy transition-all">Employees Portal</Link>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
};

export default Header;