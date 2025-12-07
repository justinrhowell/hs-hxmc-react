import React from 'react';
import {
  ModuleFields,
  TextField,
  RichTextField,
} from '@hubspot/cms-components/fields';
import { ScrollAnimationScript } from '../../shared/ScrollAnimationScript';

// HubSpot Form Configuration
const HUBSPOT_PORTAL_ID = '512371';
const DEFAULT_FORM_ID = '3c350305-6fab-4671-b04e-fa54be40a813';

const defaultDescription = `Backed by over a decade of results and 500,000+ mentorships across 200+ partnerships, Mentor Collective is the premier AI Mentorship Operating System. We don't just match people—we move them forward. Our proven approach helps partners achieve a positive return on investment (ROI) by improving key outcomes for the people they serve.

Our technology strengthens authentic human connections at scale. We deliver data-informed interventions that drive measurable gains in confidence, career clarity, and engagement, including:`;

const defaultStats = [
  '+6% retention lift for mentored students',
  '+8–19% boost in belonging for participants',
  '+30% gain in career decision self-efficacy',
  '+45% spike in career services engagement',
];

const defaultClosing = "Let's design a mentorship program that's built for your organization, supported by real-time insights, and proven to create lasting impact.";

export function Component({ fieldValues }: any) {
  const formId = fieldValues.form_id || DEFAULT_FORM_ID;

  return (
    <>
      <ScrollAnimationScript />
      <style dangerouslySetInnerHTML={{__html: `
        @media (max-width: 968px) {
          .demo-hero-grid {
            grid-template-columns: 1fr !important;
            text-align: center !important;
          }
          .demo-hero-content {
            align-items: center !important;
          }
          .demo-hero-stats {
            text-align: left !important;
          }
          .demo-hero-form-wrapper {
            max-width: 100% !important;
            margin: 0 auto !important;
          }
        }

        /* HubSpot form styling */
        .demo-hero-form .hs-form {
          font-family: var(--font-body) !important;
        }

        .demo-hero-form .hs-form-field {
          margin-bottom: 16px !important;
        }

        .demo-hero-form .hs-form-field label {
          font-weight: 600 !important;
          color: var(--text-primary) !important;
          margin-bottom: 8px !important;
          display: block !important;
          font-size: 14px !important;
        }

        .demo-hero-form .hs-input {
          width: 100% !important;
          padding: 12px 16px !important;
          border: 2px solid var(--border-medium) !important;
          border-radius: 8px !important;
          font-size: 16px !important;
          transition: border-color 0.2s ease !important;
          font-family: inherit !important;
          background: white !important;
        }

        .demo-hero-form .hs-input:focus {
          border-color: var(--text-coral) !important;
          outline: none !important;
          box-shadow: 0 0 0 3px rgba(239, 71, 111, 0.1) !important;
        }

        .demo-hero-form select.hs-input {
          appearance: none !important;
          background-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='12' height='12' viewBox='0 0 12 12'%3E%3Cpath fill='%236B7280' d='M6 8L1 3h10z'/%3E%3C/svg%3E") !important;
          background-repeat: no-repeat !important;
          background-position: right 16px center !important;
          padding-right: 40px !important;
          background-color: white !important;
        }

        .demo-hero-form textarea.hs-input {
          min-height: 100px !important;
          resize: vertical !important;
        }

        .demo-hero-form .hs-button {
          background: var(--gradient-coral) !important;
          color: white !important;
          padding: 14px 32px !important;
          border: none !important;
          border-radius: 100px !important;
          font-weight: 600 !important;
          font-size: 16px !important;
          cursor: pointer !important;
          transition: all 0.2s ease !important;
          width: 100% !important;
          margin-top: 8px !important;
        }

        .demo-hero-form .hs-button:hover {
          transform: translateY(-2px) !important;
          box-shadow: 0 8px 20px rgba(239, 71, 111, 0.3) !important;
        }

        .demo-hero-form .hs-error-msgs {
          color: #dc2626 !important;
          font-size: 13px !important;
          margin-top: 4px !important;
        }

        .demo-hero-form .hs-form-required {
          color: var(--text-coral) !important;
        }

        .demo-hero-form .submitted-message {
          text-align: center !important;
          padding: 40px 20px !important;
          color: var(--text-primary) !important;
        }

        .demo-hero-form .submitted-message h3,
        .demo-hero-form .submitted-message p {
          margin: 0 0 8px 0 !important;
        }
      `}} />

      <script dangerouslySetInnerHTML={{__html: `
        (function() {
          var portalId = "${HUBSPOT_PORTAL_ID}";
          var formId = "${formId}";
          var formLoaded = false;

          function loadHubSpotScript(callback) {
            if (window.hbspt && window.hbspt.forms) {
              callback();
              return;
            }
            var script = document.createElement('script');
            script.src = '//js.hsforms.net/forms/embed/v2.js';
            script.charset = 'utf-8';
            script.onload = callback;
            document.head.appendChild(script);
          }

          function createDemoForm() {
            var target = document.getElementById('demo-hero-form');
            if (!target || formLoaded) return;

            target.innerHTML = '';

            window.hbspt.forms.create({
              region: "na1",
              portalId: portalId,
              formId: formId,
              target: "#demo-hero-form"
            });
            formLoaded = true;
          }

          function initDemoHero() {
            loadHubSpotScript(createDemoForm);
          }

          if (document.readyState === 'loading') {
            document.addEventListener('DOMContentLoaded', initDemoHero);
          } else {
            setTimeout(initDemoHero, 100);
          }
        })();
      `}} />

      <section
        className="scroll-animate"
        style={{
          display: 'flex',
          alignItems: 'center',
          padding: 'var(--spacing-xl) var(--spacing-lg) var(--section-padding-lg)',
          background: 'var(--gradient-hero)',
          backgroundImage: 'var(--pattern-dots)',
          backgroundSize: 'var(--pattern-dots-size)',
          position: 'relative',
          minHeight: '600px',
        }}
      >
        <div
          className="demo-hero-grid"
          style={{
            maxWidth: 'var(--max-width-xl)',
            margin: '0 auto',
            width: '100%',
            display: 'grid',
            gridTemplateColumns: '1fr 1fr',
            gap: 'var(--spacing-3xl)',
            alignItems: 'flex-start',
          }}
        >
          {/* Left Column - Text Content */}
          <div
            className="demo-hero-content"
            style={{
              position: 'relative',
              zIndex: 1,
              display: 'flex',
              flexDirection: 'column',
              alignItems: 'flex-start',
            }}
          >
            <h1 style={{
              fontSize: 'var(--font-size-h1)',
              fontWeight: 600,
              lineHeight: 'var(--line-height-tight)',
              letterSpacing: 'var(--letter-spacing-tight)',
              marginBottom: 'var(--spacing-md)',
              color: 'var(--text-primary)',
              fontFamily: 'var(--font-headline)',
            }}>
              {fieldValues.title || 'The Mentorship Platform for ROI and Impact'}
            </h1>

            <p style={{
              fontSize: 'var(--font-size-body)',
              color: 'var(--text-secondary)',
              lineHeight: 'var(--line-height-relaxed)',
              marginBottom: 'var(--spacing-md)',
            }}>
              {fieldValues.description || defaultDescription}
            </p>

            {/* Stats list */}
            <ul className="demo-hero-stats" style={{
              listStyle: 'none',
              padding: 0,
              margin: '0 0 var(--spacing-lg) 0',
              display: 'flex',
              flexDirection: 'column',
              gap: 'var(--spacing-xs)',
            }}>
              {[
                fieldValues.stat_1 || defaultStats[0],
                fieldValues.stat_2 || defaultStats[1],
                fieldValues.stat_3 || defaultStats[2],
                fieldValues.stat_4 || defaultStats[3],
              ].map((stat, index) => (
                <li key={index} style={{
                  display: 'flex',
                  alignItems: 'center',
                  gap: 'var(--spacing-sm)',
                  fontSize: 'var(--font-size-body)',
                  color: 'var(--text-primary)',
                  fontWeight: 600,
                }}>
                  <svg width="20" height="20" viewBox="0 0 20 20" fill="none" style={{ flexShrink: 0 }}>
                    <circle cx="10" cy="10" r="10" fill="var(--text-coral)" fillOpacity="0.1"/>
                    <path d="M6 10L9 13L14 7" stroke="var(--text-coral)" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                  </svg>
                  {stat}
                </li>
              ))}
            </ul>

            <p style={{
              fontSize: 'var(--font-size-body)',
              color: 'var(--text-secondary)',
              lineHeight: 'var(--line-height-relaxed)',
              fontStyle: 'italic',
            }}>
              {fieldValues.closing || defaultClosing}
            </p>
          </div>

          {/* Right Column - Form Card */}
          <div
            className="demo-hero-form-wrapper scroll-animate"
            data-delay="200"
            style={{
              position: 'relative',
            }}
          >
            <div style={{
              background: 'white',
              borderRadius: 'var(--radius-xl)',
              padding: 'var(--spacing-xl)',
              boxShadow: '0 25px 50px -12px rgba(0, 0, 0, 0.15)',
              border: '1px solid var(--border-light)',
            }}>
              <h2 style={{
                fontSize: 'var(--font-size-h4)',
                fontWeight: 600,
                color: 'var(--text-primary)',
                marginBottom: 'var(--spacing-lg)',
                fontFamily: 'var(--font-headline)',
              }}>
                {fieldValues.form_title || 'Request Consultation'}
              </h2>

              <div id="demo-hero-form" className="demo-hero-form">
                {/* HubSpot form will be loaded here */}
                <div style={{
                  padding: '40px',
                  textAlign: 'center',
                  color: 'var(--text-muted)',
                }}>
                  <p>Loading form...</p>
                </div>
              </div>

              <p style={{
                fontSize: '12px',
                color: 'var(--text-muted)',
                textAlign: 'center',
                marginTop: 'var(--spacing-md)',
              }}>
                By submitting this form, you agree to our{' '}
                <a href="/privacy-policy" style={{ color: 'var(--primary-coral)', textDecoration: 'none' }}>Privacy Policy</a>
              </p>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

export const fields = (
  <ModuleFields>
    <TextField
      name="title"
      label="Hero Title"
      default="The Mentorship Platform for ROI and Impact"
    />
    <TextField
      name="description"
      label="Description"
      default={defaultDescription}
    />
    <TextField
      name="stat_1"
      label="Stat 1"
      default="+6% retention lift for mentored students"
    />
    <TextField
      name="stat_2"
      label="Stat 2"
      default="+8–19% boost in belonging for participants"
    />
    <TextField
      name="stat_3"
      label="Stat 3"
      default="+30% gain in career decision self-efficacy"
    />
    <TextField
      name="stat_4"
      label="Stat 4"
      default="+45% spike in career services engagement"
    />
    <TextField
      name="closing"
      label="Closing Statement"
      default={defaultClosing}
    />
    <TextField
      name="form_title"
      label="Form Card Title"
      default="Request Consultation"
    />
    <TextField
      name="form_id"
      label="HubSpot Form ID"
      default="3c350305-6fab-4671-b04e-fa54be40a813"
    />
  </ModuleFields>
);

export const meta = {
  label: 'Demo Hero',
};
