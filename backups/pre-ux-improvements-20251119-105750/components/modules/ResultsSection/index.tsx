import React from 'react';
import {
  ModuleFields,
  TextField,
  NumberField,
} from '@hubspot/cms-components/fields';
import girlMicroscopeImg from '../../../assets/girl-looking-into-microscope.png';
import scienceGirlImg from '../../../assets/science-girl.png';
import groupImg from '../../../assets/group.png';
import girlOfficeImg from '../../../assets/girl-in-office.png';
import starSvg from '../../../assets/Star.svg';
import fourLeafSvg from '../../../assets/four-leaf-graphic.svg';
import { useScrollAnimation, animationStyles } from '../useScrollAnimation';

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
  const { elementRef, isVisible } = useScrollAnimation({ threshold: 0.2 });

  const stats: Stat[] = [
    { number: fieldValues.stat1_number || '+6%', label: fieldValues.stat1_label || 'retention lift for program participants' },
    { number: fieldValues.stat2_number || '+8–19%', label: fieldValues.stat2_label || 'boost in sense of belonging' },
    { number: fieldValues.stat3_number || '+30%', label: fieldValues.stat3_label || 'increase in career confidence' },
    { number: fieldValues.stat4_number || '+42%', label: fieldValues.stat4_label || 'increase in intern-to-full-time conversion' }
  ];

  return (
    <section
      ref={elementRef as React.RefObject<HTMLElement>}
      style={{
        padding: '100px 20px',
        background: 'linear-gradient(180deg, white 0%, #FFFBF8 100%)',
        position: 'relative',
        overflow: 'hidden',
        ...animationStyles.fadeIn(isVisible),
      }}
      aria-labelledby="results-heading"
    >
      <div style={{ maxWidth: '1200px', margin: '0 auto', padding: '0 1.5rem', position: 'relative', zIndex: 1 }}>
        <div className="results-content" style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '5rem', alignItems: 'center' }}>
          <div style={{
            position: 'relative',
            height: '550px',
            width: '100%',
          }}>
            {/* Star graphic - top left - NO FRAME */}
            <img
              src={starSvg}
              alt=""
              role="presentation"
              loading="lazy"
              style={{
                position: 'absolute',
                top: '0px',
                left: '40px',
                width: '60px',
                height: '60px',
                zIndex: 1,
              }}
            />

            {/* Four-leaf graphic - bottom left - NO FRAME */}
            <img
              src={fourLeafSvg}
              alt=""
              role="presentation"
              loading="lazy"
              style={{
                position: 'absolute',
                bottom: '60px',
                left: '0px',
                width: '140px',
                height: '140px',
                zIndex: 1,
              }}
            />

            {/* Photo 1 - Girl with microscope - BACK/LEFT - with polaroid frame */}
            <div style={{
              position: 'absolute',
              top: '60px',
              left: '80px',
              width: '380px',
              height: '300px',
              background: 'white',
              padding: '16px',
              boxShadow: '0 8px 32px rgba(0, 0, 0, 0.12)',
              borderRadius: '8px',
              zIndex: 2,
            }}>
              <img
                src={girlMicroscopeImg}
                alt="Mentorship in action - student using microscope"
                loading="lazy"
                style={{
                  width: '100%',
                  height: '100%',
                  objectFit: 'cover',
                  borderRadius: '4px',
                }}
              />
            </div>

            {/* Photo 2 - Science girl - FRONT/RIGHT - with polaroid frame, overlapping */}
            <div style={{
              position: 'absolute',
              top: '180px',
              right: '60px',
              width: '280px',
              height: '320px',
              background: 'white',
              padding: '16px',
              boxShadow: '0 12px 40px rgba(0, 0, 0, 0.15)',
              borderRadius: '8px',
              zIndex: 3,
            }}>
              <img
                src={scienceGirlImg}
                alt="Student in science program"
                loading="lazy"
                style={{
                  width: '100%',
                  height: '100%',
                  objectFit: 'cover',
                  borderRadius: '4px',
                }}
              />
            </div>
          </div>
          <div>
            <h2
              id="results-heading"
              style={{
                fontSize: '3rem',
                lineHeight: 1.2,
                marginBottom: '1.5rem',
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
              fontSize: '1.15rem',
              lineHeight: 1.8,
              marginBottom: '3rem',
              color: '#6B7280'
            }}>
              Our platform delivers measurable outcomes across every cohort—learners, mentors, educators, and employers.
            </p>
            <div className="stats-grid" style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '1.75rem' }}>
              {stats.map((stat, index) => (
                <div
                  key={index}
                  className="stat-card"
                  style={{
                    padding: '2.5rem',
                    background: 'linear-gradient(135deg, rgba(255, 255, 255, 0.95) 0%, rgba(255, 251, 248, 0.95) 100%)',
                    borderRadius: '20px',
                    border: '2px solid rgba(255, 75, 126, 0.1)',
                    boxShadow: '0 8px 24px rgba(0, 0, 0, 0.06)',
                    transition: 'all 0.4s ease',
                    cursor: 'pointer',
                    position: 'relative',
                    overflow: 'hidden',
                    ...animationStyles.staggered(isVisible, index * 0.1),
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
                    background: 'radial-gradient(circle, rgba(255, 75, 126, 0.08) 0%, transparent 70%)',
                    borderRadius: '50%'
                  }} />
                  <div style={{
                    fontSize: '3.5rem',
                    marginBottom: '0.75rem',
                    fontWeight: 800,
                    background: 'linear-gradient(135deg, #FF4B7E 0%, #FF6B9D 50%, #FFA0BC 100%)',
                    WebkitBackgroundClip: 'text',
                    WebkitTextFillColor: 'transparent',
                    backgroundClip: 'text',
                    letterSpacing: '-0.02em',
                    position: 'relative',
                    zIndex: 1
                  }}>
                    {stat.number}
                  </div>
                  <div style={{
                    fontSize: '0.95rem',
                    lineHeight: 1.6,
                    color: '#374151',
                    fontWeight: 500,
                    position: 'relative',
                    zIndex: 1
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
