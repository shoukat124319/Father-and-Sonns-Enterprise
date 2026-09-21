import React from 'react';
import { ArrowDown, CheckCircle2 } from 'lucide-react';
import { PROCESS_STEPS } from '../data';

export const ProcessSection: React.FC = () => {
  return (
    <section
      id="process"
      className="py-24 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto border-t border-white/5"
    >
      <div className="text-center max-w-3xl mx-auto mb-16 space-y-4">
        <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-md text-xs font-bold uppercase tracking-wider bg-purple-500/10 border border-purple-500/20 text-purple-400">
          Step-by-Step Execution
        </div>
        <h2
          id="process-heading"
          className="font-display font-extrabold text-3xl sm:text-4xl md:text-5xl text-white tracking-tight"
        >
          YOUR IDEA. OUR MANUFACTURING.
        </h2>
        <p className="text-slate-400 text-base sm:text-lg">
          A seamless, transparent 6-stage lifecycle engineered for consistent garment fitting, finish, and timely dispatch.
        </p>
      </div>

      {/* Flat 2D Process Timeline Grid with directional connectors */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 relative">
        {PROCESS_STEPS.map((step, idx) => (
          <div
            key={step.step}
            id={`process-step-${step.step}`}
            className="rounded-2xl bg-[#0e131b] border border-white/10 p-7 relative flex flex-col justify-between group hover:border-purple-500/40 transition-all duration-200"
          >
            {/* Step Number & Badge */}
            <div>
              <div className="flex items-center justify-between mb-4">
                <span className="font-display font-black text-4xl text-transparent bg-clip-text bg-gradient-to-r from-emerald-400 to-purple-400">
                  {step.step}
                </span>
                <span className="text-[10px] font-bold uppercase tracking-widest px-2.5 py-1 rounded bg-white/5 text-slate-400 border border-white/10">
                  PHASE 0{idx + 1}
                </span>
              </div>

              {/* Title */}
              <h3 className="font-display font-bold text-xl text-white mb-2">
                {step.title}
              </h3>

              {/* Primary Description */}
              <p className="text-emerald-400 text-sm font-semibold mb-3">
                {step.description}
              </p>

              {/* Detailed Explanation */}
              <p className="text-slate-400 text-xs sm:text-sm leading-relaxed">
                {step.detail}
              </p>
            </div>

            {/* Bottom Step Indicator */}
            <div className="pt-6 mt-4 border-t border-white/5 flex items-center justify-between text-xs text-slate-500">
              <span className="flex items-center gap-1.5 text-slate-400">
                <CheckCircle2 className="w-3.5 h-3.5 text-emerald-400" />
                <span>Verified Milestones</span>
              </span>
              {idx < PROCESS_STEPS.length - 1 && (
                <span className="text-slate-400 flex items-center gap-1 font-mono">
                  Next Step <ArrowDown className="w-3 h-3 -rotate-90 hidden lg:inline" />
                </span>
              )}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};
