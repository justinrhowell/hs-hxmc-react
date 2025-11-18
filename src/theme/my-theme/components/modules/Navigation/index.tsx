import {
  ModuleFields,
  TextField,
} from '@hubspot/cms-components/fields';
import mcLogo from '../../../assets/mc-logo.png';

export function Component({ fieldValues }: any) {
  const menuItems = [
    { label: 'Welcome to MC', hasDropdown: true },
    { label: 'Impact', hasDropdown: true },
    { label: 'Solutions', hasDropdown: false },
    { label: 'Pricing', hasDropdown: false },
    { label: 'Resources', hasDropdown: false },
    { label: 'Company', hasDropdown: true },
    { label: 'Login', hasDropdown: false }
  ];

  return (
    <nav style={{
      position: 'sticky',
      top: 0,
      background: 'rgba(255, 255, 255, 0.98)',
      backdropFilter: 'blur(20px)',
      boxShadow: '0 1px 0 rgba(0, 0, 0, 0.05)',
      zIndex: 1000,
      padding: '1rem 0'
    }}>
      <div style={{ maxWidth: '1200px', margin: '0 auto', padding: '0 1.5rem' }}>
        <div style={{
          display: 'flex',
          justifyContent: 'space-between',
          alignItems: 'center'
        }}>
          <div style={{ height: '40px', display: 'flex', alignItems: 'center' }}>
            <img
              src={mcLogo}
              alt="Mentor Collective"
              style={{ height: '100%', width: 'auto' }}
            />
          </div>
          <div style={{
            display: 'flex',
            alignItems: 'center',
            gap: '2rem'
          }}>
            {menuItems.map((item, index) => (
              <a
                key={index}
                href="#"
                style={{
                  fontFamily: 'var(--font-body)',
                  fontSize: '0.95rem',
                  fontWeight: 500,
                  color: '#1a1a1a',
                  textDecoration: 'none',
                  padding: '0.5rem 0'
                }}
              >
                {item.label}
                {item.hasDropdown && <span style={{ fontSize: '0.7rem', marginLeft: '0.2rem' }}>▼</span>}
              </a>
            ))}
            <a href="#" style={{
              background: 'linear-gradient(135deg, #FF4B7E 0%, #FF6B9D 100%)',
              color: 'white',
              padding: '0.75rem 1.75rem',
              borderRadius: '50px',
              fontSize: '0.95rem',
              fontWeight: 600,
              textDecoration: 'none',
              boxShadow: '0 4px 16px rgba(255, 75, 126, 0.25)'
            }}>
              Request a Demo
            </a>
          </div>
        </div>
      </div>
    </nav>
  );
}

export const fields = (
  <ModuleFields>
    <TextField
      name="logoText"
      label="Logo Text"
      default="Mentor Collective"
    />
  </ModuleFields>
);

export const meta = {
  label: 'Navigation',
};
