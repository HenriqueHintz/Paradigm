import React from 'react';
import { Link } from 'react-router-dom';
import { Linkedin, Mail, MapPin, Phone } from 'lucide-react';

const Footer = () => {
  const year = new Date().getFullYear();
  return (
    <footer className="bg-navy text-white/60 pt-20 pb-10">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-16">
          <div className="space-y-6">
            <div>
              <span className="font-display text-3xl font-bold tracking-[0.15em] text-white">PARADIGM</span>
              <br/>
              <span className="text-[9px] font-bold tracking-[0.4em] uppercase text-gold">Companies</span>
            </div>
            <p className="text-sm leading-relaxed max-w-xs">The real estate services partner for multifamily residential development in the Mid-Atlantic region and beyond.</p>
            <div className="flex space-x-4">
              <a href="https://www.linkedin.com/company/paradigm-companies" target="_blank" rel="noopener noreferrer" className="hover:text-gold transition-colors"><Linkedin className="size-5" /></a>
              <a href="mailto:info@paradigmcos.com" className="hover:text-gold transition-colors"><Mail className="size-5" /></a>
            </div>
          </div>
          <div>
            <h4 className="text-white font-semibold mb-5 text-xs uppercase tracking-[0.2em]">Services</h4>
            <ul className="space-y-3 text-sm">
              <li><Link to="/services/development" className="hover:text-gold transition-colors">Real Estate Development</Link></li>
              <li><Link to="/services/construction" className="hover:text-gold transition-colors">Construction</Link></li>
              <li><Link to="/services/management" className="hover:text-gold transition-colors">Property Management</Link></li>
              <li><Link to="/services/affordable-housing" className="hover:text-gold transition-colors">Affordable Housing</Link></li>
            </ul>
          </div>
          <div>
            <h4 className="text-white font-semibold mb-5 text-xs uppercase tracking-[0.2em]">Company</h4>
            <ul className="space-y-3 text-sm">
              <li><Link to="/about" className="hover:text-gold transition-colors">About Us</Link></li>
              <li><Link to="/communities" className="hover:text-gold transition-colors">Find Your Community</Link></li>
              <li><Link to="/careers" className="hover:text-gold transition-colors">Careers</Link></li>
              <li><Link to="/contact" className="hover:text-gold transition-colors">Contact</Link></li>
            </ul>
          </div>
          <div>
            <h4 className="text-white font-semibold mb-5 text-xs uppercase tracking-[0.2em]">Headquarters</h4>
            <div className="space-y-3 text-sm">
              <div className="flex items-start space-x-3"><MapPin className="size-4 text-gold mt-1 shrink-0" /><span>1515 North Courthouse Rd #600<br />Arlington, VA 22201</span></div>
              <div className="flex items-center space-x-3"><Phone className="size-4 text-gold shrink-0" /><a href="tel:5716846541" className="hover:text-gold transition-colors">571-684-6541</a></div>
              <div className="flex items-center space-x-3"><Mail className="size-4 text-gold shrink-0" /><a href="mailto:info@paradigmcos.com" className="hover:text-gold transition-colors">info@paradigmcos.com</a></div>
            </div>
          </div>
        </div>
        {/* Gold gradient line */}
        <div className="h-px mb-8" style={{ background: 'linear-gradient(90deg, transparent, rgba(201,168,76,0.3), transparent)' }} />
        <div className="flex flex-col md:flex-row justify-between items-center gap-4">
          <div className="flex flex-wrap justify-center gap-6 text-[10px] font-semibold uppercase tracking-[0.15em]">
            <a href="#" className="hover:text-gold transition-colors">Privacy Policy</a>
            <a href="#" className="hover:text-gold transition-colors">Terms of Use</a>
            <a href="#" className="hover:text-gold transition-colors">Fair Housing</a>
          </div>
          <p className="text-[10px] text-white/30">© {year} Paradigm Companies. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;