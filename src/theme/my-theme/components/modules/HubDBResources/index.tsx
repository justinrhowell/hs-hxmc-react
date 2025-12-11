import {
  ModuleFields,
  TextField,
  NumberField,
  ChoiceField,
} from '@hubspot/cms-components/fields';
import { ScrollAnimationScript } from '../../shared/ScrollAnimationScript';

// HubL template to fetch resources from HubDB table
export const hublDataTemplate = `
{% set table_id = module.hubdb_table_id || "145178390" %}
{% set initial_limit = module.resource_limit || 9 %}
{% set load_more_count = module.load_more_count || 6 %}
{% set type_filter = module.filter_by_type || "" %}
{% set sort_by = module.sort_by || "publish_date" %}
{% set sort_order = module.sort_order || "desc" %}

{% set order_prefix = "" %}
{% if sort_order == "desc" %}
  {% set order_prefix = "-" %}
{% endif %}

{% set query_parts = [] %}
{% if type_filter and type_filter != "all" %}
  {% do query_parts.append("type=" ~ type_filter) %}
{% endif %}
{% do query_parts.append("orderBy=" ~ order_prefix ~ sort_by) %}
{% set query = query_parts|join("&") %}

{% set all_resources = hubdb_table_rows(table_id, query) %}
{% set total_count = all_resources|length %}

{% set query_parts_limited = query_parts.copy() %}
{% do query_parts_limited.append("limit=" ~ initial_limit) %}
{% set query_limited = query_parts_limited|join("&") %}

{% set resources = hubdb_table_rows(table_id, query_limited) %}
{% set resources_array = [] %}
{% for row in resources %}
  {% set type_value = "" %}
  {% if row.type %}
    {% if row.type is string %}
      {% set type_value = row.type %}
    {% elif row.type.name %}
      {% set type_value = row.type.name %}
    {% elif row.type.label %}
      {% set type_value = row.type.label %}
    {% else %}
      {% set type_value = row.type|string %}
    {% endif %}
  {% endif %}
  {% set publish_date_formatted = "" %}
  {% if row.publish_date %}
    {% set publish_date_formatted = row.publish_date|datetimeformat('%B %d, %Y') %}
  {% endif %}
  {% set resource_data = {
    "id": row.hs_id,
    "name": row.name,
    "description": row.description,
    "image": row.image.url if row.image else "",
    "url": row.url,
    "type": type_value if type_value else "Article",
    "publish_date": publish_date_formatted
  } %}
  {% do resources_array.append(resource_data) %}
{% endfor %}
{% set all_resources_array = [] %}
{% for row in all_resources %}
  {% set type_value = "" %}
  {% if row.type %}
    {% if row.type is string %}
      {% set type_value = row.type %}
    {% elif row.type.name %}
      {% set type_value = row.type.name %}
    {% elif row.type.label %}
      {% set type_value = row.type.label %}
    {% else %}
      {% set type_value = row.type|string %}
    {% endif %}
  {% endif %}
  {% set publish_date_formatted = "" %}
  {% if row.publish_date %}
    {% set publish_date_formatted = row.publish_date|datetimeformat('%B %d, %Y') %}
  {% endif %}
  {% set resource_data = {
    "id": row.hs_id,
    "name": row.name,
    "description": row.description,
    "image": row.image.url if row.image else "",
    "url": row.url,
    "type": type_value if type_value else "Article",
    "publish_date": publish_date_formatted
  } %}
  {% do all_resources_array.append(resource_data) %}
{% endfor %}

{% set hublData = {
  "resources": resources_array,
  "all_resources": all_resources_array,
  "total_count": total_count,
  "initial_limit": initial_limit,
  "load_more_count": load_more_count
} %}
`;

