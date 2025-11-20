import {
  ModuleFields,
  TextField,
} from '@hubspot/cms-components/fields';
import mcLogo from '../../../assets/mc-logo.png';

export function Component({ fieldValues }: any) {
  return (
    <footer style={{
      padding: '60px 20px 30px',
      background: '#1a1a1a',
      color: 'white'
    }}>
      <div className="container">
        <div style={{
          display: 'grid',
          gridTemplateColumns: '2fr 1fr 1fr 1fr 1fr',
          gap: '40px',
          marginBottom: '50px'
        }}>
          <div>
            <div style={{
              marginBottom: '20px',
              height: '40px'
            }}>
              <img
                src={mcLogo}
                alt="Mentor Collective"
                style={{
                  height: '100%',
                  width: 'auto',
                  filter: 'brightness(0) invert(1)'
                }}
              />
            </div>
            <p style={{
              fontSize: '0.95rem',
              color: '#999',
              lineHeight: 1.7,
              marginBottom: '20px',
              maxWidth: '300px'
            }}>
              The premier AI-powered mentorship operating system for human connection, resilience, and adaptability.
            </p>
            <div style={{ display: 'flex', gap: '16px' }}>
              <a href="#" style={{ color: '#999', fontSize: '20px' }}>f</a>
              <a href="#" style={{ color: '#999', fontSize: '20px' }}>𝕏</a>
              <a href="#" style={{ color: '#999', fontSize: '20px' }}>in</a>
              <a href="#" style={{ color: '#999', fontSize: '20px' }}>IG</a>
            </div>
          </div>
          <div>
            <h3 style={{
              fontSize: '16px',
              fontWeight: 600,
              marginBottom: '20px',
              color: 'white'
            }}>
              Products
            </h3>
            <div style={{
              display: 'flex',
              flexDirection: 'column',
              gap: '12px'
            }}>
              <a href="#" style={{ color: '#999', textDecoration: 'none', fontSize: '0.95rem' }}>Platform</a>
              <a href="#" style={{ color: '#999', textDecoration: 'none', fontSize: '0.95rem' }}>Integrations</a>
              <a href="#" style={{ color: '#999', textDecoration: 'none', fontSize: '0.95rem' }}>Features</a>
            </div>
          </div>
          <div>
            <h3 style={{
              fontSize: '16px',
              fontWeight: 600,
              marginBottom: '20px',
              color: 'white'
            }}>
              Solutions
            </h3>
            <div style={{
              display: 'flex',
              flexDirection: 'column',
              gap: '12px'
            }}>
              <a href="#" style={{ color: '#999', textDecoration: 'none', fontSize: '0.95rem' }}>Higher Ed</a>
              <a href="#" style={{ color: '#999', textDecoration: 'none', fontSize: '0.95rem' }}>Corporate</a>
              <a href="#" style={{ color: '#999', textDecoration: 'none', fontSize: '0.95rem' }}>Nonprofit</a>
            </div>
          </div>
          <div>
            <h3 style={{
              fontSize: '16px',
              fontWeight: 600,
              marginBottom: '20px',
              color: 'white'
            }}>
              Resources
            </h3>
            <div style={{
              display: 'flex',
              flexDirection: 'column',
              gap: '12px'
            }}>
              <a href="#" style={{ color: '#999', textDecoration: 'none', fontSize: '0.95rem' }}>Blog</a>
              <a href="#" style={{ color: '#999', textDecoration: 'none', fontSize: '0.95rem' }}>Case Studies</a>
              <a href="#" style={{ color: '#999', textDecoration: 'none', fontSize: '0.95rem' }}>Support</a>
            </div>
          </div>
          <div>
            <h3 style={{
              fontSize: '16px',
              fontWeight: 600,
              marginBottom: '20px',
              color: 'white'
            }}>
              Company
            </h3>
            <div style={{
              display: 'flex',
              flexDirection: 'column',
              gap: '12px'
            }}>
              <a href="#" style={{ color: '#999', textDecoration: 'none', fontSize: '0.95rem' }}>About Us</a>
              <a href="#" style={{ color: '#999', textDecoration: 'none', fontSize: '0.95rem' }}>Careers</a>
              <a href="#" style={{ color: '#999', textDecoration: 'none', fontSize: '0.95rem' }}>Contact</a>
            </div>
          </div>
        </div>
        <div style={{
          borderTop: '1px solid #333',
          paddingTop: '30px',
          display: 'flex',
          justifyContent: 'space-between',
          alignItems: 'center',
          fontSize: '0.875rem',
          color: '#666'
        }}>
          <div>© 2025 Mentor Collective. All rights reserved.</div>
          <div style={{ display: 'flex', gap: '24px' }}>
            <a href="#" style={{ color: '#666', textDecoration: 'none' }}>Privacy Policy</a>
            <a href="#" style={{ color: '#666', textDecoration: 'none' }}>Terms of Service</a>
          </div>
        </div>
      </div>
    </footer>
  );
}

export const fields = (
  <ModuleFields>
    <TextField
      name="copyright"
      label="Copyright Text"
      default="© 2025 Mentor Collective. All rights reserved."
    />
  </ModuleFields>
);

export const meta = {
  label: 'Footer',
};
