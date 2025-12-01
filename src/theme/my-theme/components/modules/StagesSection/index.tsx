import React from 'react';
import {
  ModuleFields,
  TextField,
} from '@hubspot/cms-components/fields';
import girlInOfficeImg from '../../../assets/girl-in-office.png';
import groupImg from '../../../assets/group.png';
import techImg from '../../../assets/tech.png';
import scienceGirlImg from '../../../assets/science-girl.png';
import pizzaImg from '../../../assets/pizza.png';
import wedgeSvg from '../../../assets/Wedge.svg';
import starSvg from '../../../assets/Star.svg';
import { useScrollAnimation, animationStyles } from '../../hooks/useScrollAnimation';

interface StageContent {
  title: string;
  heading: string;
  description: string;
  subtitle: string;
  stats: string;
  cta: string;
  image: string;
}

export function Component({ fieldValues }: any) {
  const { elementRef, isVisible } = useScrollAnimation({ threshold: 0.2 });
  // No React state - using vanilla JS and CSS for tabs

  // Map image keys to imported image assets
  const imageMap: Record<string, string> = {
    group: groupImg,
    girlInOffice: girlInOfficeImg,
    tech: techImg,
    scienceGirl: scienceGirlImg,
    pizza: pizzaImg,
  };

  // Use custom stages if provided, otherwise fall back to defaults
  const stageContent: StageContent[] = (fieldValues.stages && fieldValues.stages.length > 0)
    ? fieldValues.stages.map((s: any) => ({
        title: s.tab_title,
        heading: s.heading,
        description: s.description,
        subtitle: s.subtitle,
        stats: s.stats,
        cta: s.cta_text,
        image: imageMap[s.image_key] || groupImg
      }))
    : [
        {
          title: 'College Success Ready',
          heading: 'From First Day to Graduation Day',
          description: 'Build confidence and belonging early. Use mentorship to bridge the gap from high school to college and ensure every learner persists. Students paired with mentors in their first year show higher retention rates and stronger sense of community.',
          subtitle: 'First-Year Success Starts Here',
          stats: 'Students with first-year mentors are 2.3x more likely to persist to graduation and report 42% higher sense of belonging.',
          cta: 'See college success stories →',
          image: groupImg
        },
        {
          title: 'Talent Acquisition',
          heading: 'Mentorship Made Maya Job-Ready',
          description: 'Embed mentorship into internships, apprenticeships, and project-based learning to grow your own talent pipeline. Maya, a recent college graduate, did everything right—good grades and a polished résumé. Yet after 100+ applications she had no offers, saying, "I don\'t think I\'ll ever ever get a job." Her new mentorship relationship provided the clear path and crucial social network she needed, transforming her despair into confident success.',
          subtitle: 'Connection is the Missing Link',
          stats: 'Mentees see a 21% increase in comfort asking for help from established professionals and an 18% boost in self-efficacy. Intern-to-full-time conversion rates increase by 42%.',
          cta: 'Anya, Nic, Jordan. Explore more stories →',
          image: girlInOfficeImg
        },
        {
          title: 'Professional Development',
          heading: 'Leadership for the AI Era',
          description: 'Develop durable skills and leadership for the AI era through continuous mentorship and data-proven insights. As automation transforms work, human skills—communication, critical thinking, adaptability—become your competitive advantage. Our platform helps professionals at every level strengthen these irreplaceable capabilities.',
          subtitle: 'Skills That Can\'t Be Automated',
          stats: 'Professionals in mentorship programs report 35% improvement in leadership capabilities and 28% increase in cross-functional collaboration skills.',
          cta: 'Explore professional development →',
          image: techImg
        },
        {
          title: 'DEI',
          heading: 'From Inclusion to Belonging',
          description: 'Transform inclusion into measurable belonging with identity-aligned matching. Equalize access to social capital to support first-generation, working learners, and underrepresented talent. Our platform ensures everyone has access to the networks and guidance that drive career success.',
          subtitle: 'Belonging You Can Measure',
          stats: 'First-generation and underrepresented students paired with identity-aligned mentors show 47% higher engagement and 3.2x improvement in feeling "they belong" at their institution.',
          cta: 'Learn about equity in mentorship →',
          image: scienceGirlImg
        },
        {
          title: 'Workforce Development',
          heading: 'Reskilling That Scales',
          description: 'Power apprenticeships, reskilling, and career advancement with scalable mentorship that connects learners to industry expertise. Whether transitioning careers, upskilling in new technologies, or advancing within their field, workers gain practical guidance from those who\'ve walked the path.',
          subtitle: 'Bridge Skills Gaps with Human Connection',
          stats: 'Workforce development programs with embedded mentorship see 56% faster time-to-productivity and 89% participant satisfaction rates.',
          cta: 'See workforce transformation stories →',
          image: pizzaImg
        }
      ];

  const stages = stageContent.map(s => s.title);

  return (
    <>
      <script dangerouslySetInnerHTML={{__html: `
        (function() {
          function initTabs() {
            const buttons = document.querySelectorAll('.stage-tab-btn');
            const contents = document.querySelectorAll('.stage-content');

            buttons.forEach((btn, idx) => {
              btn.onclick = function() {
                buttons.forEach(b => {
                  b.style.background = 'transparent';
                  b.style.color = 'var(--text-muted)';
                  b.style.boxShadow = 'none';
                  b.style.fontWeight = '500';
                });

                contents.forEach(c => c.style.display = 'none');

                btn.style.background = 'var(--gradient-coral)';
                btn.style.color = 'var(--text-white)';
                btn.style.boxShadow = 'var(--shadow-coral)';
                btn.style.fontWeight = '600';

                if (contents[idx]) contents[idx].style.display = 'grid';
              };
            });

            if (contents[0]) contents[0].style.display = 'grid';
          }

          if (document.readyState === 'loading') {
            document.addEventListener('DOMContentLoaded', initTabs);
          } else {
            setTimeout(initTabs, 100);
          }
        })();
      `}} />

      <section
        ref={elementRef as React.RefObject<HTMLElement>}
        className="stages-section"
        style={{
          padding: 'var(--section-padding-lg) var(--spacing-lg)',
          background: 'var(--bg-white)',
          ...animationStyles.subtleSlideUp(isVisible),
        }}
      >
        <style>{`
          @media (max-width: 768px) {
            .stages-section h2 {
              font-size: 2rem !important;
              margin-bottom: 1.5rem !important;
            }
            .stages-section > div > p {
              font-size: 1rem !important;
              margin-bottom: 2rem !important;
            }
            .stages-section .tabs {
              margin-bottom: 2rem !important;
            }
            .panel-title {
              font-size: 1.75rem !important;
            }
            .panel-description {
              font-size: 0.95rem !important;
            }
            .panel-subtitle {
              font-size: 1.25rem !important;
              margin: 1.5rem 0 1rem !important;
            }
            .panel-more {
              padding: 0.75rem 1.5rem !important;
              font-size: 0.95rem !important;
            }
          }
        `}</style>
        <div className="container">
        <h2 style={{
          fontSize: 'var(--font-size-h2)',
          fontWeight: 700,
          textAlign: 'center',
          marginBottom: '3rem',
          fontFamily: 'var(--font-headline)',
          lineHeight: 'var(--line-height-tight)',
          letterSpacing: 'var(--letter-spacing-tight)',
          color: 'var(--text-primary)'
        }}>
          {fieldValues.heading || 'Mentorship at every stage'}
        </h2>
        <p style={{
          textAlign: 'center',
          fontSize: '1.1rem',
          color: 'var(--text-muted)',
          marginBottom: '4rem',
          maxWidth: 'var(--max-width-prose)',
          margin: '0 auto 4rem'
        }}>
          {fieldValues.subtitle || 'From first-year students to experienced professionals, our platform scales mentorship to drive growth, belonging, and opportunity.'}
        </p>
        <div className="tabs" style={{
          background: 'rgba(255, 251, 248, 0.5)',
          padding: '0.5rem',
          borderRadius: 'var(--radius-lg)',
          marginBottom: '4rem',
          display: 'flex',
          gap: '0.5rem',
          justifyContent: 'center',
          flexWrap: 'wrap'
        }}>
          {stages.map((stage, index) => (
            <button
              key={index}
              type="button"
              className="stage-tab-btn"
              data-tab-index={index}
              style={{
                padding: 'var(--spacing-md) var(--spacing-lg)',
                borderRadius: 'var(--radius-md)',
                fontFamily: 'var(--font-body)',
                fontSize: '1rem',
                border: 'none',
                cursor: 'pointer',
                background: index === 0 ? 'var(--gradient-coral)' : 'transparent',
                color: index === 0 ? 'var(--text-white)' : 'var(--text-muted)',
                transition: 'var(--transition-medium)',
                boxShadow: index === 0 ? 'var(--shadow-coral)' : 'none',
                fontWeight: index === 0 ? 600 : 500,
              }}
            >
              {stage}
            </button>
          ))}
        </div>

        {/* Render ALL content sections - vanilla JS will show/hide them */}
        {stageContent.map((content, index) => (
          <div
            key={index}
            className="stage-content"
            data-content-index={index}
            style={{
              display: index === 0 ? 'grid' : 'none',
              gridTemplateColumns: index % 2 === 0 ? '1.1fr 0.9fr' : '0.9fr 1.1fr',
              gap: '5rem',
              alignItems: 'center',
              maxWidth: 'var(--max-width-xl)',
              margin: '0 auto',
              padding: '0 var(--container-padding)',
              transition: 'var(--transition-medium)'
            }}
          >
            <div>
              <h3 className="panel-title" style={{ fontSize: 'var(--font-size-h3)', fontWeight: 600, marginBottom: '1.25rem', color: 'var(--text-primary)', fontFamily: 'var(--font-headline)', lineHeight: 'var(--line-height-normal)', letterSpacing: 'var(--letter-spacing-tight)' }}>
                {content.heading}
              </h3>
              <p className="panel-description" style={{ fontSize: '1rem', lineHeight: 1.8, color: 'var(--text-muted)', marginBottom: '2rem', maxWidth: 'var(--max-width-prose)' }}>
                {content.description}
              </p>
              <h4 className="panel-subtitle" style={{ fontSize: '1.5rem', margin: '2.5rem 0 1.25rem', color: 'var(--text-primary)', fontFamily: 'var(--font-headline)' }}>
                {content.subtitle}
              </h4>
              <p className="panel-description" style={{ fontSize: '1.05rem', lineHeight: 1.8, color: 'var(--text-muted)' }}>
                {content.stats}
              </p>
              <div style={{ marginTop: '2.5rem' }}>
                <a href="#" className="panel-more" style={{
                  display: 'inline-flex',
                  alignItems: 'center',
                  gap: '0.5rem',
                  padding: '0.875rem 1.75rem',
                  background: 'var(--bg-white)',
                  border: '2px solid var(--primary-blue)',
                  borderRadius: 'var(--radius-md)',
                  fontSize: '1rem',
                  color: 'var(--primary-blue)',
                  textDecoration: 'none',
                  fontWeight: 600,
                  transition: 'var(--transition-bounce)'
                }}>
                  {content.cta}
                </a>
              </div>
            </div>
            <div style={{
              position: 'relative',
              height: '500px',
            }}>
              {/* Star decorative element */}
              <img
                src={starSvg}
                alt=""
                role="presentation"
                loading="lazy"
                style={{
                  position: 'absolute',
                  top: '-15px',
                  right: '-15px',
                  width: '60px',
                  height: '60px',
                  zIndex: 2,
                  opacity: 0.8,
                }}
              />

              {/* Polaroid-style frame */}
              <div
                className="polaroid-frame"
                style={{
                  background: 'var(--bg-white)',
                  padding: '16px',
                  boxShadow: 'var(--shadow-lg)',
                  borderRadius: 'var(--radius-sm)',
                  height: '100%',
                  transform: index % 2 === 0 ? 'rotate(-1deg)' : 'rotate(1deg)',
                  transition: 'var(--transition-smooth)',
                }}>
                <img
                  src={content.image}
                  alt={content.title}
                  style={{
                    width: '100%',
                    height: '100%',
                    objectFit: 'cover',
                    borderRadius: 'var(--radius-sm)'
                  }}
                />
              </div>

              {/* Wedge decorative element */}
              <img
                src={wedgeSvg}
                alt=""
                role="presentation"
                loading="lazy"
                style={{
                  position: 'absolute',
                  bottom: '-10px',
                  left: '-10px',
                  width: '80px',
                  height: '80px',
                  opacity: 0.6,
                  zIndex: 1,
                }}
              />
            </div>
          </div>
        ))}
      </div>
    </section>
    </>
  );
}

