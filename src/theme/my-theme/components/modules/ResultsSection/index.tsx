import {
  ModuleFields,
  TextField,
} from '@hubspot/cms-components/fields';
import girlMicroscopeImg from '../../../assets/girl-looking-into-microscope.png';
import starSvg from '../../../assets/Star.svg';
import fourLeafSvg from '../../../assets/four-leaf-graphic.svg';

export function Component({ fieldValues }: any) {
  const stats = [
    { number: '+6%', label: 'retention lift for program participants' },
    { number: '+8–19%', label: 'boost in sense of belonging' },
    { number: '+30%', label: 'increase in career confidence' },
    { number: '+42%', label: 'increase in intern-to-full-time conversion' }
  ];

  return (
    <section style={{
      padding: '100px 20px',
      background: 'linear-gradient(180deg, white 0%, #FFFBF8 100%)',
      position: 'relative',
      overflow: 'hidden'
    }}>
      <div style={{ maxWidth: '1200px', margin: '0 auto', padding: '0 1.5rem', position: 'relative', zIndex: 1 }}>
        <div className="results-content" style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '5rem', alignItems: 'center' }}>
          <div style={{
            position: 'relative',
            height: '500px',
            borderRadius: '20px',
            overflow: 'hidden'
          }}>
            <img
              src={girlMicroscopeImg}
              alt="Mentorship in action"
              style={{
                width: '100%',
                height: '100%',
                objectFit: 'cover',
                borderRadius: '20px'
              }}
            />
            <img
              src={starSvg}
              alt="Star decoration"
              style={{
                position: 'absolute',
                top: '20px',
                right: '20px',
                width: '60px',
                height: '60px'
              }}
            />
            <img
              src={fourLeafSvg}
              alt="Four leaf graphic"
              style={{
                position: 'absolute',
                bottom: '20px',
                left: '20px',
                width: '80px',
                height: '80px'
              }}
            />
          </div>
          <div>
            <h2 style={{
              fontSize: '3rem',
              lineHeight: 1.2,
              marginBottom: '1.5rem',
              fontFamily: 'var(--font-headline)'
            }}>
              Real Mentorship. <span style={{
                background: 'var(--gradient-text)',
                WebkitBackgroundClip: 'text',
                WebkitTextFillColor: 'transparent',
                backgroundClip: 'text'
              }}>Real Results.</span>
            </h2>
            <p style={{
              fontSize: '1.15rem',
              lineHeight: 1.8,
              marginBottom: '3rem',
              color: '#6B7280'
            }}>
              Our platform delivers measurable outcomes across every cohort—learners, mentors, educators, and employers.
            </p>
            <div className="stats-grid" style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '1.75rem' }}>
              {stats.map((stat, index) => (
                <div key={index} className="stat-card" style={{
                  padding: '2.5rem',
                  background: 'linear-gradient(135deg, rgba(255, 255, 255, 0.95) 0%, rgba(255, 251, 248, 0.95) 100%)',
                  borderRadius: '20px',
                  border: '2px solid rgba(255, 75, 126, 0.1)',
                  boxShadow: '0 8px 24px rgba(0, 0, 0, 0.06)',
                  transition: 'all 0.4s ease',
                  cursor: 'pointer',
                  position: 'relative',
                  overflow: 'hidden'
                }}>
                  <div style={{
                    position: 'absolute',
                    top: '-50%',
                    right: '-20%',
                    width: '150px',
                    height: '150px',
                    background: 'radial-gradient(circle, rgba(255, 75, 126, 0.08) 0%, transparent 70%)',
                    borderRadius: '50%'
                  }} />
                  <div style={{
                    fontSize: '3.5rem',
                    marginBottom: '0.75rem',
                    fontWeight: 800,
                    background: 'linear-gradient(135deg, #FF4B7E 0%, #FF6B9D 50%, #FFA0BC 100%)',
                    WebkitBackgroundClip: 'text',
                    WebkitTextFillColor: 'transparent',
                    backgroundClip: 'text',
                    letterSpacing: '-0.02em',
                    position: 'relative',
                    zIndex: 1
                  }}>
                    {stat.number}
                  </div>
                  <div style={{
                    fontSize: '0.95rem',
                    lineHeight: 1.6,
                    color: '#374151',
                    fontWeight: 500,
                    position: 'relative',
                    zIndex: 1
                  }}>
                    {stat.label}
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
      name="heading"
      label="Section Heading"
      default="Real Results, Real Impact"
    />
  </ModuleFields>
);

export const meta = {
  label: 'Results Section',
};
