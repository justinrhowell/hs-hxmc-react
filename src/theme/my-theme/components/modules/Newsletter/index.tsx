import {
  ModuleFields,
  TextField,
  ChoiceField,
} from '@hubspot/cms-components/fields';

export function Component({ fieldValues }: any) {
  const heading = fieldValues.heading || 'Stay in the Loop';
  const description = fieldValues.description || 'Get insights on mentorship, retention strategies, and AI-powered education delivered to your inbox.';
  const placeholder = fieldValues.placeholder || 'Enter your email address';
  const buttonText = fieldValues.button_text || 'Subscribe';
  const layout = fieldValues.layout || 'horizontal';
  const showIcons = fieldValues.show_icons !== 'false';

  return (
    <>
      <style dangerouslySetInnerHTML={{__html: `
        .newsletter-input:focus {
          border-color: #EF476F !important;
          box-shadow: 0 0 0 3px rgba(239, 71, 111, 0.1) !important;
        }

        .newsletter-button:hover {
          transform: translateY(-2px);
          box-shadow: 0 12px 28px rgba(239, 71, 111, 0.35) !important;
        }

        @media (max-width: 768px) {
          .newsletter-form-horizontal {
            flex-direction: column !important;
            gap: 1rem !important;
          }
          .newsletter-input-horizontal {
            padding: 1rem !important;
          }
          .newsletter-button-horizontal {
            width: 100% !important;
            justify-content: center !important;
          }
        }
      `}} />

      <section style={{
        padding: '60px 20px',
        background: layout === 'boxed' ? 'white' : 'transparent',
      }}>
        <div style={{
          maxWidth: layout === 'wide' ? '900px' : '600px',
          margin: '0 auto',
          textAlign: layout === 'vertical' ? 'center' : 'left',
        }}>
          {layout === 'boxed' && (
            <div style={{
              background: 'linear-gradient(135deg, #FDF8EF 0%, #FFFFFF 100%)',
              padding: '3rem',
              borderRadius: '24px',
              border: '2px solid rgba(239, 71, 111, 0.1)',
              boxShadow: '0 8px 32px rgba(0, 0, 0, 0.06)',
            }}>
              {renderContent()}
            </div>
          )}
          {layout !== 'boxed' && renderContent()}
        </div>
      </section>
    </>
  );

  function renderContent() {
    return (
      <>
        {/* Heading */}
        <h3 style={{
          fontSize: 'clamp(1.5rem, 3vw, 2rem)',
          fontWeight: 600,
          marginBottom: '0.75rem',
          color: '#1a1a1a',
          fontFamily: 'var(--font-headline)',
        }}>
          {heading}
        </h3>

        {/* Description */}
        <p style={{
          fontSize: '1rem',
          lineHeight: 1.6,
          color: '#6B7280',
          marginBottom: '2rem',
          maxWidth: layout === 'vertical' ? '500px' : '100%',
          margin: layout === 'vertical' ? '0 auto 2rem' : '0 0 2rem 0',
        }}>
          {description}
        </p>

        {/* Form */}
        {layout === 'horizontal' ? (
          <div
            className="newsletter-form-horizontal"
            style={{
              display: 'flex',
              alignItems: 'center',
              gap: '0.75rem',
              maxWidth: '600px',
            }}
          >
            <input
              type="email"
              placeholder={placeholder}
              className="newsletter-input newsletter-input-horizontal"
              style={{
                flex: 1,
                padding: '0.875rem 1.25rem',
                border: '2px solid #E5E7EB',
                borderRadius: '12px',
                fontSize: '1rem',
                outline: 'none',
                transition: 'all 0.3s ease',
              }}
            />
            <button
              type="button"
              className="newsletter-button newsletter-button-horizontal"
              style={{
                background: 'linear-gradient(135deg, #EF476F 0%, #F89F7B 100%)',
                color: 'white',
                padding: '0.875rem 2rem',
                borderRadius: '12px',
                border: 'none',
                fontSize: '1rem',
                fontWeight: 600,
                cursor: 'pointer',
                transition: 'all 0.3s ease',
                whiteSpace: 'nowrap',
                display: 'flex',
                alignItems: 'center',
                gap: '0.5rem',
              }}
            >
              {buttonText}
              {showIcons && (
                <svg width="18" height="18" viewBox="0 0 24 24" fill="none">
                  <path d="M5 12H19M19 12L12 5M19 12L12 19" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
              )}
            </button>
          </div>
        ) : (
          <div style={{ maxWidth: '500px', margin: layout === 'vertical' ? '0 auto' : '0' }}>
            <input
              type="email"
              placeholder={placeholder}
              className="newsletter-input"
              style={{
                width: '100%',
                padding: '1rem 1.25rem',
                border: '2px solid #E5E7EB',
                borderRadius: '12px',
                fontSize: '1rem',
                outline: 'none',
                transition: 'all 0.3s ease',
                marginBottom: '1rem',
              }}
            />
            <button
              type="button"
              className="newsletter-button"
              style={{
                width: '100%',
                background: 'linear-gradient(135deg, #EF476F 0%, #F89F7B 100%)',
                color: 'white',
                padding: '1rem 2rem',
                borderRadius: '12px',
                border: 'none',
                fontSize: '1rem',
                fontWeight: 600,
                cursor: 'pointer',
                transition: 'all 0.3s ease',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                gap: '0.5rem',
              }}
            >
              {buttonText}
              {showIcons && (
                <svg width="18" height="18" viewBox="0 0 24 24" fill="none">
                  <path d="M5 12H19M19 12L12 5M19 12L12 19" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
              )}
            </button>
          </div>
        )}

        {/* Privacy Note */}
        <p style={{
          fontSize: '0.8rem',
          color: '#9CA3AF',
          marginTop: '1rem',
          textAlign: layout === 'vertical' ? 'center' : 'left',
        }}>
          We respect your privacy. Unsubscribe anytime.
        </p>
      </>
    );
  }
}

export const fields = (
  <ModuleFields>
    <TextField
      name="heading"
      label="Heading"
      default="Stay in the Loop"
    />
    <TextField
      name="description"
      label="Description"
      default="Get insights on mentorship, retention strategies, and AI-powered education delivered to your inbox."
    />
    <TextField
      name="placeholder"
      label="Email Placeholder"
      default="Enter your email address"
    />
    <TextField
      name="button_text"
      label="Button Text"
      default="Subscribe"
    />
    <ChoiceField
      name="layout"
      label="Layout Style"
      choices={[
        ['horizontal', 'Horizontal (side-by-side)'],
        ['vertical', 'Vertical (stacked, centered)'],
        ['boxed', 'Boxed (card style)'],
        ['wide', 'Wide (full width)'],
      ]}
      default="horizontal"
    />
    <ChoiceField
      name="show_icons"
      label="Show Arrow Icon"
      choices={[
        ['true', 'Yes'],
        ['false', 'No'],
      ]}
      default="true"
    />
  </ModuleFields>
);

export const meta = {
  label: 'Newsletter Signup',
};
