import React from 'react';
import { ScrollAnimationScript } from '../../shared/ScrollAnimationScript';
import revealIcon from '../../../assets/reveal-icon.svg';
import sparkIcon from '../../../assets/spark-icon.svg';
import scaleIcon from '../../../assets/scale-icon.svg';
import fuelIcon from '../../../assets/fuel-icon.svg';

export function Component({ fieldValues }: any) {
  // Map icon keys to imported assets
  const iconMap: Record<string, string> = {
    reveal: revealIcon,
    spark: sparkIcon,
    scale: scaleIcon,
    fuel: fuelIcon,
  };

  // Default features
  const defaultFeatures = [
    { icon: 'reveal', title: 'Participant Insights', description: 'Capture an incredible wealth of self-reported data into a strategic asset, revealing authentic mentee needs, goals, and interests to apply key learnings to your larger population.' },
    { icon: 'spark', title: 'Configurable Reporting', description: 'Integrate existing cohort data into the platform and instantly disaggregate standard visualizations by specific populations for strategic analysis.' },
    { icon: 'scale', title: 'Early Alerts', description: 'Spot critical issues before they escalate. Monitor potential retention or performance risks as they are reported and intervene proactively.' },
    { icon: 'fuel', title: 'Outcome Measurement', description: 'Formalized, continuous surveys collect the insights required to quantify ROI across success indicators like belonging, career confidence, and retention.' },
  ];

  // Default stats
  const defaultStats = [
    { value: '+6%', label: 'retention lift' },
    { value: '+8-19%', label: 'boost in sense of belonging' },
    { value: '+30%', label: 'increase in career confidence' },
  ];

  // Default testimonials
  const defaultTestimonials = [
    { quote: "One of the things that we were really pleased with, that we were receiving very early on through the flags...that early indicator that would allow us for an early intervention, I think it's pretty powerful.", author: '–Jennifer Ebinger, Senior Director, Office of Engaged Learning, Southern Methodist University' },
    { quote: 'The real time tracking allows us to make shifts throughout the year to adapt the mentoring experience to the realities of the student experience.', author: '– Rebecca Goldstein, Director of Student Affairs Assessment & Research, Florida Atlantic University' },
    { quote: "One of the challenges over the last several years since we intensely went after student success as a top institutional priority was how do we measure sense of belonging. The tools of Mentor Collective have really been invaluable in finding ways we actually could measure a student's self-perception of belonging.", author: '– Dr. Maria Cuzzo, Provost, University of Wisconsin, Superior' },
  ];

  // Use custom or defaults
  const customFeatures = fieldValues.features || [];
  const features = customFeatures.length > 0
    ? customFeatures.map((f: any) => ({
        icon: iconMap[f.icon_key] || revealIcon,
        title: f.title || 'Feature',
        description: f.description || 'Feature description',
      }))
    : defaultFeatures.map(f => ({ ...f, icon: iconMap[f.icon] }));

  const customStats = fieldValues.stats || [];
  const stats = customStats.length > 0
    ? customStats.map((s: any) => ({
        value: s.value || '+0%',
        label: s.stat_label || 'metric',
      }))
    : defaultStats;

  const customTestimonials = fieldValues.testimonials || [];
  const testimonials = customTestimonials.length > 0
    ? customTestimonials.map((t: any) => ({
        quote: t.quote || 'Testimonial quote',
        author: t.author || '– Author Name',
      }))
    : defaultTestimonials;

  return (
    <>
    <style>{`
      @media (max-width: 768px) {
        .intelligence-stats-grid {
          grid-template-columns: 1fr !important;
        }
        .intelligence-features-grid {
          grid-template-columns: 1fr !important;
        }
      }
    `}</style>
    <ScrollAnimationScript />
    <section
      id="intelligence"
      className="scroll-animate"
      style={{
        padding: 'var(--section-padding-lg) var(--spacing-lg)',
        background: 'linear-gradient(180deg, #1a1a2e 0%, #16213e 100%)',
        position: 'relative',
        overflow: 'hidden',
      }}
    >
      <div style={{ maxWidth: 'var(--max-width-xl)', margin: '0 auto' }}>
        <div style={{ textAlign: 'center', marginBottom: 'var(--spacing-2xl)' }}>
          <h2 style={{
            fontSize: 'var(--font-size-h2)',
            fontWeight: 500,
            marginBottom: 'var(--spacing-sm)',
            color: 'var(--text-white)',
            fontFamily: 'var(--font-headline)',
            lineHeight: 'var(--line-height-tight)',
            letterSpacing: 'var(--letter-spacing-tight)',
          }}>
            {fieldValues.heading || 'The Intelligence'}
          </h2>
          <p style={{
            fontSize: 'var(--font-size-body-lg)',
            color: 'rgba(255, 255, 255, 0.8)',
            lineHeight: 'var(--line-height-relaxed)',
            maxWidth: 'var(--max-width-prose)',
            margin: '0 auto',
          }}>
            {fieldValues.subtitle || 'Transform human connection into measurable outcomes.'}
          </p>
        </div>

        <div
          className="intelligence-features-grid"
          style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(2, 1fr)',
            gap: 'var(--spacing-xl)',
            marginBottom: 'var(--spacing-2xl)',
            maxWidth: '1100px',
            margin: '0 auto var(--spacing-2xl)',
          }}
        >
          {features.map((feature, index) => (
            <div
              key={index}
              className="feature-card scroll-animate"
              data-delay={index * 100}
              style={{
                background: 'linear-gradient(135deg, rgba(255, 255, 255, 0.95) 0%, rgba(255, 251, 248, 0.95) 100%)',
                padding: 'var(--card-padding-lg)',
                borderRadius: 'var(--radius-xl)',
                boxShadow: 'var(--shadow-lg)',
                border: '1px solid var(--border-light)',
                transition: 'var(--transition-bounce)',
                position: 'relative',
                overflow: 'hidden',
              }}
            >
              <div style={{
                marginBottom: 'var(--spacing-lg)',
                height: '60px',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'flex-start',
              }}>
                <img
                  src={feature.icon}
                  alt={`${feature.title} icon`}
                  style={{
                    height: '100%',
                    width: 'auto',
                    filter: 'drop-shadow(0 4px 8px rgba(239, 71, 111, 0.15))'
                  }}
                />
              </div>
              <h3 style={{
                fontSize: 'var(--font-size-h3)',
                fontWeight: 500,
                marginBottom: 'var(--spacing-sm)',
                color: 'var(--text-primary)',
                fontFamily: 'var(--font-headline)',
                lineHeight: 'var(--line-height-normal)',
              }}>
                {feature.title}
              </h3>
              <p style={{
                fontSize: 'var(--font-size-body)',
                lineHeight: 'var(--line-height-relaxed)',
                color: 'var(--text-muted)',
                fontFamily: 'var(--font-body)',
                margin: 0,
              }}>
                {feature.description}
              </p>
            </div>
          ))}
        </div>

        <div style={{
          padding: 'var(--spacing-2xl) 0',
          marginTop: 'var(--spacing-xl)',
        }}>
          <p style={{
            fontSize: 'var(--font-size-h3)',
            fontWeight: 500,
            textAlign: 'center',
            marginBottom: 'var(--spacing-xl)',
            color: 'var(--text-white)',
            fontFamily: 'var(--font-headline)',
          }}>
            {fieldValues.stats_heading || 'Measurable Impact Across Key Outcomes'}
          </p>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: 'var(--spacing-lg)' }} className="intelligence-stats-grid">
            {stats.map((stat, index) => (
              <div
                key={index}
                className="stat-card scroll-animate"
                data-delay={index * 100}
                style={{
                  padding: 'var(--card-padding)',
                  background: 'rgba(255, 255, 255, 0.08)',
                  borderRadius: 'var(--radius-xl)',
                  border: '1px solid rgba(255, 255, 255, 0.15)',
                  boxShadow: '0 8px 32px rgba(0, 0, 0, 0.2)',
                  transition: 'var(--transition-smooth)',
                  position: 'relative',
                  overflow: 'hidden',
                  backdropFilter: 'blur(10px)',
                  textAlign: 'center',
                }}
              >
                <div style={{
                  position: 'absolute',
                  top: '-50%',
                  right: '-20%',
                  width: '150px',
                  height: '150px',
                  background: 'radial-gradient(circle, rgba(239, 71, 111, 0.15) 0%, transparent 70%)',
                  borderRadius: 'var(--radius-circle)'
                }} />
                <div style={{
                  fontSize: 'var(--font-size-h1)',
                  fontWeight: 800,
                  background: 'var(--gradient-coral-peach)',
                  WebkitBackgroundClip: 'text',
                  WebkitTextFillColor: 'transparent',
                  backgroundClip: 'text',
                  letterSpacing: 'var(--letter-spacing-tight)',
                  marginBottom: 'var(--spacing-sm)',
                  position: 'relative',
                  zIndex: 'var(--z-base)',
                  fontFamily: 'var(--font-headline)',
                }}>
                  {stat.value}
                </div>
                <div style={{
                  fontSize: 'var(--font-size-body)',
                  color: 'rgba(255, 255, 255, 0.9)',
                  fontWeight: 500,
                  lineHeight: 'var(--line-height-normal)',
                  position: 'relative',
                  zIndex: 'var(--z-base)',
                }}>
                  {stat.label}
                </div>
              </div>
            ))}
          </div>

          {/* Testimonials Grid */}
          <div style={{
            display: 'grid',
            gridTemplateColumns: `repeat(${Math.min(testimonials.length, 3)}, 1fr)`,
            gap: 'var(--spacing-lg)',
            marginTop: 'var(--spacing-2xl)',
          }} className="intelligence-testimonials-grid">
            <style>{`
              @media (max-width: 768px) {
                .intelligence-testimonials-grid {
                  grid-template-columns: 1fr !important;
                }
              }
            `}</style>

            {testimonials.map((testimonial: any, index: number) => (
              <div
                key={index}
                style={{
                  padding: 'var(--spacing-lg)',
                  background: 'rgba(255, 255, 255, 0.08)',
                  borderRadius: 'var(--radius-lg)',
                  border: '1px solid rgba(255, 255, 255, 0.15)',
                }}
              >
                <p style={{
                  fontSize: 'var(--font-size-small)',
                  fontStyle: 'italic',
                  color: 'rgba(255, 255, 255, 0.85)',
                  lineHeight: 'var(--line-height-relaxed)',
                  marginBottom: 'var(--spacing-md)',
                }}>
                  "{testimonial.quote}"
                </p>
                <p style={{
                  fontSize: 'var(--font-size-xs)',
                  fontWeight: 600,
                  color: 'rgba(255, 255, 255, 0.9)',
                  margin: 0,
                }}>
                  {testimonial.author}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
    </>
  );
}

export const fields: any = [
  {
    type: 'text',
    name: 'heading',
    label: 'Section Heading',
    default: 'The Intelligence',
  },
  {
    type: 'text',
    name: 'subtitle',
    label: 'Subtitle',
    default: 'Transform human connection into measurable outcomes.',
  },
  {
    type: 'group',
    name: 'features',
    label: 'Features',
    help_text: 'Edit the feature cards. Leave empty to use defaults.',
    occurrence: {
      min: 0,
      max: 6,
      default: 0,
    },
    children: [
      {
        type: 'choice',
        name: 'icon_key',
        label: 'Icon',
        choices: [
          ['reveal', 'Reveal (Insights)'],
          ['spark', 'Spark (Reporting)'],
          ['scale', 'Scale (Alerts)'],
          ['fuel', 'Fuel (Measurement)'],
        ],
        default: 'reveal',
      },
      {
        type: 'text',
        name: 'title',
        label: 'Feature Title',
        default: 'Feature Title',
      },
      {
        type: 'text',
        name: 'description',
        label: 'Feature Description',
        default: 'Feature description goes here.',
      },
    ],
  },
  {
    type: 'text',
    name: 'stats_heading',
    label: 'Stats Heading',
    default: 'Measurable Impact Across Key Outcomes',
  },
  {
    type: 'group',
    name: 'stats',
    label: 'Statistics',
    help_text: 'Edit the stat cards. Leave empty to use defaults.',
    occurrence: {
      min: 0,
      max: 6,
      default: 0,
    },
    children: [
      {
        type: 'text',
        name: 'value',
        label: 'Stat Value',
        default: '+6%',
      },
      {
        type: 'text',
        name: 'stat_label',
        label: 'Stat Label',
        default: 'retention lift',
      },
    ],
  },
  {
    type: 'group',
    name: 'testimonials',
    label: 'Testimonials',
    help_text: 'Edit testimonials. Leave empty to use defaults.',
    occurrence: {
      min: 0,
      max: 6,
      default: 0,
    },
    children: [
      {
        type: 'text',
        name: 'quote',
        label: 'Quote',
        default: 'Testimonial quote goes here.',
      },
      {
        type: 'text',
        name: 'author',
        label: 'Author',
        default: '– Author Name, Title, Organization',
      },
    ],
  },
];

export const meta = {
  label: 'Intelligence Section',
};
