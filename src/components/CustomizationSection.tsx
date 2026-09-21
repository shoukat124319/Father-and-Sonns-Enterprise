import React from 'react';
import { AlertCircle, Check } from 'lucide-react';
import { CUSTOMIZATION_PILLARS } from '../data';

export const CustomizationSection: React.FC = () => {
  return (
    <section
      id="customization"
      className="py-24 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto border-t border-white/5"
    >
      <div className="text-center max-w-3xl mx-auto mb-16 space-y-4">
        <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-md text-xs font-bold uppercase tracking-wider bg-emerald-500/10 border border-emerald-500/20 text-emerald-400">
          Modular Customization Matrix
        </div>
        <h2
          id="customization-heading"
          className="font-display font-extrabold text-3xl sm:text-4xl md:text-5xl text-white tracking-tight"
        >
          MAKE YOUR GARMENT YOUR WAY
        </h2>
        <p className="text-slate-400 text-base sm:text-lg">
          Tailor every layer of your garment from yarn selection to collar ribbing and bespoke packaging.
        </p>
      </div>

      {/* 6 Clean 2D Categories Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {CUSTOMIZATION_PILLARS.map((pillar) => (
          <div
            key={pillar.title}
            id={`customization-pillar-${pillar.title.toLowerCase()}`}
            className="rounded-2xl bg-[#0e131b] border border-white/10 p-7 flex flex-col justify-between hover:border-emerald-500/30 transition-colors"
          >
            <div>
              <div className="flex items-center justify-between mb-3">
                <span className="text-[11px] font-bold uppercase tracking-wider text-purple-400 bg-purple-500/10 px-2.5 py-0.5 rounded border border-purple-500/20">
                  {pillar.subtitle}
                </span>
              </div>

              <h3 className="font-display font-bold text-2xl text-white mb-2">
                {pillar.title}
              </h3>

              <p className="text-slate-300 text-sm leading-relaxed mb-6 font-normal">
                {pillar.description}
              </p>

              <div className="space-y-2 pt-4 border-t border-white/5">
                <span className="text-[11px] uppercase tracking-wider text-slate-500 font-semibold block">
                  Available options include:
                </span>
                <ul className="space-y-2">
                  {pillar.examples.map((item, idx) => (
                    <li key={idx} className="flex items-center gap-2 text-xs text-slate-300">
                      <Check className="w-3.5 h-3.5 text-emerald-400 shrink-0" />
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* Required Disclaimer Phrase */}
      <div
        id="customization-disclaimer"
        className="mt-10 p-4 rounded-xl bg-white/[0.02] border border-white/10 flex items-center justify-center gap-3 text-xs sm:text-sm text-slate-400 text-center"
      >
        <AlertCircle className="w-4 h-4 text-emerald-400 shrink-0" />
        <span>
          <strong>Notice:</strong> Customization is subject to product and production requirements.
        </span>
      </div>
    </section>
  );
};
