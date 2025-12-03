import {
  ModuleFields,
  TextField,
  ChoiceField,
  ImageField,
} from '@hubspot/cms-components/fields';

export function Component({ fieldValues }: any) {
  const resourceType = fieldValues.resource_type || 'article';
  const title = fieldValues.title || 'Resource Title';
  const description = fieldValues.description || 'Brief description of this resource';
  const image = fieldValues.image?.src || 'https://via.placeholder.com/400x250';
  const linkUrl = fieldValues.link_url || '#';
  const linkText = fieldValues.link_text || 'Read More';
  const readTime = fieldValues.read_time || '5 min read';

  const typeColors: Record<string, { bg: string; text: string }> = {
    article: { bg: 'var(--bg-light-coral)', text: 'var(--text-coral)' },
    guide: { bg: 'var(--bg-light-teal)', text: 'var(--text-teal)' },
    case_study: { bg: 'rgba(17, 138, 178, 0.1)', text: 'var(--text-blue)' }, // Keep blue rgba background as-is
    ebook: { bg: 'rgba(255, 209, 102, 0.1)', text: 'var(--secondary-yellow)' }, // Keep yellow rgba background as-is
    video: { bg: 'var(--bg-light-coral)', text: 'var(--text-coral)' },
    webinar: { bg: 'rgba(17, 138, 178, 0.1)', text: 'var(--text-blue)' } // Keep blue rgba background as-is
  };

  const typeLabels: Record<string, string> = {
    article: 'Article',
    guide: 'Guide',
    case_study: 'Case Study',
    ebook: 'eBook',
    video: 'Video',
    webinar: 'Webinar'
  };

  const colors = typeColors[resourceType] || typeColors.article;
  const label = typeLabels[resourceType] || 'Resource';

  return (
    <div
      className="resource-card"
      style={{
        background: 'white',
        borderRadius: 'var(--radius-lg)',
        overflow: 'hidden',
        boxShadow: '0 4px 16px rgba(0, 0, 0, 0.08)',
        transition: 'all 0.3s ease',
        cursor: 'pointer',
        height: '100%',
        display: 'flex',
        flexDirection: 'column',
      }}
    >
      {/* Image */}
      <div style={{
        width: '100%',
        height: '200px',
        overflow: 'hidden',
        position: 'relative',
      }}>
        <img
          src={image}
          alt={title}
          loading="lazy"
          style={{
            width: '100%',
            height: '100%',
            objectFit: 'cover',
            transition: 'transform 0.3s ease',
          }}
        />
        {/* Type Badge */}
        <div style={{
          position: 'absolute',
          top: 'var(--spacing-md)',
          left: 'var(--spacing-md)',
          background: colors.bg,
          color: colors.text,
          padding: '0.375rem 0.875rem',
          borderRadius: 'var(--radius-full)',
          fontSize: 'var(--font-size-xs)',
          fontWeight: 600,
          textTransform: 'uppercase',
          letterSpacing: '0.05em',
          backdropFilter: 'blur(10px)',
        }}>
          {label}
        </div>
      </div>

      {/* Content */}
      <div style={{
        padding: 'var(--spacing-lg)',
        display: 'flex',
        flexDirection: 'column',
        flex: 1,
      }}>
        <h3 style={{
          fontSize: 'var(--font-size-h3)',
          fontWeight: 500,
          color: 'var(--text-primary)',
          marginBottom: '0.75rem',
          fontFamily: 'var(--font-headline)',
          lineHeight: 1.3,
        }}>
          {title}
        </h3>

        <p style={{
          fontSize: 'var(--font-size-base)',
          color: 'var(--text-muted)',
          lineHeight: 1.6,
          marginBottom: '1.25rem',
          flex: 1,
        }}>
          {description}
        </p>

        {/* Footer */}
        <div style={{
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'space-between',
          paddingTop: '1rem',
          borderTop: '1px solid var(--border-light)',
        }}>
          <span style={{
            fontSize: 'var(--font-size-small)',
            color: 'var(--text-muted)',
          }}>
            {readTime}
          </span>

          <a
            href={linkUrl}
            style={{
              display: 'inline-flex',
              alignItems: 'center',
              gap: '0.5rem',
              color: 'var(--text-coral)',
              textDecoration: 'none',
              fontSize: 'var(--font-size-base)',
              fontWeight: 600,
              transition: 'gap 0.3s ease',
            }}
          >
            {linkText} <span style={{ fontSize: 'var(--font-size-body-lg)' }}>→</span>
          </a>
        </div>
      </div>
    </div>
  );
}

export const fields = (
  <ModuleFields>
    <TextField
      name="title"
      label="Resource Title"
      default="How AI is Transforming Mentorship"
    />
    <TextField
      name="description"
      label="Description"
      default="Discover how artificial intelligence is revolutionizing the way we connect mentors and mentees."
    />
    <ImageField
      name="image"
      label="Resource Image"
    />
    <ChoiceField
      name="resource_type"
      label="Resource Type"
      choices={[
        ['article', 'Article'],
        ['guide', 'Guide'],
        ['case_study', 'Case Study'],
        ['ebook', 'eBook'],
        ['video', 'Video'],
        ['webinar', 'Webinar'],
      ]}
      default="article"
    />
    <TextField
      name="read_time"
      label="Read Time"
      default="5 min read"
    />
    <TextField
      name="link_text"
      label="Link Text"
      default="Read More"
    />
    <TextField
      name="link_url"
      label="Link URL"
      default="#"
    />
  </ModuleFields>
);

export const meta = {
  label: 'Resource Card',
};
