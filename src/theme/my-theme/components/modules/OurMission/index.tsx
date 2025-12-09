import React from 'react';
import { ScrollAnimationScript } from '../../shared/ScrollAnimationScript';

export function Component({ fieldValues }: any) {
  return (
    <>
    <ScrollAnimationScript />
    <section
      className="scroll-animate"
      style={{
        padding: 'var(--section-padding-lg) var(--spacing-lg)',
        background: 'var(--bg-white)',
      }}
    >
      <style>{`
        @media (max-width: 968px) {
          .mission-main-grid {
            grid-template-columns: 1fr !important;
          }
          .mission-image-column {
            order: -1;
            max-width: 400px !important;
            margin: 0 auto var(--spacing-xl) !important;
          }
        }
      `}</style>
      <div style={{ maxWidth: 'var(--max-width-xl)', margin: '0 auto' }}>
        {/* Two Column Layout */}
        <div style={{
          display: 'grid',
          gridTemplateColumns: '1fr 1fr',
          gap: 'var(--spacing-3xl)',
          alignItems: 'center',
        }} className="mission-main-grid">
          {/* Left Column - Image or Lottie */}
          <div
            className="mission-image-column scroll-animate"
            data-delay="200"
            style={{
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
            }}
          >
            {fieldValues.lottie_url && (fieldValues.lottie_url.includes('.json') || fieldValues.lottie_url.includes('lottie')) ? (
              <>
                <script src="https://unpkg.com/@lottiefiles/lottie-player@latest/dist/lottie-player.js" />
                <div
                  id="our-mission-lottie-container"
                  style={{
                    width: '100%',
                  }}
                  dangerouslySetInnerHTML={{
                    __html: `<lottie-player
                      id="our-mission-lottie"
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
                      function initOurMissionLottie() {
                        var container = document.getElementById('our-mission-lottie-container');
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
                        document.addEventListener('DOMContentLoaded', initOurMissionLottie);
                      } else {
                        setTimeout(initOurMissionLottie, 500);
                      }
                    })();
                  `
                }} />
              </>
            ) : fieldValues.image?.src ? (
              <img
                src={fieldValues.image.src}
                alt={fieldValues.image.alt || 'Our Mission'}
                style={{
                  width: '100%',
                  height: 'auto',
                  borderRadius: 'var(--radius-xl)',
                  display: 'block',
                }}
              />
            ) : (
              <div style={{
                width: '100%',
                aspectRatio: '4/3',
                background: 'linear-gradient(135deg, rgba(239, 71, 111, 0.1) 0%, rgba(248, 159, 123, 0.1) 100%)',
                borderRadius: 'var(--radius-xl)',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
              }}>
                <svg width="80" height="80" viewBox="0 0 24 24" fill="none" stroke="var(--text-coral)" strokeWidth="1" strokeLinecap="round" strokeLinejoin="round" style={{ opacity: 0.5 }}>
                  <rect x="3" y="3" width="18" height="18" rx="2" ry="2"/>
                  <circle cx="8.5" cy="8.5" r="1.5"/>
                  <polyline points="21 15 16 10 5 21"/>
                </svg>
              </div>
            )}
          </div>

          {/* Right Column - Content */}
          <div>
            {/* Section Header */}
            <div style={{ marginBottom: 'var(--spacing-md)' }}>
              <h2 style={{
                fontSize: 'var(--font-size-h2)',
                fontWeight: 500,
                color: 'var(--text-primary)',
                marginBottom: 'var(--spacing-md)',
                fontFamily: 'var(--font-headline)',
                lineHeight: 'var(--line-height-tight)',
              }}>
                {fieldValues.heading || "Our Mission"}
              </h2>
              <p style={{
                fontSize: 'var(--font-size-body-lg)',
                fontWeight: 500,
                lineHeight: 'var(--line-height-normal)',
                color: 'var(--text-secondary)',
                fontFamily: 'var(--font-headline)',
              }}>
                {fieldValues.subtitle || "Empowering every learner through connection."}
              </p>
            </div>

            {/* Mission Description */}
            <p style={{
              fontSize: 'var(--font-size-body-lg)',
              color: 'var(--text-secondary)',
              lineHeight: 'var(--line-height-relaxed)',
              marginBottom: 'var(--spacing-xl)',
            }}>
              {fieldValues.mission || "To ensure every learner has the connections, confidence, and support to realize their full potential — not by chance, but by design."}
            </p>

            {/* Callout Card */}
            {fieldValues.callout_text && (
              <div style={{
                padding: 'var(--spacing-lg)',
                background: 'var(--gradient-hero)',
                borderRadius: 'var(--radius-xl)',
              }}>
                <p style={{
                  fontSize: 'var(--font-size-body)',
                  fontWeight: 600,
                  color: 'var(--text-coral)',
                  margin: 0,
                  fontFamily: 'var(--font-headline)',
                }}>
                  {fieldValues.callout_text}
                </p>
              </div>
            )}
          </div>
        </div>
      </div>
    </section>
    </>
  );
}

export const fields: any = [
  {
    type: 'text',
    name: 'heading',
    label: 'Section Heading',
    default: "Our Mission",
  },
  {
    type: 'text',
    name: 'subtitle',
    label: 'Subtitle',
    default: "Empowering every learner through connection.",
  },
  {
    type: 'text',
    name: 'mission',
    label: 'Mission Statement',
    default: "To ensure every learner has the connections, confidence, and support to realize their full potential — not by chance, but by design.",
  },
  {
    type: 'text',
    name: 'callout_text',
    label: 'Callout Text (optional)',
    default: "",
  },
  {
    type: 'image',
    name: 'image',
    label: 'Mission Image',
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
  label: 'Our Mission',
};
