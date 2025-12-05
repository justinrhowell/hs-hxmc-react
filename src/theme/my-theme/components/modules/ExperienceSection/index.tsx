import React from 'react';
import {
  ModuleFields,
  TextField,
  ImageField,
} from '@hubspot/cms-components/fields';
import { ScrollAnimationScript } from '../../shared/ScrollAnimationScript';
import smartMatchingSvg from '../../../assets/Smart Matching.svg';

interface Feature {
  icon: string;
  title: string;
  description: string;
}

export function Component({ fieldValues }: any) {
  // Different geometric shapes as inline SVGs for visual variety
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

  const features: Feature[] = fieldValues.features || [
    {
      icon: 'circle',
      title: 'Seamless Onboarding',
      description: 'Mobilize your mentor and mentee populations with data-informed recruitment and research-backed training.',
    },
    {
      icon: 'diamond',
      title: 'Smart Matching',
      description: 'Optimize our proprietary matching algorithm based on a decade of data to ensure the strongest possible fit.',
    },
    {
      icon: 'triangle',
      title: 'Sustained Engagement',
      description: 'Eliminate barriers with AI-powered prompts, nudges, and resources that keep the conversation going.',
    },
  ];

  return (
    <>
    <ScrollAnimationScript />
    <section
      id="experience"
      className="scroll-animate"
      style={{
        padding: 'var(--section-padding-lg) var(--spacing-lg)',
        background: 'var(--gradient-hero)',
        backgroundImage: 'var(--pattern-dots)',
        backgroundSize: 'var(--pattern-dots-size)',
      }}
    >
      <div style={{ maxWidth: 'var(--max-width-xl)', margin: '0 auto' }}>
        <div style={{
          display: 'grid',
          gridTemplateColumns: '1.1fr 1fr',
          gap: 'var(--spacing-3xl)',
          alignItems: 'center',
        }} className="experience-content">
          {/* Left Column - Visual Elements */}
          <div className="scroll-animate" data-delay="200">
            <img
              src={smartMatchingSvg}
              alt="Smart Matching illustration showing AI-powered mentor matching"
              style={{
                width: '100%',
                height: 'auto',
                maxWidth: '550px',
                display: 'block',
              }}
            />
          </div>

          {/* Right Column - Text Content */}
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
              {fieldValues.badge || 'The Experience'}
            </h2>

            <p style={{
              fontSize: 'var(--font-size-h3)',
              fontWeight: 500,
              lineHeight: 'var(--line-height-tight)',
              marginBottom: 'var(--spacing-lg)',
              color: 'var(--text-primary)',
              fontFamily: 'var(--font-headline)',
            }}>
              {fieldValues.title || 'Deepen engagement with AI-guided journeys.'}
            </p>

            <p style={{
              fontSize: 'var(--font-size-body-lg)',
              color: 'var(--text-secondary)',
              lineHeight: 'var(--line-height-relaxed)',
              marginBottom: 'var(--spacing-2xl)',
              maxWidth: 'var(--max-width-prose)',
            }}>
              {fieldValues.subtitle || 'An AI-guided journey that maximizes program quality and deepens essential human connection, designed for participants and optimized for data generation.'}
            </p>

            {/* Feature List */}
            <div style={{ display: 'flex', flexDirection: 'column', gap: 'var(--spacing-xl)' }}>
              {features.map((feature, index) => (
                <div key={index} style={{ display: 'flex', gap: 'var(--spacing-md)', alignItems: 'flex-start' }}>
                  <div style={{
                    width: '36px',
                    height: '36px',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    background: 'rgba(17, 138, 178, 0.1)',
                    borderRadius: 'var(--radius-md)',
                    flexShrink: 0,
                  }}>
                    {iconShapes[index % iconShapes.length]}
                  </div>
                  <div>
                    <h3 style={{
                      fontSize: 'var(--font-size-body-lg)',
                      fontWeight: 500,
                      color: 'var(--text-primary)',
                      marginBottom: 'var(--spacing-xs)',
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
      default="The Experience"
    />
    <TextField
      name="title"
      label="Section Title"
      default="Deepen engagement with AI-guided journeys."
    />
    <TextField
      name="subtitle"
      label="Subtitle"
      default="An AI-guided journey that maximizes program quality and deepens essential human connection, designed for participants and optimized for data generation."
    />
  </ModuleFields>
);

export const meta = {
  label: 'Experience Section',
};
