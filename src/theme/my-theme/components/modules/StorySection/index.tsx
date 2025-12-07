import React from 'react';
import { ScrollAnimationScript } from '../../shared/ScrollAnimationScript';
import mentorProfilesSvg from '../../../assets/Mentor Profiles.svg';

export function Component({ fieldValues }: any) {
  // Default testimonials
  const defaultTestimonials = [
    { quote: 'Every conversation with [my mentor] is very insightful and leaves me with several ideas of how to approach future conversations with my supervisors regarding my growth at my organization.', author: '–Mentee, UPCEA 2024', color: 'coral' },
    { quote: 'I feel much more confident in my ability to provide support to a mentee as a result of this training. It was very thorough and gave insights into how to foster a positive relationship with a mentee and share resources with them.', author: '– Desiree F., Mentor, Lehman College, CUNY', color: 'blue' },
  ];

  // Use custom testimonials if provided
  const customTestimonials = fieldValues.testimonials || [];
  const testimonials = customTestimonials.length > 0
    ? customTestimonials.map((t: any) => ({
        quote: t.quote || 'Testimonial quote',
        author: t.author || '– Author Name',
        color: t.color || 'coral',
      }))
    : defaultTestimonials;
  return (
    <>
    <style>{`
      @media (max-width: 968px) {
        .story-top-row {
          grid-template-columns: 1fr !important;
        }
        .story-quotes-row {
          grid-template-columns: 1fr !important;
        }
      }
    `}</style>
    <ScrollAnimationScript />
    <section
      className="scroll-animate"
      style={{
        padding: 'var(--section-padding-lg) var(--spacing-lg)',
        background: 'var(--bg-white)',
      }}
    >
      <div style={{ maxWidth: 'var(--max-width-xl)', margin: '0 auto' }}>
        {/* Top Row - Text + Image */}
        <div style={{
          display: 'grid',
          gridTemplateColumns: '1.2fr 0.8fr',
          gap: 'var(--spacing-3xl)',
          alignItems: 'center',
          marginBottom: 'var(--spacing-2xl)',
        }} className="story-top-row">
          {/* Left Column - Story Content */}
          <div>
            <h2 style={{
              fontSize: 'var(--font-size-h2)',
              fontWeight: 500,
              lineHeight: 'var(--line-height-tight)',
              letterSpacing: 'var(--letter-spacing-tight)',
              marginBottom: 'var(--spacing-lg)',
              color: 'var(--text-primary)',
              fontFamily: 'var(--font-headline)',
            }}>
              {fieldValues.title || "Confidence Sparked Noah's Future"}
            </h2>

            <div
              style={{
                fontSize: 'var(--font-size-base)',
                color: 'var(--text-secondary)',
                lineHeight: 'var(--line-height-relaxed)',
                marginBottom: 'var(--spacing-md)',
              }}
              dangerouslySetInnerHTML={{
                __html: fieldValues.description || 'Noah, an early-career engineer, had been matched with a mentor but struggled to send that first message. His lack of confidence made him feel he was wasting his mentor\'s time, thinking, "I don\'t know what to ask." This feeling of uncertainty is familiar, as 74% of mentees delay reaching out to a mentor.'
              }}
            />

            <div
              style={{
                fontSize: 'var(--font-size-base)',
                color: 'var(--text-secondary)',
                lineHeight: 'var(--line-height-relaxed)',
                marginBottom: 'var(--spacing-md)',
              }}
              dangerouslySetInnerHTML={{
                __html: fieldValues.description2 || 'The in-app Conversation Sparks feature delivered personalized prompts right to his dashboard, providing the perfect opening questions. The conversation ignited instantly, deepening the relationship, and transforming his hesitation into professional momentum.'
              }}
            />

            <div
              style={{
                fontSize: 'var(--font-size-base)',
                color: 'var(--text-secondary)',
                lineHeight: 'var(--line-height-relaxed)',
              }}
              dangerouslySetInnerHTML={{
                __html: fieldValues.description3 || 'Participants with access to these tools ultimately connect more often, and when participants don\'t engage, mentorship can\'t deliver results. Engagement is a crucial indicator of future success: higher retention, more confidence, and accelerated career mobility.'
              }}
            />
          </div>

          {/* Right Column - Mentor Profiles Illustration */}
          <div
            className="scroll-animate"
            data-delay="200"
            style={{
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
            }}
          >
            <img
              src={mentorProfilesSvg}
              alt="Mentor profiles illustration showing mentor-mentee connections"
              style={{
                width: '100%',
                height: 'auto',
                maxWidth: '450px',
                display: 'block',
              }}
            />
          </div>
        </div>

        {/* Bottom Row - Testimonial Quote Boxes */}
        <div style={{
          display: 'grid',
          gridTemplateColumns: `repeat(${Math.min(testimonials.length, 2)}, 1fr)`,
          gap: 'var(--spacing-xl)',
        }} className="story-quotes-row">
          {testimonials.map((testimonial: any, index: number) => (
            <div
              key={index}
              style={{
                background: 'linear-gradient(135deg, rgba(255, 255, 255, 0.95) 0%, rgba(255, 251, 248, 0.9) 100%)',
                padding: 'var(--spacing-xl)',
                borderLeft: `4px solid ${testimonial.color === 'blue' ? 'var(--secondary-blue)' : 'var(--text-coral)'}`,
                borderRadius: 'var(--radius-lg)',
                boxShadow: '0 8px 32px rgba(0, 0, 0, 0.08)',
              }}
            >
              <p style={{
                fontSize: 'var(--font-size-body)',
                fontStyle: 'italic',
                color: 'var(--text-secondary)',
                lineHeight: 'var(--line-height-relaxed)',
                margin: '0 0 var(--spacing-md) 0',
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
      </div>
    </section>
    </>
  );
}

export const fields: any = [
  {
    type: 'text',
    name: 'title',
    label: 'Story Title',
    default: "Confidence Sparked Noah's Future",
  },
  {
    type: 'richtext',
    name: 'description',
    label: 'Story Description (Paragraph 1)',
    default: 'Noah, an early-career engineer, had been matched with a mentor but struggled to send that first message. His lack of confidence made him feel he was wasting his mentor\'s time, thinking, "I don\'t know what to ask." This feeling of uncertainty is familiar, as 74% of mentees delay reaching out to a mentor.',
  },
  {
    type: 'richtext',
    name: 'description2',
    label: 'Story Description (Paragraph 2)',
    default: 'The in-app Conversation Sparks feature delivered personalized prompts right to his dashboard, providing the perfect opening questions. The conversation ignited instantly, deepening the relationship, and transforming his hesitation into professional momentum.',
  },
  {
    type: 'richtext',
    name: 'description3',
    label: 'Story Description (Paragraph 3)',
    default: "Participants with access to these tools ultimately connect more often, and when participants don't engage, mentorship can't deliver results. Engagement is a crucial indicator of future success: higher retention, more confidence, and accelerated career mobility.",
  },
  {
    type: 'group',
    name: 'testimonials',
    label: 'Testimonials',
    help_text: 'Edit testimonials. Leave empty to use defaults.',
    occurrence: {
      min: 0,
      max: 6,
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
        default: '– Author Name, Title',
      },
      {
        type: 'choice',
        name: 'color',
        label: 'Accent Color',
        choices: [
          ['coral', 'Coral'],
          ['blue', 'Blue'],
        ],
        default: 'coral',
      },
    ],
  },
];

export const meta = {
  label: 'Story Section',
};
