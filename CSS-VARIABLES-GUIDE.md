# CSS Variables Reference Guide

## Quick Reference: Before → After

### Colors
```tsx
// BEFORE
color: '#111111'              → color: 'var(--text-primary)'
color: '#494949'              → color: 'var(--text-secondary)'
color: '#6B7280'              → color: 'var(--text-muted)'
color: '#EF476F'              → color: 'var(--text-coral)'
color: 'white'                → color: 'var(--text-white)'
color: 'rgba(255,255,255,0.95)' → color: 'var(--text-white-soft)'

background: 'white'           → background: 'var(--bg-white)'
background: '#FCFCFC'         → background: 'var(--bg-secondary)'
background: '#FDF8EF'         → background: 'var(--bg-cream)'
background: 'rgba(239,71,111,0.05)' → background: 'var(--bg-light-coral)'
```

### Gradients
```tsx
// BEFORE
'linear-gradient(135deg, #EF476F 0%, #F89F7B 50%, #FFB088 100%)'
→ 'var(--gradient-coral-peach)'

'linear-gradient(135deg, #FFFBF8 0%, #FFF8F3 50%, #FFFAF5 100%)'
→ 'var(--gradient-hero)'

'linear-gradient(135deg, #FFF5E6 0%, #FFE9C6 100%)'
→ 'var(--gradient-warm)'

'linear-gradient(135deg, #FFF0F3 0%, #FFE5E9 100%)'
→ 'var(--gradient-coral-light)'

'linear-gradient(90deg, #EF4D7E 0%, #F89F7B 50%, #FED700 100%)'
→ 'var(--gradient-text)' // For text gradients
```

### Spacing
```tsx
// BEFORE
padding: '100px 20px'         → padding: 'var(--section-padding-lg) var(--spacing-lg)'
padding: '80px 20px'          → padding: 'var(--section-padding-md) var(--spacing-lg)'
padding: '2rem'               → padding: 'var(--card-padding)'
padding: '2.5rem'             → padding: 'var(--card-padding)'
padding: '3rem'               → padding: 'var(--card-padding-lg)'
padding: '18px 40px'          → padding: 'var(--btn-padding)'

marginBottom: '24px'          → marginBottom: 'var(--spacing-md)'
marginBottom: '1rem'          → marginBottom: 'var(--spacing-sm)'
marginBottom: '1.5rem'        → marginBottom: 'var(--spacing-md)'
marginBottom: '2rem'          → marginBottom: 'var(--spacing-lg)'
marginBottom: '3rem'          → marginBottom: 'var(--spacing-xl)'
marginBottom: '40px'          → marginBottom: 'var(--spacing-2xl)'

gap: '1rem'                   → gap: 'var(--spacing-sm)'
gap: '1.25rem'                → gap: 'var(--spacing-md)'
gap: '1.75rem'                → gap: 'var(--spacing-lg)'
gap: '5rem'                   → gap: 'var(--spacing-3xl)'
```

### Border Radius
```tsx
// BEFORE
borderRadius: '4px'           → borderRadius: 'var(--radius-sm)'
borderRadius: '8px'           → borderRadius: 'var(--radius-sm)'
borderRadius: '10px'          → borderRadius: 'var(--radius-md)'
borderRadius: '12px'          → borderRadius: 'var(--radius-md)'
borderRadius: '16px'          → borderRadius: 'var(--radius-lg)'
borderRadius: '20px'          → borderRadius: 'var(--radius-xl)'
borderRadius: '24px'          → borderRadius: 'var(--radius-xl)'
borderRadius: '50px'          → borderRadius: 'var(--radius-full)'
borderRadius: '50%'           → borderRadius: 'var(--radius-circle)'
```

### Borders
```tsx
// BEFORE
border: '2px solid rgba(239, 71, 111, 0.1)'  → border: '2px solid var(--border-light)'
border: '2px solid rgba(239, 71, 111, 0.2)'  → border: '2px solid var(--border-medium)'
border: '2px solid rgba(239, 71, 111, 0.3)'  → border: '2px solid var(--border-strong)'
border: '1px solid rgba(255, 255, 255, 0.2)' → border: '1px solid var(--border-white)'
```

