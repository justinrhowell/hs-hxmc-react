import React from 'react';
import {
  ModuleFields,
  TextField,
  NumberField,
} from '@hubspot/cms-components/fields';
import girlMicroscopeImg from '../../../assets/girl-looking-into-microscope.png';
import scienceGirlImg from '../../../assets/science-girl.jpg';
import blueArrows from '../../../assets/blue-arrows.svg';
import yellowStar from '../../../assets/yellow-star.svg';
import fourLeafSvg from '../../../assets/four-leaf-graphic.svg';
import { ScrollAnimationScript } from '../../shared/ScrollAnimationScript';

interface Stat {
  number: string;
  label: string;
}

interface ResultsSectionProps {
  fieldValues: {
    heading: string;
    stat1_number: string;
    stat1_label: string;
    stat2_number: string;
    stat2_label: string;
    stat3_number: string;
    stat3_label: string;
    stat4_number: string;
    stat4_label: string;
  };
}

export function Component({ fieldValues }: ResultsSectionProps) {
  const stats: Stat[] = [
    { number: fieldValues.stat1_number || '+6%', label: fieldValues.stat1_label || 'retention lift for program participants' },
    { number: fieldValues.stat2_number || '+8–19%', label: fieldValues.stat2_label || 'boost in sense of belonging' },
    { number: fieldValues.stat3_number || '+30%', label: fieldValues.stat3_label || 'increase in career confidence' },
    { number: fieldValues.stat4_number || '+42%', label: fieldValues.stat4_label || 'increase in intern-to-full-time conversion' }
  ];

  return (
    <>
    <style>{`
      @media (max-width: 968px) {
        .results-content {
          grid-template-columns: 1fr !important;
        }
        .results-images {
          height: 420px !important;
          max-width: 480px !important;
          margin: 0 auto var(--spacing-xl) !important;
        }
        .results-images .photo-back {
          width: 320px !important;
          height: 230px !important;
          left: 40px !important;
        }
        .results-images .photo-front {
          width: 300px !important;
          height: 240px !important;
          top: 170px !important;
          left: 100px !important;
        }
      }
      @media (max-width: 480px) {
        .results-images {
          height: 340px !important;
        }
        .results-images .photo-back {
          width: 250px !important;
          height: 180px !important;
          left: 20px !important;
        }
        .results-images .photo-front {
          width: 230px !important;
          height: 190px !important;
          top: 135px !important;
          left: 70px !important;
        }
        .results-images .decor-arrows {
          width: 80px !important;
        }
        .results-images .decor-star {
          width: 40px !important;
        }
        .results-images .decor-leaf {
          width: 60px !important;
        }
      }
    `}</style>
    <ScrollAnimationScript />
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
          <div
            className="results-images"
            style={{
              position: 'relative',
              height: '560px',
              width: '100%',
              paddingLeft: 'var(--spacing-xl)',
              paddingTop: 'var(--spacing-lg)',
            }}
          >
            {/* Blue arrows - top left */}
            <img
              src={blueArrows}
              alt=""
              aria-hidden="true"
              className="decor-arrows"
              style={{
                position: 'absolute',
                top: 0,
                left: 0,
                width: '120px',
                height: 'auto',
                zIndex: 1,
              }}
            />

            {/* Photo 1 - Girl with microscope - BACK/TOP */}
            <img
              src={girlMicroscopeImg}
              alt="Mentorship in action - student using microscope"
              loading="lazy"
              className="photo-back"
              style={{
                position: 'absolute',
                top: 'var(--spacing-lg)',
                left: 'var(--spacing-2xl)',
                width: '400px',
                height: '280px',
                objectFit: 'cover',
                borderRadius: 'var(--radius-xl)',
                boxShadow: 'var(--shadow-lg)',
                zIndex: 2,
                transform: 'rotate(-3deg)',
              }}
            />

            {/* Photo 2 - Science girl - FRONT/BOTTOM - overlapping */}
            <img
              src={scienceGirlImg}
              alt="Student in science program"
              loading="lazy"
              className="photo-front"
              style={{
                position: 'absolute',
                top: '220px',
                left: '120px',
                width: '380px',
                height: '300px',
                objectFit: 'cover',
                borderRadius: 'var(--radius-xl)',
                boxShadow: 'var(--shadow-xl)',
                zIndex: 3,
                transform: 'rotate(2deg)',
              }}
            />

            {/* Four-leaf graphic - bottom left */}
            <img
              src={fourLeafSvg}
              alt=""
              aria-hidden="true"
              className="decor-leaf"
              style={{
                position: 'absolute',
                bottom: 'var(--spacing-md)',
                left: 'var(--spacing-md)',
                width: '90px',
                height: 'auto',
                zIndex: 4,
              }}
            />

            {/* Yellow star - top right area */}
            <img
              src={yellowStar}
              alt=""
              aria-hidden="true"
              className="decor-star"
              style={{
                position: 'absolute',
                top: 'var(--spacing-xs)',
                right: 'var(--spacing-2xl)',
                width: '60px',
                height: 'auto',
                zIndex: 4,
              }}
            />
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

export const fields = (
  <ModuleFields>
    <TextField
      name="heading"
      label="Section Heading"
      default="Real Results, Real Impact"
    />
    <TextField
      name="subtitle"
      label="Subtitle"
      default="Our platform delivers measurable outcomes across every cohort—learners, mentors, educators, and employers."
    />
    <TextField
      name="stat1_number"
      label="Stat 1 Number"
      default="+6%"
    />
    <TextField
      name="stat1_label"
      label="Stat 1 Label"
      default="retention lift for program participants"
    />
    <TextField
      name="stat2_number"
      label="Stat 2 Number"
      default="+8–19%"
    />
    <TextField
      name="stat2_label"
      label="Stat 2 Label"
      default="boost in sense of belonging"
    />
    <TextField
      name="stat3_number"
      label="Stat 3 Number"
      default="+30%"
    />
    <TextField
      name="stat3_label"
      label="Stat 3 Label"
      default="increase in career confidence"
    />
    <TextField
      name="stat4_number"
      label="Stat 4 Number"
      default="+42%"
    />
    <TextField
      name="stat4_label"
      label="Stat 4 Label"
      default="increase in intern-to-full-time conversion"
    />
  </ModuleFields>
);

export const meta = {
  label: 'Results Section',
};
