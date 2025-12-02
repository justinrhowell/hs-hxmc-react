import React from 'react';
import {
  ModuleFields,
  TextField,
} from '@hubspot/cms-components/fields';
import { useScrollAnimation, animationStyles } from '../../hooks/useScrollAnimation';

const defaultPillars = [
  {
    icon: 'people',
    title: 'Human Connection Amplified',
    description: "We don't replace human connection — we amplify it.",
  },
  {
    icon: 'ai',
    title: 'AI-Guided Support',
    description: 'Our AI agents help mentors, coaches, supervisors, and advisors show up with more consistency, clarity, and confidence.',
  },
  {
    icon: 'insights',
    title: 'Actionable Intelligence',
    description: 'Our intelligence layer turns conversations into actionable insights for leaders across education and workforce systems.',
  },
  {
    icon: 'network',
    title: 'Unified Network',
    description: 'Our network unites campuses, communities, and employers through relationships that meaningfully change lives.',
  },
];

const icons: Record<string, React.ReactNode> = {
  people: (
    <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2"/>
      <circle cx="9" cy="7" r="4"/>
      <path d="M23 21v-2a4 4 0 0 0-3-3.87"/>
      <path d="M16 3.13a4 4 0 0 1 0 7.75"/>
    </svg>
  ),
  ai: (
    <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <path d="M12 2a2 2 0 0 1 2 2c0 .74-.4 1.39-1 1.73V7h1a7 7 0 0 1 7 7h1a1 1 0 0 1 1 1v3a1 1 0 0 1-1 1h-1v1a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-1H2a1 1 0 0 1-1-1v-3a1 1 0 0 1 1-1h1a7 7 0 0 1 7-7h1V5.73c-.6-.34-1-.99-1-1.73a2 2 0 0 1 2-2z"/>
      <circle cx="8" cy="14" r="1"/>
      <circle cx="16" cy="14" r="1"/>
    </svg>
  ),
  insights: (
    <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <path d="M21 16V8a2 2 0 0 0-1-1.73l-7-4a2 2 0 0 0-2 0l-7 4A2 2 0 0 0 3 8v8a2 2 0 0 0 1 1.73l7 4a2 2 0 0 0 2 0l7-4A2 2 0 0 0 21 16z"/>
      <circle cx="12" cy="12" r="4"/>
    </svg>
  ),
  network: (
    <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <circle cx="12" cy="5" r="3"/>
      <circle cx="19" cy="19" r="3"/>
      <circle cx="5" cy="19" r="3"/>
      <line x1="12" y1="8" x2="12" y2="12"/>
      <line x1="12" y1="12" x2="5" y2="16"/>
      <line x1="12" y1="12" x2="19" y2="16"/>
    </svg>
  ),
};

