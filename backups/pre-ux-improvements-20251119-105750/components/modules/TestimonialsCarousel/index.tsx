import React from 'react';
import type { ModuleFields } from '@hubspot/cms-components';

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
                d.style.backgroundColor = i === index ? '#FF4B7E' : '#E0E0E0';
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
        style={styles.section}
        aria-label="Customer testimonials"
      >
        <div style={styles.container}>
          <h2 style={styles.heading}>{fieldValues.heading}</h2>

          <div style={styles.carouselContainer}>
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
                  backgroundColor: index === 0 ? '#FF4B7E' : '#E0E0E0'
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
    padding: '100px 20px',
    background: 'linear-gradient(135deg, #FFF8F3 0%, #FFFBF8 100%)',
    overflow: 'hidden',
  },
  container: {
    maxWidth: '1200px',
    margin: '0 auto',
  },
  heading: {
    fontSize: '48px',
    fontFamily: 'var(--font-headline, "Ginto Nord", sans-serif)',
    fontWeight: 700,
    textAlign: 'center',
    marginBottom: '60px',
    background: 'var(--gradient-text)',
    WebkitBackgroundClip: 'text',
    WebkitTextFillColor: 'transparent',
    backgroundClip: 'text',
  },
  carouselContainer: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    gap: '30px',
    marginBottom: '40px',
  },
  navButton: {
    background: 'white',
    border: '2px solid #E0E0E0',
    borderRadius: '50%',
    width: '50px',
    height: '50px',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    cursor: 'pointer',
    transition: 'all 0.3s ease',
    color: '#333',
  },
  testimonialCardContainer: {
    position: 'relative',
    width: '100%',
    maxWidth: '800px',
    minHeight: '400px',
  },
  testimonialCard: {
    background: 'white',
    borderRadius: '24px',
    padding: '50px',
    maxWidth: '800px',
    boxShadow: '0 10px 40px rgba(0, 0, 0, 0.08)',
    position: 'absolute',
    top: 0,
    left: 0,
    width: '100%',
  },
  quoteIcon: {
    fontSize: '80px',
    fontFamily: 'Georgia, serif',
    color: '#FF4B7E',
    lineHeight: 1,
    marginBottom: '20px',
    opacity: 0.3,
  },
  quote: {
    fontSize: '24px',
    lineHeight: '1.6',
    color: '#333',
    marginBottom: '30px',
    fontStyle: 'italic',
  },
  authorSection: {
    display: 'flex',
    alignItems: 'center',
    gap: '15px',
  },
  avatar: {
    width: '60px',
    height: '60px',
    borderRadius: '50%',
    objectFit: 'cover',
  },
  author: {
    fontSize: '18px',
    fontWeight: 600,
    color: '#333',
    margin: 0,
  },
  role: {
    fontSize: '14px',
    color: '#666',
    margin: 0,
  },
  pagination: {
    display: 'flex',
    justifyContent: 'center',
    gap: '10px',
  },
  dot: {
    width: '12px',
    height: '12px',
    borderRadius: '50%',
    border: 'none',
    cursor: 'pointer',
    transition: 'background-color 0.3s ease',
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
