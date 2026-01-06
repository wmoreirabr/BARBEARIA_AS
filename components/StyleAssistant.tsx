
import React, { useState } from 'react';
import { getStyleAdvice } from '../services/geminiService';

const StyleAssistant: React.FC = () => {
  const [input, setInput] = useState('');
  const [advice, setAdvice] = useState('');
  const [loading, setLoading] = useState(false);

  const handleConsult = async () => {
    if (!input.trim()) return;
    setLoading(true);
    const result = await getStyleAdvice(input);
    setAdvice(result || '');
    setLoading(false);
  };

  return (
    <div className="bg-zinc-900/50 p-6 rounded-2xl border border-zinc-800 shadow-xl">
      <div className="flex items-center gap-3 mb-4">
        <div className="p-2 bg-cyan-500/10 rounded-lg">
          <svg className="w-6 h-6 text-cyan-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.663 17h4.674a1 1 0 00.922-.617l2.108-4.742A1 1 0 0016.446 10h-2.11L15.42 5.516a1 1 0 00-1.745-.894L9.123 13.692a1 1 0 00.922 1.617h2.11L10.58 21.484a1 1 0 001.745.894l4.135-6.023a1 1 0 00-.922-1.617h-4.674z" />
          </svg>
        </div>
        <h3 className="text-lg font-bold text-zinc-100">Consultor de Estilo IA</h3>
      </div>
      
      <p className="text-zinc-400 text-sm mb-4">
        Descreva como você gostaria de mudar seu visual ou qual seu tipo de cabelo, e nossa IA sugere o melhor corte.
      </p>

      <textarea
        value={input}
        onChange={(e) => setInput(e.target.value)}
        placeholder="Ex: Tenho rosto redondo e cabelo liso, quero um corte moderno que disfarce as laterais..."
        className="w-full bg-zinc-950 border border-zinc-800 rounded-xl p-3 text-sm text-zinc-300 focus:outline-none focus:ring-2 focus:ring-cyan-500 mb-4 resize-none h-24"
      />

      <button
        onClick={handleConsult}
        disabled={loading}
        className="w-full py-2 bg-cyan-600 hover:bg-cyan-500 disabled:opacity-50 text-white rounded-lg font-medium transition-all"
      >
        {loading ? 'Analisando...' : 'Obter Dica Personalizada'}
      </button>

      {advice && (
        <div className="mt-6 p-4 bg-zinc-800/50 rounded-xl border-l-4 border-cyan-400 animate-fade-in">
          <p className="text-sm text-zinc-300 italic">"{advice}"</p>
        </div>
      )}
    </div>
  );
};

export default StyleAssistant;
