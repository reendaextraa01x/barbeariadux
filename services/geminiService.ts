import { GoogleGenAI } from "@google/genai";

const apiKey = process.env.API_KEY || '';

const ai = new GoogleGenAI({ apiKey });

export const getStyleConsultation = async (userQuery: string, history: {role: string, parts: {text: string}[]}[]): Promise<string> => {
  if (!apiKey) {
    return "Desculpe, nosso Concierge Digital está indisponível momentaneamente.";
  }

  try {
    const systemInstruction = `
      Você é o "Dux Concierge", o consultor de imagem pessoal exclusivo da '@barbeariadux'.
      
      Identidade da Barbearia (Dux Jacarepaguá):
      - Conceito: Barbearia Premium focada em liderança e estilo.
      - Link de Agendamento Oficial: https://www.trinks.com/dux-jacarepagua
      - Endereço: Estrada de Jacarepaguá, 6009 - Freguesia.
      - Horário: Seg-Sáb 10h-22h | Dom 13h-21h.
      
      Menu de Serviços Atualizado:
      - Corte (30min): R$ 70. Inclui higienização e penteado.
      - Corte + Barba (1h): R$ 130. Corte com lavagem e todo serviço de barba premium.
      - Barba (30min): R$ 70. Limpeza facial, esfoliação, toalha quente, massagem e hidratação.
      - Sobrancelha (30min): R$ 30.
      - Corte Infantil (30min): R$ 75.
      - DIAMANTE (30min): R$ 50. Serviço exclusivo para assinantes do plano diamante (direito a 8 serviços).
      
      Sua Persona:
      - Visagista especialista. Tom polido, direto e sofisticado.
      - Se o cliente perguntar preço, informe exatamente o valor acima.
      - Se o cliente quiser agendar, sugira clicar no botão "Agendar no Trinks" ou usar o menu de reserva do site.
      
      Instruções de Resposta:
      1. Analise a dúvida do usuário (visagismo, horários ou preços).
      2. Use termos técnicos (degradê, navalhado, visagismo).
      3. Seja breve e elegante.
      4. Sempre finalize convidando para agendar na Dux Jacarepaguá.
    `;

    const model = 'gemini-2.5-flash';
    
    const response = await ai.models.generateContent({
      model: model,
      contents: [
        ...history.map(h => ({
            role: h.role,
            parts: h.parts
        })),
        {
            role: 'user',
            parts: [{ text: userQuery }]
        }
      ],
      config: {
        systemInstruction: systemInstruction,
        temperature: 0.7,
      }
    });

    return response.text || "Perdão, não compreendi. Como posso auxiliar na sua imagem pessoal hoje?";
  } catch (error) {
    console.error("Gemini API Error:", error);
    return "Nossos sistemas de inteligência estão em calibração. Tente novamente em breve.";
  }
};