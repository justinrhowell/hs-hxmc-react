import React from 'react';
import {
  ModuleFields,
  TextField,
} from '@hubspot/cms-components/fields';
import { ScrollAnimationScript } from '../../shared/ScrollAnimationScript';
import mentorProfilesSvg from '../../../assets/Mentor Profiles.svg';

const defaultPillars = [
  {
    title: 'Human Connection',
    mechanism: 'Proprietary matching algorithm uses over 80 research-backed variables to go far beyond surface-level networking.',
    value: 'Real Support, not just introductions.',
  },
  {
    title: 'Peer Insights',
    mechanism: 'Generates deep, authentic insight into stress, confidence gaps, or career anxiety—data surveys alone miss.',
    value: 'Actionable Data from a safe sharing space.',
  },
  {
    title: 'Robust Assessment',
    mechanism: 'Measures persistence, belonging, and readiness and ties those signals back to actual learner or employee outcomes.',
    value: 'Actionable Intelligence and quantifiable results.',
  },
  {
    title: 'Optimized Administrative Capacity',
    mechanism: 'Mobilizes peers, mentors, and alumni—backed by the platform—to scale impact without staff overwhelm.',
    value: 'Do More With Less and scale impact easily.',
  },
];

// Geometric shape icons matching brand style
const pillarIcons = [
  // Circle - Human Connection
  <svg key="circle" width="20" height="20" viewBox="0 0 20 20" fill="none">
    <circle cx="10" cy="10" r="8" stroke="var(--text-coral)" strokeWidth="2.5" fill="none" />
  </svg>,
  // Diamond - Peer Insights
  <svg key="diamond" width="20" height="20" viewBox="0 0 20 20" fill="none">
    <rect x="10" y="2" width="11" height="11" rx="2" transform="rotate(45 10 2)" stroke="var(--text-coral)" strokeWidth="2.5" fill="none" />
  </svg>,
  // Triangle - Robust Assessment
  <svg key="triangle" width="20" height="20" viewBox="0 0 20 20" fill="none">
    <path d="M10 3L18 17H2L10 3Z" stroke="var(--text-coral)" strokeWidth="2.5" strokeLinejoin="round" fill="none" />
  </svg>,
  // Square - Administrative Capacity
  <svg key="square" width="20" height="20" viewBox="0 0 20 20" fill="none">
    <rect x="3" y="3" width="14" height="14" rx="2" stroke="var(--text-coral)" strokeWidth="2.5" fill="none" />
  </svg>,
];

