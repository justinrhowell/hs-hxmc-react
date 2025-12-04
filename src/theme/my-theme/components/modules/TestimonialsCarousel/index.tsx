import React from 'react';
import type { ModuleFields } from '@hubspot/cms-components';
import { ScrollAnimationScript } from '../../shared/ScrollAnimationScript';

interface Testimonial {
  quote: string;
  author: string;
  role: string;
  company: string;
  avatar?: string;
}

interface TestimonialsCarouselProps {
  fieldValues: {
    heading: string;
    testimonials: Testimonial[];
  };
  theme: {
    brand_color: { color: string };
  };
}

const defaultTestimonials = [
  {
    quote: "Mentorship has truly shaped my journey, helping me navigate uncertainty and build confidence. Mentors are like a personal Board of Advisors—supporting your academic, professional, and personal growth.",
    author: "Genevieve Allotey-Pappoe",
    role: "Recent Princeton Graduate, Educator and Mentee",
    company: "",
  },
  {
    quote: "Of the graduate students who engaged in multiple mentorship and experiential programs, 99% were employed one year after graduating, many in tenure-track positions across diverse fields.",
    author: "Eva Kubu",
    role: "Senior Associate Dean for Professional Development at Princeton University",
    company: "Mentor Collective Partner",
  },
];

export const Component: React.FC<TestimonialsCarouselProps> = ({
  fieldValues
}) => {
  const testimonials = (fieldValues.testimonials && fieldValues.testimonials.length > 0)
    ? fieldValues.testimonials
    : defaultTestimonials;

  if (testimonials.length === 0) {
    return null;
  }

  return (
    <>
      <style dangerouslySetInnerHTML={{__html: `
        .testimonial-item {
          display: none;
        }
        .testimonial-item:first-child {
          display: block;
        }
      `}} />
      <script dangerouslySetInnerHTML={{__html: `
        (function() {
          function initTestimonials() {
            let currentIndex = 0;
            const testimonials = document.querySelectorAll('.testimonial-item');
            const dots = document.querySelectorAll('.testimonial-dot');
            const prevBtn = document.querySelector('.testimonial-prev');
            const nextBtn = document.querySelector('.testimonial-next');

            function showTestimonial(index) {
              testimonials.forEach((t, i) => {
                t.style.display = i === index ? 'block' : 'none';
              });
              dots.forEach((d, i) => {
                d.style.backgroundColor = i === index ? 'var(--text-coral)' : 'var(--border-light)';
              });
              currentIndex = index;
            }

            if (prevBtn) {
              prevBtn.onclick = function() {
                const newIndex = (currentIndex - 1 + testimonials.length) % testimonials.length;
                showTestimonial(newIndex);
              };
            }

            if (nextBtn) {
              nextBtn.onclick = function() {
                const newIndex = (currentIndex + 1) % testimonials.length;
                showTestimonial(newIndex);
              };
            }

            dots.forEach((dot, index) => {
              dot.onclick = function() {
                showTestimonial(index);
              };
            });

            showTestimonial(0);
          }

          if (document.readyState === 'loading') {
            document.addEventListener('DOMContentLoaded', initTestimonials);
          } else {
            setTimeout(initTestimonials, 100);
          }
        })();
      `}} />

      <ScrollAnimationScript />
      <section
        className="scroll-animate"
        style={styles.section}
        aria-label="Customer testimonials"
      >
        <div style={styles.container}>
          <h2 style={styles.heading}>{fieldValues.heading}</h2>

          <div className="testimonial-carousel-container" style={styles.carouselContainer}>
            <button
              className="testimonial-prev"
              style={styles.navButton}
              aria-label="Previous testimonial"
              type="button"
            >
              <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
                <path d="M15 18L9 12L15 6" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
              </svg>
            </button>

            <div style={styles.testimonialCardContainer}>
              {testimonials.map((testimonial, index) => (
                <div
                  key={index}
                  className="testimonial-item"
                  style={styles.testimonialCard}
                >
                  <div style={styles.quoteIcon}>"</div>
                  <p style={styles.quote}>{testimonial.quote}</p>

                  <div style={styles.authorSection}>
                    {testimonial.avatar && (
                      <img
                        src={testimonial.avatar}
                        alt={testimonial.author}
                        style={styles.avatar}
                        loading="lazy"
                      />
                    )}
                    <div>
                      <p style={styles.author}>{testimonial.author}</p>
                      <p style={styles.role}>
                        {testimonial.role}
                        {testimonial.company && ` • ${testimonial.company}`}
                      </p>
                    </div>
                  </div>
                </div>
              ))}
            </div>

            <button
              className="testimonial-next"
              style={styles.navButton}
              aria-label="Next testimonial"
              type="button"
            >
              <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
                <path d="M9 18L15 12L9 6" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
              </svg>
            </button>
          </div>

          {/* Pagination dots */}
          <div style={styles.pagination}>
            {testimonials.map((_, index) => (
              <button
                key={index}
                className="testimonial-dot"
                style={{
                  ...styles.dot,
                  backgroundColor: index === 0 ? 'var(--text-coral)' : 'var(--border-light)'
                }}
                aria-label={`Go to testimonial ${index + 1}`}
                type="button"
              />
            ))}
          </div>
        </div>
      </section>
    </>
  );
};