export function Component({ fieldValues, hublData }: any) {
  const heading = fieldValues.heading || '';
  const subtitle = fieldValues.subtitle || '';
  const showLoadMore = fieldValues.show_load_more !== false;
  const columns = fieldValues.columns || '3';

  // Parse resources from HubL data
  let resources: any[] = [];
  let allResources: any[] = [];
  let totalCount = 0;
  let initialLimit = 9;
  let loadMoreCount = 6;

  try {
    if (hublData?.resources && Array.isArray(hublData.resources)) {
      resources = hublData.resources;
      allResources = hublData.all_resources || hublData.resources;
      totalCount = hublData.total_count || resources.length;
      initialLimit = hublData.initial_limit || 9;
      loadMoreCount = hublData.load_more_count || 6;
    } else if (hublData && typeof hublData === 'string') {
      const parsed = JSON.parse(hublData);
      resources = parsed.resources || parsed;
      allResources = parsed.all_resources || resources;
      totalCount = parsed.total_count || resources.length;
      initialLimit = parsed.initial_limit || 9;
      loadMoreCount = parsed.load_more_count || 6;
    } else if (Array.isArray(hublData)) {
      resources = hublData;
      allResources = hublData;
      totalCount = hublData.length;
    }
  } catch (e) {
    console.error('Error parsing HubDB resources:', e);
  }

  // Generate unique ID for this instance
  const instanceId = `hubdb-resources-${Math.random().toString(36).substr(2, 9)}`;

  // Fallback content for preview
  if (!resources || resources.length === 0) {
    resources = [
      {
        id: '1',
        name: 'Career Readiness White Paper',
        description: 'How mentorship builds the skills that matter for career success.',
        image: '',
        url: '#',
        type: 'White Paper'
      },
      {
        id: '2',
        name: 'Case Study: Duke University',
        description: 'How Duke increased student retention by 15% with peer mentorship.',
        image: '',
        url: '#',
        type: 'Case Study'
      },
      {
        id: '3',
        name: 'Complete Guide to Scaling Mentorship',
        description: 'Best practices for building successful mentorship programs at scale.',
        image: '',
        url: '#',
        type: 'Guide'
      }
    ];
  }

  // Type colors for badges
  const getTypeColor = (type: any) => {
    const typeStr = typeof type === 'string' ? type : (type?.name || type?.label || 'Article');
    const typeLower = typeStr.toLowerCase();
    if (typeLower.includes('case study')) return { bg: 'rgba(17, 138, 178, 0.1)', text: 'var(--text-blue)' };
    if (typeLower.includes('guide')) return { bg: 'var(--bg-light-teal)', text: 'var(--text-teal)' };
    if (typeLower.includes('webinar')) return { bg: 'rgba(17, 138, 178, 0.1)', text: 'var(--text-blue)' };
    if (typeLower.includes('ebook') || typeLower.includes('e-book')) return { bg: 'rgba(255, 209, 102, 0.15)', text: '#B8860B' };
    if (typeLower.includes('white paper') || typeLower.includes('whitepaper')) return { bg: 'rgba(239, 71, 111, 0.08)', text: 'var(--text-coral)' };
    if (typeLower.includes('video')) return { bg: 'rgba(17, 138, 178, 0.1)', text: 'var(--text-blue)' };
    return { bg: 'var(--bg-light-coral)', text: 'var(--text-coral)' };
  };

  const gridColumns = columns === '2' ? 'repeat(2, 1fr)' : columns === '4' ? 'repeat(4, 1fr)' : 'repeat(3, 1fr)';

  // Determine if we have more resources to load
  const hasMoreResources = totalCount > initialLimit;

  return (
    <>
      {/* Load More Script */}
      <script dangerouslySetInnerHTML={{__html: `
        (function() {
          function initLoadMore() {
            var container = document.getElementById('${instanceId}');
            if (!container) return;

            var loadMoreBtn = container.querySelector('.load-more-btn');
            var hiddenCards = container.querySelectorAll('.resource-card-hidden');
            var currentIndex = 0;
            var loadMoreCount = ${loadMoreCount};

            if (loadMoreBtn) {
              loadMoreBtn.onclick = function() {
                var cardsToShow = Array.from(hiddenCards).slice(currentIndex, currentIndex + loadMoreCount);
                cardsToShow.forEach(function(card, idx) {
                  card.style.display = 'flex';
                  card.style.opacity = '0';
                  card.style.transform = 'translateY(20px)';
                  setTimeout(function() {
                    card.style.transition = 'opacity 0.4s ease, transform 0.4s ease';
                    card.style.opacity = '1';
                    card.style.transform = 'translateY(0)';
                  }, idx * 100);
                });
                currentIndex += loadMoreCount;

                if (currentIndex >= hiddenCards.length) {
                  loadMoreBtn.style.display = 'none';
                }
              };
            }
          }

          if (document.readyState === 'loading') {
            document.addEventListener('DOMContentLoaded', initLoadMore);
          } else {
            setTimeout(initLoadMore, 100);
          }
        })();
      `}} />

      <ScrollAnimationScript />
      <style>{`
        .hubdb-resource-card {
          transition: all 0.3s ease;
        }
        .hubdb-resource-card:hover {
          transform: translateY(-4px);
          box-shadow: var(--shadow-lg) !important;
        }
        .hubdb-resource-card:hover img {
          transform: scale(1.05);
        }
        .hubdb-resource-card:hover .resource-link {
          gap: var(--spacing-sm) !important;
        }
        .resource-card-hidden {
          display: none;
          flex-direction: column;
        }
        @media (max-width: 1024px) {
          .hubdb-resource-grid {
            grid-template-columns: repeat(2, 1fr) !important;
          }
        }
        @media (max-width: 768px) {
          .hubdb-resource-grid {
            grid-template-columns: 1fr !important;
          }
        }
      `}</style>

      <section
        id={instanceId}
        style={{
          padding: 'var(--spacing-2xl) var(--spacing-lg)',
          background: 'var(--bg-white)',
        }}
      >
        <div style={{ maxWidth: '1200px', margin: '0 auto' }}>
          {/* Header */}
          {(heading || subtitle) && (
            <div className="scroll-animate" style={{ textAlign: 'center', marginBottom: 'var(--spacing-2xl)' }}>
              {heading && (
                <h2 style={{
                  fontSize: 'var(--font-size-h2)',
                  fontWeight: 500,
                  marginBottom: 'var(--spacing-sm)',
                  color: 'var(--text-primary)',
                  fontFamily: 'var(--font-headline)',
                }}>
                  {heading}
                </h2>
              )}
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
            className="hubdb-resource-grid"
            style={{
              display: 'grid',
              gridTemplateColumns: gridColumns,
              gap: 'var(--spacing-lg)',
            }}
          >
            {/* Render all resources - initially visible ones and hidden ones for load more */}
            {allResources.map((resource: any, index: number) => {
              const colors = getTypeColor(resource.type);
              const isHidden = index >= initialLimit;
              return (
                <article
                  key={resource.id || index}
                  className={`hubdb-resource-card ${isHidden ? 'resource-card-hidden' : 'scroll-animate'}`}
                  data-delay={isHidden ? 0 : index * 100}
                  style={{
                    background: 'var(--bg-white)',
                    borderRadius: 'var(--radius-xl)',
                    overflow: 'hidden',
                    boxShadow: 'var(--shadow-md)',
                    display: isHidden ? 'none' : 'flex',
                    flexDirection: 'column',
                    border: '1px solid var(--border-light)',
                  }}
                >
                  {/* Image */}
                  {resource.image && (
                    <div style={{
                      width: '100%',
                      height: '180px',
                      overflow: 'hidden',
                      position: 'relative',
                    }}>
                      <img
                        src={resource.image}
                        alt={resource.name}
                        loading="lazy"
                        style={{
                          width: '100%',
                          height: '100%',
                          objectFit: 'cover',
                          transition: 'transform 0.3s ease',
                        }}
                      />
                    </div>
                  )}

                  {/* Content */}
                  <div style={{
                    padding: 'var(--spacing-lg)',
                    display: 'flex',
                    flexDirection: 'column',
                    flex: 1,
                  }}>
                    {/* Type Badge */}
                    <div style={{
                      display: 'inline-block',
                      background: colors.bg,
                      color: colors.text,
                      padding: '0.375rem 0.75rem',
                      borderRadius: 'var(--radius-full)',
                      fontSize: 'var(--font-size-xs)',
                      fontWeight: 600,
                      textTransform: 'uppercase',
                      letterSpacing: '0.05em',
                      marginBottom: 'var(--spacing-sm)',
                      width: 'fit-content',
                    }}>
                      {typeof resource.type === 'string' ? resource.type : (resource.type?.name || resource.type?.label || 'Resource')}
                    </div>

                    <h3 style={{
                      fontSize: 'var(--font-size-h4)',
                      fontWeight: 500,
                      color: 'var(--text-primary)',
                      marginBottom: 'var(--spacing-sm)',
                      fontFamily: 'var(--font-headline)',
                      lineHeight: 1.3,
                    }}>
                      {resource.name}
                    </h3>

                    <p style={{
                      fontSize: 'var(--font-size-small)',
                      color: 'var(--text-secondary)',
                      lineHeight: 'var(--line-height-normal)',
                      marginBottom: 'var(--spacing-md)',
                      flex: 1,
                    }}>
                      {resource.description}
                    </p>

                    {/* Footer */}
                    <div style={{
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'space-between',
                      paddingTop: 'var(--spacing-sm)',
                      borderTop: '1px solid var(--border-light)',
                    }}>
                      {resource.publish_date && (
                        <span style={{
                          fontSize: 'var(--font-size-xs)',
                          color: 'var(--text-muted)',
                        }}>
                          {resource.publish_date}
                        </span>
                      )}
                      <a
                        href={resource.url}
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
                          marginLeft: 'auto',
                        }}
                      >
                        Learn More <span>→</span>
                      </a>
                    </div>
                  </div>
                </article>
              );
            })}
          </div>

          {/* Load More */}
          {showLoadMore && hasMoreResources && (
            <div style={{ textAlign: 'center', marginTop: 'var(--spacing-2xl)' }}>
              <button
                type="button"
                className="btn-outlined load-more-btn"
                style={{
                  padding: 'var(--btn-padding-sm)',
                  cursor: 'pointer',
                }}
              >
                Load More Resources
              </button>
            </div>
          )}
        </div>
      </section>
    </>
  );
}

