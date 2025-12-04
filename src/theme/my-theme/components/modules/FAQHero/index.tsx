import {
  ModuleFields,
  TextField,
} from '@hubspot/cms-components/fields';
import { ScrollAnimationScript } from '../../shared/ScrollAnimationScript';

export function Component({ fieldValues }: any) {
  const heading = fieldValues.heading || 'Frequently Asked Questions';
  const subheading = fieldValues.subheading || 'Get Answers';
  const description = fieldValues.description || 'Find answers to common questions about our AI-powered mentorship platform and how it can help your organization.';

  return (
    <>
      <ScrollAnimationScript />
      <style>{`
        @media (max-width: 768px) {
          .faq-hero h1 {
            font-size: var(--font-size-h2) !important;
          }
        }
      `}</style>

      <section className="faq-hero" style={{
        padding: 'var(--spacing-3xl) var(--spacing-lg) var(--spacing-2xl)',
        background: 'var(--bg-cream)',
        position: 'relative',
      }}>
        <div style={{ maxWidth: '900px', margin: '0 auto', textAlign: 'center', position: 'relative', zIndex: 1 }}>
          {/* Eyebrow Badge */}
          <div
            className="scroll-animate"
            style={{
              display: 'inline-flex',
              alignItems: 'center',
              padding: 'var(--spacing-xs) var(--spacing-md)',
              background: 'var(--bg-light-coral)',
              color: 'var(--text-coral)',
              borderRadius: 'var(--radius-full)',
              fontSize: 'var(--font-size-small)',
              fontWeight: 600,
              marginBottom: 'var(--spacing-lg)',
              border: '1px solid var(--border-medium)',
            }}
          >
            {subheading}
          </div>

          {/* Heading */}
          <h1
            className="scroll-animate"
            data-delay="100"
            style={{
              fontSize: 'var(--font-size-h1)',
              fontWeight: 500,
              lineHeight: 1.15,
              marginBottom: 'var(--spacing-md)',
              color: 'var(--text-primary)',
              fontFamily: 'var(--font-headline)',
              letterSpacing: 'var(--letter-spacing-tight)',
            }}
          >
            {heading}
          </h1>

          {/* Description */}
          <p
            className="scroll-animate"
            data-delay="200"
            style={{
              fontSize: 'var(--font-size-body-lg)',
              lineHeight: 'var(--line-height-relaxed)',
              color: 'var(--text-secondary)',
              maxWidth: '700px',
              margin: '0 auto',
            }}
          >
            {description}
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
      label="Main Heading"
      default="Frequently Asked Questions"
    />
    <TextField
      name="subheading"
      label="Subheading/Eyebrow"
      default="Get Answers"
    />
    <TextField
      name="description"
      label="Description"
      default="Find answers to common questions about our AI-powered mentorship platform and how it can help your organization."
    />
  </ModuleFields>
);

export const meta = {
  label: 'FAQ Hero',
};
