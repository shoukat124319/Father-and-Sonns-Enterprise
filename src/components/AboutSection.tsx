import React from 'react';
import { Scissors, Layers, CheckCircle, ShieldCheck } from 'lucide-react';
import { COMPANY_INFO } from '../data';

export const AboutSection: React.FC = () => {
  return (
    <section
      id="about"
      className="py-24 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto border-t border-white/5"
    >
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
        {/* Left Column: Heading & Text */}
        <div className="lg:col-span-7 space-y-6">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-md text-xs font-bold uppercase tracking-wider bg-emerald-500/10 border border-emerald-500/20 text-emerald-400">
            About The Enterprise
          </div>

          <h2
            id="about-heading"
            className="font-display font-extrabold text-3xl sm:text-4xl md:text-5xl text-white tracking-tight leading-tight"
          >
            WE MANUFACTURE FOR YOUR BRAND
          </h2>

          <div className="space-y-4 text-base sm:text-lg text-slate-300 font-normal leading-relaxed">
            <p>
              <strong className="text-white font-semibold">FATHER AND SONS ENTERPRISES</strong> is a garment
              manufacturing business helping clothing brands, startups and businesses turn their designs and ideas
              into finished garments.
            </p>
            <p>
              We manufacture T-shirts, joggers, track pants, sweatshirts, hoodies, gymwear and other customized
              garments according to customer requirements.
            </p>
            <p>
              Our services include pattern making, sampling, customized garment production and bulk manufacturing.
            </p>
          </div>

          {/* Quick value indicators */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 pt-4">
            <div className="flex items-center gap-3 p-3 rounded-lg bg-white/[0.03] border border-white/5">
              <CheckCircle className="w-5 h-5 text-emerald-400 shrink-0" />
              <span className="text-sm font-medium text-slate-200">Startup & Boutique Friendly</span>
            </div>
            <div className="flex items-center gap-3 p-3 rounded-lg bg-white/[0.03] border border-white/5">
              <Scissors className="w-5 h-5 text-purple-400 shrink-0" />
              <span className="text-sm font-medium text-slate-200">In-House Master Pattern Making</span>
            </div>
            <div className="flex items-center gap-3 p-3 rounded-lg bg-white/[0.03] border border-white/5">
              <Layers className="w-5 h-5 text-emerald-400 shrink-0" />
              <span className="text-sm font-medium text-slate-200">Pre-Bulk Approval Sampling</span>
            </div>
            <div className="flex items-center gap-3 p-3 rounded-lg bg-white/[0.03] border border-white/5">
              <ShieldCheck className="w-5 h-5 text-purple-400 shrink-0" />
              <span className="text-sm font-medium text-slate-200">GST Invoice & Transparent Pricing</span>
            </div>
          </div>
        </div>

        {/* Right Column: Flat Clean Profile Card */}
        <div className="lg:col-span-5">
          <div
            id="about-company-spec-card"
            className="rounded-2xl bg-[#0e131b] border border-white/10 p-7 sm:p-8 space-y-6 shadow-xl"
          >
            <div className="border-b border-white/10 pb-5">
              <span className="text-xs text-emerald-400 uppercase tracking-widest font-bold block mb-1">
                Company Profile
              </span>
              <h3 className="font-display font-bold text-2xl text-white">
                {COMPANY_INFO.name}
              </h3>
              <p className="text-xs text-slate-400 mt-1">
                {COMPANY_INFO.tagline}
              </p>
            </div>

            <dl className="space-y-4 text-sm">
              <div className="flex justify-between py-2 border-b border-white/5">
                <dt className="text-slate-400">Core Domain</dt>
                <dd className="text-white font-medium text-right">B2B Garment Manufacturing</dd>
              </div>
              <div className="flex justify-between py-2 border-b border-white/5">
                <dt className="text-slate-400">Established</dt>
                <dd className="text-white font-medium">{COMPANY_INFO.establishedYear}</dd>
              </div>
              <div className="flex justify-between py-2 border-b border-white/5">
                <dt className="text-slate-400">GST Registration</dt>
                <dd className="text-emerald-400 font-mono font-bold">{COMPANY_INFO.gstNumber}</dd>
              </div>
              <div className="flex justify-between py-2 border-b border-white/5">
                <dt className="text-slate-400">Minimum Order (MOQ)</dt>
                <dd className="text-emerald-300 font-bold">{COMPANY_INFO.moq}</dd>
              </div>
              <div className="flex justify-between py-2">
                <dt className="text-slate-400">Production Facility</dt>
                <dd className="text-white font-medium text-right">Sector 9, Noida, UP</dd>
              </div>
            </dl>

            <div className="pt-2">
              <a
                id="about-explore-map-btn"
                href={COMPANY_INFO.address.googleMapsUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="w-full inline-flex items-center justify-center py-3 px-4 rounded-xl text-xs font-bold uppercase tracking-wider border border-white/15 bg-white/5 hover:bg-white/10 text-slate-200 transition-colors"
              >
                View Factory On Google Maps
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
