import React from 'react';
import { ScrollAnimationScript } from '../../shared/ScrollAnimationScript';

// Default FAQ data organized by category
const defaultFaqData = [
  // Foundational Questions
  {
    question: "What is an AI-powered mentorship platform?",
    answer: "An AI-powered mentorship platform streamlines and personalizes the mentorship experience by using dynamic automation, smart matching, and data-driven insights. It moves beyond creating connections: the platform converts these interactions into meaningful data, applying advanced analytics to uncover true progress and measurable outcomes at scale."
  },
  {
    question: "How does Mentor Collective's AI Mentorship OS work?",
    answer: "Our AI Mentorship Operating System (OS) reveals connection gaps, sparks engagement with personalized prompts, scales mentorship through automation, and fuels programs with retention analytics and insights. It connects education and workforce ecosystems to drive retention, belonging, and career mobility."
  },
  {
    question: "What makes Mentor Collective the premier choice over traditional programs?",
    answer: "Unlike one-off mentorship initiatives, Mentor Collective is built as essential infrastructure. Our AI-native platform uses a decade of mentorship data to automate matching, sustain engagement with AI-guided conversation prompts and provide the intelligence to improve retention and belonging across large populations."
  },
  {
    question: "Is this platform meant to replace human mentors?",
    answer: "No. Our platform amplifies the value of human connection. We provide tools to ensure mentors and mentees stay engaged, build trust, and achieve outcomes. The AI acts as a guide and accelerator—not a replacement."
  },
  // Impact, Outcomes, and ROI
  {
    question: "How can I improve student retention with mentorship?",
    answer: "Mentorship builds a sense of belonging, increases career confidence, and provides access to social capital and professional networks. Institutions using our platform have seen up to a 6% retention lift and a 30% increase in career confidence."
  },
  {
    question: "How to measure the ROI of mentorship programs?",
    answer: "Our partners report significant ROI, including millions in operational savings. They have gained value through improved persistence and engagement. ROI is calculated through retention and staff savings. Our analytics track engagement, belonging, risk flags, and ROI through configurable dashboards. As an example, some districts have saved over $20,000 per retained teacher, while partners have realized $7.8M in value."
  },
  {
    question: "Is there data to show how mentorship impacts belonging or career confidence?",
    answer: "Absolutely, yes. Learners on our platform experience up to a 19% boost in sense of belonging. Furthermore, mentees are 2.5x more likely to feel career-ready. Our built-in analytics track these essential belonging analytics and career readiness metrics in real-time."
  },
  // Platform Features and Use Cases
  {
    question: "How does AI help with mentor-mentee matching and engagement?",
    answer: "Our proprietary algorithm uses 80+ variables to optimize mentor matching based on goals, identity, and experience. The AI also drives sustained engagement through our proprietary Conversation Sparks—personalized prompts that sustain conversation and deepen relationships."
  },
  {
    question: "What are Conversation Sparks and how do they work?",
    answer: "Conversation Sparks are AI-guided prompts tailored to each match. They remove the #1 barrier to mentorship—\"I don't know what to say\"—and help relationships thrive. Prompts evolve over time based on engagement data."
  },
  {
    question: "How to integrate mentorship into workforce development programs?",
    answer: "We serve higher education institutions, employers, workforce boards, and nonprofits. Many partners use Mentor Collective to activate alumni, connect learners to industry professionals, and power regional talent pathways. For employers, the platform is an essential early talent development tool, embedding mentorship into internships and development programs to improve internship conversion and reduce early attrition. Some partners have seen a 42% increase in intern-to-full-time conversion."
  },
  {
    question: "What's the best mentorship platform for universities and higher education?",
    answer: "Mentor Collective's AI-powered Mentorship OS is trusted by over 200+ partners, including major higher education institutions, to deliver essential college retention solutions and student engagement tools. Our platform is essential for first-gen student support as we use identity-aligned matching and scalable tools to ensure equitable access to social capital. For example, UW-Green Bay saw a 30.6% increase in career decision confidence for first-generation students in our program."
  },
  {
    question: "Can the platform integrate with our existing student or HR systems?",
    answer: "Yes. Our platform offers secure integrations with SSO, CRMs, and data feeds to connect seamlessly with campus systems, employer platforms, and workforce tools."
  },
  {
    question: "What kind of support does Mentor Collective offer for program administrators?",
    answer: "We provide full-service support, from implementation to launch to continuous improvement. Our team helps customize programs, configure reports, and maximize impact without adding staff burden, acting as your essential mentor program automation partner."
  },
];

