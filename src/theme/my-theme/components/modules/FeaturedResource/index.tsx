import {
  ModuleFields,
  TextField,
  ChoiceField,
} from '@hubspot/cms-components/fields';

export function Component({ fieldValues }: any) {
  const eyebrow = fieldValues.eyebrow || 'Featured Resource';
  const title = fieldValues.title || 'The Complete Guide to AI-Powered Mentorship';
  const description = fieldValues.description || 'Learn how leading organizations are leveraging artificial intelligence to scale meaningful mentorship connections and drive measurable outcomes.';
  const imageUrl = fieldValues.image_url || 'https://via.placeholder.com/600x400';
  const ctaText = fieldValues.cta_text || 'Download Guide';
  const ctaUrl = fieldValues.cta_url || '#';
  const resourceType = fieldValues.resource_type || 'guide';

  const stats = [
    { value: fieldValues.stat1_value || '10K+', label: fieldValues.stat1_label || 'Downloads' },
    { value: fieldValues.stat2_value || '45 min', label: fieldValues.stat2_label || 'Read Time' },
    { value: fieldValues.stat3_value || '8 Chapters', label: fieldValues.stat3_label || 'Content' },
  ];

  const typeColors: Record<string, { bg: string; text: string }> = {
    article: { bg: 'rgba(239, 71, 111, 0.1)', text: '#EF476F' },
    guide: { bg: 'rgba(6, 214, 160, 0.1)', text: '#06D6A0' },
    case_study: { bg: 'rgba(17, 138, 178, 0.1)', text: '#118AB2' },
    ebook: { bg: 'rgba(255, 209, 102, 0.1)', text: '#FFD166' },
    video: { bg: 'rgba(239, 71, 111, 0.1)', text: '#EF476F' },
    webinar: { bg: 'rgba(17, 138, 178, 0.1)', text: '#118AB2' }
  };

  const typeLabels: Record<string, string> = {
    article: 'Featured Article',
    guide: 'Featured Guide',
    case_study: 'Featured Case Study',
    ebook: 'Featured eBook',
    video: 'Featured Video',
    webinar: 'Featured Webinar'
  };

  const colors = typeColors[resourceType] || typeColors.guide;
  const label = typeLabels[resourceType] || 'Featured Resource';

  return (
    <section style={{
      padding: '80px 20px',
      background: 'linear-gradient(135deg, rgba(239, 71, 111, 0.03) 0%, rgba(248, 159, 123, 0.03) 100%)',
    }}>
      <style dangerouslySetInnerHTML={{__html: `
        @media (max-width: 768px) {
          .featured-resource-grid {
            grid-template-columns: 1fr !important;
          }
          .featured-resource-stats {
            grid-template-columns: 1fr !important;
            gap: 1rem !important;
          }
        }
      `}} />
      <div style={{ maxWidth: '1200px', margin: '0 auto' }}>
        <div
          className="featured-resource-grid"
          style={{
            background: 'white',
            borderRadius: 'var(--radius-xl)',
            overflow: 'hidden',
            boxShadow: '0 12px 48px rgba(0, 0, 0, 0.08)',
            display: 'grid',
            gridTemplateColumns: '1fr 1fr',
            gap: '0',
          }}>
          {/* Image Side */}
          <div style={{
            position: 'relative',
            minHeight: '500px',
            overflow: 'hidden',
          }}>
            <img
              src={imageUrl}
              alt={title}
              loading="lazy"
              style={{
                width: '100%',
                height: '100%',
                objectFit: 'cover',
              }}
            />
            {/* Overlay Badge */}
            <div style={{
              position: 'absolute',
              top: '2rem',
              left: '2rem',
              background: colors.bg,
              color: colors.text,
              padding: '0.5rem 1.25rem',
              borderRadius: 'var(--radius-full)',
              fontSize: '0.875rem',
              fontWeight: 600,
              textTransform: 'uppercase',
              letterSpacing: '0.1em',
              backdropFilter: 'blur(10px)',
            }}>
              {label}
            </div>
          </div>

          {/* Content Side */}
          <div style={{
            padding: '3rem',
            display: 'flex',
            flexDirection: 'column',
            justifyContent: 'center',
          }}>
            {/* Eyebrow */}
            <div style={{
              fontSize: '0.85rem',
              fontWeight: 600,
              color: '#EF476F',
              textTransform: 'uppercase',
              letterSpacing: '0.1em',
              marginBottom: '1rem',
            }}>
              {eyebrow}
            </div>

            {/* Title */}
            <h2 style={{
              fontSize: 'clamp(1.75rem, 3vw, 2.5rem)',
              fontWeight: 500,
              lineHeight: 1.2,
              marginBottom: '1.5rem',
              color: '#1a1a1a',
              fontFamily: 'var(--font-headline)',
            }}>
              {title}
            </h2>

            {/* Description */}
            <p style={{
              fontSize: '1.05rem',
              lineHeight: 1.7,
              color: '#6B7280',
              marginBottom: '2rem',
            }}>
              {description}
            </p>

            {/* Stats */}
            <div
              className="featured-resource-stats"
              style={{
                display: 'grid',
                gridTemplateColumns: 'repeat(3, 1fr)',
                gap: '1.5rem',
                marginBottom: '2rem',
                paddingTop: '2rem',
                borderTop: '1px solid #E5E7EB',
              }}>
              {stats.map((stat, index) => (
                <div key={index}>
                  <div style={{
                    fontSize: '1.75rem',
                    fontWeight: 700,
                    color: '#EF476F',
                    marginBottom: '0.25rem',
                  }}>
                    {stat.value}
                  </div>
                  <div style={{
                    fontSize: '0.85rem',
                    color: '#6B7280',
                  }}>
                    {stat.label}
                  </div>
                </div>
              ))}
            </div>

            {/* CTA */}
            <div>
              <a
                href={ctaUrl}
                style={{
                  display: 'inline-flex',
                  alignItems: 'center',
                  gap: '0.75rem',
                  background: 'linear-gradient(135deg, #EF476F 0%, #F89F7B 100%)',
                  color: 'white',
                  padding: 'var(--btn-padding)',
                  borderRadius: 'var(--radius-full)',
                  fontSize: '1rem',
                  fontWeight: 600,
                  textDecoration: 'none',
                  boxShadow: '0 8px 24px rgba(239, 71, 111, 0.25)',
                  transition: 'var(--transition-medium)',
                }}
              >
                {ctaText}
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none">
                  <path d="M7 17L17 7M17 7H7M17 7V17" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export const fields = (
  <ModuleFields>
    <TextField
      name="eyebrow"
      label="Eyebrow Text"
      default="Featured Resource"
    />
    <TextField
      name="title"
      label="Title"
      default="The Complete Guide to AI-Powered Mentorship"
    />
    <TextField
      name="description"
      label="Description"
      default="Learn how leading organizations are leveraging artificial intelligence to scale meaningful mentorship connections and drive measurable outcomes."
    />
    <TextField
      name="image_url"
      label="Image URL"
      default="https://via.placeholder.com/600x400"
    />
    <ChoiceField
      name="resource_type"
      label="Resource Type"
      choices={[
        ['guide', 'Guide'],
        ['article', 'Article'],
        ['case_study', 'Case Study'],
        ['ebook', 'eBook'],
        ['video', 'Video'],
        ['webinar', 'Webinar'],
      ]}
      default="guide"
    />
    <TextField
      name="stat1_value"
      label="Stat 1 Value"
      default="10K+"
    />
    <TextField
      name="stat1_label"
      label="Stat 1 Label"
      default="Downloads"
    />
    <TextField
      name="stat2_value"
      label="Stat 2 Value"
      default="45 min"
    />
    <TextField
      name="stat2_label"
      label="Stat 2 Label"
      default="Read Time"
    />
    <TextField
      name="stat3_value"
      label="Stat 3 Value"
      default="8 Chapters"
    />
    <TextField
      name="stat3_label"
      label="Stat 3 Label"
      default="Content"
    />
    <TextField
      name="cta_text"
      label="CTA Button Text"
      default="Download Guide"
    />
    <TextField
      name="cta_url"
      label="CTA Button URL"
      default="#"
    />
  </ModuleFields>
);

export const meta = {
  label: 'Featured Resource',
};
