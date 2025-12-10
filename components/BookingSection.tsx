import React from 'react';
import { ExternalLink, Clock, CalendarCheck } from 'lucide-react';

const BookingSection: React.FC = () => {
  const openTrinks = () => {
    window.open('https://www.trinks.com/dux-jacarepagua', '_blank');
  };

  return (
    <section className="bg-dux-surface border-t border-white/5 relative">
      <div className="flex flex-col md:flex-row min-h-[500px]">
        
        {/* Visual Side - Top on Mobile, Left on Desktop */}
        <div className="w-full md:w-1/2 relative min-h-[300px] md:min-h-[500px] order-1 md:order-1">
           <div className="absolute inset-0">
             <img 
               src="https://images.unsplash.com/photo-1585747860715-2ba37e788b70?q=80&w=2074&auto=format&fit=crop" 
               alt="Dux Barber Chair" 
               className="w-full h-full object-cover saturate-110"
             />
           </div>
           {/* Gradient for Text Readability */}
           <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-transparent md:bg-gradient-to-r md:from-black/80 md:to-transparent"></div>
           
           <div className="absolute bottom-6 left-6 md:bottom-12 md:left-12 max-w-sm p-4">
              <h3 className="text-white font-serif text-2xl md:text-3xl mb-2 drop-shadow-md">Seu Tempo é Ouro</h3>
              <p className="text-gray-200 text-xs md:text-sm font-light drop-shadow-sm">Atendimento pontual e exclusivo.</p>
           </div>
        </div>

        {/* Content Side - Bottom on Mobile, Right on Desktop */}
        <div className="w-full md:w-1/2 bg-zinc-950 flex items-center justify-center p-8 md:p-20 relative overflow-hidden order-2 md:order-2 border-t md:border-t-0 md:border-l border-white/5">
           
           <div className="max-w-md w-full relative z-10">
              <div className="flex items-center gap-3 mb-6">
                 <CalendarCheck className="text-dux-gold" size={24} />
                 <span className="text-dux-gold text-xs uppercase tracking-[0.2em] font-bold drop-shadow-[0_0_5px_rgba(16,185,129,0.5)]">Agendamento</span>
              </div>

              <h2 className="text-3xl md:text-5xl font-serif text-white mb-8">Reserve seu Trono.</h2>
              
              <div className="space-y-6 mb-10">
                 <div className="p-4 border border-white/10 bg-white/5 rounded-sm">
                    <div className="flex items-center gap-3 mb-2">
                        <Clock className="text-dux-gold" size={16} />
                        <p className="text-white font-bold text-xs uppercase tracking-wide">Horários</p>
                    </div>
                    <div className="pl-7 space-y-1">
                        <p className="text-gray-400 text-sm">Seg - Sáb: 10h às 22h</p>
                        <p className="text-gray-400 text-sm">Dom: 13h às 21h</p>
                    </div>
                 </div>
              </div>

              <button 
                  onClick={openTrinks}
                  className="w-full py-4 md:py-5 bg-dux-gold text-black text-sm uppercase tracking-[0.2em] font-bold hover:bg-white transition-all duration-300 shadow-[0_0_30px_rgba(16,185,129,0.4)] hover:shadow-[0_0_50px_rgba(16,185,129,0.6)] flex items-center justify-center gap-3 active:scale-95"
              >
                  Agendar Agora <ExternalLink size={16} />
              </button>
           </div>
        </div>

      </div>
    </section>
  );
};

export default BookingSection;