const styles: Record<string, React.CSSProperties> = {
  section: {
    padding: 'var(--spacing-2xl) var(--spacing-lg)',
    background: 'var(--bg-white)',
  },
  container: {
    maxWidth: '900px',
    margin: '0 auto',
  },
  heading: {
    fontSize: 'var(--font-size-h3)',
    fontFamily: 'var(--font-headline)',
    fontWeight: 500,
    marginBottom: 'var(--spacing-xl)',
    color: 'var(--text-primary)',
  },
  faqList: {
    display: 'flex',
    flexDirection: 'column' as const,
    gap: 'var(--spacing-sm)',
  },
  faqItem: {
    background: 'var(--bg-cream)',
    border: '1px solid var(--border-light)',
    borderRadius: 'var(--radius-lg)',
    overflow: 'hidden',
  },
  questionButton: {
    width: '100%',
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
    background: 'none',
    border: 'none',
    cursor: 'pointer',
    padding: 'var(--spacing-lg)',
    textAlign: 'left' as const,
    transition: 'background 0.2s ease',
  },
  question: {
    fontSize: 'var(--font-size-body)',
    fontWeight: 600,
    color: 'var(--text-primary)',
    flex: 1,
    paddingRight: 'var(--spacing-md)',
    lineHeight: 1.4,
  },
  icon: {
    color: 'var(--text-coral)',
    transition: 'transform 0.3s ease',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    flexShrink: 0,
  },
  answer: {
    fontSize: 'var(--font-size-body)',
    lineHeight: 1.7,
    color: 'var(--text-secondary)',
    overflow: 'hidden',
    transition: 'all 0.3s ease',
    padding: '0 var(--spacing-lg)',
  },
};

export function Component({ fieldValues }: any) {
  // Use custom FAQs if provided, otherwise fall back to defaults
  const customFaqs = fieldValues.faqs || [];
  const faqData = customFaqs.length > 0
    ? customFaqs.map((faq: any) => ({
        question: faq.question || 'Question?',
        answer: faq.answer || 'Answer goes here.',
      }))
    : defaultFaqData;
  return (
    <>
      <script dangerouslySetInnerHTML={{__html: `
        (function() {
          function initFAQPage() {
            const buttons = document.querySelectorAll('.faq-page-question-btn');

            buttons.forEach((button, index) => {
              button.onclick = function() {
                const answer = document.querySelector('.faq-page-answer-' + index);
                const icon = document.querySelector('.faq-page-icon-' + index);
                const isOpen = answer.style.maxHeight && answer.style.maxHeight !== '0px';

                if (isOpen) {
                  answer.style.maxHeight = '0';
                  answer.style.paddingTop = '0';
                  answer.style.paddingBottom = '0';
                  icon.style.transform = 'rotate(0deg)';
                  button.setAttribute('aria-expanded', 'false');
                } else {
                  // Close all others first
                  document.querySelectorAll('[class^="faq-page-answer-"]').forEach(a => {
                    a.style.maxHeight = '0';
                    a.style.paddingTop = '0';
                    a.style.paddingBottom = '0';
                  });
                  document.querySelectorAll('[class^="faq-page-icon-"]').forEach(i => {
                    i.style.transform = 'rotate(0deg)';
                  });
                  document.querySelectorAll('.faq-page-question-btn').forEach(b => {
                    b.setAttribute('aria-expanded', 'false');
                  });

                  // Open this one
                  answer.style.maxHeight = '500px';
                  answer.style.paddingTop = 'var(--spacing-sm)';
                  answer.style.paddingBottom = 'var(--spacing-lg)';
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
            document.addEventListener('DOMContentLoaded', initFAQPage);
          } else {
            setTimeout(initFAQPage, 100);
          }
        })();
      `}} />

      <ScrollAnimationScript />

      <section style={styles.section}>
        <div style={styles.container}>
          <div style={styles.faqList}>
            {faqData.map((faq, index) => (
              <div key={index} style={styles.faqItem} className="scroll-animate" data-delay={Math.min(index * 50, 300)}>
                <button
                  className="faq-page-question-btn"
                  style={styles.questionButton}
                  aria-expanded="false"
                  type="button"
                >
                  <span style={styles.question}>{faq.question}</span>
                  <span
                    className={`faq-page-icon-${index}`}
                    style={styles.icon}
                  >
                    <svg width="20" height="20" viewBox="0 0 24 24" fill="none">
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
                  className={`faq-page-answer-${index}`}
                  style={{
                    ...styles.answer,
                    maxHeight: '0',
                    paddingTop: '0',
                    paddingBottom: '0',
                  }}
                >
                  {faq.answer}
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
    type: 'group',
    name: 'faqs',
    label: 'FAQ Items',
    help_text: 'Add FAQ questions and answers. Leave empty to use defaults.',
    occurrence: {
      min: 0,
      max: 50,
      default: 0,
    },
    children: [
      {
        type: 'text',
        name: 'question',
        label: 'Question',
        default: 'What is your question?',
      },
      {
        type: 'text',
        name: 'answer',
        label: 'Answer',
        default: 'The answer to the question goes here.',
      },
    ],
  },
];

export const meta = {
  label: 'FAQ Page Content',
};
