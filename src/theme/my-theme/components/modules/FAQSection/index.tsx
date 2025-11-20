import React from 'react';
import type { ModuleFields } from '@hubspot/cms-components';
import { useScrollAnimation, animationStyles } from '../../hooks/useScrollAnimation';

interface FAQ {
  question: string;
  answer: string;
}

interface FAQSectionProps {
  fieldValues: {
    heading: string;
    faqs: FAQ[];
  };
}

export const Component: React.FC<FAQSectionProps> = ({ fieldValues }) => {
  const { elementRef, isVisible } = useScrollAnimation({ threshold: 0.2 });
  const faqs = fieldValues.faqs || [];

  if (faqs.length === 0) {
    return null;
  }

  return (
    <>
      <script dangerouslySetInnerHTML={{__html: `
        (function() {
          function initFAQ() {
            const buttons = document.querySelectorAll('.faq-question-btn');

            buttons.forEach((button, index) => {
              button.onclick = function() {
                const answer = document.querySelector('.faq-answer-' + index);
                const icon = document.querySelector('.faq-icon-' + index);
                const currentlyOpen = answer.style.maxHeight && answer.style.maxHeight !== '0px';

                if (currentlyOpen) {
                  // Close this FAQ
                  answer.style.maxHeight = '0';
                  answer.style.opacity = '0';
                  answer.style.marginTop = '0';
                  icon.style.transform = 'rotate(0deg)';
                  button.setAttribute('aria-expanded', 'false');
                } else {
                  // Close all FAQs first
                  document.querySelectorAll('[class^="faq-answer-"]').forEach(a => {
                    a.style.maxHeight = '0';
                    a.style.opacity = '0';
                    a.style.marginTop = '0';
                  });
                  document.querySelectorAll('[class^="faq-icon-"]').forEach(i => {
                    i.style.transform = 'rotate(0deg)';
                  });
                  document.querySelectorAll('.faq-question-btn').forEach(b => {
                    b.setAttribute('aria-expanded', 'false');
                  });

                  // Open this FAQ
                  answer.style.maxHeight = '500px';
                  answer.style.opacity = '1';
                  answer.style.marginTop = '16px';
                  icon.style.transform = 'rotate(180deg)';
                  button.setAttribute('aria-expanded', 'true');
                }
              };
            });

            // Open first FAQ by default
            if (buttons[0]) {
              buttons[0].click();
            }
          }

          if (document.readyState === 'loading') {
            document.addEventListener('DOMContentLoaded', initFAQ);
          } else {
            setTimeout(initFAQ, 100);
          }
        })();
      `}} />

      <section
        ref={elementRef as React.RefObject<HTMLElement>}
        style={{
          ...styles.section,
          ...animationStyles.subtleSlideUp(isVisible),
        }}
        aria-labelledby="faq-heading"
      >
        <div style={styles.container}>
          <h2 id="faq-heading" style={styles.heading}>
            {fieldValues.heading}
          </h2>

          <div style={styles.faqList}>
            {faqs.map((faq, index) => (
              <div key={index} style={styles.faqItem}>
                <button
                  className="faq-question-btn"
                  style={styles.questionButton}
                  aria-expanded="false"
                  aria-controls={`faq-answer-${index}`}
                  id={`faq-question-${index}`}
                  type="button"
                >
                  <span style={styles.question}>{faq.question}</span>
                  <span
                    className={`faq-icon-${index}`}
                    style={{
                      ...styles.icon,
                      transform: 'rotate(0deg)',
                    }}
                  >
                    <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
                      <path
                        d="M6 9L12 15L18 9"
                        stroke="currentColor"
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      />
                    </svg>
                  </span>
                </button>

                <div
                  className={`faq-answer-${index}`}
                  id={`faq-answer-${index}`}
                  role="region"
                  aria-labelledby={`faq-question-${index}`}
                  style={{
                    ...styles.answer,
                    maxHeight: '0',
                    opacity: 0,
                    marginTop: '0',
                  }}
                >
                  <div dangerouslySetInnerHTML={{ __html: faq.answer }} />
                </div>
              </div>
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
    background: 'linear-gradient(135deg, #FFFFFF 0%, #FFFBF8 100%)',
    backgroundImage: 'var(--pattern-dots)',
    backgroundSize: 'var(--pattern-dots-size)',
    position: 'relative',
  },
  container: {
    maxWidth: 'var(--max-width-lg)',
    margin: '0 auto',
  },
  heading: {
    fontSize: 'var(--font-size-h2)',
    fontFamily: 'var(--font-headline)',
    fontWeight: 700,
    textAlign: 'center',
    marginBottom: 'var(--spacing-3xl)',
    lineHeight: 'var(--line-height-tight)',
    letterSpacing: 'var(--letter-spacing-tight)',
    color: 'var(--text-primary)',
  },
  faqList: {
    display: 'flex',
    flexDirection: 'column',
    gap: 'var(--spacing-md)',
  },
  faqItem: {
    background: 'rgba(255, 255, 255, 0.95)',
    border: '2px solid var(--border-light)',
    borderRadius: 'var(--radius-lg)',
    padding: 'var(--spacing-xl)',
    transition: 'var(--transition-medium)',
    backdropFilter: 'blur(10px)',
  },
  questionButton: {
    width: '100%',
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
    background: 'none',
    border: 'none',
    cursor: 'pointer',
    padding: 0,
    textAlign: 'left',
  },
  question: {
    fontSize: '20px',
    fontWeight: 600,
    color: 'var(--text-secondary)',
    flex: 1,
    paddingRight: 'var(--spacing-lg)',
  },
  icon: {
    color: 'var(--text-coral)',
    transition: 'var(--transition-medium)',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    flexShrink: 0,
  },
  answer: {
    fontSize: '16px',
    lineHeight: '1.6',
    color: 'var(--text-muted)',
    overflow: 'hidden',
    transition: 'var(--transition-medium)',
  },
};

export const fields: ModuleFields = [
  {
    type: 'text',
    name: 'heading',
    label: 'Section Heading',
    default: 'Frequently Asked Questions',
  },
  {
    type: 'group',
    name: 'faqs',
    label: 'FAQs',
    occurrence: {
      min: 1,
      max: 15,
      default: 5,
    },
    children: [
      {
        type: 'text',
        name: 'question',
        label: 'Question',
        default: 'What is Mentor Collective?',
      },
      {
        type: 'richtext',
        name: 'answer',
        label: 'Answer',
        default:
          'Mentor Collective is an AI-powered mentorship platform that connects students with mentors to support their academic and professional success.',
      },
    ],
  },
];

export const meta = {
  label: 'FAQ Section',
  icon: '❓',
};
