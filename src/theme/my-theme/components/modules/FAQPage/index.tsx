import React from 'react';
import { ModuleFields } from '@hubspot/cms-components/fields';
import { ScrollAnimationScript } from '../../shared/ScrollAnimationScript';

// All FAQ data built into the component
const faqData = [
  {
    question: "What is an AI-powered mentorship platform?",
    answer: "An AI-powered mentorship platform uses artificial intelligence to match mentors and mentees, guide conversations, and deliver measurable outcomes. Mentor Collective's platform scales human connection by automating logistics and fueling every mentorship relationship with data-driven insights."
  },
  {
    question: "How does Mentor Collective's AI Mentorship OS work?",
    answer: "Our AI Mentorship Operating System (OS) reveals connection gaps, sparks engagement with personalized prompts, scales mentorship through automation, and fuels programs with real-time insights. It connects education and workforce ecosystems to drive retention, belonging, and career mobility."
  },
  {
    question: "What makes Mentor Collective different from traditional mentorship programs?",
    answer: "Unlike one-off mentorship initiatives, Mentor Collective is built as infrastructure. Our AI-native platform uses a decade of mentorship data to automate matching, sustain engagement with AI-guided conversation prompts, and provide intelligence to improve retention and belonging across large populations."
  },
  {
    question: "Is this platform meant to replace human mentors?",
    answer: "No. Our platform amplifies the value of human connection. We provide tools to ensure mentors and mentees stay engaged, build trust, and achieve outcomes. The AI acts as a guide and accelerator—not a replacement."
  },
  {
    question: "Can the platform integrate with our existing student or HR systems?",
    answer: "Yes. Our platform offers secure integrations with SSO, CRMs, and data feeds to connect seamlessly with campus systems, employer platforms, and workforce tools."
  },
  {
    question: "How does mentorship improve student retention and career readiness?",
    answer: "Mentorship builds a sense of belonging, increases career confidence, and provides access to professional networks. Institutions using our platform have seen up to a 6% retention lift and a 30% increase in career confidence."
  },
  {
    question: "What kind of ROI can institutions expect from mentorship programs?",
    answer: "Our partners report significant ROI, including millions in operational savings. For example, some districts have saved over $20,000 per retained teacher, while campuses have realized $7.8M in value through improved persistence and engagement."
  },
  {
    question: "Is there data to show how mentorship impacts belonging or career confidence?",
    answer: "Yes. Learners on our platform experience up to a 19% boost in sense of belonging, and mentees are 2.5x more likely to feel career-ready. Our built-in analytics track these metrics in real time."
  },
  {
    question: "Can Mentor Collective help us measure the impact of our mentorship programs?",
    answer: "Absolutely. Our Insights Hub transforms conversation data into actionable intelligence. You can monitor engagement, belonging, risk flags, and ROI through configurable dashboards."
  },
  {
    question: "Who is this platform for—students, employers, or institutions?",
    answer: "All of the above. We serve higher education institutions, employers, workforce boards, and nonprofits. Our platform supports students, jobseekers, early-career professionals, and alumni."
  },
  {
    question: "How can employers use this mentorship platform to retain early talent?",
    answer: "Employers embed mentorship into internships, onboarding, and development programs to improve conversion and reduce early attrition. Some partners have seen a 42% increase in intern-to-full-time conversion."
  },
  {
    question: "How does Mentor Collective support first-generation and underrepresented students?",
    answer: "We use identity-aligned matching and scalable tools to ensure equitable access to social capital. Mentorship helps close opportunity gaps and build confidence for learners navigating systemic barriers."
  },
  {
    question: "Does this platform support mentorship across alumni networks or workforce pipelines?",
    answer: "Yes. Many partners use Mentor Collective to activate alumni, connect learners to industry professionals, and power regional talent pathways."
  },
  {
    question: "What does onboarding look like for mentors and mentees?",
    answer: "Participants receive intuitive, research-backed training. Onboarding is self-guided and mobile-friendly, making it easy to get started. Our platform handles recruitment nudges, surveys, and reminders."
  },
  {
    question: "How does AI help with mentor matching and engagement?",
    answer: "Our proprietary algorithm uses 80+ variables to optimize matches based on goals, identity, and experience. AI also drives engagement through Sparks—personalized prompts that sustain conversation and deepen relationships."
  },
  {
    question: "What are Conversation Sparks™ and how do they work?",
    answer: "Conversation Sparks are AI-guided prompts tailored to each match. They remove the #1 barrier to mentorship—not knowing what to say—and help relationships thrive. Prompts evolve over time based on engagement data."
  },
  {
    question: "What kind of support does Mentor Collective offer for program admins?",
    answer: "We provide full-service support, from implementation to launch to continuous improvement. Our team helps customize programs, configure reports, and maximize impact without adding staff burden."
  },
  {
    question: "What kind of organizations partner with Mentor Collective?",
    answer: "We work with 200+ partners across higher education, regional networks, nonprofits, and employers. Our platform supports everything from campus-wide initiatives to statewide workforce programs."
  },
  {
    question: "How secure is the platform and how is data handled?",
    answer: "Security is a top priority. We support encrypted data feeds, secure integrations, and rigorous privacy protocols to protect participant information and institutional data."
  },
  {
    question: "What are some examples of successful mentorship programs using this system?",
    answer: "At UW-Green Bay, first-generation students in our program saw a 30.6% increase in career decision confidence and a 90% re-enrollment rate. Princeton's graduate program achieved 99% employment within a year for mentees in mentorship and experiential learning programs."
  }
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

export function Component() {
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

export const fields = (
  <ModuleFields>
    {/* FAQ content is built into the component */}
  </ModuleFields>
);

export const meta = {
  label: 'FAQ Page Content',
};
