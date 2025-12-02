import React from 'react';
import {
  ModuleFields,
  TextField,
  ChoiceField,
} from '@hubspot/cms-components/fields';
import { useScrollAnimation, animationStyles } from '../../hooks/useScrollAnimation';

interface ProofPoint {
  title: string;
  description: string;
  stats: string[];
}

const defaultContent: Record<string, { heading: string; subheading: string; proofPoints: ProofPoint[]; testimonial?: { quote: string; author: string; role: string } }> = {
  'higher-education': {
    heading: 'Higher Education: Retention and Belonging at Scale',
    subheading: 'Transform student success with scalable mentorship infrastructure.',
    proofPoints: [
      {
        title: 'Transform the Student Experience',
        description: 'Scale personalized support across the full student lifecycle—from first-year engagement to final job placement.',
        stats: ['+6% Retention Lift for program participants', '+8–19% Boost in Belonging', '$7.8M in Operational ROI delivered'],
      },
      {
        title: 'Elevate Career Readiness',
        description: 'Integrate alumni and industry experts to build career clarity and social capital for all learners.',
        stats: ['+30% Increase in Career Confidence', '45% Spike in Career Services Engagement'],
      },
    ],
  },
  'emerging-markets': {
    heading: 'Emerging Markets: Workforce & Talent Development',
    subheading: 'Build the workforce of tomorrow with structured mentorship.',
    proofPoints: [
      {
        title: 'Future-Proof Your Talent Pipeline',
        description: 'Use structured mentorship for early-career readiness, onboarding, and continuous upskilling across complex sectors.',
        stats: ['42% Increase in Intern-to-Full-Time Conversion', '2.5x More Likely to feel career-ready'],
      },
      {
        title: 'Accelerate Employee Retention',
        description: 'Embed identity-aligned mentorship to drive engagement and reduce early attrition among diverse and working professionals.',
        stats: ['90–92% Retention for partner programs (vs. 64% national avg)', '$20K+ in Savings per retained teacher for partner districts'],
      },
    ],
  },
  'strategic-partnerships': {
    heading: 'Strategic Partnerships: Scale and Credibility',
    subheading: 'Extend your impact through partnership infrastructure.',
    proofPoints: [
      {
        title: 'Integrate the Mentorship OS',
        description: 'Partner with us to embed mentorship infrastructure directly into your certification, apprenticeship, or workforce development initiatives.',
        stats: ['70% of Participants plan careers in critical skills gap sectors'],
      },
      {
        title: 'Unify Your Ecosystem',
        description: 'Mobilize industry associations and coalitions to drive multi-site adoption and consistent quality across member organizations.',
        stats: ['Identity-Aligned Matching driven by 10+ years of data and insights', 'Measurable Outcomes that satisfy funder and board requirements'],
      },
    ],
  },
};

