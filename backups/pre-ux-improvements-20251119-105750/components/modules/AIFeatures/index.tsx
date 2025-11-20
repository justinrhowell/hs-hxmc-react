import {
  ModuleFields,
  TextField,
} from '@hubspot/cms-components/fields';
import revealIcon from '../../../assets/reveal-icon.svg';
import sparkIcon from '../../../assets/spark-icon.svg';
import scaleIcon from '../../../assets/scale-icon.svg';
import fuelIcon from '../../../assets/fuel-icon.svg';

export function Component({ fieldValues }: any) {
  const features = [
    {
      icon: revealIcon,
      title: 'Reveal',
      description: 'Reveal hidden networks and growth signals. Uncover what makes people tick, connecting learners to opportunity.'
    },
    {
      icon: sparkIcon,
      title: 'Spark',
      description: 'Spark meaningful conversations. AI-guided conversations build confidence and belonging.'
    },
    {
      icon: scaleIcon,
      title: 'Scale',
      description: 'Scale connection at lower cost. Automation tools deliver mentorship anywhere, anytime.'
    },
    {
      icon: fuelIcon,
      title: 'Fuel',
      description: 'Fuel your strategy with human-skill data. Workflows and analytics turn connection data into action and ROI.'
    }
  ];

  return (
    <section style={{
      padding: '100px 20px',
      background: 'linear-gradient(180deg, white 0%, #FFFBF8 50%, white 100%)',
      position: 'relative'
    }}>
      <div style={{ maxWidth: '1200px', margin: '0 auto', padding: '0 1.5rem' }}>
        <h2 style={{
          fontSize: '2.5rem',
          fontWeight: 700,
          textAlign: 'center',
          marginBottom: '1rem',
          color: '#1a1a1a',
          fontFamily: 'var(--font-headline)'
        }}>
          {fieldValues.heading}
        </h2>
        <p style={{
          textAlign: 'center',
          fontSize: '1.05rem',
          color: '#6B7280',
          marginBottom: '4rem',
          maxWidth: '700px',
          margin: '0 auto 4rem'
        }}>
          Our data engine reveals, sparks, scales, and fuels connection.
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
                padding: '3rem',
                borderRadius: '24px',
                boxShadow: '0 4px 20px rgba(0, 0, 0, 0.06)',
                border: '1px solid rgba(255, 75, 126, 0.08)',
                transition: 'all 0.4s cubic-bezier(0.34, 1.56, 0.64, 1)',
                cursor: 'pointer',
                position: 'relative',
                overflow: 'hidden'
              }}
            >
              <div style={{
                marginBottom: '1.75rem',
                height: '60px',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'flex-start',
                transition: 'transform 0.4s ease'
              }}>
                <img
                  src={feature.icon}
                  alt={`${feature.title} icon`}
                  style={{
                    height: '100%',
                    width: 'auto',
                    filter: 'drop-shadow(0 4px 8px rgba(255, 75, 126, 0.15))'
                  }}
                />
              </div>
              <h3 style={{
                fontSize: '1.75rem',
                fontWeight: 600,
                marginBottom: '1rem',
                color: '#1a1a1a',
                fontFamily: 'var(--font-headline)',
                transition: 'color 0.3s ease'
              }}>
                {feature.title}
              </h3>
              <p style={{
                fontSize: '1.05rem',
                lineHeight: 1.7,
                color: '#6B7280',
                fontFamily: 'var(--font-body)',
                marginBottom: '1.5rem'
              }}>
                {feature.description}
              </p>
              <a href="#" style={{
                display: 'inline-flex',
                alignItems: 'center',
                gap: '0.5rem',
                color: '#FF4B7E',
                textDecoration: 'none',
                fontSize: '1rem',
                fontWeight: 600,
                transition: 'gap 0.3s ease'
              }}>
                Learn more <span style={{ fontSize: '1.25rem' }}>→</span>
              </a>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export const fields = (
  <ModuleFields>
    <TextField
      name="heading"
      label="Section Heading"
      default="The AI Mentorship Operating System"
    />
  </ModuleFields>
);

export const meta = {
  label: 'AI OS Features',
};
