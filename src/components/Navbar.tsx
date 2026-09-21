import React, { useState, useEffect } from 'react';
import { Menu, X, ArrowUpRight, MessageCircle } from 'lucide-react';
import { COMPANY_INFO } from '../data';

interface NavbarProps {
  onStartManufacturing: () => void;
}

export const Navbar: React.FC<NavbarProps> = ({ onStartManufacturing }) => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'Home', href: '#hero' },
    { name: 'About', href: '#about' },
    { name: 'Products', href: '#products' },
    { name: 'Services', href: '#services' },
    { name: 'Process', href: '#process' },
    { name: 'Brands & MOQ', href: '#moq' },
    { name: 'Contact', href: '#contact' },
  ];

  const handleNavClick = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    e.preventDefault();
    setMobileMenuOpen(false);
    const target = document.querySelector(href);
    if (target) {
      target.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <header
      id="main-navbar"
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled
          ? 'bg-[#090c10]/95 backdrop-blur-md border-b border-white/10 shadow-lg py-3'
          : 'bg-gradient-to-b from-[#090c10]/90 to-transparent py-5'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between">
        {/* Brand Logo */}
        <a
          id="navbar-brand-logo"
          href="#hero"
          onClick={(e) => handleNavClick(e, '#hero')}
          className="flex items-center gap-3 group focus:outline-none"
        >
          {/* Flat 2D geometric emblem */}
          <div className="w-10 h-10 rounded-lg bg-gradient-to-br from-emerald-500/20 to-purple-500/20 border border-emerald-500/40 flex items-center justify-center text-emerald-400 font-bold text-lg tracking-wider group-hover:border-emerald-400 transition-colors">
            FS
          </div>
          <div>
            <span className="font-display font-extrabold text-lg sm:text-xl tracking-wide text-white block">
              FATHER & SONS
            </span>
            <span className="text-[10px] sm:text-xs text-emerald-400 uppercase tracking-widest font-semibold block">
              Garment Manufacturing
            </span>
          </div>
        </a>

        {/* Desktop Menu */}
        <nav id="desktop-nav-menu" className="hidden lg:flex items-center gap-7">
          {navLinks.map((link) => (
            <a
              key={link.name}
              id={`nav-link-${link.name.toLowerCase().replace(/\s+/g, '-')}`}
              href={link.href}
              onClick={(e) => handleNavClick(e, link.href)}
              className="text-sm font-medium text-slate-300 hover:text-emerald-400 transition-colors tracking-wide"
            >
              {link.name}
            </a>
          ))}
        </nav>

        {/* Right CTA Button & Quick WhatsApp */}
        <div className="hidden sm:flex items-center gap-3">
          <a
            id="nav-whatsapp-quick-link"
            href={COMPANY_INFO.whatsappUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="p-2.5 rounded-lg border border-emerald-500/30 text-emerald-400 hover:bg-emerald-500/10 hover:border-emerald-400 transition-colors"
            title="Chat on WhatsApp"
            aria-label="Chat on WhatsApp"
          >
            <MessageCircle className="w-4 h-4" />
          </a>

          <button
            id="nav-start-manufacturing-btn"
            onClick={onStartManufacturing}
            className="inline-flex items-center gap-2 px-5 py-2.5 rounded-lg text-xs sm:text-sm font-bold tracking-wider uppercase bg-emerald-500 hover:bg-emerald-400 text-black shadow-md transition-all duration-200"
          >
            <span>START MANUFACTURING</span>
            <ArrowUpRight className="w-4 h-4" />
          </button>
        </div>

        {/* Mobile Hamburger Button */}
        <div className="flex items-center gap-2 lg:hidden">
          <button
            id="mobile-menu-toggle-btn"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="p-2 rounded-lg text-slate-300 hover:text-white hover:bg-white/5 border border-white/10"
            aria-label="Toggle menu"
          >
            {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
      </div>

      {/* Mobile Drawer */}
      {mobileMenuOpen && (
        <div
          id="mobile-drawer-menu"
          className="lg:hidden bg-[#0d1219] border-b border-white/10 px-4 pt-3 pb-6 shadow-2xl space-y-3"
        >
          <div className="flex flex-col space-y-2">
            {navLinks.map((link) => (
              <a
                key={link.name}
                id={`mobile-nav-link-${link.name.toLowerCase().replace(/\s+/g, '-')}`}
                href={link.href}
                onClick={(e) => handleNavClick(e, link.href)}
                className="px-3 py-2 rounded-md text-sm font-medium text-slate-200 hover:text-emerald-400 hover:bg-white/5 transition-colors"
              >
                {link.name}
              </a>
            ))}
          </div>

          <div className="pt-3 border-t border-white/10 flex flex-col gap-2.5">
            <button
              id="mobile-start-manufacturing-btn"
              onClick={() => {
                setMobileMenuOpen(false);
                onStartManufacturing();
              }}
              className="w-full flex items-center justify-center gap-2 py-3 rounded-lg font-bold text-xs uppercase tracking-wider bg-emerald-500 hover:bg-emerald-400 text-black transition-colors"
            >
              <span>START MANUFACTURING</span>
              <ArrowUpRight className="w-4 h-4" />
            </button>

            <a
              id="mobile-whatsapp-btn"
              href={COMPANY_INFO.whatsappUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="w-full flex items-center justify-center gap-2 py-3 rounded-lg font-medium text-xs tracking-wider border border-emerald-500/40 text-emerald-400 hover:bg-emerald-500/10 transition-colors"
            >
              <MessageCircle className="w-4 h-4" />
              <span>WHATSAPP (+91 7303179577)</span>
            </a>
          </div>
        </div>
      )}
    </header>
  );
};
