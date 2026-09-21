import React from 'react';
import { ArrowRight, MessageCircle, CheckCircle2, ShieldCheck, Factory, Sparkles } from 'lucide-react';
import { COMPANY_INFO } from '../data';

interface HeroProps {
  onStartManufacturing: () => void;
}

export const Hero: React.FC<HeroProps> = ({ onStartManufacturing }) => {
  return (
    <section
      id="hero"
      className="relative min-h-[90vh] flex flex-col justify-center pt-32 pb-20 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto"
    >
      {/* Top Banner Tagline & Flat MOQ Pill */}
      <div className="flex flex-wrap items-center gap-3 mb-6">
        {/* Tagline Badge */}
        <div
          id="hero-tagline-badge"
          className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full text-xs font-semibold tracking-wider uppercase bg-white/5 border border-white/10 text-slate-300 backdrop-blur-sm"
        >
          <Sparkles className="w-3.5 h-3.5 text-purple-400" />
          <span>{COMPANY_INFO.tagline}</span>
        </div>

        {/* Very Prominent Flat Badge: MOQ STARTS FROM 50 PIECES */}
        <div
          id="hero-moq-prominent-badge"
          className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full text-xs sm:text-sm font-bold tracking-wider uppercase bg-emerald-500/15 border border-emerald-500/50 text-emerald-400 backdrop-blur-sm shadow-sm"
        >
          <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
          <span>MOQ STARTS FROM 50 PIECES</span>
        </div>
      </div>

      {/* Hero Headline */}
      <div className="space-y-1 mb-8 max-w-5xl">
        <h1
          id="hero-main-heading-line1"
          className="font-display font-extrabold text-4xl sm:text-6xl md:text-7xl lg:text-8xl tracking-tight text-white leading-[1.05]"
        >
          YOU HAVE THE BRAND.
        </h1>
        <h1
          id="hero-main-heading-line2"
          className="font-display font-extrabold text-4xl sm:text-6xl md:text-7xl lg:text-8xl tracking-tight text-transparent bg-clip-text bg-gradient-to-r from-emerald-400 via-emerald-300 to-purple-400 leading-[1.05]"
        >
          WE MAKE THE CLOTHES.
        </h1>
      </div>

      {/* Supporting Text */}
      <p
        id="hero-supporting-text"
        className="text-lg sm:text-xl text-slate-300 max-w-3xl font-normal leading-relaxed mb-10"
      >
        Custom garment manufacturing for clothing brands, startups and businesses.
        From pattern making and sampling to customized garment production.
      </p>

      {/* Primary & Secondary Action CTAs */}
      <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-4 mb-16">
        <button
          id="hero-start-manufacturing-btn"
          onClick={onStartManufacturing}
          className="inline-flex items-center justify-center gap-3 px-8 py-4 rounded-xl text-sm sm:text-base font-bold tracking-wider uppercase bg-emerald-500 hover:bg-emerald-400 text-black transition-all duration-200 shadow-lg shadow-emerald-500/20 group"
        >
          <span>START MANUFACTURING</span>
          <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
        </button>

        <a
          id="hero-whatsapp-us-btn"
          href={COMPANY_INFO.whatsappUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center justify-center gap-3 px-8 py-4 rounded-xl text-sm sm:text-base font-bold tracking-wider uppercase bg-white/5 hover:bg-white/10 border border-white/15 text-white transition-all duration-200 backdrop-blur-sm group"
        >
          <MessageCircle className="w-5 h-5 text-emerald-400" />
          <span>WHATSAPP US</span>
        </a>
      </div>

      {/* Factory Credentials & Fast Verification Strip (Clean Flat 2D) */}
      <div
        id="hero-credentials-strip"
        className="grid grid-cols-2 md:grid-cols-4 gap-4 pt-8 border-t border-white/10"
      >
        <div className="flex items-start gap-3">
          <Factory className="w-5 h-5 text-emerald-400 shrink-0 mt-0.5" />
          <div>
            <div className="text-xs text-slate-400 uppercase tracking-wider font-semibold">Factory Location</div>
            <div className="text-sm font-bold text-white">Noida, Uttar Pradesh</div>
          </div>
        </div>

        <div className="flex items-start gap-3">
          <ShieldCheck className="w-5 h-5 text-purple-400 shrink-0 mt-0.5" />
          <div>
            <div className="text-xs text-slate-400 uppercase tracking-wider font-semibold">Registered GST</div>
            <div className="text-sm font-mono font-bold text-slate-200">{COMPANY_INFO.gstNumber}</div>
          </div>
        </div>

        <div className="flex items-start gap-3">
          <CheckCircle2 className="w-5 h-5 text-emerald-400 shrink-0 mt-0.5" />
          <div>
            <div className="text-xs text-slate-400 uppercase tracking-wider font-semibold">Minimum Batch</div>
            <div className="text-sm font-bold text-emerald-300">50 Pieces / Low MOQ</div>
          </div>
        </div>

        <div className="flex items-start gap-3">
          <Sparkles className="w-5 h-5 text-purple-400 shrink-0 mt-0.5" />
          <div>
            <div className="text-xs text-slate-400 uppercase tracking-wider font-semibold">Established</div>
            <div className="text-sm font-bold text-white">{COMPANY_INFO.establishedYear} • Direct Factory</div>
          </div>
        </div>
      </div>
    </section>
  );
};
