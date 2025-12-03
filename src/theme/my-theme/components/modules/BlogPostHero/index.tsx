import {
  ModuleFields,
  TextField,
  ImageField,
  ChoiceField,
  DateField,
} from '@hubspot/cms-components/fields';

export function Component({ fieldValues }: any) {
  const title = fieldValues.title || 'Blog Post Title';
  const subtitle = fieldValues.subtitle || '';
  const category = fieldValues.category || 'Article';
  const author = fieldValues.author || 'Author Name';
  const authorImage = fieldValues.author_image?.src || '';
  const publishDate = fieldValues.publish_date || new Date().toISOString();
  const readTime = fieldValues.read_time || '5 min read';
  const featuredImage = fieldValues.featured_image?.src || '';

  const categoryColors: Record<string, { bg: string; text: string }> = {
    article: { bg: 'var(--bg-light-coral)', text: 'var(--text-coral)' },
    guide: { bg: 'var(--bg-light-teal)', text: 'var(--text-teal)' },
    case_study: { bg: 'rgba(17, 138, 178, 0.1)', text: 'var(--text-blue)' }, // TODO: Consider creating --bg-light-blue token
    news: { bg: 'rgba(255, 209, 102, 0.1)', text: 'var(--secondary-yellow)' }, // Yellow bg kept as-is
    tutorial: { bg: 'var(--bg-light-coral)', text: 'var(--text-coral)' },
    insights: { bg: 'rgba(17, 138, 178, 0.1)', text: 'var(--text-blue)' }, // TODO: Consider creating --bg-light-blue token
  };

  const categoryLabels: Record<string, string> = {
    article: 'Article',
    guide: 'Guide',
    case_study: 'Case Study',
    news: 'News',
    tutorial: 'Tutorial',
    insights: 'Insights',
  };

  const colors = categoryColors[fieldValues.category_type] || categoryColors.article;
  const categoryLabel = categoryLabels[fieldValues.category_type] || category;

  const formatDate = (dateStr: string) => {
    const date = new Date(dateStr);
    return date.toLocaleDateString('en-US', {
      year: 'numeric',
      month: 'long',
      day: 'numeric',
    });
  };

  return (
    <>
      <style dangerouslySetInnerHTML={{__html: `
        @media (max-width: 768px) {
          .blog-hero-content {
            padding: 60px 20px 40px !important;
          }
          .blog-hero-meta {
            flex-direction: column !important;
            align-items: flex-start !important;
            gap: 1rem !important;
          }
        }
      `}} />

      <section style={{
        background: 'var(--gradient-hero)',
        position: 'relative',
      }}>
        <div
          className="blog-hero-content"
          style={{
            maxWidth: '900px',
            margin: '0 auto',
            padding: '100px 20px 60px',
            textAlign: 'center',
          }}
        >
          {/* Category Badge */}
          <div style={{
            display: 'inline-block',
            padding: '0.5rem 1.25rem',
            background: colors.bg,
            color: colors.text,
            borderRadius: 'var(--radius-full)',
            fontSize: 'var(--font-size-small)',
            fontWeight: 600,
            textTransform: 'uppercase',
            letterSpacing: '0.1em',
            marginBottom: 'var(--spacing-lg)',
          }}>
            {categoryLabel}
          </div>

          {/* Title */}
          <h1 style={{
            fontSize: 'clamp(2rem, 5vw, 3.5rem)',
            fontWeight: 500,
            lineHeight: 1.15,
            marginBottom: 'var(--spacing-lg)',
            color: 'var(--text-primary)',
            fontFamily: 'var(--font-headline)',
            letterSpacing: '-0.02em',
          }}>
            {title}
          </h1>

          {/* Subtitle */}
          {subtitle && (
            <p style={{
              fontSize: 'var(--font-size-h4)',
              lineHeight: 1.6,
              color: 'var(--text-muted)',
              marginBottom: 'var(--spacing-xl)',
              maxWidth: '700px',
              margin: '0 auto var(--spacing-xl)',
            }}>
              {subtitle}
            </p>
          )}

          {/* Meta Info */}
          <div
            className="blog-hero-meta"
            style={{
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              gap: 'var(--spacing-xl)',
              flexWrap: 'wrap',
            }}
          >
            {/* Author */}
            <div style={{
              display: 'flex',
              alignItems: 'center',
              gap: 'var(--spacing-sm)',
            }}>
              {authorImage ? (
                <img
                  src={authorImage}
                  alt={author}
                  style={{
                    width: '48px',
                    height: '48px',
                    borderRadius: '50%',
                    objectFit: 'cover',
                    border: '2px solid rgba(239, 71, 111, 0.2)',
                  }}
                />
              ) : (
                <div style={{
                  width: '48px',
                  height: '48px',
                  borderRadius: '50%',
                  background: 'var(--gradient-coral)',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  color: 'white',
                  fontSize: 'var(--font-size-h4)',
                  fontWeight: 600,
                }}>
                  {author.charAt(0).toUpperCase()}
                </div>
              )}
              <div style={{ textAlign: 'left' }}>
                <div style={{
                  fontSize: 'var(--font-size-body)',
                  fontWeight: 600,
                  color: 'var(--text-primary)',
                }}>
                  {author}
                </div>
                <div style={{
                  fontSize: 'var(--font-size-small)',
                  color: 'var(--text-muted)',
                }}>
                  {formatDate(publishDate)}
                </div>
              </div>
            </div>

            {/* Divider */}
            <div style={{
              width: '1px',
              height: '40px',
              background: 'var(--border-light)',
            }} />

            {/* Read Time */}
            <div style={{
              display: 'flex',
              alignItems: 'center',
              gap: 'var(--spacing-xs)',
              color: 'var(--text-muted)',
            }}>
              <svg width="20" height="20" viewBox="0 0 24 24" fill="none">
                <circle cx="12" cy="12" r="9" stroke="currentColor" strokeWidth="2"/>
                <path d="M12 7V12L15 15" stroke="currentColor" strokeWidth="2" strokeLinecap="round"/>
              </svg>
              <span style={{ fontSize: 'var(--font-size-body)' }}>{readTime}</span>
            </div>
          </div>
        </div>

        {/* Featured Image */}
        {featuredImage && (
          <div style={{
            maxWidth: '1200px',
            margin: '0 auto',
            padding: '0 20px 60px',
          }}>
            <div style={{
              borderRadius: 'var(--radius-xl)',
              overflow: 'hidden',
              boxShadow: '0 16px 48px rgba(0, 0, 0, 0.12)',
            }}>
              <img
                src={featuredImage}
                alt={title}
                style={{
                  width: '100%',
                  height: 'auto',
                  display: 'block',
                  maxHeight: '600px',
                  objectFit: 'cover',
                }}
              />
            </div>
          </div>
        )}
      </section>
    </>
  );
}

export const fields = (
  <ModuleFields>
    <TextField
      name="title"
      label="Post Title"
      default="How AI is Transforming Mentorship Programs"
    />
    <TextField
      name="subtitle"
      label="Subtitle (Optional)"
      default="Discover how artificial intelligence is revolutionizing the way organizations connect mentors and mentees for meaningful relationships."
    />
    <ChoiceField
      name="category_type"
      label="Category"
      choices={[
        ['article', 'Article'],
        ['guide', 'Guide'],
        ['case_study', 'Case Study'],
        ['news', 'News'],
        ['tutorial', 'Tutorial'],
        ['insights', 'Insights'],
      ]}
      default="article"
    />
    <TextField
      name="author"
      label="Author Name"
      default="Sarah Johnson"
    />
    <ImageField
      name="author_image"
      label="Author Image"
    />
    <TextField
      name="publish_date"
      label="Publish Date"
      default="2024-01-15"
    />
    <TextField
      name="read_time"
      label="Read Time"
      default="8 min read"
    />
    <ImageField
      name="featured_image"
      label="Featured Image"
    />
  </ModuleFields>
);

export const meta = {
  label: 'Blog Post Hero',
};
