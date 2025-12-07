import {
  ModuleFields,
  TextField,
  ChoiceField,
} from '@hubspot/cms-components/fields';

// HubSpot Form Configuration
const HUBSPOT_PORTAL_ID = '512371';
const DEFAULT_FORM_ID = 'ac828e91-31fb-4234-8f34-979725ec0340';

export function Component({ fieldValues }: any) {
  const heading = fieldValues.heading || 'Stay in the Loop';
  const description = fieldValues.description || 'Get insights on mentorship, retention strategies, and AI-powered education delivered to your inbox.';
  const layout = fieldValues.layout || 'horizontal';
  const formId = fieldValues.form_id || DEFAULT_FORM_ID;

  return (
    <>
      <style dangerouslySetInnerHTML={{__html: `
        /* HubSpot Newsletter form styling */
        .newsletter-hs-form .hs-form {
          font-family: var(--font-body) !important;
        }

        .newsletter-hs-form .hs-form-field {
          margin-bottom: 0 !important;
        }

        .newsletter-hs-form .hs-form-field label {
          display: none !important;
        }

        .newsletter-hs-form .hs-input {
          width: 100% !important;
          padding: 12px 16px !important;
          border: 2px solid var(--border-light) !important;
          border-radius: 8px !important;
          font-size: 16px !important;
          transition: border-color 0.2s ease !important;
          font-family: inherit !important;
          background: white !important;
        }

        .newsletter-hs-form .hs-input:focus {
          border-color: var(--text-coral) !important;
          outline: none !important;
          box-shadow: 0 0 0 3px rgba(239, 71, 111, 0.1) !important;
        }

        .newsletter-hs-form .hs-button {
          background: var(--gradient-coral) !important;
          color: white !important;
          padding: 12px 24px !important;
          border: none !important;
          border-radius: 100px !important;
          font-weight: 600 !important;
          font-size: 16px !important;
          cursor: pointer !important;
          transition: all 0.2s ease !important;
          white-space: nowrap !important;
        }

        .newsletter-hs-form .hs-button:hover {
          transform: translateY(-2px) !important;
          box-shadow: 0 8px 20px rgba(239, 71, 111, 0.3) !important;
        }

        .newsletter-hs-form .hs-error-msgs {
          color: #dc2626 !important;
          font-size: 13px !important;
          margin-top: 4px !important;
        }

        .newsletter-hs-form .submitted-message {
          text-align: center !important;
          padding: 20px !important;
          color: var(--text-primary) !important;
          font-weight: 500 !important;
        }

        /* Horizontal layout adjustments */
        .newsletter-hs-form.layout-horizontal .hs-form {
          display: flex !important;
          gap: 8px !important;
          align-items: flex-start !important;
        }

        .newsletter-hs-form.layout-horizontal .hs-form-field {
          flex: 1 !important;
        }

        .newsletter-hs-form.layout-horizontal .hs-submit {
          flex-shrink: 0 !important;
        }

        @media (max-width: 768px) {
          .newsletter-hs-form.layout-horizontal .hs-form {
            flex-direction: column !important;
          }
          .newsletter-hs-form.layout-horizontal .hs-button {
            width: 100% !important;
          }
        }
      `}} />

      <script dangerouslySetInnerHTML={{__html: `
        (function() {
          var portalId = "${HUBSPOT_PORTAL_ID}";
          var formId = "${formId}";
          var formLoaded = false;

          function loadHubSpotScript(callback) {
            if (window.hbspt && window.hbspt.forms) {
              callback();
              return;
            }
            var script = document.createElement('script');
            script.src = '//js.hsforms.net/forms/embed/v2.js';
            script.charset = 'utf-8';
            script.onload = callback;
            document.head.appendChild(script);
          }

          function createNewsletterForm() {
            var target = document.getElementById('newsletter-hs-form');
            if (!target || formLoaded) return;

            target.innerHTML = '';

            window.hbspt.forms.create({
              region: "na1",
              portalId: portalId,
              formId: formId,
              target: "#newsletter-hs-form"
            });
            formLoaded = true;
          }

          function initNewsletter() {
            loadHubSpotScript(createNewsletterForm);
          }

          if (document.readyState === 'loading') {
            document.addEventListener('DOMContentLoaded', initNewsletter);
          } else {
            setTimeout(initNewsletter, 100);
          }
        })();
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

        {/* HubSpot Form */}
        <div
          id="newsletter-hs-form"
          className={`newsletter-hs-form ${layout === 'horizontal' ? 'layout-horizontal' : ''}`}
          style={{ maxWidth: layout === 'vertical' ? '500px' : '100%', margin: layout === 'vertical' ? '0 auto' : '0' }}
        >
          <div style={{
            padding: '20px',
            textAlign: 'center',
            color: 'var(--text-muted)',
          }}>
            <p>Loading form...</p>
          </div>
        </div>

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
      name="form_id"
      label="HubSpot Form ID"
      default="ac828e91-31fb-4234-8f34-979725ec0340"
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
  </ModuleFields>
);

export const meta = {
  label: 'Newsletter Signup',
};
