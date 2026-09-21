import React from 'react';
import { Palette, Scissors, Sparkles, Sliders, CheckSquare, Layers, ShieldCheck, Truck } from 'lucide-react';
import { BRAND_FEATURES } from '../data';

export const BrandCapabilitiesSection: React.FC = () => {
  const getFeatureIcon = (idx: number) => {
    switch (idx) {
      case 0: return <Sparkles className="w-5 h-5 text-emerald-400" />;
      case 1: return <Sliders className="w-5 h-5 text-purple-400" />;
      case 2: return <Layers className="w-5 h-5 text-emerald-400" />;
      case 3: return <Palette className="w-5 h-5 text-purple-400" />;
      case 4: return <ShieldCheck className="w-5 h-5 text-emerald-400" />;
      case 5: return <Scissors className="w-5 h-5 text-purple-400" />;
      case 6: return <CheckSquare className="w-5 h-5 text-emerald-400" />;
      default: return <Truck className="w-5 h-5 text-purple-400" />;
    }
  };

  return (
    <section
      id="brand-capabilities"
      className="py-24 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto border-t border-white/5"
    >
      <div className="max-w-4xl mx-auto text-center mb-16 space-y-4">
        <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-md text-xs font-bold uppercase tracking-wider bg-emerald-500/10 border border-emerald-500/20 text-emerald-400">
          Built For Modern Apparel Brands
        </div>

        <div className="space-y-1">
          <h2
            id="brand-capabilities-heading"
            className="font-display font-extrabold text-3xl sm:text-5xl md:text-6xl text-white tracking-tight leading-none"
          >
            YOUR BRAND.
          </h2>
          <h2 className="font-display font-extrabold text-3xl sm:text-5xl md:text-6xl text-transparent bg-clip-text bg-gradient-to-r from-emerald-400 via-teal-300 to-purple-400 tracking-tight leading-none">
            YOUR DESIGN.
          </h2>
          <h2 className="font-display font-extrabold text-3xl sm:text-5xl md:text-6xl text-white tracking-tight leading-none">
            YOUR CLOTHING.
          </h2>
        </div>

        <p className="text-slate-300 text-base sm:text-lg max-w-2xl mx-auto font-normal leading-relaxed pt-2">
          Whether you&apos;re launching a new clothing brand or expanding an existing collection, we can manufacture garments according to your requirements.
        </p>
      </div>

      {/* 8 Clean 2D Feature Blocks */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
        {BRAND_FEATURES.map((feature, idx) => (
          <div
            key={feature.title}
            id={`brand-feature-${idx}`}
            className="rounded-2xl bg-[#0e131b] border border-white/10 p-6 flex flex-col justify-between hover:border-emerald-500/30 transition-colors"
          >
            <div className="space-y-3">
              <div className="w-10 h-10 rounded-xl bg-white/5 border border-white/10 flex items-center justify-center">
                {getFeatureIcon(idx)}
              </div>
              <h3 className="font-display font-bold text-lg text-white">
                {feature.title}
              </h3>
              <p className="text-xs sm:text-sm text-slate-400 leading-relaxed font-normal">
                {feature.description}
              </p>
            </div>

            <div className="pt-4 mt-2 border-t border-white/5 flex items-center gap-2 text-[11px] font-semibold text-emerald-400 uppercase tracking-wider">
              <span>Verified Specification</span>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};
