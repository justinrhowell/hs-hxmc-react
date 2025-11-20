import React, { useEffect, useRef } from 'react';
import {
  ModuleFields,
  TextField,
} from '@hubspot/cms-components/fields';
import dukeLogo from '../../../assets/duke-logo.png';
import uclaLogo from '../../../assets/ucla-logo.png';
import cunyLogo from '../../../assets/cuny-logo.png';
import jpmorganLogo from '../../../assets/jpmorgan-chase-logo.png';
import amazonLogo from '../../../assets/amazon-logo.png';
import oakRidgeLogo from '../../../assets/oak-ridge-logo.png';
import sanJacLogo from '../../../assets/san-jac-logo.png';
import risepointLogo from '../../../assets/risepoint-logo.png';
import ncLogo from '../../../assets/nc-logo.png';

export function Component({ fieldValues }: any) {
  const logos = [
    { src: risepointLogo, alt: 'RisePoint' },
    { src: amazonLogo, alt: 'Amazon' },
    { src: ncLogo, alt: 'NC' },
    { src: cunyLogo, alt: 'CUNY' },
    { src: oakRidgeLogo, alt: 'Oak Ridge' },
    { src: sanJacLogo, alt: 'San Jacinto' },
    { src: uclaLogo, alt: 'UCLA' },
    { src: dukeLogo, alt: 'Duke' },
    { src: jpmorganLogo, alt: 'JPMorgan Chase' }
  ];

  // Duplicate logos for seamless loop
  const duplicatedLogos = [...logos, ...logos];

  const styles: Record<string, React.CSSProperties> = {
    section: {
      padding: '80px 20px',
      background: 'linear-gradient(135deg, #FFFBF8 0%, #FFF8F3 50%, #FFFAF5 100%)',
      position: 'relative',
      borderTop: '1px solid rgba(255, 75, 126, 0.08)',
      borderBottom: '1px solid rgba(255, 75, 126, 0.08)',
      overflow: 'hidden',
    },
    container: {
      maxWidth: '1200px',
      margin: '0 auto',
      padding: '0 1.5rem',
    },
    heading: {
      fontSize: '1.15rem',
      marginBottom: '3.5rem',
      color: '#666',
      textAlign: 'center' as const,
      fontFamily: 'var(--font-body)',
      fontWeight: 500,
      letterSpacing: '0.02em',
    },
    carouselWrapper: {
      position: 'relative' as const,
      overflow: 'hidden',
      width: '100%',
      maskImage: 'linear-gradient(to right, transparent, black 10%, black 90%, transparent)',
      WebkitMaskImage: 'linear-gradient(to right, transparent, black 10%, black 90%, transparent)',
    },
    carouselTrack: {
      display: 'flex',
      gap: '4rem',
      alignItems: 'center',
      animation: 'scroll 40s linear infinite',
      width: 'fit-content',
    },
    logoItem: {
      height: '40px',
      display: 'flex',
      alignItems: 'center',
      opacity: 0.6,
      filter: 'grayscale(100%)',
      transition: 'all 0.4s ease',
      flexShrink: 0,
      minWidth: '120px',
      justifyContent: 'center' as const,
    },
    logoImg: {
      height: '100%',
      width: 'auto',
      objectFit: 'contain' as const,
      maxWidth: '140px',
    },
  };

  return (
    <>
      <style>{`
        @keyframes scroll {
          0% {
            transform: translateX(0);
          }
          100% {
            transform: translateX(-50%);
          }
        }

        .logo-carousel-item:hover {
          opacity: 1 !important;
          filter: grayscale(0%) !important;
          transform: scale(1.05);
        }

        .logo-carousel-track:hover {
          animation-play-state: paused;
        }
      `}</style>

      <section style={styles.section}>
        <div style={styles.container}>
          <h2 style={styles.heading}>
            {fieldValues.heading}
          </h2>

          <div style={styles.carouselWrapper}>
            <div className="logo-carousel-track" style={styles.carouselTrack}>
              {duplicatedLogos.map((logo, index) => (
                <div
                  key={index}
                  className="logo-carousel-item"
                  style={styles.logoItem}
                >
                  <img
                    src={logo.src}
                    alt={logo.alt}
                    loading="lazy"
                    style={styles.logoImg}
                  />
                </div>
              ))}
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
      label="Heading"
      default="10+ years of mentorship data: 500K learners, 200K mentors, 200 partners."
    />
  </ModuleFields>
);

export const meta = {
  label: 'Logos Carousel',
};
