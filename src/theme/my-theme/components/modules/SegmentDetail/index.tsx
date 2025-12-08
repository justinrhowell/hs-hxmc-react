import React from 'react';
import {
  ModuleFields,
  TextField,
  ChoiceField,
} from '@hubspot/cms-components/fields';
import { ScrollAnimationScript } from '../../shared/ScrollAnimationScript';
import integrationsSvg from '../../../assets/Integrations.svg';
import smartMatchingSvg from '../../../assets/Smart Matching.svg';
import mentorProfilesSvg from '../../../assets/Mentor Profiles.svg';

interface ProofPoint {
  title: string;
  description: string;
  stats: string[];
}

interface Testimonial {
  quote: string;
  author: string;
}

const defaultContent: Record<string, {
  heading: string;
  subheading: string;
  proofPoints: ProofPoint[];
  testimonials: Testimonial[];
  image: string;
  imagePosition: 'left' | 'right';
}> = {
  'higher-education': {
    heading: 'Higher Education: Retention and Belonging at Scale',
    subheading: 'Transform student success with scalable mentorship infrastructure.',
    image: 'integrations',
    imagePosition: 'right',
    proofPoints: [
      {
        title: 'Transform the Student Experience',
        description: 'Scale personalized support across the full student lifecycle—from first-year engagement to final job placement.',
        stats: ['+6% Retention Lift for program participants', '+8–19% Boost in Belonging', '$7.8M in Operational ROI delivered'],
      },
      {
        title: 'Elevate Career Readiness',
        description: 'Integrate alumni and industry experts to build career clarity and social capital for all learners.',
        stats: ['+30% Increase in Career Confidence', '45% Spike in Career Services Engagement'],
      },
    ],
    testimonials: [
      {
        quote: 'Our experience with Mentor Collective confirms that prioritizing student needs aligns with institutional goals. By choosing the right partners and empowering students to take charge of their own success, we support their achievements and ours.',
        author: '– Dr. Caleb Simmons, Executive Director of Online Education, Arizona Online',
      },
      {
        quote: "We get comments from students asking if they can participate again as a mentor or mention that they're happy to take on additional mentees. It's the enthusiasm and the positive experiences of the mentors that surprised me.",
        author: '– Dr. Lisa Slattery Walker, Associate Provost for Undergraduate Education, University of North Carolina at Charlotte',
      },
    ],
  },
  'emerging-markets': {
    heading: 'Emerging Markets: Workforce & Talent Development',
    subheading: 'Build the workforce of tomorrow with structured mentorship.',
    image: 'smart-matching',
    imagePosition: 'left',
    proofPoints: [
      {
        title: 'Future-Proof Your Talent Pipeline',
        description: 'Use structured mentorship for early-career readiness, onboarding, and continuous upskilling across complex sectors.',
        stats: ['42% Increase in Intern-to-Full-Time Conversion', '2.5x More Likely to feel career-ready'],
      },
      {
        title: 'Accelerate Employee Retention',
        description: 'Embed identity-aligned mentorship to drive engagement and reduce early attrition among diverse and working professionals.',
        stats: ['90–92% Retention for partner programs (vs. 64% national avg)', '$20K+ in Savings per retained teacher for partner districts'],
      },
    ],
    testimonials: [
      {
        quote: 'These connections foster lasting bonds, proving that targeted matching enhances mentorship experiences and builds relationships that can last a lifetime.',
        author: '– Program Manager, Fortune 100 Tech Company',
      },
      {
        quote: "As a technology company, I didn't expect that kind of service at all... Mentor Collective doesn't just offer software but a true partnership that helps us deliver real impact.",
        author: '– Jeff Bieganek, Executive Director, Graduate Business Curriculum Roundtable',
      },
    ],
  },
  'strategic-partnerships': {
    heading: 'Strategic Partnerships: Scale and Credibility',
    subheading: 'Extend your impact through partnership infrastructure.',
    image: 'mentor-profiles',
    imagePosition: 'right',
    proofPoints: [
      {
        title: 'Integrate the Mentorship OS',
        description: 'Partner with us to embed mentorship infrastructure directly into your certification, apprenticeship, or workforce development initiatives.',
        stats: ['70% of Participants plan careers in critical skills gap sectors'],
      },
      {
        title: 'Unify Your Ecosystem',
        description: 'Mobilize industry associations and coalitions to drive multi-site adoption and consistent quality across member organizations.',
        stats: ['Identity-Aligned Matching driven by 10+ years of data and insights', 'Measurable Outcomes that satisfy funder and board requirements'],
      },
    ],
    testimonials: [
      {
        quote: "The program is an exceptional opportunity for students passionate about software and hardware development. There was a distinct sense of belonging that resonated deeply. From that moment on, I knew precisely how I would navigate my professional journey — with invaluable guidance and unwavering support.",
        author: '– Mentee, Harvard University, Class of 2027',
      },
    ],
  },
};

