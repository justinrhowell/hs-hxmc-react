import React from 'react';

// HubSpot Form Configuration for Request a Demo
const HUBSPOT_PORTAL_ID = '512371';
const HUBSPOT_FORM_ID = '3c350305-6fab-4671-b04e-fa54be40a813';

export const DemoModal: React.FC = () => {
  return (
    <>
      <style>{`
        .demo-modal-content {
          min-height: 400px;
        }

        /* HubSpot form styling */
        .demo-hs-form-container .hs-form {
          font-family: var(--font-body) !important;
        }

        .demo-hs-form-container .hs-form-field {
          margin-bottom: 16px !important;
        }

        .demo-hs-form-container .hs-form-field label {
          font-weight: 600 !important;
          color: var(--text-primary) !important;
          margin-bottom: 8px !important;
          display: block !important;
          font-size: 14px !important;
        }

        .demo-hs-form-container .hs-input {
          width: 100% !important;
          padding: 12px 16px !important;
          border: 2px solid var(--border-medium) !important;
          border-radius: 8px !important;
          font-size: 16px !important;
          transition: border-color 0.2s ease !important;
          font-family: inherit !important;
        }

        .demo-hs-form-container .hs-input:focus {
          border-color: var(--text-coral) !important;
          outline: none !important;
          box-shadow: 0 0 0 3px rgba(239, 71, 111, 0.1) !important;
        }

        .demo-hs-form-container select.hs-input {
          appearance: none !important;
          background-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='12' height='12' viewBox='0 0 12 12'%3E%3Cpath fill='%236B7280' d='M6 8L1 3h10z'/%3E%3C/svg%3E") !important;
          background-repeat: no-repeat !important;
          background-position: right 16px center !important;
          padding-right: 40px !important;
        }

        .demo-hs-form-container textarea.hs-input {
          min-height: 100px !important;
          resize: vertical !important;
        }

        .demo-hs-form-container .hs-button {
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

        .demo-hs-form-container .hs-button:hover {
          transform: translateY(-2px) !important;
          box-shadow: 0 8px 20px rgba(239, 71, 111, 0.3) !important;
        }

        .demo-hs-form-container .hs-error-msgs {
          color: #dc2626 !important;
          font-size: 13px !important;
          margin-top: 4px !important;
        }

        .demo-hs-form-container .hs-form-required {
          color: var(--text-coral) !important;
        }

        .demo-hs-form-container .submitted-message {
          text-align: center !important;
          padding: 40px 20px !important;
          color: var(--text-primary) !important;
        }

        .demo-hs-form-container .submitted-message h3,
        .demo-hs-form-container .submitted-message p {
          margin: 0 0 8px 0 !important;
        }

        @media (max-width: 768px) {
          .demo-modal-content {
            padding: 24px 20px !important;
          }

          .demo-modal-title {
            font-size: 28px !important;
            line-height: 1.2 !important;
          }

          .demo-modal-subtitle {
            font-size: 14px !important;
          }

          .demo-modal-container {
            max-height: 95vh !important;
            margin: var(--spacing-xs) !important;
          }

          .demo-modal-close {
            top: 16px !important;
            right: 16px !important;
          }
        }

        @media (max-width: 480px) {
          .demo-modal-content {
            padding: 20px 16px !important;
          }

          .demo-modal-title {
            font-size: 24px !important;
          }
        }
      `}</style>
      <script dangerouslySetInnerHTML={{__html: `
        (function() {
          var portalId = "${HUBSPOT_PORTAL_ID}";
          var formId = "${HUBSPOT_FORM_ID}";
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
            var target = document.getElementById('demo-hs-form');
            if (!target || formLoaded) return;

            // Clear any existing content
            target.innerHTML = '';

            window.hbspt.forms.create({
              region: "na1",
              portalId: portalId,
              formId: formId,
              target: "#demo-hs-form",
              onFormSubmitted: function() {
                // Auto-close modal after submission success message shows
                setTimeout(function() {
                  closeModal();
                }, 3000);
              }
            });
            formLoaded = true;
          }

          function closeModal() {
            var modal = document.querySelector('.demo-modal');
            if (modal) {
              modal.style.display = 'none';
              document.body.style.overflow = 'unset';
              // Reset form state for next open
              formLoaded = false;
            }
          }

          function openModal() {
            var modal = document.querySelector('.demo-modal');
            if (modal) {
              modal.style.display = 'flex';
              document.body.style.overflow = 'hidden';
              // Load form when modal opens
              loadHubSpotScript(createDemoForm);
            }
          }

          function initDemoModal() {
            var modal = document.querySelector('.demo-modal');
            var closeBtn = document.querySelector('.demo-modal-close');
            var overlay = document.querySelector('.demo-modal-overlay');

            if (closeBtn) {
              closeBtn.onclick = closeModal;
            }

            if (overlay) {
              overlay.onclick = function(e) {
                if (e.target === overlay) {
                  closeModal();
                }
              };
            }

            document.addEventListener('keydown', function(e) {
              if (e.key === 'Escape' && modal && modal.style.display === 'flex') {
                closeModal();
              }
            });

            // Make openDemoModal globally available
            window.openDemoModal = openModal;
          }

          if (document.readyState === 'loading') {
            document.addEventListener('DOMContentLoaded', initDemoModal);
          } else {
            setTimeout(initDemoModal, 100);
          }
        })();
      `}} />

      <div
        className="demo-modal demo-modal-overlay"
        style={{
          ...styles.overlay,
          display: 'none',
        }}
        role="dialog"
        aria-modal="true"
        aria-labelledby="demo-modal-title"
      >
        <div
          className="demo-modal-container"
          style={styles.modal}
        >
          <button
            className="demo-modal-close"
            style={styles.closeButton}
            type="button"
            aria-label="Close modal"
          >
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
              <path d="M18 6L6 18M6 6L18 18" stroke="currentColor" strokeWidth="2" strokeLinecap="round"/>
            </svg>
          </button>

          <div className="demo-modal-content" style={styles.modalContent}>
            <h2 id="demo-modal-title" className="demo-modal-title" style={styles.title}>Request a Demo</h2>
            <p className="demo-modal-subtitle" style={styles.subtitle}>
              See how Mentor Collective can transform your mentorship program
            </p>

            <div id="demo-hs-form" className="demo-hs-form-container">
              {/* HubSpot form will be loaded here */}
              <div style={styles.loadingPlaceholder}>
                <p>Loading form...</p>
              </div>
            </div>

            <p style={styles.privacy}>
              By submitting this form, you agree to our{' '}
              <a href="/privacy-policy" style={styles.link}>Privacy Policy</a>
            </p>
          </div>
        </div>
      </div>
    </>
  );
};

