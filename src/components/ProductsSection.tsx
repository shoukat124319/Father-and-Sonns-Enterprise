import React from 'react';
import { ArrowRight, Check } from 'lucide-react';
import { PRODUCTS } from '../data';
import { ProductItem } from '../types';

interface ProductsSectionProps {
  onSelectProduct: (productName: string) => void;
}

export const ProductsSection: React.FC<ProductsSectionProps> = ({ onSelectProduct }) => {
  return (
    <section
      id="products"
      className="py-24 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto border-t border-white/5"
    >
      <div className="text-center max-w-3xl mx-auto mb-16 space-y-4">
        <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-md text-xs font-bold uppercase tracking-wider bg-purple-500/10 border border-purple-500/20 text-purple-400">
          Our Garment Catalog
        </div>
        <h2
          id="products-heading"
          className="font-display font-extrabold text-3xl sm:text-4xl md:text-5xl text-white tracking-tight"
        >
          WHAT CAN WE MANUFACTURE?
        </h2>
        <p className="text-slate-400 text-base sm:text-lg">
          Precision-engineered 2D garment lines manufactured to custom dimensions, fabrics, and branding specifications.
        </p>
      </div>

      {/* Clean 2D Product Cards Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {PRODUCTS.map((product: ProductItem) => (
          <div
            key={product.id}
            id={`product-card-${product.id}`}
            className="group rounded-2xl bg-[#0e131b] border border-white/10 hover:border-emerald-500/40 transition-all duration-200 overflow-hidden flex flex-col justify-between"
          >
            {/* 2D Flat Card Header with Image & Badge */}
            <div>
              <div className="relative h-52 w-full overflow-hidden bg-slate-900">
                <img
                  src={product.image}
                  alt={product.name}
                  loading="lazy"
                  className="w-full h-full object-cover object-center opacity-85 group-hover:scale-105 group-hover:opacity-95 transition-all duration-300"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#0e131b] via-[#0e131b]/30 to-transparent" />
                <span className="absolute top-3 right-3 text-[11px] font-bold uppercase tracking-wider bg-black/70 text-emerald-400 border border-emerald-500/30 px-2.5 py-1 rounded-md backdrop-blur-sm">
                  {product.category}
                </span>
              </div>

              {/* Body */}
              <div className="p-6 space-y-4">
                <div>
                  <h3 className="font-display font-bold text-2xl text-white tracking-wide">
                    {product.name}
                  </h3>
                  <p className="text-slate-300 text-sm mt-1.5 leading-relaxed">
                    {product.description}
                  </p>
                </div>

                {/* Fabric & Weight Tags */}
                <div className="pt-2 border-t border-white/5 space-y-2 text-xs">
                  <div className="flex items-center justify-between text-slate-400">
                    <span>Fabric options:</span>
                    <span className="text-slate-200 font-medium text-right truncate max-w-[60%]">
                      {product.fabrics.slice(0, 2).join(', ')}
                    </span>
                  </div>
                  <div className="flex items-center justify-between text-slate-400">
                    <span>Weight Range:</span>
                    <span className="text-emerald-400 font-medium">{product.recommendedGsm}</span>
                  </div>
                </div>

                {/* Highlights List */}
                <ul className="space-y-1.5 pt-2">
                  {product.highlights.map((highlight, idx) => (
                    <li key={idx} className="flex items-center gap-2 text-xs text-slate-300">
                      <Check className="w-3.5 h-3.5 text-emerald-400 shrink-0" />
                      <span>{highlight}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>

            {/* Flat 2D Card Action Footer */}
            <div className="p-6 pt-0">
              <button
                id={`discuss-product-${product.id}`}
                onClick={() => onSelectProduct(product.name)}
                className="w-full inline-flex items-center justify-center gap-2 py-3 px-4 rounded-xl text-xs font-bold uppercase tracking-wider bg-white/5 hover:bg-emerald-500 hover:text-black border border-white/10 hover:border-emerald-500 text-white transition-all duration-200"
              >
                <span>Inquire About {product.name}</span>
                <ArrowRight className="w-3.5 h-3.5" />
              </button>
            </div>
          </div>
        ))}
      </div>

      {/* Notice Banner */}
      <div className="mt-12 p-6 rounded-2xl bg-gradient-to-r from-emerald-950/30 via-[#0e131b] to-purple-950/30 border border-white/10 flex flex-col sm:flex-row items-center justify-between gap-4">
        <div>
          <h4 className="font-display font-bold text-white text-lg">Need a specific pattern or material not listed?</h4>
          <p className="text-sm text-slate-400 mt-0.5">
            We manufacture customized cut-and-sew garments, coordinated sets, and private label merchandise to any spec sheet.
          </p>
        </div>
        <button
          id="custom-garment-discuss-btn"
          onClick={() => onSelectProduct('Custom Garments')}
          className="shrink-0 px-6 py-3 rounded-xl bg-emerald-500 hover:bg-emerald-400 text-black font-bold text-xs uppercase tracking-wider transition-colors"
        >
          Discuss Custom Requirement
        </button>
      </div>
    </section>
  );
};
