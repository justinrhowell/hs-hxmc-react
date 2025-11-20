import React from 'react';
import type { ModuleFields } from '@hubspot/cms-components';
import { useScrollAnimation, animationStyles } from '../../hooks/useScrollAnimation';

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

export const Component: React.FC<TestimonialsCarouselProps> = ({
  fieldValues
}) => {
  const { elementRef, isVisible } = useScrollAnimation({ threshold: 0.2 });
  const testimonials = fieldValues.testimonials || [];

  if (testimonials.length === 0) {
    return null;
  }

  return (
    <>
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
                d.style.backgroundColor = i === index ? 'var(--text-coral)' : '#E0E0E0';
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

      <section
        ref={elementRef as React.RefObject<HTMLElement>}
        style={{
          ...styles.section,
          ...animationStyles.subtleSlideUp(isVisible),
        }}
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
                  backgroundColor: index === 0 ? 'var(--text-coral)' : '#E0E0E0'
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
    padding: 'var(--section-padding-lg) var(--spacing-lg)',
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
    fontWeight: 700,
    textAlign: 'center',
    marginBottom: '60px',
    lineHeight: 'var(--line-height-tight)',
    letterSpacing: 'var(--letter-spacing-tight)',
    color: 'var(--text-primary)',
  },
  carouselContainer: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'flex-start',
    gap: '30px',
    marginBottom: 'var(--spacing-2xl)',
    paddingLeft: '60px',
  },
  navButton: {
    background: 'var(--bg-white)',
    border: '2px solid rgba(239, 71, 111, 0.2)',
    borderRadius: 'var(--radius-circle)',
    width: '56px',
    height: '56px',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    cursor: 'pointer',
    transition: 'var(--transition-medium)',
    color: 'var(--text-coral)',
    boxShadow: 'var(--shadow-sm)',
  },
  testimonialCardContainer: {
    position: 'relative',
    width: '100%',
    maxWidth: 'var(--max-width-md)',
    minHeight: '400px',
  },
  testimonialCard: {
    background: 'linear-gradient(135deg, rgba(255, 255, 255, 0.98) 0%, rgba(255, 251, 248, 0.95) 100%)',
    borderRadius: 'var(--radius-xl)',
    padding: '60px',
    maxWidth: 'var(--max-width-md)',
    boxShadow: '0 16px 48px rgba(0, 0, 0, 0.12)',
    border: '1px solid rgba(239, 71, 111, 0.08)',
    position: 'absolute',
    top: 0,
    left: 0,
    width: '100%',
    backdropFilter: 'blur(10px)',
  },
  quoteIcon: {
    fontSize: '72px',
    fontFamily: 'Georgia, serif',
    color: 'var(--text-coral)',
    lineHeight: 1,
    marginBottom: 'var(--spacing-md)',
    opacity: 0.2,
    fontWeight: 700,
  },
  quote: {
    fontSize: '1.35rem',
    lineHeight: '1.7',
    color: 'var(--text-secondary)',
    marginBottom: 'var(--spacing-2xl)',
    fontStyle: 'normal',
    fontWeight: 400,
    maxWidth: 'var(--max-width-prose)',
  },
  authorSection: {
    display: 'flex',
    alignItems: 'center',
    gap: 'var(--spacing-md)',
    paddingTop: 'var(--spacing-lg)',
    borderTop: '1px solid rgba(239, 71, 111, 0.1)',
  },
  avatar: {
    width: '60px',
    height: '60px',
    borderRadius: 'var(--radius-circle)',
    objectFit: 'cover',
  },
  author: {
    fontSize: '1.1rem',
    fontWeight: 700,
    color: 'var(--text-primary)',
    margin: 0,
    fontFamily: 'var(--font-headline)',
  },
  role: {
    fontSize: '0.95rem',
    color: 'var(--text-muted)',
    margin: 0,
    marginTop: '4px',
    lineHeight: '1.4',
  },
  pagination: {
    display: 'flex',
    justifyContent: 'center',
    gap: '10px',
  },
  dot: {
    width: '12px',
    height: '12px',
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
      min: 1,
      max: 10,
      default: 3,
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
