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
      padding: '80px 20px',
      background: 'linear-gradient(135deg, rgba(239, 71, 111, 0.05) 0%, rgba(255, 160, 188, 0.05) 100%)',
    }}>
      <div style={{ maxWidth: '1200px', margin: '0 auto' }}>
        {fieldValues.heading && (
          <h2 style={{
            fontSize: 'clamp(1.5rem, 3vw, 2rem)',
            fontWeight: 600,
            textAlign: 'center',
            marginBottom: '3rem',
            color: '#1a1a1a',
          }}>
            {fieldValues.heading}
          </h2>
        )}

        <div style={{
          display: 'flex',
          gap: '3rem',
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
                fontSize: '2.5rem',
                fontWeight: 800,
                color: '#EF476F',
                marginBottom: '0.5rem',
              }}>
                {stat.value}
              </div>
              <div style={{
                fontSize: '0.95rem',
                color: '#666',
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
