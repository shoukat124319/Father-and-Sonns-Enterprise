import React from 'react';
import { ArrowRight, CheckCircle2, TrendingUp, ShieldCheck, Zap } from 'lucide-react';

interface MoqSectionProps {
  onDiscussRequirement: () => void;
}

export const MoqSection: React.FC<MoqSectionProps> = ({ onDiscussRequirement }) => {
  return (
    <section
      id="moq"
      className="py-24 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto border-t border-white/5"
    >
      <div
        id="moq-hero-container"
        className="rounded-3xl bg-gradient-to-b from-[#0e141d] to-[#0a0d13] border border-white/15 p-8 sm:p-12 lg:p-16 relative overflow-hidden"
      >
        {/* Subtle decorative background gradient glows (flat CSS, not 3D object) */}
        <div className="absolute top-0 right-0 w-96 h-96 bg-emerald-500/10 rounded-full blur-3xl pointer-events-none" />
        <div className="absolute bottom-0 left-0 w-96 h-96 bg-purple-500/10 rounded-full blur-3xl pointer-events-none" />

        <div className="relative z-10 grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">
          {/* Left Column: Huge Flat Number 50+ */}
          <div className="lg:col-span-5 text-center lg:text-left space-y-2">
            <span className="inline-block text-xs font-bold uppercase tracking-widest text-emerald-400 bg-emerald-500/10 border border-emerald-500/30 px-3.5 py-1.5 rounded-full mb-3">
              Startup Friendly MOQ
            </span>
            <div
              id="moq-large-number"
              className="font-display font-black text-7xl sm:text-8xl md:text-9xl text-white tracking-tighter leading-none select-none"
            >
              50<span className="text-emerald-400">+</span>
            </div>
            <div className="text-sm font-semibold uppercase tracking-widest text-slate-400">
              Pieces Minimum Batch
            </div>
          </div>

          {/* Right Column: Copy & CTA */}
          <div className="lg:col-span-7 space-y-6">
            <h2
              id="moq-heading"
              className="font-display font-extrabold text-3xl sm:text-4xl md:text-5xl text-white tracking-tight leading-tight"
            >
              MINIMUM ORDER STARTS FROM 50 PIECES
            </h2>

            <p className="text-base sm:text-lg text-slate-300 font-normal leading-relaxed">
              Start with a smaller production quantity, test your product and grow your clothing brand without tying up massive working capital.
            </p>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 pt-2">
              <div className="flex items-center gap-2.5 text-sm text-slate-200">
                <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0" />
                <span>Test your market with lower risk</span>
              </div>
              <div className="flex items-center gap-2.5 text-sm text-slate-200">
                <TrendingUp className="w-4 h-4 text-purple-400 shrink-0" />
                <span>Scalable unit economics as you grow</span>
              </div>
              <div className="flex items-center gap-2.5 text-sm text-slate-200">
                <ShieldCheck className="w-4 h-4 text-emerald-400 shrink-0" />
                <span>Same premium fabric & stitch standards</span>
              </div>
              <div className="flex items-center gap-2.5 text-sm text-slate-200">
                <Zap className="w-4 h-4 text-purple-400 shrink-0" />
                <span>Fast sampling and production turns</span>
              </div>
            </div>

            <div className="pt-4">
              <button
                id="moq-discuss-requirement-btn"
                onClick={onDiscussRequirement}
                className="inline-flex items-center gap-3 px-8 py-4 rounded-xl text-sm sm:text-base font-bold tracking-wider uppercase bg-emerald-500 hover:bg-emerald-400 text-black transition-all duration-200 shadow-lg shadow-emerald-500/20"
              >
                <span>DISCUSS YOUR REQUIREMENT</span>
                <ArrowRight className="w-4 h-4" />
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
