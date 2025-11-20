import {
  ModuleFields,
  TextField,
  RepeatedFieldGroup,
} from '@hubspot/cms-components/fields';

export function Component({ fieldValues }: any) {
  const testimonials = fieldValues.testimonials || [
    { quote: 'This is amazing!', author: 'John Doe', role: 'CEO, Company' },
  ];

  return (
    <section style={{
      padding: '80px 20px',
      background: 'linear-gradient(135deg, rgba(239, 71, 111, 0.05) 0%, rgba(248, 159, 123, 0.05) 100%)',
    }}>
      <div style={{ maxWidth: '1200px', margin: '0 auto' }}>
        {fieldValues.heading && (
          <h2 style={{
            fontSize: 'clamp(2rem, 4vw, 3rem)',
            fontWeight: 500,
            textAlign: 'center',
            marginBottom: '1.5rem',
            color: '#1a1a1a',
            fontFamily: 'var(--font-headline)',
          }}>
            {fieldValues.heading}
          </h2>
        )}

        {fieldValues.subtitle && (
          <p style={{
            fontSize: '1.15rem',
            textAlign: 'center',
            color: '#4a4a4a',
            lineHeight: 1.7,
            marginBottom: '4rem',
            maxWidth: '800px',
            margin: '0 auto 4rem',
          }}>
            {fieldValues.subtitle}
          </p>
        )}

        <div style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))',
          gap: '2rem',
        }}>
          {testimonials.map((testimonial: any, index: number) => (
            <div
              key={index}
              style={{
                background: 'white',
                padding: '2rem',
                borderRadius: '16px',
                borderLeft: '4px solid #EF476F',
                boxShadow: '0 4px 16px rgba(0, 0, 0, 0.06)',
              }}
            >
              <p style={{
                fontSize: '1.05rem',
                lineHeight: 1.7,
                color: '#333',
                marginBottom: '1rem',
                fontStyle: 'italic',
              }}>
                "{testimonial.quote}"
              </p>
              <p style={{
                fontSize: '0.9rem',
                color: '#666',
                fontWeight: 600,
                marginBottom: '0.25rem',
              }}>
                {testimonial.author}
              </p>
              {testimonial.role && (
                <p style={{
                  fontSize: '0.85rem',
                  color: '#999',
                }}>
                  {testimonial.role}
                </p>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
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
