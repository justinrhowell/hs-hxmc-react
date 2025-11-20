import {
  ModuleFields,
  TextField,
  ImageField,
} from '@hubspot/cms-components/fields';
import { useScrollAnimation, animationStyles } from '../../hooks/useScrollAnimation';

interface Feature {
  icon: string;
  title: string;
  description: string;
}

export function Component({ fieldValues }: any) {
  const { elementRef, isVisible } = useScrollAnimation({ threshold: 0.2 });

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
    <section
      ref={elementRef as React.RefObject<HTMLElement>}
      style={{
        padding: 'var(--section-padding-lg) var(--spacing-lg)',
        background: 'linear-gradient(135deg, #FFFFFF 0%, #FFFBF8 100%)',
        backgroundImage: 'var(--pattern-dots)',
        backgroundSize: 'var(--pattern-dots-size)',
        ...animationStyles.subtleSlideUp(isVisible),
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
          <div style={{
            ...animationStyles.staggeredSubtle(isVisible, 0.1),
          }}>
            {/* Conversation Sparks Card */}
            <div style={{
              background: 'linear-gradient(135deg, rgba(255, 255, 255, 0.95) 0%, rgba(255, 251, 248, 0.9) 100%)',
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
                  fontSize: '1.5rem',
                }}>
                  💬
                </div>
                <div>
                  <h3 style={{
                    fontSize: '1.25rem',
                    fontWeight: 600,
                    color: 'var(--text-primary)',
                    margin: 0,
                    fontFamily: 'var(--font-headline)',
                  }}>
                    Conversation Sparks
                  </h3>
                  <p style={{
                    fontSize: '0.875rem',
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
                  fontSize: '0.95rem',
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
                    fontSize: '0.875rem',
                    fontWeight: 600,
                    color: 'var(--text-muted)',
                    marginBottom: '0.5rem',
                  }}>
                    Match Score
                  </div>
                  <div style={{
                    fontSize: '3rem',
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
                    fontSize: '1.5rem',
                  }}>
                    ✓
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Right Column - Text Content */}
          <div>
            {/* Badge */}
            <div style={{
              display: 'inline-block',
              padding: '0.4rem 1rem',
              background: 'var(--primary-navy)',
              color: 'var(--text-white)',
              borderRadius: 'var(--radius-full)',
              fontSize: '0.875rem',
              fontWeight: 600,
              marginBottom: 'var(--spacing-xl)',
            }}>
              {fieldValues.badge || 'The Experience'}
            </div>

            <h2 style={{
              fontSize: 'var(--font-size-h2)',
              fontWeight: 700,
              lineHeight: 'var(--line-height-tight)',
              letterSpacing: 'var(--letter-spacing-tight)',
              marginBottom: 'var(--spacing-lg)',
              color: 'var(--text-primary)',
              fontFamily: 'var(--font-headline)',
            }}>
              {fieldValues.title || 'Deepen engagement with AI-guided journeys.'}
            </h2>

            <p style={{
              fontSize: '1.1rem',
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
                    fontSize: '1rem',
                    fontWeight: 600,
                    flexShrink: 0,
                  }}>
                    {feature.icon}
                  </div>
                  <div>
                    <h3 style={{
                      fontSize: '1.15rem',
                      fontWeight: 600,
                      color: 'var(--text-primary)',
                      marginBottom: '0.5rem',
                      fontFamily: 'var(--font-headline)',
                    }}>
                      {feature.title}
                    </h3>
                    <p style={{
                      fontSize: '0.95rem',
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
