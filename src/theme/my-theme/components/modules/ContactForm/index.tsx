import {
  ModuleFields,
  TextField,
  ChoiceField,
} from '@hubspot/cms-components/fields';

export function Component({ fieldValues }: any) {
  const heading = fieldValues.heading || 'Get in Touch';
  const description = fieldValues.description || 'Have questions? We\'d love to hear from you. Send us a message and we\'ll respond as soon as possible.';
  const layout = fieldValues.layout || 'centered';
  const showContactInfo = fieldValues.show_contact_info !== 'false';

  const contactInfo = [
    {
      icon: (
        <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
          <path d="M3 8L10.89 13.26C11.54 13.67 12.46 13.67 13.11 13.26L21 8M5 19H19C20.1046 19 21 18.1046 21 17V7C21 5.89543 20.1046 5 19 5H5C3.89543 5 3 5.89543 3 7V17C3 18.1046 3.89543 19 5 19Z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
        </svg>
      ),
      label: 'Email',
      value: fieldValues.email || 'hello@mentorcollective.org',
      link: `mailto:${fieldValues.email || 'hello@mentorcollective.org'}`,
    },
    {
      icon: (
        <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
          <path d="M3 5C3 3.89543 3.89543 3 5 3H8.27924C8.70967 3 9.09181 3.27543 9.22792 3.68377L10.7257 8.17721C10.8831 8.64932 10.6694 9.16531 10.2243 9.38787L7.96701 10.5165C9.06925 12.9612 11.0388 14.9308 13.4835 16.033L14.6121 13.7757C14.8347 13.3306 15.3507 13.1169 15.8228 13.2743L20.3162 14.7721C20.7246 14.9082 21 15.2903 21 15.7208V19C21 20.1046 20.1046 21 19 21H18C9.71573 21 3 14.2843 3 6V5Z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
        </svg>
      ),
      label: 'Phone',
      value: fieldValues.phone || '+1 (555) 123-4567',
      link: `tel:${fieldValues.phone || '+15551234567'}`,
    },
    {
      icon: (
        <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
          <path d="M12 21C16.9706 21 21 16.9706 21 12C21 7.02944 16.9706 3 12 3C7.02944 3 3 7.02944 3 12C3 16.9706 7.02944 21 12 21Z" stroke="currentColor" strokeWidth="2"/>
          <path d="M12 7V12L15 15" stroke="currentColor" strokeWidth="2" strokeLinecap="round"/>
        </svg>
      ),
      label: 'Hours',
      value: fieldValues.hours || 'Mon-Fri, 9AM-5PM EST',
      link: null,
    },
  ];

  return (
    <>
      <style dangerouslySetInnerHTML={{__html: `
        .contact-input:focus,
        .contact-textarea:focus {
          border-color: #EF476F !important;
          box-shadow: 0 0 0 3px rgba(239, 71, 111, 0.1) !important;
        }

        .contact-submit-btn:hover {
          transform: translateY(-2px);
          box-shadow: 0 12px 28px rgba(239, 71, 111, 0.35) !important;
        }

        @media (max-width: 768px) {
          .contact-layout-split {
            grid-template-columns: 1fr !important;
            gap: 3rem !important;
          }
        }
      `}} />

      <section style={{
        padding: '80px 20px',
        background: 'linear-gradient(180deg, #FFFFFF 0%, #FFFBF8 100%)',
      }}>
        <div style={{
          maxWidth: layout === 'wide' ? '1200px' : '900px',
          margin: '0 auto',
        }}>
          {/* Header */}
          <div style={{
            textAlign: layout === 'centered' ? 'center' : 'left',
            marginBottom: '3rem',
            maxWidth: layout === 'centered' ? '700px' : '100%',
            margin: layout === 'centered' ? '0 auto 3rem' : '0 0 3rem 0',
          }}>
            <h2 style={{
              fontSize: 'clamp(2rem, 4vw, 3rem)',
              fontWeight: 500,
              marginBottom: '1rem',
              color: '#1a1a1a',
              fontFamily: 'var(--font-headline)',
            }}>
              {heading}
            </h2>
            <p style={{
              fontSize: '1.15rem',
              lineHeight: 1.7,
              color: '#6B7280',
            }}>
              {description}
            </p>
          </div>

          {/* Main Content */}
          <div
            className={layout === 'split' ? 'contact-layout-split' : ''}
            style={{
              display: 'grid',
              gridTemplateColumns: layout === 'split' ? '1fr 1.5fr' : '1fr',
              gap: '4rem',
              alignItems: 'start',
            }}
          >
            {/* Contact Info (only for split layout) */}
            {layout === 'split' && showContactInfo && (
              <div>
                <h3 style={{
                  fontSize: '1.5rem',
                  fontWeight: 500,
                  marginBottom: '1.5rem',
                  color: '#1a1a1a',
                  fontFamily: 'var(--font-headline)',
                }}>
                  Contact Information
                </h3>
                <div style={{ display: 'flex', flexDirection: 'column', gap: '1.5rem' }}>
                  {contactInfo.map((item, index) => (
                    <div key={index} style={{
                      display: 'flex',
                      alignItems: 'flex-start',
                      gap: '1rem',
                    }}>
                      <div style={{
                        width: '48px',
                        height: '48px',
                        borderRadius: 'var(--radius-md)',
                        background: 'rgba(239, 71, 111, 0.1)',
                        color: '#EF476F',
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'center',
                        flexShrink: 0,
                      }}>
                        {item.icon}
                      </div>
                      <div>
                        <div style={{
                          fontSize: '0.85rem',
                          fontWeight: 600,
                          color: '#9CA3AF',
                          textTransform: 'uppercase',
                          letterSpacing: '0.05em',
                          marginBottom: '0.25rem',
                        }}>
                          {item.label}
                        </div>
                        {item.link ? (
                          <a href={item.link} style={{
                            fontSize: '1rem',
                            color: '#1a1a1a',
                            textDecoration: 'none',
                            transition: 'color 0.3s ease',
                          }}>
                            {item.value}
                          </a>
                        ) : (
                          <div style={{
                            fontSize: '1rem',
                            color: '#1a1a1a',
                          }}>
                            {item.value}
                          </div>
                        )}
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            )}

            {/* Form */}
            <div style={{
              background: 'white',
              padding: '3rem',
              borderRadius: 'var(--radius-xl)',
              boxShadow: '0 8px 32px rgba(0, 0, 0, 0.06)',
              border: '1px solid rgba(239, 71, 111, 0.08)',
            }}>
              <form>
                {/* Name Fields */}
                <div style={{
                  display: 'grid',
                  gridTemplateColumns: '1fr 1fr',
                  gap: '1rem',
                  marginBottom: '1.5rem',
                }}>
                  <div>
                    <label style={{
                      display: 'block',
                      fontSize: '0.9rem',
                      fontWeight: 600,
                      color: '#374151',
                      marginBottom: '0.5rem',
                    }}>
                      First Name *
                    </label>
                    <input
                      type="text"
                      required
                      className="contact-input"
                      style={{
                        width: '100%',
                        padding: '0.875rem 1rem',
                        border: '2px solid #E5E7EB',
                        borderRadius: 'var(--radius-md)',
                        fontSize: '1rem',
                        outline: 'none',
                        transition: 'var(--transition-medium)',
                      }}
                    />
                  </div>
                  <div>
                    <label style={{
                      display: 'block',
                      fontSize: '0.9rem',
                      fontWeight: 600,
                      color: '#374151',
                      marginBottom: '0.5rem',
                    }}>
                      Last Name *
                    </label>
                    <input
                      type="text"
                      required
                      className="contact-input"
                      style={{
                        width: '100%',
                        padding: '0.875rem 1rem',
                        border: '2px solid #E5E7EB',
                        borderRadius: 'var(--radius-md)',
                        fontSize: '1rem',
                        outline: 'none',
                        transition: 'var(--transition-medium)',
                      }}
                    />
                  </div>
                </div>

                {/* Email */}
                <div style={{ marginBottom: '1.5rem' }}>
                  <label style={{
                    display: 'block',
                    fontSize: '0.9rem',
                    fontWeight: 600,
                    color: '#374151',
                    marginBottom: '0.5rem',
                  }}>
                    Email Address *
                  </label>
                  <input
                    type="email"
                    required
                    className="contact-input"
                    style={{
                      width: '100%',
                      padding: '0.875rem 1rem',
                      border: '2px solid #E5E7EB',
                      borderRadius: 'var(--radius-md)',
                      fontSize: '1rem',
                      outline: 'none',
                      transition: 'var(--transition-medium)',
                    }}
                  />
                </div>

                {/* Subject */}
                <div style={{ marginBottom: '1.5rem' }}>
                  <label style={{
                    display: 'block',
                    fontSize: '0.9rem',
                    fontWeight: 600,
                    color: '#374151',
                    marginBottom: '0.5rem',
                  }}>
                    Subject
                  </label>
                  <input
                    type="text"
                    className="contact-input"
                    style={{
                      width: '100%',
                      padding: '0.875rem 1rem',
                      border: '2px solid #E5E7EB',
                      borderRadius: 'var(--radius-md)',
                      fontSize: '1rem',
                      outline: 'none',
                      transition: 'var(--transition-medium)',
                    }}
                  />
                </div>

                {/* Message */}
                <div style={{ marginBottom: '2rem' }}>
                  <label style={{
                    display: 'block',
                    fontSize: '0.9rem',
                    fontWeight: 600,
                    color: '#374151',
                    marginBottom: '0.5rem',
                  }}>
                    Message *
                  </label>
                  <textarea
                    required
                    rows={6}
                    className="contact-textarea"
                    style={{
                      width: '100%',
                      padding: '0.875rem 1rem',
                      border: '2px solid #E5E7EB',
                      borderRadius: 'var(--radius-md)',
                      fontSize: '1rem',
                      outline: 'none',
                      transition: 'var(--transition-medium)',
                      resize: 'vertical',
                      fontFamily: 'inherit',
                    }}
                  />
                </div>

                {/* Submit Button */}
                <button
                  type="submit"
                  className="contact-submit-btn"
                  style={{
                    width: '100%',
                    background: 'linear-gradient(135deg, #EF476F 0%, #F89F7B 100%)',
                    color: 'white',
                    padding: 'var(--btn-padding)',
                    borderRadius: 'var(--radius-full)',
                    border: 'none',
                    fontSize: '1rem',
                    fontWeight: 600,
                    cursor: 'pointer',
                    transition: 'var(--transition-medium)',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    gap: '0.5rem',
                  }}
                >
                  Send Message
                  <svg width="18" height="18" viewBox="0 0 24 24" fill="none">
                    <path d="M22 2L11 13M22 2L15 22L11 13M22 2L2 9L11 13" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                  </svg>
                </button>
              </form>
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
      name="heading"
      label="Heading"
      default="Get in Touch"
    />
    <TextField
      name="description"
      label="Description"
      default="Have questions? We'd love to hear from you. Send us a message and we'll respond as soon as possible."
    />
    <ChoiceField
      name="layout"
      label="Layout Style"
      choices={[
        ['centered', 'Centered (form only)'],
        ['split', 'Split (info + form)'],
        ['wide', 'Wide (full width form)'],
      ]}
      default="centered"
    />
    <ChoiceField
      name="show_contact_info"
      label="Show Contact Info"
      choices={[
        ['true', 'Yes'],
        ['false', 'No'],
      ]}
      default="true"
    />
    <TextField
      name="email"
      label="Contact Email"
      default="hello@mentorcollective.org"
    />
    <TextField
      name="phone"
      label="Contact Phone"
      default="+1 (555) 123-4567"
    />
    <TextField
      name="hours"
      label="Business Hours"
      default="Mon-Fri, 9AM-5PM EST"
    />
  </ModuleFields>
);

export const meta = {
  label: 'Contact Form',
};
