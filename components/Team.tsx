import React from 'react';
import { Barber } from '../types';
import { ExternalLink, Scissors, Crown, ChevronRight } from 'lucide-react';

interface TeamProps {}

export const teamMembers: Barber[] = [
  { 
    id: 'cris', 
    name: 'Cris', 
    role: 'Barbeiro Dux', 
    specialty: 'Corte & Estilo',
    instagram: 'barbeariadux',
    image: 'https://images.unsplash.com/photo-1503951914875-befbb713346b?q=80&w=1935&auto=format&fit=crop' 
  },
  { 
    id: 'lucas', 
    name: 'Lucas', 
    role: 'Barbeiro Dux', 
    specialty: 'Clássico & Moderno',
    instagram: 'barbeariadux',
    image: 'https://images.unsplash.com/photo-1599351431202-1e0f0137899a?q=80&w=1976&auto=format&fit=crop'
  },
  { 
    id: 'felipe', 
    name: 'Felipe', 
    role: 'Barbeiro Dux', 
    specialty: 'Degradê & Barba',
    instagram: 'barbeariadux',
    image: 'https://images.unsplash.com/photo-1621605815971-fbc98d665033?q=80&w=2070&auto=format&fit=crop'
  },
  { 
    id: 'guilherme', 
    name: 'Guilherme', 
    role: 'Barbeiro Dux', 
    specialty: 'Visagismo',
    instagram: 'barbeariadux',
    image: 'https://images.unsplash.com/photo-1585747860715-2ba37e788b70?q=80&w=2074&auto=format&fit=crop'
  },
  { 
    id: 'robson', 
    name: 'Robson', 
    role: 'Barbeiro Dux', 
    specialty: 'Navalha & Toalha Quente',
    instagram: 'barbeariadux',
    image: 'https://images.unsplash.com/photo-1532710093739-9470acff878f?q=80&w=2070&auto=format&fit=crop'
  },
  { 
    id: 'vitor', 
    name: 'Vitor', 
    role: 'Barbeiro Dux', 
    specialty: 'Cortes Precisos',
    instagram: 'barbeariadux',
    image: 'https://images.unsplash.com/photo-1622286342621-4bd786c2447c?q=80&w=2070&auto=format&fit=crop'
  },
  { 
    id: 'vitoria', 
    name: 'Vitória', 
    role: 'Especialista', 
    specialty: 'Estética & Detalhes',
    instagram: 'barbeariadux',
    image: 'https://images.unsplash.com/photo-1512690459411-b9245aed8ad5?q=80&w=1748&auto=format&fit=crop'
  }
];

const Team: React.FC<TeamProps> = () => {
  const openTrinks = () => {
    window.open('https://www.trinks.com/dux-jacarepagua', '_blank');
  };

  const getIcon = (role: string) => {
    if (role.includes('Mestre')) return <Crown size={24} className="text-dux-gold animate-pulse" />;
    return <Scissors size={24} className="text-dux-gold" />;
  };

  return (
    <section className="py-24 bg-zinc-950 border-t border-white/5 relative z-10 overflow-hidden">
      {/* Background Ambience */}
      <div className="absolute bottom-0 left-0 w-full h-[300px] bg-gradient-to-t from-dux-gold/5 to-transparent pointer-events-none"></div>

      <div className="max-w-[1400px] mx-auto relative z-10">
        
        <div className="flex flex-col items-center text-center mb-12 px-6">
           <h2 className="text-4xl md:text-5xl font-serif text-white mb-2 drop-shadow-[0_0_15px_rgba(16,185,129,0.3)]">O Time</h2>
           <p className="text-gray-500 text-xs uppercase tracking-[0.3em]">Elite Dux</p>
        </div>
        
        {/* Horizontal Scroll Container */}
        <div className="w-full overflow-x-auto pb-12 px-6 scrollbar-hide snap-x snap-mandatory cursor-grab active:cursor-grabbing">
           <div className="flex gap-6 w-max mx-auto md:mx-0">
               {teamMembers.map((member) => (
                 <div 
                    key={member.id} 
                    className="relative w-[280px] md:w-[320px] h-[450px] flex-shrink-0 snap-center group bg-zinc-900/40 border border-white/5 hover:border-dux-gold hover:shadow-[0_0_30px_rgba(16,185,129,0.15)] transition-all duration-500 rounded-sm overflow-hidden"
                    onClick={openTrinks}
                 >
                    {/* Background Texture (Abstract) */}
                    <div className="absolute inset-0 opacity-40 group-hover:opacity-20 transition-opacity duration-500 mix-blend-overlay">
                        <img src={member.image} alt="" className="w-full h-full object-cover grayscale contrast-125" />
                    </div>
                    
                    {/* Dark Gradient Overlay */}
                    <div className="absolute inset-0 bg-gradient-to-t from-dux-black via-dux-black/80 to-transparent"></div>

                    {/* Card Content */}
                    <div className="absolute inset-0 p-8 flex flex-col justify-end">
                        
                        {/* Decorative Lines */}
                        <div className="absolute top-0 left-0 w-full h-[1px] bg-gradient-to-r from-transparent via-dux-gold/30 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-700"></div>
                        <div className="absolute bottom-0 left-0 w-full h-[1px] bg-gradient-to-r from-transparent via-dux-gold/30 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-700"></div>

                        {/* Icon/Badge */}
                        <div className="mb-auto self-end p-2 rounded-full border border-white/5 bg-white/5 backdrop-blur-sm group-hover:border-dux-gold/50 transition-colors duration-500">
                             {getIcon(member.role)}
                        </div>

                        <div className="transform translate-y-4 group-hover:translate-y-0 transition-transform duration-500">
                            <h3 className="text-4xl font-serif text-white mb-1 tracking-tight">{member.name}</h3>
                            <div className="flex items-center gap-2 mb-4">
                                <div className="h-[1px] w-8 bg-dux-gold"></div>
                                <p className="text-dux-gold text-[10px] uppercase tracking-[0.2em] font-bold">{member.role}</p>
                            </div>
                            
                            <p className="text-gray-400 text-sm font-light border-l-2 border-white/10 pl-3 mb-6 group-hover:border-dux-gold transition-colors duration-500">
                                {member.specialty}
                            </p>

                            <button className="w-full py-3 bg-white/5 hover:bg-dux-gold hover:text-dux-black border border-white/10 text-white text-xs uppercase tracking-widest font-bold transition-all duration-300 flex items-center justify-center gap-2 group-hover:shadow-[0_0_20px_rgba(16,185,129,0.3)]">
                                Agendar <ChevronRight size={14} />
                            </button>
                        </div>
                    </div>
                 </div>
               ))}
               
               {/* "See More" Card at the end */}
               <div 
                 onClick={openTrinks}
                 className="relative w-[200px] h-[450px] flex-shrink-0 snap-center flex flex-col items-center justify-center gap-4 border border-dashed border-white/20 hover:border-dux-gold hover:bg-white/5 transition-all duration-300 cursor-pointer group rounded-sm"
               >
                  <div className="w-16 h-16 rounded-full border border-white/10 flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                     <ExternalLink className="text-gray-500 group-hover:text-dux-gold transition-colors" />
                  </div>
                  <span className="text-gray-500 text-xs uppercase tracking-widest group-hover:text-dux-gold transition-colors">Ver Todos</span>
               </div>
           </div>
        </div>
      </div>
    </section>
  );
};

export default Team;