### Shadows
```tsx
// BEFORE
boxShadow: '0 2px 8px rgba(0, 0, 0, 0.06)'   → boxShadow: 'var(--shadow-sm)'
boxShadow: '0 4px 16px rgba(0, 0, 0, 0.08)'  → boxShadow: 'var(--shadow-md)'
boxShadow: '0 8px 24px rgba(0, 0, 0, 0.06)'  → boxShadow: 'var(--shadow-md)'
boxShadow: '0 8px 32px rgba(0, 0, 0, 0.12)'  → boxShadow: 'var(--shadow-lg)'
boxShadow: '0 12px 40px rgba(0, 0, 0, 0.15)' → boxShadow: 'var(--shadow-hover)'
```

### Typography
```tsx
// BEFORE
fontSize: '3rem'              → fontSize: 'var(--font-size-h2)'
fontSize: '2rem'              → fontSize: 'var(--font-size-h3)'
fontFamily: 'var(--font-headline)' // Already good!
lineHeight: 1.2               → lineHeight: 'var(--line-height-tight)'
lineHeight: 1.6               → lineHeight: 'var(--line-height-normal)'
lineHeight: 1.8               → lineHeight: 'var(--line-height-relaxed)'
letterSpacing: '-0.02em'      → letterSpacing: 'var(--letter-spacing-tight)'
```

### Max Widths
```tsx
// BEFORE
maxWidth: '600px'             → maxWidth: 'var(--max-width-sm)'
maxWidth: '700px'             → maxWidth: 'var(--max-width-sm)'
maxWidth: '800px'             → maxWidth: 'var(--max-width-md)'
maxWidth: '900px'             → maxWidth: 'var(--max-width-lg)'
maxWidth: '1000px'            → maxWidth: 'var(--max-width-lg)'
maxWidth: '1200px'            → maxWidth: 'var(--max-width-xl)'
```

### Z-Index
```tsx
// BEFORE
zIndex: 1                     → zIndex: 'var(--z-base)'
zIndex: 10                    → zIndex: 'var(--z-dropdown)'
zIndex: 100                   → zIndex: 'var(--z-sticky)'
zIndex: 1000                  → zIndex: 'var(--z-modal)'
zIndex: 10000                 → zIndex: 'var(--z-tooltip)'
```

### Transitions
```tsx
// BEFORE
transition: 'all 0.2s ease'   → transition: 'var(--transition-fast)'
transition: 'all 0.3s ease'   → transition: 'var(--transition-medium)'
transition: 'all 0.4s ...'    → transition: 'var(--transition-smooth)'
```

## Complete Variables List

### All Available CSS Variables
Located in `/src/theme/my-theme/styles/global.css`

