export function Component({ fieldValues }: any) {
  // Default pillars
  const defaultPillars = [
    {
      title: 'The Platform',
      description: 'Scale mentorship with the infrastructure to streamline program launch and automate logistics.',
      linkText: 'Learn more',
      linkUrl: '#platform',
    },
    {
      title: 'The Experience',
      description: 'Deepen and sustain engagement with relevant matches and AI-guided conversations.',
      linkText: 'Learn more',
      linkUrl: '#experience',
    },
    {
      title: 'The Intelligence',
      description: 'Prove ROI by transforming human interaction into measurable, real-time insights.',
      linkText: 'Learn more',
      linkUrl: '#intelligence',
    },
  ];

  // Use custom pillars if provided, otherwise fall back to defaults
  const customPillars = fieldValues.pillars || [];
  const pillars = customPillars.length > 0
    ? customPillars.map((p: any) => ({
        title: p.title || 'Pillar Title',
        description: p.description || 'Pillar description',
        linkText: p.link_text || 'Learn more',
        linkUrl: p.link_url || '#',
      }))
    : defaultPillars;

  return (
    <section style={{
      padding: 'var(--section-padding-md) var(--spacing-lg)',
      paddingBottom: 'var(--spacing-lg)',
      background: 'var(--bg-white)',
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
            fontSize: 'var(--font-size-body-lg)',
            fontWeight: 500,
            lineHeight: 'var(--line-height-normal)',
            marginBottom: 'var(--spacing-xl)',
            color: 'var(--text-secondary)',
            fontFamily: 'var(--font-headline)',
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

export const fields: any = [
  {
    type: 'text',
    name: 'heading',
    label: 'Section Heading',
    default: 'The Essential Infrastructure for Measurable Success',
  },
  {
    type: 'text',
    name: 'subtitle',
    label: 'Subtitle',
    default: 'The world is changing, and human connection is your most powerful asset. The Mentor Collective OS transforms that connection into a strategic, scalable engine for retention, belonging, and career outcomes.',
  },
  {
    type: 'group',
    name: 'pillars',
    label: 'Pillars',
    help_text: 'Edit the pillar cards. Leave empty to use defaults.',
    occurrence: {
      min: 0,
      max: 6,
      default: 0,
    },
    children: [
      {
        type: 'text',
        name: 'title',
        label: 'Pillar Title',
        default: 'The Platform',
      },
      {
        type: 'text',
        name: 'description',
        label: 'Pillar Description',
        default: 'Scale mentorship with the infrastructure to streamline program launch and automate logistics.',
      },
      {
        type: 'text',
        name: 'link_text',
        label: 'Link Text',
        default: 'Learn more',
      },
      {
        type: 'text',
        name: 'link_url',
        label: 'Link URL',
        default: '#platform',
      },
    ],
  },
  {
    type: 'text',
    name: 'tagline',
    label: 'Bottom Tagline',
    default: "We don't just match people. We move them forward.",
  },
  {
    type: 'text',
    name: 'button_text',
    label: 'Button Text',
    default: 'Request a Demo',
  },
  {
    type: 'text',
    name: 'button_url',
    label: 'Button URL',
    default: '#contact',
  },
];

export const meta = {
  label: 'System Intro',
};
