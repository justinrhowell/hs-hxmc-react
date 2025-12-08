import React from 'react';
import {
  ModuleFields,
  TextField,
} from '@hubspot/cms-components/fields';
import girlInOfficeImg from '../../../assets/girl-in-office.jpg';
import groupImg from '../../../assets/group.png';
import techImg from '../../../assets/tech.png';
import scienceGirlImg from '../../../assets/science-girl.jpg';
import pizzaImg from '../../../assets/pizza.png';
// Stories images for tabs
import storiesCollegeImg from '../../../assets/stories-college.jpg';
import storiesTalentImg from '../../../assets/stories-talent.jpg';
import storiesProfDevImg from '../../../assets/stories-profdev.jpg';
import storiesDeiImg from '../../../assets/stories-dei.jpg';
import storiesWorkforceImg from '../../../assets/stories-workforce.jpg';
import toccaraImg from '../../../assets/Toccara - College Career Success.jpg';
import storiesNicImg from '../../../assets/Stories_Nic.jpg';
// Decorative elements
import blueArrows from '../../../assets/blue-arrows.svg';
import yellowStar from '../../../assets/yellow-star.svg';
import { ScrollAnimationScript } from '../../shared/ScrollAnimationScript';

interface StageContent {
  title: string;
  heading: string;
  description: string;
  subtitle: string;
  stats: string;
  cta: string;
  ctaUrl?: string;
  image: string;
}

