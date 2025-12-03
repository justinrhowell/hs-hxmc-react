import {
  ModuleFields,
  TextField,
  NumberField,
} from '@hubspot/cms-components/fields';
import { ScrollAnimationScript } from '../../shared/ScrollAnimationScript';

// HubL template to fetch blog posts
export const hublDataTemplate = `
{% set blog_posts = blog_recent_posts('default', module.post_limit || 9) %}
{% set posts_array = [] %}
{% for post in blog_posts %}
  {% set post_data = {
    "id": post.id,
    "title": post.name,
    "description": post.post_summary|truncate(150),
    "url": post.absolute_url,
    "featured_image": post.featured_image,
    "publish_date": post.publish_date|datetimeformat('%B %d, %Y'),
    "author": post.blog_author.display_name,
    "topic": post.topic_list[0].name if post.topic_list else "Article"
  } %}
  {% do posts_array.append(post_data) %}
{% endfor %}
{% set hublData = { "posts": posts_array } %}
`;

export function Component({ fieldValues, hublData }: any) {
  const heading = fieldValues.heading || 'Latest Resources';
  const subtitle = fieldValues.subtitle || 'Stay up to date with our latest insights and research';

  // Parse blog posts from HubL data or use fallback
  let posts: any[] = [];
  try {
    if (hublData?.posts && Array.isArray(hublData.posts)) {
      posts = hublData.posts;
    } else if (hublData && typeof hublData === 'string') {
      const parsed = JSON.parse(hublData);
      posts = parsed.posts || parsed;
    } else if (Array.isArray(hublData)) {
      posts = hublData;
    }
  } catch (e) {
    console.error('Error parsing blog posts:', e);
  }

  // Fallback content if no posts available
  if (!posts || posts.length === 0) {
    posts = [
      {
        id: '1',
        title: 'The Future of AI-Powered Mentorship',
        description: 'Discover how artificial intelligence is revolutionizing the way organizations scale meaningful mentorship connections.',
        url: '#',
        featured_image: '',
        publish_date: 'December 1, 2024',
        author: 'Mentor Collective',
        topic: 'Article'
      },
      {
        id: '2',
        title: 'Case Study: Duke University',
        description: 'How Duke increased student retention by 15% with a comprehensive peer mentorship program.',
        url: '#',
        featured_image: '',
        publish_date: 'November 28, 2024',
        author: 'Mentor Collective',
        topic: 'Case Study'
      },
      {
        id: '3',
        title: 'Complete Guide to Scaling Mentorship',
        description: 'Best practices and strategies for building successful mentorship programs at scale.',
        url: '#',
        featured_image: '',
        publish_date: 'November 20, 2024',
        author: 'Mentor Collective',
        topic: 'Guide'
      }
    ];
  }

  // Type colors for badges
  const getTypeColor = (topic: string) => {
    const topicLower = topic?.toLowerCase() || 'article';
    if (topicLower.includes('case study')) return { bg: 'rgba(17, 138, 178, 0.1)', text: 'var(--text-blue)' };
    if (topicLower.includes('guide')) return { bg: 'var(--bg-light-teal)', text: 'var(--text-teal)' };
    if (topicLower.includes('webinar')) return { bg: 'rgba(17, 138, 178, 0.1)', text: 'var(--text-blue)' };
    if (topicLower.includes('ebook')) return { bg: 'rgba(255, 209, 102, 0.15)', text: '#B8860B' };
    return { bg: 'var(--bg-light-coral)', text: 'var(--text-coral)' };
  };

  return (
    <>
      <ScrollAnimationScript />
      <style>{`
        .resource-grid-card {
          transition: all 0.3s ease;
        }
        .resource-grid-card:hover {
          transform: translateY(-4px);
          box-shadow: var(--shadow-lg) !important;
        }
        .resource-grid-card:hover img {
          transform: scale(1.05);
        }
        .resource-grid-card:hover .resource-link {
          gap: var(--spacing-sm) !important;
        }
        @media (max-width: 768px) {
          .resource-grid {
            grid-template-columns: 1fr !important;
          }
        }
      `}</style>

      <section style={{
        padding: 'var(--spacing-2xl) var(--spacing-lg)',
        background: 'var(--bg-white)',
      }}>
        <div style={{ maxWidth: '1200px', margin: '0 auto' }}>
          {/* Header */}
          {heading && (
            <div className="scroll-animate" style={{ textAlign: 'center', marginBottom: 'var(--spacing-2xl)' }}>
              <h2 style={{
                fontSize: 'var(--font-size-h2)',
                fontWeight: 500,
                marginBottom: 'var(--spacing-sm)',
                color: 'var(--text-primary)',
                fontFamily: 'var(--font-headline)',
              }}>
                {heading}
              </h2>
              {subtitle && (
                <p style={{
                  fontSize: 'var(--font-size-body)',
                  color: 'var(--text-secondary)',
                  maxWidth: '600px',
                  margin: '0 auto',
                }}>
                  {subtitle}
                </p>
              )}
            </div>
          )}

          {/* Grid */}
          <div
            className="resource-grid"
            style={{
              display: 'grid',
              gridTemplateColumns: 'repeat(3, 1fr)',
              gap: 'var(--spacing-lg)',
            }}
          >
            {posts.map((post: any, index: number) => {
              const colors = getTypeColor(post.topic);
              return (
                <article
                  key={post.id || index}
                  className="scroll-animate resource-grid-card"
                  data-delay={index * 100}
                  style={{
                    background: 'var(--bg-white)',
                    borderRadius: 'var(--radius-xl)',
                    overflow: 'hidden',
                    boxShadow: 'var(--shadow-md)',
                    display: 'flex',
                    flexDirection: 'column',
                    border: '1px solid var(--border-light)',
                  }}
                >
                  {/* Image */}
                  <div style={{
                    width: '100%',
                    height: '200px',
                    overflow: 'hidden',
                    position: 'relative',
                    background: 'var(--bg-cream)',
                  }}>
                    {post.featured_image ? (
                      <img
                        src={post.featured_image}
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
                        width: '100%',
                        height: '100%',
                        background: 'linear-gradient(135deg, var(--bg-cream) 0%, var(--bg-light) 100%)',
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'center',
                      }}>
                        <svg width="48" height="48" viewBox="0 0 24 24" fill="none" style={{ opacity: 0.3 }}>
                          <rect x="3" y="3" width="18" height="18" rx="2" stroke="var(--text-muted)" strokeWidth="2"/>
                          <circle cx="8.5" cy="8.5" r="1.5" fill="var(--text-muted)"/>
                          <path d="M3 16L8 11L13 16" stroke="var(--text-muted)" strokeWidth="2" strokeLinecap="round"/>
                          <path d="M14 14L17 11L21 15" stroke="var(--text-muted)" strokeWidth="2" strokeLinecap="round"/>
                        </svg>
                      </div>
                    )}
                    {/* Topic Badge */}
                    <div style={{
                      position: 'absolute',
                      top: 'var(--spacing-sm)',
                      left: 'var(--spacing-sm)',
                      background: colors.bg,
                      color: colors.text,
                      padding: '0.375rem 0.75rem',
                      borderRadius: 'var(--radius-full)',
                      fontSize: 'var(--font-size-xs)',
                      fontWeight: 600,
                      textTransform: 'uppercase',
                      letterSpacing: '0.05em',
                    }}>
                      {post.topic || 'Article'}
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
                      fontSize: 'var(--font-size-h4)',
                      fontWeight: 500,
                      color: 'var(--text-primary)',
                      marginBottom: 'var(--spacing-sm)',
                      fontFamily: 'var(--font-headline)',
                      lineHeight: 1.3,
                    }}>
                      {post.title}
                    </h3>

                    <p style={{
                      fontSize: 'var(--font-size-small)',
                      color: 'var(--text-secondary)',
                      lineHeight: 'var(--line-height-normal)',
                      marginBottom: 'var(--spacing-md)',
                      flex: 1,
                    }}>
                      {post.description}
                    </p>

                    {/* Footer */}
                    <div style={{
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'space-between',
                      paddingTop: 'var(--spacing-sm)',
                      borderTop: '1px solid var(--border-light)',
                    }}>
                      <span style={{
                        fontSize: 'var(--font-size-xs)',
                        color: 'var(--text-muted)',
                      }}>
                        {post.publish_date}
                      </span>

                      <a
                        href={post.url}
                        className="resource-link"
                        style={{
                          display: 'inline-flex',
                          alignItems: 'center',
                          gap: 'var(--spacing-xs)',
                          color: 'var(--text-coral)',
                          textDecoration: 'none',
                          fontSize: 'var(--font-size-small)',
                          fontWeight: 600,
                          transition: 'gap 0.3s ease',
                        }}
                      >
                        Read More <span>→</span>
                      </a>
                    </div>
                  </div>
                </article>
              );
            })}
          </div>

          {/* Load More */}
          <div className="scroll-animate" style={{ textAlign: 'center', marginTop: 'var(--spacing-2xl)' }}>
            <button
              type="button"
              className="btn-outlined"
              style={{
                padding: 'var(--btn-padding-sm)',
              }}
            >
              Load More Resources
            </button>
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
      default="Latest Resources"
    />
    <TextField
      name="subtitle"
      label="Subtitle"
      default="Stay up to date with our latest insights and research"
    />
    <NumberField
      name="post_limit"
      label="Number of Posts"
      default={9}
      min={3}
      max={24}
    />
  </ModuleFields>
);

export const meta = {
  label: 'Resource Grid',
};
