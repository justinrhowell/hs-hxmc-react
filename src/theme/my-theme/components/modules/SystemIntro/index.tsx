import {
  ModuleFields,
  TextField,
} from '@hubspot/cms-components/fields';

export function Component({ fieldValues }: any) {
  const pillars = [
    {
      title: fieldValues.pillar1_title || 'The Platform',
      description: fieldValues.pillar1_description || 'Scale mentorship with the infrastructure to streamline program launch and automate logistics.',
      linkText: fieldValues.pillar1_link_text || 'Learn more',
      linkUrl: fieldValues.pillar1_link_url || '#platform',
    },
    {
      title: fieldValues.pillar2_title || 'The Experience',
      description: fieldValues.pillar2_description || 'Deepen and sustain engagement with relevant matches and AI-guided conversations.',
      linkText: fieldValues.pillar2_link_text || 'Learn more',
      linkUrl: fieldValues.pillar2_link_url || '#experience',
    },
    {
      title: fieldValues.pillar3_title || 'The Intelligence',
      description: fieldValues.pillar3_description || 'Prove ROI by transforming human interaction into measurable, real-time insights.',
      linkText: fieldValues.pillar3_link_text || 'Learn more',
      linkUrl: fieldValues.pillar3_link_url || '#intelligence',
    },
  ];

  return (
    <section style={{
      padding: '100px 20px',
      background: 'white',
    }}>
      <div style={{ maxWidth: '1200px', margin: '0 auto' }}>
        <h2 style={{
          fontSize: 'clamp(2rem, 4vw, 3rem)',
          fontWeight: 500,
          textAlign: 'center',
          marginBottom: 'var(--spacing-lg)',
          color: 'var(--text-primary)',
          fontFamily: 'var(--font-headline)',
          lineHeight: 1.2,
        }}>
          {fieldValues.heading}
        </h2>

        <p style={{
          fontSize: 'var(--font-size-body-lg)',
          textAlign: 'center',
          color: 'var(--text-primary)',
          lineHeight: 1.7,
          marginBottom: 'var(--spacing-2xl)',
          maxWidth: '900px',
          margin: '0 auto var(--spacing-2xl)',
        }}>
          {fieldValues.subtitle}
        </p>

        <div style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))',
          gap: 'var(--spacing-xl)',
          marginBottom: 'var(--spacing-2xl)',
        }}>
          {pillars.map((pillar, index) => (
            <div
              key={index}
              style={{
                background: 'var(--bg-glass)',
                padding: 'var(--spacing-xl)',
                borderRadius: 'var(--radius-lg)',
                border: '2px solid var(--border-light)',
                boxShadow: 'var(--shadow-md)',
                transition: 'all 0.3s ease',
              }}
            >
              <h3 style={{
                fontSize: 'var(--font-size-h3)',
                fontWeight: 500,
                marginBottom: 'var(--spacing-md)',
                color: 'var(--text-coral)',
                fontFamily: 'var(--font-headline)',
              }}>
                {pillar.title}
              </h3>
              <p style={{
                fontSize: 'var(--font-size-base)',
                lineHeight: 1.7,
                color: 'var(--text-muted)',
                marginBottom: 'var(--spacing-lg)',
              }}>
                {pillar.description}
              </p>
              <a
                href={pillar.linkUrl}
                style={{
                  color: 'var(--text-coral)',
                  textDecoration: 'none',
                  fontSize: 'var(--font-size-base)',
                  fontWeight: 600,
                  display: 'inline-flex',
                  alignItems: 'center',
                  gap: '0.5rem',
                  transition: 'gap 0.3s ease',
                }}
              >
                {pillar.linkText}
                <svg width="16" height="16" viewBox="0 0 24 24" fill="none" style={{ transform: 'rotate(90deg)' }}>
                  <path d="M5 12H19M19 12L12 5M19 12L12 19" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
              </a>
            </div>
          ))}
        </div>

        <div style={{ textAlign: 'center' }}>
          <p style={{
            fontSize: 'var(--font-size-h3)',
            fontWeight: 500,
            marginBottom: 'var(--spacing-xl)',
            color: 'var(--text-primary)',
          }}>
            {fieldValues.tagline}
          </p>
          <a
            href={fieldValues.button_url || '#contact'}
            style={{
              display: 'inline-block',
              padding: 'var(--btn-padding)',
              background: 'var(--gradient-coral)',
              color: 'white',
              border: 'none',
              borderRadius: 'var(--radius-full)',
              fontSize: 'var(--font-size-base)',
              fontWeight: 600,
              textDecoration: 'none',
              boxShadow: 'var(--shadow-coral-sm)',
              transition: 'var(--transition-medium)',
            }}
            aria-label={fieldValues.button_text}
          >
            {fieldValues.button_text}
          </a>
        </div>
      </div>
    </section>
  );
}

export const fields = (
  <ModuleFields>
    <TextField name="heading" label="Section Heading" default="The Essential Infrastructure for Measurable Success" />
    <TextField name="subtitle" label="Subtitle" default="The world is changing, and human connection is your most powerful asset. The Mentor Collective OS transforms that connection into a strategic, scalable engine for retention, belonging, and career outcomes." />

    <TextField name="pillar1_title" label="Pillar 1 Title" default="The Platform" />
    <TextField name="pillar1_description" label="Pillar 1 Description" default="Scale mentorship with the infrastructure to streamline program launch and automate logistics." />
    <TextField name="pillar1_link_text" label="Pillar 1 Link Text" default="Learn more" />
    <TextField name="pillar1_link_url" label="Pillar 1 Link URL" default="#platform" />

    <TextField name="pillar2_title" label="Pillar 2 Title" default="The Experience" />
    <TextField name="pillar2_description" label="Pillar 2 Description" default="Deepen and sustain engagement with relevant matches and AI-guided conversations." />
    <TextField name="pillar2_link_text" label="Pillar 2 Link Text" default="Learn more" />
    <TextField name="pillar2_link_url" label="Pillar 2 Link URL" default="#experience" />

    <TextField name="pillar3_title" label="Pillar 3 Title" default="The Intelligence" />
    <TextField name="pillar3_description" label="Pillar 3 Description" default="Prove ROI by transforming human interaction into measurable, real-time insights." />
    <TextField name="pillar3_link_text" label="Pillar 3 Link Text" default="Learn more" />
    <TextField name="pillar3_link_url" label="Pillar 3 Link URL" default="#intelligence" />

    <TextField name="tagline" label="Bottom Tagline" default="We don't just match people. We move them forward." />
    <TextField name="button_text" label="Button Text" default="Request a Demo" />
    <TextField name="button_url" label="Button URL" default="#contact" />
  </ModuleFields>
);

export const meta = {
  label: 'System Intro',
};
