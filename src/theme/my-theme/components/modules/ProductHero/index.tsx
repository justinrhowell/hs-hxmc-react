import React from 'react';
import {
  ModuleFields,
  TextField,
  ImageField,
} from '@hubspot/cms-components/fields';
import { useScrollAnimation, animationStyles } from '../../hooks/useScrollAnimation';

export function Component({ fieldValues }: any) {
  const { elementRef, isVisible } = useScrollAnimation({ threshold: 0.1 });
  const hasImage = fieldValues.hero_image?.src;

  return (
    <>
      <style dangerouslySetInnerHTML={{__html: `
        @media (max-width: 968px) {
          .product-hero-grid {
            grid-template-columns: 1fr !important;
            text-align: center !important;
          }
          .product-hero-content {
            align-items: center !important;
          }
          .product-hero-buttons {
            justify-content: center !important;
          }
          .product-hero-image {
            order: -1 !important;
            max-width: 500px !important;
            margin: 0 auto !important;
          }
        }
      `}} />
      <section
        ref={elementRef as React.RefObject<HTMLElement>}
        style={{
          minHeight: '85vh',
          display: 'flex',
          alignItems: 'center',
          padding: 'var(--spacing-3xl) var(--spacing-lg)',
          background: 'var(--gradient-hero)',
          backgroundImage: 'var(--pattern-dots)',
          backgroundSize: 'var(--pattern-dots-size)',
          position: 'relative',
          ...animationStyles.subtleSlideUp(isVisible),
        }}
      >
        <div
          className="product-hero-grid"
          style={{
            maxWidth: 'var(--max-width-xl)',
            margin: '0 auto',
            width: '100%',
            display: 'grid',
            gridTemplateColumns: hasImage ? '1fr 1fr' : '1fr',
            gap: 'var(--spacing-3xl)',
            alignItems: 'center',
          }}
        >
          {/* Left Column - Text Content */}
          <div
            className="product-hero-content"
            style={{
              position: 'relative',
              zIndex: 'var(--z-base)',
              display: 'flex',
              flexDirection: 'column',
              alignItems: 'flex-start',
            }}
          >
            {/* Badge/Pill */}
            <div style={{
              display: 'inline-flex',
              alignItems: 'center',
              padding: 'var(--spacing-xs) var(--spacing-md)',
              background: 'var(--bg-light-teal)',
              borderRadius: 'var(--radius-full)',
              fontSize: 'var(--font-size-small)',
              fontWeight: 600,
              color: 'var(--text-teal)',
              marginBottom: 'var(--spacing-lg)',
              border: '1px solid var(--border-medium)',
            }}>
              {fieldValues.badge || 'New: AI-Powered Mentorship Intelligence'}
            </div>

            <h1 style={{
              fontSize: 'var(--font-size-h1)',
              fontWeight: 600,
              lineHeight: 'var(--line-height-tight)',
              letterSpacing: 'var(--letter-spacing-tight)',
              marginBottom: 'var(--spacing-md)',
              color: 'var(--text-primary)',
              fontFamily: 'var(--font-headline)',
            }}>
              {fieldValues.title || 'AI Mentorship Operating System'}
            </h1>

            <p style={{
              fontSize: 'var(--font-size-body-lg)',
              color: 'var(--text-secondary)',
              lineHeight: 'var(--line-height-relaxed)',
              marginBottom: 'var(--spacing-xl)',
              maxWidth: 'var(--max-width-prose)',
            }}>
              {fieldValues.subtitle || 'Technology built to fuel human connection, not replace it. The essential infrastructure for measurable success in retention, belonging, and career outcomes.'}
            </p>

            {/* CTA Buttons */}
            <div
              className="product-hero-buttons"
              style={{
                display: 'flex',
                gap: 'var(--spacing-md)',
                justifyContent: 'flex-start',
                flexWrap: 'wrap',
              }}
            >
              <a
                href={fieldValues.primary_button_url || '#'}
                style={{
                  display: 'inline-flex',
                  alignItems: 'center',
                  gap: 'var(--spacing-xs)',
                  padding: 'var(--btn-padding)',
                  background: 'var(--primary-navy)',
                  color: 'var(--text-white)',
                  border: 'none',
                  borderRadius: 'var(--radius-full)',
                  fontSize: 'var(--font-size-body)',
                  fontWeight: 600,
                  textDecoration: 'none',
                  boxShadow: 'var(--shadow-md)',
                  transition: 'var(--transition-medium)',
                }}
                aria-label={fieldValues.primary_button_text}
              >
                {fieldValues.primary_button_text || 'Request a Demo'}
                <svg width="18" height="18" viewBox="0 0 24 24" fill="none">
                  <path d="M5 12H19M19 12L12 5M19 12L12 19" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
              </a>

              <a
                href={fieldValues.secondary_button_url || '#'}
                style={{
                  display: 'inline-flex',
                  alignItems: 'center',
                  padding: 'var(--btn-padding)',
                  background: 'transparent',
                  color: 'var(--text-primary)',
                  border: '2px solid var(--border-medium)',
                  borderRadius: 'var(--radius-full)',
                  fontSize: 'var(--font-size-body)',
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

          {/* Right Column - Image */}
          {hasImage && (
            <div
              className="product-hero-image"
              style={{
                position: 'relative',
                ...animationStyles.fadeInUp(isVisible),
              }}
            >
              <div style={{
                background: 'var(--bg-white)',
                borderRadius: 'var(--radius-xl)',
                padding: 'var(--spacing-md)',
                boxShadow: 'var(--shadow-xl)',
                border: '1px solid var(--border-light)',
              }}>
                <img
                  src={fieldValues.hero_image.src}
                  alt={fieldValues.hero_image.alt || 'Product illustration'}
                  style={{
                    width: '100%',
                    height: 'auto',
                    borderRadius: 'var(--radius-lg)',
                    display: 'block',
                  }}
                  loading="eager"
                />
              </div>
            </div>
          )}
        </div>
      </section>
    </>
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
      name="hero_image"
      label="Hero Image (Right Side)"
    />
  </ModuleFields>
);

export const meta = {
  label: 'Product Hero',
};
