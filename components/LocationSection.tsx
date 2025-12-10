import React from 'react';
import { MapPin, Navigation } from 'lucide-react';

const LocationSection: React.FC = () => {
  return (
    <section className="py-0 relative h-[450px] md:h-[600px] w-full bg-dux-black border-t border-white/5">
       {/* Map Overlay for Dark Theme */}
       <div className="absolute inset-0 z-10 bg-dux-black/20 pointer-events-none"></div>
       
       {/* Google Maps Embed - Styled with CSS filters for dark mode */}
       <iframe 
         src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3675.295486877994!2d-43.3444!3d-22.9522!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x9bd83015555555%3A0x0!2zRXN0cmFkYSBkZSBKYWNhcmVwYWd1w6EsIDYwMDk!5e0!3m2!1spt-BR!2sbr!4v1700000000000!5m2!1spt-BR!2sbr" 
         width="100%" 
         height="100%" 
         style={{ border: 0, filter: 'grayscale(1) invert(0.92) contrast(0.83)' }} 
         allowFullScreen 
         loading="lazy" 
         referrerPolicy="no-referrer-when-downgrade"
         className="w-full h-full"
       ></iframe>

       {/* Floating Location Card */}
       <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 z-20 w-[92%] md:w-[400px]">
          <div className="bg-dux-black/90 backdrop-blur-xl border border-dux-gold/20 p-6 md:p-8 rounded-sm shadow-[0_0_50px_rgba(0,0,0,0.8)] text-center relative overflow-hidden group">
             
             {/* Decorative Corner Borders */}
             <div className="absolute top-0 left-0 w-8 h-8 border-t-2 border-l-2 border-dux-gold"></div>
             <div className="absolute top-0 right-0 w-8 h-8 border-t-2 border-r-2 border-dux-gold"></div>
             <div className="absolute bottom-0 left-0 w-8 h-8 border-b-2 border-l-2 border-dux-gold"></div>
             <div className="absolute bottom-0 right-0 w-8 h-8 border-b-2 border-r-2 border-dux-gold"></div>

             <div className="w-14 h-14 md:w-16 md:h-16 bg-dux-gold text-dux-black rounded-full flex items-center justify-center mx-auto mb-4 md:mb-6 shadow-lg shadow-dux-gold/30 animate-pulse-slow">
                <MapPin size={28} className="md:w-8 md:h-8" />
             </div>

             <h3 className="text-xl md:text-2xl font-serif text-white mb-2">QG Dux</h3>
             <p className="text-dux-gold uppercase text-[10px] md:text-xs tracking-[0.3em] font-bold mb-4 md:mb-6">Rio de Janeiro</p>

             <div className="space-y-1 md:space-y-2 mb-6 md:mb-8">
                 <p className="text-gray-300 font-light text-base md:text-lg">Estrada de Jacarepaguá, 6009</p>
                 <p className="text-gray-500 text-xs md:text-sm">Freguesia - Jacarepaguá</p>
             </div>

             <a 
               href="https://www.google.com/maps/search/?api=1&query=Estrada+de+Jacarepaguá,+6009" 
               target="_blank"
               className="inline-flex items-center gap-2 bg-white text-black px-6 py-3 uppercase tracking-widest text-[10px] md:text-xs font-bold hover:bg-dux-gold hover:text-white transition-all duration-300"
             >
                <Navigation size={14} /> Traçar Rota
             </a>
          </div>
       </div>
    </section>
  );
};

export default LocationSection;