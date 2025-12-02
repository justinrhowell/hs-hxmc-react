import React from 'react';

export function Component() {
  // Design tokens organized by category
  const colorTokens = {
    brand: [
      { name: '--primary-coral', value: '#EF476F', desc: 'Primary brand color' },
      { name: '--primary-navy', value: '#073B4C', desc: 'Primary navy' },
      { name: '--secondary-yellow', value: '#FFD166', desc: 'Accent yellow' },
      { name: '--secondary-teal', value: '#06D6A0', desc: 'Accent teal' },
      { name: '--secondary-blue', value: '#118AB2', desc: 'Secondary blue' },
    ],
    neutrals: [
      { name: '--white', value: '#FFFFFF', desc: 'Pure white' },
      { name: '--off-white', value: '#FCFCFC', desc: 'Off white' },
      { name: '--cream', value: '#FDF8EF', desc: 'Warm cream background' },
      { name: '--steel-gray', value: '#494949', desc: 'Body text gray' },
      { name: '--black', value: '#111111', desc: 'Primary text black' },
    ],
    text: [
      { name: '--text-primary', value: '#111111', desc: 'Primary text' },
      { name: '--text-secondary', value: '#494949', desc: 'Secondary text' },
      { name: '--text-muted', value: '#5B6370', desc: 'Muted text' },
      { name: '--text-white', value: '#FFFFFF', desc: 'White text' },
      { name: '--text-coral', value: '#EF476F', desc: 'Coral accent text' },
      { name: '--text-teal', value: '#06D6A0', desc: 'Teal accent text' },
      { name: '--text-blue', value: '#118AB2', desc: 'Blue accent text' },
    ],
    backgrounds: [
      { name: '--bg-primary', value: '#FFFFFF', desc: 'Primary background' },
      { name: '--bg-secondary', value: '#FCFCFC', desc: 'Secondary background' },
      { name: '--bg-cream', value: '#FDF8EF', desc: 'Warm cream background' },
      { name: '--bg-light-coral', value: 'rgba(239, 71, 111, 0.05)', desc: 'Light coral tint' },
      { name: '--bg-light-teal', value: 'rgba(6, 214, 160, 0.1)', desc: 'Light teal tint' },
      { name: '--bg-glass', value: 'rgba(255, 255, 255, 0.98)', desc: 'Glass/frosted effect' },
    ],
  };

  const gradientTokens = [
    { name: '--gradient-text', value: 'linear-gradient(90deg, #EF4D7E 0%, #F89F7B 50%, #FED700 100%)', desc: 'Text gradient' },
    { name: '--gradient-coral', value: 'linear-gradient(135deg, #EF476F 0%, #F89F7B 100%)', desc: 'Primary button gradient' },
    { name: '--gradient-hero', value: 'linear-gradient(135deg, #FFFBF8 0%, #FFF8F3 50%, #FFFAF5 100%)', desc: 'Hero section background' },
    { name: '--gradient-coral-peach', value: 'linear-gradient(135deg, #EF476F 0%, #F89F7B 50%, #FFB088 100%)', desc: 'CTA gradient' },
    { name: '--gradient-teal', value: 'linear-gradient(135deg, #06D6A0 0%, #118AB2 100%)', desc: 'Teal gradient' },
  ];

  const typographyTokens = {
    families: [
      { name: '--font-headline', value: "'Ginto Nord', sans-serif", desc: 'Headlines & titles' },
      { name: '--font-body', value: "'Inter', sans-serif", desc: 'Body text & UI' },
    ],
    headings: [
      { name: '--font-size-h1', value: 'clamp(1.875rem, 3vw + 0.75rem, 2.75rem)', desc: 'H1 - Hero titles', weight: 600 },
      { name: '--font-size-h2', value: 'clamp(1.5rem, 2.5vw + 0.5rem, 2.25rem)', desc: 'H2 - Section titles', weight: 500 },
      { name: '--font-size-h3', value: 'clamp(1.25rem, 2vw + 0.5rem, 1.75rem)', desc: 'H3 - Subsections', weight: 500 },
      { name: '--font-size-h4', value: 'clamp(1.125rem, 1.5vw + 0.5rem, 1.375rem)', desc: 'H4 - Card titles', weight: 500 },
      { name: '--font-size-h5', value: 'clamp(1rem, 1vw + 0.5rem, 1.125rem)', desc: 'H5 - Small headers', weight: 600 },
      { name: '--font-size-h6', value: 'clamp(0.875rem, 0.75vw + 0.5rem, 1rem)', desc: 'H6 - Labels/Overline', weight: 600 },
    ],
    body: [
      { name: '--font-size-body-lg', value: 'clamp(1.0625rem, 0.75vw + 0.875rem, 1.1875rem)', desc: 'Large body text' },
      { name: '--font-size-body', value: 'clamp(1rem, 0.5vw + 0.875rem, 1.0625rem)', desc: 'Default body text' },
      { name: '--font-size-small', value: 'clamp(0.8125rem, 0.25vw + 0.75rem, 0.875rem)', desc: 'Small text' },
      { name: '--font-size-xs', value: 'clamp(0.6875rem, 0.25vw + 0.625rem, 0.75rem)', desc: 'Extra small text' },
    ],
    specialized: [
      { name: '--font-size-quote', value: 'clamp(1.125rem, 1.5vw + 0.75rem, 1.5rem)', desc: 'Blockquotes' },
      { name: '--font-size-lead', value: 'clamp(1.125rem, 1vw + 0.875rem, 1.25rem)', desc: 'Lead paragraphs' },
      { name: '--font-size-caption', value: '0.8125rem', desc: 'Image captions' },
      { name: '--font-size-label', value: '0.75rem', desc: 'Form labels' },
      { name: '--font-size-overline', value: '0.6875rem', desc: 'Overline text' },
    ],
    lineHeight: [
      { name: '--line-height-tight', value: '1.2', desc: 'Headlines' },
      { name: '--line-height-normal', value: '1.6', desc: 'Body text' },
      { name: '--line-height-relaxed', value: '1.8', desc: 'Long-form content' },
    ],
    letterSpacing: [
      { name: '--letter-spacing-tight', value: '-0.02em', desc: 'Headlines' },
      { name: '--letter-spacing-normal', value: '0', desc: 'Body text' },
      { name: '--letter-spacing-wide', value: '0.02em', desc: 'Uppercase labels' },
    ],
    weights: [
      { value: 300, desc: 'Light' },
      { value: 400, desc: 'Regular' },
      { value: 500, desc: 'Medium' },
      { value: 600, desc: 'Semi-bold' },
      { value: 700, desc: 'Bold' },
      { value: 800, desc: 'Extra-bold' },
    ],
  };

  const spacingTokens = [
    { name: '--spacing-xxs', value: '0.25rem', pixels: '4px' },
    { name: '--spacing-xs', value: '0.5rem', pixels: '8px' },
    { name: '--spacing-sm', value: '1rem', pixels: '16px' },
    { name: '--spacing-md', value: '1.5rem', pixels: '24px' },
    { name: '--spacing-lg', value: '2rem', pixels: '32px' },
    { name: '--spacing-xl', value: '3rem', pixels: '48px' },
    { name: '--spacing-2xl', value: '4rem', pixels: '64px' },
    { name: '--spacing-3xl', value: '6rem', pixels: '96px' },
  ];

  const sectionPaddingTokens = [
    { name: '--section-padding-sm', value: '3rem', desc: 'Mobile sections' },
    { name: '--section-padding-md', value: '5rem', desc: 'Tablet sections' },
    { name: '--section-padding-lg', value: '7rem', desc: 'Desktop sections' },
  ];

  const radiusTokens = [
    { name: '--radius-sm', value: '8px' },
    { name: '--radius-md', value: '12px' },
    { name: '--radius-lg', value: '16px' },
    { name: '--radius-xl', value: '24px' },
    { name: '--radius-2xl', value: '32px' },
    { name: '--radius-full', value: '50px' },
    { name: '--radius-circle', value: '50%' },
  ];

  const shadowTokens = [
    { name: '--shadow-sm', value: '0 2px 8px rgba(0, 0, 0, 0.06)', desc: 'Subtle shadow' },
    { name: '--shadow-md', value: '0 4px 16px rgba(0, 0, 0, 0.08)', desc: 'Medium shadow' },
    { name: '--shadow-lg', value: '0 8px 32px rgba(0, 0, 0, 0.12)', desc: 'Large shadow' },
    { name: '--shadow-xl', value: '0 20px 60px rgba(0, 0, 0, 0.1)', desc: 'Extra large shadow' },
    { name: '--shadow-hover', value: '0 12px 40px rgba(0, 0, 0, 0.15)', desc: 'Hover state' },
    { name: '--shadow-coral-sm', value: '0 8px 24px rgba(239, 71, 111, 0.3)', desc: 'Small coral glow' },
    { name: '--shadow-coral', value: '0 12px 32px rgba(239, 71, 111, 0.4)', desc: 'Coral glow' },
  ];

  const transitionTokens = [
    { name: '--transition-fast', value: 'all 0.2s ease', desc: 'Quick interactions' },
    { name: '--transition-medium', value: 'all 0.3s ease', desc: 'Standard transitions' },
    { name: '--transition-smooth', value: 'all 0.4s cubic-bezier(0.4, 0, 0.2, 1)', desc: 'Smooth animations' },
    { name: '--transition-bounce', value: 'all 0.5s cubic-bezier(0.34, 1.56, 0.64, 1)', desc: 'Bouncy animations' },
  ];

  const buttonTokens = [
    { name: '--btn-padding-sm', value: '12px 24px', desc: 'Small buttons' },
    { name: '--btn-padding', value: '18px 40px', desc: 'Default buttons' },
    { name: '--btn-padding-lg', value: '20px 48px', desc: 'Large buttons' },
  ];

  const maxWidthTokens = [
    { name: '--max-width-sm', value: '600px', desc: 'Narrow content' },
    { name: '--max-width-md', value: '800px', desc: 'Medium content' },
    { name: '--max-width-lg', value: '1000px', desc: 'Wide content' },
    { name: '--max-width-xl', value: '1440px', desc: 'Container max' },
    { name: '--max-width-prose', value: '65ch', desc: 'Readable text' },
  ];

  const styles = {
    section: {
      padding: 'var(--section-padding-lg) var(--spacing-lg)',
      background: 'var(--bg-cream)',
    },
    container: {
      maxWidth: 'var(--max-width-xl)',
      margin: '0 auto',
    },
    header: {
      textAlign: 'center' as const,
      marginBottom: 'var(--spacing-3xl)',
    },
    title: {
      fontSize: 'var(--font-size-h1)',
      fontFamily: 'var(--font-headline)',
      fontWeight: 500,
      color: 'var(--text-primary)',
      marginBottom: 'var(--spacing-md)',
    },
    subtitle: {
      fontSize: '1.15rem',
      color: 'var(--text-secondary)',
      maxWidth: 'var(--max-width-prose)',
      margin: '0 auto',
      lineHeight: 'var(--line-height-relaxed)',
    },
    sectionTitle: {
      fontSize: 'var(--font-size-h2)',
      fontFamily: 'var(--font-headline)',
      fontWeight: 500,
      color: 'var(--text-primary)',
      marginBottom: 'var(--spacing-lg)',
      paddingBottom: 'var(--spacing-sm)',
      borderBottom: '2px solid var(--border-light)',
    },
    subsectionTitle: {
      fontSize: '1.25rem',
      fontFamily: 'var(--font-headline)',
      fontWeight: 500,
      color: 'var(--text-secondary)',
      marginBottom: 'var(--spacing-md)',
      marginTop: 'var(--spacing-xl)',
    },
    card: {
      background: 'var(--bg-white)',
      borderRadius: 'var(--radius-xl)',
      padding: 'var(--card-padding)',
      boxShadow: 'var(--shadow-md)',
      marginBottom: 'var(--spacing-2xl)',
    },
    colorSwatch: {
      width: '100%',
      height: '80px',
      borderRadius: 'var(--radius-md)',
      marginBottom: 'var(--spacing-sm)',
      border: '1px solid var(--border-light)',
    },
    colorLabel: {
      fontSize: 'var(--font-size-small)',
      fontFamily: 'monospace',
      color: 'var(--text-muted)',
    },
    colorValue: {
      fontSize: '0.85rem',
      fontFamily: 'monospace',
      color: 'var(--text-secondary)',
      marginTop: '0.25rem',
    },
    colorDesc: {
      fontSize: '0.85rem',
      color: 'var(--text-muted)',
      marginTop: '0.25rem',
    },
    grid: {
      display: 'grid',
      gridTemplateColumns: 'repeat(auto-fill, minmax(180px, 1fr))',
      gap: 'var(--spacing-lg)',
    },
    typeSample: {
      padding: 'var(--spacing-md)',
      background: 'var(--bg-secondary)',
      borderRadius: 'var(--radius-md)',
      marginBottom: 'var(--spacing-sm)',
    },
    tokenRow: {
      display: 'grid',
      gridTemplateColumns: '200px 200px 1fr',
      gap: 'var(--spacing-md)',
      padding: 'var(--spacing-sm) 0',
      borderBottom: '1px solid var(--border-light)',
      alignItems: 'center',
    },
    tokenName: {
      fontFamily: 'monospace',
      fontSize: '0.9rem',
      color: 'var(--text-coral)',
    },
    tokenValue: {
      fontFamily: 'monospace',
      fontSize: '0.85rem',
      color: 'var(--text-secondary)',
    },
    tokenDesc: {
      fontSize: '0.9rem',
      color: 'var(--text-muted)',
    },
  };

  return (
    <>
      <style>{`
        @media (max-width: 768px) {
          .style-guide-grid {
            grid-template-columns: repeat(2, 1fr) !important;
          }
          .token-row {
            grid-template-columns: 1fr !important;
            gap: 0.5rem !important;
          }
        }
      `}</style>

      <section style={styles.section}>
        <div style={styles.container}>
          {/* Header */}
          <div style={styles.header}>
            <h1 style={styles.title}>Design System</h1>
            <p style={styles.subtitle}>
              A comprehensive guide to the design tokens, typography, colors, and components
              used throughout the Mentor Collective platform.
            </p>
          </div>

          {/* Colors Section */}
          <div style={styles.card}>
            <h2 style={styles.sectionTitle}>Colors</h2>

            <h3 style={styles.subsectionTitle}>Brand Colors</h3>
            <div className="style-guide-grid" style={styles.grid}>
              {colorTokens.brand.map((color) => (
                <div key={color.name}>
                  <div style={{ ...styles.colorSwatch, background: color.value }} />
                  <div style={styles.colorLabel}>{color.name}</div>
                  <div style={styles.colorValue}>{color.value}</div>
                  <div style={styles.colorDesc}>{color.desc}</div>
                </div>
              ))}
            </div>

            <h3 style={styles.subsectionTitle}>Neutrals</h3>
            <div className="style-guide-grid" style={styles.grid}>
              {colorTokens.neutrals.map((color) => (
                <div key={color.name}>
                  <div style={{ ...styles.colorSwatch, background: color.value }} />
                  <div style={styles.colorLabel}>{color.name}</div>
                  <div style={styles.colorValue}>{color.value}</div>
                  <div style={styles.colorDesc}>{color.desc}</div>
                </div>
              ))}
            </div>

            <h3 style={styles.subsectionTitle}>Text Colors</h3>
            <div className="style-guide-grid" style={styles.grid}>
              {colorTokens.text.map((color) => (
                <div key={color.name}>
                  <div style={{
                    ...styles.colorSwatch,
                    background: color.value,
                    border: color.value === '#FFFFFF' ? '2px solid #E0E0E0' : 'none'
                  }} />
                  <div style={styles.colorLabel}>{color.name}</div>
                  <div style={styles.colorValue}>{color.value}</div>
                  <div style={styles.colorDesc}>{color.desc}</div>
                </div>
              ))}
            </div>

            <h3 style={styles.subsectionTitle}>Background Colors</h3>
            <div className="style-guide-grid" style={styles.grid}>
              {colorTokens.backgrounds.map((color) => (
                <div key={color.name}>
                  <div style={{
                    ...styles.colorSwatch,
                    background: color.value,
                    border: '2px solid #E0E0E0'
                  }} />
                  <div style={styles.colorLabel}>{color.name}</div>
                  <div style={styles.colorValue}>{color.value}</div>
                  <div style={styles.colorDesc}>{color.desc}</div>
                </div>
              ))}
            </div>
          </div>

          {/* Gradients Section */}
          <div style={styles.card}>
            <h2 style={styles.sectionTitle}>Gradients</h2>
            <div style={{ display: 'grid', gap: 'var(--spacing-lg)' }}>
              {gradientTokens.map((gradient) => (
                <div key={gradient.name}>
                  <div style={{
                    height: '60px',
                    borderRadius: 'var(--radius-md)',
                    background: gradient.value,
                    marginBottom: 'var(--spacing-sm)',
                  }} />
                  <div style={styles.colorLabel}>{gradient.name}</div>
                  <div style={styles.colorDesc}>{gradient.desc}</div>
                </div>
              ))}
            </div>
          </div>

          {/* Typography Section */}
          <div style={styles.card}>
            <h2 style={styles.sectionTitle}>Typography</h2>

            <h3 style={styles.subsectionTitle}>Font Families</h3>
            {typographyTokens.families.map((font) => (
              <div key={font.name} style={{ marginBottom: 'var(--spacing-lg)' }}>
                <div style={{
                  ...styles.typeSample,
                  fontFamily: font.name === '--font-headline' ? 'var(--font-headline)' : 'var(--font-body)',
                  fontSize: '2rem',
                }}>
                  The quick brown fox jumps over the lazy dog
                </div>
                <div style={styles.colorLabel}>{font.name}</div>
                <div style={styles.colorDesc}>{font.desc}</div>
              </div>
            ))}

            <h3 style={styles.subsectionTitle}>Headings</h3>
            {typographyTokens.headings.map((heading, index) => (
              <div key={heading.name} style={{ marginBottom: 'var(--spacing-lg)' }}>
                <div style={{
                  fontSize: `var(--font-size-h${index + 1})`,
                  fontFamily: 'var(--font-headline)',
                  fontWeight: heading.weight,
                  marginBottom: 'var(--spacing-xs)',
                  color: 'var(--text-primary)',
                }}>
                  H{index + 1} - {heading.desc.split(' - ')[1] || heading.desc}
                </div>
                <div style={styles.tokenValue}>{heading.name} | weight: {heading.weight}</div>
              </div>
            ))}

            <h3 style={styles.subsectionTitle}>Body Text</h3>
            {typographyTokens.body.map((size) => (
              <div key={size.name} style={{ marginBottom: 'var(--spacing-lg)' }}>
                <div style={{
                  fontSize: size.name === '--font-size-body-lg' ? 'var(--font-size-body-lg)' :
                           size.name === '--font-size-body' ? 'var(--font-size-body)' :
                           size.name === '--font-size-small' ? 'var(--font-size-small)' : 'var(--font-size-xs)',
                  fontFamily: 'var(--font-body)',
                  marginBottom: 'var(--spacing-xs)',
                  color: 'var(--text-secondary)',
                }}>
                  {size.desc} - The quick brown fox jumps over the lazy dog
                </div>
                <div style={styles.tokenValue}>{size.name}</div>
              </div>
            ))}

            <h3 style={styles.subsectionTitle}>Specialized Text</h3>
            <div style={{ marginBottom: 'var(--spacing-lg)' }}>
              <blockquote style={{
                fontSize: 'var(--font-size-quote)',
                fontStyle: 'italic',
                lineHeight: 'var(--line-height-relaxed)',
                color: 'var(--text-secondary)',
                borderLeft: '4px solid var(--primary-coral)',
                paddingLeft: 'var(--spacing-md)',
                margin: 'var(--spacing-md) 0',
              }}>
                "Mentorship is the bridge between where you are and where you want to be."
                <cite style={{
                  display: 'block',
                  fontSize: 'var(--font-size-small)',
                  fontStyle: 'normal',
                  fontWeight: 600,
                  color: 'var(--text-primary)',
                  marginTop: 'var(--spacing-sm)',
                }}>— Quote Citation</cite>
              </blockquote>
              <div style={styles.tokenValue}>--font-size-quote | Blockquote style</div>
            </div>

            <div style={{ marginBottom: 'var(--spacing-lg)' }}>
              <p style={{
                fontSize: 'var(--font-size-lead)',
                lineHeight: 'var(--line-height-relaxed)',
                color: 'var(--text-secondary)',
                marginBottom: 'var(--spacing-xs)',
              }}>
                Lead text - A slightly larger paragraph used for introductions and emphasis.
              </p>
              <div style={styles.tokenValue}>--font-size-lead | Lead paragraph</div>
            </div>

            <div style={{ marginBottom: 'var(--spacing-lg)' }}>
              <span style={{
                fontSize: 'var(--font-size-overline)',
                fontWeight: 600,
                textTransform: 'uppercase',
                letterSpacing: '0.1em',
                color: 'var(--text-coral)',
              }}>Overline Text</span>
              <div style={{ ...styles.tokenValue, marginTop: 'var(--spacing-xs)' }}>--font-size-overline | Eyebrow/overline style</div>
            </div>

            <div style={{ marginBottom: 'var(--spacing-lg)' }}>
              <span style={{
                fontSize: 'var(--font-size-caption)',
                color: 'var(--text-muted)',
              }}>Caption text - Used for image captions and supporting information</span>
              <div style={{ ...styles.tokenValue, marginTop: 'var(--spacing-xs)' }}>--font-size-caption | Image captions</div>
            </div>

            <div style={{ marginBottom: 'var(--spacing-xl)' }}>
              <span style={{
                fontSize: 'var(--font-size-label)',
                fontWeight: 600,
                textTransform: 'uppercase',
                letterSpacing: 'var(--letter-spacing-wide)',
                color: 'var(--text-muted)',
              }}>Form Label</span>
              <div style={{ ...styles.tokenValue, marginTop: 'var(--spacing-xs)' }}>--font-size-label | Form labels</div>
            </div>

            <h3 style={styles.subsectionTitle}>Font Weights</h3>
            <div className="style-guide-grid" style={{ ...styles.grid, gridTemplateColumns: 'repeat(auto-fill, minmax(150px, 1fr))' }}>
              {typographyTokens.weights.map((weight) => (
                <div key={weight.value} style={{ textAlign: 'center' }}>
                  <div style={{
                    fontSize: '2rem',
                    fontWeight: weight.value,
                    fontFamily: 'var(--font-body)',
                    marginBottom: 'var(--spacing-xs)',
                  }}>
                    Aa
                  </div>
                  <div style={styles.tokenValue}>{weight.value}</div>
                  <div style={styles.colorDesc}>{weight.desc}</div>
                </div>
              ))}
            </div>

            <h3 style={styles.subsectionTitle}>Line Heights</h3>
            {typographyTokens.lineHeight.map((lh) => (
              <div key={lh.name} className="token-row" style={styles.tokenRow}>
                <div style={styles.tokenName}>{lh.name}</div>
                <div style={styles.tokenValue}>{lh.value}</div>
                <div style={styles.tokenDesc}>{lh.desc}</div>
              </div>
            ))}

            <h3 style={styles.subsectionTitle}>Letter Spacing</h3>
            {typographyTokens.letterSpacing.map((ls) => (
              <div key={ls.name} className="token-row" style={styles.tokenRow}>
                <div style={styles.tokenName}>{ls.name}</div>
                <div style={styles.tokenValue}>{ls.value}</div>
                <div style={styles.tokenDesc}>{ls.desc}</div>
              </div>
            ))}
          </div>

          {/* Spacing Section */}
          <div style={styles.card}>
            <h2 style={styles.sectionTitle}>Spacing</h2>

            <h3 style={styles.subsectionTitle}>Base Spacing Scale</h3>
            <div style={{ display: 'flex', flexDirection: 'column', gap: 'var(--spacing-md)' }}>
              {spacingTokens.map((space) => (
                <div key={space.name} style={{ display: 'flex', alignItems: 'center', gap: 'var(--spacing-lg)' }}>
                  <div style={{
                    width: space.value,
                    height: '24px',
                    background: 'var(--gradient-coral)',
                    borderRadius: 'var(--radius-sm)',
                    minWidth: '8px',
                  }} />
                  <div style={{ minWidth: '150px' }}>
                    <div style={styles.tokenName}>{space.name}</div>
                  </div>
                  <div style={styles.tokenValue}>{space.value} ({space.pixels})</div>
                </div>
              ))}
            </div>

            <h3 style={styles.subsectionTitle}>Section Padding</h3>
            {sectionPaddingTokens.map((padding) => (
              <div key={padding.name} className="token-row" style={styles.tokenRow}>
                <div style={styles.tokenName}>{padding.name}</div>
                <div style={styles.tokenValue}>{padding.value}</div>
                <div style={styles.tokenDesc}>{padding.desc}</div>
              </div>
            ))}
          </div>

          {/* Border Radius Section */}
          <div style={styles.card}>
            <h2 style={styles.sectionTitle}>Border Radius</h2>
            <div className="style-guide-grid" style={styles.grid}>
              {radiusTokens.map((radius) => (
                <div key={radius.name} style={{ textAlign: 'center' }}>
                  <div style={{
                    width: '80px',
                    height: '80px',
                    background: 'var(--gradient-coral)',
                    borderRadius: radius.value,
                    margin: '0 auto var(--spacing-sm)',
                  }} />
                  <div style={styles.tokenName}>{radius.name}</div>
                  <div style={styles.tokenValue}>{radius.value}</div>
                </div>
              ))}
            </div>
          </div>

          {/* Shadows Section */}
          <div style={styles.card}>
            <h2 style={styles.sectionTitle}>Shadows</h2>
            <div className="style-guide-grid" style={{ ...styles.grid, gridTemplateColumns: 'repeat(auto-fill, minmax(200px, 1fr))' }}>
              {shadowTokens.map((shadow) => (
                <div key={shadow.name}>
                  <div style={{
                    width: '100%',
                    height: '80px',
                    background: 'var(--bg-white)',
                    borderRadius: 'var(--radius-lg)',
                    boxShadow: shadow.value,
                    marginBottom: 'var(--spacing-sm)',
                  }} />
                  <div style={styles.tokenName}>{shadow.name}</div>
                  <div style={styles.colorDesc}>{shadow.desc}</div>
                </div>
              ))}
            </div>
          </div>

          {/* Transitions Section */}
          <div style={styles.card}>
            <h2 style={styles.sectionTitle}>Transitions</h2>
            {transitionTokens.map((transition) => (
              <div key={transition.name} className="token-row" style={styles.tokenRow}>
                <div style={styles.tokenName}>{transition.name}</div>
                <div style={styles.tokenValue}>{transition.value}</div>
                <div style={styles.tokenDesc}>{transition.desc}</div>
              </div>
            ))}
          </div>

          {/* Buttons Section */}
          <div style={styles.card}>
            <h2 style={styles.sectionTitle}>Buttons</h2>

            <h3 style={styles.subsectionTitle}>Button Sizes</h3>
            <div style={{ display: 'flex', gap: 'var(--spacing-lg)', flexWrap: 'wrap', alignItems: 'center', marginBottom: 'var(--spacing-xl)' }}>
              <button style={{
                background: 'var(--gradient-coral)',
                color: 'var(--text-white)',
                padding: 'var(--btn-padding-sm)',
                borderRadius: 'var(--radius-full)',
                border: 'none',
                fontWeight: 600,
                cursor: 'pointer',
                transition: 'var(--transition-medium)',
              }}>
                Small Button
              </button>
              <button style={{
                background: 'var(--gradient-coral)',
                color: 'var(--text-white)',
                padding: 'var(--btn-padding)',
                borderRadius: 'var(--radius-full)',
                border: 'none',
                fontWeight: 600,
                cursor: 'pointer',
                transition: 'var(--transition-medium)',
              }}>
                Default Button
              </button>
              <button style={{
                background: 'var(--gradient-coral)',
                color: 'var(--text-white)',
                padding: 'var(--btn-padding-lg)',
                borderRadius: 'var(--radius-full)',
                border: 'none',
                fontWeight: 600,
                cursor: 'pointer',
                transition: 'var(--transition-medium)',
              }}>
                Large Button
              </button>
            </div>

            <h3 style={styles.subsectionTitle}>Button Variants (Hover to see effects)</h3>
            <div style={{ display: 'flex', gap: 'var(--spacing-lg)', flexWrap: 'wrap', alignItems: 'center' }}>
              <button
                style={{
                  background: 'var(--gradient-coral)',
                  color: 'var(--text-white)',
                  padding: 'var(--btn-padding)',
                  borderRadius: 'var(--radius-full)',
                  border: 'none',
                  fontWeight: 600,
                  cursor: 'pointer',
                  boxShadow: 'var(--shadow-coral-sm)',
                  transition: 'var(--transition-medium)',
                }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.transform = 'translateY(-2px)';
                  e.currentTarget.style.boxShadow = 'var(--shadow-coral)';
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.transform = 'translateY(0)';
                  e.currentTarget.style.boxShadow = 'var(--shadow-coral-sm)';
                }}
              >
                Primary (Coral)
              </button>
              <button
                style={{
                  background: 'var(--primary-navy)',
                  color: 'var(--text-white)',
                  padding: 'var(--btn-padding)',
                  borderRadius: 'var(--radius-full)',
                  border: 'none',
                  fontWeight: 600,
                  cursor: 'pointer',
                  boxShadow: 'var(--shadow-md)',
                  transition: 'var(--transition-medium)',
                }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.transform = 'translateY(-2px)';
                  e.currentTarget.style.boxShadow = 'var(--shadow-lg)';
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.transform = 'translateY(0)';
                  e.currentTarget.style.boxShadow = 'var(--shadow-md)';
                }}
              >
                Primary (Navy)
              </button>
              <button
                style={{
                  background: 'transparent',
                  color: 'var(--text-primary)',
                  padding: 'var(--btn-padding)',
                  borderRadius: 'var(--radius-full)',
                  border: '2px solid var(--border-medium)',
                  fontWeight: 600,
                  cursor: 'pointer',
                  transition: 'var(--transition-medium)',
                }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.background = 'var(--bg-light-coral)';
                  e.currentTarget.style.borderColor = 'var(--primary-coral)';
                  e.currentTarget.style.color = 'var(--text-coral)';
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.background = 'transparent';
                  e.currentTarget.style.borderColor = 'var(--border-medium)';
                  e.currentTarget.style.color = 'var(--text-primary)';
                }}
              >
                Outlined
              </button>
              <button
                style={{
                  background: 'transparent',
                  color: 'var(--text-coral)',
                  padding: 'var(--btn-padding)',
                  borderRadius: 'var(--radius-full)',
                  border: 'none',
                  fontWeight: 600,
                  cursor: 'pointer',
                  transition: 'var(--transition-medium)',
                  display: 'inline-flex',
                  alignItems: 'center',
                  gap: 'var(--spacing-xs)',
                }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.gap = 'var(--spacing-sm)';
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.gap = 'var(--spacing-xs)';
                }}
              >
                Text Button <span>→</span>
              </button>
            </div>

            <h3 style={styles.subsectionTitle}>Hover State Patterns</h3>
            <div style={{
              background: 'var(--bg-secondary)',
              padding: 'var(--spacing-lg)',
              borderRadius: 'var(--radius-lg)',
              fontFamily: 'monospace',
              fontSize: 'var(--font-size-small)',
              color: 'var(--text-secondary)',
              lineHeight: 'var(--line-height-relaxed)',
              whiteSpace: 'pre-wrap',
              marginBottom: 'var(--spacing-lg)',
            }}>
{`// Primary Button (Coral) Hover
onMouseEnter: {
  transform: 'translateY(-2px)'
  boxShadow: 'var(--shadow-coral)'  // from --shadow-coral-sm
}
onMouseLeave: {
  transform: 'translateY(0)'
  boxShadow: 'var(--shadow-coral-sm)'
}

// Primary Button (Navy) Hover
onMouseEnter: {
  transform: 'translateY(-2px)'
  boxShadow: 'var(--shadow-lg)'  // from --shadow-md
}
onMouseLeave: {
  transform: 'translateY(0)'
  boxShadow: 'var(--shadow-md)'
}

// Outlined Button Hover
onMouseEnter: {
  background: 'var(--bg-light-coral)'
  borderColor: 'var(--primary-coral)'
  color: 'var(--text-coral)'
}
onMouseLeave: {
  background: 'transparent'
  borderColor: 'var(--border-medium)'
  color: 'var(--text-primary)'
}

// Text Button Hover
onMouseEnter: {
  gap: 'var(--spacing-sm)'  // arrow moves right
}
onMouseLeave: {
  gap: 'var(--spacing-xs)'
}`}
            </div>

            <h3 style={styles.subsectionTitle}>Button Padding Tokens</h3>
            {buttonTokens.map((btn) => (
              <div key={btn.name} className="token-row" style={styles.tokenRow}>
                <div style={styles.tokenName}>{btn.name}</div>
                <div style={styles.tokenValue}>{btn.value}</div>
                <div style={styles.tokenDesc}>{btn.desc}</div>
              </div>
            ))}
          </div>

          {/* Max Widths Section */}
          <div style={styles.card}>
            <h2 style={styles.sectionTitle}>Max Widths</h2>
            {maxWidthTokens.map((width) => (
              <div key={width.name} className="token-row" style={styles.tokenRow}>
                <div style={styles.tokenName}>{width.name}</div>
                <div style={styles.tokenValue}>{width.value}</div>
                <div style={styles.tokenDesc}>{width.desc}</div>
              </div>
            ))}
          </div>

          {/* Cards Section */}
          <div style={styles.card}>
            <h2 style={styles.sectionTitle}>Cards</h2>
            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: 'var(--spacing-lg)' }}>
              <div style={{
                background: 'var(--card-bg)',
                padding: 'var(--card-padding)',
                borderRadius: 'var(--radius-xl)',
                border: '1px solid var(--card-border)',
                boxShadow: 'var(--shadow-md)',
              }}>
                <h4 style={{
                  fontFamily: 'var(--font-headline)',
                  fontSize: '1.25rem',
                  fontWeight: 500,
                  marginBottom: 'var(--spacing-sm)',
                }}>
                  Default Card
                </h4>
                <p style={{ color: 'var(--text-muted)', lineHeight: 'var(--line-height-normal)' }}>
                  Standard card with medium shadow and default padding.
                </p>
              </div>
              <div style={{
                background: 'var(--card-bg)',
                padding: 'var(--card-padding-lg)',
                borderRadius: 'var(--radius-xl)',
                border: '2px solid rgba(239, 71, 111, 0.15)',
                boxShadow: 'var(--shadow-lg)',
              }}>
                <h4 style={{
                  fontFamily: 'var(--font-headline)',
                  fontSize: '1.25rem',
                  fontWeight: 500,
                  marginBottom: 'var(--spacing-sm)',
                  color: 'var(--text-coral)',
                }}>
                  Featured Card
                </h4>
                <p style={{ color: 'var(--text-muted)', lineHeight: 'var(--line-height-normal)' }}>
                  Highlighted card with larger padding and accent border.
                </p>
              </div>
            </div>
          </div>

          {/* Badges/Pills Section */}
          <div style={styles.card}>
            <h2 style={styles.sectionTitle}>Badges & Pills</h2>
            <p style={{ color: 'var(--text-secondary)', marginBottom: 'var(--spacing-lg)', lineHeight: 'var(--line-height-relaxed)' }}>
              Badges and pills are used for category labels, status indicators, and eyebrow text above headings.
            </p>

            <h3 style={styles.subsectionTitle}>Color Variants</h3>
            <div style={{ display: 'flex', gap: 'var(--spacing-md)', flexWrap: 'wrap', marginBottom: 'var(--spacing-xl)' }}>
              <div style={{
                display: 'inline-flex',
                alignItems: 'center',
                padding: 'var(--spacing-xs) var(--spacing-md)',
                background: 'var(--bg-light-coral)',
                borderRadius: 'var(--radius-full)',
                fontSize: 'var(--font-size-small)',
                fontWeight: 600,
                color: 'var(--text-coral)',
                border: '1px solid var(--border-medium)',
              }}>
                Coral Badge
              </div>
              <div style={{
                display: 'inline-flex',
                alignItems: 'center',
                padding: 'var(--spacing-xs) var(--spacing-md)',
                background: 'var(--bg-light-teal)',
                borderRadius: 'var(--radius-full)',
                fontSize: 'var(--font-size-small)',
                fontWeight: 600,
                color: 'var(--text-teal)',
                border: '1px solid var(--border-medium)',
              }}>
                Teal Badge
              </div>
              <div style={{
                display: 'inline-flex',
                alignItems: 'center',
                padding: 'var(--spacing-xs) var(--spacing-md)',
                background: 'rgba(17, 138, 178, 0.1)',
                borderRadius: 'var(--radius-full)',
                fontSize: 'var(--font-size-small)',
                fontWeight: 600,
                color: 'var(--text-blue)',
                border: '1px solid var(--border-medium)',
              }}>
                Blue Badge
              </div>
            </div>

            <h3 style={styles.subsectionTitle}>Usage Pattern</h3>
            <div style={{
              background: 'var(--bg-secondary)',
              padding: 'var(--spacing-lg)',
              borderRadius: 'var(--radius-lg)',
              fontFamily: 'monospace',
              fontSize: 'var(--font-size-small)',
              color: 'var(--text-secondary)',
              lineHeight: 'var(--line-height-relaxed)',
              whiteSpace: 'pre-wrap',
            }}>
{`padding: 'var(--spacing-xs) var(--spacing-md)'
background: 'var(--bg-light-coral)'  // or --bg-light-teal
borderRadius: 'var(--radius-full)'
fontSize: 'var(--font-size-small)'
fontWeight: 600
color: 'var(--text-coral)'  // or --text-teal
border: '1px solid var(--border-medium)'`}
            </div>
          </div>

          {/* Hero Layouts Section */}
          <div style={styles.card}>
            <h2 style={styles.sectionTitle}>Hero Layouts</h2>
            <p style={{ color: 'var(--text-secondary)', marginBottom: 'var(--spacing-lg)', lineHeight: 'var(--line-height-relaxed)' }}>
              Hero sections use a two-column grid layout with text content on the left and an optional image on the right.
              On mobile, the layout stacks vertically with the image appearing above the text.
            </p>

            <h3 style={styles.subsectionTitle}>Layout Pattern</h3>
            <div style={{
              background: 'var(--bg-secondary)',
              padding: 'var(--spacing-lg)',
              borderRadius: 'var(--radius-lg)',
              fontFamily: 'monospace',
              fontSize: 'var(--font-size-small)',
              color: 'var(--text-secondary)',
              lineHeight: 'var(--line-height-relaxed)',
              whiteSpace: 'pre-wrap',
            }}>
{`// Grid container
gridTemplateColumns: hasImage ? '1fr 1fr' : '1fr'
gap: 'var(--spacing-3xl)'
alignItems: 'center'

// Section padding
padding: 'var(--spacing-3xl) var(--spacing-lg)'

// Image container
background: 'var(--bg-white)'
borderRadius: 'var(--radius-xl)'
padding: 'var(--spacing-md)'
boxShadow: 'var(--shadow-xl)'
border: '1px solid var(--border-light)'`}
            </div>

            <h3 style={styles.subsectionTitle}>Responsive Breakpoint</h3>
            <div style={{
              background: 'var(--bg-secondary)',
              padding: 'var(--spacing-lg)',
              borderRadius: 'var(--radius-lg)',
              fontFamily: 'monospace',
              fontSize: 'var(--font-size-small)',
              color: 'var(--text-secondary)',
              lineHeight: 'var(--line-height-relaxed)',
              whiteSpace: 'pre-wrap',
            }}>
{`@media (max-width: 968px) {
  .hero-grid {
    grid-template-columns: 1fr !important;
    text-align: center !important;
  }
  .hero-content {
    align-items: center !important;
  }
  .hero-image {
    order: -1 !important;
    max-width: 500px !important;
    margin: 0 auto !important;
  }
}`}
            </div>
          </div>

          {/* Usage Guidelines */}
          <div style={styles.card}>
            <h2 style={styles.sectionTitle}>Usage Guidelines</h2>
            <div style={{
              display: 'grid',
              gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))',
              gap: 'var(--spacing-xl)'
            }}>
              <div>
                <h3 style={{
                  fontFamily: 'var(--font-headline)',
                  fontSize: '1.25rem',
                  fontWeight: 500,
                  marginBottom: 'var(--spacing-md)',
                  color: 'var(--text-coral)',
                }}>
                  Do's
                </h3>
                <ul style={{
                  color: 'var(--text-secondary)',
                  lineHeight: 'var(--line-height-relaxed)',
                  paddingLeft: 'var(--spacing-lg)',
                }}>
                  <li>Use CSS variables for all values</li>
                  <li>Apply consistent spacing with tokens</li>
                  <li>Use semantic color names (--text-primary vs #111)</li>
                  <li>Apply transitions for interactive elements</li>
                  <li>Use clamp() for responsive typography</li>
                </ul>
              </div>
              <div>
                <h3 style={{
                  fontFamily: 'var(--font-headline)',
                  fontSize: '1.25rem',
                  fontWeight: 500,
                  marginBottom: 'var(--spacing-md)',
                  color: 'var(--text-muted)',
                }}>
                  Don'ts
                </h3>
                <ul style={{
                  color: 'var(--text-secondary)',
                  lineHeight: 'var(--line-height-relaxed)',
                  paddingLeft: 'var(--spacing-lg)',
                }}>
                  <li>Avoid hardcoded hex colors</li>
                  <li>Don't use arbitrary spacing values</li>
                  <li>Don't skip hover/focus states</li>
                  <li>Avoid inline magic numbers</li>
                  <li>Don't mix different shadow intensities</li>
                </ul>
              </div>
            </div>
          </div>

        </div>
      </section>
    </>
  );
}

export const fields = [];

export const meta = {
  label: 'Style Guide',
  host_template_types: ['PAGE'],
};
