import React from 'react';
import {
  ModuleFields,
  TextField,
  ImageField,
} from '@hubspot/cms-components/fields';
import { ScrollAnimationScript } from '../../shared/ScrollAnimationScript';
import integrationsSvg from '../../../assets/Integrations.svg';

interface Feature {
  title: string;
  description: string;
}

// Geometric shape icons matching brand style
const iconShapes = [
  // Circle
  <svg key="circle" width="20" height="20" viewBox="0 0 20 20" fill="none">
    <circle cx="10" cy="10" r="8" stroke="var(--secondary-blue)" strokeWidth="2.5" fill="none" />
  </svg>,
  // Diamond/Rhombus
  <svg key="diamond" width="20" height="20" viewBox="0 0 20 20" fill="none">
    <rect x="10" y="2" width="11" height="11" rx="2" transform="rotate(45 10 2)" stroke="var(--secondary-blue)" strokeWidth="2.5" fill="none" />
  </svg>,
  // Triangle
  <svg key="triangle" width="20" height="20" viewBox="0 0 20 20" fill="none">
    <path d="M10 3L18 17H2L10 3Z" stroke="var(--secondary-blue)" strokeWidth="2.5" strokeLinejoin="round" fill="none" />
  </svg>,
];

export function Component({ fieldValues }: any) {
  const features: Feature[] = fieldValues.features || [
    {
      title: 'Accelerated Launch',
      description: 'Simplify program creation with guided, intuitive templates. Deploy quickly and with support.',
    },
    {
      title: 'Automated Workflows',
      description: 'Built-in automation manages every step—from recruitment nudges to assessment reminders.',
    },
    {
      title: 'Secure Integrations',
      description: 'Seamlessly connect to your existing systems with enterprise-grade SSO and SFTP.',
    },
  ];

  return (
    <>
    <ScrollAnimationScript />
    <section
      id="platform"
      className="scroll-animate"
      style={{
        padding: 'var(--spacing-lg) var(--spacing-lg) var(--section-padding-lg)',
        background: 'var(--bg-white)',
      }}
    >
      <div style={{ maxWidth: 'var(--max-width-xl)', margin: '0 auto' }}>
        <div style={{
          display: 'grid',
          gridTemplateColumns: '1fr 1.1fr',
          gap: 'var(--spacing-3xl)',
          alignItems: 'center',
        }} className="platform-content">
          {/* Left Column - Text Content */}
          <div>
            {/* Section Title */}
            <h2 style={{
              fontSize: 'var(--font-size-h2)',
              fontWeight: 500,
              lineHeight: 'var(--line-height-tight)',
              letterSpacing: 'var(--letter-spacing-tight)',
              marginBottom: 'var(--spacing-sm)',
              color: 'var(--text-coral)',
              fontFamily: 'var(--font-headline)',
            }}>
              {fieldValues.badge || 'The Platform'}
            </h2>

            <p style={{
              fontSize: 'var(--font-size-h3)',
              fontWeight: 500,
              lineHeight: 'var(--line-height-tight)',
              marginBottom: 'var(--spacing-lg)',
              color: 'var(--text-primary)',
              fontFamily: 'var(--font-headline)',
            }}>
              {fieldValues.title || 'Scale without the administrative burden.'}
            </p>

            <p style={{
              fontSize: 'var(--font-size-large)',
              color: 'var(--text-secondary)',
              lineHeight: 'var(--line-height-relaxed)',
              marginBottom: 'var(--spacing-2xl)',
              maxWidth: 'var(--max-width-prose)',
            }}>
              {fieldValues.subtitle || 'A flexible infrastructure that simplifies launches, streamlines workflows, and ensures scalable efficiency from day one.'}
            </p>

            {/* Feature List */}
            <div style={{ display: 'flex', flexDirection: 'column', gap: 'var(--spacing-xl)' }}>
              {features.map((feature, index) => (
                <div key={index} style={{ display: 'flex', gap: 'var(--spacing-md)', alignItems: 'flex-start' }}>
                  <div style={{
                    flexShrink: 0,
                    width: '40px',
                    height: '40px',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    background: 'rgba(74, 144, 226, 0.08)',
                    borderRadius: 'var(--radius-md)',
                  }}>
                    {iconShapes[index % iconShapes.length]}
                  </div>
                  <div>
                    <h3 style={{
                      fontSize: 'var(--font-size-large)',
                      fontWeight: 500,
                      color: 'var(--text-primary)',
                      marginBottom: 'var(--spacing-sm)',
                      fontFamily: 'var(--font-headline)',
                    }}>
                      {feature.title}
                    </h3>
                    <p style={{
                      fontSize: 'var(--font-size-base)',
                      color: 'var(--text-muted)',
                      lineHeight: 'var(--line-height-normal)',
                      margin: 0,
                    }}>
                      {feature.description}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Right Column - Visual/Card */}
          <div className="scroll-animate" data-delay="200">
            <img
              src={integrationsSvg}
              alt="Integrations illustration showing connected systems and workflows"
              style={{
                width: '100%',
                height: 'auto',
                maxWidth: '550px',
                display: 'block',
              }}
            />
          </div>
        </div>
      </div>
    </section>
    </>
  );
}

export const fields = (
  <ModuleFields>
    <TextField
      name="badge"
      label="Badge Text"
      default="The Platform"
    />
    <TextField
      name="title"
      label="Section Title"
      default="Scale without the administrative burden."
    />
    <TextField
      name="subtitle"
      label="Subtitle"
      default="A flexible infrastructure that simplifies launches, streamlines workflows, and ensures scalable efficiency from day one."
    />
  </ModuleFields>
);

export const meta = {
  label: 'Platform Section',
};
