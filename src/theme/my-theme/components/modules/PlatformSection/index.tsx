import React from 'react';
import {
  ModuleFields,
  TextField,
  ImageField,
} from '@hubspot/cms-components/fields';
import { ScrollAnimationScript } from '../../shared/ScrollAnimationScript';
import integrationsSvg from '../../../assets/Integrations.svg';

interface Feature {
  title: string;
  description: string;
}

// Geometric shape icons matching brand style
const iconShapes = [
  // Circle
  <svg key="circle" width="20" height="20" viewBox="0 0 20 20" fill="none">
    <circle cx="10" cy="10" r="8" stroke="var(--secondary-blue)" strokeWidth="2.5" fill="none" />
  </svg>,
  // Diamond/Rhombus
  <svg key="diamond" width="20" height="20" viewBox="0 0 20 20" fill="none">
    <rect x="10" y="2" width="11" height="11" rx="2" transform="rotate(45 10 2)" stroke="var(--secondary-blue)" strokeWidth="2.5" fill="none" />
  </svg>,
  // Triangle
  <svg key="triangle" width="20" height="20" viewBox="0 0 20 20" fill="none">
    <path d="M10 3L18 17H2L10 3Z" stroke="var(--secondary-blue)" strokeWidth="2.5" strokeLinejoin="round" fill="none" />
  </svg>,
  // Square
  <svg key="square" width="20" height="20" viewBox="0 0 20 20" fill="none">
    <rect x="3" y="3" width="14" height="14" rx="2" stroke="var(--secondary-blue)" strokeWidth="2.5" fill="none" />
  </svg>,
];

