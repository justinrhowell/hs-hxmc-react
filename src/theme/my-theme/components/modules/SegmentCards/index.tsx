import React from 'react';
import {
  ModuleFields,
  TextField,
} from '@hubspot/cms-components/fields';
import { useScrollAnimation, animationStyles } from '../../hooks/useScrollAnimation';

const defaultSegments = [
  {
    title: 'Higher Education',
    description: 'Scalable mentorship with streamlined program launches, automated logistics, and without taxing staff.',
    link_text: 'Learn more',
    link_url: '#higher-education',
    icon: 'graduation',
  },
  {
    title: 'Emerging Markets',
    description: 'Accelerate staff retention and build durable skills for the AI era, while improving ROI.',
    link_text: 'Learn more',
    link_url: '#emerging-markets',
    icon: 'trending',
  },
  {
    title: 'Strategic Partnerships',
    description: 'Deliver scalable workforce pipelines and embed essential infrastructure across member organizations.',
    link_text: 'Learn more',
    link_url: '#partnerships',
    icon: 'handshake',
  },
];

const iconPaths: Record<string, string> = {
  graduation: 'M12 3L1 9l4 2.18v6L12 21l7-3.82v-6l2-1.09V17h2V9L12 3zm6.82 6L12 12.72 5.18 9 12 5.28 18.82 9zM17 15.99l-5 2.73-5-2.73v-3.72L12 15l5-2.73v3.72z',
  trending: 'M16 6l2.29 2.29-4.88 4.88-4-4L2 16.59 3.41 18l6-6 4 4 6.3-6.29L22 12V6h-6z',
  handshake: 'M12.22 19.85c-.18.18-.5.21-.71 0L6.91 14.3a2.5 2.5 0 010-3.54l3.54-3.54a2.5 2.5 0 013.54 0l4.6 4.6c.18.18.18.5 0 .71l-6.37 7.32zm8.49-10.92l-1.41 1.41-4.6-4.6a4.5 4.5 0 00-6.36 0L4.8 9.28l-1.41-1.41L6.93 4.33a6.5 6.5 0 019.19 0l4.59 4.6z',
};

export function Component({ fieldValues }: any) {
  const { elementRef, isVisible } = useScrollAnimation({ threshold: 0.15 });

  const segments = (fieldValues.segments && fieldValues.segments.length > 0)
    ? fieldValues.segments.map((s: any) => ({
        title: s.title,
        description: s.description,
        link_text: s.link_text || 'Learn more',
        link_url: s.link_url || '#',
        icon: s.icon || 'graduation',
      }))
    : defaultSegments;

  return (
    <section
      ref={elementRef as React.RefObject<HTMLElement>}
      style={{
        padding: 'var(--section-padding-lg) var(--spacing-lg)',
        background: 'var(--gradient-hero)',
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
            {fieldValues.heading || 'Mentorship connects people to careers.'}
          </h2>
          <p style={{
            fontSize: '1.15rem',
            color: 'var(--text-secondary)',
            maxWidth: 'var(--max-width-prose)',
            margin: '0 auto',
          }}>
            {fieldValues.subtitle || 'Our platform is engineered to serve the unique needs of every segment, ensuring belonging, retention, and career readiness across the entire learning-to-career journey.'}
          </p>
        </div>

        {/* Segment Cards */}
        <div style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(3, 1fr)',
          gap: 'var(--spacing-xl)',
        }} className="segment-cards-grid">
          <style>{`
            @media (max-width: 900px) {
              .segment-cards-grid {
                grid-template-columns: 1fr !important;
              }
            }
          `}</style>
          {segments.map((segment: any, index: number) => (
            <div
              key={index}
              style={{
                background: 'var(--bg-white)',
                borderRadius: 'var(--radius-xl)',
                padding: 'var(--card-padding-lg)',
                boxShadow: 'var(--shadow-md)',
                border: '2px solid var(--border-light)',
                transition: 'var(--transition-bounce)',
                cursor: 'pointer',
                position: 'relative',
                overflow: 'hidden',
                ...animationStyles.staggeredSubtle(isVisible, index * 0.1),
              }}
            >
              {/* Icon */}
              <div style={{
                width: '64px',
                height: '64px',
                background: 'linear-gradient(135deg, rgba(239, 71, 111, 0.1) 0%, rgba(248, 159, 123, 0.1) 100%)',
                borderRadius: 'var(--radius-lg)',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                marginBottom: 'var(--spacing-lg)',
              }}>
                <svg width="32" height="32" viewBox="0 0 24 24" fill="var(--text-coral)">
                  <path d={iconPaths[segment.icon] || iconPaths.graduation} />
                </svg>
              </div>

              <h3 style={{
                fontSize: '1.5rem',
                fontWeight: 700,
                color: 'var(--text-primary)',
                marginBottom: 'var(--spacing-md)',
                fontFamily: 'var(--font-headline)',
              }}>
                {segment.title}
              </h3>

              <p style={{
                fontSize: '1rem',
                color: 'var(--text-secondary)',
                lineHeight: 1.7,
                marginBottom: 'var(--spacing-lg)',
              }}>
                {segment.description}
              </p>

              <a
                href={segment.link_url}
                style={{
                  display: 'inline-flex',
                  alignItems: 'center',
                  gap: '0.5rem',
                  color: 'var(--text-coral)',
                  textDecoration: 'none',
                  fontSize: '1rem',
                  fontWeight: 600,
                  transition: 'var(--transition-medium)',
                }}
              >
                {segment.link_text} <span style={{ fontSize: '1.25rem' }}>→</span>
              </a>
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
    default: 'Mentorship connects people to careers.',
  },
  {
    type: 'text',
    name: 'subtitle',
    label: 'Subtitle',
    default: 'Our platform is engineered to serve the unique needs of every segment, ensuring belonging, retention, and career readiness across the entire learning-to-career journey.',
  },
  {
    type: 'group',
    name: 'segments',
    label: 'Segments',
    occurrence: {
      min: 0,
      max: 6,
      default: 0,
    },
    children: [
      {
        type: 'text',
        name: 'title',
        label: 'Segment Title',
        default: 'Higher Education',
      },
      {
        type: 'text',
        name: 'description',
        label: 'Description',
        default: 'Scalable mentorship with streamlined program launches.',
      },
      {
        type: 'text',
        name: 'link_text',
        label: 'Link Text',
        default: 'Learn more',
      },
      {
        type: 'text',
        name: 'link_url',
        label: 'Link URL',
        default: '#',
      },
      {
        type: 'choice',
        name: 'icon',
        label: 'Icon',
        choices: [
          ['graduation', 'Graduation Cap'],
          ['trending', 'Trending Up'],
          ['handshake', 'Handshake'],
        ],
        default: 'graduation',
      },
    ],
  },
];

export const meta = {
  label: 'Segment Cards',
};