```css
/* Colors */
--primary-coral: #EF476F
--primary-navy: #073B4C
--secondary-yellow: #FFD166
--secondary-teal: #06D6A0
--secondary-blue: #118AB2

/* Text Colors */
--text-primary: #111111
--text-secondary: #494949
--text-muted: #6B7280
--text-white: #FFFFFF
--text-white-soft: rgba(255, 255, 255, 0.95)
--text-coral: #EF476F

/* Background Colors */
--bg-primary: #FFFFFF
--bg-secondary: #FCFCFC
--bg-cream: #FDF8EF
--bg-light-coral: rgba(239, 71, 111, 0.05)
--bg-white: #FFFFFF

/* Gradients */
--gradient-text: linear-gradient(90deg, #EF4D7E 0%, #F89F7B 50%, #FED700 100%)
--gradient-coral: linear-gradient(135deg, #EF476F 0%, #F89F7B 100%)
--gradient-hero: linear-gradient(135deg, #FFFBF8 0%, #FFF8F3 50%, #FFFAF5 100%)
--gradient-warm: linear-gradient(135deg, #FFF5E6 0%, #FFE9C6 100%)
--gradient-coral-peach: linear-gradient(135deg, #EF476F 0%, #F89F7B 50%, #FFB088 100%)
--gradient-coral-light: linear-gradient(135deg, #FFF0F3 0%, #FFE5E9 100%)

/* Typography */
--font-headline: 'Ginto Nord', ...
--font-body: 'Inter', ...
--font-size-h1: clamp(2rem, 5vw + 1rem, 3.5rem)
--font-size-h2: clamp(1.75rem, 4vw + 1rem, 3rem)
--font-size-h3: clamp(1.5rem, 3vw + 0.5rem, 2.25rem)
--font-size-body: clamp(1rem, 1vw + 0.75rem, 1.125rem)
--font-size-small: clamp(0.875rem, 0.5vw + 0.75rem, 1rem)

/* Spacing */
--spacing-xs: 0.5rem    /* 8px */
--spacing-sm: 1rem      /* 16px */
--spacing-md: 1.5rem    /* 24px */
--spacing-lg: 2rem      /* 32px */
--spacing-xl: 3rem      /* 48px */
--spacing-2xl: 4rem     /* 64px */
--spacing-3xl: 6rem     /* 96px */

/* Section Padding */
--section-padding-sm: 3rem
--section-padding-md: 5rem
--section-padding-lg: 7rem

/* Border Radius */
--radius-sm: 8px
--radius-md: 12px
--radius-lg: 16px
--radius-xl: 24px
--radius-2xl: 32px
--radius-full: 50px
--radius-circle: 50%

/* Border Colors */
--border-light: rgba(239, 71, 111, 0.1)
--border-medium: rgba(239, 71, 111, 0.2)
--border-strong: rgba(239, 71, 111, 0.3)
--border-white: rgba(255, 255, 255, 0.2)

/* Shadows */
--shadow-sm: 0 2px 8px rgba(0, 0, 0, 0.06)
--shadow-md: 0 4px 16px rgba(0, 0, 0, 0.08)
--shadow-lg: 0 8px 32px rgba(0, 0, 0, 0.12)
--shadow-hover: 0 12px 40px rgba(0, 0, 0, 0.15)

/* Transitions */
--transition-smooth: all 0.4s cubic-bezier(0.4, 0, 0.2, 1)
--transition-bounce: all 0.5s cubic-bezier(0.34, 1.56, 0.64, 1)
--transition-fast: all 0.2s ease
--transition-medium: all 0.3s ease

/* Z-Index */
--z-base: 1
--z-dropdown: 10
--z-sticky: 100
--z-modal: 1000
--z-tooltip: 10000

/* Button Styles */
--btn-padding: 18px 40px
--btn-padding-sm: 12px 24px
--btn-padding-lg: 20px 48px

/* Card Styles */
--card-padding: 2rem
--card-padding-lg: 3rem
--card-bg: #FFFFFF
--card-border: rgba(239, 71, 111, 0.1)

/* Line Height */
--line-height-tight: 1.2
--line-height-normal: 1.6
--line-height-relaxed: 1.8

/* Letter Spacing */
--letter-spacing-tight: -0.02em
--letter-spacing-normal: 0
--letter-spacing-wide: 0.02em

/* Max Widths */
--max-width-sm: 600px
--max-width-md: 800px
--max-width-lg: 1000px
--max-width-xl: 1200px
--max-width-2xl: 1400px

/* Container Padding */
--container-padding: 1.5rem
--container-padding-sm: 1rem
```

## Remaining Components to Update

### Homepage Components (in order):
1. ✅ Navigation
2. ✅ HeroDiagram
3. ✅ LogosCarousel
4. ✅ AIFeatures
5. ✅ ResultsSection (DONE)
6. ✅ TestimonialsCarousel
7. ✅ ROICalculator (DONE)
8. ✅ StagesSection
9. ✅ FAQSection
10. ✅ CTASection (DONE)
11. ✅ Footer

## Tips for Refactoring

1. **Search & Replace Strategy**: Use your editor's find/replace with the mappings above
2. **Test as You Go**: Check the dev server after each component
3. **Consistency**: Always use the semantic variable names, not the raw values
4. **Mobile-First**: The variables are responsive by default using `clamp()`
5. **Add More Variables**: If you find repeated values, add them to `global.css`

## Example Refactor

### Before:
```tsx
<div style={{
  padding: '100px 20px',
  background: 'linear-gradient(135deg, #EF476F 0%, #F89F7B 50%, #FFB088 100%)',
  borderRadius: '24px',
  boxShadow: '0 8px 32px rgba(0, 0, 0, 0.12)',
  color: '#111111'
}}>
```

### After:
```tsx
<div style={{
  padding: 'var(--section-padding-lg) var(--spacing-lg)',
  background: 'var(--gradient-coral-peach)',
  borderRadius: 'var(--radius-xl)',
  boxShadow: 'var(--shadow-lg)',
  color: 'var(--text-primary)'
}}>
```

## Benefits

- **Single source of truth** - change once, update everywhere
- **Consistent design** - no more #EF476E vs #EF476F typos
- **Easy theming** - swap variables for different themes
- **Better DX** - semantic names are easier to understand
- **Responsive by default** - fluid typography with clamp()
