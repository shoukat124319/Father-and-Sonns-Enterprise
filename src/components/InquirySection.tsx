import React, { useState } from 'react';
import { MessageCircle, Send, CheckCircle2, Copy, Mail, Sparkles } from 'lucide-react';
import { COMPANY_INFO } from '../data';
import { InquiryFormData } from '../types';

interface InquirySectionProps {
  selectedProduct?: string;
  selectedService?: string;
}

export const InquirySection: React.FC<InquirySectionProps> = ({
  selectedProduct = '',
  selectedService = '',
}) => {
  const [formData, setFormData] = useState<InquiryFormData>({
    fullName: '',
    brandName: '',
    whatsappNumber: '',
    email: '',
    garmentType: selectedProduct || 'T-Shirt',
    customGarmentType: '',
    requiredQuantity: '50-100 Pieces',
    servicesRequired: selectedService ? [selectedService] : ['Garment Manufacturing'],
    requirementNotes: '',
  });

  const [submitted, setSubmitted] = useState(false);
  const [copied, setCopied] = useState(false);

  // Update if parent passes selection
  React.useEffect(() => {
    if (selectedProduct) {
      setFormData((prev) => ({ ...prev, garmentType: selectedProduct }));
    }
  }, [selectedProduct]);

  React.useEffect(() => {
    if (selectedService) {
      setFormData((prev) => ({
        ...prev,
        servicesRequired: Array.from(new Set([...prev.servicesRequired, selectedService])),
      }));
    }
  }, [selectedService]);

  const garmentOptions = [
    'T-Shirt',
    'Jogger',
    'Track Pant',
    'Sweatshirt',
    'Hoodie',
    'Gymwear',
    'Other',
  ];

  const serviceOptions = [
    'Pattern Making',
    'Sampling',
    'Garment Manufacturing',
    'Brand Clothing Manufacturing',
    'Customization',
  ];

  const quantityOptions = [
    '50-100 Pieces (Testing Batch)',
    '100-300 Pieces',
    '300-500 Pieces',
    '500-1000 Pieces',
    '1000+ Pieces (Bulk Scale)',
  ];

  const handleServiceToggle = (service: string) => {
    setFormData((prev) => {
      const exists = prev.servicesRequired.includes(service);
      return {
        ...prev,
        servicesRequired: exists
          ? prev.servicesRequired.filter((s) => s !== service)
          : [...prev.servicesRequired, service],
      };
    });
  };

  const constructFormattedMessage = () => {
    const actualGarment =
      formData.garmentType === 'Other' && formData.customGarmentType
        ? formData.customGarmentType
        : formData.garmentType;

    return `*MANUFACTURING INQUIRY — FATHER AND SONS ENTERPRISES*
----------------------------------------
*Name:* ${formData.fullName || 'Not provided'}
*Brand / Company:* ${formData.brandName || 'Not provided'}
*WhatsApp:* ${formData.whatsappNumber || 'Not provided'}
*Email:* ${formData.email || 'Not provided'}
*Garment Type:* ${actualGarment}
*Required Quantity:* ${formData.requiredQuantity}
*Services Needed:* ${formData.servicesRequired.join(', ') || 'Garment Manufacturing'}
*Requirements & Notes:* ${formData.requirementNotes || 'Standard production query'}
----------------------------------------
_Sent from Father and Sons Enterprises Website_`;
  };

  const handleSendToWhatsApp = (e: React.FormEvent) => {
    e.preventDefault();
    const message = constructFormattedMessage();
    const encoded = encodeURIComponent(message);
    const whatsappUrl = `https://wa.me/917303179577?text=${encoded}`;
    window.open(whatsappUrl, '_blank', 'noopener,noreferrer');
    setSubmitted(true);
  };

  const handleCopySummary = () => {
    const message = constructFormattedMessage();
    navigator.clipboard.writeText(message);
    setCopied(true);
    setTimeout(() => setCopied(false), 2500);
  };

  const handleMailto = () => {
    const subject = encodeURIComponent(
      `Garment Manufacturing Inquiry: ${formData.brandName || formData.fullName || 'Apparel Production'}`
    );
    const body = encodeURIComponent(constructFormattedMessage());
    window.location.href = `mailto:${COMPANY_INFO.email}?subject=${subject}&body=${body}`;
  };

  return (
    <section
      id="inquiry"
      className="py-24 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto border-t border-white/5 scroll-mt-20"
    >
      <div className="text-center max-w-3xl mx-auto mb-16 space-y-4">
        <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-md text-xs font-bold uppercase tracking-wider bg-emerald-500/10 border border-emerald-500/20 text-emerald-400">
          Direct Factory Quote
        </div>
        <h2
          id="inquiry-heading"
          className="font-display font-extrabold text-3xl sm:text-4xl md:text-5xl text-white tracking-tight leading-tight"
        >
          HAVE A GARMENT TO MANUFACTURE?
        </h2>
        <p
          id="inquiry-subheading"
          className="text-slate-300 text-base sm:text-lg font-normal max-w-2xl mx-auto"
        >
          Tell us what you want to make. We&apos;ll discuss the production requirements with you.
        </p>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
        {/* Main 2D Inquiry Form */}
        <div className="lg:col-span-8">
          <div
            id="inquiry-form-card"
            className="rounded-2xl bg-[#0e131b] border border-white/10 p-6 sm:p-10 shadow-2xl space-y-8"
          >
            <form onSubmit={handleSendToWhatsApp} className="space-y-6">
              {/* Contact Information Row */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                <div>
                  <label
                    htmlFor="fullName"
                    className="block text-xs font-bold uppercase tracking-wider text-slate-300 mb-2"
                  >
                    Your Name <span className="text-emerald-400">*</span>
                  </label>
                  <input
                    type="text"
                    id="fullName"
                    required
                    placeholder="e.g. Rahul Sharma"
                    value={formData.fullName}
                    onChange={(e) => setFormData({ ...formData, fullName: e.target.value })}
                    className="w-full px-4 py-3 rounded-xl bg-black/40 border border-white/10 focus:border-emerald-500 focus:ring-1 focus:ring-emerald-500 text-white placeholder-slate-500 text-sm transition-colors outline-none"
                  />
                </div>

                <div>
                  <label
                    htmlFor="brandName"
                    className="block text-xs font-bold uppercase tracking-wider text-slate-300 mb-2"
                  >
                    Brand / Company Name <span className="text-emerald-400">*</span>
                  </label>
                  <input
                    type="text"
                    id="brandName"
                    required
                    placeholder="e.g. Urban Thread Apparel"
                    value={formData.brandName}
                    onChange={(e) => setFormData({ ...formData, brandName: e.target.value })}
                    className="w-full px-4 py-3 rounded-xl bg-black/40 border border-white/10 focus:border-emerald-500 focus:ring-1 focus:ring-emerald-500 text-white placeholder-slate-500 text-sm transition-colors outline-none"
                  />
                </div>
              </div>

              {/* Communication Row */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                <div>
                  <label
                    htmlFor="whatsappNumber"
                    className="block text-xs font-bold uppercase tracking-wider text-slate-300 mb-2"
                  >
                    WhatsApp Number <span className="text-emerald-400">*</span>
                  </label>
                  <input
                    type="tel"
                    id="whatsappNumber"
                    required
                    placeholder="+91 98765 43210"
                    value={formData.whatsappNumber}
                    onChange={(e) => setFormData({ ...formData, whatsappNumber: e.target.value })}
                    className="w-full px-4 py-3 rounded-xl bg-black/40 border border-white/10 focus:border-emerald-500 focus:ring-1 focus:ring-emerald-500 text-white placeholder-slate-500 text-sm transition-colors outline-none"
                  />
                </div>

                <div>
                  <label
                    htmlFor="email"
                    className="block text-xs font-bold uppercase tracking-wider text-slate-300 mb-2"
                  >
                    Email Address
                  </label>
                  <input
                    type="email"
                    id="email"
                    placeholder="brand@example.com"
                    value={formData.email}
                    onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                    className="w-full px-4 py-3 rounded-xl bg-black/40 border border-white/10 focus:border-emerald-500 focus:ring-1 focus:ring-emerald-500 text-white placeholder-slate-500 text-sm transition-colors outline-none"
                  />
                </div>
              </div>

              {/* Garment Type Radio / Select */}
              <div>
                <label className="block text-xs font-bold uppercase tracking-wider text-slate-300 mb-2">
                  Garment Type <span className="text-emerald-400">*</span>
                </label>
                <div className="grid grid-cols-2 sm:grid-cols-4 gap-2.5">
                  {garmentOptions.map((type) => (
                    <button
                      type="button"
                      key={type}
                      id={`garment-type-btn-${type.toLowerCase()}`}
                      onClick={() => setFormData({ ...formData, garmentType: type })}
                      className={`px-3 py-2.5 rounded-lg text-xs font-semibold border transition-all text-center ${
                        formData.garmentType === type
                          ? 'bg-emerald-500 text-black border-emerald-400 font-bold'
                          : 'bg-black/30 text-slate-300 border-white/10 hover:border-white/25'
                      }`}
                    >
                      {type}
                    </button>
                  ))}
                </div>

                {formData.garmentType === 'Other' && (
                  <input
                    type="text"
                    id="customGarmentType"
                    placeholder="Specify garment (e.g. Co-ord set, Jacket, Resort shirt)..."
                    value={formData.customGarmentType}
                    onChange={(e) => setFormData({ ...formData, customGarmentType: e.target.value })}
                    className="mt-3 w-full px-4 py-2.5 rounded-xl bg-black/40 border border-white/10 text-sm text-white focus:border-emerald-500 outline-none"
                  />
                )}
              </div>

              {/* Required Quantity */}
              <div>
                <label className="block text-xs font-bold uppercase tracking-wider text-slate-300 mb-2">
                  Required Quantity (MOQ Starts from 50 Pieces) <span className="text-emerald-400">*</span>
                </label>
                <div className="grid grid-cols-1 sm:grid-cols-3 gap-2">
                  {quantityOptions.slice(0, 3).map((qty) => (
                    <button
                      type="button"
                      key={qty}
                      onClick={() => setFormData({ ...formData, requiredQuantity: qty })}
                      className={`px-3 py-2.5 rounded-lg text-xs font-medium border transition-all text-left truncate ${
                        formData.requiredQuantity === qty
                          ? 'bg-purple-500/20 text-purple-300 border-purple-500 font-bold'
                          : 'bg-black/30 text-slate-300 border-white/10 hover:border-white/20'
                      }`}
                    >
                      {qty}
                    </button>
                  ))}
                </div>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 mt-2">
                  {quantityOptions.slice(3).map((qty) => (
                    <button
                      type="button"
                      key={qty}
                      onClick={() => setFormData({ ...formData, requiredQuantity: qty })}
                      className={`px-3 py-2.5 rounded-lg text-xs font-medium border transition-all text-left truncate ${
                        formData.requiredQuantity === qty
                          ? 'bg-purple-500/20 text-purple-300 border-purple-500 font-bold'
                          : 'bg-black/30 text-slate-300 border-white/10 hover:border-white/20'
                      }`}
                    >
                      {qty}
                    </button>
                  ))}
                </div>
              </div>

              {/* Services Required Checkboxes */}
              <div>
                <label className="block text-xs font-bold uppercase tracking-wider text-slate-300 mb-2">
                  Services Required
                </label>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5">
                  {serviceOptions.map((service) => {
                    const isChecked = formData.servicesRequired.includes(service);
                    return (
                      <label
                        key={service}
                        className={`flex items-center gap-3 p-3 rounded-xl border cursor-pointer select-none transition-all ${
                          isChecked
                            ? 'bg-emerald-500/10 border-emerald-500/40 text-white'
                            : 'bg-black/30 border-white/10 text-slate-400 hover:border-white/20'
                        }`}
                      >
                        <input
                          type="checkbox"
                          checked={isChecked}
                          onChange={() => handleServiceToggle(service)}
                          className="w-4 h-4 rounded text-emerald-500 focus:ring-0 accent-emerald-500"
                        />
                        <span className="text-xs font-semibold">{service}</span>
                      </label>
                    );
                  })}
                </div>
              </div>

              {/* Your Requirement Note */}
              <div>
                <label
                  htmlFor="requirementNotes"
                  className="block text-xs font-bold uppercase tracking-wider text-slate-300 mb-2"
                >
                  Your Requirement (Fabric, GSM, Colors, Sizes, Tech Pack)
                </label>
                <textarea
                  id="requirementNotes"
                  rows={4}
                  placeholder="Describe your design, desired fabric (e.g. 240 GSM French Terry), fit (boxy, oversized, athletic), print type, or drop reference..."
                  value={formData.requirementNotes}
                  onChange={(e) => setFormData({ ...formData, requirementNotes: e.target.value })}
                  className="w-full px-4 py-3 rounded-xl bg-black/40 border border-white/10 focus:border-emerald-500 focus:ring-1 focus:ring-emerald-500 text-white placeholder-slate-500 text-sm transition-colors outline-none resize-y"
                />
              </div>

              {/* Main Submit CTA */}
              <div className="pt-2 flex flex-col sm:flex-row items-stretch sm:items-center gap-3">
                <button
                  type="submit"
                  id="send-manufacturing-inquiry-btn"
                  className="flex-1 inline-flex items-center justify-center gap-2.5 py-4 px-6 rounded-xl font-display font-bold text-sm uppercase tracking-wider bg-emerald-500 hover:bg-emerald-400 text-black shadow-lg shadow-emerald-500/20 transition-all duration-200"
                >
                  <Send className="w-4 h-4" />
                  <span>SEND MANUFACTURING INQUIRY</span>
                </button>

                <button
                  type="button"
                  id="copy-inquiry-btn"
                  onClick={handleCopySummary}
                  className="px-5 py-4 rounded-xl border border-white/15 hover:bg-white/5 text-slate-200 text-xs font-bold uppercase tracking-wider flex items-center justify-center gap-2 transition-colors"
                  title="Copy formatted inquiry text"
                >
                  {copied ? <CheckCircle2 className="w-4 h-4 text-emerald-400" /> : <Copy className="w-4 h-4" />}
                  <span>{copied ? 'Copied' : 'Copy'}</span>
                </button>

                <button
                  type="button"
                  id="email-inquiry-btn"
                  onClick={handleMailto}
                  className="px-5 py-4 rounded-xl border border-white/15 hover:bg-white/5 text-slate-200 text-xs font-bold uppercase tracking-wider flex items-center justify-center gap-2 transition-colors"
                  title="Open mail client"
                >
                  <Mail className="w-4 h-4" />
                  <span>Email</span>
                </button>
              </div>

              {submitted && (
                <div className="p-4 rounded-xl bg-emerald-500/10 border border-emerald-500/30 text-emerald-300 text-xs sm:text-sm flex items-center gap-2">
                  <CheckCircle2 className="w-5 h-5 shrink-0" />
                  <span>
                    Thank you! Your inquiry was generated for WhatsApp. If it didn&apos;t open automatically, you can also copy or email it above.
                  </span>
                </div>
              )}
            </form>
          </div>
        </div>

        {/* Right Column: Direct Flat WhatsApp Callout */}
        <div className="lg:col-span-4 space-y-6">
          <div
            id="prefer-whatsapp-card"
            className="rounded-2xl bg-gradient-to-br from-[#0f1d19] to-[#0e131b] border border-emerald-500/30 p-8 space-y-6 shadow-xl"
          >
            <div className="w-12 h-12 rounded-xl bg-emerald-500/20 border border-emerald-500/30 flex items-center justify-center text-emerald-400">
              <MessageCircle className="w-6 h-6" />
            </div>

            <div className="space-y-1">
              <span className="text-xs font-bold tracking-widest uppercase text-emerald-400 block">
                Instant B2B Desk
              </span>
              <h3 className="font-display font-black text-2xl sm:text-3xl text-white">
                PREFER WHATSAPP?
              </h3>
              <p className="text-slate-300 text-sm font-normal pt-1">
                Chat with our production manager directly to discuss fabric availability, tech packs, or get immediate quotations.
              </p>
            </div>

            <div className="p-4 rounded-xl bg-black/40 border border-emerald-500/20 text-xs space-y-1">
              <div className="text-slate-400">Direct Number:</div>
              <div className="text-white font-mono font-bold text-base">{COMPANY_INFO.phone}</div>
              <div className="text-emerald-400 text-[11px] font-medium">Response within 1-2 hours on business days</div>
            </div>

            <a
              id="whatsapp-chat-with-us-btn"
              href={COMPANY_INFO.whatsappUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="w-full inline-flex items-center justify-center gap-2.5 py-4 px-6 rounded-xl font-display font-bold text-sm uppercase tracking-wider bg-emerald-500 hover:bg-emerald-400 text-black shadow-md transition-colors"
            >
              <MessageCircle className="w-5 h-5" />
              <span>CHAT WITH US</span>
            </a>
          </div>

          {/* Quick Assurance Box */}
          <div className="rounded-2xl bg-[#0e131b] border border-white/10 p-6 space-y-3">
            <h4 className="font-display font-bold text-white text-base flex items-center gap-2">
              <Sparkles className="w-4 h-4 text-purple-400" />
              <span>Direct Factory Advantage</span>
            </h4>
            <p className="text-xs text-slate-400 leading-relaxed">
              No brokers or middle trading agencies. You communicate directly with the manufacturing unit in Sector 9, Noida.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};