const styles: Record<string, React.CSSProperties> = {
  section: {
    padding: 'var(--section-padding-sm) var(--spacing-lg)',
    background: 'var(--gradient-hero)',
    overflow: 'hidden',
  },
  container: {
    maxWidth: 'var(--max-width-xl)',
    margin: '0 auto',
  },
  heading: {
    fontSize: 'var(--font-size-h2)',
    fontFamily: 'var(--font-headline)',
    fontWeight: 500,
    textAlign: 'center',
    marginBottom: 'var(--spacing-xl)',
    lineHeight: 'var(--line-height-tight)',
    letterSpacing: 'var(--letter-spacing-tight)',
    color: 'var(--text-primary)',
  },
  carouselContainer: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    gap: 'var(--spacing-md)',
    marginBottom: 'var(--spacing-lg)',
  },
  navButton: {
    background: 'var(--bg-white)',
    border: '2px solid var(--border-medium)',
    borderRadius: 'var(--radius-circle)',
    width: '48px',
    height: '48px',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    cursor: 'pointer',
    transition: 'var(--transition-medium)',
    color: 'var(--text-coral)',
    boxShadow: 'var(--shadow-sm)',
    flexShrink: 0,
  },
  testimonialCardContainer: {
    position: 'relative',
    width: '100%',
    maxWidth: 'var(--max-width-md)',
  },
  testimonialCard: {
    background: 'var(--bg-glass)',
    borderRadius: 'var(--radius-xl)',
    padding: 'var(--spacing-xl) var(--spacing-2xl)',
    maxWidth: 'var(--max-width-md)',
    boxShadow: 'var(--shadow-lg)',
    border: '1px solid var(--border-light)',
    width: '100%',
    backdropFilter: 'blur(10px)',
    position: 'relative',
  },
  quoteIcon: {
    fontSize: '48px',
    fontFamily: 'Georgia, serif',
    color: 'var(--text-coral)',
    lineHeight: 1,
    marginBottom: 'var(--spacing-sm)',
    opacity: 0.15,
    fontWeight: 700,
    position: 'absolute',
    top: 'var(--spacing-lg)',
    left: 'var(--spacing-xl)',
  },
  quote: {
    fontSize: 'var(--font-size-body-lg)',
    lineHeight: 'var(--line-height-relaxed)',
    color: 'var(--text-secondary)',
    marginBottom: 'var(--spacing-lg)',
    fontStyle: 'italic',
    fontWeight: 400,
    maxWidth: 'var(--max-width-prose)',
    paddingTop: 'var(--spacing-lg)',
  },
  authorSection: {
    display: 'flex',
    alignItems: 'center',
    gap: 'var(--spacing-sm)',
    paddingTop: 'var(--spacing-md)',
    borderTop: '1px solid var(--border-light)',
  },
  avatar: {
    width: '48px',
    height: '48px',
    borderRadius: 'var(--radius-circle)',
    objectFit: 'cover',
  },
  author: {
    fontSize: 'var(--font-size-body)',
    fontWeight: 600,
    color: 'var(--text-primary)',
    margin: 0,
    fontFamily: 'var(--font-headline)',
  },
  role: {
    fontSize: 'var(--font-size-small)',
    color: 'var(--text-muted)',
    margin: 0,
    marginTop: '2px',
    lineHeight: 'var(--line-height-normal)',
  },
  pagination: {
    display: 'flex',
    justifyContent: 'center',
    gap: 'var(--spacing-xs)',
  },
  dot: {
    width: '8px',
    height: '8px',
    minWidth: '8px',
    minHeight: '8px',
    borderRadius: 'var(--radius-circle)',
    border: 'none',
    cursor: 'pointer',
    transition: 'var(--transition-medium)',
    padding: 0,
  },
};

export const fields: ModuleFields = [
  {
    type: 'text',
    name: 'heading',
    label: 'Section Heading',
    default: 'What Our Customers Say',
  },
  {
    type: 'group',
    name: 'testimonials',
    label: 'Testimonials',
    occurrence: {
      min: 0,
      max: 10,
      default: 0,
    },
    children: [
      {
        type: 'richtext',
        name: 'quote',
        label: 'Quote',
        default: 'This platform has transformed how we connect mentors and mentees.',
      },
      {
        type: 'text',
        name: 'author',
        label: 'Author Name',
        default: 'Jane Smith',
      },
      {
        type: 'text',
        name: 'role',
        label: 'Role/Title',
        default: 'Director of Student Success',
      },
      {
        type: 'text',
        name: 'company',
        label: 'Company/Organization',
        default: 'University of Example',
      },
      {
        type: 'image',
        name: 'avatar',
        label: 'Avatar Image',
      },
    ],
  },
];

export const meta = {
  label: 'Testimonials Carousel',
  icon: '💬',
};
