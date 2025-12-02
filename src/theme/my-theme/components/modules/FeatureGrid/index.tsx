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
      padding: 'var(--section-padding-lg) var(--spacing-lg)',
      background: 'var(--bg-white)',
    }}>
      <div style={{ maxWidth: 'var(--max-width-xl)', margin: '0 auto' }}>
        {fieldValues.heading && (
          <h2 style={{
            fontSize: 'var(--font-size-h2)',
            fontWeight: 500,
            textAlign: 'center',
            marginBottom: 'var(--spacing-md)',
            color: 'var(--text-primary)',
            fontFamily: 'var(--font-headline)',
          }}>
            {fieldValues.heading}
          </h2>
        )}

        {fieldValues.subtitle && (
          <p style={{
            fontSize: 'var(--font-size-lead)',
            textAlign: 'center',
            color: 'var(--text-primary)',
            lineHeight: 'var(--line-height-relaxed)',
            marginBottom: 'var(--spacing-2xl)',
            maxWidth: 'var(--max-width-md)',
            margin: '0 auto var(--spacing-2xl)',
          }}>
            {fieldValues.subtitle}
          </p>
        )}

        <div style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))',
          gap: 'var(--spacing-lg)',
        }}>
          {features.map((feature: any, index: number) => (
            <div
              key={index}
              style={{
                background: 'var(--bg-white)',
                padding: 'var(--card-padding)',
                borderRadius: 'var(--radius-lg)',
                border: '2px solid var(--border-light)',
                boxShadow: 'var(--shadow-sm)',
              }}
            >
              {feature.icon && (
                <div style={{
                  fontSize: 'var(--font-size-h2)',
                  marginBottom: 'var(--spacing-sm)',
                }}>
                  {feature.icon}
                </div>
              )}
              <h3 style={{
                fontSize: 'var(--font-size-h4)',
                fontWeight: 500,
                marginBottom: 'var(--spacing-sm)',
                color: 'var(--text-coral)',
              }}>
                {feature.title}
              </h3>
              <p style={{
                fontSize: 'var(--font-size-body)',
                lineHeight: 'var(--line-height-relaxed)',
                color: 'var(--text-secondary)',
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
