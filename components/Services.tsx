import React from 'react';
import { ServiceItem } from '../types';
import { ExternalLink, Clock } from 'lucide-react';

interface ServiceCategory {
  title: string;
  items: ServiceItem[];
}

const categories: ServiceCategory[] = [
  {
    title: "Cabelo",
    items: [
      {
        id: 'corte',
        name: 'Corte',
        description: 'Inclui higienização e penteado.',
        price: 'R$ 70',
        duration: '30m',
        image: 'https://images.unsplash.com/photo-1599351431202-1e0f0137899a?q=80&w=1976&auto=format&fit=crop'
      },
      {
        id: 'corte-infantil',
        name: 'Corte Infantil',
        description: 'Corte especializado para crianças.',
        price: 'R$ 75',
        duration: '30m',
        image: 'https://images.unsplash.com/photo-1585747860715-2ba37e788b70?q=80&w=2074&auto=format&fit=crop'
      }
    ]
  },
  {
    title: "Barba & Face",
    items: [
      {
        id: 'barba',
        name: 'Barba',
        description: 'Limpeza facial com esfoliação, toalha quente, massagem e hidratação.',
        price: 'R$ 70',
        duration: '30m',
        image: 'https://images.unsplash.com/photo-1621605815971-fbc98d665033?q=80&w=2070&auto=format&fit=crop'
      },
      {
        id: 'sobrancelha',
        name: 'Sobrancelha',
        description: 'Design e alinhamento.',
        price: 'R$ 30',
        duration: '30m',
        image: 'https://i.imgur.com/D0WaNgn.png'
      }
    ]
  },
  {
    title: "Especiais",
    items: [
      {
        id: 'combo',
        name: 'Corte + Barba',
        description: 'Corte com lavagem e todo serviço de barba premium.',
        price: 'R$ 130',
        duration: '1h',
        image: 'https://images.unsplash.com/photo-1517832606299-7ae9b720a186?q=80&w=1886&auto=format&fit=crop'
      },
      {
        id: 'diamante',
        name: 'DIAMANTE',
        description: 'Assinantes plano diamante: direito a 8 serviços (corte/barba).',
        price: 'R$ 50',
        duration: '30m',
        image: 'https://i.imgur.com/lwVWzwG.jpeg'
      }
    ]
  }
];

const Services: React.FC = () => {
  const openTrinks = () => {
    window.open('https://www.trinks.com/dux-jacarepagua', '_blank');
  };

  return (
    <section className="py-16 md:py-20 bg-dux-black relative z-10">
      <div className="max-w-[1400px] mx-auto px-4 md:px-8">
        
        <div className="text-center mb-12 md:mb-16">
            <h2 className="text-3xl md:text-5xl font-serif text-white mb-4">Menu de Serviços</h2>
            <p className="text-gray-400 text-xs md:text-sm max-w-md mx-auto px-4">
                Selecione sua experiência. Precisão técnica e ambiente premium.
            </p>
        </div>

        <div className="space-y-16 md:space-y-20">
            {categories.map((cat, idx) => (
              <div key={idx}>
                <div className="flex items-center gap-4 mb-6 md:mb-8">
                    <div className="h-[1px] flex-1 bg-white/10"></div>
                    <h3 className="text-dux-gold text-xs md:text-sm uppercase tracking-[0.3em] font-bold drop-shadow-[0_0_5px_rgba(16,185,129,0.3)]">{cat.title}</h3>
                    <div className="h-[1px] flex-1 bg-white/10"></div>
                </div>
                
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
                  {cat.items.map((service) => (
                    <div 
                        key={service.id}
                        className="group bg-zinc-900/50 border border-white/5 hover:border-dux-gold hover:shadow-[0_0_20px_rgba(16,185,129,0.2)] rounded-sm overflow-hidden transition-all duration-300 flex flex-col"
                    >
                        {/* Image Area - Always Visible */}
                        <div className="aspect-video w-full overflow-hidden relative border-b border-white/5 group-hover:border-dux-gold/50 transition-colors">
                            <img 
                                src={service.image} 
                                alt={service.name} 
                                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110 saturate-110"
                            />
                            <div className="absolute top-3 right-3 bg-dux-black/80 backdrop-blur-md px-3 py-1 border border-dux-gold/20 shadow-[0_0_10px_rgba(16,185,129,0.2)]">
                                <span className="text-dux-gold font-serif font-bold">{service.price}</span>
                            </div>
                        </div>

                        {/* Content Area */}
                        <div className="p-6 flex flex-col flex-1">
                            <h4 className="text-xl font-serif text-white mb-2 group-hover:text-dux-gold transition-colors">{service.name}</h4>
                            <p className="text-gray-500 text-sm mb-6 flex-1">{service.description}</p>
                            
                            <div className="flex items-center justify-between mt-auto pt-4 border-t border-white/5 group-hover:border-dux-gold/20 transition-colors">
                                <div className="flex items-center gap-2 text-xs text-gray-400">
                                    <Clock size={14} />
                                    <span>{service.duration}</span>
                                </div>
                                
                                <button 
                                    onClick={openTrinks}
                                    className="flex items-center gap-2 text-xs uppercase tracking-wider font-bold text-white hover:text-dux-gold transition-colors"
                                >
                                    Agendar <ExternalLink size={14} />
                                </button>
                            </div>
                        </div>
                    </div>
                  ))}
                </div>
              </div>
            ))}
        </div>

      </div>
    </section>
  );
};

export default Services;