import React from 'react';

export const DemoModal: React.FC = () => {
  return (
    <>
      <style>{`
        .demo-submit-btn:hover:not(:disabled) {
          transform: translateY(-2px);
          box-shadow: 0 12px 32px rgba(239, 71, 111, 0.4) !important;
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
            margin: 10px !important;
          }

          .demo-form-row {
            grid-template-columns: 1fr !important;
            gap: 20px !important;
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
          function initDemoModal() {
            const modal = document.querySelector('.demo-modal');
            const closeBtn = document.querySelector('.demo-modal-close');
            const overlay = document.querySelector('.demo-modal-overlay');
            const form = document.querySelector('.demo-form');
            const successMsg = document.querySelector('.demo-success');
            const submitBtn = document.querySelector('.demo-submit-btn');

            function closeModal() {
              if (modal) {
                modal.style.display = 'none';
                document.body.style.overflow = 'unset';
                if (form) form.style.display = 'flex';
                if (successMsg) successMsg.style.display = 'none';
                if (form) form.reset();
              }
            }

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

            if (form) {
              form.onsubmit = function(e) {
                e.preventDefault();
                if (submitBtn) {
                  submitBtn.disabled = true;
                  submitBtn.textContent = 'Submitting...';
                  submitBtn.style.opacity = '0.7';
                  submitBtn.style.cursor = 'not-allowed';
                }

                // Simulate form submission
                setTimeout(function() {
                  if (form) form.style.display = 'none';
                  if (successMsg) successMsg.style.display = 'flex';

                  setTimeout(function() {
                    closeModal();
                    if (submitBtn) {
                      submitBtn.disabled = false;
                      submitBtn.textContent = 'Request Demo';
                      submitBtn.style.opacity = '1';
                      submitBtn.style.cursor = 'pointer';
                    }
                  }, 2000);
                }, 1500);
              };
            }
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

            <div className="demo-success" style={{ ...styles.successMessage, display: 'none' }}>
              <div style={styles.checkmark}>✓</div>
              <h3 style={styles.successTitle}>Thank you!</h3>
              <p style={styles.successText}>We'll be in touch shortly.</p>
            </div>

            <form className="demo-form" style={styles.form}>
              <div className="demo-form-row" style={styles.row}>
                <div style={styles.inputGroup}>
                  <label htmlFor="firstName" style={styles.label}>
                    First Name *
                  </label>
                  <input
                    type="text"
                    id="firstName"
                    name="firstName"
                    required
                    style={styles.input}
                    aria-required="true"
                  />
                </div>

                <div style={styles.inputGroup}>
                  <label htmlFor="lastName" style={styles.label}>
                    Last Name *
                  </label>
                  <input
                    type="text"
                    id="lastName"
                    name="lastName"
                    required
                    style={styles.input}
                    aria-required="true"
                  />
                </div>
              </div>

              <div style={styles.inputGroup}>
                <label htmlFor="email" style={styles.label}>
                  Work Email *
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  required
                  style={styles.input}
                  aria-required="true"
                />
              </div>

              <div style={styles.inputGroup}>
                <label htmlFor="company" style={styles.label}>
                  Company/Organization *
                </label>
                <input
                  type="text"
                  id="company"
                  name="company"
                  required
                  style={styles.input}
                  aria-required="true"
                />
              </div>

              <div style={styles.inputGroup}>
                <label htmlFor="phone" style={styles.label}>
                  Phone Number
                </label>
                <input
                  type="tel"
                  id="phone"
                  name="phone"
                  style={styles.input}
                />
              </div>

              <div style={styles.inputGroup}>
                <label htmlFor="message" style={styles.label}>
                  What would you like to discuss?
                </label>
                <textarea
                  id="message"
                  name="message"
                  rows={4}
                  style={styles.textarea}
                />
              </div>

              <button
                type="submit"
                className="demo-submit-btn"
                style={styles.submitButton}
              >
                Request Demo
              </button>

              <p style={styles.privacy}>
                By submitting this form, you agree to our{' '}
                <a href="/privacy-policy" style={styles.link}>Privacy Policy</a>
              </p>
            </form>
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
    padding: '10px',
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
    top: '20px',
    right: '20px',
    background: 'transparent',
    border: 'none',
    cursor: 'pointer',
    color: '#666',
    padding: '8px',
    borderRadius: '50%',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    transition: 'all 0.2s ease',
    zIndex: 1,
  },
  modalContent: {
    padding: '50px',
  },
  title: {
    fontSize: '36px',
    fontFamily: 'var(--font-headline, "Ginto Nord", sans-serif)',
    fontWeight: 700,
    marginBottom: '10px',
    background: 'var(--gradient-text)',
    WebkitBackgroundClip: 'text',
    WebkitTextFillColor: 'transparent',
    backgroundClip: 'text',
  },
  subtitle: {
    fontSize: '16px',
    color: '#666',
    marginBottom: '30px',
  },
  form: {
    display: 'flex',
    flexDirection: 'column',
    gap: '20px',
  },
  row: {
    display: 'grid',
    gridTemplateColumns: '1fr 1fr',
    gap: '20px',
  },
  inputGroup: {
    display: 'flex',
    flexDirection: 'column',
  },
  label: {
    fontSize: '14px',
    fontWeight: 600,
    marginBottom: '8px',
    color: '#333',
  },
  input: {
    padding: '12px 16px',
    fontSize: '16px',
    border: '2px solid #E0E0E0',
    borderRadius: '8px',
    transition: 'border-color 0.2s ease',
    fontFamily: 'inherit',
  },
  textarea: {
    padding: '12px 16px',
    fontSize: '16px',
    border: '2px solid #E0E0E0',
    borderRadius: '8px',
    resize: 'vertical',
    fontFamily: 'inherit',
    transition: 'border-color 0.2s ease',
  },
  submitButton: {
    background: 'linear-gradient(135deg, #EF476F 0%, #F89F7B 100%)',
    color: 'white',
    border: 'none',
    padding: '16px 32px',
    fontSize: '16px',
    fontWeight: 600,
    borderRadius: '12px',
    cursor: 'pointer',
    transition: 'all 0.3s ease',
    marginTop: '10px',
  },
  privacy: {
    fontSize: '12px',
    color: '#999',
    textAlign: 'center',
    marginTop: '10px',
  },
  link: {
    color: '#EF476F',
    textDecoration: 'none',
  },
  successMessage: {
    textAlign: 'center',
    padding: '40px 0',
  },
  checkmark: {
    width: '80px',
    height: '80px',
    borderRadius: '50%',
    background: 'linear-gradient(135deg, #10B981 0%, #34D399 100%)',
    color: 'white',
    fontSize: '48px',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    margin: '0 auto 20px',
  },
  successTitle: {
    fontSize: '28px',
    fontWeight: 700,
    marginBottom: '10px',
    color: '#333',
  },
  successText: {
    fontSize: '16px',
    color: '#666',
  },
};
