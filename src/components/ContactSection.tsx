import React from 'react';
import { Phone, MessageCircle, Mail, MapPin, ExternalLink, Clock, Building } from 'lucide-react';
import { COMPANY_INFO } from '../data';

export const ContactSection: React.FC = () => {
  return (
    <section
      id="contact"
      className="py-24 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto border-t border-white/5"
    >
      <div className="text-center max-w-3xl mx-auto mb-16 space-y-4">
        <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-md text-xs font-bold uppercase tracking-wider bg-purple-500/10 border border-purple-500/20 text-purple-400">
          Factory Location & Inquiries
        </div>
        <h2
          id="contact-heading"
          className="font-display font-extrabold text-3xl sm:text-4xl md:text-5xl text-white tracking-tight"
        >
          LET&apos;S MAKE YOUR CLOTHING
        </h2>
        <p className="text-slate-400 text-base sm:text-lg">
          Visit our unit in Noida or reach out through phone, WhatsApp or email for instant sampling and production quotes.
        </p>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-stretch">
        {/* Contact Info Cards */}
        <div className="lg:col-span-6 space-y-4 flex flex-col justify-between">
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            {/* Phone Card */}
            <div
              id="contact-phone-card"
              className="rounded-2xl bg-[#0e131b] border border-white/10 p-6 space-y-3"
            >
              <div className="w-10 h-10 rounded-xl bg-emerald-500/15 text-emerald-400 flex items-center justify-center">
                <Phone className="w-5 h-5" />
              </div>
              <div>
                <span className="text-xs uppercase tracking-wider text-slate-400 font-bold block">
                  PHONE
                </span>
                <a
                  href={`tel:${COMPANY_INFO.phoneClean}`}
                  className="text-white font-mono font-bold text-base hover:text-emerald-400 transition-colors block mt-1"
                >
                  {COMPANY_INFO.phone}
                </a>
              </div>
            </div>

            {/* WhatsApp Card */}
            <div
              id="contact-whatsapp-card"
              className="rounded-2xl bg-[#0e131b] border border-white/10 p-6 space-y-3"
            >
              <div className="w-10 h-10 rounded-xl bg-emerald-500/15 text-emerald-400 flex items-center justify-center">
                <MessageCircle className="w-5 h-5" />
              </div>
              <div>
                <span className="text-xs uppercase tracking-wider text-slate-400 font-bold block">
                  WHATSAPP
                </span>
                <a
                  href={COMPANY_INFO.whatsappUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-white font-mono font-bold text-base hover:text-emerald-400 transition-colors block mt-1"
                >
                  {COMPANY_INFO.phone}
                </a>
              </div>
            </div>
          </div>

          {/* Email Card */}
          <div
            id="contact-email-card"
            className="rounded-2xl bg-[#0e131b] border border-white/10 p-6 space-y-3"
          >
            <div className="w-10 h-10 rounded-xl bg-purple-500/15 text-purple-400 flex items-center justify-center">
              <Mail className="w-5 h-5" />
            </div>
            <div>
              <span className="text-xs uppercase tracking-wider text-slate-400 font-bold block">
                EMAIL
              </span>
              <a
                href={`mailto:${COMPANY_INFO.email}`}
                className="text-white font-medium text-base hover:text-purple-400 transition-colors block mt-1 break-all"
              >
                {COMPANY_INFO.email}
              </a>
            </div>
          </div>

          {/* Factory Location Card */}
          <div
            id="contact-factory-card"
            className="rounded-2xl bg-[#0e131b] border border-white/10 p-6 space-y-4"
          >
            <div className="flex items-start justify-between">
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-xl bg-emerald-500/15 text-emerald-400 flex items-center justify-center">
                  <MapPin className="w-5 h-5" />
                </div>
                <div>
                  <span className="text-xs uppercase tracking-wider text-slate-400 font-bold block">
                    FACTORY LOCATION
                  </span>
                  <h4 className="text-white font-bold text-base mt-0.5">Noida Manufacturing Facility</h4>
                </div>
              </div>

              <span className="text-[11px] font-mono font-semibold px-2.5 py-1 rounded bg-white/5 text-emerald-400 border border-emerald-500/20">
                GST Registered
              </span>
            </div>

            <div className="text-slate-300 text-sm leading-relaxed space-y-1 pl-1 border-l-2 border-emerald-500/40">
              <p className="font-semibold text-white">{COMPANY_INFO.address.line1}</p>
              <p>{COMPANY_INFO.address.cityArea}</p>
              <p>{COMPANY_INFO.address.state}, India - {COMPANY_INFO.address.pincode}</p>
            </div>

            <div className="pt-2">
              <a
                id="contact-view-location-btn"
                href={COMPANY_INFO.address.googleMapsUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-5 py-3 rounded-xl bg-emerald-500 hover:bg-emerald-400 text-black font-bold text-xs uppercase tracking-wider transition-colors shadow-sm"
              >
                <span>VIEW LOCATION</span>
                <ExternalLink className="w-4 h-4" />
              </a>
            </div>
          </div>
        </div>

        {/* Right Column: Google Maps Interactive Preview / Route Block */}
        <div className="lg:col-span-6 flex flex-col justify-between">
          <div
            id="map-container-card"
            className="rounded-2xl bg-[#0e131b] border border-white/10 p-6 sm:p-8 flex-1 flex flex-col justify-between shadow-2xl"
          >
            <div className="space-y-4 mb-6">
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-slate-400">
                  <Building className="w-4 h-4 text-emerald-400" />
                  <span>Physical Industrial Unit</span>
                </div>
                <div className="flex items-center gap-2 text-xs text-slate-400">
                  <Clock className="w-3.5 h-3.5 text-purple-400" />
                  <span>Mon – Sat: 10:00 AM – 7:30 PM</span>
                </div>
              </div>

              <h3 className="font-display font-bold text-2xl text-white">
                Visit For Pattern Trials & Fabric Swatches
              </h3>

              <p className="text-slate-300 text-sm leading-relaxed">
                Brand founders and apparel procurement managers are welcome to visit our manufacturing floor in Sector 9, Noida to inspect live fabrics, GSM swatches, stitching setups, and ongoing production lots.
              </p>
            </div>

            {/* Visual Location Frame with direct map trigger */}
            <div className="relative rounded-xl overflow-hidden border border-white/10 bg-slate-900 h-64 sm:h-72 w-full flex items-center justify-center group">
              {/* Stylized background grid representing Noida Sector 9 layout */}
              <div
                className="absolute inset-0 opacity-20"
                style={{
                  backgroundImage: `linear-gradient(#10b981 1px, transparent 1px), linear-gradient(90deg, #10b981 1px, transparent 1px)`,
                  backgroundSize: '24px 24px',
                }}
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#0e131b] via-transparent to-[#0e131b]/40" />

              <div className="relative z-10 text-center p-6 space-y-3">
                <div className="w-12 h-12 rounded-full bg-emerald-500 text-black mx-auto flex items-center justify-center shadow-lg group-hover:scale-110 transition-transform">
                  <MapPin className="w-6 h-6 fill-black" />
                </div>
                <div className="font-display font-bold text-lg text-white">
                  Sector 9, Noida, Uttar Pradesh
                </div>
                <p className="text-xs text-slate-300 max-w-xs mx-auto">
                  Pinpoint navigation on Google Maps for Father and Sons Enterprises.
                </p>
                <a
                  href={COMPANY_INFO.address.googleMapsUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 px-4 py-2 rounded-lg bg-white/10 hover:bg-white/20 border border-white/20 text-white text-xs font-semibold tracking-wider uppercase transition-colors"
                >
                  <span>Open In Google Maps</span>
                  <ExternalLink className="w-3.5 h-3.5" />
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
