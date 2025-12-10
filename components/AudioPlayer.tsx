import React, { useState } from 'react';
import { VolumeX, Volume2 } from 'lucide-react';

interface AudioPlayerProps {
    audioRef: React.RefObject<HTMLAudioElement>;
}

const AudioPlayer: React.FC<AudioPlayerProps> = ({ audioRef }) => {
  const [isMuted, setIsMuted] = useState(false);

  const toggleMute = () => {
    if (!audioRef.current) return;
    
    if (isMuted) {
      audioRef.current.muted = false;
      setIsMuted(false);
    } else {
      audioRef.current.muted = true;
      setIsMuted(true);
    }
  };

  return (
    <div className="fixed bottom-8 left-8 z-40 animate-fade-in-up">
      <button
        onClick={toggleMute}
        className="group flex items-center gap-3 pr-4 pl-3 py-3 rounded-full backdrop-blur-md border border-white/5 bg-black/40 hover:bg-black/60 transition-all shadow-lg"
      >
        <div className="text-dux-gold">
          {isMuted ? <VolumeX size={16} /> : <Volume2 size={16} />}
        </div>
        
        <div className="flex flex-col text-left overflow-hidden w-0 group-hover:w-auto transition-all duration-500">
           <span className="text-[10px] uppercase tracking-widest font-bold text-white whitespace-nowrap pl-2">
             Som {isMuted ? 'Mudo' : 'Ligado'}
           </span>
        </div>

        {/* Minimalist Visualizer */}
        {!isMuted && (
          <div className="flex gap-[2px] h-3 items-center ml-1">
             <div className="w-[1px] bg-dux-gold animate-pulse h-2"></div>
             <div className="w-[1px] bg-dux-gold animate-pulse h-3 delay-75"></div>
             <div className="w-[1px] bg-dux-gold animate-pulse h-1 delay-150"></div>
          </div>
        )}
      </button>
    </div>
  );
};

export default AudioPlayer;