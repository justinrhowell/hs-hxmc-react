import {
  ModuleFields,
  TextField,
  RepeatedFieldGroup,
} from '@hubspot/cms-components/fields';

export function Component({ fieldValues }: any) {
  const features = fieldValues.features || [
    { title: 'Feature 1', description: 'Feature description' },
    { title: 'Feature 2', description: 'Feature description' },
    { title: 'Feature 3', description: 'Feature description' },
  ];

  return (
    <section style={{
      padding: '80px 20px',
      background: 'white',
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
          gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))',
          gap: '2rem',
        }}>
          {features.map((feature: any, index: number) => (
            <div
              key={index}
              style={{
                background: 'white',
                padding: '2rem',
                borderRadius: '16px',
                border: '2px solid rgba(239, 71, 111, 0.1)',
                boxShadow: '0 4px 16px rgba(0, 0, 0, 0.06)',
              }}
            >
              {feature.icon && (
                <div style={{
                  fontSize: '2.5rem',
                  marginBottom: '1rem',
                }}>
                  {feature.icon}
                </div>
              )}
              <h3 style={{
                fontSize: '1.25rem',
                fontWeight: 600,
                marginBottom: '1rem',
                color: '#EF476F',
              }}>
                {feature.title}
              </h3>
              <p style={{
                fontSize: '0.95rem',
                lineHeight: 1.7,
                color: '#6B7280',
              }}>
                {feature.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export const fields = (
  <ModuleFields>
    <TextField name="heading" label="Section Heading" default="Our Features" />
    <TextField name="subtitle" label="Subtitle" default="Discover what makes us different" />
    <RepeatedFieldGroup
      name="features"
      label="Features"
      occurrence={{
        min: 1,
        max: 12,
        default: 3,
      }}
    >
      <TextField name="icon" label="Icon (emoji or text)" default="✨" />
      <TextField name="title" label="Feature Title" default="Feature Title" />
      <TextField name="description" label="Feature Description" default="Feature description goes here" />
    </RepeatedFieldGroup>
  </ModuleFields>
);

export const meta = {
  label: 'Feature Grid',
};
