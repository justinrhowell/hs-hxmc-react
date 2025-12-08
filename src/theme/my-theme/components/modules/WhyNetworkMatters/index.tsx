import React from 'react';
import { ScrollAnimationScript } from '../../shared/ScrollAnimationScript';
import integrationsSvg from '../../../assets/Integrations.svg';

const defaultReasons = [
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
    description: 'Turn mentor-mentee interaction into real-time program insights. Quantify value through retention and belonging analytics. This measures the ROI of mentorship programs.',
  },
  {
    title: 'AI-powered mentorship at scale',
    description: 'Our AI mentorship platform uses mentor matching and engagement automation to amplify human connection. This mentorship operating system delivers scalable mentorship solutions.',
  },
];

export function Component({ fieldValues }: any) {
  const reasons = (fieldValues.reasons && fieldValues.reasons.length > 0)
    ? fieldValues.reasons.map((r: any) => ({
        title: r.title,
        description: r.description,
      }))
    : defaultReasons;

  return (
    <>
    <ScrollAnimationScript />
    <section
      className="scroll-animate"
      style={{
        padding: 'var(--section-padding-lg) var(--spacing-lg)',
        background: 'var(--bg-white)',
      }}
    >
      <style>{`
        @media (max-width: 968px) {
          .why-network-main-grid {
            grid-template-columns: 1fr !important;
          }
          .why-network-illustration {
            order: -1;
            max-width: 400px !important;
            margin: 0 auto var(--spacing-xl) !important;
          }
        }
      `}</style>
      <div style={{ maxWidth: 'var(--max-width-xl)', margin: '0 auto' }}>
        {/* Two Column Layout: Illustration + Content */}
        <div style={{
          display: 'grid',
          gridTemplateColumns: '0.9fr 1.1fr',
          gap: 'var(--spacing-3xl)',
          alignItems: 'center',
        }} className="why-network-main-grid">
          {/* Left Column - Illustration */}
          <div
            className="why-network-illustration scroll-animate"
            data-delay="200"
            style={{
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
            }}
          >
            <img
              src={fieldValues.custom_image?.src || integrationsSvg}
              alt={fieldValues.custom_image?.alt || "Network integrations illustration showing data insights and mentor connections"}
              style={{
                width: '100%',
                height: 'auto',
                maxWidth: '450px',
                display: 'block',
              }}
            />
          </div>

          {/* Right Column - Content */}
          <div>
            {/* Header */}
            <div style={{ marginBottom: 'var(--spacing-xl)' }}>
              <h2 style={{
                fontSize: 'var(--font-size-h2)',
                fontWeight: 500,
                color: 'var(--text-primary)',
                marginBottom: 'var(--spacing-md)',
                fontFamily: 'var(--font-headline)',
                lineHeight: 'var(--line-height-tight)',
              }}>
                {fieldValues.heading || 'Why The Network Matters'}
              </h2>
              <p style={{
                fontSize: 'var(--font-size-body-lg)',
                fontWeight: 500,
                lineHeight: 'var(--line-height-normal)',
                color: 'var(--text-secondary)',
                fontFamily: 'var(--font-headline)',
              }}>
                {fieldValues.subtitle || 'We build the Essential Infrastructure to scale human potential in an AI-driven world.'}
              </p>
            </div>

            {/* Reasons List */}
            <div style={{ display: 'flex', flexDirection: 'column', gap: 'var(--spacing-lg)' }}>
              {reasons.map((reason: any, index: number) => (
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
                      {reason.title}
                    </h3>
                    <p style={{
                      fontSize: 'var(--font-size-base)',
                      lineHeight: 'var(--line-height-normal)',
                      color: 'var(--text-muted)',
                      margin: 0,
                    }}>
                      {reason.description}
                    </p>
                  </div>
                </div>
              ))}
            </div>

            {/* Proof Point */}
            <div style={{
              marginTop: 'var(--spacing-xl)',
              padding: 'var(--spacing-lg)',
              background: 'var(--gradient-hero)',
              borderRadius: 'var(--radius-xl)',
            }}>
              <p style={{
                fontSize: 'var(--font-size-body)',
                fontWeight: 600,
                color: 'var(--text-coral)',
                margin: 0,
                fontFamily: 'var(--font-headline)',
              }}>
                {fieldValues.proof_text || '10+ years of mentorship data: 500K learners, 200K mentors, 200 partners.'}
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
    name: 'heading',
    label: 'Section Heading',
    default: 'Why The Network Matters',
  },
  {
    type: 'text',
    name: 'subtitle',
    label: 'Subtitle',
    default: 'We build the Essential Infrastructure to scale human potential in an AI-driven world.',
  },
  {
    type: 'group',
    name: 'reasons',
    label: 'Reasons',
    help_text: 'Edit the reason cards. Leave empty to use defaults.',
    occurrence: {
      min: 0,
      max: 6,
      default: 0,
    },
    children: [
      {
        type: 'text',
        name: 'title',
        label: 'Reason Title',
        default: 'Social capital for career mobility',
      },
      {
        type: 'text',
        name: 'description',
        label: 'Description',
        default: 'Talent is distributed, but networks are not.',
      },
    ],
  },
  {
    type: 'text',
    name: 'proof_text',
    label: 'Proof Statement',
    default: '10+ years of mentorship data: 500K learners, 200K mentors, 200 partners.',
  },
];

export const meta = {
  label: 'Why Network Matters',
};
