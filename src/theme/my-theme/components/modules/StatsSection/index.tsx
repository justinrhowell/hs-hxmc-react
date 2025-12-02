import {
  ModuleFields,
  TextField,
  RepeatedFieldGroup,
} from '@hubspot/cms-components/fields';

export function Component({ fieldValues }: any) {
  const stats = fieldValues.stats || [
    { value: '100+', stat_label: 'Customers' },
    { value: '50K', stat_label: 'Users' },
    { value: '99%', stat_label: 'Satisfaction' },
  ];

  return (
    <section style={{
      padding: 'var(--section-padding-lg) var(--spacing-lg)',
      background: 'var(--gradient-coral-light)',
    }}>
      <div style={{ maxWidth: 'var(--max-width-xl)', margin: '0 auto' }}>
        {fieldValues.heading && (
          <h2 style={{
            fontSize: 'var(--font-size-h2)',
            fontWeight: 600,
            textAlign: 'center',
            marginBottom: 'var(--spacing-xl)',
            color: 'var(--text-primary)',
          }}>
            {fieldValues.heading}
          </h2>
        )}

        <div style={{
          display: 'flex',
          gap: 'var(--spacing-xl)',
          justifyContent: 'center',
          flexWrap: 'wrap',
        }}>
          {stats.map((stat: any, index: number) => (
            <div
              key={index}
              style={{
                textAlign: 'center',
                minWidth: '120px',
              }}
            >
              <div style={{
                fontSize: 'var(--font-size-h2)',
                fontWeight: 800,
                color: 'var(--text-coral)',
                marginBottom: 'var(--spacing-xs)',
              }}>
                {stat.value}
              </div>
              <div style={{
                fontSize: 'var(--font-size-body)',
                color: 'var(--text-secondary)',
                fontWeight: 500,
              }}>
                {stat.stat_label}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export const fields = (
  <ModuleFields>
    <TextField name="heading" label="Section Heading (Optional)" default="" />
    <RepeatedFieldGroup
      name="stats"
      label="Statistics"
      occurrence={{
        min: 1,
        max: 8,
        default: 3,
      }}
    >
      <TextField name="value" label="Stat Value" default="100+" />
      <TextField name="stat_label" label="Stat Label" default="Metric Name" />
    </RepeatedFieldGroup>
  </ModuleFields>
);

export const meta = {
  label: 'Stats Section',
};