export const fields = (
  <ModuleFields>
    <TextField
      name="hubdb_table_id"
      label="HubDB Table ID"
      default="145178390"
      helpText="The ID of your HubDB Resources table"
    />
    <ChoiceField
      name="filter_by_type"
      label="Filter by Type"
      helpText="Show only resources of a specific type, or show all"
      choices={[
        ['all', 'All Types'],
        ['White Paper', 'White Paper'],
        ['Case Study', 'Case Study'],
        ['Guide', 'Guide'],
        ['eBook', 'eBook'],
        ['Webinar', 'Webinar'],
        ['Article', 'Article'],
        ['Video', 'Video'],
        ['Report', 'Report'],
        ['Infographic', 'Infographic'],
      ]}
      default="all"
    />
    <ChoiceField
      name="sort_by"
      label="Sort By"
      helpText="Choose which field to sort resources by"
      choices={[
        ['publish_date', 'Publish Date'],
        ['name', 'Name'],
        ['type', 'Type'],
        ['hs_created_at', 'Date Created'],
        ['hs_updated_at', 'Date Updated'],
      ]}
      default="publish_date"
    />
    <ChoiceField
      name="sort_order"
      label="Sort Order"
      choices={[
        ['desc', 'Descending (Newest First)'],
        ['asc', 'Ascending (Oldest First)'],
      ]}
      default="desc"
    />
    <TextField
      name="heading"
      label="Section Heading"
      default="Resources"
    />
    <TextField
      name="subtitle"
      label="Subtitle"
      default="Explore our latest insights and guides"
    />
    <NumberField
      name="resource_limit"
      label="Number of Resources"
      default={9}
      min={3}
      max={24}
    />
    <ChoiceField
      name="columns"
      label="Grid Columns"
      choices={[
        ['2', '2 Columns'],
        ['3', '3 Columns'],
        ['4', '4 Columns'],
      ]}
      default="3"
    />
    <NumberField
      name="load_more_count"
      label="Load More Count"
      helpText="How many resources to load when clicking Load More"
      default={6}
      min={3}
      max={12}
    />
    <ChoiceField
      name="show_load_more"
      label="Show Load More Button"
      choices={[
        ['true', 'Yes'],
        ['false', 'No'],
      ]}
      default="true"
    />
  </ModuleFields>
);

export const meta = {
  label: 'HubDB Resources',
};