export function Component({ fieldValues }: any) {
  // Use custom features if provided, otherwise fall back to defaults
  const customFeatures = fieldValues.features || [];

  const features: Feature[] = customFeatures.length > 0
    ? customFeatures.map((f: any) => ({
        title: f.title || 'Feature',
        description: f.description || 'Feature description',
      }))
    : [
        {
          title: 'Accelerated Launch',
          description: 'Simplify program creation with guided, intuitive templates. Deploy quickly and with support, ensuring rapid launch without compromising quality.',
        },
        {
          title: 'Scaled Personalization',
          description: 'Customize program templates to your unique population and goals. Adaptable for small and large cohorts, from startups to enterprise initiatives.',
        },
        {
          title: 'Automated Workflows',
          description: 'Built-in automation manages every step—from recruitment nudges to assessment reminders—saving your team hundreds of administrative hours.',
        },
        {
          title: 'Secure Integrations',
          description: 'Seamless SSO and encrypted data feeds securely connect your campus, workforce, and employer systems to ensure support without ever compromising privacy.',
        },
      ];

  return (
    <>
    <style>{`
      @media (max-width: 968px) {
        .platform-content {
          grid-template-columns: 1fr !important;
        }
        .platform-left-col {
          order: 1 !important;
        }
        .platform-right-col {
          order: 2 !important;
        }
      }
    `}</style>
    <ScrollAnimationScript />
    <section
      id="platform"
      className="scroll-animate"
      style={{
        padding: 'var(--spacing-lg) var(--spacing-lg) var(--section-padding-lg)',
        background: 'var(--bg-white)',
      }}
    >
      <div style={{ maxWidth: 'var(--max-width-xl)', margin: '0 auto' }}>
        <div style={{
          display: 'grid',
          gridTemplateColumns: '1fr 1.1fr',
          gap: 'var(--spacing-3xl)',
          alignItems: 'start',
        }} className="platform-content">
          {/* Left Column - Text Content */}
          <div className="platform-left-col">
            {/* Section Title */}
            <h2 style={{
              fontSize: 'var(--font-size-h2)',
              fontWeight: 500,
              lineHeight: 'var(--line-height-tight)',
              letterSpacing: 'var(--letter-spacing-tight)',
              marginBottom: 'var(--spacing-sm)',
              color: 'var(--text-primary)',
              fontFamily: 'var(--font-headline)',
              fontFeatureSettings: '"liga" 1, "clig" 1',
            }}>
              {fieldValues.section_title || 'The Platform'}
            </h2>

            <p style={{
              fontSize: 'var(--font-size-body-lg)',
              fontWeight: 500,
              lineHeight: 'var(--line-height-normal)',
              marginBottom: 'var(--spacing-xl)',
              color: 'var(--text-secondary)',
              fontFamily: 'var(--font-headline)',
            }}>
              {fieldValues.title || 'Scale without the administrative burden.'}
            </p>

            {/* Feature List */}
            <div style={{ display: 'flex', flexDirection: 'column', gap: 'var(--spacing-xl)' }}>
              {features.map((feature, index) => (
                <div key={index} style={{ display: 'flex', gap: 'var(--spacing-md)', alignItems: 'flex-start' }}>
                  <div style={{
                    flexShrink: 0,
                    width: '40px',
                    height: '40px',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    background: 'rgba(74, 144, 226, 0.08)',
                    borderRadius: 'var(--radius-md)',
                  }}>
                    {iconShapes[index % iconShapes.length]}
                  </div>
                  <div>
                    <h3 style={{
                      fontSize: 'var(--font-size-large)',
                      fontWeight: 500,
                      color: 'var(--text-primary)',
                      marginBottom: 'var(--spacing-xs)',
                      fontFamily: 'var(--font-headline)',
                    }}>
                      {feature.title}
                    </h3>
                    <p style={{
                      fontSize: 'var(--font-size-base)',
                      color: 'var(--text-muted)',
                      lineHeight: 'var(--line-height-normal)',
                      margin: 0,
                    }}>
                      {feature.description}
                    </p>
                  </div>
                </div>
              ))}
            </div>

            {/* CTA Button - under features */}
            <a
              href={fieldValues.cta_url || '#contact'}
              style={{
                display: 'inline-block',
                padding: 'var(--btn-padding)',
                background: 'var(--gradient-coral)',
                color: 'white',
                border: 'none',
                borderRadius: 'var(--radius-full)',
                fontSize: 'var(--font-size-base)',
                fontWeight: 600,
                textDecoration: 'none',
                boxShadow: 'var(--shadow-coral-sm)',
                marginTop: 'var(--spacing-xl)',
              }}
            >
              {fieldValues.cta_text || 'Request a Demo'}
            </a>
          </div>

          {/* Right Column - Visual + Stat Card */}
          <div className="platform-right-col scroll-animate" data-delay="200" style={{ textAlign: 'center' }}>
            <img
              src={integrationsSvg}
              alt="Integrations illustration showing connected systems and workflows"
              style={{
                width: '100%',
                height: 'auto',
                maxWidth: '550px',
                display: 'block',
                margin: '0 auto',
              }}
            />

            {/* Stat Card - centered under image */}
            <div style={{
              background: 'var(--gradient-hero)',
              borderRadius: 'var(--radius-xl)',
              padding: 'var(--spacing-xl)',
              marginTop: 'var(--spacing-xl)',
              maxWidth: '450px',
              marginLeft: 'auto',
              marginRight: 'auto',
              textAlign: 'center',
            }}>
              <div style={{
                fontSize: 'var(--font-size-h2)',
                fontWeight: 700,
                color: 'var(--text-coral)',
                fontFamily: 'var(--font-headline)',
                marginBottom: 'var(--spacing-xs)',
              }}>
                {fieldValues.proof_stat || '$7.8M'}
              </div>
              <div style={{
                fontSize: 'var(--font-size-base)',
                color: 'var(--text-muted)',
                marginBottom: 'var(--spacing-md)',
              }}>
                {fieldValues.proof_label || 'in operational ROI delivered'}
              </div>
              <p style={{
                fontSize: 'var(--font-size-body)',
                fontWeight: 500,
                color: 'var(--text-secondary)',
                lineHeight: 'var(--line-height-relaxed)',
                fontFamily: 'var(--font-headline)',
                margin: 0,
              }}>
                {fieldValues.benefit_text || 'Spend less time on logistics and more time on impact. The Platform gives your team hundreds of hours back to focus on what matters.'}
              </p>
            </div>
          </div>
        </div>

        {/* Testimonial Section */}
        <div style={{
          marginTop: 'var(--spacing-3xl)',
          padding: 'var(--spacing-2xl)',
          background: 'var(--gradient-hero)',
          borderRadius: 'var(--radius-xl)',
        }}>
          <div style={{
            background: 'var(--bg-white)',
            padding: 'var(--spacing-xl)',
            borderRadius: 'var(--radius-lg)',
            borderLeft: '4px solid var(--text-coral)',
            maxWidth: '900px',
            margin: '0 auto',
          }}>
            <p style={{
              fontSize: 'var(--font-size-body-lg)',
              fontStyle: 'italic',
              color: 'var(--text-secondary)',
              lineHeight: 'var(--line-height-relaxed)',
              marginBottom: 'var(--spacing-md)',
            }}>
              "{fieldValues.testimonial_quote || 'The scalable technology and personalized matching have significantly reduced our administrative burdens, allowing us to focus more on professional development workshops and programming that foster a stronger sense of belonging and community.'}"
            </p>
            <p style={{
              fontSize: 'var(--font-size-base)',
              fontWeight: 600,
              color: 'var(--text-primary)',
              margin: 0,
            }}>
              {fieldValues.testimonial_author || '– J. CHECO COLÓN-GAUD, Professor & Associate Dean, Jack N. Averitt College of Graduate Studies, Georgia Southern University'}
            </p>
          </div>
        </div>
      </div>
    </section>
    </>
  );
}

