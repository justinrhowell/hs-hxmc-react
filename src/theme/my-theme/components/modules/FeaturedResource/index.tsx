import {
  ModuleFields,
  TextField,
  BooleanField,
  BlogField,
} from '@hubspot/cms-components/fields';
import { ScrollAnimationScript } from '../../shared/ScrollAnimationScript';
import blueArrows from '../../../assets/blue-arrows.svg';
import yellowStar from '../../../assets/yellow-star.svg';

// HubL template to fetch featured/latest blog post
export const hublDataTemplate = `
{% set selected_blog = module.blog_select %}
{% if selected_blog %}
  {% set featured_post = blog_recent_posts(selected_blog, 1)[0] %}
{% else %}
  {% set featured_post = null %}
{% endif %}
{% if featured_post %}
  {% set hublData = {
    "id": featured_post.id,
    "title": featured_post.name,
    "description": featured_post.post_summary|striptags|truncate(200),
    "url": featured_post.absolute_url,
    "featured_image": featured_post.featured_image,
    "publish_date": featured_post.publish_date|datetimeformat('%B %d, %Y'),
    "author": featured_post.blog_author.display_name if featured_post.blog_author else "Mentor Collective",
    "topic": featured_post.topic_list[0].name if featured_post.topic_list else "Article"
  } %}
{% endif %}
`;

