import {
  ModuleFields,
  TextField,
} from '@hubspot/cms-components/fields';
import { useScrollAnimation, animationStyles } from '../../hooks/useScrollAnimation';

interface Stat {
  value: string;
  label: string;
}

export function Component({ fieldValues }: any) {
  const { elementRef, isVisible } = useScrollAnimation({ threshold: 0.2 });

  const stats: Stat[] = fieldValues.stats || [
    { value: '+6%', label: 'Retention Lift' },
    { value: '19%', label: 'Boost in Belonging' },
    { value: '30%', label: 'Increase in Career Confidence' },
  ];

  return (
    <section
      ref={elementRef as React.RefObject<HTMLElement>}
      style={{
        padding: 'var(--section-padding-lg) var(--spacing-lg)',
        background: 'var(--bg-white)',
        ...animationStyles.subtleSlideUp(isVisible),
      }}
    >
      <div style={{ maxWidth: 'var(--max-width-xl)', margin: '0 auto' }}>
        <div style={{
          display: 'grid',
          gridTemplateColumns: '1.2fr 0.8fr',
          gap: 'var(--spacing-3xl)',
          alignItems: 'start',
        }} className="story-content">
          {/* Left Column - Story Content */}
          <div>
            <h2 style={{
              fontSize: 'var(--font-size-h2)',
              fontWeight: 500,
              lineHeight: 'var(--line-height-tight)',
              letterSpacing: 'var(--letter-spacing-tight)',
              marginBottom: 'var(--spacing-lg)',
              color: 'var(--text-primary)',
              fontFamily: 'var(--font-headline)',
            }}>
              {fieldValues.title || "Confidence Sparked Noah's Future"}
            </h2>

            <p style={{
              fontSize: '1.05rem',
              color: 'var(--text-secondary)',
              lineHeight: 'var(--line-height-relaxed)',
              marginBottom: 'var(--spacing-2xl)',
            }}>
              {fieldValues.description || 'Noah, an early-career engineer, struggled to send that first message. The in-app Conversation Sparks feature delivered prompts right to the dashboard. That conversation ignited instantly, deepening the relationship and transforming his hesitation into professional momentum.'}
            </p>

            {/* Testimonial Quote Box */}
            <div style={{
              background: 'linear-gradient(135deg, rgba(255, 255, 255, 0.95) 0%, rgba(255, 251, 248, 0.9) 100%)',
              padding: 'var(--spacing-2xl)',
              borderLeft: '4px solid var(--text-coral)',
              borderRadius: 'var(--radius-lg)',
              boxShadow: '0 8px 32px rgba(0, 0, 0, 0.08)',
              marginBottom: 'var(--spacing-xl)',
            }}>
              <p style={{
                fontSize: '1.15rem',
                fontStyle: 'italic',
                color: 'var(--text-secondary)',
                lineHeight: 'var(--line-height-relaxed)',
                margin: '0 0 var(--spacing-lg) 0',
              }}>
                "{fieldValues.quote || 'Every conversation with my mentor is very insightful and leaves me with several ideas of how to approach future conversations with my supervisors.'}"
              </p>
              <div style={{
                display: 'flex',
                alignItems: 'center',
                gap: 'var(--spacing-md)',
              }}>
                <div style={{
                  width: '48px',
                  height: '48px',
                  borderRadius: 'var(--radius-circle)',
                  background: 'linear-gradient(135deg, var(--text-coral) 0%, var(--text-peach) 100%)',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  fontSize: '1.5rem',
                  fontWeight: 600,
                  color: 'var(--text-white)',
                  fontFamily: 'var(--font-headline)',
                }}>
                  N
                </div>
                <div>
                  <div style={{
                    fontSize: '1rem',
                    fontWeight: 600,
                    color: 'var(--text-primary)',
                    marginBottom: '0.25rem',
                  }}>
                    {fieldValues.author_name || 'Noah'}
                  </div>
                  <div style={{
                    fontSize: '0.875rem',
                    color: 'var(--text-muted)',
                  }}>
                    {fieldValues.author_title || 'Mentee, UPCEA 2024'}
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Right Column - Stat Cards */}
          <div style={{
            display: 'flex',
            flexDirection: 'column',
            gap: 'var(--spacing-lg)',
            ...animationStyles.staggeredSubtle(isVisible, 0.2),
          }}>
            {stats.map((stat, index) => (
              <div
                key={index}
                style={{
                  background: 'linear-gradient(135deg, rgba(255, 255, 255, 0.98) 0%, rgba(255, 251, 248, 0.95) 100%)',
                  padding: 'var(--spacing-xl)',
                  borderRadius: 'var(--radius-xl)',
                  border: '2px solid rgba(239, 71, 111, 0.1)',
                  boxShadow: 'var(--shadow-md)',
                  textAlign: 'center',
                  backdropFilter: 'blur(10px)',
                  transition: 'var(--transition-medium)',
                }}
              >
                <div style={{
                  fontSize: '3rem',
                  fontWeight: 700,
                  color: 'var(--text-coral)',
                  lineHeight: 1,
                  marginBottom: 'var(--spacing-sm)',
                  fontFamily: 'var(--font-headline)',
                }}>
                  {stat.value}
                </div>
                <div style={{
                  fontSize: '0.95rem',
                  color: 'var(--text-secondary)',
                  fontWeight: 500,
                  lineHeight: 'var(--line-height-normal)',
                }}>
                  {stat.label}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

export const fields = (
  <ModuleFields>
    <TextField
      name="title"
      label="Story Title"
      default="Confidence Sparked Noah&apos;s Future"
    />
    <TextField
      name="description"
      label="Story Description"
      default="Noah, an early-career engineer, struggled to send that first message. The in-app Conversation Sparks feature delivered prompts right to the dashboard. That conversation ignited instantly, deepening the relationship and transforming his hesitation into professional momentum."
    />
    <TextField
      name="quote"
      label="Testimonial Quote"
      default="Every conversation with my mentor is very insightful and leaves me with several ideas of how to approach future conversations with my supervisors."
    />
    <TextField
      name="author_name"
      label="Author Name"
      default="Noah"
    />
    <TextField
      name="author_title"
      label="Author Title"
      default="Mentee, UPCEA 2024"
    />
  </ModuleFields>
);

export const meta = {
  label: 'Story Section',
};
