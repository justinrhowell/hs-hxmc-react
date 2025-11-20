import {
  ModuleFields,
  TextField,
  RepeatedFieldGroup,
  ChoiceField,
  ImageField,
} from '@hubspot/cms-components/fields';

export function Component({ fieldValues }: any) {
  const heading = fieldValues.heading || 'Browse Resources';
  const subtitle = fieldValues.subtitle || 'Explore our collection of guides, articles, and case studies';

  const resources = fieldValues.resources || [
    {
      title: 'The Future of Mentorship',
      description: 'How AI is transforming the way we connect and learn',
      resource_type: 'article',
      read_time: '5 min read',
      link_url: '#',
      image_url: 'https://via.placeholder.com/400x250'
    },
    {
      title: 'Complete Guide to Scaling Mentorship',
      description: 'Best practices for building successful mentorship programs',
      resource_type: 'guide',
      read_time: '12 min read',
      link_url: '#',
      image_url: 'https://via.placeholder.com/400x250'
    },
    {
      title: 'Duke University Case Study',
      description: 'How Duke increased retention by 15% with mentorship',
      resource_type: 'case_study',
      read_time: '8 min read',
      link_url: '#',
      image_url: 'https://via.placeholder.com/400x250'
    }
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
    article: 'Article',
    guide: 'Guide',
    case_study: 'Case Study',
    ebook: 'eBook',
    video: 'Video',
    webinar: 'Webinar'
  };

  return (
    <>
      <script dangerouslySetInnerHTML={{__html: `
        (function() {
          function initResourceGrid() {
            const filterBtns = document.querySelectorAll('.filter-btn');
            const resourceCards = document.querySelectorAll('.resource-item');

            if (!filterBtns.length || !resourceCards.length) return;

            filterBtns.forEach(btn => {
              btn.addEventListener('click', function() {
                const filter = this.getAttribute('data-filter');

                // Update active button
                filterBtns.forEach(b => {
                  b.style.background = 'transparent';
                  b.style.color = '#6B7280';
                });
                this.style.background = 'linear-gradient(135deg, #EF476F 0%, #F89F7B 100%)';
                this.style.color = 'white';

                // Filter resources
                resourceCards.forEach(card => {
                  const cardType = card.getAttribute('data-type');
                  if (filter === 'all' || cardType === filter) {
                    card.style.display = 'block';
                    card.style.animation = 'fadeInUp 0.5s ease forwards';
                  } else {
                    card.style.display = 'none';
                  }
                });
              });
            });
          }

          if (document.readyState === 'loading') {
            document.addEventListener('DOMContentLoaded', initResourceGrid);
          } else {
            setTimeout(initResourceGrid, 100);
          }
        })();
      `}} />

      <style dangerouslySetInnerHTML={{__html: `
        @keyframes fadeInUp {
          from {
            opacity: 0;
            transform: translateY(20px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }

        .resource-card:hover {
          transform: translateY(-8px);
          box-shadow: 0 12px 32px rgba(239, 71, 111, 0.15) !important;
        }

        .resource-card:hover img {
          transform: scale(1.05);
        }

        .resource-card:hover a {
          gap: 0.75rem !important;
        }
      `}} />

      <section style={{
        padding: '80px 20px',
        background: 'linear-gradient(180deg, #FFFFFF 0%, #FFFBF8 100%)',
      }}>
        <div style={{ maxWidth: '1200px', margin: '0 auto' }}>
          {/* Header */}
          <div style={{ textAlign: 'center', marginBottom: '3rem' }}>
            <h2 style={{
              fontSize: 'clamp(2rem, 4vw, 3rem)',
              fontWeight: 500,
              marginBottom: '1rem',
              color: '#1a1a1a',
              fontFamily: 'var(--font-headline)',
            }}>
              {heading}
            </h2>
            {subtitle && (
              <p style={{
                fontSize: '1.15rem',
                color: '#6B7280',
                maxWidth: '700px',
                margin: '0 auto',
              }}>
                {subtitle}
              </p>
            )}
          </div>

          {/* Filter Tabs */}
          <div style={{
            display: 'flex',
            justifyContent: 'center',
            gap: '1rem',
            marginBottom: '3rem',
            flexWrap: 'wrap',
          }}>
            <button
              className="filter-btn"
              data-filter="all"
              style={{
                padding: '0.75rem 1.5rem',
                borderRadius: '50px',
                border: 'none',
                background: 'linear-gradient(135deg, #EF476F 0%, #F89F7B 100%)',
                color: 'white',
                fontSize: '0.95rem',
                fontWeight: 600,
                cursor: 'pointer',
                transition: 'all 0.3s ease',
              }}
            >
              All Resources
            </button>
            <button
              className="filter-btn"
              data-filter="article"
              style={{
                padding: '0.75rem 1.5rem',
                borderRadius: '50px',
                border: '2px solid #E5E7EB',
                background: 'transparent',
                color: '#6B7280',
                fontSize: '0.95rem',
                fontWeight: 600,
                cursor: 'pointer',
                transition: 'all 0.3s ease',
              }}
            >
              Articles
            </button>
            <button
              className="filter-btn"
              data-filter="guide"
              style={{
                padding: '0.75rem 1.5rem',
                borderRadius: '50px',
                border: '2px solid #E5E7EB',
                background: 'transparent',
                color: '#6B7280',
                fontSize: '0.95rem',
                fontWeight: 600,
                cursor: 'pointer',
                transition: 'all 0.3s ease',
              }}
            >
              Guides
            </button>
            <button
              className="filter-btn"
              data-filter="case_study"
              style={{
                padding: '0.75rem 1.5rem',
                borderRadius: '50px',
                border: '2px solid #E5E7EB',
                background: 'transparent',
                color: '#6B7280',
                fontSize: '0.95rem',
                fontWeight: 600,
                cursor: 'pointer',
                transition: 'all 0.3s ease',
              }}
            >
              Case Studies
            </button>
            <button
              className="filter-btn"
              data-filter="ebook"
              style={{
                padding: '0.75rem 1.5rem',
                borderRadius: '50px',
                border: '2px solid #E5E7EB',
                background: 'transparent',
                color: '#6B7280',
                fontSize: '0.95rem',
                fontWeight: 600,
                cursor: 'pointer',
                transition: 'all 0.3s ease',
              }}
            >
              eBooks
            </button>
          </div>

          {/* Resource Grid */}
          <div style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fill, minmax(320px, 1fr))',
            gap: '2rem',
          }}>
            {resources.map((resource: any, index: number) => {
              const colors = typeColors[resource.resource_type] || typeColors.article;
              const label = typeLabels[resource.resource_type] || 'Resource';

              return (
                <div
                  key={index}
                  className="resource-item resource-card"
                  data-type={resource.resource_type}
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
                      src={resource.image_url}
                      alt={resource.title}
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
                      {resource.title}
                    </h3>

                    <p style={{
                      fontSize: '0.95rem',
                      color: '#6B7280',
                      lineHeight: 1.6,
                      marginBottom: '1.25rem',
                      flex: 1,
                    }}>
                      {resource.description}
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
                        {resource.read_time}
                      </span>

                      <a
                        href={resource.link_url}
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
                        Read More <span style={{ fontSize: '1.1rem' }}>→</span>
                      </a>
                    </div>
                  </div>
                </div>
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
      default="Browse Resources"
    />
    <TextField
      name="subtitle"
      label="Subtitle"
      default="Explore our collection of guides, articles, and case studies"
    />
    <RepeatedFieldGroup
      name="resources"
      label="Resources"
      occurrence={{
        min: 1,
        max: 24,
        default: 6,
      }}
    >
      <TextField
        name="title"
        label="Title"
        default="Resource Title"
      />
      <TextField
        name="description"
        label="Description"
        default="Brief description of this resource"
      />
      <TextField
        name="image_url"
        label="Image URL"
        default="https://via.placeholder.com/400x250"
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
        name="link_url"
        label="Link URL"
        default="#"
      />
    </RepeatedFieldGroup>
  </ModuleFields>
);

export const meta = {
  label: 'Resource Grid',
};
