import React from 'react';
import mcLogo from '../../../assets/MentorCollective-Black-Logo.svg';

interface FooterLink {
  text: string;
  url: string;
}

export function Component({ fieldValues }: any) {
  const description = fieldValues.description || 'The premier AI-powered mentorship operating system for human connection, resilience, and adaptability.';
  const facebookUrl = fieldValues.facebook_url || 'https://www.facebook.com/mentorcollective/';
  const linkedinUrl = fieldValues.linkedin_url || 'https://www.linkedin.com/company/mentorcollective/';
  const instagramUrl = fieldValues.instagram_url || 'https://www.instagram.com/mentorcollective/';

  // Build link arrays from field values or use defaults
  const productsLinks: FooterLink[] = (fieldValues.products_links && fieldValues.products_links.length > 0)
    ? fieldValues.products_links.map((item: any) => ({
        text: item.text || 'Link',
        url: item.url || '#',
      }))
    : [
        { text: 'Reveal', url: '/product#reveal' },
        { text: 'Spark', url: '/product#spark' },
        { text: 'Scale', url: '/product#scale' },
        { text: 'Fuel', url: '/product#fuel' },
      ];

  const solutionsLinks: FooterLink[] = (fieldValues.solutions_links && fieldValues.solutions_links.length > 0)
    ? fieldValues.solutions_links.map((item: any) => ({
        text: item.text || 'Link',
        url: item.url || '#',
      }))
    : [
        { text: 'Higher Ed', url: '/solutions/higher-ed' },
        { text: 'K-12', url: '/solutions/k12' },
        { text: 'Enterprise', url: '/solutions/enterprise' },
      ];

  const companyLinks: FooterLink[] = (fieldValues.company_links && fieldValues.company_links.length > 0)
    ? fieldValues.company_links.map((item: any) => ({
        text: item.text || 'Link',
        url: item.url || '#',
      }))
    : [
        { text: 'About', url: '/about' },
        { text: 'Press', url: '/press' },
        { text: 'Contact', url: '/contact' },
      ];

  const privacyUrl = fieldValues.privacy_url || 'https://www.mentorcollective.org/privacy-policy';
  const termsUrl = fieldValues.terms_url || 'https://www.mentorcollective.org/terms-of-use';
  const sitemapUrl = fieldValues.sitemap_url || 'https://www.mentorcollective.org/sitemap';

  const linkStyle: React.CSSProperties = {
    color: 'var(--text-secondary)',
    textDecoration: 'none',
    fontSize: 'var(--font-size-small)',
    transition: 'var(--transition-fast)',
  };

  return (
    <>
      <style>{`
        @media (max-width: 768px) {
          .footer-grid {
            grid-template-columns: 1fr 1fr !important;
            gap: var(--spacing-lg) !important;
          }
          .footer-brand {
            grid-column: 1 / -1;
          }
          .footer-bottom {
            flex-direction: column !important;
            gap: var(--spacing-md) !important;
            text-align: center;
          }
          .footer-legal-links {
            flex-wrap: wrap;
            justify-content: center;
          }
        }
        @media (max-width: 480px) {
          .footer-grid {
            grid-template-columns: 1fr !important;
          }
        }
      `}</style>
      <footer style={{
        padding: 'var(--spacing-2xl) var(--spacing-lg) var(--spacing-lg)',
        background: 'var(--bg-white)',
        color: 'var(--text-primary)',
        borderTop: '1px solid var(--border-light)'
      }}>
        <div className="container" style={{ maxWidth: 'var(--max-width-xl)', margin: '0 auto' }}>
          <div className="footer-grid" style={{
            display: 'grid',
            gridTemplateColumns: '2fr 1fr 1fr 1fr',
            gap: 'var(--spacing-xl)',
            marginBottom: 'var(--spacing-xl)'
          }}>
            {/* Brand Column */}
            <div className="footer-brand">
              <div style={{
                marginBottom: 'var(--spacing-sm)',
                height: '36px'
              }}>
                <img
                  src={fieldValues.logo?.src || mcLogo}
                  alt={fieldValues.logo?.alt || 'Mentor Collective'}
                  style={{
                    height: '100%',
                    width: 'auto'
                  }}
                />
              </div>
              <p style={{
                fontSize: 'var(--font-size-small)',
                color: 'var(--text-secondary)',
                lineHeight: 1.6,
                marginBottom: 'var(--spacing-md)',
                maxWidth: '300px'
              }}>
                {description}
              </p>
              <div style={{ display: 'flex', gap: 'var(--spacing-sm)' }}>
                <a href={linkedinUrl} target="_blank" rel="noopener noreferrer" style={{
                  color: 'var(--text-secondary)',
                  fontSize: 'var(--font-size-large)',
                  textDecoration: 'none',
                  transition: 'var(--transition-fast)'
                }} aria-label="LinkedIn">in</a>
                <a href={instagramUrl} target="_blank" rel="noopener noreferrer" style={{
                  color: 'var(--text-secondary)',
                  fontSize: 'var(--font-size-large)',
                  textDecoration: 'none',
                  transition: 'var(--transition-fast)'
                }} aria-label="Instagram">IG</a>
                <a href={facebookUrl} target="_blank" rel="noopener noreferrer" style={{
                  color: 'var(--text-secondary)',
                  fontSize: 'var(--font-size-large)',
                  textDecoration: 'none',
                  transition: 'var(--transition-fast)'
                }} aria-label="Facebook">f</a>
              </div>
            </div>

            {/* Product Column */}
            <div>
              <h3 style={{
                fontSize: 'var(--font-size-small)',
                fontWeight: 600,
                marginBottom: 'var(--spacing-sm)',
                color: 'var(--text-primary)',
                fontFamily: 'var(--font-headline)'
              }}>
                {fieldValues.products_title || 'Product'}
              </h3>
              <div style={{
                display: 'flex',
                flexDirection: 'column',
                gap: 'var(--spacing-xs)'
              }}>
                {productsLinks.map((link, idx) => (
                  <a key={idx} href={link.url} style={linkStyle}>{link.text}</a>
                ))}
              </div>
            </div>

            {/* Solutions Column */}
            <div>
              <h3 style={{
                fontSize: 'var(--font-size-small)',
                fontWeight: 600,
                marginBottom: 'var(--spacing-sm)',
                color: 'var(--text-primary)',
                fontFamily: 'var(--font-headline)'
              }}>
                {fieldValues.solutions_title || 'Solutions'}
              </h3>
              <div style={{
                display: 'flex',
                flexDirection: 'column',
                gap: 'var(--spacing-xs)'
              }}>
                {solutionsLinks.map((link, idx) => (
                  <a key={idx} href={link.url} style={linkStyle}>{link.text}</a>
                ))}
              </div>
            </div>

            {/* Company Column */}
            <div>
              <h3 style={{
                fontSize: 'var(--font-size-small)',
                fontWeight: 600,
                marginBottom: 'var(--spacing-sm)',
                color: 'var(--text-primary)',
                fontFamily: 'var(--font-headline)'
              }}>
                {fieldValues.company_title || 'Company'}
              </h3>
              <div style={{
                display: 'flex',
                flexDirection: 'column',
                gap: 'var(--spacing-xs)'
              }}>
                {companyLinks.map((link, idx) => (
                  <a key={idx} href={link.url} style={linkStyle}>{link.text}</a>
                ))}
              </div>
            </div>
          </div>

          {/* Bottom Bar */}
          <div className="footer-bottom" style={{
            borderTop: '1px solid var(--border-light)',
            paddingTop: 'var(--spacing-md)',
            display: 'flex',
            justifyContent: 'space-between',
            alignItems: 'center',
            fontSize: 'var(--font-size-small)',
            color: 'var(--text-secondary)'
          }}>
            <div>{fieldValues.copyright || '© 2025 Mentor Collective. All rights reserved.'}</div>
            <div className="footer-legal-links" style={{ display: 'flex', gap: 'var(--spacing-lg)' }}>
              <a href={privacyUrl} style={{
                color: 'var(--text-secondary)',
                textDecoration: 'none',
                transition: 'var(--transition-fast)'
              }}>{fieldValues.privacy_text || 'Privacy Policy'}</a>
              <a href={termsUrl} style={{
                color: 'var(--text-secondary)',
                textDecoration: 'none',
                transition: 'var(--transition-fast)'
              }}>{fieldValues.terms_text || 'Terms of Use'}</a>
              <a href={sitemapUrl} style={{
                color: 'var(--text-secondary)',
                textDecoration: 'none',
                transition: 'var(--transition-fast)'
              }}>{fieldValues.sitemap_text || 'Sitemap'}</a>
            </div>
          </div>
        </div>
      </footer>
    </>
  );
}

