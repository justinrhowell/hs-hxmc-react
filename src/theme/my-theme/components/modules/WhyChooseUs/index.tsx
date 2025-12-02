import React from 'react';
import {
  ModuleFields,
  TextField,
} from '@hubspot/cms-components/fields';
import { useScrollAnimation, animationStyles } from '../../hooks/useScrollAnimation';

const defaultFeatures = [
  {
    title: 'Strategic Infrastructure',
    description: 'Secure the only enterprise system for truly comprehensive success.',
  },
  {
    title: 'Predictive Intelligence',
    description: 'Prevent potential issues and attrition risks with real-time, actionable data.',
  },
  {
    title: 'Measurable ROI',
    description: 'Turn every interaction into actionable data for predicting retention and driving strategy.',
  },
  {
    title: 'Human-Centered Scale',
    description: 'Use AI to amplify, not replace, the irreplaceable value of human connection.',
  },
];

export function Component({ fieldValues }: any) {
  const { elementRef, isVisible } = useScrollAnimation({ threshold: 0.15 });

  const features = (fieldValues.features && fieldValues.features.length > 0)
    ? fieldValues.features.map((f: any) => ({
        title: f.title,
        description: f.description,
      }))
    : defaultFeatures;

  // Position features at different points around the constellation
  const positions = [
    { top: '15%', left: '15%' },
    { top: '15%', right: '15%' },
    { bottom: '20%', left: '10%' },
    { bottom: '20%', right: '10%' },
  ];

  return (
    <section
      ref={elementRef as React.RefObject<HTMLElement>}
      style={{
        padding: 'var(--section-padding-lg) var(--spacing-lg)',
        background: 'linear-gradient(180deg, #1a1a2e 0%, #16213e 100%)',
        position: 'relative',
        overflow: 'hidden',
        minHeight: '700px',
        ...animationStyles.subtleSlideUp(isVisible),
      }}
    >
      {/* Constellation SVG Background */}
      <svg
        style={{
          position: 'absolute',
          top: '50%',
          left: '50%',
          transform: 'translate(-50%, -50%)',
          width: '100%',
          height: '100%',
          maxWidth: '1000px',
          opacity: 0.6,
          pointerEvents: 'none',
        }}
        viewBox="0 0 800 600"
        preserveAspectRatio="xMidYMid meet"
      >
        <defs>
          <linearGradient id="lineGradientDark" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" style={{ stopColor: '#EF476F', stopOpacity: 0.6 }} />
            <stop offset="100%" style={{ stopColor: '#F89F7B', stopOpacity: 0.3 }} />
          </linearGradient>
          <filter id="glowDark">
            <feGaussianBlur stdDeviation="4" result="coloredBlur"/>
            <feMerge>
              <feMergeNode in="coloredBlur"/>
              <feMergeNode in="SourceGraphic"/>
            </feMerge>
          </filter>
        </defs>

        {/* Constellation lines */}
        <line x1="100" y1="150" x2="400" y2="300" stroke="url(#lineGradientDark)" strokeWidth="1.5">
          <animate attributeName="opacity" values="0.3;0.7;0.3" dur="4s" repeatCount="indefinite" />
        </line>
        <line x1="700" y1="150" x2="400" y2="300" stroke="url(#lineGradientDark)" strokeWidth="1.5">
          <animate attributeName="opacity" values="0.4;0.8;0.4" dur="5s" repeatCount="indefinite" />
        </line>
        <line x1="100" y1="450" x2="400" y2="300" stroke="url(#lineGradientDark)" strokeWidth="1.5">
          <animate attributeName="opacity" values="0.3;0.6;0.3" dur="4.5s" repeatCount="indefinite" />
        </line>
        <line x1="700" y1="450" x2="400" y2="300" stroke="url(#lineGradientDark)" strokeWidth="1.5">
          <animate attributeName="opacity" values="0.4;0.7;0.4" dur="3.5s" repeatCount="indefinite" />
        </line>
        <line x1="100" y1="150" x2="100" y2="450" stroke="url(#lineGradientDark)" strokeWidth="1">
          <animate attributeName="opacity" values="0.2;0.5;0.2" dur="6s" repeatCount="indefinite" />
        </line>
        <line x1="700" y1="150" x2="700" y2="450" stroke="url(#lineGradientDark)" strokeWidth="1">
          <animate attributeName="opacity" values="0.2;0.5;0.2" dur="5.5s" repeatCount="indefinite" />
        </line>
        <line x1="100" y1="150" x2="700" y2="150" stroke="url(#lineGradientDark)" strokeWidth="1">
          <animate attributeName="opacity" values="0.2;0.4;0.2" dur="7s" repeatCount="indefinite" />
        </line>
        <line x1="100" y1="450" x2="700" y2="450" stroke="url(#lineGradientDark)" strokeWidth="1">
          <animate attributeName="opacity" values="0.2;0.4;0.2" dur="6.5s" repeatCount="indefinite" />
        </line>

        {/* Star nodes */}
        <circle cx="100" cy="150" r="8" fill="#EF476F" filter="url(#glowDark)">
          <animate attributeName="r" values="6;10;6" dur="3s" repeatCount="indefinite" />
        </circle>
        <circle cx="700" cy="150" r="8" fill="#F89F7B" filter="url(#glowDark)">
          <animate attributeName="r" values="7;11;7" dur="4s" repeatCount="indefinite" />
        </circle>
        <circle cx="100" cy="450" r="8" fill="#F89F7B" filter="url(#glowDark)">
          <animate attributeName="r" values="6;9;6" dur="3.5s" repeatCount="indefinite" />
        </circle>
        <circle cx="700" cy="450" r="8" fill="#EF476F" filter="url(#glowDark)">
          <animate attributeName="r" values="7;10;7" dur="4.5s" repeatCount="indefinite" />
        </circle>
        <circle cx="400" cy="300" r="12" fill="#FED700" filter="url(#glowDark)">
          <animate attributeName="r" values="10;16;10" dur="5s" repeatCount="indefinite" />
        </circle>

        {/* Additional small stars */}
        <circle cx="250" cy="220" r="3" fill="#ffffff" opacity="0.6">
          <animate attributeName="opacity" values="0.3;0.8;0.3" dur="2s" repeatCount="indefinite" />
        </circle>
        <circle cx="550" cy="220" r="3" fill="#ffffff" opacity="0.6">
          <animate attributeName="opacity" values="0.4;0.9;0.4" dur="2.5s" repeatCount="indefinite" />
        </circle>
        <circle cx="250" cy="380" r="3" fill="#ffffff" opacity="0.6">
          <animate attributeName="opacity" values="0.3;0.7;0.3" dur="3s" repeatCount="indefinite" />
        </circle>
        <circle cx="550" cy="380" r="3" fill="#ffffff" opacity="0.6">
          <animate attributeName="opacity" values="0.4;0.8;0.4" dur="2.2s" repeatCount="indefinite" />
        </circle>
      </svg>

      <div style={{ maxWidth: 'var(--max-width-xl)', margin: '0 auto', position: 'relative', zIndex: 1 }}>
        {/* Header */}
        <div style={{ textAlign: 'center', marginBottom: 'var(--spacing-3xl)' }}>
          <h2 style={{
            fontSize: 'var(--font-size-h2)',
            fontWeight: 500,
            color: 'white',
            marginBottom: 'var(--spacing-md)',
            fontFamily: 'var(--font-headline)',
            lineHeight: 'var(--line-height-tight)',
          }}>
            {fieldValues.heading || 'Why Choose Mentor Collective?'}
          </h2>
          <p style={{
            fontSize: '1.15rem',
            color: 'rgba(255, 255, 255, 0.8)',
            maxWidth: 'var(--max-width-prose)',
            margin: '0 auto',
          }}>
            {fieldValues.subtitle || 'We are the Essential Infrastructure built to scale human skills in an AI-driven world.'}
          </p>
        </div>

        {/* Feature Cards positioned around constellation */}
        <div style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(2, 1fr)',
          gap: 'var(--spacing-2xl)',
          maxWidth: '1000px',
          margin: '0 auto',
          padding: '0 var(--spacing-lg)',
        }}>
          {features.map((feature: any, index: number) => (
            <div
              key={index}
              style={{
                background: 'rgba(255, 255, 255, 0.05)',
                backdropFilter: 'blur(10px)',
                borderRadius: 'var(--radius-xl)',
                padding: 'var(--card-padding-lg)',
                border: '1px solid rgba(255, 255, 255, 0.1)',
                transition: 'var(--transition-medium)',
                ...animationStyles.staggeredSubtle(isVisible, index * 0.1),
              }}
            >
              {/* Star icon */}
              <div style={{
                width: '48px',
                height: '48px',
                background: 'linear-gradient(135deg, #EF476F 0%, #F89F7B 100%)',
                borderRadius: 'var(--radius-md)',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                marginBottom: 'var(--spacing-md)',
                boxShadow: '0 4px 16px rgba(239, 71, 111, 0.3)',
              }}>
                <svg width="24" height="24" viewBox="0 0 24 24" fill="white">
                  <path d="M12 2L15.09 8.26L22 9.27L17 14.14L18.18 21.02L12 17.77L5.82 21.02L7 14.14L2 9.27L8.91 8.26L12 2Z" />
                </svg>
              </div>

              <h3 style={{
                fontSize: '1.25rem',
                fontWeight: 500,
                color: 'white',
                marginBottom: 'var(--spacing-sm)',
                fontFamily: 'var(--font-headline)',
              }}>
                {feature.title}
              </h3>
              <p style={{
                fontSize: '1rem',
                color: 'rgba(255, 255, 255, 0.7)',
                lineHeight: 1.6,
              }}>
                {feature.description}
              </p>
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
    default: 'Why Choose Mentor Collective?',
  },
  {
    type: 'text',
    name: 'subtitle',
    label: 'Subtitle',
    default: 'We are the Essential Infrastructure built to scale human skills in an AI-driven world.',
  },
  {
    type: 'group',
    name: 'features',
    label: 'Features',
    occurrence: {
      min: 0,
      max: 4,
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
