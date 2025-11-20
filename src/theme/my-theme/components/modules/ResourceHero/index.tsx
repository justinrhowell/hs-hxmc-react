import {
  ModuleFields,
  TextField,
} from '@hubspot/cms-components/fields';

export function Component({ fieldValues }: any) {
  const heading = fieldValues.heading || 'Resource Hub';
  const subheading = fieldValues.subheading || 'Insights & Inspiration';
  const description = fieldValues.description || 'Explore our collection of guides, case studies, and thought leadership to help you build and scale successful mentorship programs.';
  const searchPlaceholder = fieldValues.search_placeholder || 'Search resources...';

  return (
    <>
      <script dangerouslySetInnerHTML={{__html: `
        (function() {
          function initResourceSearch() {
            const searchInput = document.getElementById('resource-search');
            if (!searchInput) return;

            searchInput.addEventListener('input', function(e) {
              const searchTerm = e.target.value.toLowerCase();
              console.log('Searching for:', searchTerm);
              // This would typically trigger filtering logic
              // For now, it's a placeholder that could be connected to the ResourceGrid
            });
          }

          if (document.readyState === 'loading') {
            document.addEventListener('DOMContentLoaded', initResourceSearch);
          } else {
            setTimeout(initResourceSearch, 100);
          }
        })();
      `}} />

      <section style={{
        padding: '100px 20px 80px',
        background: 'linear-gradient(135deg, #FDF8EF 0%, #FCFCFC 50%, #FFFFFF 100%)',
        position: 'relative',
        overflow: 'hidden',
      }}>
        {/* Decorative Background Elements */}
        <div style={{
          position: 'absolute',
          top: '10%',
          right: '5%',
          width: '200px',
          height: '200px',
          borderRadius: '50%',
          background: 'radial-gradient(circle, rgba(239, 71, 111, 0.08) 0%, transparent 70%)',
          pointerEvents: 'none',
        }} />
        <div style={{
          position: 'absolute',
          bottom: '15%',
          left: '8%',
          width: '150px',
          height: '150px',
          borderRadius: '50%',
          background: 'radial-gradient(circle, rgba(6, 214, 160, 0.08) 0%, transparent 70%)',
          pointerEvents: 'none',
        }} />

        <div style={{ maxWidth: '900px', margin: '0 auto', textAlign: 'center', position: 'relative', zIndex: 1 }}>
          {/* Eyebrow */}
          <div style={{
            display: 'inline-block',
            padding: '0.5rem 1.25rem',
            background: 'rgba(239, 71, 111, 0.1)',
            color: '#EF476F',
            borderRadius: '50px',
            fontSize: '0.85rem',
            fontWeight: 600,
            textTransform: 'uppercase',
            letterSpacing: '0.1em',
            marginBottom: '1.5rem',
          }}>
            {subheading}
          </div>

          {/* Heading */}
          <h1 style={{
            fontSize: 'clamp(2.5rem, 5vw, 4rem)',
            fontWeight: 500,
            lineHeight: 1.15,
            marginBottom: '1.5rem',
            color: '#1a1a1a',
            fontFamily: 'var(--font-headline)',
            letterSpacing: '-0.02em',
          }}>
            {heading}
          </h1>

          {/* Description */}
          <p style={{
            fontSize: '1.15rem',
            lineHeight: 1.7,
            color: '#494949',
            marginBottom: '3rem',
            maxWidth: '700px',
            margin: '0 auto 3rem',
          }}>
            {description}
          </p>

          {/* Search Bar */}
          <div style={{
            maxWidth: '600px',
            margin: '0 auto',
            position: 'relative',
          }}>
            <div style={{
              display: 'flex',
              alignItems: 'center',
              background: 'white',
              borderRadius: '50px',
              boxShadow: '0 8px 32px rgba(0, 0, 0, 0.08)',
              padding: '0.5rem 0.75rem 0.5rem 2rem',
              border: '2px solid rgba(239, 71, 111, 0.1)',
              transition: 'all 0.3s ease',
            }}>
              {/* Search Icon */}
              <svg
                width="20"
                height="20"
                viewBox="0 0 24 24"
                fill="none"
                style={{ flexShrink: 0, marginRight: '1rem' }}
              >
                <circle cx="11" cy="11" r="7" stroke="#9CA3AF" strokeWidth="2"/>
                <path d="M20 20L16 16" stroke="#9CA3AF" strokeWidth="2" strokeLinecap="round"/>
              </svg>

              {/* Input */}
              <input
                id="resource-search"
                type="text"
                placeholder={searchPlaceholder}
                style={{
                  flex: 1,
                  border: 'none',
                  outline: 'none',
                  fontSize: '1rem',
                  padding: '0.75rem 0',
                  background: 'transparent',
                  color: '#1a1a1a',
                }}
              />

              {/* Search Button */}
              <button
                type="button"
                style={{
                  background: 'linear-gradient(135deg, #EF476F 0%, #F89F7B 100%)',
                  color: 'white',
                  padding: '0.75rem 2rem',
                  borderRadius: '50px',
                  border: 'none',
                  fontSize: '0.95rem',
                  fontWeight: 600,
                  cursor: 'pointer',
                  transition: 'all 0.3s ease',
                  whiteSpace: 'nowrap',
                }}
              >
                Search
              </button>
            </div>
          </div>

          {/* Popular Topics */}
          <div style={{
            marginTop: '2rem',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            gap: '1rem',
            flexWrap: 'wrap',
          }}>
            <span style={{
              fontSize: '0.9rem',
              color: '#6B7280',
            }}>
              Popular:
            </span>
            {['AI Mentorship', 'Retention', 'Case Studies', 'Best Practices'].map((topic, index) => (
              <a
                key={index}
                href="#"
                style={{
                  padding: '0.5rem 1rem',
                  background: 'white',
                  border: '1px solid #E5E7EB',
                  borderRadius: '50px',
                  fontSize: '0.85rem',
                  color: '#494949',
                  textDecoration: 'none',
                  transition: 'all 0.3s ease',
                }}
              >
                {topic}
              </a>
            ))}
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
      label="Main Heading"
      default="Resource Hub"
    />
    <TextField
      name="subheading"
      label="Subheading/Eyebrow"
      default="Insights & Inspiration"
    />
    <TextField
      name="description"
      label="Description"
      default="Explore our collection of guides, case studies, and thought leadership to help you build and scale successful mentorship programs."
    />
    <TextField
      name="search_placeholder"
      label="Search Placeholder"
      default="Search resources..."
    />
  </ModuleFields>
);

export const meta = {
  label: 'Resource Hero',
};
