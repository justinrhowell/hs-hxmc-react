import React from 'react';
import {
  ModuleFields,
  TextField,
} from '@hubspot/cms-components/fields';
import { ScrollAnimationScript } from '../../shared/ScrollAnimationScript';

interface Quote {
  quote: string;
  author: string;
  role: string;
  type: 'mentee' | 'mentor';
}

const defaultQuotes: Quote[] = [
  {
    quote: "It can make the world of a difference to a student's experience and mental health; being able to talk to someone with experience, especially in a college and university environment.",
    author: "Genevieve Allotey-Pappoe",
    role: "Mentee, Temple University",
    type: 'mentee',
  },
  {
    quote: "For many students, I'm the first professional Black woman they've interacted with. I'm proud to be able to help them see what's possible.",
    author: "Eva Kubu",
    role: "Mentor, George Mason University",
    type: 'mentor',
  },
  {
    quote: "Everything I've faced in higher education, my mentor had also faced those same things. She was really just there for me.",
    author: "Mentee",
    role: "University Partner",
    type: 'mentee',
  },
  {
    quote: "My mentors met me where I was. They helped me discover what I really wanted — and believed in me before I believed in myself.",
    author: "Mentee",
    role: "Workforce Partner",
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
        {/* Header */}
        <div style={{ textAlign: 'center', marginBottom: 'var(--spacing-3xl)' }}>
          <div style={{
            display: 'inline-flex',
            alignItems: 'center',
            padding: '0.5rem 1.25rem',
            background: 'rgba(239, 71, 111, 0.1)',
            borderRadius: 'var(--radius-full)',
            fontSize: 'var(--font-size-small)',
            fontWeight: 600,
            color: 'var(--text-coral)',
            marginBottom: 'var(--spacing-lg)',
            border: '1px solid rgba(239, 71, 111, 0.2)',
          }}>
            Voices from Our Network
          </div>
          <h2 style={{
            fontSize: 'var(--font-size-h2)',
            fontWeight: 500,
            color: 'var(--text-primary)',
            marginBottom: 'var(--spacing-sm)',
            fontFamily: 'var(--font-headline)',
            lineHeight: 'var(--line-height-tight)',
          }}>
            {fieldValues.heading || 'Real Stories, Real Impact'}
          </h2>
          <p style={{
            fontSize: 'var(--font-size-body-lg)',
            color: 'var(--text-secondary)',
            maxWidth: 'var(--max-width-prose)',
            margin: '0 auto',
          }}>
            {fieldValues.subheading || 'Hear from mentees and mentors whose lives have been transformed through meaningful connections.'}
          </p>
        </div>

        {/* Quotes Grid */}
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
              style={{
                background: quote.type === 'mentor'
                  ? 'linear-gradient(135deg, #1a1a2e 0%, #16213e 100%)'
                  : 'var(--bg-white)',
                borderRadius: 'var(--radius-xl)',
                padding: 'var(--spacing-2xl)',
                boxShadow: 'var(--shadow-lg)',
                border: quote.type === 'mentor'
                  ? 'none'
                  : '1px solid var(--border-light)',
                position: 'relative',
                display: 'flex',
                flexDirection: 'column',
              }}
            >
              {/* Quote mark */}
              <div style={{
                fontSize: 'var(--font-size-display)',
                color: quote.type === 'mentor' ? 'var(--secondary-yellow)' : 'rgba(239, 71, 111, 0.15)',
                fontFamily: 'Georgia, serif',
                lineHeight: 1,
                marginBottom: 'var(--spacing-sm)',
                marginTop: '-0.5rem',
              }}>
                "
              </div>

              {/* Quote text */}
              <p style={{
                fontSize: 'var(--font-size-body-lg)',
                color: quote.type === 'mentor' ? 'rgba(255, 255, 255, 0.9)' : 'var(--text-secondary)',
                lineHeight: 1.7,
                fontStyle: 'italic',
                flex: 1,
                marginBottom: 'var(--spacing-xl)',
              }}>
                {quote.quote}
              </p>

              {/* Author */}
              <div style={{
                display: 'flex',
                alignItems: 'center',
                gap: 'var(--spacing-md)',
              }}>
                {/* Avatar placeholder */}
                <div style={{
                  width: '48px',
                  height: '48px',
                  borderRadius: 'var(--radius-full)',
                  background: quote.type === 'mentor'
                    ? 'linear-gradient(135deg, var(--secondary-yellow) 0%, rgba(239, 71, 111, 0.3) 100%)'
                    : 'linear-gradient(135deg, rgba(239, 71, 111, 0.15) 0%, var(--secondary-yellow) 100%)',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  flexShrink: 0,
                }}>
                  <svg width="24" height="24" viewBox="0 0 24 24" fill={quote.type === 'mentor' ? 'var(--secondary-yellow)' : 'var(--text-coral)'}>
                    <path d="M12 12c2.21 0 4-1.79 4-4s-1.79-4-4-4-4 1.79-4 4 1.79 4 4 4zm0 2c-2.67 0-8 1.34-8 4v2h16v-2c0-2.66-5.33-4-8-4z"/>
                  </svg>
                </div>

                <div>
                  <p style={{
                    fontSize: 'var(--font-size-body)',
                    fontWeight: 700,
                    color: quote.type === 'mentor' ? 'white' : 'var(--text-primary)',
                    margin: 0,
                  }}>
                    {quote.author}
                  </p>
                  <p style={{
                    fontSize: 'var(--font-size-small)',
                    color: quote.type === 'mentor' ? 'rgba(255, 255, 255, 0.6)' : 'var(--text-muted)',
                    margin: 0,
                  }}>
                    {quote.role}
                  </p>
                </div>

                {/* Type badge */}
                <div style={{
                  marginLeft: 'auto',
                  padding: '0.25rem 0.75rem',
                  background: quote.type === 'mentor'
                    ? 'var(--secondary-yellow)'
                    : 'rgba(239, 71, 111, 0.1)',
                  borderRadius: 'var(--radius-full)',
                  fontSize: 'var(--font-size-xs)',
                  fontWeight: 600,
                  color: quote.type === 'mentor' ? 'var(--secondary-yellow)' : 'var(--text-coral)',
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
    default: 'Real Stories, Real Impact',
  },
  {
    type: 'text',
    name: 'subheading',
    label: 'Section Subheading',
    default: 'Hear from mentees and mentors whose lives have been transformed through meaningful connections.',
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
