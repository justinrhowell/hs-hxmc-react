import React from 'react';
import {
  ModuleFields,
  TextField,
} from '@hubspot/cms-components/fields';

export function Component({ fieldValues }: any) {

  // HubSpot form IDs
  const menteeMentorFormId = fieldValues.mentee_mentor_form_id || '4c4a1c04-786b-4467-986d-ee8b7ccb0eaa';
  const partnerFormId = fieldValues.partner_form_id || 'b343ed2f-a838-40ad-8934-8a5c2463f02b';
  const sfdcCampaignId = fieldValues.sfdc_campaign_id || '701f4000000VuUdAAK';

  return (
    <>
      <style dangerouslySetInnerHTML={{__html: `
        .contact-tabs-section {
          background: var(--gradient-hero);
          padding: 0 var(--spacing-lg) var(--section-padding-lg);
        }

        .contact-tabs-container {
          max-width: 800px;
          margin: 0 auto;
        }

        .contact-tabs-description {
          font-size: var(--font-size-body-lg);
          color: var(--text-secondary);
          line-height: var(--line-height-relaxed);
          text-align: center;
          max-width: 700px;
          margin: 0 auto var(--spacing-xl);
        }

        .contact-tabs-nav {
          display: flex;
          justify-content: center;
          gap: var(--spacing-md);
          margin-bottom: var(--spacing-xl);
        }

        .contact-tab-button {
          background: var(--bg-white);
          border: 1px solid var(--border-light);
          padding: var(--spacing-sm) var(--spacing-lg);
          font-size: var(--font-size-body);
          font-weight: 500;
          color: var(--text-secondary);
          cursor: pointer;
          border-radius: var(--radius-full);
          transition: all 0.2s ease;
          font-family: var(--font-body);
          box-shadow: var(--shadow-sm);
        }

        .contact-tab-button:hover {
          color: var(--text-primary);
          border-color: var(--text-coral);
          box-shadow: var(--shadow-md);
        }

        .contact-tab-button.active {
          background: var(--text-primary);
          color: white;
          border-color: var(--text-primary);
          box-shadow: var(--shadow-md);
        }

        .contact-form-panel {
          display: none;
        }

        .contact-form-panel.active {
          display: block;
        }

        .contact-form-card {
          background: var(--bg-white);
          border-radius: var(--radius-xl);
          padding: var(--spacing-2xl);
          box-shadow: var(--shadow-lg);
          border: 1px solid var(--border-light);
        }

        .contact-form-placeholder {
          padding: var(--spacing-xl);
          background: var(--bg-light);
          border-radius: var(--radius-lg);
          text-align: center;
          color: var(--text-muted);
        }

        /* HubSpot form styling */
        .hs-form-container .hs-form {
          font-family: var(--font-body) !important;
        }

        .hs-form-container .hs-form-field label {
          font-weight: 600 !important;
          color: var(--text-primary) !important;
          margin-bottom: 8px !important;
        }

        .hs-form-container .hs-input {
          width: 100% !important;
          padding: 12px 16px !important;
          border: 2px solid var(--border-light) !important;
          border-radius: var(--radius-md) !important;
          font-size: var(--font-size-base) !important;
          transition: border-color 0.2s ease !important;
        }

        .hs-form-container .hs-input:focus {
          border-color: var(--text-coral) !important;
          outline: none !important;
          box-shadow: 0 0 0 3px rgba(239, 71, 111, 0.1) !important;
        }

        .hs-form-container .hs-button {
          background: var(--gradient-coral) !important;
          color: white !important;
          padding: 14px 32px !important;
          border: none !important;
          border-radius: var(--radius-full) !important;
          font-weight: 600 !important;
          cursor: pointer !important;
          transition: all 0.2s ease !important;
        }

        .hs-form-container .hs-button:hover {
          transform: translateY(-2px) !important;
          box-shadow: var(--shadow-coral-md) !important;
        }

        @media (max-width: 768px) {
          .contact-tabs-nav {
            flex-direction: column;
            gap: var(--spacing-sm);
            align-items: stretch;
          }

          .contact-tab-button {
            text-align: center;
          }
        }
      `}} />

      <script dangerouslySetInnerHTML={{__html: `
        (function() {
          var menteeMentorFormId = "${menteeMentorFormId}";
          var partnerFormId = "${partnerFormId}";
          var sfdcCampaignId = "${sfdcCampaignId}";
          var formsLoaded = { mentee: false, partner: false };

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

          function createForm(targetId, formId, extraOptions) {
            var target = document.getElementById(targetId);
            if (!target || !formId) return;

            var options = {
              region: "na1",
              portalId: "512371",
              formId: formId,
              target: "#" + targetId
            };

            if (extraOptions) {
              Object.assign(options, extraOptions);
            }

            window.hbspt.forms.create(options);
          }

          function initContactTabs() {
            var tabs = document.querySelectorAll('.contact-tab-button');
            var panels = document.querySelectorAll('.contact-form-panel');

            tabs.forEach(function(tab, index) {
              tab.addEventListener('click', function() {
                tabs.forEach(function(t) { t.classList.remove('active'); });
                panels.forEach(function(p) { p.classList.remove('active'); });

                tab.classList.add('active');
                if (panels[index]) {
                  panels[index].classList.add('active');
                }

                // Load partner form when tab is clicked (lazy load)
                if (index === 1 && !formsLoaded.partner && partnerFormId) {
                  loadHubSpotScript(function() {
                    createForm('partner-form-container', partnerFormId, { sfdcCampaignId: sfdcCampaignId });
                    formsLoaded.partner = true;
                  });
                }
              });
            });

            // Load the first form immediately
            if (menteeMentorFormId && !formsLoaded.mentee) {
              loadHubSpotScript(function() {
                createForm('mentee-mentor-form-container', menteeMentorFormId);
                formsLoaded.mentee = true;
              });
            }
          }

          if (document.readyState === 'loading') {
            document.addEventListener('DOMContentLoaded', initContactTabs);
          } else {
            setTimeout(initContactTabs, 100);
          }
        })();
      `}} />

      <section className="contact-tabs-section">
        <div className="contact-tabs-container">
          {/* Tab Navigation */}
          <nav className="contact-tabs-nav">
            <button className="contact-tab-button active" type="button">
              Mentors & Mentees
            </button>
            <button className="contact-tab-button" type="button">
              Partner With Mentor Collective
            </button>
          </nav>

          {/* Form Panel 1: Mentors & Mentees */}
          <div className="contact-form-panel active" id="mentee-mentor-panel">
            <div className="contact-form-card">
              <div id="mentee-mentor-form-container" className="hs-form-container">
                {/* HubSpot form will be loaded here via JavaScript */}
              </div>
            </div>
          </div>

          {/* Form Panel 2: Partner */}
          <div className="contact-form-panel" id="partner-panel">
            <div className="contact-form-card">
              <div id="partner-form-container" className="hs-form-container">
                {/* HubSpot form will be loaded here via JavaScript */}
              </div>
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
      name="mentee_mentor_form_id"
      label="Mentors & Mentees HubSpot Form ID"
      default="4c4a1c04-786b-4467-986d-ee8b7ccb0eaa"
    />
    <TextField
      name="partner_form_id"
      label="Partner HubSpot Form ID"
      default="b343ed2f-a838-40ad-8934-8a5c2463f02b"
    />
    <TextField
      name="sfdc_campaign_id"
      label="Salesforce Campaign ID (for Partner form)"
      default="701f4000000VuUdAAK"
    />
  </ModuleFields>
);

export const meta = {
  label: 'Contact Tabs',
};
