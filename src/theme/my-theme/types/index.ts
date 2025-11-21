/**
 * TypeScript Interfaces for HubSpot CMS Component Field Values
 * These interfaces provide type safety for all component props
 */

// =============================================================================
// COMMON TYPES
// =============================================================================

/**
 * HubSpot Image Field type
 */
export interface HubSpotImage {
  src: string;
  alt?: string;
  width?: number;
  height?: number;
  loading?: 'lazy' | 'eager';
}

/**
 * HubSpot Link Field type
 */
export interface HubSpotLink {
  url: string;
  text?: string;
  target?: '_blank' | '_self';
  rel?: string;
}

/**
 * Common button/CTA field type
 */
export interface CTAButton {
  text: string;
  url: string;
  variant?: 'primary' | 'secondary' | 'outline';
}

// =============================================================================
// NAVIGATION COMPONENT
// =============================================================================

export interface NavigationMenuItem {
  label: string;
  href?: string;
  hasDropdown?: boolean;
  megaMenu?: {
    sections: Array<{
      title: string;
      items: Array<{
        label: string;
        description?: string;
        icon?: string;
        href?: string;
      }>;
    }>;
  };
}

export interface NavigationFieldValues {
  logoText?: string;
  menuItems?: NavigationMenuItem[];
  ctaButtonText?: string;
  ctaButtonUrl?: string;
}

// =============================================================================
// HERO COMPONENTS
// =============================================================================

export interface HeroSectionFieldValues {
  badge?: string;
  title?: string;
  subtitle?: string;
  primaryButtonText?: string;
  primaryButtonUrl?: string;
  secondaryButtonText?: string;
  secondaryButtonUrl?: string;
  backgroundImage?: HubSpotImage;
}

export interface ProductHeroFieldValues {
  badge?: string;
  title?: string;
  subtitle?: string;
  primary_button_text?: string;
  primary_button_url?: string;
  secondary_button_text?: string;
  secondary_button_url?: string;
  preview_image?: HubSpotImage;
}

export interface HeroDiagramFieldValues {
  badge?: string;
  title?: string;
  subtitle?: string;
  primaryButtonText?: string;
  primaryButtonUrl?: string;
  secondaryButtonText?: string;
  secondaryButtonUrl?: string;
}

// =============================================================================
// SECTION COMPONENTS
// =============================================================================

export interface AIFeaturesFieldValues {
  badge?: string;
  title?: string;
  subtitle?: string;
  features?: Array<{
    icon: string;
    title: string;
    description: string;
  }>;
}

export interface PlatformSectionFieldValues {
  badge?: string;
  title?: string;
  subtitle?: string;
  features?: Array<{
    icon: string;
    title: string;
    description: string;
  }>;
}

export interface ExperienceSectionFieldValues {
  badge?: string;
  title?: string;
  subtitle?: string;
  features?: Array<{
    icon: string;
    title: string;
    description: string;
  }>;
}

export interface IntelligenceSectionFieldValues {
  heading?: string;
  subtitle?: string;
  feature1_title?: string;
  feature1_description?: string;
  feature2_title?: string;
  feature2_description?: string;
  feature3_title?: string;
  feature3_description?: string;
  feature4_title?: string;
  feature4_description?: string;
  stats_heading?: string;
  stat1_value?: string;
  stat1_label?: string;
  stat2_value?: string;
  stat2_label?: string;
  stat3_value?: string;
  stat3_label?: string;
}

export interface StorySectionFieldValues {
  title?: string;
  description?: string;
  quote?: string;
  author_name?: string;
  author_title?: string;
  stats?: Array<{
    value: string;
    label: string;
  }>;
}

export interface ResultsSectionFieldValues {
  badge?: string;
  title?: string;
  subtitle?: string;
  stat1_value?: string;
  stat1_label?: string;
  stat2_value?: string;
  stat2_label?: string;
  stat3_value?: string;
  stat3_label?: string;
  testimonialQuote?: string;
  testimonialAuthor?: string;
  testimonialRole?: string;
}

