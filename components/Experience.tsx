import React, { useState } from 'react';
import { Crown, ScanFace, Armchair } from 'lucide-react';

const experienceItems = [
  {
    id: 1,
    title: "Visagismo Estratégico",
    subtitle: "A Ciência da Imagem",
    description: "Não cortamos apenas cabelo. Analisamos geometria facial e perfil comportamental para projetar uma imagem que transmite autoridade.",
    icon: <ScanFace size={32} />,
    image: "https://images.unsplash.com/photo-1599351431202-1e0f0137899a?q=80&w=1976&auto=format&fit=crop"
  },
  {
    id: 2,
    title: "O Ritual Dux",
    subtitle: "Descompressão Total",
    description: "Toalha quente, óleos essenciais, massagem facial e ozonioterapia. Um momento de pausa absoluta no caos urbano.",
    icon: <Armchair size={32} />,
    image: "https://images.unsplash.com/photo-1621605815971-fbc98d665033?q=80&w=2070&auto=format&fit=crop"
  },
  {
    id: 3,
    title: "Clube Diamante",
    subtitle: "Acesso à Elite",
    description: "Para quem exige constância. Assinatura exclusiva com acesso ilimitado, prioridade na agenda e networking de alto nível.",
    icon: <Crown size={32} />,
    image: "https://i.imgur.com/jV4c2sI.jpeg"
  }
];

const Experience: React.FC = () => {
  const [activeItem, setActiveItem] = useState(experienceItems[0]);

  return (
    <section className="py-16 md:py-24 bg-zinc-950 border-t border-white/5 relative overflow-hidden">
      <div className="max-w-[1400px] mx-auto px-6 lg:px-12">
        
        <div className="mb-12 md:mb-16 text-center md:text-left">
           <h2 className="text-4xl md:text-6xl font-serif text-white mb-4 drop-shadow-[0_0_15px_rgba(16,185,129,0.3)]">
             A Experiência
           </h2>
           <p className="text-gray-500 uppercase tracking-[0.3em] text-xs font-bold">
             Muito além da navalha
           </p>
        </div>

        <div className="flex flex-col lg:flex-row gap-8 lg:gap-12 h-auto lg:h-[600px]">
          
          {/* Visual Showcase - Top on Mobile, Right on Desktop */}
          <div className="w-full lg:w-2/3 relative rounded-sm overflow-hidden border border-white/10 h-[280px] md:h-[400px] lg:h-full group order-1 lg:order-2">
             
             {/* Dynamic Image Background */}
             {experienceItems.map((item) => (
                <div 
                  key={item.id}
                  className={`absolute inset-0 transition-opacity duration-700 ease-in-out ${activeItem.id === item.id ? 'opacity-100' : 'opacity-0'}`}
                >
                   <img 
                     src={item.image} 
                     alt={item.title} 
                     className="w-full h-full object-cover saturate-0 brightness-50 contrast-125 scale-105 group-hover:scale-110 transition-transform duration-[2s]"
                   />
                   <div className="absolute inset-0 bg-gradient-to-t from-black via-black/20 to-transparent opacity-80"></div>
                </div>
             ))}

             {/* Center Glow Effect */}
             <div className="absolute inset-0 bg-dux-gold/5 mix-blend-overlay pointer-events-none"></div>

             {/* Content Overlay */}
             <div className="absolute bottom-6 left-6 md:bottom-12 md:left-12 max-w-lg z-10">
                <div className="flex items-center gap-3 mb-4">
                   <div className="w-8 md:w-12 h-[1px] bg-dux-gold shadow-[0_0_10px_rgba(16,185,129,1)]"></div>
                   <span className="text-dux-gold text-[10px] md:text-xs uppercase tracking-[0.2em] font-bold animate-pulse">
                      Exclusividade Dux
                   </span>
                </div>
                <h3 className="text-2xl md:text-5xl font-serif text-white leading-tight drop-shadow-lg">
                   {activeItem.subtitle}
                </h3>
             </div>

          </div>

          {/* Interactive List - Bottom on Mobile, Left on Desktop */}
          <div className="w-full lg:w-1/3 flex flex-col justify-center gap-3 md:gap-4 relative z-20 order-2 lg:order-1">
             {experienceItems.map((item) => (
               <div 
                 key={item.id}
                 onMouseEnter={() => setActiveItem(item)}
                 onClick={() => setActiveItem(item)}
                 className={`group cursor-pointer p-6 md:p-8 rounded-sm border transition-all duration-500 relative overflow-hidden ${
                   activeItem.id === item.id 
                     ? 'bg-white/5 border-dux-gold/50 shadow-[0_0_30px_rgba(16,185,129,0.15)]' 
                     : 'bg-transparent border-white/5 hover:bg-white/[0.02]'
                 }`}
               >
                  <div className="flex items-start gap-4 md:gap-6 relative z-10">
                     <div className={`transition-colors duration-300 scale-75 md:scale-100 ${activeItem.id === item.id ? 'text-dux-gold' : 'text-gray-600 group-hover:text-gray-400'}`}>
                        {item.icon}
                     </div>
                     <div>
                        <h3 className={`text-lg md:text-xl font-serif mb-1 transition-colors duration-300 ${activeItem.id === item.id ? 'text-white' : 'text-gray-500 group-hover:text-gray-300'}`}>
                          {item.title}
                        </h3>
                        <p className={`text-[10px] md:text-xs uppercase tracking-widest font-bold mb-3 transition-colors duration-300 ${activeItem.id === item.id ? 'text-dux-gold' : 'text-gray-700'}`}>
                          {item.subtitle}
                        </p>
                        
                        <div className={`overflow-hidden transition-all duration-500 ${activeItem.id === item.id ? 'max-h-32 opacity-100' : 'max-h-0 opacity-0'}`}>
                           <p className="text-gray-400 text-sm leading-relaxed">
                             {item.description}
                           </p>
                        </div>
                     </div>
                  </div>
                  
                  {/* Active Indicator Line */}
                  {activeItem.id === item.id && (
                    <div className="absolute left-0 top-0 bottom-0 w-[2px] bg-dux-gold shadow-[0_0_10px_rgba(16,185,129,0.8)]"></div>
                  )}
               </div>
             ))}
          </div>

        </div>
      </div>
    </section>
  );
};

export default Experience;