import {
  ModuleFields,
  TextField,
} from '@hubspot/cms-components/fields';
import revealIcon from '../../../assets/reveal-icon.svg';
import sparkIcon from '../../../assets/spark-icon.svg';
import scaleIcon from '../../../assets/scale-icon.svg';
import fuelIcon from '../../../assets/fuel-icon.svg';
import { useScrollAnimation, animationStyles } from '../../hooks/useScrollAnimation';

export function Component({ fieldValues }: any) {
  const { elementRef, isVisible } = useScrollAnimation({ threshold: 0.15 });
  // Map icon names to imported icon assets
  const iconMap: Record<string, string> = {
    reveal: revealIcon,
    spark: sparkIcon,
    scale: scaleIcon,
    fuel: fuelIcon,
  };

  // Use custom features if provided, otherwise fall back to defaults
  const features = (fieldValues.features && fieldValues.features.length > 0)
    ? fieldValues.features.map((f: any) => ({
        icon: iconMap[f.icon_key] || revealIcon,
        title: f.title,
        description: f.description,
        linkText: f.link_text || 'Learn more',
        linkUrl: f.link_url || '#'
      }))
    : [
        {
          icon: revealIcon,
          title: 'Reveal',
          description: 'Uncover hidden growth signals, belonging gaps, and network strength through AI pattern recognition.',
          linkText: 'Learn more',
          linkUrl: '#'
        },
        {
          icon: sparkIcon,
          title: 'Spark',
          description: 'AI-guided conversation prompts that spark increased engagement, confidence, and relationship quality.',
          linkText: 'Learn more',
          linkUrl: '#'
        },
        {
          icon: scaleIcon,
          title: 'Scale',
          description: 'Automate workflows, matching, onboarding, and engagement across cohorts, campuses, districts, and employers.',
          linkText: 'Learn more',
          linkUrl: '#'
        },
        {
          icon: fuelIcon,
          title: 'Fuel',
          description: 'Turn conversations and connection data into real-time intelligence that fuels retention and workforce mobility.',
          linkText: 'Learn more',
          linkUrl: '#'
        }
      ];

  return (
    <section
      ref={elementRef as React.RefObject<HTMLElement>}
      style={{
        padding: 'var(--section-padding-lg) var(--spacing-lg)',
        background: 'linear-gradient(180deg, white 0%, #FFFBF8 50%, white 100%)',
        backgroundImage: 'var(--pattern-dots)',
        backgroundSize: 'var(--pattern-dots-size)',
        position: 'relative',
        ...animationStyles.subtleSlideUp(isVisible),
      }}
    >
      <div style={{ maxWidth: 'var(--max-width-xl)', margin: '0 auto', padding: '0 var(--container-padding)' }}>
        <h2 style={{
          fontSize: 'var(--font-size-h2)',
          fontWeight: 700,
          textAlign: 'center',
          marginBottom: 'var(--spacing-sm)',
          color: 'var(--text-primary)',
          fontFamily: 'var(--font-headline)',
          lineHeight: 'var(--line-height-tight)',
          letterSpacing: 'var(--letter-spacing-tight)'
        }}>
          {fieldValues.heading}
        </h2>
        <p style={{
          textAlign: 'center',
          fontSize: '1.1rem',
          color: 'var(--text-secondary)',
          marginBottom: 'var(--spacing-2xl)',
          maxWidth: 'var(--max-width-prose)',
          margin: '0 auto var(--spacing-2xl)'
        }}>
          {fieldValues.subtitle}
        </p>
        <div className="features-grid" style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(2, 1fr)',
          gap: '2.5rem',
          maxWidth: '1100px',
          margin: '0 auto'
        }}>
          {features.map((feature, index) => (
            <div
              key={index}
              className="feature-card"
              style={{
                background: 'linear-gradient(135deg, rgba(255, 255, 255, 0.9) 0%, rgba(255, 251, 248, 0.9) 100%)',
                padding: 'var(--card-padding-lg)',
                borderRadius: 'var(--radius-xl)',
                boxShadow: 'var(--shadow-md)',
                border: '1px solid var(--border-light)',
                transition: 'var(--transition-bounce)',
                cursor: 'pointer',
                position: 'relative',
                overflow: 'hidden',
                ...animationStyles.staggeredSubtle(isVisible, index * 0.1)
              }}
            >
              <div style={{
                marginBottom: 'var(--spacing-lg)',
                height: '60px',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'flex-start',
                transition: 'var(--transition-smooth)'
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
                fontWeight: 600,
                marginBottom: 'var(--spacing-sm)',
                color: 'var(--text-primary)',
                fontFamily: 'var(--font-headline)',
                lineHeight: 'var(--line-height-normal)',
                transition: 'var(--transition-medium)'
              }}>
                {feature.title}
              </h3>
              <p style={{
                fontSize: '1rem',
                lineHeight: 1.7,
                color: 'var(--text-muted)',
                fontFamily: 'var(--font-body)',
                marginBottom: 'var(--spacing-md)',
                maxWidth: 'var(--max-width-prose)'
              }}>
                {feature.description}
              </p>
              <a href={feature.linkUrl} style={{
                display: 'inline-flex',
                alignItems: 'center',
                gap: '0.5rem',
                color: 'var(--text-coral)',
                textDecoration: 'none',
                fontSize: '1rem',
                fontWeight: 600,
                transition: 'var(--transition-medium)'
              }}>
                {feature.linkText} <span style={{ fontSize: '1.25rem' }}>→</span>
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
    default: 'The AI Mentorship OS: One System, Infinite Pathways',
  },
  {
    type: 'text',
    name: 'subtitle',
    label: 'Subtitle',
    default: 'Our data engine reveals, sparks, scales, and fuels connections across education, workforce, and early talent ecosystems.',
  },
  {
    type: 'group',
    name: 'features',
    label: 'Features',
    occurrence: {
      min: 0,
      max: 8,
      default: 0,
    },
    children: [
      {
        type: 'choice',
        name: 'icon_key',
        label: 'Icon',
        choices: [
          ['reveal', 'Reveal Icon'],
          ['spark', 'Spark Icon'],
          ['scale', 'Scale Icon'],
          ['fuel', 'Fuel Icon'],
        ],
        default: 'reveal',
      },
      {
        type: 'text',
        name: 'title',
        label: 'Title',
        default: 'Reveal',
      },
      {
        type: 'text',
        name: 'description',
        label: 'Description',
        default: 'Uncover hidden growth signals, belonging gaps, and network strength through AI pattern recognition.',
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
    ],
  },
];

export const meta = {
  label: 'AI OS Features',
};