export interface StagesSectionFieldValues {
  title?: string;
  subtitle?: string;
  stages?: Array<{
    id: string;
    title: string;
    description: string;
    image?: HubSpotImage;
    features?: string[];
  }>;
}

export interface SystemIntroFieldValues {
  heading?: string;
  subtitle?: string;
  pillar1_title?: string;
  pillar1_description?: string;
  pillar1_link_text?: string;
  pillar1_link_url?: string;
  pillar2_title?: string;
  pillar2_description?: string;
  pillar2_link_text?: string;
  pillar2_link_url?: string;
  pillar3_title?: string;
  pillar3_description?: string;
  pillar3_link_text?: string;
  pillar3_link_url?: string;
  tagline?: string;
  button_text?: string;
  button_url?: string;
}

// =============================================================================
// CAROUSEL & TESTIMONIAL COMPONENTS
// =============================================================================

export interface TestimonialsCarouselFieldValues {
  title?: string;
  testimonials?: Array<{
    quote: string;
    author: string;
    role: string;
    company?: string;
    image?: HubSpotImage;
  }>;
}

export interface LogosCarouselFieldValues {
  title?: string;
  logos?: Array<{
    image: HubSpotImage;
    alt: string;
    url?: string;
  }>;
}

// =============================================================================
// CTA & FORM COMPONENTS
// =============================================================================

export interface CTASectionFieldValues {
  title?: string;
  subtitle?: string;
  primaryButtonText?: string;
  primaryButtonUrl?: string;
  secondaryButtonText?: string;
  secondaryButtonUrl?: string;
}

export interface ContactFormFieldValues {
  title?: string;
  subtitle?: string;
  submitButtonText?: string;
  successMessage?: string;
  formId?: string;
}

export interface GettingStartedFieldValues {
  title?: string;
  subtitle?: string;
  steps?: Array<{
    number: number;
    title: string;
    description: string;
  }>;
  ctaText?: string;
  ctaUrl?: string;
}

// =============================================================================
// FAQ & PRICING COMPONENTS
// =============================================================================

export interface FAQItem {
  question: string;
  answer: string;
}

export interface FAQSectionFieldValues {
  title?: string;
  subtitle?: string;
  faqs?: FAQItem[];
}

export interface PricingTier {
  name: string;
  price: string;
  period?: string;
  description?: string;
  features: string[];
  ctaText: string;
  ctaUrl: string;
  featured?: boolean;
}

export interface PricingTableFieldValues {
  title?: string;
  subtitle?: string;
  tiers?: PricingTier[];
}

// =============================================================================
// CALCULATOR COMPONENTS
// =============================================================================

export interface ROICalculatorFieldValues {
  title?: string;
  subtitle?: string;
  defaultStudentCount?: number;
  defaultRetentionRate?: number;
  defaultTuitionCost?: number;
}

// =============================================================================
// FOOTER COMPONENT
// =============================================================================

export interface FooterLink {
  text: string;
  url: string;
}

export interface FooterColumn {
  title: string;
  links: FooterLink[];
}

export interface FooterFieldValues {
  description?: string;
  facebook_url?: string;
  twitter_url?: string;
  linkedin_url?: string;
  instagram_url?: string;
  products_links?: FooterLink[];
  solutions_links?: FooterLink[];
  resources_links?: FooterLink[];
  company_links?: FooterLink[];
  privacy_url?: string;
  terms_url?: string;
  copyright_text?: string;
}

// =============================================================================
// UTILITY TYPES
// =============================================================================

/**
 * Generic component props wrapper
 */
export interface ComponentProps<T = Record<string, unknown>> {
  fieldValues: T;
}

/**
 * Type helper for creating field value types
 */
export type FieldValues<T> = T extends ComponentProps<infer V> ? V : never;

/**
 * Make all properties in T optional recursively
 */
export type DeepPartial<T> = {
  [P in keyof T]?: T[P] extends object ? DeepPartial<T[P]> : T[P];
};

export default {
  // Re-export for convenience
};
