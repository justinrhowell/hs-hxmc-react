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
    article: { bg: 'rgba(239, 71, 111, 0.1)', text: '#EF476F' },
    guide: { bg: 'rgba(6, 214, 160, 0.1)', text: '#06D6A0' },
    case_study: { bg: 'rgba(17, 138, 178, 0.1)', text: '#118AB2' },
    ebook: { bg: 'rgba(255, 209, 102, 0.1)', text: '#FFD166' },
    video: { bg: 'rgba(239, 71, 111, 0.1)', text: '#EF476F' },
    webinar: { bg: 'rgba(17, 138, 178, 0.1)', text: '#118AB2' }
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
        borderRadius: '16px',
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
          top: '1rem',
          left: '1rem',
          background: colors.bg,
          color: colors.text,
          padding: '0.375rem 0.875rem',
          borderRadius: '20px',
          fontSize: '0.75rem',
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
        padding: '1.5rem',
        display: 'flex',
        flexDirection: 'column',
        flex: 1,
      }}>
        <h3 style={{
          fontSize: '1.25rem',
          fontWeight: 600,
          color: '#1a1a1a',
          marginBottom: '0.75rem',
          fontFamily: 'var(--font-headline)',
          lineHeight: 1.3,
        }}>
          {title}
        </h3>

        <p style={{
          fontSize: '0.95rem',
          color: '#6B7280',
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
          borderTop: '1px solid #E5E7EB',
        }}>
          <span style={{
            fontSize: '0.85rem',
            color: '#9CA3AF',
          }}>
            {readTime}
          </span>

          <a
            href={linkUrl}
            style={{
              display: 'inline-flex',
              alignItems: 'center',
              gap: '0.5rem',
              color: '#EF476F',
              textDecoration: 'none',
              fontSize: '0.9rem',
              fontWeight: 600,
              transition: 'gap 0.3s ease',
            }}
          >
            {linkText} <span style={{ fontSize: '1.1rem' }}>→</span>
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
