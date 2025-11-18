import {
  ModuleFields,
  TextField,
} from '@hubspot/cms-components/fields';
import girlInOfficeImg from '../../../assets/girl-in-office.png';
import wedgeSvg from '../../../assets/Wedge.svg';

export function Component({ fieldValues }: any) {
  const stages = [
    'College Success Ready',
    'Talent Acquisition',
    'Professional Development',
    'DEI',
    'Workforce Development'
  ];

  return (
    <section className="stages-section" style={{ padding: '80px 20px', background: 'white' }}>
      <div className="container">
        <h2 style={{
          fontSize: '2.5rem',
          fontWeight: 500,
          textAlign: 'center',
          marginBottom: '3rem',
          fontFamily: 'var(--font-headline)',
          color: '#1a1a1a'
        }}>
          Mentorship at every <span className="text-gradient">stage</span>
        </h2>
        <p style={{
          textAlign: 'center',
          fontSize: '1.05rem',
          color: '#6B7280',
          marginBottom: '4rem',
          maxWidth: '700px',
          margin: '0 auto 4rem'
        }}>
          From first-year students to experienced professionals, our platform scales mentorship to drive growth, belonging, and opportunity.
        </p>
        <div className="tabs" style={{
          background: 'rgba(255, 251, 248, 0.5)',
          padding: '0.5rem',
          borderRadius: '16px',
          marginBottom: '4rem',
          display: 'flex',
          gap: '0.5rem',
          justifyContent: 'center',
          flexWrap: 'wrap'
        }}>
          {stages.map((stage, index) => (
            <button
              key={index}
              className={`tab-btn ${index === 0 ? 'active' : ''}`}
              style={{
                padding: '1rem 2rem',
                borderRadius: '12px',
                fontFamily: 'var(--font-body)',
                fontSize: '1rem',
                border: 'none',
                cursor: 'pointer',
                background: index === 0 ? 'linear-gradient(135deg, #FF4B7E 0%, #FF6B9D 100%)' : 'transparent',
                color: index === 0 ? 'white' : '#666',
                transition: 'all 0.3s ease',
                boxShadow: index === 0 ? '0 4px 16px rgba(255, 75, 126, 0.3)' : 'none'
              }}
            >
              {stage}
            </button>
          ))}
        </div>
        <div className="panel-layout" style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '5rem', alignItems: 'center', maxWidth: '1200px', margin: '0 auto', padding: '0 1.5rem' }}>
          <div>
            <h3 className="panel-title" style={{ fontSize: '2rem', marginBottom: '1.25rem', color: '#1a1a1a', fontFamily: 'var(--font-headline)' }}>
              Connection is the Missing Link.
            </h3>
            <p className="panel-description" style={{ fontSize: '1.05rem', lineHeight: 1.8, color: '#6B7280', marginBottom: '2rem' }}>
              Maya, a recent college graduate, did everything right—good grades and a polished résumé. Yet after 100+ applications she had no offers, saying, "I don't think I'll ever ever get a job." Her new mentorship relationship provided the clear path and crucial social network she needed, transforming her despair into confident success.
            </p>
            <h4 className="panel-subtitle" style={{ fontSize: '1.5rem', margin: '2.5rem 0 1.25rem', color: '#1a1a1a', fontFamily: 'var(--font-headline)' }}>
              Mentorship Made Maya Job-Ready.
            </h4>
            <p className="panel-description" style={{ fontSize: '1.05rem', lineHeight: 1.8, color: '#6B7280' }}>
              Mentees see a 21% increase in comfort asking for help from established professionals and an 18% boost in self-efficacy.
            </p>
            <div style={{ marginTop: '2.5rem' }}>
              <a href="#" className="panel-more" style={{
                display: 'inline-flex',
                alignItems: 'center',
                gap: '0.5rem',
                padding: '0.875rem 1.75rem',
                background: 'white',
                border: '2px solid var(--primary-blue)',
                borderRadius: '12px',
                fontSize: '1rem',
                color: 'var(--primary-blue)',
                textDecoration: 'none',
                fontWeight: 600,
                transition: 'all 0.4s cubic-bezier(0.34, 1.56, 0.64, 1)'
              }}>
                Anya, Nic, Jordan. Explore more stories →
              </a>
            </div>
          </div>
          <div style={{
            position: 'relative',
            height: '500px',
            borderRadius: '20px',
            overflow: 'hidden'
          }}>
            <img
              src={girlInOfficeImg}
              alt="Student mentorship"
              style={{
                width: '100%',
                height: '100%',
                objectFit: 'cover',
                borderRadius: '20px'
              }}
            />
            <img
              src={wedgeSvg}
              alt="Wedge decoration"
              style={{
                position: 'absolute',
                bottom: '-10px',
                right: '-10px',
                width: '120px',
                height: '120px',
                opacity: 0.6
              }}
            />
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
      default="The Mentorship Journey"
    />
  </ModuleFields>
);

export const meta = {
  label: 'Mentorship Stages',
};
