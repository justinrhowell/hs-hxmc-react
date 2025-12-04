import {
  ModuleFields,
  TextField,
} from '@hubspot/cms-components/fields';
import mcLogo from '../../../assets/MentorCollective-Black-Logo.svg';

interface FooterLink {
  text: string;
  url: string;
}

interface FooterColumn {
  title: string;
  links: FooterLink[];
}

export function Component({ fieldValues }: any) {
  const description = fieldValues.description || 'The premier AI-powered mentorship operating system for human connection, resilience, and adaptability.';
  const facebookUrl = fieldValues.facebook_url || 'https://www.facebook.com/mentorcollective/';
  const linkedinUrl = fieldValues.linkedin_url || 'https://www.linkedin.com/company/mentorcollective/';
  const instagramUrl = fieldValues.instagram_url || 'https://www.instagram.com/mentorcollective/';

  const productsLinks = fieldValues.products_links || [];
  const solutionsLinks = fieldValues.solutions_links || [];
  const resourcesLinks = fieldValues.resources_links || [];
  const companyLinks = fieldValues.company_links || [];

  const privacyUrl = fieldValues.privacy_url || 'https://www.mentorcollective.org/privacy-policy';
  const termsUrl = fieldValues.terms_url || 'https://www.mentorcollective.org/terms-of-use';
  const sitemapUrl = fieldValues.sitemap_url || 'https://www.mentorcollective.org/sitemap';

  return (
    <footer style={{
      padding: 'var(--spacing-2xl) var(--spacing-lg) var(--spacing-lg)',
      background: 'var(--bg-white)',
      color: 'var(--text-primary)',
      borderTop: '1px solid var(--border-light)'
    }}>
      <div className="container">
        <div style={{
          display: 'grid',
          gridTemplateColumns: '2fr 1fr 1fr 1fr',
          gap: 'var(--spacing-xl)',
          marginBottom: 'var(--spacing-xl)'
        }}>
          <div>
            <div style={{
              marginBottom: 'var(--spacing-sm)',
              height: '36px'
            }}>
              <img
                src={mcLogo}
                alt="Mentor Collective"
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
          <div>
            <h3 style={{
              fontSize: 'var(--font-size-small)',
              fontWeight: 600,
              marginBottom: 'var(--spacing-sm)',
              color: 'var(--text-primary)',
              fontFamily: 'var(--font-headline)'
            }}>
              Product
            </h3>
            <div style={{
              display: 'flex',
              flexDirection: 'column',
              gap: 'var(--spacing-xs)'
            }}>
              {productsLinks.length > 0 ? productsLinks.map((link: FooterLink, idx: number) => (
                <a key={idx} href={link.url} style={{
                  color: 'var(--text-secondary)',
                  textDecoration: 'none',
                  fontSize: 'var(--font-size-small)',
                  transition: 'var(--transition-fast)'
                }}>{link.text}</a>
              )) : (
                <>
                  <a href="#" style={{ color: 'var(--text-secondary)', textDecoration: 'none', fontSize: 'var(--font-size-small)' }}>Reveal</a>
                  <a href="#" style={{ color: 'var(--text-secondary)', textDecoration: 'none', fontSize: 'var(--font-size-small)' }}>Spark</a>
                  <a href="#" style={{ color: 'var(--text-secondary)', textDecoration: 'none', fontSize: 'var(--font-size-small)' }}>Scale</a>
                  <a href="#" style={{ color: 'var(--text-secondary)', textDecoration: 'none', fontSize: 'var(--font-size-small)' }}>Fuel</a>
                  <a href="#" style={{ color: 'var(--text-secondary)', textDecoration: 'none', fontSize: 'var(--font-size-small)' }}>Help</a>
                </>
              )}
            </div>
          </div>
          <div>
            <h3 style={{
              fontSize: 'var(--font-size-small)',
              fontWeight: 600,
              marginBottom: 'var(--spacing-sm)',
              color: 'var(--text-primary)',
              fontFamily: 'var(--font-headline)'
            }}>
              Solutions
            </h3>
            <div style={{
              display: 'flex',
              flexDirection: 'column',
              gap: 'var(--spacing-xs)'
            }}>
              {solutionsLinks.length > 0 ? solutionsLinks.map((link: FooterLink, idx: number) => (
                <a key={idx} href={link.url} style={{
                  color: 'var(--text-secondary)',
                  textDecoration: 'none',
                  fontSize: 'var(--font-size-small)',
                  transition: 'var(--transition-fast)'
                }}>{link.text}</a>
              )) : (
                <>
                  <a href="#" style={{ color: 'var(--text-secondary)', textDecoration: 'none', fontSize: 'var(--font-size-small)' }}>Higher Ed</a>
                  <a href="#" style={{ color: 'var(--text-secondary)', textDecoration: 'none', fontSize: 'var(--font-size-small)' }}>K-12</a>
                  <a href="#" style={{ color: 'var(--text-secondary)', textDecoration: 'none', fontSize: 'var(--font-size-small)' }}>Enterprise</a>
                </>
              )}
            </div>
          </div>
          <div>
            <h3 style={{
              fontSize: 'var(--font-size-small)',
              fontWeight: 600,
              marginBottom: 'var(--spacing-sm)',
              color: 'var(--text-primary)',
              fontFamily: 'var(--font-headline)'
            }}>
              Company
            </h3>
            <div style={{
              display: 'flex',
              flexDirection: 'column',
              gap: 'var(--spacing-xs)'
            }}>
              {companyLinks.length > 0 ? companyLinks.map((link: FooterLink, idx: number) => (
                <a key={idx} href={link.url} style={{
                  color: 'var(--text-secondary)',
                  textDecoration: 'none',
                  fontSize: 'var(--font-size-small)',
                  transition: 'var(--transition-fast)'
                }}>{link.text}</a>
              )) : (
                <>
                  <a href="#" style={{ color: 'var(--text-secondary)', textDecoration: 'none', fontSize: 'var(--font-size-small)' }}>About</a>
                  <a href="#" style={{ color: 'var(--text-secondary)', textDecoration: 'none', fontSize: 'var(--font-size-small)' }}>Press</a>
                  <a href="#" style={{ color: 'var(--text-secondary)', textDecoration: 'none', fontSize: 'var(--font-size-small)' }}>Contact</a>
                </>
              )}
            </div>
          </div>
        </div>
        <div style={{
          borderTop: '1px solid var(--border-light)',
          paddingTop: 'var(--spacing-md)',
          display: 'flex',
          justifyContent: 'space-between',
          alignItems: 'center',
          fontSize: 'var(--font-size-small)',
          color: 'var(--text-secondary)'
        }}>
          <div>{fieldValues.copyright || '© 2025 Mentor Collective. All rights reserved.'}</div>
          <div style={{ display: 'flex', gap: 'var(--spacing-lg)' }}>
            <a href={privacyUrl} style={{
              color: 'var(--text-secondary)',
              textDecoration: 'none',
              transition: 'var(--transition-fast)'
            }}>Privacy Policy</a>
            <a href={termsUrl} style={{
              color: 'var(--text-secondary)',
              textDecoration: 'none',
              transition: 'var(--transition-fast)'
            }}>Terms of Use</a>
            <a href={sitemapUrl} style={{
              color: 'var(--text-secondary)',
              textDecoration: 'none',
              transition: 'var(--transition-fast)'
            }}>Sitemap</a>
          </div>
        </div>
      </div>
    </footer>
  );
}

export const fields = (
  <ModuleFields>
    <TextField
      name="description"
      label="Company Description"
      default="The premier AI-powered mentorship operating system for human connection, resilience, and adaptability."
    />
    <TextField
      name="linkedin_url"
      label="LinkedIn URL"
      default="https://www.linkedin.com/company/mentorcollective/"
    />
    <TextField
      name="instagram_url"
      label="Instagram URL"
      default="https://www.instagram.com/mentorcollective/"
    />
    <TextField
      name="facebook_url"
      label="Facebook URL"
      default="https://www.facebook.com/mentorcollective/"
    />
    <TextField
      name="copyright"
      label="Copyright Text"
      default="© 2025 Mentor Collective. All rights reserved."
    />
    <TextField
      name="privacy_url"
      label="Privacy Policy URL"
      default="https://www.mentorcollective.org/privacy-policy"
    />
    <TextField
      name="terms_url"
      label="Terms of Use URL"
      default="https://www.mentorcollective.org/terms-of-use"
    />
    <TextField
      name="sitemap_url"
      label="Sitemap URL"
      default="https://www.mentorcollective.org/sitemap"
    />
  </ModuleFields>
);

export const meta = {
  label: 'Footer',
};
