import React, { useState, useRef, useEffect } from 'react';
import { Sparkles, X, Send, User, Bot, Loader2 } from 'lucide-react';
import { getStyleConsultation } from '../services/geminiService';
import { ChatMessage } from '../types';

const AIConcierge: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [input, setInput] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const [messages, setMessages] = useState<ChatMessage[]>([
    {
      id: 'welcome',
      role: 'model',
      text: 'Olá. Sou o Visagista Digital da Dux. Gostaria de uma recomendação de corte ou estilo de barba baseado no seu rosto?',
      timestamp: new Date()
    }
  ]);
  const messagesEndRef = useRef<HTMLDivElement>(null);

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' });
  };

  useEffect(() => {
    scrollToBottom();
  }, [messages, isOpen]);

  const handleSend = async () => {
    if (!input.trim() || isLoading) return;

    const userMsg: ChatMessage = {
      id: Date.now().toString(),
      role: 'user',
      text: input,
      timestamp: new Date()
    };

    setMessages(prev => [...prev, userMsg]);
    setInput('');
    setIsLoading(true);

    try {
      // Build history for context
      const history = messages.map(m => ({
          role: m.role,
          parts: [{ text: m.text }]
      }));

      const responseText = await getStyleConsultation(userMsg.text, history);

      const aiMsg: ChatMessage = {
        id: (Date.now() + 1).toString(),
        role: 'model',
        text: responseText,
        timestamp: new Date()
      };
      
      setMessages(prev => [...prev, aiMsg]);
    } catch (error) {
      console.error(error);
    } finally {
      setIsLoading(false);
    }
  };

  const handleKeyPress = (e: React.KeyboardEvent) => {
    if (e.key === 'Enter' && !e.shiftKey) {
      e.preventDefault();
      handleSend();
    }
  };

  return (
    <>
      {/* Floating Action Button */}
      {!isOpen && (
        <button
          onClick={() => setIsOpen(true)}
          className="fixed bottom-8 right-8 z-40 flex items-center gap-3 px-5 py-3 bg-dux-gold text-dux-dark rounded-full shadow-lg shadow-dux-gold/20 hover:scale-105 transition-transform duration-300 animate-fadeIn"
        >
          <Sparkles size={20} />
          <span className="font-bold uppercase text-xs tracking-wider">Consultoria IA</span>
        </button>
      )}

      {/* Chat Modal */}
      {isOpen && (
        <div className="fixed bottom-8 right-8 z-50 w-[90vw] md:w-[400px] h-[500px] bg-zinc-900 border border-dux-gold/30 rounded-2xl shadow-2xl flex flex-col overflow-hidden animate-slideUp">
          {/* Header */}
          <div className="bg-dux-charcoal p-4 flex justify-between items-center border-b border-white/5">
            <div className="flex items-center gap-3">
              <div className="w-8 h-8 rounded-full bg-dux-gold/10 flex items-center justify-center border border-dux-gold">
                <Sparkles size={16} className="text-dux-gold" />
              </div>
              <div>
                <h3 className="text-white font-serif text-sm">Visagista Dux</h3>
                <p className="text-xs text-dux-silver flex items-center gap-1">
                  <span className="w-2 h-2 bg-green-500 rounded-full animate-pulse"></span>
                  Online
                </p>
              </div>
            </div>
            <button onClick={() => setIsOpen(false)} className="text-dux-silver hover:text-white transition-colors">
              <X size={20} />
            </button>
          </div>

          {/* Messages Area */}
          <div className="flex-1 overflow-y-auto p-4 space-y-4 bg-zinc-950/50 scrollbar-hide">
            {messages.map((msg) => (
              <div
                key={msg.id}
                className={`flex ${msg.role === 'user' ? 'justify-end' : 'justify-start'}`}
              >
                <div
                  className={`max-w-[80%] p-3 rounded-2xl text-sm leading-relaxed ${
                    msg.role === 'user'
                      ? 'bg-dux-gold text-dux-dark rounded-tr-none'
                      : 'bg-zinc-800 text-gray-200 border border-white/5 rounded-tl-none'
                  }`}
                >
                  {msg.text}
                </div>
              </div>
            ))}
            {isLoading && (
              <div className="flex justify-start">
                <div className="bg-zinc-800 p-3 rounded-2xl rounded-tl-none border border-white/5 flex items-center gap-2">
                  <Loader2 size={16} className="animate-spin text-dux-gold" />
                  <span className="text-xs text-gray-400">Analisando perfil...</span>
                </div>
              </div>
            )}
            <div ref={messagesEndRef} />
          </div>

          {/* Input Area */}
          <div className="p-3 bg-zinc-900 border-t border-white/5">
            <div className="flex items-center gap-2 bg-black rounded-full px-4 py-2 border border-white/10 focus-within:border-dux-gold/50 transition-colors">
              <input
                type="text"
                value={input}
                onChange={(e) => setInput(e.target.value)}
                onKeyDown={handleKeyPress}
                placeholder="Ex: Tenho rosto quadrado, o que sugere?"
                className="flex-1 bg-transparent text-sm text-white placeholder-gray-500 focus:outline-none"
              />
              <button
                onClick={handleSend}
                disabled={isLoading || !input.trim()}
                className="p-2 bg-dux-gold rounded-full text-dux-dark disabled:opacity-50 disabled:cursor-not-allowed hover:bg-yellow-400 transition-colors"
              >
                <Send size={16} />
              </button>
            </div>
            <p className="text-[10px] text-center text-gray-600 mt-2">
              Powered by Gemini AI • Dux Experience
            </p>
          </div>
        </div>
      )}
    </>
  );
};

export default AIConcierge;