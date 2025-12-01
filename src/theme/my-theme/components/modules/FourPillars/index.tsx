import React from 'react';
import {
  ModuleFields,
  TextField,
} from '@hubspot/cms-components/fields';
import { useScrollAnimation, animationStyles } from '../../hooks/useScrollAnimation';

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

export function Component({ fieldValues }: any) {
  const { elementRef, isVisible } = useScrollAnimation({ threshold: 0.15 });

  const pillars = (fieldValues.pillars && fieldValues.pillars.length > 0)
    ? fieldValues.pillars.map((p: any) => ({
        title: p.title,
        mechanism: p.mechanism,
        value: p.value,
      }))
    : defaultPillars;

  return (
    <section
      ref={elementRef as React.RefObject<HTMLElement>}
      style={{
        padding: 'var(--section-padding-lg) var(--spacing-lg)',
        background: 'linear-gradient(180deg, white 0%, #FFFBF8 50%, white 100%)',
        backgroundImage: 'var(--pattern-dots)',
        backgroundSize: 'var(--pattern-dots-size)',
        ...animationStyles.subtleSlideUp(isVisible),
      }}
    >
      <div style={{ maxWidth: 'var(--max-width-xl)', margin: '0 auto' }}>
        {/* Header */}
        <div style={{ textAlign: 'center', marginBottom: 'var(--spacing-3xl)' }}>
          <h2 style={{
            fontSize: 'var(--font-size-h2)',
            fontWeight: 700,
            color: 'var(--text-primary)',
            marginBottom: 'var(--spacing-md)',
            fontFamily: 'var(--font-headline)',
            lineHeight: 'var(--line-height-tight)',
          }}>
            {fieldValues.heading || 'The Proven Engine: Four Pillars of Value'}
          </h2>
          <p style={{
            fontSize: '1.15rem',
            color: 'var(--text-secondary)',
            maxWidth: 'var(--max-width-prose)',
            margin: '0 auto',
          }}>
            {fieldValues.subtitle || 'Mentorship at scale becomes a strategic advantage.'}
          </p>
        </div>

        {/* Table-style layout */}
        <div style={{
          background: 'var(--bg-white)',
          borderRadius: 'var(--radius-xl)',
          boxShadow: 'var(--shadow-lg)',
          overflow: 'hidden',
          border: '1px solid var(--border-light)',
        }}>
          {/* Table Header */}
          <div style={{
            display: 'grid',
            gridTemplateColumns: '1fr 2fr 1.5fr',
            background: 'linear-gradient(135deg, #EF476F 0%, #F89F7B 100%)',
            padding: 'var(--spacing-lg) var(--spacing-xl)',
            gap: 'var(--spacing-lg)',
          }}>
            <div style={{
              color: 'white',
              fontWeight: 700,
              fontSize: '1rem',
              textTransform: 'uppercase',
              letterSpacing: '0.05em',
            }}>
              Pillar
            </div>
            <div style={{
              color: 'white',
              fontWeight: 700,
              fontSize: '1rem',
              textTransform: 'uppercase',
              letterSpacing: '0.05em',
            }}>
              Mechanism & Value
            </div>
            <div style={{
              color: 'white',
              fontWeight: 700,
              fontSize: '1rem',
              textTransform: 'uppercase',
              letterSpacing: '0.05em',
            }}>
              Outcome
            </div>
          </div>

          {/* Table Rows */}
          {pillars.map((pillar: any, index: number) => (
            <div
              key={index}
              style={{
                display: 'grid',
                gridTemplateColumns: '1fr 2fr 1.5fr',
                padding: 'var(--spacing-xl)',
                gap: 'var(--spacing-lg)',
                borderBottom: index < pillars.length - 1 ? '1px solid var(--border-light)' : 'none',
                background: index % 2 === 0 ? 'white' : 'rgba(255, 251, 248, 0.5)',
                transition: 'var(--transition-medium)',
                ...animationStyles.staggeredSubtle(isVisible, index * 0.1),
              }}
            >
              <div>
                <h3 style={{
                  fontSize: '1.1rem',
                  fontWeight: 700,
                  color: 'var(--text-coral)',
                  fontFamily: 'var(--font-headline)',
                  margin: 0,
                }}>
                  {pillar.title}
                </h3>
              </div>
              <div>
                <p style={{
                  fontSize: '1rem',
                  color: 'var(--text-secondary)',
                  lineHeight: 1.6,
                  margin: 0,
                }}>
                  {pillar.mechanism}
                </p>
              </div>
              <div>
                <p style={{
                  fontSize: '1rem',
                  color: 'var(--text-primary)',
                  fontWeight: 600,
                  lineHeight: 1.6,
                  margin: 0,
                  background: 'rgba(239, 71, 111, 0.08)',
                  padding: '0.75rem 1rem',
                  borderRadius: 'var(--radius-md)',
                  borderLeft: '3px solid var(--text-coral)',
                }}>
                  {pillar.value}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export const fields: any = [
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
