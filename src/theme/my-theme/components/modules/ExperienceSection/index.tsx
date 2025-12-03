import React from 'react';
import {
  ModuleFields,
  TextField,
  ImageField,
} from '@hubspot/cms-components/fields';
import { ScrollAnimationScript } from '../../shared/ScrollAnimationScript';

interface Feature {
  icon: string;
  title: string;
  description: string;
}

export function Component({ fieldValues }: any) {
  const features: Feature[] = fieldValues.features || [
    {
      icon: '◉',
      title: 'Seamless Onboarding',
      description: 'Mobilize your mentor and mentee populations with data-informed recruitment and research-backed training.',
    },
    {
      icon: '◉',
      title: 'Smart Matching',
      description: 'Optimize our proprietary matching algorithm based on a decade of data to ensure the strongest possible fit.',
    },
    {
      icon: '◉',
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
          <div>
            {/* Conversation Sparks Card */}
            <div style={{
              background: 'var(--gradient-hero)',
              borderRadius: 'var(--radius-xl)',
              padding: 'var(--spacing-2xl)',
              boxShadow: '0 16px 48px rgba(0, 0, 0, 0.12)',
              border: '1px solid var(--border-light)',
              backdropFilter: 'blur(10px)',
              marginBottom: 'var(--spacing-xl)',
            }}>
              <div style={{
                display: 'flex',
                alignItems: 'center',
                gap: 'var(--spacing-md)',
                marginBottom: 'var(--spacing-lg)',
              }}>
                <div style={{
                  width: '48px',
                  height: '48px',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  background: 'rgba(239, 71, 111, 0.08)',
                  borderRadius: 'var(--radius-md)',
                  fontSize: 'var(--font-size-h3)',
                }}>
                  💬
                </div>
                <div>
                  <h3 style={{
                    fontSize: 'var(--font-size-h4)',
                    fontWeight: 500,
                    color: 'var(--text-primary)',
                    margin: 0,
                    fontFamily: 'var(--font-headline)',
                  }}>
                    Conversation Sparks
                  </h3>
                  <p style={{
                    fontSize: 'var(--font-size-small)',
                    color: 'var(--text-muted)',
                    margin: 0,
                  }}>
                    AI-powered prompts
                  </p>
                </div>
              </div>

              <div style={{
                background: 'var(--bg-white)',
                padding: 'var(--spacing-lg)',
                borderRadius: 'var(--radius-md)',
                border: '1px solid var(--border-light)',
              }}>
                <p style={{
                  fontSize: 'var(--font-size-base)',
                  color: 'var(--text-secondary)',
                  lineHeight: 'var(--line-height-normal)',
                  margin: 0,
                }}>
                  "Don't know what to talk about or live AI Tutorial. We follow it."
                </p>
              </div>
            </div>

            {/* Match Score Indicator */}
            <div style={{
              background: 'linear-gradient(135deg, rgba(6, 214, 160, 0.1) 0%, rgba(17, 138, 178, 0.05) 100%)',
              borderRadius: 'var(--radius-xl)',
              padding: 'var(--spacing-xl)',
              border: '1px solid rgba(6, 214, 160, 0.2)',
            }}>
              <div style={{
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'space-between',
              }}>
                <div>
                  <div style={{
                    fontSize: 'var(--font-size-small)',
                    fontWeight: 600,
                    color: 'var(--text-muted)',
                    marginBottom: 'var(--spacing-xs)',
                  }}>
                    Match Score
                  </div>
                  <div style={{
                    fontSize: 'var(--font-size-h1)',
                    fontWeight: 700,
                    color: 'var(--text-teal)',
                    lineHeight: 1,
                    fontFamily: 'var(--font-headline)',
                  }}>
                    98%
                  </div>
                </div>
                <div style={{
                  width: '80px',
                  height: '80px',
                  borderRadius: 'var(--radius-circle)',
                  background: 'conic-gradient(var(--text-teal) 98%, var(--border-light) 0)',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  position: 'relative',
                }}>
                  <div style={{
                    width: '64px',
                    height: '64px',
                    borderRadius: 'var(--radius-circle)',
                    background: 'var(--bg-white)',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    fontSize: 'var(--font-size-h3)',
                  }}>
                    ✓
                  </div>
                </div>
              </div>
            </div>
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
                    width: '32px',
                    height: '32px',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    background: 'rgba(6, 214, 160, 0.1)',
                    borderRadius: 'var(--radius-circle)',
                    color: 'var(--text-teal)',
                    fontSize: 'var(--font-size-base)',
                    fontWeight: 600,
                    flexShrink: 0,
                  }}>
                    {feature.icon}
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