export const fields: any = [
  // Logo
  {
    type: 'image',
    name: 'logo',
    label: 'Footer Logo',
    default: {
      src: '',
      alt: 'Mentor Collective',
    },
  },
  // Description
  {
    type: 'text',
    name: 'description',
    label: 'Company Description',
    default: 'The premier AI-powered mentorship operating system for human connection, resilience, and adaptability.',
  },
  // Social Links
  {
    type: 'text',
    name: 'linkedin_url',
    label: 'LinkedIn URL',
    default: 'https://www.linkedin.com/company/mentorcollective/',
  },
  {
    type: 'text',
    name: 'instagram_url',
    label: 'Instagram URL',
    default: 'https://www.instagram.com/mentorcollective/',
  },
  {
    type: 'text',
    name: 'facebook_url',
    label: 'Facebook URL',
    default: 'https://www.facebook.com/mentorcollective/',
  },
  // Products Column
  {
    type: 'text',
    name: 'products_title',
    label: 'Products Column Title',
    default: 'Product',
  },
  {
    type: 'group',
    name: 'products_links',
    label: 'Product Links',
    occurrence: {
      min: 0,
      max: 10,
      default: 4,
    },
    default: [
      { text: 'Reveal', url: '/product#reveal' },
      { text: 'Spark', url: '/product#spark' },
      { text: 'Scale', url: '/product#scale' },
      { text: 'Fuel', url: '/product#fuel' },
    ],
    children: [
      {
        type: 'text',
        name: 'text',
        label: 'Link Text',
        default: 'Link',
      },
      {
        type: 'text',
        name: 'url',
        label: 'Link URL',
        default: '#',
      },
    ],
  },
  // Solutions Column
  {
    type: 'text',
    name: 'solutions_title',
    label: 'Solutions Column Title',
    default: 'Solutions',
  },
  {
    type: 'group',
    name: 'solutions_links',
    label: 'Solution Links',
    occurrence: {
      min: 0,
      max: 10,
      default: 3,
    },
    default: [
      { text: 'Higher Ed', url: '/solutions/higher-ed' },
      { text: 'K-12', url: '/solutions/k12' },
      { text: 'Enterprise', url: '/solutions/enterprise' },
    ],
    children: [
      {
        type: 'text',
        name: 'text',
        label: 'Link Text',
        default: 'Link',
      },
      {
        type: 'text',
        name: 'url',
        label: 'Link URL',
        default: '#',
      },
    ],
  },
  // Company Column
  {
    type: 'text',
    name: 'company_title',
    label: 'Company Column Title',
    default: 'Company',
  },
  {
    type: 'group',
    name: 'company_links',
    label: 'Company Links',
    occurrence: {
      min: 0,
      max: 10,
      default: 3,
    },
    default: [
      { text: 'About', url: '/about' },
      { text: 'Press', url: '/press' },
      { text: 'Contact', url: '/contact' },
    ],
    children: [
      {
        type: 'text',
        name: 'text',
        label: 'Link Text',
        default: 'Link',
      },
      {
        type: 'text',
        name: 'url',
        label: 'Link URL',
        default: '#',
      },
    ],
  },
  // Bottom Bar
  {
    type: 'text',
    name: 'copyright',
    label: 'Copyright Text',
    default: '© 2025 Mentor Collective. All rights reserved.',
  },
  {
    type: 'text',
    name: 'privacy_text',
    label: 'Privacy Link Text',
    default: 'Privacy Policy',
  },
  {
    type: 'text',
    name: 'privacy_url',
    label: 'Privacy Policy URL',
    default: 'https://www.mentorcollective.org/privacy-policy',
  },
  {
    type: 'text',
    name: 'terms_text',
    label: 'Terms Link Text',
    default: 'Terms of Use',
  },
  {
    type: 'text',
    name: 'terms_url',
    label: 'Terms of Use URL',
    default: 'https://www.mentorcollective.org/terms-of-use',
  },
  {
    type: 'text',
    name: 'sitemap_text',
    label: 'Sitemap Link Text',
    default: 'Sitemap',
  },
  {
    type: 'text',
    name: 'sitemap_url',
    label: 'Sitemap URL',
    default: 'https://www.mentorcollective.org/sitemap',
  },
];

export const meta = {
  label: 'Footer',
};
