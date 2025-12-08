import React from 'react';
import { ScrollAnimationScript } from '../../shared/ScrollAnimationScript';
import sceneAnimationData from '../../../assets/Scene-1.json';

interface Stat {
  number: string;
  label: string;
}

export function Component({ fieldValues }: any) {
  // Default stats
  const defaultStats: Stat[] = [
    { number: '+6%', label: 'retention lift for program participants' },
    { number: '+8–19%', label: 'boost in sense of belonging' },
    { number: '+30%', label: 'increase in career confidence' },
    { number: '+42%', label: 'increase in intern-to-full-time conversion' }
  ];

  // Use custom stats if provided, otherwise fall back to defaults
  const customStats = fieldValues.stats || [];
  const stats: Stat[] = customStats.length > 0
    ? customStats.map((s: any) => ({
        number: s.number || '+0%',
        label: s.stat_label || 'metric',
      }))
    : defaultStats;

  // Create a data URL for the Lottie animation
  const lottieJsonString = JSON.stringify(sceneAnimationData);

  return (
    <>
    <style>{`
      @media (max-width: 968px) {
        .results-content {
          grid-template-columns: 1fr !important;
        }
        .results-lottie-container {
          max-width: 500px !important;
          margin: 0 auto var(--spacing-xl) !important;
        }
      }
      @media (max-width: 480px) {
        .results-lottie-container {
          max-width: 100% !important;
        }
      }
    `}</style>
    <ScrollAnimationScript />

    {/* Lottie player script and initialization */}
    <script dangerouslySetInnerHTML={{__html: `
      (function() {
        // Load lottie-player if not already loaded
        if (!document.querySelector('script[src*="lottie-player"]')) {
          var script = document.createElement('script');
          script.src = 'https://unpkg.com/@lottiefiles/lottie-player@latest/dist/lottie-player.js';
          script.onload = function() {
            setTimeout(initResultsLottie, 300);
          };
          document.head.appendChild(script);
        } else {
          setTimeout(initResultsLottie, 300);
        }

        function initResultsLottie() {
          var player = document.getElementById('results-lottie-player');
          var dataEl = document.getElementById('results-lottie-data');
          var lottieContainer = document.getElementById('results-lottie-container');

          if (!player || !dataEl || !lottieContainer) {
            setTimeout(initResultsLottie, 200);
            return;
          }

          // Parse and load the animation data
          try {
            var animationData = JSON.parse(dataEl.textContent);
            player.load(animationData);
            player.stop(); // Start stopped, will play on scroll
          } catch (e) {
            console.error('Failed to load Lottie animation:', e);
            return;
          }

          // Set up intersection observer for scroll-triggered playback
          var observer = new IntersectionObserver(function(entries) {
            entries.forEach(function(entry) {
              if (entry.isIntersecting) {
                player.play();
              } else {
                player.stop();
              }
            });
          }, { threshold: 0.3 });

          observer.observe(lottieContainer);
        }

        // Initialize when DOM is ready
        if (document.readyState === 'loading') {
          document.addEventListener('DOMContentLoaded', function() {
            setTimeout(initResultsLottie, 500);
          });
        } else {
          setTimeout(initResultsLottie, 500);
        }
      })();
    `}} />

    <section
      style={{
        padding: 'var(--section-padding-lg) var(--spacing-lg)',
        background: 'var(--gradient-hero)',
        backgroundImage: 'var(--pattern-dots)',
        backgroundSize: 'var(--pattern-dots-size)',
        position: 'relative',
        overflow: 'hidden',
      }}
      aria-labelledby="results-heading"
    >
      <div style={{ maxWidth: 'var(--max-width-xl)', margin: '0 auto', padding: '0 var(--spacing-lg)', position: 'relative', zIndex: 'var(--z-base)' }}>
        <div className="results-content scroll-animate" style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 'var(--spacing-3xl)', alignItems: 'center' }}>
          {/* Lottie Animation Container */}
          <div
            id="results-lottie-container"
            className="results-lottie-container"
            style={{
              width: '100%',
            }}
          >
            <div
              id="results-lottie-data"
              style={{ display: 'none' }}
              dangerouslySetInnerHTML={{ __html: lottieJsonString }}
            />
            <lottie-player
              id="results-lottie-player"
              background="transparent"
              speed="1"
              style={{ width: '100%', height: 'auto' }}
            ></lottie-player>
          </div>

          <div>
            <h2
              id="results-heading"
              style={{
                fontSize: 'var(--font-size-h2)',
                fontWeight: 500,
                lineHeight: 'var(--line-height-tight)',
                letterSpacing: 'var(--letter-spacing-tight)',
                marginBottom: 'var(--spacing-md)',
                fontFamily: 'var(--font-headline)'
              }}
            >
              Real Mentorship. <span style={{
                background: 'var(--gradient-text)',
                WebkitBackgroundClip: 'text',
                WebkitTextFillColor: 'transparent',
                backgroundClip: 'text'
              }}>Real Results.</span>
            </h2>
            <p style={{
              fontSize: 'var(--font-size-body-lg)',
              lineHeight: 'var(--line-height-relaxed)',
              marginBottom: 'var(--spacing-xl)',
              color: 'var(--text-secondary)',
              maxWidth: 'var(--max-width-prose)'
            }}>
              {fieldValues.subtitle}
            </p>
            <div className="stats-grid" style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 'var(--spacing-lg)' }}>
              {stats.map((stat, index) => (
                <div
                  key={index}
                  className="stat-card scroll-animate"
                  data-delay={index * 100}
                  style={{
                    padding: 'var(--card-padding)',
                    background: 'var(--bg-glass)',
                    borderRadius: 'var(--radius-xl)',
                    border: '2px solid var(--border-medium)',
                    boxShadow: 'var(--shadow-md)',
                    transition: 'var(--transition-smooth)',
                    cursor: 'pointer',
                    position: 'relative',
                    overflow: 'hidden',
                    backdropFilter: 'blur(10px)',
                  }}
                  role="group"
                  aria-label={`${stat.number} ${stat.label}`}
                >
                  <div style={{
                    position: 'absolute',
                    top: '-50%',
                    right: '-20%',
                    width: '150px',
                    height: '150px',
                    background: 'radial-gradient(circle, rgba(239, 71, 111, 0.06) 0%, transparent 70%)',
                    borderRadius: 'var(--radius-circle)'
                  }} />
                  <div style={{
                    fontSize: 'var(--font-size-h2)',
                    marginBottom: 'var(--spacing-sm)',
                    fontWeight: 800,
                    background: 'var(--gradient-coral-peach)',
                    WebkitBackgroundClip: 'text',
                    WebkitTextFillColor: 'transparent',
                    backgroundClip: 'text',
                    letterSpacing: 'var(--letter-spacing-tight)',
                    position: 'relative',
                    zIndex: 'var(--z-base)'
                  }}>
                    {stat.number}
                  </div>
                  <div style={{
                    fontSize: 'var(--font-size-body)',
                    lineHeight: 'var(--line-height-normal)',
                    color: 'var(--text-primary)',
                    fontWeight: 500,
                    position: 'relative',
                    zIndex: 'var(--z-base)'
                  }}>
                    {stat.label}
                  </div>
                </div>
              ))}
            </div>
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
    default: 'Real Results, Real Impact',
  },
  {
    type: 'text',
    name: 'subtitle',
    label: 'Subtitle',
    default: 'Our platform delivers measurable outcomes across every cohort—learners, mentors, educators, and employers.',
  },
  {
    type: 'group',
    name: 'stats',
    label: 'Statistics',
    help_text: 'Edit the stat cards. Leave empty to use defaults.',
    occurrence: {
      min: 0,
      max: 8,
      default: 0,
    },
    children: [
      {
        type: 'text',
        name: 'number',
        label: 'Stat Number/Value',
        default: '+6%',
      },
      {
        type: 'text',
        name: 'stat_label',
        label: 'Stat Label',
        default: 'retention lift for program participants',
      },
    ],
  },
];

export const meta = {
  label: 'Results Section',
};