// Geometric shape icons
const proofPointIcons = [
  <svg key="circle" width="20" height="20" viewBox="0 0 20 20" fill="none">
    <circle cx="10" cy="10" r="8" stroke="var(--text-coral)" strokeWidth="2.5" fill="none" />
  </svg>,
  <svg key="diamond" width="20" height="20" viewBox="0 0 20 20" fill="none">
    <rect x="10" y="2" width="11" height="11" rx="2" transform="rotate(45 10 2)" stroke="var(--text-coral)" strokeWidth="2.5" fill="none" />
  </svg>,
  <svg key="triangle" width="20" height="20" viewBox="0 0 20 20" fill="none">
    <path d="M10 3L18 17H2L10 3Z" stroke="var(--text-coral)" strokeWidth="2.5" strokeLinejoin="round" fill="none" />
  </svg>,
  <svg key="square" width="20" height="20" viewBox="0 0 20 20" fill="none">
    <rect x="3" y="3" width="14" height="14" rx="2" stroke="var(--text-coral)" strokeWidth="2.5" fill="none" />
  </svg>,
];

const imageMap: Record<string, string> = {
  'integrations': integrationsSvg,
  'smart-matching': smartMatchingSvg,
  'mentor-profiles': mentorProfilesSvg,
};

export function Component({ fieldValues }: any) {
  const segmentType = fieldValues.segment_type || 'higher-education';
  const content = defaultContent[segmentType] || defaultContent['higher-education'];

  const heading = fieldValues.heading || content.heading;
  const subheading = fieldValues.subheading || content.subheading;
  const imagePosition = fieldValues.image_position || content.imagePosition;
  const selectedImage = fieldValues.image || content.image;

  const proofPoints = (fieldValues.proof_points && fieldValues.proof_points.length > 0)
    ? fieldValues.proof_points.map((p: any) => ({
        title: p.title,
        description: p.description,
        stats: p.stats ? p.stats.split('|').map((s: string) => s.trim()) : [],
      }))
    : content.proofPoints;

  const testimonials = (fieldValues.testimonials && fieldValues.testimonials.length > 0)
    ? fieldValues.testimonials.map((t: any) => ({
        quote: t.quote,
        author: t.author,
      }))
    : content.testimonials;

  // Background color selection
  const bgColorMap: Record<string, string> = {
    'warm': 'var(--gradient-hero)',
    'white': 'var(--bg-white)',
    'light-gray': '#F8F9FA',
  };
  const bgColor = fieldValues.background_color || 'warm';
  const sectionBg = bgColorMap[bgColor] || bgColorMap['warm'];

  return (
    <>
    <style>{`
      @media (max-width: 968px) {
        .segment-detail-content {
          grid-template-columns: 1fr !important;
        }
        .segment-detail-text-col,
        .segment-detail-image-col {
          order: unset !important;
        }
        .segment-detail-image-col {
          order: -1 !important;
        }
        .segment-testimonials-grid {
          grid-template-columns: 1fr !important;
        }
      }
    `}</style>
    <ScrollAnimationScript />
    <section
      className="scroll-animate"
      id={segmentType}
      style={{
        padding: 'var(--section-padding-lg) var(--spacing-lg)',
        background: sectionBg,
      }}
    >
      <div style={{ maxWidth: 'var(--max-width-xl)', margin: '0 auto' }}>
        <div style={{
          display: 'grid',
          gridTemplateColumns: '1fr 1fr',
          gap: 'var(--spacing-3xl)',
          alignItems: 'start',
        }} className="segment-detail-content">
          {/* Text Column */}
          <div
            className="segment-detail-text-col"
            style={{ order: imagePosition === 'left' ? 2 : 1 }}
          >
            {/* Section Title */}
            <h2 style={{
              fontSize: 'var(--font-size-h2)',
              fontWeight: 500,
              lineHeight: 'var(--line-height-tight)',
              letterSpacing: 'var(--letter-spacing-tight)',
              marginBottom: 'var(--spacing-sm)',
              color: 'var(--text-primary)',
              fontFamily: 'var(--font-headline)',
            }}>
              {heading}
            </h2>

            <p style={{
              fontSize: 'var(--font-size-body-lg)',
              fontWeight: 500,
              lineHeight: 'var(--line-height-normal)',
              marginBottom: 'var(--spacing-xl)',
              color: 'var(--text-secondary)',
              fontFamily: 'var(--font-headline)',
            }}>
              {subheading}
            </p>

            {/* Proof Points List */}
            <div style={{ display: 'flex', flexDirection: 'column', gap: 'var(--spacing-xl)' }}>
              {proofPoints.map((point: ProofPoint, index: number) => (
                <div
                  key={index}
                  style={{ display: 'flex', gap: 'var(--spacing-md)', alignItems: 'flex-start' }}
                  className="scroll-animate"
                  data-delay={index * 100}
                >
                  <div style={{
                    flexShrink: 0,
                    width: '40px',
                    height: '40px',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    background: 'rgba(239, 71, 111, 0.08)',
                    borderRadius: 'var(--radius-md)',
                  }}>
                    {proofPointIcons[index % proofPointIcons.length]}
                  </div>
                  <div>
                    <h3 style={{
                      fontSize: 'var(--font-size-large)',
                      fontWeight: 500,
                      color: 'var(--text-primary)',
                      marginBottom: 'var(--spacing-xs)',
                      fontFamily: 'var(--font-headline)',
                    }}>
                      {point.title}
                    </h3>
                    <p style={{
                      fontSize: 'var(--font-size-base)',
                      color: 'var(--text-muted)',
                      lineHeight: 'var(--line-height-normal)',
                      margin: 0,
                      marginBottom: 'var(--spacing-sm)',
                    }}>
                      {point.description}
                    </p>
                    {/* Stats as styled bullet points */}
                    <div style={{ display: 'flex', flexDirection: 'column', gap: 'var(--spacing-xs)' }}>
                      {point.stats.map((stat: string, statIndex: number) => (
                        <div
                          key={statIndex}
                          style={{
                            display: 'flex',
                            alignItems: 'flex-start',
                            gap: 'var(--spacing-sm)',
                          }}
                        >
                          <span style={{
                            color: 'var(--text-coral)',
                            fontWeight: 700,
                            fontSize: 'var(--font-size-body-lg)',
                            lineHeight: 1,
                          }}>→</span>
                          <span style={{
                            fontSize: 'var(--font-size-base)',
                            fontWeight: 600,
                            color: 'var(--text-coral)',
                            lineHeight: 'var(--line-height-tight)',
                          }}>
                            {stat}
                          </span>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Image Column */}
          <div
            className="segment-detail-image-col"
            style={{
              order: imagePosition === 'left' ? 1 : 2,
              textAlign: 'center',
            }}
          >
            <div className="scroll-animate" data-delay="200">
              <img
                src={fieldValues.custom_image?.src || imageMap[selectedImage] || integrationsSvg}
                alt={fieldValues.custom_image?.alt || `${heading} illustration`}
                style={{
                  width: '100%',
                  height: 'auto',
                  maxWidth: '500px',
                  display: 'block',
                  margin: '0 auto',
                }}
              />
            </div>
          </div>
        </div>

        {/* Testimonials Row - Below the two-column grid */}
        {testimonials && testimonials.length > 0 && (
          <div
            className="segment-testimonials-grid"
            style={{
              display: 'grid',
              gridTemplateColumns: testimonials.length === 1 ? '1fr' : 'repeat(2, 1fr)',
              gap: 'var(--spacing-xl)',
              marginTop: 'var(--spacing-3xl)',
              maxWidth: testimonials.length === 1 ? '800px' : '100%',
              marginLeft: testimonials.length === 1 ? 'auto' : undefined,
              marginRight: testimonials.length === 1 ? 'auto' : undefined,
            }}
          >
            {testimonials.map((testimonial: Testimonial, index: number) => (
              <div
                key={index}
                className="scroll-animate"
                data-delay={300 + index * 100}
                style={{
                  background: bgColor === 'white' ? 'var(--gradient-hero)' : 'var(--bg-white)',
                  borderRadius: 'var(--radius-xl)',
                  padding: 'var(--spacing-xl)',
                  textAlign: 'left',
                  borderLeft: '4px solid var(--text-coral)',
                }}
              >
                <p style={{
                  fontSize: 'var(--font-size-body)',
                  color: 'var(--text-secondary)',
                  lineHeight: 'var(--line-height-relaxed)',
                  fontStyle: 'italic',
                  margin: 0,
                  marginBottom: 'var(--spacing-md)',
                }}>
                  "{testimonial.quote}"
                </p>
                <p style={{
                  fontSize: 'var(--font-size-small)',
                  fontWeight: 600,
                  color: 'var(--text-muted)',
                  margin: 0,
                }}>
                  {testimonial.author}
                </p>
              </div>
            ))}
          </div>
        )}
      </div>
    </section>
    </>
  );
}

export const fields: any = [
  {
    type: 'choice',
    name: 'segment_type',
    label: 'Segment Type',
    choices: [
      ['higher-education', 'Higher Education'],
      ['emerging-markets', 'Emerging Markets'],
      ['strategic-partnerships', 'Strategic Partnerships'],
    ],
    default: 'higher-education',
  },
  {
    type: 'choice',
    name: 'background_color',
    label: 'Background Color',
    choices: [
      ['warm', 'Warm Cream (Hero Gradient)'],
      ['white', 'White'],
      ['light-gray', 'Light Gray'],
    ],
    default: 'warm',
  },
  {
    type: 'text',
    name: 'heading',
    label: 'Section Heading (optional - uses default if empty)',
    default: '',
  },
  {
    type: 'text',
    name: 'subheading',
    label: 'Subheading (optional - uses default if empty)',
    default: '',
  },
  {
    type: 'choice',
    name: 'image_position',
    label: 'Image Position',
    choices: [
      ['left', 'Left'],
      ['right', 'Right'],
    ],
    default: 'right',
  },
  {
    type: 'image',
    name: 'custom_image',
    label: 'Custom Image (upload your own)',
  },
  {
    type: 'choice',
    name: 'image',
    label: 'Illustration (fallback if no custom image)',
    choices: [
      ['integrations', 'Integrations'],
      ['smart-matching', 'Smart Matching'],
      ['mentor-profiles', 'Mentor Profiles'],
    ],
    default: 'integrations',
  },
  {
    type: 'group',
    name: 'proof_points',
    label: 'Proof Points (leave empty for defaults)',
    occurrence: {
      min: 0,
      max: 4,
      default: 0,
    },
    children: [
      {
        type: 'text',
        name: 'title',
        label: 'Title',
        default: 'Transform the Student Experience',
      },
      {
        type: 'text',
        name: 'description',
        label: 'Description',
        default: 'Scale personalized support across the full student lifecycle.',
      },
      {
        type: 'text',
        name: 'stats',
        label: 'Stats (separate with | character)',
        default: '+6% Retention Lift | +8–19% Boost in Belonging',
      },
    ],
  },
  {
    type: 'group',
    name: 'testimonials',
    label: 'Testimonials (leave empty for defaults)',
    occurrence: {
      min: 0,
      max: 4,
      default: 0,
    },
    children: [
      {
        type: 'text',
        name: 'quote',
        label: 'Quote',
        default: 'Testimonial quote goes here.',
      },
      {
        type: 'text',
        name: 'author',
        label: 'Author',
        default: '– Author Name, Title, Organization',
      },
    ],
  },
];

export const meta = {
  label: 'Segment Detail',
};
