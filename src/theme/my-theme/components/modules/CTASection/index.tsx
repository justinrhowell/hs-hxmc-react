import {
  ModuleFields,
  TextField,
} from '@hubspot/cms-components/fields';

export function Component({ fieldValues }: any) {
  return (
    <section style={{
      padding: '100px 20px',
      background: 'linear-gradient(135deg, #FF4B7E 0%, #FF6B9D 50%, #FFA0BC 100%)',
      position: 'relative',
      overflow: 'hidden'
    }}>
      <div className="container">
        <div style={{
          maxWidth: '800px',
          margin: '0 auto',
          textAlign: 'center',
          position: 'relative',
          zIndex: 1
        }}>
          <h2 style={{
            fontSize: '3rem',
            fontWeight: 700,
            color: 'white',
            marginBottom: '24px',
            fontFamily: 'var(--font-headline)',
            lineHeight: 1.2
          }}>
            Ready to unlock your network's hidden power?
          </h2>
          <p style={{
            fontSize: '1.25rem',
            color: 'rgba(255, 255, 255, 0.95)',
            marginBottom: '40px',
            lineHeight: 1.6
          }}>
            Go big. Scale connection. Drive outcomes in your school or organization.
          </p>
          <button style={{
            padding: '18px 40px',
            background: 'white',
            color: '#FF4B7E',
            border: 'none',
            borderRadius: '50px',
            fontSize: '1.05rem',
            fontWeight: 700,
            cursor: 'pointer',
            boxShadow: '0 8px 32px rgba(0, 0, 0, 0.2)',
            transition: 'all 0.3s ease'
          }}>
            Request a Demo
          </button>
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
      default="Ready to Transform Your Mentorship Program?"
    />
    <TextField
      name="subheading"
      label="Subheading"
      default="Join thousands of organizations using AI-powered mentorship to drive real results"
    />
    <TextField
      name="buttonText"
      label="Button Text"
      default="Get Started Today"
    />
  </ModuleFields>
);

export const meta = {
  label: 'CTA Section',
};
