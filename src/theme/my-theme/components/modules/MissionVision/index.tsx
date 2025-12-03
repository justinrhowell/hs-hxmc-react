import React from 'react';
import {
  ModuleFields,
  TextField,
} from '@hubspot/cms-components/fields';
import { ScrollAnimationScript } from '../../shared/ScrollAnimationScript';

const defaultPartners = [
  'Credential providers',
  'Higher education institutions',
  'Workforce boards and regional networks',
  'Intermediaries and nonprofits',
  'Employers and early-talent teams',
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
        background: 'var(--gradient-hero)',
      }}
    >
      <div style={{ maxWidth: 'var(--max-width-xl)', margin: '0 auto' }}>
        {/* Mission & Vision Cards */}
        <div style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(2, 1fr)',
          gap: 'var(--spacing-2xl)',
          marginBottom: 'var(--spacing-3xl)',
        }} className="mission-vision-grid">
          <style>{`
            @media (max-width: 768px) {
              .mission-vision-grid {
                grid-template-columns: 1fr !important;
              }
            }
          `}</style>

          {/* Mission Card */}
          <div style={{
            background: 'var(--bg-white)',
            borderRadius: 'var(--radius-xl)',
            padding: 'var(--spacing-2xl)',
            boxShadow: 'var(--shadow-lg)',
            border: '2px solid var(--border-light)',
            position: 'relative',
            overflow: 'hidden',
          }}>
            <div style={{
              position: 'absolute',
              top: 0,
              left: 0,
              right: 0,
              height: '4px',
              background: 'var(--gradient-coral)',
            }} />
            <div style={{
              display: 'inline-flex',
              alignItems: 'center',
              padding: '0.5rem 1rem',
              background: 'rgba(239, 71, 111, 0.1)',
              borderRadius: 'var(--radius-full)',
              fontSize: 'var(--font-size-xs)',
              fontWeight: 700,
              color: 'var(--text-coral)',
              marginBottom: 'var(--spacing-lg)',
              textTransform: 'uppercase',
              letterSpacing: '0.1em',
            }}>
              Our Mission
            </div>
            <p style={{
              fontSize: 'var(--font-size-h4)',
              color: 'var(--text-primary)',
              lineHeight: 'var(--line-height-relaxed)',
              fontWeight: 500,
              margin: 0,
            }}>
              {fieldValues.mission || "To ensure every learner has the connections, confidence, and support to realize their full potential — not by chance, but by design."}
            </p>
          </div>

          {/* Vision Card */}
          <div style={{
            background: 'linear-gradient(135deg, #1a1a2e 0%, #16213e 100%)',
            borderRadius: 'var(--radius-xl)',
            padding: 'var(--spacing-2xl)',
            boxShadow: 'var(--shadow-lg)',
            position: 'relative',
            overflow: 'hidden',
          }}>
            <div style={{
              display: 'inline-flex',
              alignItems: 'center',
              padding: '0.5rem 1rem',
              background: 'rgba(239, 71, 111, 0.2)',
              borderRadius: 'var(--radius-full)',
              fontSize: 'var(--font-size-xs)',
              fontWeight: 700,
              color: 'var(--text-coral)',
              marginBottom: 'var(--spacing-lg)',
              textTransform: 'uppercase',
              letterSpacing: '0.1em',
            }}>
              Our Vision
            </div>
            <p style={{
              fontSize: 'var(--font-size-h3)',
              color: 'white',
              lineHeight: 'var(--line-height-tight)',
              fontWeight: 700,
              fontFamily: 'var(--font-headline)',
              marginBottom: 'var(--spacing-md)',
            }}>
              {fieldValues.vision_headline || "A world where mentorship isn't a program."}
            </p>
            <p style={{
              fontSize: 'var(--font-size-h2)',
              color: 'var(--text-coral)',
              lineHeight: 1,
              fontWeight: 700,
              fontFamily: 'var(--font-headline)',
              margin: 0,
            }}>
              {fieldValues.vision_tagline || "It's infrastructure."}
            </p>
          </div>
        </div>

        {/* Vision Explanation */}
        <div style={{
          background: 'var(--bg-white)',
          borderRadius: 'var(--radius-xl)',
          padding: 'var(--spacing-3xl)',
          boxShadow: 'var(--shadow-md)',
          border: '1px solid var(--border-light)',
        }}>
          <div style={{
            display: 'grid',
            gridTemplateColumns: '1fr 1fr',
            gap: 'var(--spacing-3xl)',
            alignItems: 'center',
          }} className="vision-content-grid">
            <style>{`
              @media (max-width: 900px) {
                .vision-content-grid {
                  grid-template-columns: 1fr !important;
                }
              }
            `}</style>

            <div>
              <p style={{
                fontSize: 'var(--font-size-body-lg)',
                color: 'var(--text-secondary)',
                lineHeight: 'var(--line-height-relaxed)',
                marginBottom: 'var(--spacing-lg)',
              }}>
                {fieldValues.vision_description || "For decades, mentorship lived in pockets — siloed, manual, and dependent on heroic staff lift. Today's learners and workers need something different: reliable, accessible, AI-supported connections that meet them where they are."}
              </p>
              <p style={{
                fontSize: 'var(--font-size-body-lg)',
                color: 'var(--text-primary)',
                lineHeight: 'var(--line-height-relaxed)',
                fontWeight: 600,
              }}>
                {fieldValues.vision_statement || "We're building the AI-Powered Mentorship Operating System that unites:"}
              </p>
            </div>

            <div>
              <ul style={{
                listStyle: 'none',
                padding: 0,
                margin: 0,
              }}>
                {partners.map((partner: string, index: number) => (
                  <li
                    key={index}
                    style={{
                      display: 'flex',
                      alignItems: 'center',
                      gap: 'var(--spacing-md)',
                      padding: 'var(--spacing-md) 0',
                      borderBottom: index < partners.length - 1 ? '1px solid var(--border-light)' : 'none',
                    }}
                  >
                    <div style={{
                      width: '32px',
                      height: '32px',
                      background: 'linear-gradient(135deg, rgba(239, 71, 111, 0.1) 0%, rgba(248, 159, 123, 0.1) 100%)',
                      borderRadius: 'var(--radius-md)',
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                      flexShrink: 0,
                    }}>
                      <svg width="16" height="16" viewBox="0 0 24 24" fill="var(--text-coral)">
                        <path d="M9 16.17L4.83 12l-1.42 1.41L9 19 21 7l-1.41-1.41L9 16.17z"/>
                      </svg>
                    </div>
                    <span style={{
                      fontSize: 'var(--font-size-body)',
                      color: 'var(--text-primary)',
                      fontWeight: 500,
                    }}>
                      {partner}
                    </span>
                  </li>
                ))}
              </ul>
            </div>
          </div>

          {/* Bottom tagline */}
          <div style={{
            marginTop: 'var(--spacing-2xl)',
            paddingTop: 'var(--spacing-xl)',
            borderTop: '1px solid var(--border-light)',
            textAlign: 'center',
          }}>
            <p style={{
              fontSize: 'var(--font-size-body-lg)',
              color: 'var(--text-coral)',
              fontWeight: 600,
              margin: 0,
            }}>
              {fieldValues.vision_conclusion || "One system that strengthens belonging, accelerates career readiness, and grows social capital — at scale."}
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
    name: 'mission',
    label: 'Mission Statement',
    default: "To ensure every learner has the connections, confidence, and support to realize their full potential — not by chance, but by design.",
  },
  {
    type: 'text',
    name: 'vision_headline',
    label: 'Vision Headline',
    default: "A world where mentorship isn't a program.",
  },
  {
    type: 'text',
    name: 'vision_tagline',
    label: 'Vision Tagline',
    default: "It's infrastructure.",
  },
  {
    type: 'text',
    name: 'vision_description',
    label: 'Vision Description',
    default: "For decades, mentorship lived in pockets — siloed, manual, and dependent on heroic staff lift. Today's learners and workers need something different: reliable, accessible, AI-supported connections that meet them where they are.",
  },
  {
    type: 'text',
    name: 'vision_statement',
    label: 'Vision Statement',
    default: "We're building the AI-Powered Mentorship Operating System that unites:",
  },
  {
    type: 'text',
    name: 'vision_conclusion',
    label: 'Vision Conclusion',
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
  label: 'Mission & Vision',
};
