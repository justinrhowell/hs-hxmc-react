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
  const facebookUrl = fieldValues.facebook_url || '#';
  const twitterUrl = fieldValues.twitter_url || '#';
  const linkedinUrl = fieldValues.linkedin_url || '#';
  const instagramUrl = fieldValues.instagram_url || '#';

  const productsLinks = fieldValues.products_links || [];
  const solutionsLinks = fieldValues.solutions_links || [];
  const resourcesLinks = fieldValues.resources_links || [];
  const companyLinks = fieldValues.company_links || [];

  const privacyUrl = fieldValues.privacy_url || '#';
  const termsUrl = fieldValues.terms_url || '#';

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
              <a href={linkedinUrl} style={{
                color: 'var(--text-secondary)',
                fontSize: 'var(--font-size-large)',
                textDecoration: 'none',
                transition: 'var(--transition-fast)'
              }} aria-label="LinkedIn">in</a>
              <a href={facebookUrl} style={{
                color: 'var(--text-secondary)',
                fontSize: 'var(--font-size-large)',
                textDecoration: 'none',
                transition: 'var(--transition-fast)'
              }} aria-label="Facebook">f</a>
              <a href={twitterUrl} style={{
                color: 'var(--text-secondary)',
                fontSize: 'var(--font-size-large)',
                textDecoration: 'none',
                transition: 'var(--transition-fast)'
              }} aria-label="Twitter">𝕏</a>
              <a href={instagramUrl} style={{
                color: 'var(--text-secondary)',
                fontSize: 'var(--font-size-large)',
                textDecoration: 'none',
                transition: 'var(--transition-fast)'
              }} aria-label="Instagram">IG</a>
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
            }}>Terms of Service</a>
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
      name="facebook_url"
      label="Facebook URL"
      default="#"
    />
    <TextField
      name="twitter_url"
      label="Twitter URL"
      default="#"
    />
    <TextField
      name="linkedin_url"
      label="LinkedIn URL"
      default="#"
    />
    <TextField
      name="instagram_url"
      label="Instagram URL"
      default="#"
    />
    <TextField
      name="copyright"
      label="Copyright Text"
      default="© 2025 Mentor Collective. All rights reserved."
    />
    <TextField
      name="privacy_url"
      label="Privacy Policy URL"
      default="#"
    />
    <TextField
      name="terms_url"
      label="Terms of Service URL"
      default="#"
    />
  </ModuleFields>
);

export const meta = {
  label: 'Footer',
};
