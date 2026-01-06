
import React from 'react';
import { Link, useLocation } from 'react-router-dom';

const Layout: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const location = useLocation();

  const navItems = [
    { label: 'Início', path: '/' },
    { label: 'Serviços', path: '/servicos' },
    { label: 'Profissionais', path: '/equipe' },
    { label: 'Agendar', path: '/agendamento' },
  ];

  return (
    <div className="min-h-screen flex flex-col">
      <header className="fixed top-0 left-0 right-0 z-50 bg-zinc-950/80 backdrop-blur-md border-b border-zinc-800">
        <div className="max-w-7xl mx-auto px-4 h-20 flex items-center justify-between">
          <Link to="/" className="flex items-center gap-2">
            <img src="https://asbarbearia.netlify.app/logo.png" alt="Logo" className="h-12 w-auto" />
            <span className="text-xl font-bold tracking-tighter text-cyan-400 font-serif">AS BARBEARIA</span>
          </Link>

          <nav className="hidden md:flex gap-8">
            {navItems.map((item) => (
              <Link
                key={item.path}
                to={item.path}
                className={`text-sm font-medium transition-colors hover:text-cyan-400 ${
                  location.pathname === item.path ? 'text-cyan-400' : 'text-zinc-400'
                }`}
              >
                {item.label}
              </Link>
            ))}
          </nav>

          <Link
            to="/agendamento"
            className="bg-cyan-600 hover:bg-cyan-500 text-white px-6 py-2 rounded-full text-sm font-semibold transition-all shadow-lg shadow-cyan-900/20"
          >
            Agendar Agora
          </Link>
        </div>
      </header>

      <main className="flex-grow pt-20">
        {children}
      </main>

      <footer className="bg-zinc-950 border-t border-zinc-900 py-12 mt-12">
        <div className="max-w-7xl mx-auto px-4 text-center">
          <img src="https://asbarbearia.netlify.app/logo.png" alt="Logo" className="h-16 w-auto mx-auto mb-6 opacity-50 grayscale" />
          <p className="text-zinc-500 text-sm max-w-md mx-auto mb-8">
            Elevando a arte da barbearia a um novo patamar de excelência e estilo. Sua imagem é nossa prioridade.
          </p>
          <div className="flex justify-center gap-6 mb-8 text-zinc-400">
            <a href="#" className="hover:text-cyan-400 transition-colors">Instagram</a>
            <a href="#" className="hover:text-cyan-400 transition-colors">WhatsApp</a>
            <a href="#" className="hover:text-cyan-400 transition-colors">Facebook</a>
          </div>
          <p className="text-zinc-700 text-xs">
            © {new Date().getFullYear()} As Barbearia. Todos os direitos reservados.
          </p>
        </div>
      </footer>
    </div>
  );
};

export default Layout;
