import React from 'react';
import { Section } from '../types';

interface HeroProps {
  scrollToSection: (section: Section) => void;
}

const Hero: React.FC<HeroProps> = ({ scrollToSection }) => {
  const openTrinks = () => {
    window.open('https://www.trinks.com/dux-jacarepagua', '_blank');
  };

  return (
    <section className="relative h-[100dvh] w-full flex items-center justify-center overflow-hidden bg-dux-black">
      
      {/* Image Background */}
      <div className="absolute inset-0 z-0">
        <div className="absolute inset-0 bg-gradient-to-b from-black/70 via-black/30 to-black/90 z-10" /> 
        <img 
          src="https://images.unsplash.com/photo-1621605815971-fbc98d665033?q=80&w=2070&auto=format&fit=crop"
          alt="Dux Experience"
          className="w-full h-full object-cover saturate-0 brightness-75 scale-105"
        />
      </div>

      {/* Content Container */}
      <div className="relative z-20 flex flex-col items-center justify-center w-full px-4 text-center">
        
        <div className="flex flex-col items-center gap-6 md:gap-10 animate-fade-in-up w-full max-w-4xl">
            
            {/* Title with Emerald Atmosphere */}
            <h1 className="font-serif text-5xl sm:text-7xl md:text-9xl text-white font-medium tracking-tight leading-none drop-shadow-[0_0_30px_rgba(16,185,129,0.25)]">
              DUX
            </h1>

            {/* Tagline */}
            <div className="flex items-center justify-center gap-3 md:gap-6 w-full">
               <div className="h-[1px] w-6 md:w-16 bg-white/50"></div>
               <p className="text-white text-[9px] md:text-sm uppercase tracking-[0.3em] md:tracking-[0.4em] font-medium text-shadow-sm whitespace-nowrap">
                 Estética <span className="text-dux-gold drop-shadow-[0_0_5px_rgba(16,185,129,0.8)]">&</span> Poder
               </p>
               <div className="h-[1px] w-6 md:w-16 bg-white/50"></div>
            </div>

            {/* Button with Neon Glow */}
            <div className="pt-4 md:pt-6 w-full flex justify-center">
                <button 
                    onClick={openTrinks}
                    className="w-full max-w-[260px] md:max-w-[280px] bg-dux-gold text-dux-black hover:bg-white hover:text-black transition-all duration-300 px-6 py-4 uppercase tracking-[0.2em] text-[10px] md:text-xs font-bold shadow-[0_0_40px_rgba(16,185,129,0.4)] hover:shadow-[0_0_60px_rgba(16,185,129,0.6)] active:scale-95"
                >
                    Agendar Horário
                </button>
            </div>
        </div>

      </div>
      
      {/* Scroll Indicator */}
      <div 
        onClick={() => scrollToSection(Section.SERVICES)}
        className="absolute bottom-6 md:bottom-10 left-1/2 -translate-x-1/2 text-white/50 hover:text-white cursor-pointer transition-colors duration-500 flex flex-col items-center gap-2 animate-bounce"
      >
         <span className="text-[9px] uppercase tracking-[0.2em]">Menu</span>
         <div className="w-[1px] h-8 md:h-12 bg-gradient-to-b from-transparent via-white/50 to-transparent"></div>
      </div>
    </section>
  );
};

export default Hero;