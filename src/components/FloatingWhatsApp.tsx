import React from 'react';
import { MessageCircle } from 'lucide-react';
import { COMPANY_INFO } from '../data';

export const FloatingWhatsApp: React.FC = () => {
  return (
    <aside
      aria-label="Direct WhatsApp Contact"
      className="fixed bottom-6 right-6 z-40 flex items-center gap-3 group"
    >
      <span className="hidden sm:inline-block px-3 py-1.5 rounded-lg text-xs font-bold uppercase tracking-wider bg-[#0d1219] text-emerald-400 border border-emerald-500/30 shadow-lg pointer-events-none opacity-0 group-hover:opacity-100 transition-opacity">
        WhatsApp: +91 7303179577
      </span>
      <a
        id="floating-whatsapp-btn"
        href={COMPANY_INFO.whatsappUrl}
        target="_blank"
        rel="noopener noreferrer"
        className="w-13 h-13 sm:w-14 sm:h-14 rounded-full bg-emerald-500 hover:bg-emerald-400 text-black flex items-center justify-center shadow-2xl shadow-emerald-500/30 transition-all duration-200 transform hover:scale-105"
        aria-label="Direct WhatsApp Chat with Factory"
      >
        <MessageCircle className="w-6 h-6 sm:w-7 sm:h-7 fill-black" />
      </a>
    </aside>
  );
};
