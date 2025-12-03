import {
  ModuleFields,
  TextField,
  RepeatedFieldGroup,
  ChoiceField,
  BooleanField,
} from '@hubspot/cms-components/fields';

export function Component({ fieldValues }: any) {
  const heading = fieldValues.heading || 'Choose Your Plan';
  const subtitle = fieldValues.subtitle || 'Flexible pricing for organizations of all sizes';

  const plans = fieldValues.plans || [
    {
      plan_name: 'Starter',
      description: 'Perfect for small programs',
      price: '$2,500',
      billing_period: '/month',
      is_featured: false,
      cta_text: 'Get Started',
      cta_url: '#',
      features: ['Up to 100 students', 'Basic matching', 'Email support', 'Monthly reports']
    },
    {
      plan_name: 'Professional',
      description: 'Ideal for growing institutions',
      price: '$5,000',
      billing_period: '/month',
      is_featured: true,
      cta_text: 'Get Started',
      cta_url: '#',
      features: ['Up to 500 students', 'AI-powered matching', 'Priority support', 'Advanced analytics', 'Custom branding']
    },
    {
      plan_name: 'Enterprise',
      description: 'For large-scale programs',
      price: 'Custom',
      billing_period: '',
      is_featured: false,
      cta_text: 'Contact Sales',
      cta_url: '#',
      features: ['Unlimited students', 'Dedicated account manager', '24/7 support', 'API access', 'Custom integrations', 'White-label solution']
    }
  ];

  return (
    <>
      <style dangerouslySetInnerHTML={{__html: `
        .pricing-card {
          transition: all 0.4s cubic-bezier(0.4, 0, 0.2, 1);
        }

        .pricing-card:hover {
          transform: translateY(-8px);
          box-shadow: 0 16px 48px rgba(0, 0, 0, 0.12) !important;
        }

        .pricing-card-featured {
          border: 2px solid var(--primary-coral) !important;
          transform: scale(1.05);
        }

        .pricing-card-featured:hover {
          transform: scale(1.05) translateY(-8px);
        }

        .pricing-cta-btn:hover {
          transform: translateY(-2px);
          box-shadow: 0 12px 28px rgba(239, 71, 111, 0.35) !important;
        }

        @media (max-width: 1024px) {
          .pricing-grid {
            grid-template-columns: 1fr !important;
            max-width: 500px !important;
            margin: 0 auto !important;
          }
          .pricing-card-featured {
            transform: scale(1) !important;
          }
        }
      `}} />

      <section style={{
        padding: '80px 20px',
        background: 'var(--gradient-hero)',
      }}>
        <div style={{ maxWidth: '1200px', margin: '0 auto' }}>
          {/* Header */}
          <div style={{
            textAlign: 'center',
            marginBottom: 'var(--spacing-2xl)',
          }}>
            <h2 style={{
              fontSize: 'clamp(2rem, 4vw, 3rem)',
              fontWeight: 500,
              marginBottom: 'var(--spacing-md)',
              color: 'var(--text-primary)',
              fontFamily: 'var(--font-headline)',
            }}>
              {heading}
            </h2>
            <p style={{
              fontSize: 'var(--font-size-body-lg)',
              color: 'var(--text-muted)',
              maxWidth: '600px',
              margin: '0 auto',
            }}>
              {subtitle}
            </p>
          </div>

          {/* Pricing Cards */}
          <div
            className="pricing-grid"
            style={{
              display: 'grid',
              gridTemplateColumns: `repeat(${Math.min(plans.length, 3)}, 1fr)`,
              gap: 'var(--spacing-xl)',
              marginBottom: 'var(--spacing-2xl)',
            }}
          >
            {plans.map((plan: any, index: number) => {
              const isFeatured = plan.is_featured;
              const features = Array.isArray(plan.features) ? plan.features : plan.features.split(',').map((f: string) => f.trim());

              return (
                <div
                  key={index}
                  className={`pricing-card ${isFeatured ? 'pricing-card-featured' : ''}`}
                  style={{
                    background: 'var(--text-white)',
                    borderRadius: 'var(--radius-xl)',
                    padding: 'var(--spacing-xl)',
                    boxShadow: '0 8px 32px rgba(0, 0, 0, 0.06)',
                    border: isFeatured ? '2px solid var(--primary-coral)' : '2px solid var(--border-light)',
                    position: 'relative',
                    display: 'flex',
                    flexDirection: 'column',
                  }}
                >
                  {/* Featured Badge */}
                  {isFeatured && (
                    <div style={{
                      position: 'absolute',
                      top: '-14px',
                      left: '50%',
                      transform: 'translateX(-50%)',
                      background: 'var(--gradient-coral)',
                      color: 'var(--text-white)',
                      padding: '0.4rem 1.5rem',
                      borderRadius: 'var(--radius-full)',
                      fontSize: 'var(--font-size-xs)',
                      fontWeight: 600,
                      textTransform: 'uppercase',
                      letterSpacing: '0.05em',
                      boxShadow: '0 4px 12px rgba(239, 71, 111, 0.3)',
                    }}>
                      Most Popular
                    </div>
                  )}

                  {/* Plan Header */}
                  <div style={{ marginBottom: 'var(--spacing-xl)' }}>
                    <h3 style={{
                      fontSize: 'var(--font-size-h3)',
                      fontWeight: 500,
                      marginBottom: 'var(--spacing-xs)',
                      color: 'var(--text-primary)',
                      fontFamily: 'var(--font-headline)',
                    }}>
                      {plan.plan_name}
                    </h3>
                    <p style={{
                      fontSize: 'var(--font-size-base)',
                      color: 'var(--text-muted)',
                      marginBottom: 'var(--spacing-lg)',
                    }}>
                      {plan.description}
                    </p>

                    {/* Price */}
                    <div style={{
                      display: 'flex',
                      alignItems: 'baseline',
                      gap: 'var(--spacing-xs)',
                      marginBottom: 'var(--spacing-xs)',
                    }}>
                      <span style={{
                        fontSize: 'var(--font-size-h1)',
                        fontWeight: 700,
                        color: 'var(--text-coral)',
                        fontFamily: 'var(--font-headline)',
                        lineHeight: 1,
                      }}>
                        {plan.price}
                      </span>
                      {plan.billing_period && (
                        <span style={{
                          fontSize: 'var(--font-size-body-lg)',
                          color: 'var(--text-muted)',
                        }}>
                          {plan.billing_period}
                        </span>
                      )}
                    </div>
                  </div>

                  {/* Features List */}
                  <div style={{
                    flex: 1,
                    marginBottom: 'var(--spacing-xl)',
                  }}>
                    <div style={{
                      display: 'flex',
                      flexDirection: 'column',
                      gap: 'var(--spacing-md)',
                    }}>
                      {features.map((feature: string, fIndex: number) => (
                        <div key={fIndex} style={{
                          display: 'flex',
                          alignItems: 'flex-start',
                          gap: 'var(--spacing-sm)',
                        }}>
                          <svg width="20" height="20" viewBox="0 0 24 24" fill="none" style={{ flexShrink: 0, marginTop: '2px' }}>
                            <circle cx="12" cy="12" r="10" fill="var(--border-light)"/>
                            <path d="M8 12L11 15L16 9" stroke="var(--primary-coral)" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                          </svg>
                          <span style={{
                            fontSize: 'var(--font-size-base)',
                            color: 'var(--text-secondary)',
                            lineHeight: 1.5,
                          }}>
                            {feature}
                          </span>
                        </div>
                      ))}
                    </div>
                  </div>

                  {/* CTA Button */}
                  <a
                    href={plan.cta_url}
                    className="pricing-cta-btn"
                    style={{
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                      gap: 'var(--spacing-xs)',
                      background: isFeatured
                        ? 'var(--gradient-coral)'
                        : 'transparent',
                      color: isFeatured ? 'var(--text-white)' : 'var(--text-coral)',
                      border: isFeatured ? 'none' : '2px solid var(--primary-coral)',
                      padding: 'var(--btn-padding)',
                      borderRadius: 'var(--radius-full)',
                      fontSize: 'var(--font-size-base)',
                      fontWeight: 600,
                      textDecoration: 'none',
                      transition: 'var(--transition-medium)',
                      textAlign: 'center',
                    }}
                  >
                    {plan.cta_text}
                    <svg width="18" height="18" viewBox="0 0 24 24" fill="none">
                      <path d="M5 12H19M19 12L12 5M19 12L12 19" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                    </svg>
                  </a>
                </div>
              );
            })}
          </div>

          {/* Bottom Note */}
          <div style={{
            textAlign: 'center',
            color: 'var(--text-muted)',
            fontSize: 'var(--font-size-base)',
          }}>
            <p>
              All plans include a 30-day money-back guarantee. Need a custom solution?{' '}
              <a href="#" style={{ color: 'var(--text-coral)', textDecoration: 'none', fontWeight: 600 }}>
                Contact our sales team
              </a>
            </p>
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
      label="Section Heading"
      default="Choose Your Plan"
    />
    <TextField
      name="subtitle"
      label="Subtitle"
      default="Flexible pricing for organizations of all sizes"
    />
    <RepeatedFieldGroup
      name="plans"
      label="Pricing Plans"
      occurrence={{
        min: 1,
        max: 4,
        default: 3,
      }}
    >
      <TextField
        name="plan_name"
        label="Plan Name"
        default="Professional"
      />
      <TextField
        name="description"
        label="Plan Description"
        default="Ideal for growing institutions"
      />
      <TextField
        name="price"
        label="Price"
        default="$5,000"
      />
      <TextField
        name="billing_period"
        label="Billing Period"
        default="/month"
      />
      <BooleanField
        name="is_featured"
        label="Featured Plan"
        default={false}
      />
      <TextField
        name="features"
        label="Features (comma-separated)"
        default="Feature 1, Feature 2, Feature 3"
      />
      <TextField
        name="cta_text"
        label="CTA Button Text"
        default="Get Started"
      />
      <TextField
        name="cta_url"
        label="CTA Button URL"
        default="#"
      />
    </RepeatedFieldGroup>
  </ModuleFields>
);

export const meta = {
  label: 'Pricing Table',
};
