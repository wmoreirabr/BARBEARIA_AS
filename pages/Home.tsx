
import React from 'react';
import { Link } from 'react-router-dom';
import { PROFESSIONALS, SERVICES } from '../constants.ts';
import StyleAssistant from '../components/StyleAssistant.tsx';

const Home: React.FC = () => {
  return (
    <div className="space-y-24 pb-20">
      {/* Hero Section */}
      <section className="relative h-[85vh] flex items-center overflow-hidden">
        <div className="absolute inset-0 z-0">
          <img 
            src="https://images.unsplash.com/photo-1503951914875-452162b0f3f1?auto=format&fit=crop&q=80&w=2000" 
            className="w-full h-full object-cover opacity-30" 
            alt="Barber Shop"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-zinc-950 via-zinc-950/60 to-transparent"></div>
        </div>

        <div className="relative z-10 max-w-7xl mx-auto px-4 w-full">
          <div className="max-w-2xl">
            <span className="inline-block px-3 py-1 bg-cyan-600/20 text-cyan-400 rounded-full text-xs font-bold tracking-widest uppercase mb-6">
              Estilo • Tradição • Excelência
            </span>
            <h1 className="text-6xl md:text-8xl font-serif font-bold mb-8 leading-tight">
              Onde o estilo <br /> encontra a <span className="text-cyan-400">arte</span>.
            </h1>
            <p className="text-xl text-zinc-400 mb-10 leading-relaxed">
              Descubra a experiência definitiva em cuidados masculinos. Na As Barbearia, transformamos seu visual com precisão e sofisticação.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <Link to="/agendamento" className="px-8 py-4 bg-cyan-600 hover:bg-cyan-500 text-white rounded-full font-bold text-center transition-all transform hover:scale-105 shadow-xl shadow-cyan-900/40">
                Agendar Agora
              </Link>
              <Link to="/servicos" className="px-8 py-4 bg-zinc-800 hover:bg-zinc-700 text-white rounded-full font-bold text-center transition-all">
                Ver Serviços
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Services Preview */}
      <section className="max-w-7xl mx-auto px-4">
        <div className="flex justify-between items-end mb-12">
          <div>
            <h2 className="text-3xl font-serif font-bold mb-2">Serviços Premium</h2>
            <p className="text-zinc-500">Especialidades feitas para o homem moderno.</p>
          </div>
          <Link to="/servicos" className="text-cyan-400 hover:text-cyan-300 font-semibold text-sm">Ver todos →</Link>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {SERVICES.slice(0, 3).map((s) => (
            <div key={s.id} className="group p-8 bg-zinc-900 rounded-3xl border border-zinc-800 hover:border-cyan-500/50 transition-all">
              <h3 className="text-xl font-bold mb-3">{s.name}</h3>
              <p className="text-zinc-400 text-sm mb-6 leading-relaxed">{s.description}</p>
              <div className="flex justify-between items-center">
                <span className="text-2xl font-bold text-cyan-400">R$ {s.price.toFixed(2)}</span>
                <span className="text-xs text-zinc-500 uppercase tracking-widest">{s.duration} min</span>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Team and AI Assistant */}
      <section className="bg-zinc-900/30 py-24">
        <div className="max-w-7xl mx-auto px-4 grid grid-cols-1 lg:grid-cols-2 gap-16 items-start">
          <div>
            <h2 className="text-4xl font-serif font-bold mb-8">Nossos Mestres</h2>
            <div className="space-y-6">
              {PROFESSIONALS.map((p) => (
                <div key={p.id} className="flex gap-6 p-6 rounded-2xl bg-zinc-900 border border-zinc-800 hover:bg-zinc-800/50 transition-all cursor-default group">
                  <img src={p.avatar} alt={p.name} className="w-20 h-20 rounded-full object-cover border-2 border-zinc-700 group-hover:border-cyan-400 transition-colors" />
                  <div>
                    <div className="flex items-center gap-2 mb-1">
                      <h4 className="font-bold text-zinc-100">{p.name}</h4>
                      <span className="text-xs px-2 py-0.5 bg-cyan-500/10 text-cyan-400 rounded">{p.rating} ★</span>
                    </div>
                    <p className="text-cyan-400 text-xs font-semibold mb-2">{p.role}</p>
                    <p className="text-zinc-400 text-sm">{p.bio}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
          
          <div className="sticky top-28">
            <h2 className="text-3xl font-serif font-bold mb-8">Dúvida no Visual?</h2>
            <StyleAssistant />
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;
