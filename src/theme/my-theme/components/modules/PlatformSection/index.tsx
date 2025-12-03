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
      icon: '⚡',
      title: 'Accelerated Launch',
      description: 'Simplify program creation with guided, intuitive templates. Deploy quickly and with support.',
    },
    {
      icon: '✓',
      title: 'Automated Workflows',
      description: 'Built-in automation manages every step—from recruitment nudges to assessment reminders.',
    },
    {
      icon: '🔒',
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
        padding: 'var(--section-padding-lg) var(--spacing-lg)',
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
                    fontSize: 'var(--font-size-h3)',
                    flexShrink: 0,
                    width: '40px',
                    height: '40px',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    background: 'rgba(239, 71, 111, 0.08)',
                    borderRadius: 'var(--radius-md)',
                  }}>
                    {feature.icon}
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
            {/* Workflow Automation Card */}
            <div style={{
              background: 'linear-gradient(135deg, rgba(255, 255, 255, 0.95) 0%, rgba(255, 251, 248, 0.9) 100%)',
              borderRadius: 'var(--radius-xl)',
              padding: 'var(--spacing-2xl)',
              boxShadow: '0 16px 48px rgba(0, 0, 0, 0.12)',
              border: '1px solid var(--border-light)',
              backdropFilter: 'blur(10px)',
            }}>
              <div style={{
                display: 'flex',
                justifyContent: 'space-between',
                alignItems: 'center',
                marginBottom: 'var(--spacing-xl)',
              }}>
                <h3 style={{
                  fontSize: 'var(--font-size-h3)',
                  fontWeight: 500,
                  color: 'var(--text-primary)',
                  margin: 0,
                  fontFamily: 'var(--font-headline)',
                }}>
                  Workflow Automation
                </h3>
                <span style={{
                  padding: '0.35rem 0.75rem',
                  background: 'rgba(6, 214, 160, 0.1)',
                  color: '#06D6A0',
                  borderRadius: 'var(--radius-md)',
                  fontSize: 'var(--font-size-xs)',
                  fontWeight: 600,
                }}>
                  Active
                </span>
              </div>

              {/* Workflow Items */}
              <div style={{ display: 'flex', flexDirection: 'column', gap: 'var(--spacing-md)' }}>
                {[
                  { num: 1, title: 'Recruitment Email', time: '2 days ago', status: 'Sent' },
                  { num: 2, title: 'Matching Survey', time: 'Yesterday', status: 'Completed' },
                  { num: 3, title: 'Mentor Assignment', time: 'Today', status: 'Processing' },
                ].map((item, idx) => (
                  <div key={idx} style={{
                    display: 'flex',
                    justifyContent: 'space-between',
                    alignItems: 'center',
                    padding: 'var(--spacing-md)',
                    background: 'var(--bg-white)',
                    borderRadius: 'var(--radius-md)',
                    border: '1px solid var(--border-light)',
                  }}>
                    <div style={{ display: 'flex', alignItems: 'center', gap: 'var(--spacing-md)' }}>
                      <span style={{
                        width: '32px',
                        height: '32px',
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'center',
                        background: 'rgba(239, 71, 111, 0.08)',
                        borderRadius: 'var(--radius-circle)',
                        fontSize: 'var(--font-size-small)',
                        fontWeight: 600,
                        color: 'var(--text-coral)',
                      }}>
                        {item.num}
                      </span>
                      <div>
                        <div style={{ fontWeight: 600, fontSize: 'var(--font-size-base)', color: 'var(--text-primary)' }}>
                          {item.title}
                        </div>
                        <div style={{ fontSize: 'var(--font-size-xs)', color: 'var(--text-muted)' }}>
                          {item.time}
                        </div>
                      </div>
                    </div>
                    <span style={{
                      fontSize: 'var(--font-size-xs)',
                      fontWeight: 600,
                      color: idx === 1 ? '#06D6A0' : idx === 2 ? '#FFD166' : 'var(--text-muted)',
                    }}>
                      {item.status}
                    </span>
                  </div>
                ))}
              </div>

              {/* Testimonial Quote */}
              <div style={{
                marginTop: 'var(--spacing-xl)',
                padding: 'var(--spacing-lg)',
                background: 'rgba(239, 71, 111, 0.03)',
                borderLeft: '3px solid var(--text-coral)',
                borderRadius: 'var(--radius-md)',
              }}>
                <p style={{
                  fontSize: 'var(--font-size-base)',
                  fontStyle: 'italic',
                  color: 'var(--text-secondary)',
                  margin: '0 0 var(--spacing-sm) 0',
                  lineHeight: 'var(--line-height-normal)',
                }}>
                  "The scalable technology and personalized matching have significantly reduced our administrative burdens."
                </p>
                <div>
                  <div style={{ fontSize: 'var(--font-size-small)', fontWeight: 600, color: 'var(--text-primary)' }}>
                    J. Checo Colón-Gaud
                  </div>
                  <div style={{ fontSize: 'var(--font-size-xs)', color: 'var(--text-muted)' }}>
                    Georgia Southern University
                  </div>
                </div>
              </div>
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
