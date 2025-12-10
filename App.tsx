import React, { useState, useEffect } from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Services from './components/Services';
import AIConcierge from './components/AIConcierge';
import LocationSection from './components/LocationSection';
import BookingSection from './components/BookingSection';
import Experience from './components/Experience';
import { Section } from './types';
import { Minus, Star } from 'lucide-react';

const App: React.FC = () => {
  const [activeSection, setActiveSection] = useState<Section>(Section.HERO);

  useEffect(() => {
    // Optional: Section active state detection on scroll could go here
  }, []);

  const scrollToSection = (section: Section) => {
    setActiveSection(section);
    const element = document.getElementById(section);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const openTrinks = () => {
    window.open('https://www.trinks.com/dux-jacarepagua', '_blank');
  };

  const marqueeInfo = [
    "Estrada de Jacarepaguá, 6009",
    "Agende seu horário",
    "Visagismo & Estética",
    "Clube Diamante Disponível",
    "Seg-Sáb 10h-22h • Dom 13h-21h",
    "Excelência Masculina"
  ];

  return (
    <div className="min-h-screen bg-dux-black text-white font-sans selection:bg-dux-gold selection:text-dux-black animate-fadeIn relative overflow-x-hidden">
      
      <Navbar activeSection={activeSection} scrollToSection={scrollToSection} />

      <main className="relative z-10">
        <div id={Section.HERO}>
          <Hero scrollToSection={scrollToSection} />
        </div>

        {/* Text Marquee / Info Ticker */}
        <div className="bg-dux-gold py-3 md:py-4 overflow-hidden relative z-20 border-y border-white/10 shadow-[0_0_30px_rgba(16,185,129,0.2)]">
            <div className="animate-marquee whitespace-nowrap flex items-center">
                {[...Array(4)].map((_, i) => (
                    <div key={i} className="flex items-center">
                        {marqueeInfo.map((text, idx) => (
                            <React.Fragment key={idx}>
                                <span className="text-dux-black font-bold text-[10px] md:text-sm uppercase tracking-[0.2em] mx-6 md:mx-12 flex items-center gap-2">
                                   {text}
                                </span>
                                <Star size={10} className="text-dux-black/60 fill-current" />
                            </React.Fragment>
                        ))}
                    </div>
                ))}
            </div>
        </div>

        {/* Manifesto Section */}
        <section id={Section.ABOUT} className="py-16 md:py-32 bg-dux-black relative overflow-hidden">
           <div className="max-w-[1200px] mx-auto px-6 flex flex-col md:flex-row items-center gap-12 md:gap-24">
              
              <div className="w-full md:w-1/2">
                 <div className="flex items-center gap-3 mb-6">
                    <Minus className="text-dux-gold" />
                    <span className="text-dux-gold text-xs uppercase tracking-[0.2em] font-bold drop-shadow-[0_0_5px_rgba(16,185,129,0.5)]">O Manifesto</span>
                 </div>
                 
                 <h2 className="text-3xl md:text-5xl font-serif text-white mb-6 leading-tight">
                    A Excelência é um<br/>
                    <span className="text-dux-gold italic drop-shadow-[0_0_10px_rgba(16,185,129,0.3)]">Hábito Silencioso.</span>
                 </h2>
                 
                 <p className="text-gray-400 font-light text-sm md:text-lg leading-relaxed mb-8">
                    Na Dux, não vendemos apenas cortes. Oferecemos um santuário de masculinidade, técnica apurada e estética atemporal.
                 </p>
                 
                 <button onClick={openTrinks} className="text-white text-xs uppercase tracking-[0.2em] border-b border-dux-gold pb-1 hover:text-dux-gold hover:shadow-[0_4px_10px_rgba(16,185,129,0.2)] transition-all">
                    Agendar Experiência
                 </button>
              </div>

              <div className="w-full md:w-1/2">
                 <div className="aspect-[4/5] overflow-hidden bg-zinc-900 border border-white/5 p-2 shadow-[0_0_30px_rgba(16,185,129,0.1)]">
                    <div className="w-full h-full overflow-hidden">
                        <img 
                        src="https://i.imgur.com/6u84lyO.jpeg" 
                        alt="Ambiente Dux" 
                        className="w-full h-full object-cover saturate-110 hover:scale-105 transition-transform duration-1000"
                        />
                    </div>
                 </div>
              </div>
           </div>
        </section>

        <div id={Section.SERVICES}>
          <Services />
        </div>

        <div id={Section.EXPERIENCE}>
           <Experience />
        </div>

        <div id={Section.LOCATION}>
           <LocationSection />
        </div>

        <div id={Section.BOOKING}>
           <BookingSection />
        </div>

        <section id={Section.CONTACT} className="bg-white text-black py-16 md:py-20 relative">
          <div className="max-w-[1400px] mx-auto px-6">
             <div className="flex flex-col md:flex-row justify-between items-start md:items-end gap-8 md:gap-12">
                <div>
                   <h3 className="font-serif text-5xl md:text-8xl tracking-tighter mb-4">DUX</h3>
                   <p className="text-[10px] md:text-sm font-medium tracking-wide uppercase text-gray-500">Rio de Janeiro — Desde 2024</p>
                </div>

                <div className="flex gap-12 text-sm font-medium">
                   <div className="flex flex-col gap-2">
                      <span className="uppercase text-xs text-gray-400 tracking-wider mb-2">Social</span>
                      <a href="https://instagram.com/barbeariadux" target="_blank" className="hover:text-dux-gold transition-colors">Instagram</a>
                      <a href="https://wa.me/" className="hover:text-dux-gold transition-colors">WhatsApp</a>
                   </div>
                </div>
             </div>
             <div className="h-[1px] w-full bg-gray-200 my-8"></div>
             <div className="flex flex-col md:flex-row justify-between items-center text-[10px] uppercase tracking-widest text-gray-400 gap-4">
                <p>&copy; 2024 Dux Barbearia</p>
                <p>Projetado para Líderes</p>
             </div>
          </div>
        </section>

        <AIConcierge />
      </main>
    </div>
  );
};

export default App;