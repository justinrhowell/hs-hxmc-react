import React from 'react';
import {
  ModuleFields,
  TextField,
  RepeatedFieldGroup,
} from '@hubspot/cms-components/fields';
import { ScrollAnimationScript } from '../../shared/ScrollAnimationScript';

export function Component({ fieldValues }: any) {
  const testimonials = fieldValues.testimonials || [
    { quote: 'This is amazing!', author: 'John Doe', role: 'CEO, Company' },
  ];

  return (
    <>
    <ScrollAnimationScript />
    <section
      className="scroll-animate"
      style={{
        padding: '80px 20px',
        background: 'linear-gradient(135deg, rgba(239, 71, 111, 0.05) 0%, rgba(248, 159, 123, 0.05) 100%)',
      }}
    >
      <div style={{ maxWidth: '1200px', margin: '0 auto' }}>
        {fieldValues.heading && (
          <h2 style={{
            fontSize: 'clamp(2rem, 4vw, 3rem)',
            fontWeight: 500,
            textAlign: 'center',
            marginBottom: 'var(--spacing-lg)',
            color: 'var(--text-primary)',
            fontFamily: 'var(--font-headline)',
          }}>
            {fieldValues.heading}
          </h2>
        )}

        {fieldValues.subtitle && (
          <p style={{
            fontSize: 'var(--font-size-body-lg)',
            textAlign: 'center',
            color: 'var(--text-primary)',
            lineHeight: 1.7,
            marginBottom: 'var(--spacing-2xl)',
            maxWidth: '800px',
            margin: '0 auto var(--spacing-2xl)',
          }}>
            {fieldValues.subtitle}
          </p>
        )}

        <div style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))',
          gap: 'var(--spacing-xl)',
        }}>
          {testimonials.map((testimonial: any, index: number) => (
            <div
              key={index}
              style={{
                background: 'white',
                padding: 'var(--spacing-xl)',
                borderRadius: 'var(--radius-lg)',
                borderLeft: '4px solid var(--primary-coral)',
                boxShadow: '0 4px 16px rgba(0, 0, 0, 0.06)',
              }}
            >
              <p style={{
                fontSize: 'var(--font-size-body)',
                lineHeight: 1.7,
                color: 'var(--text-primary)',
                marginBottom: 'var(--spacing-md)',
                fontStyle: 'italic',
              }}>
                "{testimonial.quote}"
              </p>
              <p style={{
                fontSize: 'var(--font-size-small)',
                color: 'var(--text-secondary)',
                fontWeight: 600,
                marginBottom: 'var(--spacing-xxs)',
              }}>
                {testimonial.author}
              </p>
              {testimonial.role && (
                <p style={{
                  fontSize: 'var(--font-size-small)',
                  color: 'var(--text-muted)',
                }}>
                  {testimonial.role}
                </p>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
    </>
  );
}

export const fields = (
  <ModuleFields>
    <TextField name="heading" label="Section Heading" default="What People Say" />
    <TextField name="subtitle" label="Subtitle (Optional)" default="" />
    <RepeatedFieldGroup
      name="testimonials"
      label="Testimonials"
      occurrence={{
        min: 1,
        max: 12,
        default: 3,
      }}
    >
      <TextField name="quote" label="Quote" default="This is an amazing testimonial" />
      <TextField name="author" label="Author Name" default="John Doe" />
      <TextField name="role" label="Role/Title (Optional)" default="CEO, Company" />
    </RepeatedFieldGroup>
  </ModuleFields>
);

export const meta = {
  label: 'Testimonial Section',
};
