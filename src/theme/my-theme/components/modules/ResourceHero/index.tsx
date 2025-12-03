import {
  ModuleFields,
  TextField,
} from '@hubspot/cms-components/fields';
import { ScrollAnimationScript } from '../../shared/ScrollAnimationScript';

export function Component({ fieldValues }: any) {
  const heading = fieldValues.heading || 'Resource Hub';
  const subheading = fieldValues.subheading || 'Insights & Inspiration';
  const description = fieldValues.description || 'Explore our collection of guides, case studies, and thought leadership to help you build and scale successful mentorship programs.';

  return (
    <>
      <ScrollAnimationScript />
      <style>{`
        .resource-hero-category:hover {
          background: var(--primary-blue) !important;
          color: white !important;
          border-color: var(--primary-blue) !important;
        }
        @media (max-width: 768px) {
          .resource-hero h1 {
            font-size: var(--font-size-h2) !important;
          }
          .resource-hero-categories {
            gap: var(--spacing-xs) !important;
          }
          .resource-hero-category {
            padding: var(--spacing-xs) var(--spacing-sm) !important;
            font-size: var(--font-size-xs) !important;
          }
        }
      `}</style>

      <section className="resource-hero" style={{
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
              marginBottom: 'var(--spacing-xl)',
              maxWidth: '700px',
              margin: '0 auto var(--spacing-xl)',
            }}
          >
            {description}
          </p>

          {/* Category Pills */}
          <div
            className="scroll-animate resource-hero-categories"
            data-delay="300"
            style={{
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              gap: 'var(--spacing-sm)',
              flexWrap: 'wrap',
            }}
          >
            {['All Resources', 'Articles', 'Case Studies', 'Guides', 'Webinars'].map((category, index) => (
              <button
                key={index}
                type="button"
                className="resource-hero-category"
                style={{
                  padding: 'var(--spacing-xs) var(--spacing-md)',
                  background: index === 0 ? 'var(--primary-blue)' : 'var(--bg-white)',
                  border: index === 0 ? '1px solid var(--primary-blue)' : '1px solid var(--border-light)',
                  borderRadius: 'var(--radius-full)',
                  fontSize: 'var(--font-size-small)',
                  fontWeight: 500,
                  color: index === 0 ? 'var(--text-white)' : 'var(--text-secondary)',
                  cursor: 'pointer',
                  transition: 'var(--transition-medium)',
                }}
              >
                {category}
              </button>
            ))}
          </div>
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
      default="Resource Hub"
    />
    <TextField
      name="subheading"
      label="Subheading/Eyebrow"
      default="Insights & Inspiration"
    />
    <TextField
      name="description"
      label="Description"
      default="Explore our collection of guides, case studies, and thought leadership to help you build and scale successful mentorship programs."
    />
  </ModuleFields>
);

export const meta = {
  label: 'Resource Hero',
};
