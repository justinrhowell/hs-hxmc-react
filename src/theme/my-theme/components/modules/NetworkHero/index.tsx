import React, { useState } from 'react';
import {
  ModuleFields,
  TextField,
} from '@hubspot/cms-components/fields';
import { DemoModal } from '../../shared/DemoModal';
import { useScrollAnimation, animationStyles } from '../../hooks/useScrollAnimation';

export function Component({ fieldValues }: any) {
  const [isDemoModalOpen, setIsDemoModalOpen] = useState(false);
  const { elementRef, isVisible } = useScrollAnimation({ threshold: 0.1 });

  return (
    <>
      <section
        ref={elementRef as React.RefObject<HTMLElement>}
        style={{
          minHeight: '85vh',
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          justifyContent: 'center',
          padding: '120px var(--spacing-lg) 80px',
          background: 'var(--gradient-hero)',
          backgroundImage: 'var(--pattern-dots)',
          backgroundSize: 'var(--pattern-dots-size)',
          textAlign: 'center',
          position: 'relative',
          ...animationStyles.subtleSlideUp(isVisible),
        }}
      >
        <div style={{ maxWidth: 'var(--max-width-lg)', margin: '0 auto', position: 'relative', zIndex: 1 }}>
          {/* Badge/Pill */}
          <div style={{
            display: 'inline-flex',
            alignItems: 'center',
            padding: '0.5rem 1.25rem',
            background: 'rgba(239, 71, 111, 0.1)',
            borderRadius: 'var(--radius-full)',
            fontSize: '0.875rem',
            fontWeight: 600,
            color: 'var(--text-coral)',
            marginBottom: 'var(--spacing-xl)',
            border: '1px solid rgba(239, 71, 111, 0.2)',
          }}>
            {fieldValues.badge || 'MENTORSHIP OS'}
          </div>

          <h1 style={{
            fontSize: 'var(--font-size-h1)',
            fontWeight: 700,
            lineHeight: 'var(--line-height-tight)',
            letterSpacing: 'var(--letter-spacing-tight)',
            marginBottom: 'var(--spacing-md)',
            color: 'var(--text-primary)',
            fontFamily: 'var(--font-headline)',
          }}>
            {fieldValues.title || 'Your Network. Powered by the AI Mentorship OS.'}
          </h1>

          <p style={{
            fontSize: '1.15rem',
            color: 'var(--text-coral)',
            fontWeight: 600,
            marginBottom: 'var(--spacing-lg)',
          }}>
            {fieldValues.tagline || 'Where Learners, Alumni, Professionals, and Employers Connect with Purpose.'}
          </p>

          <p style={{
            fontSize: '1.15rem',
            color: 'var(--text-secondary)',
            lineHeight: 'var(--line-height-relaxed)',
            marginBottom: 'var(--spacing-2xl)',
            maxWidth: 'var(--max-width-prose)',
            margin: '0 auto var(--spacing-2xl)',
          }}>
            {fieldValues.description || 'We embed mentorship infrastructure into your organization\'s unique culture and network, creating a living ecosystem that unlocks social capital, accelerates career readiness, and strengthens talent pipelines across campuses, communities, and industries.'}
          </p>

          {/* CTA Button */}
          <button
            onClick={() => setIsDemoModalOpen(true)}
            style={{
              display: 'inline-flex',
              alignItems: 'center',
              gap: '0.5rem',
              padding: 'var(--btn-padding)',
              background: 'linear-gradient(135deg, var(--text-coral) 0%, #F89F7B 100%)',
              color: 'var(--text-white)',
              border: 'none',
              borderRadius: 'var(--radius-full)',
              fontSize: '1.05rem',
              fontWeight: 600,
              cursor: 'pointer',
              boxShadow: '0 8px 24px rgba(239, 71, 111, 0.3)',
              transition: 'var(--transition-medium)',
            }}
          >
            {fieldValues.button_text || 'Request a Demo'}
          </button>
        </div>
      </section>

      <DemoModal isOpen={isDemoModalOpen} onClose={() => setIsDemoModalOpen(false)} />
    </>
  );
}

export const fields = (
  <ModuleFields>
    <TextField
      name="badge"
      label="Badge Text"
      default="MENTORSHIP OS"
    />
    <TextField
      name="title"
      label="Hero Title"
      default="Your Network. Powered by the AI Mentorship OS."
    />
    <TextField
      name="tagline"
      label="Tagline"
      default="Where Learners, Alumni, Professionals, and Employers Connect with Purpose."
    />
    <TextField
      name="description"
      label="Description"
      default="We embed mentorship infrastructure into your organization's unique culture and network, creating a living ecosystem that unlocks social capital, accelerates career readiness, and strengthens talent pipelines across campuses, communities, and industries."
    />
    <TextField
      name="button_text"
      label="Button Text"
      default="Request a Demo"
    />
  </ModuleFields>
);

export const meta = {
  label: 'Network Hero',
};
