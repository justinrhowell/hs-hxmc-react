import {
  ModuleFields,
  TextField,
  ImageField,
} from '@hubspot/cms-components/fields';
import { useScrollAnimation, animationStyles } from '../../hooks/useScrollAnimation';

export function Component({ fieldValues }: any) {
  const { elementRef, isVisible } = useScrollAnimation({ threshold: 0.1 });

  return (
    <section
      ref={elementRef as React.RefObject<HTMLElement>}
      style={{
        minHeight: '85vh',
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center',
        padding: '120px var(--spacing-lg) 80px',
        background: 'var(--gradient-hero)',
        backgroundImage: 'var(--pattern-dots)',
        backgroundSize: 'var(--pattern-dots-size)',
        textAlign: 'center',
        position: 'relative',
        ...animationStyles.subtleSlideUp(isVisible),
      }}
    >
      <div style={{ maxWidth: 'var(--max-width-lg)', margin: '0 auto', position: 'relative', zIndex: 'var(--z-base)' }}>
        {/* Badge/Pill */}
        <div style={{
          display: 'inline-flex',
          alignItems: 'center',
          padding: '0.5rem 1.25rem',
          background: 'rgba(6, 214, 160, 0.1)',
          borderRadius: 'var(--radius-full)',
          fontSize: '0.875rem',
          fontWeight: 600,
          color: 'var(--text-primary)',
          marginBottom: 'var(--spacing-xl)',
          border: '1px solid rgba(6, 214, 160, 0.2)',
        }}>
          {fieldValues.badge || 'New: AI-Powered Mentorship Intelligence'}
        </div>

        <h1 style={{
          fontSize: 'var(--font-size-h1)',
          fontWeight: 700,
          lineHeight: 'var(--line-height-tight)',
          letterSpacing: 'var(--letter-spacing-tight)',
          marginBottom: 'var(--spacing-lg)',
          color: 'var(--text-primary)',
          fontFamily: 'var(--font-headline)',
        }}>
          {fieldValues.title || 'AI Mentorship Operating System'}
        </h1>

        <p style={{
          fontSize: '1.25rem',
          color: 'var(--text-secondary)',
          lineHeight: 'var(--line-height-relaxed)',
          marginBottom: 'var(--spacing-2xl)',
          maxWidth: 'var(--max-width-prose)',
          margin: '0 auto var(--spacing-2xl)',
        }}>
          {fieldValues.subtitle || 'Technology built to fuel human connection, not replace it. The essential infrastructure for measurable success in retention, belonging, and career outcomes.'}
        </p>

        {/* CTA Buttons */}
        <div style={{
          display: 'flex',
          gap: 'var(--spacing-md)',
          justifyContent: 'center',
          flexWrap: 'wrap',
          marginBottom: 'var(--spacing-3xl)',
        }}>
          <a
            href={fieldValues.primary_button_url || '#'}
            style={{
              display: 'inline-flex',
              alignItems: 'center',
              gap: '0.5rem',
              padding: 'var(--btn-padding)',
              background: 'var(--primary-navy)',
              color: 'var(--text-white)',
              border: 'none',
              borderRadius: 'var(--radius-md)',
              fontSize: '1rem',
              fontWeight: 600,
              textDecoration: 'none',
              boxShadow: 'var(--shadow-md)',
              transition: 'var(--transition-medium)',
            }}
            aria-label={fieldValues.primary_button_text}
          >
            {fieldValues.primary_button_text || 'Request a Demo'}
            <span>→</span>
          </a>

          <a
            href={fieldValues.secondary_button_url || '#'}
            style={{
              display: 'inline-flex',
              alignItems: 'center',
              padding: 'var(--btn-padding)',
              background: 'transparent',
              color: 'var(--text-primary)',
              border: '2px solid var(--text-primary)',
              borderRadius: 'var(--radius-md)',
              fontSize: '1rem',
              fontWeight: 600,
              textDecoration: 'none',
              transition: 'var(--transition-medium)',
            }}
            aria-label={fieldValues.secondary_button_text}
          >
            {fieldValues.secondary_button_text || 'View Case Studies'}
          </a>
        </div>
      </div>

      {/* Dashboard/Product Preview */}
      {fieldValues.preview_image?.src && (
        <div style={{
          maxWidth: 'var(--max-width-xl)',
          width: '100%',
          margin: '0 auto',
          padding: '0 var(--spacing-lg)',
          ...animationStyles.fadeInUp(isVisible),
        }}>
          <div style={{
            background: 'var(--bg-white)',
            borderRadius: 'var(--radius-xl)',
            padding: '1.5rem',
            boxShadow: '0 24px 64px rgba(0, 0, 0, 0.15)',
            border: '1px solid var(--border-light)',
          }}>
            <img
              src={fieldValues.preview_image.src}
              alt={fieldValues.preview_image.alt || 'Platform preview'}
              style={{
                width: '100%',
                height: 'auto',
                borderRadius: 'var(--radius-md)',
                display: 'block',
              }}
              loading="eager"
            />
          </div>
        </div>
      )}
    </section>
  );
}

export const fields = (
  <ModuleFields>
    <TextField
      name="badge"
      label="Badge Text"
      default="New: AI-Powered Mentorship Intelligence"
    />
    <TextField
      name="title"
      label="Hero Title"
      default="AI Mentorship Operating System"
    />
    <TextField
      name="subtitle"
      label="Subtitle"
      default="Technology built to fuel human connection, not replace it. The essential infrastructure for measurable success in retention, belonging, and career outcomes."
    />
    <TextField
      name="primary_button_text"
      label="Primary Button Text"
      default="Request a Demo"
    />
    <TextField
      name="primary_button_url"
      label="Primary Button URL"
      default="#contact"
    />
    <TextField
      name="secondary_button_text"
      label="Secondary Button Text"
      default="View Case Studies"
    />
    <TextField
      name="secondary_button_url"
      label="Secondary Button URL"
      default="#case-studies"
    />
    <ImageField
      name="preview_image"
      label="Product Preview Image"
    />
  </ModuleFields>
);

export const meta = {
  label: 'Product Hero',
};