export const fields: any = [
  {
    type: 'text',
    name: 'section_title',
    label: 'Section Title (H2)',
    default: 'The Platform',
  },
  {
    type: 'text',
    name: 'title',
    label: 'Tagline',
    default: 'Scale without the administrative burden.',
  },
  {
    type: 'group',
    name: 'features',
    label: 'Platform Features',
    help_text: 'Edit the feature list. Leave empty to use defaults.',
    occurrence: {
      min: 0,
      max: 6,
      default: 0,
    },
    children: [
      {
        type: 'text',
        name: 'title',
        label: 'Feature Title',
        default: 'Accelerated Launch',
      },
      {
        type: 'text',
        name: 'description',
        label: 'Feature Description',
        default: 'Simplify program creation with guided, intuitive templates.',
      },
    ],
  },
  {
    type: 'text',
    name: 'benefit_text',
    label: 'Benefit Text',
    default: 'Spend less time on logistics and more time on impact. The Platform gives your team hundreds of hours back to focus on what matters.',
  },
  {
    type: 'text',
    name: 'testimonial_quote',
    label: 'Testimonial Quote',
    default: 'The scalable technology and personalized matching have significantly reduced our administrative burdens, allowing us to focus more on professional development workshops and programming that foster a stronger sense of belonging and community.',
  },
  {
    type: 'text',
    name: 'testimonial_author',
    label: 'Testimonial Author',
    default: '– J. CHECO COLÓN-GAUD, Professor & Associate Dean, Jack N. Averitt College of Graduate Studies, Georgia Southern University',
  },
  {
    type: 'text',
    name: 'proof_stat',
    label: 'Proof Point Statistic',
    default: '$7.8M',
  },
  {
    type: 'text',
    name: 'proof_label',
    label: 'Proof Point Label',
    default: 'in operational ROI delivered',
  },
  {
    type: 'text',
    name: 'cta_text',
    label: 'CTA Button Text',
    default: 'Request a Demo',
  },
  {
    type: 'text',
    name: 'cta_url',
    label: 'CTA Button URL',
    default: '#contact',
  },
];

export const meta = {
  label: 'Platform Section',
};
