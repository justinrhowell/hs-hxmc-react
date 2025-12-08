import React from 'react';
import { ScrollAnimationScript } from '../../shared/ScrollAnimationScript';
import defaultHeroImage from '../../../assets/about-us-hero.jpg';
import blueArrows from '../../../assets/blue-arrows.svg';
import yellowStar from '../../../assets/yellow-star.svg';

export function Component({ fieldValues }: any) {
  const heroImageSrc = fieldValues.hero_image?.src || defaultHeroImage;
  const heroImageAlt = fieldValues.hero_image?.alt || 'About us illustration';

  return (
    <>
      <style dangerouslySetInnerHTML={{__html: `
        @media (max-width: 968px) {
          .about-hero-grid {
            grid-template-columns: 1fr !important;
            text-align: center !important;
          }
          .about-hero-content {
            align-items: center !important;
          }
          .about-hero-image {
            order: -1 !important;
            max-width: 500px !important;
            margin: 0 auto !important;
            padding-top: 30px !important;
            padding-right: 10px !important;
            padding-bottom: 40px !important;
          }
          .about-hero-image img[aria-hidden="true"]:first-of-type {
            width: 100px !important;
            left: -10px !important;
          }
          .about-hero-image img[aria-hidden="true"]:last-of-type {
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
          padding: 'var(--spacing-xl) var(--spacing-lg) var(--spacing-3xl)',
          background: 'var(--gradient-hero)',
          backgroundImage: 'var(--pattern-dots)',
          backgroundSize: 'var(--pattern-dots-size)',
          position: 'relative',
        }}
      >
        <div
          className="about-hero-grid"
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
            className="about-hero-content"
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
              About Us
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
              {fieldValues.title || 'Mentorship for the Real World: Human Connection in the Age of AI'}
            </h1>

            <p style={{
              fontSize: 'var(--font-size-body-lg)',
              color: 'var(--text-secondary)',
              lineHeight: 'var(--line-height-relaxed)',
              marginBottom: 'var(--spacing-xl)',
              maxWidth: 'var(--max-width-prose)',
            }}>
              {fieldValues.description || "Our mentorship infrastructure connects learning to opportunity. We work to ensure every learner—student, jobseeker, or early-career professional—gets the connections, confidence, and support needed to thrive."}
            </p>
          </div>

          {/* Right Column - Image with decorative elements */}
          <div
            className="about-hero-image scroll-animate"
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

export const fields: any = [
  {
    type: 'text',
    name: 'title',
    label: 'Hero Title',
    default: 'Mentorship for the Real World: Human Connection in the Age of AI',
  },
  {
    type: 'text',
    name: 'description',
    label: 'Description',
    default: 'Our mentorship infrastructure connects learning to opportunity. We work to ensure every learner—student, jobseeker, or early-career professional—gets the connections, confidence, and support needed to thrive.',
  },
  {
    type: 'image',
    name: 'hero_image',
    label: 'Hero Image (Right Side)',
  },
];

export const meta = {
  label: 'About Hero',
};
