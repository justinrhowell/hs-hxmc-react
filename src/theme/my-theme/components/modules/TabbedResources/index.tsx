import React from 'react';
import { ScrollAnimationScript } from '../../shared/ScrollAnimationScript';

// HubL template to fetch resources from HubDB table for each tab
export const hublDataTemplate = `
{% set table_id = module.hubdb_table_id || "145178390" %}
{% set initial_limit = module.resources_per_tab || 6 %}
{% set load_more_count = module.load_more_count || 6 %}
{% set sort_by = module.sort_by || "publish_date" %}
{% set sort_order = module.sort_order || "desc" %}
{% set tabs_config = module.tabs || [] %}

{% set order_prefix = "" %}
{% if sort_order == "desc" %}
  {% set order_prefix = "-" %}
{% endif %}

{% set all_tabs_data = [] %}

{% for tab in tabs_config %}
  {% set type_filter = tab.filter_type || "" %}

  {% set query_parts = [] %}
  {% if type_filter and type_filter != "all" %}
    {% do query_parts.append("type=" ~ type_filter) %}
  {% endif %}
  {% do query_parts.append("orderBy=" ~ order_prefix ~ sort_by) %}
  {% set query = query_parts|join("&") %}

  {% set all_resources = hubdb_table_rows(table_id, query) %}
  {% set total_count = all_resources|length %}

  {% set resources_array = [] %}
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
    {% do resources_array.append(resource_data) %}
  {% endfor %}

  {% set tab_data = {
    "label": tab.tab_label,
    "filter": type_filter,
    "resources": resources_array,
    "total_count": total_count,
    "initial_limit": initial_limit,
    "load_more_count": load_more_count
  } %}
  {% do all_tabs_data.append(tab_data) %}
{% endfor %}

{% set hublData = { "tabs": all_tabs_data, "initial_limit": initial_limit, "load_more_count": load_more_count } %}
`;

