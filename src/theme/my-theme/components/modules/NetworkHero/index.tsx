import React, { useState } from 'react';
import {
  ModuleFields,
  TextField,
  ImageField,
} from '@hubspot/cms-components/fields';
import { DemoModal } from '../../shared/DemoModal';
import { useScrollAnimation, animationStyles } from '../../hooks/useScrollAnimation';

export function Component({ fieldValues }: any) {
  const [isDemoModalOpen, setIsDemoModalOpen] = useState(false);
  const { elementRef, isVisible } = useScrollAnimation({ threshold: 0.1 });
  const hasImage = fieldValues.hero_image?.src;

  return (
    <>
      <style dangerouslySetInnerHTML={{__html: `
        @media (max-width: 968px) {
          .network-hero-grid {
            grid-template-columns: 1fr !important;
            text-align: center !important;
          }
          .network-hero-content {
            align-items: center !important;
          }
          .network-hero-image {
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
          className="network-hero-grid"
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
            className="network-hero-content"
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
              background: 'var(--bg-light-coral)',
              borderRadius: 'var(--radius-full)',
              fontSize: 'var(--font-size-small)',
              fontWeight: 600,
              color: 'var(--text-coral)',
              marginBottom: 'var(--spacing-lg)',
              border: '1px solid var(--border-medium)',
            }}>
              {fieldValues.badge || 'MENTORSHIP OS'}
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
              {fieldValues.title || 'Your Network. Powered by the AI Mentorship OS.'}
            </h1>

            <p style={{
              fontSize: 'var(--font-size-body-lg)',
              color: 'var(--text-coral)',
              fontWeight: 600,
              marginBottom: 'var(--spacing-md)',
            }}>
              {fieldValues.tagline || 'Where Learners, Alumni, Professionals, and Employers Connect with Purpose.'}
            </p>

            <p style={{
              fontSize: 'var(--font-size-body-lg)',
              color: 'var(--text-secondary)',
              lineHeight: 'var(--line-height-relaxed)',
              marginBottom: 'var(--spacing-xl)',
              maxWidth: 'var(--max-width-prose)',
            }}>
              {fieldValues.description || 'We embed mentorship infrastructure into your organization\'s unique culture and network, creating a living ecosystem that unlocks social capital, accelerates career readiness, and strengthens talent pipelines across campuses, communities, and industries.'}
            </p>

            {/* CTA Button */}
            <button
              onClick={() => setIsDemoModalOpen(true)}
              style={{
                display: 'inline-flex',
                alignItems: 'center',
                gap: 'var(--spacing-xs)',
                padding: 'var(--btn-padding)',
                background: 'var(--gradient-coral)',
                color: 'var(--text-white)',
                border: 'none',
                borderRadius: 'var(--radius-full)',
                fontSize: 'var(--font-size-body)',
                fontWeight: 600,
                cursor: 'pointer',
                boxShadow: 'var(--shadow-coral-sm)',
                transition: 'var(--transition-medium)',
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.transform = 'translateY(-2px)';
                e.currentTarget.style.boxShadow = 'var(--shadow-coral)';
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.transform = 'translateY(0)';
                e.currentTarget.style.boxShadow = 'var(--shadow-coral-sm)';
              }}
            >
              {fieldValues.button_text || 'Request a Demo'}
              <svg width="18" height="18" viewBox="0 0 24 24" fill="none">
                <path d="M5 12H19M19 12L12 5M19 12L12 19" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
              </svg>
            </button>
          </div>

          {/* Right Column - Image */}
          {hasImage && (
            <div
              className="network-hero-image"
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
                  alt={fieldValues.hero_image.alt || 'Network illustration'}
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

      <DemoModal isOpen={isDemoModalOpen} onClose={() => setIsDemoModalOpen(false)} />
    </>
  );
}

export const fields = (
  <ModuleFields>
    <TextField
      name="badge"
      label="Badge Text"
      default="MENTORSHIP OS"
    />
    <TextField
      name="title"
      label="Hero Title"
      default="Your Network. Powered by the AI Mentorship OS."
    />
    <TextField
      name="tagline"
      label="Tagline"
      default="Where Learners, Alumni, Professionals, and Employers Connect with Purpose."
    />
    <TextField
      name="description"
      label="Description"
      default="We embed mentorship infrastructure into your organization's unique culture and network, creating a living ecosystem that unlocks social capital, accelerates career readiness, and strengthens talent pipelines across campuses, communities, and industries."
    />
    <TextField
      name="button_text"
      label="Button Text"
      default="Request a Demo"
    />
    <ImageField
      name="hero_image"
      label="Hero Image (Right Side)"
    />
  </ModuleFields>
);

export const meta = {
  label: 'Network Hero',
};
