import React, { useState } from 'react';
import {
  ModuleFields,
  TextField,
  ImageField,
} from '@hubspot/cms-components/fields';
import { DemoModal } from '../../shared/DemoModal';
import { ScrollAnimationScript } from '../../shared/ScrollAnimationScript';
import defaultHeroImage from '../../../assets/network-hero.jpg';
import blueArrows from '../../../assets/blue-arrows.svg';
import yellowStar from '../../../assets/yellow-star.svg';

export function Component({ fieldValues }: any) {
  const [isDemoModalOpen, setIsDemoModalOpen] = useState(false);
  const heroImageSrc = fieldValues.hero_image?.src || defaultHeroImage;
  const heroImageAlt = fieldValues.hero_image?.alt || 'Network illustration';

  return (
    <>
      <ScrollAnimationScript />
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
            padding-top: 30px !important;
            padding-right: 10px !important;
            padding-bottom: 40px !important;
          }
          .network-hero-image img[aria-hidden="true"]:first-of-type {
            width: 100px !important;
            left: -10px !important;
          }
          .network-hero-image img[aria-hidden="true"]:last-of-type {
            width: 90px !important;
            bottom: -10px !important;
            right: -10px !important;
          }
        }
      `}} />
      <section
        className="scroll-animate"
        style={{
          minHeight: '65vh',
          display: 'flex',
          alignItems: 'center',
          padding: 'var(--spacing-3xl) var(--spacing-lg)',
          background: 'var(--gradient-hero)',
          backgroundImage: 'var(--pattern-dots)',
          backgroundSize: 'var(--pattern-dots-size)',
          position: 'relative',
        }}
      >
        <div
          className="network-hero-grid"
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
              className="btn-primary-coral"
            >
              {fieldValues.button_text || 'Request a Demo'}
              <svg width="18" height="18" viewBox="0 0 24 24" fill="none">
                <path d="M5 12H19M19 12L12 5M19 12L12 19" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
              </svg>
            </button>
          </div>

          {/* Right Column - Image with decorative elements */}
          <div
            className="network-hero-image scroll-animate"
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
