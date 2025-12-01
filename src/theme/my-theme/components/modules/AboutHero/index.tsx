import React from 'react';
import {
  ModuleFields,
  TextField,
} from '@hubspot/cms-components/fields';
import { useScrollAnimation, animationStyles } from '../../hooks/useScrollAnimation';

export function Component({ fieldValues }: any) {
  const { elementRef, isVisible } = useScrollAnimation({ threshold: 0.1 });

  return (
    <section
      ref={elementRef as React.RefObject<HTMLElement>}
      style={{
        minHeight: '70vh',
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
        {/* Page Label */}
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
          About Us
        </div>

        <h1 style={{
          fontSize: 'var(--font-size-h1)',
          fontWeight: 700,
          lineHeight: 'var(--line-height-tight)',
          letterSpacing: 'var(--letter-spacing-tight)',
          marginBottom: 'var(--spacing-lg)',
          color: 'var(--text-primary)',
          fontFamily: 'var(--font-headline)',
        }}>
          {fieldValues.title || 'Mentorship, Reinvented for the AI Era'}
        </h1>

        <p style={{
          fontSize: '1.35rem',
          color: 'var(--text-coral)',
          fontWeight: 600,
          marginBottom: 'var(--spacing-xl)',
          lineHeight: 'var(--line-height-normal)',
        }}>
          {fieldValues.tagline || "We're building the infrastructure that connects learning to opportunity."}
        </p>

        <p style={{
          fontSize: '1.15rem',
          color: 'var(--text-secondary)',
          lineHeight: 'var(--line-height-relaxed)',
          maxWidth: 'var(--max-width-prose)',
          margin: '0 auto var(--spacing-lg)',
        }}>
          {fieldValues.description || "Mentor Collective exists to ensure every learner — whether a student, jobseeker, or early-career professional — has access to the connections, confidence, and support they need to thrive."}
        </p>

        <p style={{
          fontSize: '1.1rem',
          color: 'var(--text-muted)',
          lineHeight: 'var(--line-height-relaxed)',
          maxWidth: 'var(--max-width-prose)',
          margin: '0 auto',
          fontStyle: 'italic',
        }}>
          {fieldValues.subtext || "Human relationships are the most powerful driver of belonging, skill-building, and career mobility. We're here to make them scalable — so support isn't left to chance."}
        </p>
      </div>
    </section>
  );
}

export const fields = (
  <ModuleFields>
    <TextField
      name="title"
      label="Hero Title"
      default="Mentorship, Reinvented for the AI Era"
    />
    <TextField
      name="tagline"
      label="Tagline"
      default="We're building the infrastructure that connects learning to opportunity."
    />
    <TextField
      name="description"
      label="Description"
      default="Mentor Collective exists to ensure every learner — whether a student, jobseeker, or early-career professional — has access to the connections, confidence, and support they need to thrive."
    />
    <TextField
      name="subtext"
      label="Subtext"
      default="Human relationships are the most powerful driver of belonging, skill-building, and career mobility. We're here to make them scalable — so support isn't left to chance."
    />
  </ModuleFields>
);

export const meta = {
  label: 'About Hero',
};