export function Component({ fieldValues }: any) {
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
          title: 'Talent Acquisition',
          heading: 'Mentorship Made Maya Job-Ready',
          description: 'Embed mentorship into internships, apprenticeships, and project-based learning to grow your own talent pipeline.\n\nMaya, a recent college graduate, did everything right—good grades and a polished résumé. Yet after 100+ applications she had no offers, saying, "I don\'t think I\'ll ever ever get a job." Her new mentorship relationship provided the clear path and crucial social network she needed, transforming her despair into confident success.',
          subtitle: 'Connection is the Missing Link',
          stats: 'Mentees see a 21% increase in comfort asking for help from established professionals and an 18% boost in self-efficacy. Intern-to-full-time conversion rates increase by 42%.',
          cta: 'Explore more stories →',
          ctaUrl: 'https://www.mentorcollective.org/blog/the-fragmented-dream-and-the-spark-we-need-why-mentorship-is-the-essential-infrastructure',
          image: storiesTalentImg
        },
        {
          title: 'College Success Ready',
          heading: 'Toccara - College Career Success',
          description: 'Build confidence and belonging early. Use mentorship to bridge the gap from high school to college and ensure every learner persists.\n\nToccara\'s college dream quickly turned into a nightmare as she became profoundly homesick after moving cross-country. Six months in, feeling isolated and ready to transfer back home, a friend mentioned she should join the mentorship program for first-years. Matched with a relatable peer mentor who understood her struggles, Toccara received guidance on the myriad of campus resources available and clubs that matched her interests. The simple act of peer support transformed isolation into belonging, ultimately leading Toccara to graduate four years later.',
          subtitle: 'Activating Campus Resources',
          stats: 'Mentorship delivers a +8–19% boost in sense of belonging, addressing key concerns like academic struggles and homesickness. Mentees are +45% more likely to engage with campus resources.',
          cta: 'Explore more stories →',
          ctaUrl: 'https://www.mentorcollective.org/blog/the-fragmented-dream-and-the-spark-we-need-why-mentorship-is-the-essential-infrastructure',
          image: toccaraImg
        },
        {
          title: 'Adult Learner Success',
          heading: 'Anya Transforms Her Struggle into Success',
          description: 'Empower adult learners by providing accessible, AI-supported human connections that respect their time.\n\nAnya, a working mother attending community college classes after hours, felt invisible and isolated. Juggling coursework and a family, she couldn\'t attend regular 9-to-5 advising sessions. Joining her school\'s mentorship program connected her with a mentor who could see Anya and her daily struggle, becoming Anya\'s personal lifeline. Anya moved from fearing she was "failing as both a student and a parent" to celebrating graduation day with her family one year later.',
          subtitle: 'Quantifying Persistence',
          stats: 'Students rank "more personal support and one-on-one interaction" as the second most effective way to improve the overall student experience. Learners engaged in peer mentoring are 86% likely to expect to re-enroll the next year.',
          cta: 'Explore more stories →',
          ctaUrl: 'https://www.mentorcollective.org/blog/the-fragmented-dream-and-the-spark-we-need-why-mentorship-is-the-essential-infrastructure',
          image: storiesCollegeImg
        },
        {
          title: 'Professional Development',
          heading: 'Future-Proofing Sara\'s Career',
          description: 'Develop durable skills and leadership for the AI era through continuous mentorship and data-proven insights.\n\nSara, an early-career researcher in a fast-paced lab, excelled technically but struggled to transition into a leadership role. Her supervisor recognized that Sara needed to develop distinctly human skills—such as ethical reasoning and complex problem solving—that her technical training did not address. To support her growth, the lab instituted a mentorship program, providing Sara with the structured guidance she needed to cultivate these durable skills. She rose through the ranks to become a confident team leader, winning a top research award in her field.',
          subtitle: 'Retain Your Employees Through Mentorship',
          stats: 'Mentorship can lead to a +6% retention lift and a +30% increase in career confidence. Professionals with access to mentorship at their organizations are more likely to report high job satisfaction, creating resilient leaders for the future.',
          cta: 'Explore more stories →',
          ctaUrl: 'https://www.mentorcollective.org/blog/the-fragmented-dream-and-the-spark-we-need-why-mentorship-is-the-essential-infrastructure',
          image: storiesProfDevImg
        },
        {
          title: 'DEI',
          heading: 'Identity-Aligned Mentorship Moved Jordan Forward',
          description: 'Transform inclusion into measurable belonging with identity-aligned matching.\n\nJordan, a first-generation Black-Latino student, felt overwhelmed and intimidated. Unsure of campus resources and hesitant to seek help, he worried he didn\'t belong. Joining the mentorship program gave him a relatable anchor—he could see himself in his mentor, who taught him how to navigate "the hidden curriculum". His mentor transformed his uncertainty into confident, connected engagement.',
          subtitle: 'Belonging You Can Measure',
          stats: 'Mentorship leads to a +8–19% boost in sense of belonging and a +18% boost in self-efficacy. Mentors who reflect students\' identities and experiences can be a powerful catalyst for fostering a sense of belonging.',
          cta: 'Explore more stories →',
          ctaUrl: 'https://www.mentorcollective.org/blog/the-fragmented-dream-and-the-spark-we-need-why-mentorship-is-the-essential-infrastructure',
          image: storiesDeiImg
        },
        {
          title: 'Workforce Development',
          heading: 'Nic\'s Path from Apprentice to Team Lead',
          description: 'Accelerate apprenticeships, reskilling, and career advancement with scalable mentorship that connects learners to industry expertise.\n\nNic, a skilled apprentice in a high-demand trade, risked becoming just a number in a transactional workforce. His on-the-ground supervisors lacked the time to help him develop the durable skills necessary for long-term career growth. By being paired with a mentor, Nic gained the essential support he needed, transforming his communication skills and setting him on a path to become the organization\'s youngest Project Manager.',
          subtitle: 'Drive Work-Based Conversion',
          stats: 'Mentorship accelerates the conversion of early-career talent, delivering a 42% increase in intern-to-full-time conversion for our Fortune 100 partner. Interns who connect with a mentor are 86% more likely to cite mentorship as the primary factor in accepting a job offer.',
          cta: 'Explore more stories →',
          ctaUrl: 'https://www.mentorcollective.org/blog/the-fragmented-dream-and-the-spark-we-need-why-mentorship-is-the-essential-infrastructure',
          image: storiesNicImg
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
                  b.style.color = 'var(--text-primary)';
                  b.style.boxShadow = 'none';
                  b.style.fontWeight = '500';
                });

                contents.forEach(c => c.style.display = 'none');

                btn.style.background = 'var(--primary-blue)';
                btn.style.color = 'var(--text-white)';
                btn.style.boxShadow = 'var(--shadow-md)';
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

      <ScrollAnimationScript />
      <section
        className="stages-section scroll-animate"
        style={{
          padding: 'var(--section-padding-lg) var(--spacing-lg)',
          background: 'var(--bg-white)',
        }}
      >
        <style>{`
          .stage-tab-btn:focus {
            outline: none !important;
            box-shadow: none !important;
          }
          @media (max-width: 968px) {
            .stages-section .tabs {
              flex-direction: column !important;
              gap: 0.5rem !important;
              padding: 0.75rem !important;
            }
            .stages-section .stage-tab-btn {
              width: 100% !important;
              text-align: center !important;
              padding: 0.75rem 1rem !important;
            }
            .stages-section .stage-content {
              grid-template-columns: 1fr !important;
              gap: 2rem !important;
              padding: 1rem 0 !important;
            }
            .stages-section .stage-content > div:last-child {
              order: -1 !important;
              padding: 20px 10px !important;
            }
            .stages-section .stage-content > div:last-child img[aria-hidden="true"]:first-of-type {
              width: 80px !important;
              left: 0 !important;
            }
            .stages-section .stage-content > div:last-child img[aria-hidden="true"]:last-of-type {
              width: 70px !important;
              bottom: -10px !important;
              right: 0 !important;
            }
          }
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
              margin-bottom: 1.5rem !important;
            }
            .panel-title {
              font-size: 1.5rem !important;
            }
            .panel-description {
              font-size: 0.95rem !important;
            }
            .panel-subtitle {
              font-size: 1.15rem !important;
              margin: 1.5rem 0 1rem !important;
            }
            .panel-more {
              padding: 0.75rem 1.5rem !important;
              font-size: 0.95rem !important;
            }
          }
          @media (max-width: 480px) {
            .stages-section h2 {
              font-size: 1.75rem !important;
            }
            .panel-title {
              font-size: 1.35rem !important;
            }
            .stages-section .stage-tab-btn {
              font-size: 0.9rem !important;
            }
          }
        `}</style>
        <div style={{ maxWidth: '1440px', margin: '0 auto', padding: '0 var(--spacing-lg)' }}>
        <h2 style={{
          fontSize: 'var(--font-size-h2)',
          fontWeight: 500,
          textAlign: 'center',
          marginBottom: 'var(--spacing-md)',
          fontFamily: 'var(--font-headline)',
          lineHeight: 'var(--line-height-tight)',
          letterSpacing: 'var(--letter-spacing-tight)',
          color: 'var(--text-primary)'
        }}>
          {fieldValues.heading || 'Mentorship at every stage'}
        </h2>
        <p style={{
          textAlign: 'center',
          fontSize: 'var(--font-size-body-lg)',
          color: 'var(--text-muted)',
          marginBottom: 'var(--spacing-2xl)',
          maxWidth: 'var(--max-width-prose)',
          margin: '0 auto var(--spacing-2xl)'
        }}>
          {fieldValues.subtitle || 'From first-year students to experienced professionals, our platform scales mentorship to drive growth, belonging, and opportunity.'}
        </p>
        <div style={{ textAlign: 'center', marginBottom: 'var(--spacing-2xl)' }}>
          <div className="tabs" style={{
            background: 'var(--bg-light)',
            padding: 'var(--spacing-xs)',
            borderRadius: 'var(--radius-lg)',
            display: 'inline-flex',
            gap: '4px',
            justifyContent: 'center',
            flexWrap: 'nowrap',
          }}>
            {stages.map((stage, index) => (
              <button
                key={index}
                type="button"
                className="stage-tab-btn"
                data-tab-index={index}
                style={{
                  padding: 'var(--spacing-sm) var(--spacing-md)',
                  borderRadius: 'var(--radius-md)',
                  fontFamily: 'var(--font-body)',
                  fontSize: 'var(--font-size-small)',
                  border: 'none',
                  cursor: 'pointer',
                  background: index === 0 ? 'var(--primary-blue)' : 'transparent',
                  color: index === 0 ? 'var(--text-white)' : 'var(--text-primary)',
                  transition: 'var(--transition-medium)',
                  boxShadow: index === 0 ? 'var(--shadow-md)' : 'none',
                  fontWeight: index === 0 ? 600 : 500,
                  whiteSpace: 'nowrap',
                }}
              >
                {stage}
              </button>
            ))}
          </div>
        </div>

        {/* Render ALL content sections - vanilla JS will show/hide them */}
        {stageContent.map((content, index) => (
          <div
            key={index}
            className="stage-content"
            data-content-index={index}
            style={{
              display: index === 0 ? 'grid' : 'none',
              gridTemplateColumns: '1fr 1fr',
              gap: 'var(--spacing-3xl)',
              alignItems: 'center',
              maxWidth: '1440px',
              margin: '0 auto',
              padding: 'var(--spacing-xl) 0',
              transition: 'var(--transition-medium)'
            }}
          >
            <div>
              <h3 className="panel-title" style={{ fontSize: 'var(--font-size-h3)', fontWeight: 500, marginBottom: 'var(--spacing-md)', color: 'var(--text-primary)', fontFamily: 'var(--font-headline)', lineHeight: 'var(--line-height-normal)', letterSpacing: 'var(--letter-spacing-tight)' }}>
                {content.heading}
              </h3>
              {/* Lead-in paragraph - first line stands out */}
              <p className="panel-lead" style={{ fontSize: 'var(--font-size-body-lg)', lineHeight: 'var(--line-height-relaxed)', color: 'var(--text-secondary)', marginBottom: 'var(--spacing-md)', maxWidth: 'var(--max-width-prose)', fontWeight: 500 }}>
                {content.description.split('\n\n')[0]}
              </p>
              {/* Story paragraph */}
              <p className="panel-description" style={{ fontSize: 'var(--font-size-body)', lineHeight: 'var(--line-height-relaxed)', color: 'var(--text-muted)', marginBottom: 'var(--spacing-xl)', maxWidth: 'var(--max-width-prose)' }}>
                {content.description.split('\n\n').slice(1).join('\n\n')}
              </p>
              <h4 className="panel-subtitle" style={{ fontSize: 'var(--font-size-h4)', fontWeight: 500, margin: 'var(--spacing-xl) 0 var(--spacing-md)', color: 'var(--text-primary)', fontFamily: 'var(--font-headline)' }}>
                {content.subtitle}
              </h4>
              <p className="panel-description" style={{ fontSize: 'var(--font-size-body)', lineHeight: 'var(--line-height-relaxed)', color: 'var(--text-muted)' }}>
                {content.stats}
              </p>
              <div style={{ marginTop: 'var(--spacing-xl)' }}>
                <a href={content.ctaUrl || '#'} className="panel-more" style={{
                  display: 'inline-flex',
                  alignItems: 'center',
                  gap: 'var(--spacing-xs)',
                  padding: 'var(--btn-padding)',
                  background: 'var(--bg-white)',
                  border: '2px solid var(--primary-blue)',
                  borderRadius: 'var(--radius-full)',
                  fontSize: 'var(--font-size-body)',
                  color: 'var(--primary-blue)',
                  textDecoration: 'none',
                  fontWeight: 600,
                  transition: 'var(--transition-medium)'
                }}>
                  {content.cta}
                </a>
              </div>
            </div>
            <div style={{
              position: 'relative',
              paddingTop: '30px',
              paddingRight: '20px',
              paddingLeft: '20px',
              paddingBottom: '20px',
            }}>
              {/* Blue arrows - top left */}
              <img
                src={blueArrows}
                alt=""
                aria-hidden="true"
                style={{
                  position: 'absolute',
                  top: 0,
                  left: '-10px',
                  width: '120px',
                  height: 'auto',
                  zIndex: 1,
                }}
              />

              {/* Main image */}
              <img
                src={content.image}
                alt={content.title}
                style={{
                  width: '100%',
                  height: 'auto',
                  borderRadius: '24px',
                  display: 'block',
                  position: 'relative',
                  zIndex: 2,
                  boxShadow: '0 25px 50px -12px rgba(0, 0, 0, 0.15)',
                }}
                loading="lazy"
              />

              {/* Yellow star - bottom right */}
              <img
                src={yellowStar}
                alt=""
                aria-hidden="true"
                style={{
                  position: 'absolute',
                  bottom: '-20px',
                  right: '-20px',
                  width: '100px',
                  height: 'auto',
                  zIndex: 3,
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
