import React from 'react';
import { ExternalLink, ShoppingBag, Store, Globe2 } from 'lucide-react';
import { COMPANY_INFO } from '../data';

export const MarketplacesSection: React.FC = () => {
  const marketplaces = [
    {
      name: 'IndiaMART',
      subtitle: 'B2B Verified Company Profile',
      url: COMPANY_INFO.marketplaces.indiamart,
      badge: 'Verified Supplier',
      icon: <Globe2 className="w-5 h-5 text-emerald-400" />,
      tagColor: 'text-emerald-400 border-emerald-500/30 bg-emerald-500/10',
    },
    {
      name: 'Meesho',
      subtitle: 'TwinStar Clothing Storefront',
      url: COMPANY_INFO.marketplaces.meesho,
      badge: 'Retail Presence',
      icon: <ShoppingBag className="w-5 h-5 text-purple-400" />,
      tagColor: 'text-purple-400 border-purple-500/30 bg-purple-500/10',
    },
    {
      name: 'Flipkart',
      subtitle: 'Manufactured Apparel Catalog',
      url: COMPANY_INFO.marketplaces.flipkart,
      badge: 'Brand Catalogue',
      icon: <Store className="w-5 h-5 text-emerald-400" />,
      tagColor: 'text-emerald-400 border-emerald-500/30 bg-emerald-500/10',
    },
    {
      name: 'Amazon',
      subtitle: 'Everyday Fashion Collection',
      url: COMPANY_INFO.marketplaces.amazon,
      badge: 'Online Store',
      icon: <ShoppingBag className="w-5 h-5 text-purple-400" />,
      tagColor: 'text-purple-400 border-purple-500/30 bg-purple-500/10',
    },
  ];

  return (
    <section
      id="marketplaces"
      className="py-16 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto border-t border-white/5"
    >
      <div className="flex flex-col md:flex-row md:items-end justify-between mb-8 gap-4">
        <div>
          <span className="text-xs font-bold uppercase tracking-widest text-slate-400 block mb-1">
            Retail & Trade Verification
          </span>
          <h2
            id="marketplaces-heading"
            className="font-display font-extrabold text-2xl sm:text-3xl text-white tracking-tight"
          >
            OUR ONLINE PRESENCE
          </h2>
        </div>
        <p className="text-xs sm:text-sm text-slate-400 max-w-md">
          While our core operation is custom B2B manufacturing for apparel brands, explore our active presence across major commerce portals.
        </p>
      </div>

      {/* Flat Buttons/Cards */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
        {marketplaces.map((m) => (
          <a
            key={m.name}
            id={`marketplace-link-${m.name.toLowerCase()}`}
            href={m.url}
            target="_blank"
            rel="noopener noreferrer"
            className="group rounded-xl bg-[#0e131b] border border-white/10 hover:border-emerald-500/40 p-5 flex flex-col justify-between transition-all duration-200"
          >
            <div className="space-y-3">
              <div className="flex items-center justify-between">
                <div className="w-10 h-10 rounded-lg bg-white/5 border border-white/10 flex items-center justify-center group-hover:border-emerald-500/30 transition-colors">
                  {m.icon}
                </div>
                <span className={`text-[10px] font-bold uppercase tracking-wider px-2 py-0.5 rounded border ${m.tagColor}`}>
                  {m.badge}
                </span>
              </div>

              <div>
                <h3 className="font-display font-bold text-lg text-white group-hover:text-emerald-400 transition-colors">
                  {m.name}
                </h3>
                <p className="text-xs text-slate-400 mt-0.5">
                  {m.subtitle}
                </p>
              </div>
            </div>

            <div className="pt-4 mt-2 border-t border-white/5 flex items-center justify-between text-xs text-slate-400 group-hover:text-white font-medium">
              <span>Visit Portal</span>
              <ExternalLink className="w-3.5 h-3.5 text-emerald-400" />
            </div>
          </a>
        ))}
      </div>
    </section>
  );
};
