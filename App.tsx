
import React from 'react';
import { HashRouter, Routes, Route } from 'react-router-dom';
import Layout from './components/Layout.tsx';
import Home from './pages/Home.tsx';
import Booking from './pages/Booking.tsx';
import { SERVICES, PROFESSIONALS } from './constants.ts';

const ServicesPage: React.FC = () => (
  <div className="max-w-7xl mx-auto px-4 py-12">
    <h1 className="text-4xl font-serif font-bold mb-12">Nossos Serviços</h1>
    <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
      {SERVICES.map((s) => (
        <div key={s.id} className="p-8 bg-zinc-900 rounded-3xl border border-zinc-800 flex justify-between items-start gap-8">
          <div>
            <h3 className="text-xl font-bold mb-2 text-cyan-400">{s.name}</h3>
            <p className="text-zinc-400 text-sm leading-relaxed mb-4">{s.description}</p>
            <span className="text-xs text-zinc-500 font-bold uppercase tracking-widest">{s.duration} MINUTOS</span>
          </div>
          <div className="text-right">
            <span className="text-3xl font-bold text-zinc-100">R$ {s.price.toFixed(2)}</span>
          </div>
        </div>
      ))}
    </div>
  </div>
);

const ProfessionalsPage: React.FC = () => (
  <div className="max-w-7xl mx-auto px-4 py-12">
    <h1 className="text-4xl font-serif font-bold mb-12 text-center">Nossa Equipe</h1>
    <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
      {PROFESSIONALS.map((p) => (
        <div key={p.id} className="text-center group">
          <div className="relative mb-6 inline-block">
            <img src={p.avatar} alt={p.name} className="w-48 h-48 rounded-full object-cover mx-auto border-4 border-zinc-800 group-hover:border-cyan-400 transition-all duration-500 shadow-2xl" />
            <div className="absolute -bottom-2 right-4 bg-cyan-500 text-zinc-950 text-xs font-bold px-3 py-1 rounded-full">{p.rating} ★</div>
          </div>
          <h3 className="text-2xl font-bold mb-1">{p.name}</h3>
          <p className="text-cyan-400 font-semibold mb-4">{p.role}</p>
          <p className="text-zinc-500 text-sm leading-relaxed max-w-xs mx-auto">{p.bio}</p>
        </div>
      ))}
    </div>
  </div>
);

const App: React.FC = () => {
  return (
    <HashRouter>
      <Layout>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/servicos" element={<ServicesPage />} />
          <Route path="/equipe" element={<ProfessionalsPage />} />
          <Route path="/agendamento" element={<Booking />} />
        </Routes>
      </Layout>
    </HashRouter>
  );
};

export default App;
