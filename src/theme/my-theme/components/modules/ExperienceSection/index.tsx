import React from 'react';
import { ScrollAnimationScript } from '../../shared/ScrollAnimationScript';
import smartMatchingSvg from '../../../assets/Smart Matching.svg';

interface Feature {
  icon: string;
  title: string;
  description: string;
}

export function Component({ fieldValues }: any) {
  // Different geometric shapes as inline SVGs for visual variety
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
  ];

  // Use custom features if provided, otherwise fall back to defaults
  const customFeatures = fieldValues.features || [];

  const features: Feature[] = customFeatures.length > 0
    ? customFeatures.map((f: any) => ({
        icon: f.icon || 'circle',
        title: f.title || 'Feature',
        description: f.description || 'Feature description',
      }))
    : [
        {
          icon: 'circle',
          title: 'Seamless Onboarding',
          description: 'Mobilize your mentor and mentee populations with data-informed, intuitive recruitment, and ensure their readiness with research-backed training.',
        },
        {
          icon: 'diamond',
          title: 'Smart Matching',
          description: 'Optimize our proprietary matching algorithm based on a decade of data. Ensure the strongest possible fit and outcomes based on shared identity, goals, and experience.',
        },
        {
          icon: 'triangle',
          title: 'Sustained Engagement',
          description: 'Eliminate the #1 barrier to engagement—"I don\'t know what to talk about"—with AI-powered prompts, nudges, and resources.',
        },
      ];

  return (
    <>
    <ScrollAnimationScript />
    <section
      id="experience"
      className="scroll-animate"
      style={{
        padding: 'var(--section-padding-lg) var(--spacing-lg)',
        background: 'var(--gradient-hero)',
        backgroundImage: 'var(--pattern-dots)',
        backgroundSize: 'var(--pattern-dots-size)',
      }}
    >
      <div style={{ maxWidth: 'var(--max-width-xl)', margin: '0 auto' }}>
        <div style={{
          display: 'grid',
          gridTemplateColumns: '1.1fr 1fr',
          gap: 'var(--spacing-3xl)',
          alignItems: 'center',
        }} className="experience-content">
          {/* Left Column - Visual Elements */}
          <div className="scroll-animate" data-delay="200">
            <img
              src={fieldValues.custom_image?.src || smartMatchingSvg}
              alt={fieldValues.custom_image?.alt || "Smart Matching illustration showing AI-powered mentor matching"}
              style={{
                width: '100%',
                height: 'auto',
                maxWidth: '550px',
                display: 'block',
              }}
            />
          </div>

          {/* Right Column - Text Content */}
          <div>
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
              {fieldValues.section_title || 'The Experience'}
            </h2>

            <p style={{
              fontSize: 'var(--font-size-body-lg)',
              fontWeight: 500,
              lineHeight: 'var(--line-height-normal)',
              marginBottom: 'var(--spacing-xl)',
              color: 'var(--text-secondary)',
              fontFamily: 'var(--font-headline)',
            }}>
              {fieldValues.title || 'Deepen engagement with AI-guided journeys.'}
            </p>

            {/* Feature List */}
            <div style={{ display: 'flex', flexDirection: 'column', gap: 'var(--spacing-xl)' }}>
              {features.map((feature, index) => (
                <div key={index} style={{ display: 'flex', gap: 'var(--spacing-md)', alignItems: 'flex-start' }}>
                  <div style={{
                    width: '36px',
                    height: '36px',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    background: 'rgba(17, 138, 178, 0.1)',
                    borderRadius: 'var(--radius-md)',
                    flexShrink: 0,
                  }}>
                    {iconShapes[index % iconShapes.length]}
                  </div>
                  <div>
                    <h3 style={{
                      fontSize: 'var(--font-size-body-lg)',
                      fontWeight: 500,
                      color: 'var(--text-primary)',
                      marginBottom: '4px',
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

            {/* Benefit Statement Card */}
            <div style={{
              background: 'var(--bg-white)',
              borderRadius: 'var(--radius-xl)',
              padding: 'var(--spacing-xl)',
              marginTop: 'var(--spacing-2xl)',
              textAlign: 'center',
            }}>
              <p style={{
                fontSize: 'var(--font-size-body)',
                fontWeight: 500,
                color: 'var(--text-secondary)',
                lineHeight: 'var(--line-height-relaxed)',
                fontFamily: 'var(--font-headline)',
                margin: 0,
              }}>
                {fieldValues.benefit_text || 'We go beyond simply matching. This is the AI-guided experience that fosters lasting bonds and measurable growth for every mentor and mentee.'}
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
    </>
  );
}

export const fields: any = [
  {
    type: 'image',
    name: 'custom_image',
    label: 'Section Image (upload custom image)',
  },
  {
    type: 'text',
    name: 'section_title',
    label: 'Section Title (H2)',
    default: 'The Experience',
  },
  {
    type: 'text',
    name: 'title',
    label: 'Tagline',
    default: 'Deepen engagement with AI-guided journeys.',
  },
  {
    type: 'group',
    name: 'features',
    label: 'Experience Features',
    help_text: 'Edit the feature list. Leave empty to use defaults.',
    occurrence: {
      min: 0,
      max: 6,
      default: 0,
    },
    children: [
      {
        type: 'choice',
        name: 'icon',
        label: 'Icon Shape',
        choices: [
          ['circle', 'Circle'],
          ['diamond', 'Diamond'],
          ['triangle', 'Triangle'],
        ],
        default: 'circle',
      },
      {
        type: 'text',
        name: 'title',
        label: 'Feature Title',
        default: 'Feature Title',
      },
      {
        type: 'text',
        name: 'description',
        label: 'Feature Description',
        default: 'Feature description goes here.',
      },
    ],
  },
  {
    type: 'text',
    name: 'benefit_text',
    label: 'Benefit Statement',
    default: 'We go beyond simply matching. This is the AI-guided experience that fosters lasting bonds and measurable growth for every mentor and mentee.',
  },
];

export const meta = {
  label: 'Experience Section',
};
