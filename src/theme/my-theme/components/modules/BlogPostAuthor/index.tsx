import {
  ModuleFields,
  TextField,
  ImageField,
  RichTextField,
} from '@hubspot/cms-components/fields';

export function Component({ fieldValues }: any) {
  const name = fieldValues.author_name || 'Author Name';
  const title = fieldValues.title || 'Content Writer';
  const bio = fieldValues.bio || 'A brief bio about the author and their expertise.';
  const image = fieldValues.image?.src || '';
  const twitterUrl = fieldValues.twitter_url || '';
  const linkedinUrl = fieldValues.linkedin_url || '';
  const websiteUrl = fieldValues.website_url || '';

  return (
    <section style={{
      padding: '60px 20px',
      background: 'var(--gradient-hero)',
    }}>
      <div style={{
        maxWidth: '750px',
        margin: '0 auto',
      }}>
        <div style={{
          background: 'white',
          borderRadius: 'var(--radius-xl)',
          padding: 'var(--spacing-xl)',
          boxShadow: '0 8px 32px rgba(0, 0, 0, 0.06)',
          border: '2px solid rgba(239, 71, 111, 0.08)',
          display: 'flex',
          gap: 'var(--spacing-xl)',
          alignItems: 'flex-start',
          flexWrap: 'wrap',
        }}>
          {/* Author Image */}
          <div style={{ flexShrink: 0 }}>
            {image ? (
              <img
                src={image}
                alt={name}
                style={{
                  width: '100px',
                  height: '100px',
                  borderRadius: '50%',
                  objectFit: 'cover',
                  border: '3px solid rgba(239, 71, 111, 0.2)',
                }}
              />
            ) : (
              <div style={{
                width: '100px',
                height: '100px',
                borderRadius: '50%',
                background: 'var(--gradient-coral)',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                color: 'white',
                fontSize: 'var(--font-size-h1)',
                fontWeight: 600,
              }}>
                {name.charAt(0).toUpperCase()}
              </div>
            )}
          </div>

          {/* Author Info */}
          <div style={{ flex: 1, minWidth: '250px' }}>
            <div style={{
              fontSize: 'var(--font-size-xs)',
              fontWeight: 600,
              color: 'var(--text-coral)',
              textTransform: 'uppercase',
              letterSpacing: '0.1em',
              marginBottom: 'var(--spacing-xs)',
            }}>
              Written by
            </div>
            <h3 style={{
              fontSize: 'var(--font-size-h3)',
              fontWeight: 500,
              color: 'var(--text-primary)',
              marginBottom: 'var(--spacing-xs)',
              fontFamily: 'var(--font-headline)',
            }}>
              {name}
            </h3>
            <div style={{
              fontSize: 'var(--font-size-body)',
              color: 'var(--text-muted)',
              marginBottom: 'var(--spacing-md)',
            }}>
              {title}
            </div>
            <div
              style={{
                fontSize: 'var(--font-size-body)',
                lineHeight: 1.7,
                color: 'var(--text-secondary)',
                marginBottom: 'var(--spacing-md)',
              }}
              dangerouslySetInnerHTML={{ __html: bio }}
            />

            {/* Social Links */}
            {(twitterUrl || linkedinUrl || websiteUrl) && (
              <div style={{
                display: 'flex',
                gap: 'var(--spacing-sm)',
              }}>
                {twitterUrl && (
                  <a
                    href={twitterUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    style={{
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                      width: '36px',
                      height: '36px',
                      borderRadius: '50%',
                      background: 'rgba(239, 71, 111, 0.1)',
                      color: 'var(--text-coral)',
                      transition: 'var(--transition-medium)',
                    }}
                    aria-label="Twitter"
                  >
                    <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor">
                      <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z"/>
                    </svg>
                  </a>
                )}
                {linkedinUrl && (
                  <a
                    href={linkedinUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    style={{
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                      width: '36px',
                      height: '36px',
                      borderRadius: '50%',
                      background: 'rgba(239, 71, 111, 0.1)',
                      color: 'var(--text-coral)',
                      transition: 'var(--transition-medium)',
                    }}
                    aria-label="LinkedIn"
                  >
                    <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor">
                      <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
                    </svg>
                  </a>
                )}
                {websiteUrl && (
                  <a
                    href={websiteUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    style={{
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                      width: '36px',
                      height: '36px',
                      borderRadius: '50%',
                      background: 'rgba(239, 71, 111, 0.1)',
                      color: 'var(--text-coral)',
                      transition: 'var(--transition-medium)',
                    }}
                    aria-label="Website"
                  >
                    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                      <circle cx="12" cy="12" r="10"/>
                      <path d="M2 12h20M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z"/>
                    </svg>
                  </a>
                )}
              </div>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}

export const fields = (
  <ModuleFields>
    <TextField
      name="author_name"
      label="Author Name"
      default="Laura H. Doughty"
    />
    <TextField
      name="title"
      label="Job Title"
      default="Manager, Brand & Communications"
    />
    <RichTextField
      name="bio"
      label="Author Bio"
      default="As a creative leader with an artistic background, Laura blends data-informed strategy with compelling storytelling to oversee content initiatives that elevate brand visibility. She is passionate about crafting narratives that translate the power of mentorship into opportunities for all, illuminating pathways for learners to succeed and ultimately driving our mission of 'Mentorship for All.'"
    />
    <ImageField
      name="image"
      label="Author Photo"
    />
    <TextField
      name="twitter_url"
      label="Twitter/X URL"
      default=""
    />
    <TextField
      name="linkedin_url"
      label="LinkedIn URL"
      default=""
    />
    <TextField
      name="website_url"
      label="Website URL"
      default=""
    />
  </ModuleFields>
);

export const meta = {
  label: 'Blog Post Author',
};
