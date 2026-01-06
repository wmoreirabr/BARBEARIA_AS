
import React, { useState } from 'react';
import { SERVICES, PROFESSIONALS, BUSINESS_HOURS } from '../constants.ts';
import { BookingStep, Service, Professional } from '../types.ts';

const Booking: React.FC = () => {
  const [step, setStep] = useState<BookingStep>(BookingStep.SERVICE);
  const [selectedService, setSelectedService] = useState<Service | null>(null);
  const [selectedProfessional, setSelectedProfessional] = useState<Professional | null>(null);
  const [selectedDate, setSelectedDate] = useState<string>('');
  const [selectedTime, setSelectedTime] = useState<string>('');
  const [userData, setUserData] = useState({ name: '', phone: '' });

  const nextStep = () => {
    if (step === BookingStep.SERVICE && selectedService) setStep(BookingStep.PROFESSIONAL);
    else if (step === BookingStep.PROFESSIONAL && selectedProfessional) setStep(BookingStep.DATE_TIME);
    else if (step === BookingStep.DATE_TIME && selectedDate && selectedTime) setStep(BookingStep.CONFIRMATION);
  };

  const handleFinish = () => {
    alert(`Agendamento realizado com sucesso para ${userData.name}!`);
    window.location.hash = '/';
  };

  const renderStep = () => {
    switch (step) {
      case BookingStep.SERVICE:
        return (
          <div className="space-y-4">
            <h3 className="text-2xl font-serif font-bold mb-6">Escolha o Serviço</h3>
            {SERVICES.map((s) => (
              <button
                key={s.id}
                onClick={() => { setSelectedService(s); nextStep(); }}
                className={`w-full text-left p-6 rounded-2xl border transition-all ${
                  selectedService?.id === s.id ? 'bg-cyan-600/10 border-cyan-500' : 'bg-zinc-900 border-zinc-800 hover:border-zinc-700'
                }`}
              >
                <div className="flex justify-between items-center">
                  <div>
                    <p className="font-bold text-lg">{s.name}</p>
                    <p className="text-zinc-500 text-sm">{s.duration} min</p>
                  </div>
                  <span className="text-cyan-400 font-bold text-xl">R$ {s.price.toFixed(2)}</span>
                </div>
              </button>
            ))}
          </div>
        );

      case BookingStep.PROFESSIONAL:
        return (
          <div className="space-y-4">
            <h3 className="text-2xl font-serif font-bold mb-6">Escolha o Barbeiro</h3>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              {PROFESSIONALS.map((p) => (
                <button
                  key={p.id}
                  onClick={() => { setSelectedProfessional(p); nextStep(); }}
                  className={`text-left p-6 rounded-2xl border transition-all ${
                    selectedProfessional?.id === p.id ? 'bg-cyan-600/10 border-cyan-500' : 'bg-zinc-900 border-zinc-800 hover:border-zinc-700'
                  }`}
                >
                  <img src={p.avatar} alt={p.name} className="w-16 h-16 rounded-full mb-4 border-2 border-zinc-700" />
                  <p className="font-bold">{p.name}</p>
                  <p className="text-cyan-400 text-xs font-semibold">{p.role}</p>
                </button>
              ))}
            </div>
            <button onClick={() => setStep(BookingStep.SERVICE)} className="text-zinc-500 text-sm mt-4 hover:text-zinc-300">← Voltar</button>
          </div>
        );

      case BookingStep.DATE_TIME:
        return (
          <div className="space-y-8">
            <h3 className="text-2xl font-serif font-bold mb-6">Escolha Data e Hora</h3>
            
            <div className="space-y-4">
              <label className="block text-sm font-medium text-zinc-400">Data do Atendimento</label>
              <input 
                type="date" 
                min={new Date().toISOString().split('T')[0]}
                onChange={(e) => setSelectedDate(e.target.value)}
                className="w-full bg-zinc-950 border border-zinc-800 rounded-xl p-4 text-zinc-100 focus:outline-none focus:ring-2 focus:ring-cyan-500"
              />
            </div>

            {selectedDate && (
              <div className="space-y-4 animate-fade-in">
                <label className="block text-sm font-medium text-zinc-400">Horários Disponíveis</label>
                <div className="grid grid-cols-3 sm:grid-cols-4 gap-2">
                  {BUSINESS_HOURS.map((h) => (
                    <button
                      key={h}
                      onClick={() => setSelectedTime(h)}
                      className={`py-3 rounded-lg border text-sm font-medium transition-all ${
                        selectedTime === h ? 'bg-cyan-600 border-cyan-500 text-white' : 'bg-zinc-900 border-zinc-800 text-zinc-400 hover:border-zinc-600'
                      }`}
                    >
                      {h}
                    </button>
                  ))}
                </div>
              </div>
            )}

            <div className="flex justify-between items-center mt-8">
              <button onClick={() => setStep(BookingStep.PROFESSIONAL)} className="text-zinc-500 text-sm hover:text-zinc-300">← Voltar</button>
              <button 
                onClick={nextStep} 
                disabled={!selectedDate || !selectedTime}
                className="bg-cyan-600 hover:bg-cyan-500 disabled:opacity-50 text-white px-8 py-3 rounded-full font-bold transition-all"
              >
                Próximo Passo
              </button>
            </div>
          </div>
        );

      case BookingStep.CONFIRMATION:
        return (
          <div className="space-y-8">
            <h3 className="text-2xl font-serif font-bold mb-6">Quase Lá!</h3>
            
            <div className="bg-zinc-900 p-6 rounded-2xl border border-zinc-800 space-y-4">
              <div className="flex justify-between items-center border-b border-zinc-800 pb-4">
                <span className="text-zinc-500">Serviço:</span>
                <span className="font-bold">{selectedService?.name}</span>
              </div>
              <div className="flex justify-between items-center border-b border-zinc-800 pb-4">
                <span className="text-zinc-500">Profissional:</span>
                <span className="font-bold">{selectedProfessional?.name}</span>
              </div>
              <div className="flex justify-between items-center border-b border-zinc-800 pb-4">
                <span className="text-zinc-500">Quando:</span>
                <span className="font-bold text-cyan-400">{new Date(selectedDate).toLocaleDateString('pt-BR')} às {selectedTime}</span>
              </div>
              <div className="flex justify-between items-center pt-2">
                <span className="text-zinc-100 font-bold">Total:</span>
                <span className="text-2xl font-bold text-cyan-400">R$ {selectedService?.price.toFixed(2)}</span>
              </div>
            </div>

            <div className="space-y-4">
              <input 
                type="text" 
                placeholder="Seu Nome Completo"
                value={userData.name}
                onChange={(e) => setUserData({...userData, name: e.target.value})}
                className="w-full bg-zinc-950 border border-zinc-800 rounded-xl p-4 text-zinc-100 focus:outline-none focus:ring-2 focus:ring-cyan-500"
              />
              <input 
                type="tel" 
                placeholder="Seu Telefone / WhatsApp"
                value={userData.phone}
                onChange={(e) => setUserData({...userData, phone: e.target.value})}
                className="w-full bg-zinc-950 border border-zinc-800 rounded-xl p-4 text-zinc-100 focus:outline-none focus:ring-2 focus:ring-cyan-500"
              />
            </div>

            <div className="flex justify-between items-center mt-8">
              <button onClick={() => setStep(BookingStep.DATE_TIME)} className="text-zinc-500 text-sm hover:text-zinc-300">← Voltar</button>
              <button 
                onClick={handleFinish} 
                disabled={!userData.name || !userData.phone}
                className="bg-green-600 hover:bg-green-700 disabled:opacity-50 text-white px-8 py-3 rounded-full font-bold transition-all shadow-lg shadow-green-900/20"
              >
                Confirmar Agendamento
              </button>
            </div>
          </div>
        );
    }
  };

  return (
    <div className="max-w-3xl mx-auto px-4 py-12">
      <div className="mb-12 flex justify-between">
        {[BookingStep.SERVICE, BookingStep.PROFESSIONAL, BookingStep.DATE_TIME, BookingStep.CONFIRMATION].map((s, i) => (
          <div key={s} className="flex flex-col items-center gap-2">
            <div className={`w-8 h-8 rounded-full flex items-center justify-center text-xs font-bold border-2 ${
              step === s ? 'bg-cyan-500 border-cyan-500 text-white' : 'border-zinc-700 text-zinc-600'
            }`}>
              {i + 1}
            </div>
            <span className="hidden sm:block text-[10px] uppercase tracking-widest text-zinc-500 font-bold">{s}</span>
          </div>
        ))}
      </div>

      <div className="bg-zinc-950/50 p-8 rounded-3xl border border-zinc-800">
        {renderStep()}
      </div>
    </div>
  );
};

export default Booking;