export function Component({ fieldValues }: any) {
  const { elementRef, isVisible } = useScrollAnimation({ threshold: 0.15 });

  const pillars = (fieldValues.pillars && fieldValues.pillars.length > 0)
    ? fieldValues.pillars.map((p: any) => ({
        icon: p.icon || 'people',
        title: p.title,
        description: p.description,
      }))
    : defaultPillars;

  return (
    <section
      ref={elementRef as React.RefObject<HTMLElement>}
      style={{
        padding: 'var(--section-padding-lg) var(--spacing-lg)',
        background: 'linear-gradient(135deg, #1a1a2e 0%, #16213e 100%)',
        position: 'relative',
        overflow: 'hidden',
        ...animationStyles.subtleSlideUp(isVisible),
      }}
    >
      {/* Background pattern */}
      <div style={{
        position: 'absolute',
        inset: 0,
        backgroundImage: 'radial-gradient(circle at 2px 2px, rgba(255,255,255,0.03) 1px, transparent 0)',
        backgroundSize: '40px 40px',
        pointerEvents: 'none',
      }} />

      <div style={{ maxWidth: 'var(--max-width-xl)', margin: '0 auto', position: 'relative', zIndex: 1 }}>
        {/* Header */}
        <div style={{ textAlign: 'center', marginBottom: 'var(--spacing-3xl)' }}>
          <div style={{
            display: 'inline-flex',
            alignItems: 'center',
            padding: '0.5rem 1.25rem',
            background: 'rgba(239, 71, 111, 0.15)',
            borderRadius: 'var(--radius-full)',
            fontSize: '0.875rem',
            fontWeight: 600,
            color: '#F89F7B',
            marginBottom: 'var(--spacing-lg)',
            border: '1px solid rgba(248, 159, 123, 0.2)',
          }}>
            How We Work
          </div>
          <h2 style={{
            fontSize: 'var(--font-size-h2)',
            fontWeight: 500,
            color: 'white',
            marginBottom: 'var(--spacing-md)',
            fontFamily: 'var(--font-headline)',
            lineHeight: 'var(--line-height-tight)',
          }}>
            {fieldValues.heading || 'Powered by people. Guided by AI. Designed for impact.'}
          </h2>
        </div>

        {/* Pillars Grid */}
        <div style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(4, 1fr)',
          gap: 'var(--spacing-xl)',
          marginBottom: 'var(--spacing-3xl)',
        }} className="how-we-work-grid">
          <style>{`
            @media (max-width: 1024px) {
              .how-we-work-grid {
                grid-template-columns: repeat(2, 1fr) !important;
              }
            }
            @media (max-width: 600px) {
              .how-we-work-grid {
                grid-template-columns: 1fr !important;
              }
            }
          `}</style>

          {pillars.map((pillar: any, index: number) => (
            <div
              key={index}
              style={{
                background: 'rgba(255, 255, 255, 0.05)',
                borderRadius: 'var(--radius-xl)',
                padding: 'var(--spacing-xl)',
                border: '1px solid rgba(255, 255, 255, 0.1)',
                backdropFilter: 'blur(10px)',
                ...animationStyles.staggeredSubtle(isVisible, index * 0.1),
              }}
            >
              <div style={{
                width: '56px',
                height: '56px',
                background: 'linear-gradient(135deg, rgba(239, 71, 111, 0.2) 0%, rgba(248, 159, 123, 0.2) 100%)',
                borderRadius: 'var(--radius-lg)',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                marginBottom: 'var(--spacing-lg)',
                color: '#F89F7B',
              }}>
                {icons[pillar.icon] || icons.people}
              </div>
              <h3 style={{
                fontSize: '1.1rem',
                fontWeight: 500,
                color: 'white',
                marginBottom: 'var(--spacing-sm)',
                fontFamily: 'var(--font-headline)',
              }}>
                {pillar.title}
              </h3>
              <p style={{
                fontSize: '0.95rem',
                color: 'rgba(255, 255, 255, 0.7)',
                lineHeight: 1.6,
                margin: 0,
              }}>
                {pillar.description}
              </p>
            </div>
          ))}
        </div>

        {/* Bottom Statement */}
        <div style={{
          textAlign: 'center',
          ...animationStyles.fadeInUp(isVisible),
        }}>
          <div style={{
            background: 'linear-gradient(135deg, rgba(239, 71, 111, 0.15) 0%, rgba(248, 159, 123, 0.15) 100%)',
            borderRadius: 'var(--radius-xl)',
            padding: 'var(--spacing-2xl)',
            border: '1px solid rgba(248, 159, 123, 0.2)',
            maxWidth: 'var(--max-width-prose)',
            margin: '0 auto',
          }}>
            <p style={{
              fontSize: '1.35rem',
              color: 'white',
              fontWeight: 600,
              lineHeight: 'var(--line-height-normal)',
              margin: 0,
              fontFamily: 'var(--font-headline)',
            }}>
              {fieldValues.conclusion || 'Belonging, readiness, and opportunity become predictable — not accidental.'}
            </p>
          </div>
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
    default: 'Powered by people. Guided by AI. Designed for impact.',
  },
  {
    type: 'text',
    name: 'conclusion',
    label: 'Bottom Statement',
    default: 'Belonging, readiness, and opportunity become predictable — not accidental.',
  },
  {
    type: 'group',
    name: 'pillars',
    label: 'Work Pillars',
    occurrence: {
      min: 0,
      max: 6,
      default: 0,
    },
    children: [
      {
        type: 'choice',
        name: 'icon',
        label: 'Icon',
        choices: [
          ['people', 'People'],
          ['ai', 'AI'],
          ['insights', 'Insights'],
          ['network', 'Network'],
        ],
        default: 'people',
      },
      {
        type: 'text',
        name: 'title',
        label: 'Title',
        default: 'Human Connection Amplified',
      },
      {
        type: 'text',
        name: 'description',
        label: 'Description',
        default: "We don't replace human connection — we amplify it.",
      },
    ],
  },
];

export const meta = {
  label: 'How We Work',
};
