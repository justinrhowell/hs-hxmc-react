import React, { useState } from 'react';
import {
  ModuleFields,
  TextField,
} from '@hubspot/cms-components/fields';
import { DemoModal } from '../../shared/DemoModal';
import { ScrollAnimationScript } from '../../shared/ScrollAnimationScript';

export function Component({ fieldValues }: any) {
  const [isModalOpen, setIsModalOpen] = useState(false);

  return (
    <>
      <ScrollAnimationScript />
      <section
        className="scroll-animate"
        style={{
          padding: 'var(--section-padding-lg) var(--spacing-lg)',
          background: 'var(--gradient-hero)',
          backgroundImage: 'var(--pattern-dots)',
          backgroundSize: 'var(--pattern-dots-size)',
          position: 'relative',
        }}
        aria-labelledby="cta-heading"
      >
        <div className="container" style={{
          maxWidth: 'var(--max-width-xl)',
          margin: '0 auto'
        }}>
          <div style={{
            background: 'var(--gradient-coral-peach)',
            borderRadius: 'var(--radius-2xl)',
            padding: 'var(--spacing-2xl) var(--spacing-2xl)',
            textAlign: 'center',
            position: 'relative',
            overflow: 'hidden',
          }}>
            {/* Decorative background elements */}
            <div style={{
              position: 'absolute',
              top: '-50px',
              right: '-50px',
              width: '200px',
              height: '200px',
              background: 'rgba(255, 255, 255, 0.1)',
              borderRadius: '50%',
              filter: 'blur(40px)',
              pointerEvents: 'none'
            }} />
            <div style={{
              position: 'absolute',
              bottom: '-30px',
              left: '-30px',
              width: '150px',
              height: '150px',
              background: 'rgba(255, 255, 255, 0.1)',
              borderRadius: '50%',
              filter: 'blur(30px)',
              pointerEvents: 'none'
            }} />

            <div style={{
              maxWidth: '850px',
              margin: '0 auto',
              position: 'relative',
              zIndex: 'var(--z-base)'
            }}>
              <h2
                id="cta-heading"
                style={{
                  fontSize: 'var(--font-size-h2)',
                  fontWeight: 500,
                  color: 'var(--text-white)',
                  marginBottom: 'var(--spacing-md)',
                  fontFamily: 'var(--font-headline)',
                  lineHeight: 'var(--line-height-tight)'
                }}
              >
                Ready to unlock your network's hidden power?
              </h2>
              <p style={{
                fontSize: 'var(--font-size-lead)',
                color: 'var(--text-white-soft)',
                marginBottom: 'var(--spacing-md)',
                lineHeight: 'var(--line-height-normal)'
              }}>
                Mentorship reinvented as AI infrastructure for education, workforce, and early talent ecosystems.
              </p>
              <p style={{
                fontSize: 'var(--font-size-body-lg)',
                color: 'var(--text-white-soft)',
                marginBottom: 'var(--spacing-2xl)',
                lineHeight: 'var(--line-height-normal)',
                fontWeight: 600
              }}>
                One OS. Infinite pathways.
              </p>
              <button
                onClick={() => setIsModalOpen(true)}
                className="btn-white"
                aria-label="Request a demo"
              >
                Request a Demo
              </button>
            </div>
          </div>
        </div>
      </section>

      <DemoModal isOpen={isModalOpen} onClose={() => setIsModalOpen(false)} />
    </>
  );
}

export const fields = (
  <ModuleFields>
    <TextField
      name="heading"
      label="Heading"
      default="Ready to unlock your network's hidden power?"
    />
    <TextField
      name="subheading"
      label="Subheading"
      default="Mentorship reinvented as AI infrastructure for education, workforce, and early talent ecosystems."
    />
    <TextField
      name="tagline"
      label="Tagline"
      default="One OS. Infinite pathways."
    />
    <TextField
      name="buttonText"
      label="Button Text"
      default="Request a Demo"
    />
  </ModuleFields>
);

export const meta = {
  label: 'CTA Section',
};
