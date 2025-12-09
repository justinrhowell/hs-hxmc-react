import React from 'react';
import { ScrollAnimationScript } from '../../shared/ScrollAnimationScript';
import defaultHeroImage from '../../../assets/about-us-hero.jpg';

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
            padding-bottom: 40px !important;
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

          {/* Right Column - Image or Lottie */}
          <div
            className="about-hero-image scroll-animate"
            data-delay="200"
            style={{
              position: 'relative',
            }}
          >
            {/* Main hero image or Lottie animation */}
            {fieldValues.lottie_url && (fieldValues.lottie_url.includes('.json') || fieldValues.lottie_url.includes('lottie')) ? (
              <>
                <script src="https://unpkg.com/@lottiefiles/lottie-player@latest/dist/lottie-player.js" />
                <div
                  id="about-hero-lottie-container"
                  style={{
                    width: '100%',
                    position: 'relative',
                    zIndex: 2,
                  }}
                  dangerouslySetInnerHTML={{
                    __html: `<lottie-player
                      id="about-hero-lottie"
                      src="${fieldValues.lottie_url}"
                      background="transparent"
                      speed="1"
                      style="width: 100%; height: auto;"
                    ></lottie-player>`
                  }}
                />
                <script dangerouslySetInnerHTML={{
                  __html: `
                    (function() {
                      function initAboutHeroLottie() {
                        var container = document.getElementById('about-hero-lottie-container');
                        if (!container) return;
                        var observer = new IntersectionObserver(function(entries) {
                          entries.forEach(function(entry) {
                            if (entry.isIntersecting) {
                              var player = container.querySelector('lottie-player');
                              if (player && typeof player.play === 'function') {
                                player.play();
                              } else if (player) {
                                player.addEventListener('ready', function() { player.play(); });
                              }
                              observer.unobserve(entry.target);
                            }
                          });
                        }, { threshold: 0.3 });
                        observer.observe(container);
                      }
                      if (document.readyState === 'loading') {
                        document.addEventListener('DOMContentLoaded', initAboutHeroLottie);
                      } else {
                        setTimeout(initAboutHeroLottie, 500);
                      }
                    })();
                  `
                }} />
              </>
            ) : (
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
            )}
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
  {
    type: 'text',
    name: 'lottie_url',
    label: 'Lottie Animation URL (.json)',
    help_text: 'Paste a URL to a Lottie JSON file. If provided, plays on scroll reveal (no loop). Takes priority over image.',
    default: '',
  },
];

export const meta = {
  label: 'About Hero',
};
