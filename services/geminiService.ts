
import { GoogleGenAI } from "@google/genai";

const ai = new GoogleGenAI({ apiKey: process.env.API_KEY });

export async function getStyleAdvice(prompt: string) {
  try {
    const response = await ai.models.generateContent({
      model: 'gemini-3-flash-preview',
      contents: prompt,
      config: {
        systemInstruction: `Você é um consultor de estilo de barbearia de luxo chamado "As Barbearia". 
        Seu tom é profissional, elegante e encorajador. 
        Recomende cortes e estilos baseados na descrição do cliente. 
        Seja breve e direto ao ponto. Use termos como "Visagismo", "Sombreado", "Corte Texturizado".`,
      },
    });
    return response.text;
  } catch (error) {
    console.error("Gemini Error:", error);
    return "Desculpe, tive um problema ao analisar seu estilo. Que tal conversarmos pessoalmente na barbearia?";
  }
}
