import { useState } from 'react';
import { ThreeBackground } from './components/ThreeBackground';
import { Navbar } from './components/Navbar';
import { Hero } from './components/Hero';
import { AboutSection } from './components/AboutSection';
import { ProductsSection } from './components/ProductsSection';
import { ServicesSection } from './components/ServicesSection';
import { ProcessSection } from './components/ProcessSection';
import { BrandCapabilitiesSection } from './components/BrandCapabilitiesSection';
import { MoqSection } from './components/MoqSection';
import { CustomizationSection } from './components/CustomizationSection';
import { InquirySection } from './components/InquirySection';
import { ContactSection } from './components/ContactSection';
import { MarketplacesSection } from './components/MarketplacesSection';
import { Footer } from './components/Footer';
import { FloatingWhatsApp } from './components/FloatingWhatsApp';

export default function App() {
  const [selectedProduct, setSelectedProduct] = useState<string>('');
  const [selectedService, setSelectedService] = useState<string>('');

  const scrollToInquiry = () => {
    const el = document.getElementById('inquiry');
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const handleSelectProduct = (productName: string) => {
    setSelectedProduct(productName);
    scrollToInquiry();
  };

  const handleSelectService = (serviceName: string) => {
    setSelectedService(serviceName);
    scrollToInquiry();
  };

  return (
    <div className="min-h-screen bg-[#090c10] text-[#e2e8f0] relative selection:bg-emerald-500 selection:text-black font-sans">
      {/* 3D BACKGROUND ONLY: Ambient cinematic textile fabric wave animation */}
      <ThreeBackground />

      {/* 2D FLAT UI CONTENT LAYER */}
      <div className="relative z-10 flex flex-col">
        {/* Sticky Flat Navigation */}
        <Navbar onStartManufacturing={scrollToInquiry} />

        <main className="flex-1">
          {/* 1. Hero Section */}
          <Hero onStartManufacturing={scrollToInquiry} />

          {/* 2. About Us Section */}
          <AboutSection />

          {/* 3. Products Section (What We Manufacture - 2D cards) */}
          <ProductsSection onSelectProduct={handleSelectProduct} />

          {/* 4. Services Section (From Idea to Finished Garment) */}
          <ServicesSection onSelectService={handleSelectService} />

          {/* 5. Manufacturing Process (01 to 06 Timeline) */}
          <ProcessSection />

          {/* 6. Made For Clothing Brands (8 Feature Blocks) */}
          <BrandCapabilitiesSection />

          {/* 7. MOQ Section (Large 50+ Number) */}
          <MoqSection onDiscussRequirement={scrollToInquiry} />

          {/* 8. Customization Matrix */}
          <CustomizationSection />

          {/* 9. Customer Inquiry Section (Form + WhatsApp CTA) */}
          <InquirySection
            selectedProduct={selectedProduct}
            selectedService={selectedService}
          />

          {/* 10. Contact Section (Phone, Email, Factory, Maps) */}
          <ContactSection />

          {/* 11. Marketplace Online Presence */}
          <MarketplacesSection />
        </main>

        {/* 12. Flat Dark Footer */}
        <Footer />

        {/* Quick Floating WhatsApp Action */}
        <FloatingWhatsApp />
      </div>
    </div>
  );
}

