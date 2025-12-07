import React from 'react';
import { ScrollAnimationScript } from '../../shared/ScrollAnimationScript';

interface Quote {
  quote: string;
  author: string;
  role: string;
  type: 'mentee' | 'mentor';
}

const defaultQuotes: Quote[] = [
  {
    quote: "My mentor has been a great help in my professional development. He's helped me with my resume, my LinkedIn, and my general networking skills. It's a lot less scary to reach out to people when you have someone in your corner to encourage you.",
    author: "Mentee",
    role: "MC Participant, 2024",
    type: 'mentee',
  },
  {
    quote: "I learned a lot from my mentor about how to navigate my career path and build my professional network. She helped me identify people to reach out to and even reviewed the emails I sent. I wouldn't have known where to start without her.",
    author: "Mentee",
    role: "MC Participant, 2025",
    type: 'mentee',
  },
];

export function Component({ fieldValues }: any) {
  const quotes = (fieldValues.quotes && fieldValues.quotes.length > 0)
    ? fieldValues.quotes.map((q: any) => ({
        quote: q.quote,
        author: q.author,
        role: q.role,
        type: q.type || 'mentee',
      }))
    : defaultQuotes;

  return (
    <>
    <ScrollAnimationScript />
    <section
      className="scroll-animate"
      style={{
        padding: 'var(--section-padding-lg) var(--spacing-lg)',
        background: 'var(--gradient-hero)',
      }}
    >
      <div style={{ maxWidth: 'var(--max-width-xl)', margin: '0 auto' }}>
        {/* Header - No pill */}
        <div style={{ textAlign: 'center', marginBottom: 'var(--spacing-xl)' }}>
          <h2 style={{
            fontSize: 'var(--font-size-h2)',
            fontWeight: 500,
            color: 'var(--text-primary)',
            marginBottom: 'var(--spacing-sm)',
            fontFamily: 'var(--font-headline)',
            lineHeight: 'var(--line-height-tight)',
          }}>
            {fieldValues.heading || 'What Mentees Have to Say'}
          </h2>
        </div>

        {/* Quotes Grid - styled like SegmentDetail testimonials */}
        <div style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(2, 1fr)',
          gap: 'var(--spacing-xl)',
        }} className="quotes-grid">
          <style>{`
            @media (max-width: 768px) {
              .quotes-grid {
                grid-template-columns: 1fr !important;
              }
            }
          `}</style>

          {quotes.map((quote: Quote, index: number) => (
            <div
              key={index}
              className="scroll-animate"
              data-delay={index * 100}
              style={{
                background: 'var(--bg-white)',
                borderRadius: 'var(--radius-xl)',
                padding: 'var(--spacing-xl)',
                textAlign: 'left',
                borderLeft: '4px solid var(--text-coral)',
                boxShadow: 'var(--shadow-md)',
              }}
            >
              {/* Quote text */}
              <p style={{
                fontSize: 'var(--font-size-body)',
                color: 'var(--text-secondary)',
                lineHeight: 'var(--line-height-relaxed)',
                fontStyle: 'italic',
                margin: 0,
                marginBottom: 'var(--spacing-md)',
              }}>
                "{quote.quote}"
              </p>

              {/* Author */}
              <div style={{
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'space-between',
              }}>
                <div>
                  <p style={{
                    fontSize: 'var(--font-size-small)',
                    fontWeight: 600,
                    color: 'var(--text-muted)',
                    margin: 0,
                  }}>
                    {quote.author} — {quote.role}
                  </p>
                </div>

                {/* Type badge */}
                <div style={{
                  padding: '0.25rem 0.75rem',
                  background: 'rgba(239, 71, 111, 0.1)',
                  borderRadius: 'var(--radius-full)',
                  fontSize: 'var(--font-size-xs)',
                  fontWeight: 600,
                  color: 'var(--text-coral)',
                  textTransform: 'uppercase',
                  letterSpacing: '0.05em',
                }}>
                  {quote.type}
                </div>
              </div>
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
    name: 'heading',
    label: 'Section Heading',
    default: 'What Mentees Have to Say',
  },
  {
    type: 'group',
    name: 'quotes',
    label: 'Testimonial Quotes',
    occurrence: {
      min: 0,
      max: 8,
      default: 0,
    },
    children: [
      {
        type: 'text',
        name: 'quote',
        label: 'Quote',
        default: "It can make the world of a difference to a student's experience.",
      },
      {
        type: 'text',
        name: 'author',
        label: 'Author Name',
        default: 'Mentee',
      },
      {
        type: 'text',
        name: 'role',
        label: 'Role/Organization',
        default: 'University Partner',
      },
      {
        type: 'choice',
        name: 'type',
        label: 'Quote Type',
        choices: [
          ['mentee', 'Mentee'],
          ['mentor', 'Mentor'],
        ],
        default: 'mentee',
      },
    ],
  },
];

export const meta = {
  label: 'Quotes Grid',
};
