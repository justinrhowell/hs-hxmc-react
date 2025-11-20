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
  // No React state - using vanilla JS and CSS for tabs

  const stages = [
    'College Success Ready',
    'Talent Acquisition',
    'Professional Development',
    'DEI',
    'Workforce Development'
  ];

  const stageContent: StageContent[] = [
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
                  b.style.color = '#666';
                  b.style.boxShadow = 'none';
                  b.style.fontWeight = '500';
                });

                contents.forEach(c => c.style.display = 'none');

                btn.style.background = 'linear-gradient(135deg, #FF4B7E 0%, #FF6B9D 100%)';
                btn.style.color = 'white';
                btn.style.boxShadow = '0 4px 16px rgba(255, 75, 126, 0.3)';
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

      <section className="stages-section" style={{ padding: '80px 20px', background: 'white' }}>
        <div className="container">
        <h2 style={{
          fontSize: '2.5rem',
          fontWeight: 500,
          textAlign: 'center',
          marginBottom: '3rem',
          fontFamily: 'var(--font-headline)',
          color: '#1a1a1a'
        }}>
          Mentorship at every <span className="text-gradient">stage</span>
        </h2>
        <p style={{
          textAlign: 'center',
          fontSize: '1.05rem',
          color: '#6B7280',
          marginBottom: '4rem',
          maxWidth: '700px',
          margin: '0 auto 4rem'
        }}>
          From first-year students to experienced professionals, our platform scales mentorship to drive growth, belonging, and opportunity.
        </p>
        <div className="tabs" style={{
          background: 'rgba(255, 251, 248, 0.5)',
          padding: '0.5rem',
          borderRadius: '16px',
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
                padding: '1rem 2rem',
                borderRadius: '12px',
                fontFamily: 'var(--font-body)',
                fontSize: '1rem',
                border: 'none',
                cursor: 'pointer',
                background: index === 0 ? 'linear-gradient(135deg, #FF4B7E 0%, #FF6B9D 100%)' : 'transparent',
                color: index === 0 ? 'white' : '#666',
                transition: 'all 0.3s ease',
                boxShadow: index === 0 ? '0 4px 16px rgba(255, 75, 126, 0.3)' : 'none',
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
              gridTemplateColumns: '1fr 1fr',
              gap: '5rem',
              alignItems: 'center',
              maxWidth: '1200px',
              margin: '0 auto',
              padding: '0 1.5rem',
              transition: 'opacity 0.3s ease'
            }}
          >
            <div>
              <h3 className="panel-title" style={{ fontSize: '2rem', marginBottom: '1.25rem', color: '#1a1a1a', fontFamily: 'var(--font-headline)' }}>
                {content.heading}
              </h3>
              <p className="panel-description" style={{ fontSize: '1.05rem', lineHeight: 1.8, color: '#6B7280', marginBottom: '2rem' }}>
                {content.description}
              </p>
              <h4 className="panel-subtitle" style={{ fontSize: '1.5rem', margin: '2.5rem 0 1.25rem', color: '#1a1a1a', fontFamily: 'var(--font-headline)' }}>
                {content.subtitle}
              </h4>
              <p className="panel-description" style={{ fontSize: '1.05rem', lineHeight: 1.8, color: '#6B7280' }}>
                {content.stats}
              </p>
              <div style={{ marginTop: '2.5rem' }}>
                <a href="#" className="panel-more" style={{
                  display: 'inline-flex',
                  alignItems: 'center',
                  gap: '0.5rem',
                  padding: '0.875rem 1.75rem',
                  background: 'white',
                  border: '2px solid var(--primary-blue)',
                  borderRadius: '12px',
                  fontSize: '1rem',
                  color: 'var(--primary-blue)',
                  textDecoration: 'none',
                  fontWeight: 600,
                  transition: 'all 0.4s cubic-bezier(0.34, 1.56, 0.64, 1)'
                }}>
                  {content.cta}
                </a>
              </div>
            </div>
            <div style={{
              position: 'relative',
              height: '500px',
              borderRadius: '20px',
              overflow: 'hidden'
            }}>
              <img
                src={content.image}
                alt={content.title}
                style={{
                  width: '100%',
                  height: '100%',
                  objectFit: 'cover',
                  borderRadius: '20px'
                }}
              />
              <img
                src={wedgeSvg}
                alt="Wedge decoration"
                style={{
                  position: 'absolute',
                  bottom: '-10px',
                  right: '-10px',
                  width: '120px',
                  height: '120px',
                  opacity: 0.6
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

export const fields = (
  <ModuleFields>
    <TextField
      name="heading"
      label="Section Heading"
      default="The Mentorship Journey"
    />
  </ModuleFields>
);

export const meta = {
  label: 'Mentorship Stages',
  host_template_types: ['PAGE'],
  categories: ['content'],
};
