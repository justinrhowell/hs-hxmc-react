import React from 'react';
import {
  ModuleFields,
  TextField,
  ImageField,
} from '@hubspot/cms-components/fields';
import { ScrollAnimationScript } from '../../shared/ScrollAnimationScript';
import defaultHeroImage from '../../../assets/page_hero.jpg';
import blueArrows from '../../../assets/blue-arrows.svg';
import yellowStar from '../../../assets/yellow-star.svg';

export function Component({ fieldValues }: any) {
  const heroImageSrc = fieldValues.hero_image?.src || defaultHeroImage;
  const heroImageAlt = fieldValues.hero_image?.alt || 'Product illustration';

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
            padding-top: 30px !important;
            padding-right: 10px !important;
            padding-bottom: 40px !important;
          }
          .product-hero-image img[aria-hidden="true"]:first-of-type {
            width: 100px !important;
            left: -10px !important;
          }
          .product-hero-image img[aria-hidden="true"]:last-of-type {
            width: 90px !important;
            bottom: -10px !important;
            right: -10px !important;
          }
        }
      `}} />
      <ScrollAnimationScript />
      <section
        className="scroll-animate"
        style={{
          minHeight: '65vh',
          display: 'flex',
          alignItems: 'center',
          padding: 'var(--spacing-lg) var(--spacing-lg) var(--spacing-3xl)',
          background: 'var(--gradient-hero)',
          backgroundImage: 'var(--pattern-dots)',
          backgroundSize: 'var(--pattern-dots-size)',
          position: 'relative',
        }}
      >
        <div
          className="product-hero-grid"
          style={{
            maxWidth: 'var(--max-width-xl)',
            margin: '0 auto',
            width: '100%',
            display: 'grid',
            gridTemplateColumns: '1fr 1fr',
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
              background: 'var(--bg-light-coral)',
              borderRadius: 'var(--radius-full)',
              fontSize: 'var(--font-size-small)',
              fontWeight: 600,
              color: 'var(--text-coral)',
              marginBottom: 'var(--spacing-lg)',
              border: '1px solid var(--border-medium)',
            }}>
              {fieldValues.badge || 'MENTOR COLLECTIVE'}
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
              {fieldValues.title || 'Mentorship, Reinvented as AI Infrastructure'}
            </h1>

            <p style={{
              fontSize: 'var(--font-size-body-lg)',
              color: 'var(--text-secondary)',
              lineHeight: 'var(--line-height-relaxed)',
              marginBottom: 'var(--spacing-xl)',
              maxWidth: 'var(--max-width-prose)',
            }}>
              {fieldValues.subtitle || 'The Mentorship OS powers belonging, career readiness, and talent development across the entire education-to-workforce ecosystem. Built on human relationships, accelerated by AI, and proven at scale, this technology fuels human connection rather than replacing it.'}
            </p>

            {/* CTA Button */}
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
                className="btn-primary-navy"
                aria-label={fieldValues.primary_button_text}
              >
                {fieldValues.primary_button_text || 'Request a Demo'}
                <svg width="18" height="18" viewBox="0 0 24 24" fill="none">
                  <path d="M5 12H19M19 12L12 5M19 12L12 19" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
              </a>
            </div>
          </div>

          {/* Right Column - Image with decorative elements */}
          <div
            className="product-hero-image scroll-animate"
            data-delay="200"
            style={{
              position: 'relative',
              paddingTop: '40px',
              paddingRight: '20px',
            }}
          >
            {/* Blue arrows - top left */}
            <img
              src={blueArrows}
              alt=""
              aria-hidden="true"
              style={{
                position: 'absolute',
                top: 0,
                left: '-20px',
                width: '160px',
                height: 'auto',
                zIndex: 1,
              }}
            />

            {/* Main hero image */}
            <img
              src={heroImageSrc}
              alt={heroImageAlt}
              style={{
                width: '100%',
                height: 'auto',
                borderRadius: '24px',
                display: 'block',
                position: 'relative',
                zIndex: 2,
                boxShadow: '0 25px 50px -12px rgba(0, 0, 0, 0.15)',
              }}
              loading="eager"
            />

            {/* Yellow star - bottom right */}
            <img
              src={yellowStar}
              alt=""
              aria-hidden="true"
              style={{
                position: 'absolute',
                bottom: '-30px',
                right: '-30px',
                width: '140px',
                height: 'auto',
                zIndex: 3,
              }}
            />
          </div>
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
      default="MENTOR COLLECTIVE"
    />
    <TextField
      name="title"
      label="Hero Title"
      default="Mentorship, Reinvented as AI Infrastructure"
    />
    <TextField
      name="subtitle"
      label="Subtitle"
      default="The Mentorship OS powers belonging, career readiness, and talent development across the entire education-to-workforce ecosystem. Built on human relationships, accelerated by AI, and proven at scale, this technology fuels human connection rather than replacing it."
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
    <ImageField
      name="hero_image"
      label="Hero Image (Right Side)"
    />
  </ModuleFields>
);

export const meta = {
  label: 'Product Hero',
};
