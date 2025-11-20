import {
  ModuleFields,
  TextField,
} from '@hubspot/cms-components/fields';

export function Component({ fieldValues }: any) {
  const features = [
    {
      title: fieldValues.feature1_title || 'Real-Time Analytics',
      description: fieldValues.feature1_description || 'Monitor program health at a glance',
    },
    {
      title: fieldValues.feature2_title || 'Configurable Reporting',
      description: fieldValues.feature2_description || 'Generate custom reports for different stakeholders',
    },
    {
      title: fieldValues.feature3_title || 'Early Alerts',
      description: fieldValues.feature3_description || 'Surface struggling mentorships before they fail',
    },
    {
      title: fieldValues.feature4_title || 'Outcome Measurement',
      description: fieldValues.feature4_description || 'Connect mentorship activity directly to institutional outcomes',
    },
  ];

  const stats = [
    { value: fieldValues.stat1_value || '+6%', label: fieldValues.stat1_label || 'retention improvement' },
    { value: fieldValues.stat2_value || '+8-19%', label: fieldValues.stat2_label || 'increase in belonging' },
    { value: fieldValues.stat3_value || '+30%', label: fieldValues.stat3_label || 'career confidence boost' },
  ];

  return (
    <section id="intelligence" style={{ padding: '100px 20px', background: 'linear-gradient(180deg, white 0%, #FFFBF8 100%)' }}>
      <div style={{ maxWidth: '1200px', margin: '0 auto' }}>
        <h2 style={{ fontSize: 'clamp(2rem, 4vw, 3rem)', fontWeight: 500, marginBottom: '1.5rem', color: '#1a1a1a', fontFamily: 'var(--font-headline)' }}>
          {fieldValues.heading}
        </h2>
        <p style={{ fontSize: '1.15rem', color: '#4a4a4a', lineHeight: 1.7, marginBottom: '4rem', maxWidth: '900px' }}>
          {fieldValues.subtitle}
        </p>

        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))', gap: '2rem', marginBottom: '4rem' }}>
          {features.map((feature, index) => (
            <div key={index} style={{ background: 'white', padding: '2rem', borderRadius: '16px', border: '2px solid rgba(239, 71, 111, 0.1)' }}>
              <h3 style={{ fontSize: '1.25rem', fontWeight: 600, marginBottom: '1rem', color: '#EF476F' }}>{feature.title}</h3>
              <p style={{ fontSize: '0.95rem', lineHeight: 1.7, color: '#6B7280' }}>{feature.description}</p>
            </div>
          ))}
        </div>

        <div style={{ background: 'white', padding: '3rem', borderRadius: '20px' }}>
          <p style={{ fontSize: '1.25rem', fontWeight: 600, textAlign: 'center', marginBottom: '2rem', color: '#1a1a1a' }}>
            {fieldValues.stats_heading}
          </p>
          <div style={{ display: 'flex', gap: '3rem', justifyContent: 'center', flexWrap: 'wrap' }}>
            {stats.map((stat, index) => (
              <div key={index} style={{ textAlign: 'center' }}>
                <div style={{ fontSize: '2.5rem', fontWeight: 800, color: '#EF476F', marginBottom: '0.5rem' }}>{stat.value}</div>
                <div style={{ fontSize: '0.95rem', color: '#666', fontWeight: 500 }}>{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

export const fields = (
  <ModuleFields>
    <TextField name="heading" label="Section Heading" default="The Intelligence" />
    <TextField name="subtitle" label="Subtitle" default="Transform human connection into measurable outcomes" />
    <TextField name="feature1_title" label="Feature 1 Title" default="Real-Time Analytics" />
    <TextField name="feature1_description" label="Feature 1 Description" default="Monitor program health at a glance" />
    <TextField name="feature2_title" label="Feature 2 Title" default="Configurable Reporting" />
    <TextField name="feature2_description" label="Feature 2 Description" default="Generate custom reports for different stakeholders" />
    <TextField name="feature3_title" label="Feature 3 Title" default="Early Alerts" />
    <TextField name="feature3_description" label="Feature 3 Description" default="Surface struggling mentorships before they fail" />
    <TextField name="feature4_title" label="Feature 4 Title" default="Outcome Measurement" />
    <TextField name="feature4_description" label="Feature 4 Description" default="Connect mentorship activity directly to institutional outcomes" />
    <TextField name="stats_heading" label="Stats Heading" default="Measurable Impact Across Key Outcomes" />
    <TextField name="stat1_value" label="Stat 1 Value" default="+6%" />
    <TextField name="stat1_label" label="Stat 1 Label" default="retention improvement" />
    <TextField name="stat2_value" label="Stat 2 Value" default="+8-19%" />
    <TextField name="stat2_label" label="Stat 2 Label" default="increase in belonging" />
    <TextField name="stat3_value" label="Stat 3 Value" default="+30%" />
    <TextField name="stat3_label" label="Stat 3 Label" default="career confidence boost" />
  </ModuleFields>
);

export const meta = {
  label: 'Intelligence Section',
};
