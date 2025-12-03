import {
  ModuleFields,
  TextField,
} from '@hubspot/cms-components/fields';
import { ScrollAnimationScript } from '../../shared/ScrollAnimationScript';

export function Component({ fieldValues }: any) {
  const heading = fieldValues.heading || 'Stay Updated with Latest Insights';
  const description = fieldValues.description || 'Get the latest resources, case studies, and best practices delivered directly to your inbox.';
  const ctaText = fieldValues.cta_text || 'Subscribe';
  const inputPlaceholder = fieldValues.input_placeholder || 'Enter your email';

  return (
    <>
      <ScrollAnimationScript />
      <style>{`
        .resource-cta-btn:hover {
          background: var(--bg-white) !important;
          color: var(--primary-coral) !important;
        }
        .resource-cta-input:focus {
          outline: none;
        }
        @media (max-width: 600px) {
          .resource-cta-form {
            flex-direction: column !important;
            padding: var(--spacing-sm) !important;
          }
          .resource-cta-input {
            padding: var(--spacing-sm) !important;
            text-align: center !important;
          }
          .resource-cta-btn {
            width: 100% !important;
          }
        }
      `}</style>

      <section style={{
        padding: 'var(--spacing-2xl) var(--spacing-lg)',
        background: 'linear-gradient(135deg, #1a1a2e 0%, #16213e 100%)',
        position: 'relative',
        overflow: 'hidden',
      }}>
        <div
          className="scroll-animate"
          style={{ maxWidth: '700px', margin: '0 auto', textAlign: 'center', position: 'relative', zIndex: 1 }}
        >
          {/* Heading */}
          <h2 style={{
            fontSize: 'var(--font-size-h2)',
            fontWeight: 500,
            lineHeight: 'var(--line-height-tight)',
            marginBottom: 'var(--spacing-md)',
            color: 'var(--text-white)',
            fontFamily: 'var(--font-headline)',
          }}>
            {heading}
          </h2>

          {/* Description */}
          <p style={{
            fontSize: 'var(--font-size-body)',
            lineHeight: 'var(--line-height-relaxed)',
            color: 'rgba(255, 255, 255, 0.7)',
            marginBottom: 'var(--spacing-xl)',
          }}>
            {description}
          </p>

          {/* Form */}
          <div
            className="resource-cta-form"
            style={{
              display: 'flex',
              alignItems: 'center',
              background: 'var(--bg-white)',
              borderRadius: 'var(--radius-full)',
              padding: 'var(--spacing-xs)',
              boxShadow: '0 8px 32px rgba(0, 0, 0, 0.2)',
              gap: 'var(--spacing-xs)',
              maxWidth: '500px',
              margin: '0 auto',
            }}
          >
            <input
              type="email"
              placeholder={inputPlaceholder}
              className="resource-cta-input"
              style={{
                flex: 1,
                border: 'none',
                outline: 'none',
                fontSize: 'var(--font-size-body)',
                padding: 'var(--spacing-sm) var(--spacing-md)',
                background: 'transparent',
                color: 'var(--text-primary)',
              }}
            />
            <button
              type="button"
              className="resource-cta-btn"
              style={{
                background: 'var(--gradient-coral)',
                color: 'white',
                border: 'none',
                padding: 'var(--btn-padding-sm)',
                borderRadius: 'var(--radius-full)',
                fontSize: 'var(--font-size-body)',
                fontWeight: 600,
                cursor: 'pointer',
                transition: 'var(--transition-medium)',
                whiteSpace: 'nowrap',
              }}
            >
              {ctaText}
            </button>
          </div>

          {/* Privacy Notice */}
          <p style={{
            fontSize: 'var(--font-size-xs)',
            color: 'rgba(255, 255, 255, 0.5)',
            marginTop: 'var(--spacing-md)',
          }}>
            We respect your privacy. Unsubscribe at any time.
          </p>
        </div>
      </section>
    </>
  );
}

export const fields = (
  <ModuleFields>
    <TextField
      name="heading"
      label="Heading"
      default="Stay Updated with Latest Insights"
    />
    <TextField
      name="description"
      label="Description"
      default="Get the latest resources, case studies, and best practices delivered directly to your inbox."
    />
    <TextField
      name="input_placeholder"
      label="Input Placeholder"
      default="Enter your email"
    />
    <TextField
      name="cta_text"
      label="Button Text"
      default="Subscribe"
    />
  </ModuleFields>
);

export const meta = {
  label: 'Resource CTA',
};
