import React, { useEffect, useRef } from 'react';
import {
  ModuleFields,
  TextField,
} from '@hubspot/cms-components/fields';
import logo1 from '../../../assets/Logo-1.png';
import logo2 from '../../../assets/Logo-2.png';
import logo3 from '../../../assets/Logo-3.png';
import logo4 from '../../../assets/Logo-4.png';
import logo5 from '../../../assets/Logo-5.png';
import logo6 from '../../../assets/Logo-6.png';
import logo from '../../../assets/Logo.png';
import { useScrollAnimation, animationStyles } from '../../hooks/useScrollAnimation';

export function Component({ fieldValues }: any) {
  const { elementRef, isVisible } = useScrollAnimation({ threshold: 0.15 });
  // Map logo keys to imported assets
  const logoAssetMap: Record<string, string> = {
    logo: logo,
    logo1: logo1,
    logo2: logo2,
    logo3: logo3,
    logo4: logo4,
    logo5: logo5,
    logo6: logo6,
  };

  // Use custom logos if provided, otherwise fall back to defaults
  const customLogos = fieldValues.logos || [];

  const logos = customLogos.length > 0
    ? customLogos.map((logoItem: any) => ({
        src: logoItem.logo_url || logoAssetMap[logoItem.logo_key] || logo,
        alt: logoItem.alt_text || 'Partner Logo'
      }))
    : [
        { src: logo, alt: 'Partner Logo' },
        { src: logo1, alt: 'Partner Logo' },
        { src: logo2, alt: 'Partner Logo' },
        { src: logo3, alt: 'Partner Logo' },
        { src: logo4, alt: 'Partner Logo' },
        { src: logo5, alt: 'Partner Logo' },
        { src: logo6, alt: 'Partner Logo' }
      ];

  // Duplicate logos for seamless loop
  const duplicatedLogos = [...logos, ...logos];

  const styles: Record<string, React.CSSProperties> = {
    section: {
      padding: 'var(--section-padding-md) var(--spacing-lg)',
      background: 'var(--gradient-hero)',
      backgroundImage: 'var(--pattern-dots)',
      backgroundSize: 'var(--pattern-dots-size)',
      position: 'relative',
      borderTop: '1px solid var(--border-light)',
      borderBottom: '1px solid var(--border-light)',
      overflow: 'hidden',
    },
    container: {
      maxWidth: 'var(--max-width-xl)',
      margin: '0 auto',
      padding: '0 var(--container-padding)',
    },
    heading: {
      fontSize: '1.5rem',
      marginBottom: 'var(--spacing-2xl)',
      color: 'var(--text-primary)',
      textAlign: 'center' as const,
      fontFamily: 'var(--font-headline)',
      fontWeight: 500,
      letterSpacing: 'var(--letter-spacing-normal)',
      lineHeight: 'var(--line-height-normal)',
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
      gap: 'var(--spacing-2xl)',
      alignItems: 'center',
      animation: 'scroll 40s linear infinite',
      width: 'fit-content',
    },
    logoItem: {
      height: '80px',
      display: 'flex',
      alignItems: 'center',
      opacity: 0.7,
      filter: 'grayscale(100%)',
      transition: 'var(--transition-smooth)',
      flexShrink: 0,
      minWidth: '180px',
      justifyContent: 'center' as const,
    },
    logoImg: {
      height: '100%',
      width: 'auto',
      objectFit: 'contain' as const,
      maxWidth: '220px',
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

      <section
        ref={elementRef as React.RefObject<HTMLElement>}
        style={{
          ...styles.section,
          ...animationStyles.subtleSlideUp(isVisible),
        }}
      >
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

export const fields: any = [
  {
    type: 'text',
    name: 'heading',
    label: 'Heading',
    default: '10+ years of mentorship data: 500K learners, 200K mentors, 200 partners.',
  },
  {
    type: 'group',
    name: 'logos',
    label: 'Partner Logos',
    help_text: 'Add partner/client logos (use preset logos OR upload custom image URLs). Leave empty to use default logos.',
    occurrence: {
      min: 0,
      max: 50,
      default: 0,
    },
    children: [
      {
        type: 'choice',
        name: 'logo_key',
        label: 'Preset Logo (optional)',
        help_text: 'Select a preset logo, or leave blank to use custom URL',
        choices: [
          ['', 'None (use custom URL)'],
          ['logo', 'Logo'],
          ['logo1', 'Logo 1'],
          ['logo2', 'Logo 2'],
          ['logo3', 'Logo 3'],
          ['logo4', 'Logo 4'],
          ['logo5', 'Logo 5'],
          ['logo6', 'Logo 6'],
        ],
        default: '',
      },
      {
        type: 'text',
        name: 'logo_url',
        label: 'Custom Logo URL (optional)',
        help_text: 'Use this to upload your own logo image',
        default: '',
      },
      {
        type: 'text',
        name: 'alt_text',
        label: 'Alt Text',
        default: 'Partner Logo',
      },
    ],
  },
];

export const meta = {
  label: 'Logos Carousel',
};