export function Component({ fieldValues }: any) {
  const pillars = (fieldValues.pillars && fieldValues.pillars.length > 0)
    ? fieldValues.pillars.map((p: any) => ({
        title: p.title,
        mechanism: p.mechanism,
        value: p.value,
      }))
    : defaultPillars;

  const imagePosition = fieldValues.image_position || 'right';
  const showTestimonial = fieldValues.show_testimonial !== false;
  const testimonialQuote = fieldValues.testimonial_quote || '10+ years of mentorship data: 500K learners, 200K mentors, 200 partners.';
  const testimonialAuthor = fieldValues.testimonial_author || '';

  return (
    <>
    <style>{`
      @media (max-width: 968px) {
        .pillars-content {
          grid-template-columns: 1fr !important;
        }
        .pillars-left-col,
        .pillars-right-col {
          order: unset !important;
        }
        .pillars-image-col {
          order: -1 !important;
        }
      }
    `}</style>
    <ScrollAnimationScript />
    <section
      className="scroll-animate"
      style={{
        padding: 'var(--section-padding-lg) var(--spacing-lg)',
        background: 'var(--bg-white)',
      }}
    >
      <div style={{ maxWidth: 'var(--max-width-xl)', margin: '0 auto' }}>
        <div style={{
          display: 'grid',
          gridTemplateColumns: '1fr 1fr',
          gap: 'var(--spacing-3xl)',
          alignItems: 'start',
        }} className="pillars-content">
          {/* Text Column */}
          <div
            className={imagePosition === 'left' ? 'pillars-right-col' : 'pillars-left-col'}
            style={{ order: imagePosition === 'left' ? 2 : 1 }}
          >
            {/* Section Title */}
            <h2 style={{
              fontSize: 'var(--font-size-h2)',
              fontWeight: 500,
              lineHeight: 'var(--line-height-tight)',
              letterSpacing: 'var(--letter-spacing-tight)',
              marginBottom: 'var(--spacing-sm)',
              color: 'var(--text-primary)',
              fontFamily: 'var(--font-headline)',
            }}>
              {fieldValues.heading || 'The Proven Engine: Four Pillars of Value'}
            </h2>

            <p style={{
              fontSize: 'var(--font-size-body-lg)',
              fontWeight: 500,
              lineHeight: 'var(--line-height-normal)',
              marginBottom: 'var(--spacing-xl)',
              color: 'var(--text-secondary)',
              fontFamily: 'var(--font-headline)',
            }}>
              {fieldValues.subtitle || 'Mentorship at scale becomes a strategic advantage.'}
            </p>

            {/* Pillars List */}
            <div style={{ display: 'flex', flexDirection: 'column', gap: 'var(--spacing-xl)' }}>
              {pillars.map((pillar: any, index: number) => (
                <div
                  key={index}
                  style={{ display: 'flex', gap: 'var(--spacing-md)', alignItems: 'flex-start' }}
                  className="scroll-animate"
                  data-delay={index * 100}
                >
                  <div style={{
                    flexShrink: 0,
                    width: '40px',
                    height: '40px',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    background: 'rgba(239, 71, 111, 0.08)',
                    borderRadius: 'var(--radius-md)',
                  }}>
                    {pillarIcons[index % pillarIcons.length]}
                  </div>
                  <div>
                    <h3 style={{
                      fontSize: 'var(--font-size-large)',
                      fontWeight: 500,
                      color: 'var(--text-primary)',
                      marginBottom: 'var(--spacing-xs)',
                      fontFamily: 'var(--font-headline)',
                    }}>
                      {pillar.title}
                    </h3>
                    <p style={{
                      fontSize: 'var(--font-size-base)',
                      color: 'var(--text-muted)',
                      lineHeight: 'var(--line-height-normal)',
                      margin: 0,
                      marginBottom: 'var(--spacing-sm)',
                    }}>
                      {pillar.mechanism}
                    </p>
                    {/* Outcome as styled bullet point */}
                    <div style={{
                      display: 'flex',
                      alignItems: 'flex-start',
                      gap: 'var(--spacing-sm)',
                    }}>
                      <span style={{
                        color: 'var(--text-coral)',
                        fontWeight: 700,
                        fontSize: 'var(--font-size-body-lg)',
                        lineHeight: 1,
                      }}>→</span>
                      <span style={{
                        fontSize: 'var(--font-size-base)',
                        fontWeight: 600,
                        color: 'var(--text-coral)',
                        lineHeight: 'var(--line-height-tight)',
                      }}>
                        {pillar.value}
                      </span>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Image Column */}
          <div
            className={`pillars-image-col ${imagePosition === 'left' ? 'pillars-left-col' : 'pillars-right-col'}`}
            style={{
              order: imagePosition === 'left' ? 1 : 2,
              textAlign: 'center',
            }}
          >
            <div className="scroll-animate" data-delay="200">
              <img
                src={fieldValues.custom_image?.src || mentorProfilesSvg}
                alt={fieldValues.custom_image?.alt || "Mentor profiles illustration showing diverse mentors and mentees connected through the platform"}
                style={{
                  width: '100%',
                  height: 'auto',
                  maxWidth: '500px',
                  display: 'block',
                  margin: '0 auto',
                }}
              />
            </div>

            {/* Testimonial/Stat Card */}
            {showTestimonial && (
              <div
                className="scroll-animate"
                data-delay="300"
                style={{
                  background: 'var(--gradient-hero)',
                  borderRadius: 'var(--radius-xl)',
                  padding: 'var(--spacing-xl)',
                  marginTop: 'var(--spacing-xl)',
                  maxWidth: '450px',
                  marginLeft: 'auto',
                  marginRight: 'auto',
                  textAlign: 'center',
                }}
              >
                <p style={{
                  fontSize: 'var(--font-size-body)',
                  fontWeight: 600,
                  color: 'var(--text-coral)',
                  lineHeight: 'var(--line-height-relaxed)',
                  fontFamily: 'var(--font-headline)',
                  margin: 0,
                  fontStyle: testimonialAuthor ? 'italic' : 'normal',
                }}>
                  {testimonialAuthor ? `"${testimonialQuote}"` : testimonialQuote}
                </p>
                {testimonialAuthor && (
                  <p style={{
                    fontSize: 'var(--font-size-small)',
                    fontWeight: 600,
                    color: 'var(--text-muted)',
                    marginTop: 'var(--spacing-md)',
                    margin: 'var(--spacing-md) 0 0 0',
                  }}>
                    {testimonialAuthor}
                  </p>
                )}
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
    type: 'image',
    name: 'custom_image',
    label: 'Section Image (upload custom image)',
  },
  {
    type: 'text',
    name: 'heading',
    label: 'Section Heading',
    default: 'The Proven Engine: Four Pillars of Value',
  },
  {
    type: 'text',
    name: 'subtitle',
    label: 'Subtitle',
    default: 'Mentorship at scale becomes a strategic advantage.',
  },
  {
    type: 'choice',
    name: 'image_position',
    label: 'Image Position',
    choices: [
      ['left', 'Left'],
      ['right', 'Right'],
    ],
    default: 'right',
  },
  {
    type: 'boolean',
    name: 'show_testimonial',
    label: 'Show Testimonial/Stat Card',
    default: true,
  },
  {
    type: 'text',
    name: 'testimonial_quote',
    label: 'Testimonial/Stat Text',
    default: '10+ years of mentorship data: 500K learners, 200K mentors, 200 partners.',
  },
  {
    type: 'text',
    name: 'testimonial_author',
    label: 'Author (leave empty for stat display)',
    default: '',
  },
  {
    type: 'group',
    name: 'pillars',
    label: 'Pillars',
    occurrence: {
      min: 0,
      max: 6,
      default: 0,
    },
    children: [
      {
        type: 'text',
        name: 'title',
        label: 'Pillar Title',
        default: 'Human Connection',
      },
      {
        type: 'text',
        name: 'mechanism',
        label: 'Mechanism & Value',
        default: 'Proprietary matching algorithm uses over 80 research-backed variables.',
      },
      {
        type: 'text',
        name: 'value',
        label: 'Outcome',
        default: 'Real Support, not just introductions.',
      },
    ],
  },
];

export const meta = {
  label: 'Four Pillars',
};
