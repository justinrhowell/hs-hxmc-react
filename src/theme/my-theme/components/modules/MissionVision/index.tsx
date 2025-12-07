import React from 'react';
import { ScrollAnimationScript } from '../../shared/ScrollAnimationScript';

const defaultPartners = [
  'Employers and talent acquisition teams',
  'Higher education institutions',
  'Workforce boards and Nonprofits',
  'Regional networks',
  'Credential providers',
];

export function Component({ fieldValues }: any) {
  const partners = (fieldValues.partners && fieldValues.partners.length > 0)
    ? fieldValues.partners.map((p: any) => p.partner_name)
    : defaultPartners;

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
          .vision-main-grid {
            grid-template-columns: 1fr !important;
          }
        }
      `}</style>
      <div style={{ maxWidth: 'var(--max-width-xl)', margin: '0 auto' }}>
        {/* Two Column Layout */}
        <div style={{
          display: 'grid',
          gridTemplateColumns: '1fr 1fr',
          gap: 'var(--spacing-3xl)',
          alignItems: 'start',
        }} className="vision-main-grid">
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
                {fieldValues.heading || "Our Vision"}
              </h2>
              <p style={{
                fontSize: 'var(--font-size-body-lg)',
                fontWeight: 500,
                lineHeight: 'var(--line-height-normal)',
                color: 'var(--text-secondary)',
                fontFamily: 'var(--font-headline)',
              }}>
                {fieldValues.subtitle || "A world where mentorship isn't a program. It's infrastructure."}
              </p>
            </div>

            {/* Vision Description */}
            <p style={{
              fontSize: 'var(--font-size-body-lg)',
              color: 'var(--text-secondary)',
              lineHeight: 'var(--line-height-relaxed)',
              marginBottom: 'var(--spacing-xl)',
            }}>
              {fieldValues.vision_description || "For decades, mentorship lived in pockets — siloed, manual, and dependent on heroic staff lift. Today's learners and workers need something different: reliable, accessible, AI-supported connections that meet them where they are."}
            </p>

            {/* Proof Point - Moved to left column */}
            <div style={{
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
                {fieldValues.proof_text || "One system that strengthens belonging, accelerates career readiness, and grows social capital — at scale."}
              </p>
            </div>
          </div>

          {/* Right Column - Partner Checklist */}
          <div>
            {/* Checklist Header */}
            <h3 style={{
              fontSize: 'var(--font-size-h4)',
              fontWeight: 600,
              color: 'var(--text-primary)',
              marginBottom: 'var(--spacing-xl)',
              fontFamily: 'var(--font-headline)',
            }}>
              {fieldValues.checklist_heading || "Our AI-Powered Mentorship OS unites:"}
            </h3>

            {/* Partner List with checkmarks */}
            <div style={{ display: 'flex', flexDirection: 'column', gap: 'var(--spacing-md)' }}>
              {partners.map((partner: string, index: number) => (
                <div
                  key={index}
                  style={{
                    display: 'flex',
                    gap: 'var(--spacing-md)',
                    alignItems: 'center',
                  }}
                  className="scroll-animate"
                  data-delay={index * 100}
                >
                  {/* Checkmark badge */}
                  <div style={{
                    width: '36px',
                    height: '36px',
                    minWidth: '36px',
                    background: 'linear-gradient(135deg, rgba(239, 71, 111, 0.1) 0%, rgba(248, 159, 123, 0.1) 100%)',
                    borderRadius: 'var(--radius-full)',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                  }}>
                    <svg width="18" height="18" viewBox="0 0 24 24" fill="var(--text-coral)">
                      <path d="M9 16.17L4.83 12l-1.42 1.41L9 19 21 7l-1.41-1.41L9 16.17z"/>
                    </svg>
                  </div>
                  <span style={{
                    fontSize: 'var(--font-size-body-lg)',
                    color: 'var(--text-primary)',
                    fontWeight: 500,
                  }}>
                    {partner}
                  </span>
                </div>
              ))}
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
    type: 'text',
    name: 'heading',
    label: 'Section Heading',
    default: "Our Vision",
  },
  {
    type: 'text',
    name: 'subtitle',
    label: 'Subtitle',
    default: "A world where mentorship isn't a program. It's infrastructure.",
  },
  {
    type: 'text',
    name: 'vision_description',
    label: 'Vision Description',
    default: "For decades, mentorship lived in pockets — siloed, manual, and dependent on heroic staff lift. Today's learners and workers need something different: reliable, accessible, AI-supported connections that meet them where they are.",
  },
  {
    type: 'text',
    name: 'checklist_heading',
    label: 'Checklist Heading',
    default: "Our AI-Powered Mentorship OS unites:",
  },
  {
    type: 'text',
    name: 'proof_text',
    label: 'Bottom Statement',
    default: "One system that strengthens belonging, accelerates career readiness, and grows social capital — at scale.",
  },
  {
    type: 'group',
    name: 'partners',
    label: 'Partner Types',
    occurrence: {
      min: 0,
      max: 8,
      default: 0,
    },
    children: [
      {
        type: 'text',
        name: 'partner_name',
        label: 'Partner Type',
        default: 'Higher education institutions',
      },
    ],
  },
];

export const meta = {
  label: 'Our Vision',
};
