
import React, { useState, useEffect } from 'react';
import { Menu, X, Instagram, ExternalLink } from 'lucide-react';
import { Section } from '../types';

interface NavbarProps {
  activeSection: Section;
  scrollToSection: (section: Section) => void;
}

const Navbar: React.FC<NavbarProps> = ({ activeSection, scrollToSection }) => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { id: Section.HERO, label: 'Home' },
    { id: Section.SERVICES, label: 'Menu' },
    { id: Section.EXPERIENCE, label: 'Experiência' },
    { id: Section.LOCATION, label: 'Local' },
    { id: Section.CONTACT, label: 'Contato' },
  ];

  const openTrinks = () => {
      window.open('https://www.trinks.com/dux-jacarepagua', '_blank');
  };

  return (
    <nav
      className={`fixed top-0 w-full z-50 transition-all duration-500 border-b ${
        isScrolled 
          ? 'bg-dux-black/95 backdrop-blur-md border-white/5 py-3 shadow-lg' 
          : 'bg-transparent border-transparent py-4 md:py-6'
      }`}
    >
      <div className="max-w-[1400px] mx-auto px-6 flex justify-between items-center">
        
        {/* Desktop Left Nav */}
        <div className="hidden md:flex items-center gap-8">
          {navLinks.slice(0, 2).map((link) => (
            <button
              key={link.id}
              onClick={() => scrollToSection(link.id)}
              className={`text-xs uppercase tracking-[0.2em] transition-all hover:text-dux-gold relative group ${
                activeSection === link.id ? 'text-dux-gold' : 'text-gray-300'
              }`}
            >
              {link.label}
              <span className={`absolute -bottom-2 left-0 h-[1px] bg-dux-gold transition-all duration-300 ${activeSection === link.id ? 'w-full' : 'w-0 group-hover:w-full'}`}></span>
            </button>
          ))}
        </div>

        {/* Logo Center */}
        <div 
          className="absolute left-1/2 -translate-x-1/2 cursor-pointer group z-50" 
          onClick={() => scrollToSection(Section.HERO)}
        >
          <div className="flex flex-col items-center justify-center">
            {/* Typography Logo with Emerald Glow */}
            <h1 className="font-serif text-3xl font-black text-white tracking-widest leading-none group-hover:text-dux-gold transition-all duration-300 drop-shadow-[0_0_10px_rgba(16,185,129,0.5)]">DUX</h1>
            <span className="text-[8px] text-dux-gold tracking-[0.5em] uppercase font-bold leading-none mt-1 group-hover:text-white transition-colors duration-300 drop-shadow-[0_0_5px_rgba(16,185,129,0.5)]">Barbearia</span>
          </div>
        </div>

        {/* Desktop Right Nav & Actions */}
        <div className="hidden md:flex items-center gap-8">
          {navLinks.slice(2, 5).map((link) => (
            <button
              key={link.id}
              onClick={() => scrollToSection(link.id)}
              className={`text-xs uppercase tracking-[0.2em] transition-all hover:text-dux-gold relative group ${
                activeSection === link.id ? 'text-dux-gold' : 'text-gray-300'
              }`}
            >
              {link.label}
              <span className={`absolute -bottom-2 left-0 h-[1px] bg-dux-gold transition-all duration-300 ${activeSection === link.id ? 'w-full' : 'w-0 group-hover:w-full'}`}></span>
            </button>
          ))}
          <div className="h-4 w-[1px] bg-white/20 mx-2"></div>
          <button 
            onClick={openTrinks}
            className="px-6 py-2 bg-white/5 border border-white/10 hover:bg-dux-gold hover:text-black hover:border-dux-gold transition-all duration-300 text-xs uppercase tracking-widest font-bold flex items-center gap-2 hover:shadow-[0_0_15px_rgba(16,185,129,0.4)]"
          >
            Trinks <ExternalLink size={12} />
          </button>
        </div>

        {/* Mobile Menu Button */}
        <button
          className="md:hidden text-white hover:text-dux-gold transition-colors z-50 p-2"
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
        >
          {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Full Screen Mobile Menu Overlay */}
      <div className={`fixed inset-0 bg-black z-40 flex flex-col items-center justify-center transition-opacity duration-300 ${isMobileMenuOpen ? 'opacity-100 pointer-events-auto' : 'opacity-0 pointer-events-none'}`}>
          <div className="flex flex-col gap-8 text-center">
            {navLinks.map((link) => (
                <button
                key={link.id}
                onClick={() => {
                    scrollToSection(link.id);
                    setIsMobileMenuOpen(false);
                }}
                className="text-3xl font-serif text-white uppercase tracking-widest hover:text-dux-gold transition-colors"
                >
                {link.label}
                </button>
            ))}
            
            <div className="w-12 h-[1px] bg-white/20 mx-auto my-4"></div>

            <button 
                onClick={() => {
                    openTrinks();
                    setIsMobileMenuOpen(false);
                }}
                className="px-12 py-5 bg-dux-gold text-black uppercase tracking-[0.2em] text-sm font-bold shadow-[0_0_30px_rgba(16,185,129,0.5)] hover:bg-white hover:scale-105 transition-all duration-300"
            >
                Agendar Agora
            </button>
          </div>
      </div>
    </nav>
  );
};

export default Navbar;
