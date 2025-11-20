import React from 'react';
import type { ModuleFields } from '@hubspot/cms-components';

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

      <section style={styles.section} aria-labelledby="faq-heading">
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
    padding: '100px 20px',
    background: 'white',
  },
  container: {
    maxWidth: '900px',
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
  faqList: {
    display: 'flex',
    flexDirection: 'column',
    gap: '16px',
  },
  faqItem: {
    background: 'white',
    border: '2px solid #F0F0F0',
    borderRadius: '16px',
    padding: '24px',
    transition: 'all 0.3s ease',
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
    color: '#333',
    flex: 1,
    paddingRight: '20px',
  },
  icon: {
    color: '#FF4B7E',
    transition: 'transform 0.3s ease',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    flexShrink: 0,
  },
  answer: {
    fontSize: '16px',
    lineHeight: '1.6',
    color: '#666',
    overflow: 'hidden',
    transition: 'all 0.3s ease',
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
