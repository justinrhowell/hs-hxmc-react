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
          border-color: var(--primary-coral) !important;
          box-shadow: 0 0 0 3px var(--bg-light-coral) !important;
        }

        .newsletter-button:hover {
          transform: translateY(-2px);
          box-shadow: var(--shadow-coral) !important;
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
        padding: 'var(--section-padding-sm) var(--spacing-lg)',
        background: layout === 'boxed' ? 'var(--bg-white)' : 'transparent',
      }}>
        <div style={{
          maxWidth: layout === 'wide' ? 'var(--max-width-md)' : 'var(--max-width-sm)',
          margin: '0 auto',
          textAlign: layout === 'vertical' ? 'center' : 'left',
        }}>
          {layout === 'boxed' && (
            <div style={{
              background: 'linear-gradient(135deg, var(--cream) 0%, var(--white) 100%)',
              padding: 'var(--spacing-xl)',
              borderRadius: 'var(--radius-xl)',
              border: '2px solid var(--border-light)',
              boxShadow: 'var(--shadow-md)',
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
          fontSize: 'var(--font-size-h3)',
          fontWeight: 500,
          marginBottom: 'var(--spacing-xs)',
          color: 'var(--text-primary)',
          fontFamily: 'var(--font-headline)',
        }}>
          {heading}
        </h3>

        {/* Description */}
        <p style={{
          fontSize: 'var(--font-size-body)',
          lineHeight: 'var(--line-height-normal)',
          color: 'var(--text-muted)',
          marginBottom: 'var(--spacing-lg)',
          maxWidth: layout === 'vertical' ? '500px' : '100%',
          margin: layout === 'vertical' ? '0 auto var(--spacing-lg)' : '0 0 var(--spacing-lg) 0',
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
              gap: 'var(--spacing-xs)',
              maxWidth: 'var(--max-width-sm)',
            }}
          >
            <input
              type="email"
              placeholder={placeholder}
              className="newsletter-input newsletter-input-horizontal"
              style={{
                flex: 1,
                padding: 'var(--spacing-sm) var(--spacing-md)',
                border: '2px solid var(--border-light)',
                borderRadius: 'var(--radius-md)',
                fontSize: 'var(--font-size-body)',
                outline: 'none',
                transition: 'var(--transition-medium)',
              }}
            />
            <button
              type="button"
              className="newsletter-button newsletter-button-horizontal"
              style={{
                background: 'var(--gradient-coral)',
                color: 'var(--text-white)',
                padding: 'var(--btn-padding-sm)',
                borderRadius: 'var(--radius-full)',
                border: 'none',
                fontSize: 'var(--font-size-body)',
                fontWeight: 600,
                cursor: 'pointer',
                transition: 'var(--transition-medium)',
                whiteSpace: 'nowrap',
                display: 'flex',
                alignItems: 'center',
                gap: 'var(--spacing-xs)',
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
                padding: 'var(--spacing-sm) var(--spacing-md)',
                border: '2px solid var(--border-light)',
                borderRadius: 'var(--radius-full)',
                fontSize: 'var(--font-size-body)',
                outline: 'none',
                transition: 'var(--transition-medium)',
                marginBottom: 'var(--spacing-sm)',
              }}
            />
            <button
              type="button"
              className="newsletter-button"
              style={{
                width: '100%',
                background: 'var(--gradient-coral)',
                color: 'var(--text-white)',
                padding: 'var(--btn-padding)',
                borderRadius: 'var(--radius-full)',
                border: 'none',
                fontSize: 'var(--font-size-body)',
                fontWeight: 600,
                cursor: 'pointer',
                transition: 'var(--transition-medium)',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                gap: 'var(--spacing-xs)',
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
          fontSize: 'var(--font-size-small)',
          color: 'var(--text-muted)',
          marginTop: 'var(--spacing-sm)',
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