const styles: Record<string, React.CSSProperties> = {
  overlay: {
    position: 'fixed',
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
    backgroundColor: 'rgba(0, 0, 0, 0.6)',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    zIndex: 9999,
    padding: 'var(--spacing-xs)',
    backdropFilter: 'blur(4px)',
    overflowY: 'auto',
  },
  modal: {
    backgroundColor: 'white',
    borderRadius: '24px',
    maxWidth: '600px',
    width: '100%',
    maxHeight: '90vh',
    overflow: 'auto',
    position: 'relative',
    boxShadow: '0 20px 60px rgba(0, 0, 0, 0.3)',
  },
  closeButton: {
    position: 'absolute',
    top: 'var(--spacing-md)',
    right: 'var(--spacing-md)',
    background: 'transparent',
    border: 'none',
    cursor: 'pointer',
    color: 'var(--text-secondary)',
    padding: 'var(--spacing-xs)',
    borderRadius: '50%',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    transition: 'all 0.2s ease',
    zIndex: 1,
  },
  modalContent: {
    padding: 'var(--spacing-xl)',
  },
  title: {
    fontSize: '36px',
    fontFamily: 'var(--font-headline, "Ginto Nord", sans-serif)',
    fontWeight: 700,
    marginBottom: 'var(--spacing-xs)',
    background: 'var(--gradient-text)',
    WebkitBackgroundClip: 'text',
    WebkitTextFillColor: 'transparent',
    backgroundClip: 'text',
  },
  subtitle: {
    fontSize: '16px',
    color: 'var(--text-secondary)',
    marginBottom: '24px',
  },
  loadingPlaceholder: {
    padding: '40px',
    textAlign: 'center',
    color: 'var(--text-muted)',
  },
  privacy: {
    fontSize: '12px',
    color: 'var(--text-muted)',
    textAlign: 'center',
    marginTop: '16px',
  },
  link: {
    color: 'var(--primary-coral)',
    textDecoration: 'none',
  },
};