export const fields: any = [
  {
    type: 'text',
    name: 'heading',
    label: 'Section Heading',
    default: 'Mentorship at every stage',
  },
  {
    type: 'text',
    name: 'subtitle',
    label: 'Subtitle',
    default: 'From first-year students to experienced professionals, our platform scales mentorship to drive growth, belonging, and opportunity.',
  },
  {
    type: 'group',
    name: 'stages',
    label: 'Stages',
    occurrence: {
      min: 0,
      max: 10,
      default: 0,
    },
    children: [
      {
        type: 'text',
        name: 'tab_title',
        label: 'Tab Title',
        default: 'College Success Ready',
      },
      {
        type: 'text',
        name: 'heading',
        label: 'Content Heading',
        default: 'From First Day to Graduation Day',
      },
      {
        type: 'text',
        name: 'description',
        label: 'Description',
        default: 'Build confidence and belonging early. Use mentorship to bridge the gap from high school to college and ensure every learner persists.',
      },
      {
        type: 'text',
        name: 'subtitle',
        label: 'Subtitle',
        default: 'First-Year Success Starts Here',
      },
      {
        type: 'text',
        name: 'stats',
        label: 'Stats Text',
        default: 'Students with first-year mentors are 2.3x more likely to persist to graduation.',
      },
      {
        type: 'text',
        name: 'cta_text',
        label: 'CTA Button Text',
        default: 'See college success stories →',
      },
      {
        type: 'choice',
        name: 'image_key',
        label: 'Image',
        choices: [
          ['group', 'Group Image'],
          ['girlInOffice', 'Girl in Office'],
          ['tech', 'Tech Image'],
          ['scienceGirl', 'Science Girl'],
          ['pizza', 'Pizza Image'],
        ],
        default: 'group',
      },
    ],
  },
];

export const meta = {
  label: 'Mentorship Stages',
  host_template_types: ['PAGE'],
  categories: ['content'],
};
