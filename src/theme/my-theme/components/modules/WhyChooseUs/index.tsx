import React from 'react';
import { ScrollAnimationScript } from '../../shared/ScrollAnimationScript';

const defaultFeatures = [
  {
    title: 'Social capital for career mobility',
    description: 'Talent is distributed, but networks are not. The Network closes this gap, connecting learners with people who open doors, building essential social capital.',
  },
  {
    title: 'Workforce readiness needs real relationships',
    description: 'Skill-building thrives through guided conversations. The Network is the mentorship infrastructure that powers your education-to-workforce pipeline.',
  },
  {
    title: 'Actionable intelligence and measurable ROI',
    description: 'Turn mentor-mentee interaction into real-time program insights. Quantify value through retention and belonging analytics.',
  },
  {
    title: 'AI-powered mentorship at scale',
    description: 'Our AI mentorship platform uses mentor matching and engagement automation to amplify human connection.',
  },
];

export function Component({ fieldValues }: any) {
  const features = (fieldValues.features && fieldValues.features.length > 0)
    ? fieldValues.features.map((f: any) => ({
        title: f.title,
        description: f.description,
      }))
    : defaultFeatures;

  return (
    <>
    <ScrollAnimationScript />
    <section
      className="scroll-animate"
      style={{
        padding: 'var(--section-padding-lg) var(--spacing-lg)',
        background: 'var(--gradient-hero)',
      }}
    >
      <style>{`
        @media (max-width: 968px) {
          .why-choose-main-grid {
            grid-template-columns: 1fr !important;
          }
          .why-choose-image-column {
            order: -1;
            max-width: 400px !important;
            margin: 0 auto var(--spacing-xl) !important;
          }
        }
      `}</style>
      <div style={{ maxWidth: 'var(--max-width-xl)', margin: '0 auto' }}>
        {/* Two Column Layout */}
        <div style={{
          display: 'grid',
          gridTemplateColumns: '1fr 1fr',
          gap: 'var(--spacing-3xl)',
          alignItems: 'center',
        }} className="why-choose-main-grid">
          {/* Left Column - Content */}
          <div>
            {/* Section Header */}
            <div style={{ marginBottom: 'var(--spacing-md)' }}>
              <h2 style={{
                fontSize: 'var(--font-size-h2)',
                fontWeight: 500,
                color: 'var(--text-primary)',
                marginBottom: 'var(--spacing-md)',
                fontFamily: 'var(--font-headline)',
                lineHeight: 'var(--line-height-tight)',
              }}>
                {fieldValues.heading || 'Why Choose Mentor Collective?'}
              </h2>
              <p style={{
                fontSize: 'var(--font-size-body-lg)',
                fontWeight: 500,
                lineHeight: 'var(--line-height-normal)',
                color: 'var(--text-secondary)',
                fontFamily: 'var(--font-headline)',
              }}>
                {fieldValues.subtitle || 'We are the Essential Infrastructure built to scale human skills in an AI-driven world.'}
              </p>
            </div>

            {/* Features List */}
            <div style={{ display: 'flex', flexDirection: 'column', gap: 'var(--spacing-lg)' }}>
              {features.map((feature: any, index: number) => (
                <div
                  key={index}
                  style={{
                    display: 'flex',
                    gap: 'var(--spacing-md)',
                    alignItems: 'flex-start',
                  }}
                  className="scroll-animate"
                  data-delay={index * 100}
                >
                  {/* Number badge */}
                  <div style={{
                    width: '36px',
                    height: '36px',
                    minWidth: '36px',
                    background: 'var(--gradient-coral)',
                    borderRadius: 'var(--radius-md)',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    color: 'white',
                    fontWeight: 700,
                    fontSize: 'var(--font-size-body)',
                    fontFamily: 'var(--font-headline)',
                  }}>
                    {index + 1}
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
                      lineHeight: 'var(--line-height-normal)',
                      color: 'var(--text-muted)',
                      margin: 0,
                    }}>
                      {feature.description}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Right Column - Image */}
          <div
            className="why-choose-image-column scroll-animate"
            data-delay="200"
            style={{
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
            }}
          >
            {fieldValues.image?.src ? (
              <img
                src={fieldValues.image.src}
                alt={fieldValues.image.alt || 'Why Choose Mentor Collective'}
                style={{
                  width: '100%',
                  height: 'auto',
                  maxWidth: '450px',
                  borderRadius: 'var(--radius-xl)',
                  display: 'block',
                }}
              />
            ) : (
              <div style={{
                width: '100%',
                maxWidth: '450px',
                aspectRatio: '4/3',
                background: 'linear-gradient(135deg, rgba(239, 71, 111, 0.1) 0%, rgba(248, 159, 123, 0.1) 100%)',
                borderRadius: 'var(--radius-xl)',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
              }}>
                <svg width="80" height="80" viewBox="0 0 24 24" fill="none" stroke="var(--text-coral)" strokeWidth="1" strokeLinecap="round" strokeLinejoin="round" style={{ opacity: 0.5 }}>
                  <rect x="3" y="3" width="18" height="18" rx="2" ry="2"/>
                  <circle cx="8.5" cy="8.5" r="1.5"/>
                  <polyline points="21 15 16 10 5 21"/>
                </svg>
              </div>
            )}
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
    name: 'heading',
    label: 'Section Heading',
    default: 'Why Choose Mentor Collective?',
  },
  {
    type: 'text',
    name: 'subtitle',
    label: 'Subtitle',
    default: 'We are the Essential Infrastructure built to scale human skills in an AI-driven world.',
  },
  {
    type: 'image',
    name: 'image',
    label: 'Section Image',
  },
  {
    type: 'group',
    name: 'features',
    label: 'Features',
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
        default: 'Strategic Infrastructure',
      },
      {
        type: 'text',
        name: 'description',
        label: 'Description',
        default: 'Secure the only enterprise system for truly comprehensive success.',
      },
    ],
  },
];

export const meta = {
  label: 'Why Choose Us',
};
