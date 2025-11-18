import {
  ModuleFields,
  TextField,
} from '@hubspot/cms-components/fields';
import dukeLogo from '../../../assets/duke-logo.png';
import uclaLogo from '../../../assets/ucla-logo.png';
import cunyLogo from '../../../assets/cuny-logo.png';
import jpmorganLogo from '../../../assets/jpmorgan-chase-logo.png';
import amazonLogo from '../../../assets/amazon-logo.png';
import oakRidgeLogo from '../../../assets/oak-ridge-logo.png';
import sanJacLogo from '../../../assets/san-jac-logo.png';
import risepointLogo from '../../../assets/risepoint-logo.png';
import ncLogo from '../../../assets/nc-logo.png';

export function Component({ fieldValues }: any) {
  const logos = [
    { src: risepointLogo, alt: 'RisePoint' },
    { src: amazonLogo, alt: 'Amazon' },
    { src: ncLogo, alt: 'NC' },
    { src: cunyLogo, alt: 'CUNY' },
    { src: oakRidgeLogo, alt: 'Oak Ridge' },
    { src: sanJacLogo, alt: 'San Jacinto' },
    { src: uclaLogo, alt: 'UCLA' },
    { src: dukeLogo, alt: 'Duke' },
    { src: jpmorganLogo, alt: 'JPMorgan Chase' }
  ];

  return (
    <section style={{
      padding: '80px 20px',
      background: 'linear-gradient(135deg, #FFFBF8 0%, #FFF8F3 50%, #FFFAF5 100%)',
      position: 'relative',
      borderTop: '1px solid rgba(255, 75, 126, 0.08)',
      borderBottom: '1px solid rgba(255, 75, 126, 0.08)'
    }}>
      <div style={{ maxWidth: '1200px', margin: '0 auto', padding: '0 1.5rem' }}>
        <h2 style={{
          fontSize: '1.15rem',
          marginBottom: '3.5rem',
          color: '#666',
          textAlign: 'center',
          fontFamily: 'var(--font-body)',
          fontWeight: 500,
          letterSpacing: '0.02em'
        }}>
          {fieldValues.heading}
        </h2>
        <div style={{
          display: 'flex',
          gap: '3rem',
          alignItems: 'center',
          justifyContent: 'center',
          flexWrap: 'wrap'
        }}>
          {logos.map((logo, index) => (
            <div
              key={index}
              className="logo-item"
              style={{
                height: '40px',
                display: 'flex',
                alignItems: 'center',
                opacity: 0.6,
                filter: 'grayscale(100%)',
                transition: 'all 0.4s ease'
              }}
            >
              <img
                src={logo.src}
                alt={logo.alt}
                style={{
                  height: '100%',
                  width: 'auto',
                  objectFit: 'contain'
                }}
              />
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
      label="Heading"
      default="10+ years of mentorship data: 500K learners, 200K mentors, 200 partners."
    />
  </ModuleFields>
);

export const meta = {
  label: 'Logos Carousel',
};
