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
      <div style={{ maxWidth: 'var(--max-width-lg)', margin: '0 auto' }}>
        <div
          className="scroll-animate"
          data-delay="100"
          style={{
            background: 'linear-gradient(135deg, #1a1a2e 0%, #16213e 100%)',
            borderRadius: 'var(--radius-xl)',
            padding: 'var(--spacing-3xl)',
            position: 'relative',
            overflow: 'hidden',
            textAlign: 'center',
          }}
        >
          {/* Background pattern */}
          <div style={{
            position: 'absolute',
            inset: 0,
            backgroundImage: 'radial-gradient(circle at 2px 2px, rgba(255,255,255,0.03) 1px, transparent 0)',
            backgroundSize: '40px 40px',
            pointerEvents: 'none',
          }} />

          {/* Decorative accent */}
          <div style={{
            position: 'absolute',
            top: 0,
            left: '50%',
            transform: 'translateX(-50%)',
            width: '200px',
            height: '4px',
            background: 'var(--gradient-coral)',
            borderRadius: '0 0 4px 4px',
          }} />

          <div style={{ position: 'relative', zIndex: 1 }}>
            <h2 style={{
              fontSize: 'var(--font-size-h3)',
              fontWeight: 500,
              color: 'white',
              marginBottom: 'var(--spacing-lg)',
              fontFamily: 'var(--font-headline)',
              lineHeight: 'var(--line-height-tight)',
            }}>
              {fieldValues.heading || 'Want to join a company with an award-winning culture at the forefront of the AI mentorship platform innovation?'}
            </h2>

            <p style={{
              fontSize: 'var(--font-size-body-lg)',
              color: 'rgba(255, 255, 255, 0.8)',
              lineHeight: 'var(--line-height-relaxed)',
              marginBottom: 'var(--spacing-xl)',
              maxWidth: 'var(--max-width-prose)',
              margin: '0 auto var(--spacing-xl)',
            }}>
              {fieldValues.description || 'If you are passionate about ensuring every learner realizes their full potential, we want to connect with you.'}
            </p>

            <a
              href={fieldValues.button_url || '/careers'}
              style={{
                display: 'inline-flex',
                alignItems: 'center',
                gap: 'var(--spacing-sm)',
                padding: 'var(--spacing-md) var(--spacing-xl)',
                background: 'var(--gradient-coral)',
                color: 'white',
                textDecoration: 'none',
                borderRadius: 'var(--radius-full)',
                fontWeight: 600,
                fontSize: 'var(--font-size-body)',
                transition: 'var(--transition-medium)',
                boxShadow: '0 4px 16px rgba(239, 71, 111, 0.3)',
              }}
            >
              {fieldValues.button_text || 'IGNITE YOUR CAREER'}
              <span style={{ fontSize: 'var(--font-size-body-lg)' }}>→</span>
            </a>
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
    default: 'Want to join a company with an award-winning culture at the forefront of the AI mentorship platform innovation?',
  },
  {
    type: 'text',
    name: 'description',
    label: 'Description',
    default: 'If you are passionate about ensuring every learner realizes their full potential, we want to connect with you.',
  },
  {
    type: 'text',
    name: 'button_text',
    label: 'Button Text',
    default: 'IGNITE YOUR CAREER',
  },
  {
    type: 'text',
    name: 'button_url',
    label: 'Button URL',
    default: '/careers',
  },
];

export const meta = {
  label: 'Careers Callout',
};
