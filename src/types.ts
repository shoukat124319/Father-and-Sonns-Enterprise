export interface ProductItem {
  id: string;
  name: string;
  description: string;
  category: string;
  highlights: string[];
  fabrics: string[];
  recommendedGsm: string;
  typicalMoq: string;
  image: string;
}

export interface ServiceItem {
  id: string;
  number: string;
  title: string;
  description: string;
  features: string[];
  tag: string;
}

export interface ProcessStep {
  step: string;
  title: string;
  description: string;
  detail: string;
}

export interface CustomizationPillar {
  title: string;
  subtitle: string;
  description: string;
  examples: string[];
}

export interface InquiryFormData {
  fullName: string;
  brandName: string;
  whatsappNumber: string;
  email: string;
  garmentType: string;
  customGarmentType?: string;
  requiredQuantity: string;
  servicesRequired: string[];
  requirementNotes: string;
}
