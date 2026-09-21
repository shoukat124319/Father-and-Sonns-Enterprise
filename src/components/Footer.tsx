import React from 'react';
import { Phone, MessageCircle, Mail, MapPin, ArrowUp } from 'lucide-react';
import { COMPANY_INFO } from '../data';

export const Footer: React.FC = () => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer
      id="main-footer"
      className="bg-[#07090d] border-t border-white/10 text-slate-400 text-sm relative z-10"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-10 pb-12 border-b border-white/10">
          {/* Brand & Positioning */}
          <div className="lg:col-span-6 space-y-4">
            <div className="flex items-center gap-3">
              <div className="w-9 h-9 rounded-lg bg-emerald-500/20 border border-emerald-500/40 flex items-center justify-center text-emerald-400 font-bold text-base">
                FS
              </div>
              <span className="font-display font-black text-2xl text-white tracking-wider">
                {COMPANY_INFO.name}
              </span>
            </div>

            <p className="text-emerald-400 font-semibold text-sm">
              &ldquo;{COMPANY_INFO.tagline}&rdquo;
            </p>

            <p className="text-slate-300 text-sm leading-relaxed max-w-lg">
              Garment Manufacturing | Pattern Making | Sampling | Customized Clothing Production
            </p>

            <div className="flex flex-wrap items-center gap-3 pt-2 text-xs">
              <span className="font-mono bg-white/5 border border-white/10 px-3 py-1 rounded text-slate-300">
                GST: <strong className="text-emerald-400">{COMPANY_INFO.gstNumber}</strong>
              </span>
              <span className="bg-white/5 border border-white/10 px-3 py-1 rounded text-slate-300">
                Established <strong className="text-white">{COMPANY_INFO.establishedYear}</strong>
              </span>
              <span className="bg-white/5 border border-white/10 px-3 py-1 rounded text-slate-300">
                MOQ: <strong className="text-emerald-400">{COMPANY_INFO.moq}</strong>
              </span>
            </div>
          </div>

          {/* Quick Direct Links */}
          <div className="lg:col-span-3 space-y-3">
            <div className="font-display font-bold text-white text-base tracking-wider uppercase">
              Navigation
            </div>
            <ul className="space-y-2 text-xs">
              <li>
                <a href="#about" className="hover:text-emerald-400 transition-colors">
                  About Our Factory
                </a>
              </li>
              <li>
                <a href="#products" className="hover:text-emerald-400 transition-colors">
                  Products & Garments
                </a>
              </li>
              <li>
                <a href="#services" className="hover:text-emerald-400 transition-colors">
                  Pattern & Sampling Services
                </a>
              </li>
              <li>
                <a href="#process" className="hover:text-emerald-400 transition-colors">
                  Manufacturing Process (01-06)
                </a>
              </li>
              <li>
                <a href="#moq" className="hover:text-emerald-400 transition-colors">
                  Low MOQ (50+ Pieces)
                </a>
              </li>
              <li>
                <a href="#customization" className="hover:text-emerald-400 transition-colors">
                  Customization Matrix
                </a>
              </li>
              <li>
                <a href="#inquiry" className="hover:text-emerald-400 transition-colors text-emerald-400 font-semibold">
                  Send B2B Inquiry
                </a>
              </li>
            </ul>
          </div>

          {/* Contact Direct */}
          <div className="lg:col-span-3 space-y-3">
            <div className="font-display font-bold text-white text-base tracking-wider uppercase">
              Factory Contact
            </div>
            <div className="space-y-2.5 text-xs">
              <div className="flex items-center gap-2.5 text-slate-300">
                <Phone className="w-4 h-4 text-emerald-400 shrink-0" />
                <a href={`tel:${COMPANY_INFO.phoneClean}`} className="hover:text-white transition-colors font-mono">
                  {COMPANY_INFO.phone}
                </a>
              </div>

              <div className="flex items-center gap-2.5 text-slate-300">
                <MessageCircle className="w-4 h-4 text-emerald-400 shrink-0" />
                <a
                  href={COMPANY_INFO.whatsappUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-white transition-colors font-mono"
                >
                  WhatsApp: +91 {COMPANY_INFO.phoneClean}
                </a>
              </div>

              <div className="flex items-center gap-2.5 text-slate-300">
                <Mail className="w-4 h-4 text-purple-400 shrink-0" />
                <a href={`mailto:${COMPANY_INFO.email}`} className="hover:text-white transition-colors break-all">
                  {COMPANY_INFO.email}
                </a>
              </div>

              <div className="flex items-start gap-2.5 text-slate-300">
                <MapPin className="w-4 h-4 text-emerald-400 shrink-0 mt-0.5" />
                <a
                  href={COMPANY_INFO.address.googleMapsUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-white transition-colors"
                >
                  {COMPANY_INFO.address.cityArea}, {COMPANY_INFO.address.state}
                </a>
              </div>
            </div>

            {/* Social/Contact Flat Icons */}
            <div className="pt-2 flex items-center gap-2">
              <a
                id="footer-icon-whatsapp"
                href={COMPANY_INFO.whatsappUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="w-8 h-8 rounded-lg bg-white/5 hover:bg-emerald-500/20 hover:text-emerald-400 border border-white/10 flex items-center justify-center transition-colors"
                title="WhatsApp Direct"
                aria-label="WhatsApp"
              >
                <MessageCircle className="w-4 h-4" />
              </a>
              <a
                id="footer-icon-phone"
                href={`tel:${COMPANY_INFO.phoneClean}`}
                className="w-8 h-8 rounded-lg bg-white/5 hover:bg-emerald-500/20 hover:text-emerald-400 border border-white/10 flex items-center justify-center transition-colors"
                title="Phone Call"
                aria-label="Phone"
              >
                <Phone className="w-4 h-4" />
              </a>
              <a
                id="footer-icon-email"
                href={`mailto:${COMPANY_INFO.email}`}
                className="w-8 h-8 rounded-lg bg-white/5 hover:bg-purple-500/20 hover:text-purple-400 border border-white/10 flex items-center justify-center transition-colors"
                title="Email Support"
                aria-label="Email"
              >
                <Mail className="w-4 h-4" />
              </a>
              <a
                id="footer-icon-map"
                href={COMPANY_INFO.address.googleMapsUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="w-8 h-8 rounded-lg bg-white/5 hover:bg-emerald-500/20 hover:text-emerald-400 border border-white/10 flex items-center justify-center transition-colors"
                title="Google Maps Location"
                aria-label="Google Maps"
              >
                <MapPin className="w-4 h-4" />
              </a>
            </div>
          </div>
        </div>

        {/* Bottom Strip */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-slate-300">
          <p id="footer-copyright">
            © 2025–2026 FATHER AND SONS ENTERPRISES. All Rights Reserved.
          </p>

          <button
            id="footer-back-to-top-btn"
            onClick={scrollToTop}
            className="flex items-center gap-1.5 hover:text-white transition-colors"
          >
            <span>Back to top</span>
            <ArrowUp className="w-3.5 h-3.5" />
          </button>
        </div>
      </div>
    </footer>
  );
};
