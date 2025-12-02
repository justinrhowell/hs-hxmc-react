import {
  ModuleFields,
  TextField,
  ChoiceField,
} from '@hubspot/cms-components/fields';

export function Component({ fieldValues }: any) {
  const heading = fieldValues.heading || 'Stay Updated with Latest Insights';
  const description = fieldValues.description || 'Get the latest resources, case studies, and best practices delivered directly to your inbox.';
  const ctaText = fieldValues.cta_text || 'Subscribe Now';
  const inputPlaceholder = fieldValues.input_placeholder || 'Enter your email';
  const ctaType = fieldValues.cta_type || 'newsletter';

  const ctaConfig = {
    newsletter: {
      icon: (
        <svg width="28" height="28" viewBox="0 0 24 24" fill="none">
          <path d="M3 8L10.89 13.26C11.54 13.67 12.46 13.67 13.11 13.26L21 8M5 19H19C20.1046 19 21 18.1046 21 17V7C21 5.89543 20.1046 5 19 5H5C3.89543 5 3 5.89543 3 7V17C3 18.1046 3.89543 19 5 19Z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
        </svg>
      ),
      buttonText: ctaText || 'Subscribe',
    },
    download: {
      icon: (
        <svg width="28" height="28" viewBox="0 0 24 24" fill="none">
          <path d="M21 15V19C21 19.5304 20.7893 20.0391 20.4142 20.4142C20.0391 20.7893 19.5304 21 19 21H5C4.46957 21 3.96086 20.7893 3.58579 20.4142C3.21071 20.0391 3 19.5304 3 19V15M7 10L12 15M12 15L17 10M12 15V3" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
        </svg>
      ),
      buttonText: ctaText || 'Download',
    },
    contact: {
      icon: (
        <svg width="28" height="28" viewBox="0 0 24 24" fill="none">
          <path d="M16 2H8C6.9 2 6 2.9 6 4V20C6 21.1 6.9 22 8 22H16C17.1 22 18 21.1 18 20V4C18 2.9 17.1 2 16 2ZM12 20C11.45 20 11 19.55 11 19C11 18.45 11.45 18 12 18C12.55 18 13 18.45 13 19C13 19.55 12.55 20 12 20ZM16 17H8V5H16V17Z" fill="currentColor"/>
        </svg>
      ),
      buttonText: ctaText || 'Get in Touch',
    }
  };

  const config = ctaConfig[ctaType as keyof typeof ctaConfig] || ctaConfig.newsletter;

  return (
    <section style={{
      padding: '80px 20px',
      background: 'linear-gradient(135deg, #EF476F 0%, #F89F7B 100%)',
      position: 'relative',
      overflow: 'hidden',
    }}>
      {/* Decorative Elements */}
      <div style={{
        position: 'absolute',
        top: '-50px',
        right: '-50px',
        width: '300px',
        height: '300px',
        borderRadius: '50%',
        background: 'rgba(255, 255, 255, 0.1)',
        pointerEvents: 'none',
      }} />
      <div style={{
        position: 'absolute',
        bottom: '-80px',
        left: '-80px',
        width: '400px',
        height: '400px',
        borderRadius: '50%',
        background: 'rgba(255, 255, 255, 0.08)',
        pointerEvents: 'none',
      }} />

      <div style={{ maxWidth: '800px', margin: '0 auto', textAlign: 'center', position: 'relative', zIndex: 1 }}>
        {/* Icon */}
        <div style={{
          display: 'inline-flex',
          alignItems: 'center',
          justifyContent: 'center',
          width: '80px',
          height: '80px',
          borderRadius: '50%',
          background: 'rgba(255, 255, 255, 0.2)',
          color: 'white',
          marginBottom: '2rem',
          backdropFilter: 'blur(10px)',
        }}>
          {config.icon}
        </div>

        {/* Heading */}
        <h2 style={{
          fontSize: 'clamp(2rem, 4vw, 3rem)',
          fontWeight: 500,
          lineHeight: 1.2,
          marginBottom: '1.5rem',
          color: 'white',
          fontFamily: 'var(--font-headline)',
        }}>
          {heading}
        </h2>

        {/* Description */}
        <p style={{
          fontSize: '1.15rem',
          lineHeight: 1.7,
          color: 'rgba(255, 255, 255, 0.95)',
          marginBottom: '3rem',
        }}>
          {description}
        </p>

        {/* Form */}
        <div style={{
          maxWidth: '600px',
          margin: '0 auto',
        }}>
          <div style={{
            display: 'flex',
            alignItems: 'center',
            background: 'white',
            borderRadius: 'var(--radius-full)',
            padding: '0.5rem',
            boxShadow: '0 8px 32px rgba(0, 0, 0, 0.15)',
            gap: '0.5rem',
          }}>
            <input
              type="email"
              placeholder={inputPlaceholder}
              style={{
                flex: 1,
                border: 'none',
                outline: 'none',
                fontSize: '1rem',
                padding: '1rem 1.5rem',
                background: 'transparent',
                color: '#1a1a1a',
              }}
            />
            <button
              type="button"
              style={{
                background: 'linear-gradient(135deg, #1a1a1a 0%, #333333 100%)',
                color: 'white',
                padding: 'var(--btn-padding)',
                borderRadius: 'var(--radius-full)',
                border: 'none',
                fontSize: '1rem',
                fontWeight: 600,
                cursor: 'pointer',
                transition: 'var(--transition-medium)',
                whiteSpace: 'nowrap',
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.transform = 'translateY(-2px)';
                e.currentTarget.style.boxShadow = '0 12px 32px rgba(0, 0, 0, 0.3)';
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.transform = 'translateY(0)';
                e.currentTarget.style.boxShadow = 'none';
              }}
            >
              {config.buttonText}
            </button>
          </div>

          {/* Privacy Notice */}
          <p style={{
            fontSize: '0.85rem',
            color: 'rgba(255, 255, 255, 0.8)',
            marginTop: '1rem',
          }}>
            We respect your privacy. Unsubscribe at any time.
          </p>
        </div>
      </div>
    </section>
  );
}

export const fields = (
  <ModuleFields>
    <TextField
      name="heading"
      label="Heading"
      default="Stay Updated with Latest Insights"
    />
    <TextField
      name="description"
      label="Description"
      default="Get the latest resources, case studies, and best practices delivered directly to your inbox."
    />
    <ChoiceField
      name="cta_type"
      label="CTA Type"
      choices={[
        ['newsletter', 'Newsletter Signup'],
        ['download', 'Download Resource'],
        ['contact', 'Contact Form'],
      ]}
      default="newsletter"
    />
    <TextField
      name="input_placeholder"
      label="Input Placeholder"
      default="Enter your email"
    />
    <TextField
      name="cta_text"
      label="Button Text"
      default="Subscribe Now"
    />
  </ModuleFields>
);

export const meta = {
  label: 'Resource CTA',
};