export function Component({ fieldValues, hublData }: any) {
  const heading = fieldValues.heading || '';
  const subtitle = fieldValues.subtitle || '';
  const columns = fieldValues.columns || '3';
  const showLoadMore = fieldValues.show_load_more !== false;

  // Parse tabs data from HubL
  let tabsData: any[] = [];
  let initialLimit = 6;
  let loadMoreCount = 6;
  try {
    if (hublData?.tabs && Array.isArray(hublData.tabs)) {
      tabsData = hublData.tabs;
      initialLimit = hublData.initial_limit || 6;
      loadMoreCount = hublData.load_more_count || 6;
    } else if (hublData && typeof hublData === 'string') {
      const parsed = JSON.parse(hublData);
      tabsData = parsed.tabs || [];
      initialLimit = parsed.initial_limit || 6;
      loadMoreCount = parsed.load_more_count || 6;
    }
  } catch (e) {
    console.error('Error parsing tabs data:', e);
  }

  // Fallback tabs if none provided
  if (!tabsData || tabsData.length === 0) {
    tabsData = [
      {
        label: 'All Resources',
        filter: 'all',
        resources: [
          { id: '1', name: 'Sample Resource 1', description: 'Description for resource 1', image: '', url: '#', type: 'White Paper' },
          { id: '2', name: 'Sample Resource 2', description: 'Description for resource 2', image: '', url: '#', type: 'Case Study' },
          { id: '3', name: 'Sample Resource 3', description: 'Description for resource 3', image: '', url: '#', type: 'Guide' },
        ]
      },
      {
        label: 'White Papers',
        filter: 'White Paper',
        resources: [
          { id: '4', name: 'White Paper Example', description: 'A sample white paper resource', image: '', url: '#', type: 'White Paper' },
        ]
      },
      {
        label: 'Case Studies',
        filter: 'Case Study',
        resources: [
          { id: '5', name: 'Case Study Example', description: 'A sample case study resource', image: '', url: '#', type: 'Case Study' },
        ]
      },
    ];
  }

  // Generate unique ID for this instance
  const instanceId = `tabbed-resources-${Math.random().toString(36).substr(2, 9)}`;

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

  const getTypeLabel = (type: any) => {
    if (typeof type === 'string') return type;
    return type?.name || type?.label || 'Resource';
  };

  const gridColumns = columns === '2' ? 'repeat(2, 1fr)' : columns === '4' ? 'repeat(4, 1fr)' : 'repeat(3, 1fr)';

  return (
    <>
      <script dangerouslySetInnerHTML={{__html: `
        (function() {
          function initTabbedResources() {
            var container = document.getElementById('${instanceId}');
            if (!container) return;

            var buttons = container.querySelectorAll('.tabbed-res-btn');
            var panels = container.querySelectorAll('.tabbed-res-panel');
            var loadMoreCount = ${loadMoreCount};

            // Track load more state per tab
            var tabLoadMoreState = {};

            buttons.forEach(function(btn, idx) {
              btn.onclick = function() {
                // Reset all buttons
                buttons.forEach(function(b) {
                  b.style.background = 'transparent';
                  b.style.color = 'var(--text-primary)';
                  b.style.boxShadow = 'none';
                  b.style.fontWeight = '500';
                });

                // Hide all panels
                panels.forEach(function(p) { p.style.display = 'none'; });

                // Activate clicked button
                btn.style.background = 'var(--primary-blue)';
                btn.style.color = 'var(--text-white)';
                btn.style.boxShadow = 'var(--shadow-md)';
                btn.style.fontWeight = '600';

                // Show corresponding panel
                if (panels[idx]) panels[idx].style.display = 'block';
              };
            });

            // Initialize load more buttons for each tab
            panels.forEach(function(panel, panelIdx) {
              var loadMoreBtn = panel.querySelector('.tab-load-more-btn');
              var hiddenCards = panel.querySelectorAll('.tab-card-hidden');

              if (!tabLoadMoreState[panelIdx]) {
                tabLoadMoreState[panelIdx] = { currentIndex: 0 };
              }

              if (loadMoreBtn && hiddenCards.length > 0) {
                loadMoreBtn.onclick = function() {
                  var state = tabLoadMoreState[panelIdx];
                  var cardsToShow = Array.from(hiddenCards).slice(state.currentIndex, state.currentIndex + loadMoreCount);

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

                  state.currentIndex += loadMoreCount;

                  if (state.currentIndex >= hiddenCards.length) {
                    loadMoreBtn.style.display = 'none';
                  }
                };
              }
            });

            // Ensure first panel is visible
            if (panels[0]) panels[0].style.display = 'block';
          }

          if (document.readyState === 'loading') {
            document.addEventListener('DOMContentLoaded', initTabbedResources);
          } else {
            setTimeout(initTabbedResources, 100);
          }
        })();
      `}} />

      <ScrollAnimationScript />

      <style>{`
        .tabbed-resources-section .tabbed-res-btn:focus {
          outline: none !important;
        }
        .tabbed-resources-section .tabbed-res-btn:hover {
          opacity: 0.85;
        }
        .tabbed-res-card {
          transition: all 0.3s ease;
        }
        .tabbed-res-card:hover {
          transform: translateY(-4px);
          box-shadow: var(--shadow-lg) !important;
        }
        .tabbed-res-card:hover img {
          transform: scale(1.05);
        }
        .tabbed-res-card:hover .resource-link {
          gap: var(--spacing-sm) !important;
        }
        .tab-card-hidden {
          display: none;
          flex-direction: column;
        }
        @media (max-width: 1024px) {
          .tabbed-res-grid {
            grid-template-columns: repeat(2, 1fr) !important;
          }
        }
        @media (max-width: 768px) {
          .tabbed-resources-section .tabs-container {
            flex-direction: column !important;
            gap: 0.5rem !important;
            padding: 0.5rem !important;
          }
          .tabbed-resources-section .tabbed-res-btn {
            width: 100% !important;
            text-align: center !important;
          }
          .tabbed-res-grid {
            grid-template-columns: 1fr !important;
          }
        }
        @keyframes fadeInUp {
          from { opacity: 0; transform: translateY(15px); }
          to { opacity: 1; transform: translateY(0); }
        }
        .tabbed-res-panel {
          animation: fadeInUp 0.3s ease;
        }
      `}</style>

      <section
        id={instanceId}
        className="tabbed-resources-section scroll-animate"
        style={{
          padding: 'var(--section-padding-lg) var(--spacing-lg)',
          background: 'var(--bg-white)',
        }}
      >
        <div style={{ maxWidth: '1200px', margin: '0 auto' }}>
          {/* Header */}
          {(heading || subtitle) && (
            <div style={{ textAlign: 'center', marginBottom: 'var(--spacing-2xl)' }}>
              {heading && (
                <h2 style={{
                  fontSize: 'var(--font-size-h2)',
                  fontWeight: 500,
                  marginBottom: 'var(--spacing-sm)',
                  fontFamily: 'var(--font-headline)',
                  lineHeight: 'var(--line-height-tight)',
                  color: 'var(--text-primary)',
                }}>
                  {heading}
                </h2>
              )}
              {subtitle && (
                <p style={{
                  fontSize: 'var(--font-size-body-lg)',
                  color: 'var(--text-muted)',
                  maxWidth: 'var(--max-width-prose)',
                  margin: '0 auto',
                }}>
                  {subtitle}
                </p>
              )}
            </div>
          )}

          {/* Tabs Navigation */}
          <div style={{ textAlign: 'center', marginBottom: 'var(--spacing-xl)' }}>
            <div
              className="tabs-container"
              style={{
                background: 'var(--bg-light)',
                padding: 'var(--spacing-xs)',
                borderRadius: 'var(--radius-lg)',
                display: 'inline-flex',
                gap: '4px',
                justifyContent: 'center',
                flexWrap: 'wrap',
              }}
            >
              {tabsData.map((tab: any, index: number) => (
                <button
                  key={index}
                  type="button"
                  className="tabbed-res-btn"
                  data-tab-index={index}
                  style={{
                    padding: 'var(--spacing-sm) var(--spacing-lg)',
                    borderRadius: 'var(--radius-md)',
                    fontFamily: 'var(--font-body)',
                    fontSize: 'var(--font-size-body)',
                    border: 'none',
                    cursor: 'pointer',
                    transition: 'var(--transition-medium)',
                    whiteSpace: 'nowrap',
                    background: index === 0 ? 'var(--primary-blue)' : 'transparent',
                    color: index === 0 ? 'var(--text-white)' : 'var(--text-primary)',
                    boxShadow: index === 0 ? 'var(--shadow-md)' : 'none',
                    fontWeight: index === 0 ? 600 : 500,
                  }}
                >
                  {tab.label || `Tab ${index + 1}`}
                </button>
              ))}
            </div>
          </div>

          {/* Tab Panels */}
          <div className="tab-panels">
            {tabsData.map((tab: any, tabIndex: number) => (
              <div
                key={tabIndex}
                className="tabbed-res-panel"
                data-panel-index={tabIndex}
                style={{
                  display: tabIndex === 0 ? 'block' : 'none',
                }}
              >
                {/* Resources Grid */}
                {tab.resources && tab.resources.length > 0 ? (
                  <>
                  <div
                    className="tabbed-res-grid"
                    style={{
                      display: 'grid',
                      gridTemplateColumns: gridColumns,
                      gap: 'var(--spacing-lg)',
                    }}
                  >
                    {tab.resources.map((resource: any, resIndex: number) => {
                      const colors = getTypeColor(resource.type);
                      const tabInitialLimit = tab.initial_limit || initialLimit;
                      const isHidden = resIndex >= tabInitialLimit;
                      return (
                        <article
                          key={resource.id || resIndex}
                          className={`tabbed-res-card ${isHidden ? 'tab-card-hidden' : ''}`}
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
                              {getTypeLabel(resource.type)}
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
                                  marginLeft: 'auto',
                                  textDecoration: 'none',
                                  fontSize: 'var(--font-size-small)',
                                  fontWeight: 600,
                                  transition: 'gap 0.3s ease',
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

                  {/* Load More Button for this tab */}
                  {showLoadMore && tab.resources.length > (tab.initial_limit || initialLimit) && (
                    <div style={{ textAlign: 'center', marginTop: 'var(--spacing-xl)' }}>
                      <button
                        type="button"
                        className="btn-outlined tab-load-more-btn"
                        style={{
                          padding: 'var(--btn-padding-sm)',
                          cursor: 'pointer',
                        }}
                      >
                        Load More
                      </button>
                    </div>
                  )}
                  </>
                ) : (
                  <div style={{
                    textAlign: 'center',
                    padding: 'var(--spacing-2xl)',
                    color: 'var(--text-muted)',
                  }}>
                    <p>No resources found in this category.</p>
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}

export const fields: any = [
  {
    type: 'text',
    name: 'hubdb_table_id',
    label: 'HubDB Table ID',
    default: '145178390',
    help_text: 'The ID of your HubDB Resources table',
  },
  {
    type: 'text',
    name: 'heading',
    label: 'Section Heading',
    default: 'Resources',
  },
  {
    type: 'text',
    name: 'subtitle',
    label: 'Subtitle',
    default: 'Explore our latest insights, guides, and case studies',
  },
  {
    type: 'group',
    name: 'tabs',
    label: 'Tabs',
    help_text: 'Configure each tab with a label and filter type',
    occurrence: {
      min: 1,
      max: 10,
      default: 3,
    },
    children: [
      {
        type: 'text',
        name: 'tab_label',
        label: 'Tab Label',
        default: 'All Resources',
      },
      {
        type: 'choice',
        name: 'filter_type',
        label: 'Filter by Type',
        help_text: 'Show only resources of this type in this tab',
        choices: [
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
        ],
        default: 'all',
      },
    ],
  },
  {
    type: 'number',
    name: 'resources_per_tab',
    label: 'Resources Per Tab',
    default: 6,
    min: 3,
    max: 24,
  },
  {
    type: 'choice',
    name: 'sort_by',
    label: 'Sort By',
    help_text: 'Choose which field to sort resources by',
    choices: [
      ['publish_date', 'Publish Date'],
      ['name', 'Name'],
      ['type', 'Type'],
      ['hs_created_at', 'Date Created'],
      ['hs_updated_at', 'Date Updated'],
    ],
    default: 'publish_date',
  },
  {
    type: 'choice',
    name: 'sort_order',
    label: 'Sort Order',
    choices: [
      ['desc', 'Descending (Newest First)'],
      ['asc', 'Ascending (Oldest First)'],
    ],
    default: 'desc',
  },
  {
    type: 'choice',
    name: 'columns',
    label: 'Grid Columns',
    choices: [
      ['2', '2 Columns'],
      ['3', '3 Columns'],
      ['4', '4 Columns'],
    ],
    default: '3',
  },
  {
    type: 'number',
    name: 'load_more_count',
    label: 'Load More Count',
    help_text: 'How many resources to load when clicking Load More',
    default: 6,
    min: 3,
    max: 12,
  },
  {
    type: 'boolean',
    name: 'show_load_more',
    label: 'Show Load More Button',
    default: true,
  },
];

export const meta = {
  label: 'Tabbed Resources',
  host_template_types: ['PAGE'],
  categories: ['content'],
};