export function Component({ fieldValues }: any) {
  const { elementRef, isVisible } = useScrollAnimation({ threshold: 0.15 });

  const segmentType = fieldValues.segment_type || 'higher-education';
  const content = defaultContent[segmentType] || defaultContent['higher-education'];

  const heading = fieldValues.heading || content.heading;
  const subheading = fieldValues.subheading || content.subheading;

  const proofPoints = (fieldValues.proof_points && fieldValues.proof_points.length > 0)
    ? fieldValues.proof_points.map((p: any) => ({
        title: p.title,
        description: p.description,
        stats: p.stats ? p.stats.split('|').map((s: string) => s.trim()) : [],
      }))
    : content.proofPoints;

  const testimonial = fieldValues.testimonial_quote
    ? {
        quote: fieldValues.testimonial_quote,
        author: fieldValues.testimonial_author,
        role: fieldValues.testimonial_role,
      }
    : null;

  // Alternate background based on segment type
  const bgStyles: Record<string, React.CSSProperties> = {
    'higher-education': {
      background: 'linear-gradient(180deg, #FFFBF8 0%, white 100%)',
    },
    'emerging-markets': {
      background: 'linear-gradient(180deg, white 0%, #FFFBF8 100%)',
    },
    'strategic-partnerships': {
      background: 'linear-gradient(180deg, #FFFBF8 0%, white 100%)',
    },
  };

  return (
    <section
      ref={elementRef as React.RefObject<HTMLElement>}
      id={segmentType}
      style={{
        padding: 'var(--section-padding-lg) var(--spacing-lg)',
        ...bgStyles[segmentType],
        ...animationStyles.subtleSlideUp(isVisible),
      }}
    >
      <div style={{ maxWidth: 'var(--max-width-xl)', margin: '0 auto' }}>
        {/* Header */}
        <div style={{ marginBottom: 'var(--spacing-3xl)' }}>
          <h2 style={{
            fontSize: 'var(--font-size-h2)',
            fontWeight: 500,
            color: 'var(--text-primary)',
            marginBottom: 'var(--spacing-sm)',
            fontFamily: 'var(--font-headline)',
            lineHeight: 'var(--line-height-tight)',
          }}>
            {heading}
          </h2>
          <p style={{
            fontSize: '1.15rem',
            color: 'var(--text-secondary)',
          }}>
            {subheading}
          </p>
        </div>

        {/* Proof Points Table */}
        <div style={{
          background: 'var(--bg-white)',
          borderRadius: 'var(--radius-xl)',
          boxShadow: 'var(--shadow-lg)',
          overflow: 'hidden',
          border: '1px solid var(--border-light)',
          marginBottom: testimonial ? 'var(--spacing-2xl)' : 0,
        }}>
          {/* Table Header */}
          <div style={{
            display: 'grid',
            gridTemplateColumns: '1fr 2fr 1.5fr',
            background: 'linear-gradient(135deg, #EF476F 0%, #F89F7B 100%)',
            padding: 'var(--spacing-md) var(--spacing-xl)',
            gap: 'var(--spacing-lg)',
          }} className="segment-detail-header">
            <style>{`
              @media (max-width: 768px) {
                .segment-detail-header,
                .segment-detail-row {
                  grid-template-columns: 1fr !important;
                }
              }
            `}</style>
            <div style={{
              color: 'white',
              fontWeight: 700,
              fontSize: '0.875rem',
              textTransform: 'uppercase',
              letterSpacing: '0.05em',
            }}>
              Subheading
            </div>
            <div style={{
              color: 'white',
              fontWeight: 700,
              fontSize: '0.875rem',
              textTransform: 'uppercase',
              letterSpacing: '0.05em',
            }}>
              Explainer Copy
            </div>
            <div style={{
              color: 'white',
              fontWeight: 700,
              fontSize: '0.875rem',
              textTransform: 'uppercase',
              letterSpacing: '0.05em',
            }}>
              Proof Points / Outcomes
            </div>
          </div>

          {/* Table Rows */}
          {proofPoints.map((point: ProofPoint, index: number) => (
            <div
              key={index}
              className="segment-detail-row"
              style={{
                display: 'grid',
                gridTemplateColumns: '1fr 2fr 1.5fr',
                padding: 'var(--spacing-xl)',
                gap: 'var(--spacing-lg)',
                borderBottom: index < proofPoints.length - 1 ? '1px solid var(--border-light)' : 'none',
                background: index % 2 === 0 ? 'white' : 'rgba(255, 251, 248, 0.5)',
                ...animationStyles.staggeredSubtle(isVisible, index * 0.15),
              }}
            >
              <div>
                <h3 style={{
                  fontSize: '1.1rem',
                  fontWeight: 500,
                  color: 'var(--text-coral)',
                  fontFamily: 'var(--font-headline)',
                  margin: 0,
                }}>
                  {point.title}
                </h3>
              </div>
              <div>
                <p style={{
                  fontSize: '1rem',
                  color: 'var(--text-secondary)',
                  lineHeight: 1.6,
                  margin: 0,
                }}>
                  {point.description}
                </p>
              </div>
              <div>
                <ul style={{
                  listStyle: 'none',
                  padding: 0,
                  margin: 0,
                }}>
                  {point.stats.map((stat: string, statIndex: number) => (
                    <li
                      key={statIndex}
                      style={{
                        fontSize: '0.95rem',
                        color: 'var(--text-primary)',
                        fontWeight: 600,
                        lineHeight: 1.5,
                        marginBottom: statIndex < point.stats.length - 1 ? '0.5rem' : 0,
                        paddingLeft: '1rem',
                        position: 'relative',
                      }}
                    >
                      <span style={{
                        position: 'absolute',
                        left: 0,
                        color: 'var(--text-coral)',
                      }}>
                        •
                      </span>
                      {stat}
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          ))}
        </div>

        {/* Testimonial */}
        {testimonial && (
          <div style={{
            background: 'linear-gradient(135deg, rgba(239, 71, 111, 0.05) 0%, rgba(248, 159, 123, 0.05) 100%)',
            borderRadius: 'var(--radius-xl)',
            padding: 'var(--spacing-2xl)',
            border: '1px solid rgba(239, 71, 111, 0.1)',
            ...animationStyles.fadeInUp(isVisible),
          }}>
            <div style={{
              fontSize: '3rem',
              color: 'var(--text-coral)',
              opacity: 0.3,
              fontFamily: 'Georgia, serif',
              lineHeight: 1,
              marginBottom: 'var(--spacing-md)',
            }}>
              "
            </div>
            <p style={{
              fontSize: '1.25rem',
              color: 'var(--text-secondary)',
              lineHeight: 1.7,
              fontStyle: 'italic',
              marginBottom: 'var(--spacing-lg)',
            }}>
              {testimonial.quote}
            </p>
            <div>
              <p style={{
                fontSize: '1rem',
                fontWeight: 700,
                color: 'var(--text-primary)',
                margin: 0,
              }}>
                — {testimonial.author}
              </p>
              <p style={{
                fontSize: '0.9rem',
                color: 'var(--text-muted)',
                margin: 0,
              }}>
                {testimonial.role}
              </p>
            </div>
          </div>
        )}
      </div>
    </section>
  );
}

export const fields: any = [
  {
    type: 'choice',
    name: 'segment_type',
    label: 'Segment Type',
    choices: [
      ['higher-education', 'Higher Education'],
      ['emerging-markets', 'Emerging Markets'],
      ['strategic-partnerships', 'Strategic Partnerships'],
    ],
    default: 'higher-education',
  },
  {
    type: 'text',
    name: 'heading',
    label: 'Section Heading (optional - uses default if empty)',
    default: '',
  },
  {
    type: 'text',
    name: 'subheading',
    label: 'Subheading (optional - uses default if empty)',
    default: '',
  },
  {
    type: 'group',
    name: 'proof_points',
    label: 'Proof Points (leave empty for defaults)',
    occurrence: {
      min: 0,
      max: 4,
      default: 0,
    },
    children: [
      {
        type: 'text',
        name: 'title',
        label: 'Title',
        default: 'Transform the Student Experience',
      },
      {
        type: 'text',
        name: 'description',
        label: 'Description',
        default: 'Scale personalized support across the full student lifecycle.',
      },
      {
        type: 'text',
        name: 'stats',
        label: 'Stats (separate with | character)',
        default: '+6% Retention Lift | +8–19% Boost in Belonging',
      },
    ],
  },
  {
    type: 'text',
    name: 'testimonial_quote',
    label: 'Testimonial Quote (optional)',
    default: '',
  },
  {
    type: 'text',
    name: 'testimonial_author',
    label: 'Testimonial Author',
    default: '',
  },
  {
    type: 'text',
    name: 'testimonial_role',
    label: 'Testimonial Role/Title',
    default: '',
  },
];

export const meta = {
  label: 'Segment Detail',
};
