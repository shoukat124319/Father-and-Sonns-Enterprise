import React from 'react';
import { Scissors, TestTube2, Tag, Shirt, Check } from 'lucide-react';
import { SERVICES } from '../data';
import { ServiceItem } from '../types';

interface ServicesSectionProps {
  onSelectService: (serviceName: string) => void;
}

export const ServicesSection: React.FC<ServicesSectionProps> = ({ onSelectService }) => {
  const getServiceIcon = (id: string) => {
    switch (id) {
      case 'pattern-making':
        return <Scissors className="w-6 h-6 text-emerald-400" />;
      case 'sampling':
        return <TestTube2 className="w-6 h-6 text-purple-400" />;
      case 'brand-manufacturing':
        return <Tag className="w-6 h-6 text-emerald-400" />;
      default:
        return <Shirt className="w-6 h-6 text-purple-400" />;
    }
  };

  return (
    <section
      id="services"
      className="py-24 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto border-t border-white/5"
    >
      <div className="text-center max-w-3xl mx-auto mb-16 space-y-4">
        <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-md text-xs font-bold uppercase tracking-wider bg-emerald-500/10 border border-emerald-500/20 text-emerald-400">
          Complete Production Ecosystem
        </div>
        <h2
          id="services-heading"
          className="font-display font-extrabold text-3xl sm:text-4xl md:text-5xl text-white tracking-tight"
        >
          FROM IDEA TO FINISHED GARMENT
        </h2>
        <p className="text-slate-400 text-base sm:text-lg">
          Four dedicated B2B manufacturing capabilities designed to scale emerging startups and established fashion labels.
        </p>
      </div>

      {/* Four Clean 2D Service Blocks */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {SERVICES.map((service: ServiceItem) => (
          <div
            key={service.id}
            id={`service-card-${service.id}`}
            className="rounded-2xl bg-[#0e131b] border border-white/10 hover:border-emerald-500/30 p-8 flex flex-col justify-between transition-all duration-200"
          >
            <div>
              {/* Header */}
              <div className="flex items-center justify-between mb-6">
                <div className="w-12 h-12 rounded-xl bg-white/5 border border-white/10 flex items-center justify-center">
                  {getServiceIcon(service.id)}
                </div>
                <span className="font-mono text-xs font-bold px-3 py-1 rounded-md bg-white/5 text-slate-300 border border-white/10">
                  STAGE {service.number}
                </span>
              </div>

              {/* Title & Tag */}
              <div className="mb-4">
                <span className="text-[11px] font-semibold text-emerald-400 uppercase tracking-widest block mb-1">
                  {service.tag}
                </span>
                <h3 className="font-display font-bold text-2xl text-white">
                  {service.title}
                </h3>
              </div>

              {/* Description */}
              <p className="text-slate-300 text-sm leading-relaxed mb-6 font-normal">
                {service.description}
              </p>

              {/* Deliverable Checklist */}
              <ul className="space-y-2.5 pt-4 border-t border-white/5">
                {service.features.map((feat, idx) => (
                  <li key={idx} className="flex items-start gap-2.5 text-xs sm:text-sm text-slate-300">
                    <Check className="w-4 h-4 text-emerald-400 shrink-0 mt-0.5" />
                    <span>{feat}</span>
                  </li>
                ))}
              </ul>
            </div>

            {/* Quick Action */}
            <div className="pt-8">
              <button
                id={`request-service-${service.id}`}
                onClick={() => onSelectService(service.title)}
                className="text-xs font-bold uppercase tracking-wider text-emerald-400 hover:text-emerald-300 inline-flex items-center gap-1.5 transition-colors"
              >
                <span>Select for production inquiry</span>
                <span>→</span>
              </button>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};