export function Component({ fieldValues, hublData }: any) {
  const useManualContent = fieldValues.use_manual_content || false;

  // Manual content fields
  const eyebrow = fieldValues.eyebrow || 'Featured Resource';
  const title = fieldValues.title || 'The Complete Guide to AI-Powered Mentorship';
  const description = fieldValues.description || 'Learn how leading organizations are leveraging artificial intelligence to scale meaningful mentorship connections and drive measurable outcomes.';
  const imageUrl = fieldValues.image_url || '';
  const ctaText = fieldValues.cta_text || 'Read Article';
  const ctaUrl = fieldValues.cta_url || '#';

  // Try to parse HubL data for dynamic content
  let dynamicPost: any = null;
  if (!useManualContent && hublData) {
    try {
      dynamicPost = typeof hublData === 'string' ? JSON.parse(hublData) : hublData;
    } catch (e) {
      console.error('Error parsing featured post:', e);
    }
  }

  // Use dynamic or manual content
  const displayTitle = dynamicPost?.title || title;
  const displayDescription = dynamicPost?.description || description;
  const displayImage = dynamicPost?.featured_image || imageUrl;
  const displayUrl = dynamicPost?.url || ctaUrl;
  const displayTopic = dynamicPost?.topic || 'Article';

  // Type colors for badges
  const getTypeColor = (topic: string) => {
    const topicLower = topic?.toLowerCase() || 'article';
    if (topicLower.includes('case study')) return { bg: 'rgba(17, 138, 178, 0.1)', text: 'var(--text-blue)' };
    if (topicLower.includes('guide')) return { bg: 'var(--bg-light-teal)', text: 'var(--text-teal)' };
    if (topicLower.includes('webinar')) return { bg: 'rgba(17, 138, 178, 0.1)', text: 'var(--text-blue)' };
    return { bg: 'var(--bg-light-coral)', text: 'var(--text-coral)' };
  };

  const colors = getTypeColor(displayTopic);

  return (
    <>
      <ScrollAnimationScript />
      <style>{`
        .featured-resource-cta:hover {
          background: var(--bg-white) !important;
          color: var(--primary-coral) !important;
          border-color: var(--primary-coral) !important;
        }
        @media (max-width: 968px) {
          .featured-resource-grid {
            grid-template-columns: 1fr !important;
          }
          .featured-resource-image {
            order: -1 !important;
            min-height: 300px !important;
          }
          .featured-resource-content {
            padding: var(--spacing-xl) !important;
          }
        }
      `}</style>

      <section style={{
        padding: 'var(--spacing-2xl) var(--spacing-lg)',
        background: 'var(--bg-cream)',
      }}>
        <div style={{ maxWidth: '1200px', margin: '0 auto' }}>
          <div
            className="scroll-animate featured-resource-grid"
            style={{
              background: 'var(--bg-white)',
              borderRadius: 'var(--radius-xl)',
              overflow: 'hidden',
              boxShadow: 'var(--shadow-lg)',
              display: 'grid',
              gridTemplateColumns: '1fr 1fr',
              border: '1px solid var(--border-light)',
            }}
          >
            {/* Image Side with Decorative Elements */}
            <div
              className="featured-resource-image"
              style={{
                position: 'relative',
                minHeight: '450px',
                overflow: 'visible',
                padding: 'var(--spacing-xl)',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                background: 'var(--bg-cream)',
              }}
            >
              {/* Blue arrows - top left */}
              <img
                src={blueArrows}
                alt=""
                aria-hidden="true"
                style={{
                  position: 'absolute',
                  top: 'var(--spacing-md)',
                  left: 'var(--spacing-md)',
                  width: '100px',
                  height: 'auto',
                  zIndex: 1,
                }}
              />

              {/* Main Image */}
              {displayImage ? (
                <img
                  src={displayImage}
                  alt={displayTitle}
                  loading="lazy"
                  style={{
                    width: '90%',
                    height: 'auto',
                    maxHeight: '350px',
                    objectFit: 'cover',
                    borderRadius: '20px',
                    boxShadow: '0 20px 40px rgba(0, 0, 0, 0.12)',
                    position: 'relative',
                    zIndex: 2,
                  }}
                />
              ) : (
                <div style={{
                  width: '90%',
                  height: '300px',
                  borderRadius: '20px',
                  background: 'linear-gradient(135deg, var(--bg-light) 0%, var(--bg-white) 100%)',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  position: 'relative',
                  zIndex: 2,
                  boxShadow: '0 20px 40px rgba(0, 0, 0, 0.08)',
                }}>
                  <svg width="64" height="64" viewBox="0 0 24 24" fill="none" style={{ opacity: 0.3 }}>
                    <rect x="3" y="3" width="18" height="18" rx="2" stroke="var(--text-muted)" strokeWidth="2"/>
                    <circle cx="8.5" cy="8.5" r="1.5" fill="var(--text-muted)"/>
                    <path d="M3 16L8 11L13 16" stroke="var(--text-muted)" strokeWidth="2" strokeLinecap="round"/>
                    <path d="M14 14L17 11L21 15" stroke="var(--text-muted)" strokeWidth="2" strokeLinecap="round"/>
                  </svg>
                </div>
              )}

              {/* Yellow star - bottom right */}
              <img
                src={yellowStar}
                alt=""
                aria-hidden="true"
                style={{
                  position: 'absolute',
                  bottom: 'var(--spacing-md)',
                  right: 'var(--spacing-md)',
                  width: '80px',
                  height: 'auto',
                  zIndex: 3,
                }}
              />
            </div>

            {/* Content Side */}
            <div
              className="featured-resource-content"
              style={{
                padding: 'var(--spacing-2xl)',
                display: 'flex',
                flexDirection: 'column',
                justifyContent: 'center',
              }}
            >
              {/* Topic Badge */}
              <div style={{
                display: 'inline-flex',
                alignItems: 'center',
                padding: 'var(--spacing-xs) var(--spacing-md)',
                background: colors.bg,
                color: colors.text,
                borderRadius: 'var(--radius-full)',
                fontSize: 'var(--font-size-xs)',
                fontWeight: 600,
                textTransform: 'uppercase',
                letterSpacing: '0.1em',
                marginBottom: 'var(--spacing-md)',
                alignSelf: 'flex-start',
              }}>
                {eyebrow}
              </div>

              {/* Title */}
              <h2 style={{
                fontSize: 'var(--font-size-h2)',
                fontWeight: 500,
                lineHeight: 'var(--line-height-tight)',
                marginBottom: 'var(--spacing-md)',
                color: 'var(--text-primary)',
                fontFamily: 'var(--font-headline)',
              }}>
                {displayTitle}
              </h2>

              {/* Description */}
              <p style={{
                fontSize: 'var(--font-size-body)',
                lineHeight: 'var(--line-height-relaxed)',
                color: 'var(--text-secondary)',
                marginBottom: 'var(--spacing-xl)',
              }}>
                {displayDescription}
              </p>

              {/* CTA */}
              <div>
                <a
                  href={displayUrl}
                  className="featured-resource-cta"
                  style={{
                    display: 'inline-flex',
                    alignItems: 'center',
                    gap: 'var(--spacing-sm)',
                    background: 'var(--gradient-coral)',
                    color: 'white',
                    padding: 'var(--btn-padding-sm)',
                    borderRadius: 'var(--radius-full)',
                    fontSize: 'var(--font-size-body)',
                    fontWeight: 600,
                    textDecoration: 'none',
                    border: '2px solid transparent',
                    boxShadow: 'var(--shadow-coral-sm)',
                    transition: 'var(--transition-medium)',
                  }}
                >
                  {ctaText}
                  <span>→</span>
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

export const fields = (
  <ModuleFields>
    <BlogField
      name="blog_select"
      label="Select Blog"
      default=""
    />
    <BooleanField
      name="use_manual_content"
      label="Use Manual Content (instead of latest blog post)"
      default={false}
    />
    <TextField
      name="eyebrow"
      label="Eyebrow Text"
      default="Featured Resource"
    />
    <TextField
      name="title"
      label="Title (manual)"
      default="The Complete Guide to AI-Powered Mentorship"
    />
    <TextField
      name="description"
      label="Description (manual)"
      default="Learn how leading organizations are leveraging artificial intelligence to scale meaningful mentorship connections and drive measurable outcomes."
    />
    <TextField
      name="image_url"
      label="Image URL (manual)"
      default=""
    />
    <TextField
      name="cta_text"
      label="CTA Button Text"
      default="Read Article"
    />
    <TextField
      name="cta_url"
      label="CTA Button URL (manual)"
      default="#"
    />
  </ModuleFields>
);

export const meta = {
  label: 'Featured Resource',
};
