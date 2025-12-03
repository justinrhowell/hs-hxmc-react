import {
  ModuleFields,
  TextField,
  RepeatedFieldGroup,
  ChoiceField,
  ImageField,
} from '@hubspot/cms-components/fields';

export function Component({ fieldValues }: any) {
  const heading = fieldValues.heading || 'Related Articles';
  const posts = fieldValues.posts || [
    {
      title: 'Building a Culture of Mentorship',
      description: 'Learn how to foster a mentoring culture in your organization',
      category: 'guide',
      read_time: '6 min read',
      link_url: '#',
      image_url: '',
    },
    {
      title: 'The ROI of Mentorship Programs',
      description: 'Discover how to measure the impact of your mentorship initiatives',
      category: 'case_study',
      read_time: '8 min read',
      link_url: '#',
      image_url: '',
    },
    {
      title: '5 Tips for Effective Mentoring',
      description: 'Practical advice for mentors and mentees to get the most out of their relationship',
      category: 'article',
      read_time: '4 min read',
      link_url: '#',
      image_url: '',
    },
  ];

  const categoryColors: Record<string, { bg: string; text: string }> = {
    article: { bg: 'rgba(239, 71, 111, 0.1)', text: '#EF476F' },
    guide: { bg: 'rgba(6, 214, 160, 0.1)', text: '#06D6A0' },
    case_study: { bg: 'rgba(17, 138, 178, 0.1)', text: '#118AB2' },
    news: { bg: 'rgba(255, 209, 102, 0.1)', text: '#FFD166' },
    tutorial: { bg: 'rgba(239, 71, 111, 0.1)', text: '#EF476F' },
    insights: { bg: 'rgba(17, 138, 178, 0.1)', text: '#118AB2' },
  };

  const categoryLabels: Record<string, string> = {
    article: 'Article',
    guide: 'Guide',
    case_study: 'Case Study',
    news: 'News',
    tutorial: 'Tutorial',
    insights: 'Insights',
  };

  return (
    <>
      <style dangerouslySetInnerHTML={{__html: `
        .related-post-card {
          transition: all 0.3s ease;
        }
        .related-post-card:hover {
          transform: translateY(-6px);
          box-shadow: 0 12px 32px rgba(239, 71, 111, 0.12) !important;
        }
        .related-post-card:hover .related-post-image img {
          transform: scale(1.05);
        }
        @media (max-width: 768px) {
          .related-posts-grid {
            grid-template-columns: 1fr !important;
          }
        }
      `}} />

      <section style={{
        padding: 'var(--spacing-3xl) var(--spacing-md)',
        background: 'linear-gradient(180deg, #FFFBF8 0%, #FFFFFF 100%)',
      }}>
        <div style={{
          maxWidth: '1200px',
          margin: '0 auto',
        }}>
          {/* Header */}
          <div style={{
            textAlign: 'center',
            marginBottom: 'var(--spacing-2xl)',
          }}>
            <h2 style={{
              fontSize: 'clamp(1.75rem, 3vw, 2.5rem)',
              fontWeight: 500,
              color: 'var(--text-primary)',
              fontFamily: 'var(--font-headline)',
            }}>
              {heading}
            </h2>
          </div>

          {/* Posts Grid */}
          <div
            className="related-posts-grid"
            style={{
              display: 'grid',
              gridTemplateColumns: 'repeat(3, 1fr)',
              gap: 'var(--spacing-xl)',
            }}
          >
            {posts.map((post: any, index: number) => {
              const colors = categoryColors[post.category] || categoryColors.article;
              const label = categoryLabels[post.category] || 'Article';

              return (
                <a
                  key={index}
                  href={post.link_url || '#'}
                  className="related-post-card"
                  style={{
                    background: 'white',
                    borderRadius: 'var(--radius-lg)',
                    overflow: 'hidden',
                    boxShadow: '0 4px 16px rgba(0, 0, 0, 0.06)',
                    textDecoration: 'none',
                    display: 'flex',
                    flexDirection: 'column',
                  }}
                >
                  {/* Image */}
                  <div
                    className="related-post-image"
                    style={{
                      width: '100%',
                      height: '180px',
                      overflow: 'hidden',
                      background: post.image_url ? 'none' : 'linear-gradient(135deg, rgba(239, 71, 111, 0.1) 0%, rgba(248, 159, 123, 0.1) 100%)',
                      position: 'relative',
                    }}
                  >
                    {post.image_url ? (
                      <img
                        src={post.image_url}
                        alt={post.title}
                        loading="lazy"
                        style={{
                          width: '100%',
                          height: '100%',
                          objectFit: 'cover',
                          transition: 'transform 0.3s ease',
                        }}
                      />
                    ) : (
                      <div style={{
                        position: 'absolute',
                        top: '50%',
                        left: '50%',
                        transform: 'translate(-50%, -50%)',
                        color: 'var(--color-primary)',
                        opacity: 0.3,
                      }}>
                        <svg width="48" height="48" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
                          <rect x="3" y="3" width="18" height="18" rx="2"/>
                          <circle cx="8.5" cy="8.5" r="1.5"/>
                          <path d="M21 15l-5-5L5 21"/>
                        </svg>
                      </div>
                    )}
                    {/* Category Badge */}
                    <div style={{
                      position: 'absolute',
                      top: 'var(--spacing-sm)',
                      left: 'var(--spacing-sm)',
                      background: colors.bg,
                      color: colors.text,
                      padding: '0.35rem 0.75rem',
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
                      fontSize: 'var(--font-size-lg)',
                      fontWeight: 500,
                      color: 'var(--text-primary)',
                      marginBottom: 'var(--spacing-xs)',
                      fontFamily: 'var(--font-headline)',
                      lineHeight: 1.3,
                    }}>
                      {post.title}
                    </h3>
                    <p style={{
                      fontSize: 'var(--font-size-base)',
                      color: 'var(--text-secondary)',
                      lineHeight: 1.6,
                      marginBottom: 'var(--spacing-sm)',
                      flex: 1,
                    }}>
                      {post.description}
                    </p>
                    <div style={{
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'space-between',
                      paddingTop: 'var(--spacing-sm)',
                      borderTop: '1px solid var(--border-light)',
                    }}>
                      <span style={{
                        fontSize: 'var(--font-size-sm)',
                        color: 'var(--text-muted)',
                      }}>
                        {post.read_time}
                      </span>
                      <span style={{
                        fontSize: 'var(--font-size-sm)',
                        color: 'var(--color-primary)',
                        fontWeight: 600,
                        display: 'flex',
                        alignItems: 'center',
                        gap: 'var(--spacing-2xs)',
                      }}>
                        Read more
                        <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                          <path d="M5 12h14M12 5l7 7-7 7"/>
                        </svg>
                      </span>
                    </div>
                  </div>
                </a>
              );
            })}
          </div>
        </div>
      </section>
    </>
  );
}

export const fields = (
  <ModuleFields>
    <TextField
      name="heading"
      label="Section Heading"
      default="Related Articles"
    />
    <RepeatedFieldGroup
      name="posts"
      label="Related Posts"
      occurrence={{
        min: 1,
        max: 6,
        default: 3,
      }}
    >
      <TextField
        name="title"
        label="Post Title"
        default="Post Title"
      />
      <TextField
        name="description"
        label="Short Description"
        default="Brief description of the post"
      />
      <TextField
        name="image_url"
        label="Image URL"
        default=""
      />
      <ChoiceField
        name="category"
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
        name="read_time"
        label="Read Time"
        default="5 min read"
      />
      <TextField
        name="link_url"
        label="Post URL"
        default="#"
      />
    </RepeatedFieldGroup>
  </ModuleFields>
);

export const meta = {
  label: 'Related Posts',
};
