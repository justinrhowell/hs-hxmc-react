import React from 'react';
import { ScrollAnimationScript } from '../../shared/ScrollAnimationScript';

export function Component({ fieldValues }: any) {
  const heading = fieldValues.heading || '';
  const subtitle = fieldValues.subtitle || '';
  const tabs = fieldValues.tabs || [];
  const tabStyle = fieldValues.tab_style || 'pill';
  const tabAlignment = fieldValues.tab_alignment || 'center';

  // Default tabs if none provided
  const defaultTabs = [
    { tab_label: 'White Papers', content: '<p>Add your white paper resources here.</p>' },
    { tab_label: 'Case Studies', content: '<p>Add your case study resources here.</p>' },
    { tab_label: 'Guides', content: '<p>Add your guide resources here.</p>' },
  ];

  const tabsToRender = tabs.length > 0 ? tabs : defaultTabs;

  // Generate unique ID for this instance
  const instanceId = `content-tabs-${Math.random().toString(36).substr(2, 9)}`;

  return (
    <>
      <script dangerouslySetInnerHTML={{__html: `
        (function() {
          function initContentTabs() {
            const container = document.getElementById('${instanceId}');
            if (!container) return;

            const buttons = container.querySelectorAll('.content-tab-btn');
            const panels = container.querySelectorAll('.content-tab-panel');
            const tabStyle = '${tabStyle}';

            buttons.forEach((btn, idx) => {
              btn.onclick = function() {
                // Reset all buttons
                buttons.forEach(b => {
                  if (tabStyle === 'pill') {
                    b.style.background = 'transparent';
                    b.style.color = 'var(--text-primary)';
                    b.style.boxShadow = 'none';
                  } else if (tabStyle === 'underline') {
                    b.style.borderBottom = '3px solid transparent';
                    b.style.color = 'var(--text-muted)';
                  } else {
                    b.style.background = 'var(--bg-light)';
                    b.style.color = 'var(--text-primary)';
                    b.style.borderBottom = '2px solid transparent';
                  }
                  b.style.fontWeight = '500';
                });

                // Hide all panels
                panels.forEach(p => p.style.display = 'none');

                // Activate clicked button
                if (tabStyle === 'pill') {
                  btn.style.background = 'var(--primary-blue)';
                  btn.style.color = 'var(--text-white)';
                  btn.style.boxShadow = 'var(--shadow-md)';
                } else if (tabStyle === 'underline') {
                  btn.style.borderBottom = '3px solid var(--primary-coral)';
                  btn.style.color = 'var(--text-primary)';
                } else {
                  btn.style.background = 'var(--bg-white)';
                  btn.style.borderBottom = '2px solid var(--primary-coral)';
                  btn.style.color = 'var(--text-primary)';
                }
                btn.style.fontWeight = '600';

                // Show corresponding panel
                if (panels[idx]) panels[idx].style.display = 'block';
              };
            });

            // Ensure first panel is visible
            if (panels[0]) panels[0].style.display = 'block';
          }

          if (document.readyState === 'loading') {
            document.addEventListener('DOMContentLoaded', initContentTabs);
          } else {
            setTimeout(initContentTabs, 100);
          }
        })();
      `}} />

      <ScrollAnimationScript />

      <style>{`
        .content-tabs-section .content-tab-btn:focus {
          outline: none !important;
        }
        .content-tabs-section .content-tab-btn:hover {
          opacity: 0.85;
        }
        @media (max-width: 768px) {
          .content-tabs-section .tabs-container {
            flex-direction: column !important;
            gap: 0.5rem !important;
            padding: 0.5rem !important;
          }
          .content-tabs-section .content-tab-btn {
            width: 100% !important;
            text-align: center !important;
          }
        }
      `}</style>

      <section
        id={instanceId}
        className="content-tabs-section scroll-animate"
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
          <div style={{
            textAlign: tabAlignment,
            marginBottom: 'var(--spacing-xl)',
          }}>
            <div
              className="tabs-container"
              style={{
                background: tabStyle === 'pill' ? 'var(--bg-light)' : 'transparent',
                padding: tabStyle === 'pill' ? 'var(--spacing-xs)' : '0',
                borderRadius: tabStyle === 'pill' ? 'var(--radius-lg)' : '0',
                borderBottom: tabStyle === 'underline' ? '2px solid var(--border-light)' : 'none',
                display: 'inline-flex',
                gap: tabStyle === 'pill' ? '4px' : 'var(--spacing-md)',
                justifyContent: tabAlignment === 'center' ? 'center' : tabAlignment === 'right' ? 'flex-end' : 'flex-start',
                flexWrap: 'wrap',
              }}
            >
              {tabsToRender.map((tab: any, index: number) => {
                const isFirst = index === 0;
                let buttonStyle: React.CSSProperties = {
                  padding: tabStyle === 'pill' ? 'var(--spacing-sm) var(--spacing-lg)' : 'var(--spacing-sm) var(--spacing-md)',
                  borderRadius: tabStyle === 'pill' ? 'var(--radius-md)' : '0',
                  fontFamily: 'var(--font-body)',
                  fontSize: 'var(--font-size-body)',
                  border: 'none',
                  cursor: 'pointer',
                  transition: 'var(--transition-medium)',
                  whiteSpace: 'nowrap',
                };

                if (tabStyle === 'pill') {
                  buttonStyle = {
                    ...buttonStyle,
                    background: isFirst ? 'var(--primary-blue)' : 'transparent',
                    color: isFirst ? 'var(--text-white)' : 'var(--text-primary)',
                    boxShadow: isFirst ? 'var(--shadow-md)' : 'none',
                    fontWeight: isFirst ? 600 : 500,
                  };
                } else if (tabStyle === 'underline') {
                  buttonStyle = {
                    ...buttonStyle,
                    background: 'transparent',
                    color: isFirst ? 'var(--text-primary)' : 'var(--text-muted)',
                    borderBottom: isFirst ? '3px solid var(--primary-coral)' : '3px solid transparent',
                    fontWeight: isFirst ? 600 : 500,
                    marginBottom: '-2px',
                  };
                } else {
                  // boxed style
                  buttonStyle = {
                    ...buttonStyle,
                    background: isFirst ? 'var(--bg-white)' : 'var(--bg-light)',
                    color: 'var(--text-primary)',
                    borderBottom: isFirst ? '2px solid var(--primary-coral)' : '2px solid transparent',
                    fontWeight: isFirst ? 600 : 500,
                    borderRadius: 'var(--radius-md) var(--radius-md) 0 0',
                  };
                }

                return (
                  <button
                    key={index}
                    type="button"
                    className="content-tab-btn"
                    data-tab-index={index}
                    style={buttonStyle}
                  >
                    {tab.tab_label || `Tab ${index + 1}`}
                  </button>
                );
              })}
            </div>
          </div>

          {/* Tab Panels */}
          <div className="tab-panels">
            {tabsToRender.map((tab: any, index: number) => (
              <div
                key={index}
                className="content-tab-panel"
                data-panel-index={index}
                style={{
                  display: index === 0 ? 'block' : 'none',
                  animation: 'fadeIn 0.3s ease',
                }}
              >
                {/* Render HTML content */}
                <div
                  className="tab-content"
                  dangerouslySetInnerHTML={{ __html: tab.content || '' }}
                  style={{
                    fontSize: 'var(--font-size-body)',
                    lineHeight: 'var(--line-height-relaxed)',
                    color: 'var(--text-secondary)',
                  }}
                />
              </div>
            ))}
          </div>
        </div>
      </section>

      <style>{`
        @keyframes fadeIn {
          from { opacity: 0; transform: translateY(10px); }
          to { opacity: 1; transform: translateY(0); }
        }
        .tab-content h1, .tab-content h2, .tab-content h3, .tab-content h4 {
          font-family: var(--font-headline);
          color: var(--text-primary);
          margin-bottom: var(--spacing-md);
        }
        .tab-content p {
          margin-bottom: var(--spacing-md);
        }
        .tab-content a {
          color: var(--primary-coral);
          text-decoration: underline;
        }
        .tab-content ul, .tab-content ol {
          padding-left: var(--spacing-lg);
          margin-bottom: var(--spacing-md);
        }
        .tab-content li {
          margin-bottom: var(--spacing-xs);
        }
      `}</style>
    </>
  );
}

export const fields: any = [
  {
    type: 'text',
    name: 'heading',
    label: 'Section Heading',
    default: '',
  },
  {
    type: 'text',
    name: 'subtitle',
    label: 'Subtitle',
    default: '',
  },
  {
    type: 'choice',
    name: 'tab_style',
    label: 'Tab Style',
    choices: [
      ['pill', 'Pill (filled background)'],
      ['underline', 'Underline'],
      ['boxed', 'Boxed'],
    ],
    default: 'pill',
  },
  {
    type: 'choice',
    name: 'tab_alignment',
    label: 'Tab Alignment',
    choices: [
      ['left', 'Left'],
      ['center', 'Center'],
      ['right', 'Right'],
    ],
    default: 'center',
  },
  {
    type: 'group',
    name: 'tabs',
    label: 'Tabs',
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
        default: 'Tab',
      },
      {
        type: 'richtext',
        name: 'content',
        label: 'Tab Content',
        default: '<p>Add your content here. You can include text, images, or embed module shortcodes.</p>',
      },
    ],
  },
];

export const meta = {
  label: 'Content Tabs',
  host_template_types: ['PAGE'],
  categories: ['content'],
};
