/**
 * Design System Constants
 * Centralized configuration for all magic values, breakpoints, and design tokens
 */

// =============================================================================
// Z-INDEX SCALE
// =============================================================================
export const Z_INDEX = {
  /** Base layer for normal content */
  base: 1,
  /** Floating elements like dropdowns */
  dropdown: 100,
  /** Sticky elements like headers */
  sticky: 200,
  /** Fixed navigation */
  navigation: 300,
  /** Overlay backgrounds */
  overlay: 400,
  /** Modal dialogs */
  modal: 500,
  /** Tooltips and popovers */
  tooltip: 600,
  /** Toast notifications */
  toast: 700,
  /** Maximum z-index for critical UI */
  max: 9999,
} as const;

// =============================================================================
// BREAKPOINTS
// =============================================================================
export const BREAKPOINTS = {
  /** Extra small devices (phones, 375px and down) */
  xs: 375,
  /** Small devices (phones, 480px and up) */
  sm: 480,
  /** Medium devices (tablets, 768px and up) */
  md: 768,
  /** Large devices (desktops, 1024px and up) */
  lg: 1024,
  /** Extra large devices (large desktops, 1280px and up) */
  xl: 1280,
  /** Extra extra large devices (1536px and up) */
  xxl: 1536,
} as const;

/** Media query strings for use in CSS-in-JS */
export const MEDIA_QUERIES = {
  xs: `(max-width: ${BREAKPOINTS.xs}px)`,
  sm: `(max-width: ${BREAKPOINTS.sm}px)`,
  md: `(max-width: ${BREAKPOINTS.md}px)`,
  lg: `(max-width: ${BREAKPOINTS.lg}px)`,
  xl: `(max-width: ${BREAKPOINTS.xl}px)`,
  /** Mobile-first: min-width queries */
  smUp: `(min-width: ${BREAKPOINTS.sm}px)`,
  mdUp: `(min-width: ${BREAKPOINTS.md}px)`,
  lgUp: `(min-width: ${BREAKPOINTS.lg}px)`,
  xlUp: `(min-width: ${BREAKPOINTS.xl}px)`,
} as const;

// =============================================================================
// ANIMATION DURATIONS
// =============================================================================
export const ANIMATION = {
  /** Fast animations for micro-interactions (150ms) */
  fast: '0.15s',
  /** Default animation duration (300ms) */
  default: '0.3s',
  /** Medium animations (400ms) */
  medium: '0.4s',
  /** Slow animations for emphasis (600ms) */
  slow: '0.6s',
  /** Extra slow for dramatic effects (800ms) */
  extraSlow: '0.8s',
  /** Carousel/slide animations (1000ms) */
  slide: '1s',
} as const;

/** Animation easing functions */
export const EASING = {
  /** Standard ease for most animations */
  default: 'ease',
  /** Ease in-out for smooth transitions */
  smooth: 'ease-in-out',
  /** Ease out for enter animations */
  easeOut: 'ease-out',
  /** Ease in for exit animations */
  easeIn: 'ease-in',
  /** Custom cubic bezier for bouncy feel */
  bounce: 'cubic-bezier(0.68, -0.55, 0.265, 1.55)',
  /** Custom cubic bezier for snappy feel */
  snappy: 'cubic-bezier(0.4, 0, 0.2, 1)',
} as const;

// =============================================================================
// SPACING SCALE (matches CSS variables)
// =============================================================================
export const SPACING = {
  xs: '0.25rem',    // 4px
  sm: '0.5rem',     // 8px
  md: '1rem',       // 16px
  lg: '1.5rem',     // 24px
  xl: '2rem',       // 32px
  '2xl': '3rem',    // 48px
  '3xl': '4rem',    // 64px
  '4xl': '6rem',    // 96px
} as const;

// =============================================================================
// COMPONENT DIMENSIONS
// =============================================================================
export const DIMENSIONS = {
  /** Navigation height */
  navHeight: '80px',
  /** Mobile nav height */
  navHeightMobile: '64px',
  /** Maximum content width */
  maxWidth: {
    sm: '640px',
    md: '768px',
    lg: '1024px',
    xl: '1280px',
    prose: '65ch',
  },
  /** Card dimensions */
  card: {
    padding: '2rem',
    borderRadius: '16px',
  },
  /** Button dimensions */
  button: {
    height: '48px',
    heightSm: '36px',
    heightLg: '56px',
    paddingX: '1.5rem',
    borderRadius: '8px',
  },
  /** Input dimensions */
  input: {
    height: '48px',
    paddingX: '1rem',
    borderRadius: '8px',
  },
  /** Modal dimensions */
  modal: {
    maxWidth: '600px',
    padding: '2rem',
    borderRadius: '20px',
  },
} as const;

// =============================================================================
// COLORS (semantic aliases for CSS variables)
// =============================================================================
export const COLORS = {
  primary: {
    navy: 'var(--primary-navy)',
    coral: 'var(--primary-coral)',
    peach: 'var(--primary-peach)',
  },
  text: {
    primary: 'var(--text-primary)',
    secondary: 'var(--text-secondary)',
    muted: 'var(--text-muted)',
    white: 'var(--text-white)',
    coral: 'var(--text-coral)',
    teal: 'var(--text-teal)',
  },
  background: {
    white: 'var(--bg-white)',
    light: 'var(--bg-light)',
    cream: 'var(--bg-cream)',
  },
  border: {
    light: 'var(--border-light)',
    medium: 'var(--border-medium)',
  },
  status: {
    success: '#06D6A0',
    warning: '#FFD166',
    error: '#EF476F',
    info: '#118AB2',
  },
} as const;

// =============================================================================
// SHADOWS
// =============================================================================
export const SHADOWS = {
  sm: 'var(--shadow-sm)',
  md: 'var(--shadow-md)',
  lg: 'var(--shadow-lg)',
  xl: '0 24px 64px rgba(0, 0, 0, 0.15)',
  card: '0 4px 20px rgba(0, 0, 0, 0.06)',
  modal: '0 25px 50px -12px rgba(0, 0, 0, 0.25)',
  button: '0 4px 14px rgba(0, 0, 0, 0.1)',
} as const;

// =============================================================================
// TYPOGRAPHY
// =============================================================================
export const TYPOGRAPHY = {
  fontFamily: {
    headline: 'var(--font-headline)',
    body: 'var(--font-body)',
  },
  fontSize: {
    xs: '0.75rem',    // 12px
    sm: '0.875rem',   // 14px
    base: '1rem',     // 16px
    lg: '1.125rem',   // 18px
    xl: '1.25rem',    // 20px
    '2xl': '1.5rem',  // 24px
    '3xl': '2rem',    // 32px
    '4xl': '2.5rem',  // 40px
    '5xl': '3rem',    // 48px
  },
  fontWeight: {
    normal: 400,
    medium: 500,
    semibold: 600,
    bold: 700,
  },
  lineHeight: {
    tight: 1.1,
    snug: 1.25,
    normal: 1.5,
    relaxed: 1.7,
  },
  letterSpacing: {
    tight: '-0.02em',
    normal: '0',
    wide: '0.025em',
  },
} as const;

// =============================================================================
// FORM VALIDATION
// =============================================================================
export const VALIDATION = {
  email: /^[^\s@]+@[^\s@]+\.[^\s@]+$/,
  phone: /^[+]?[(]?[0-9]{3}[)]?[-\s.]?[0-9]{3}[-\s.]?[0-9]{4,6}$/,
  url: /^(https?:\/\/)?([\da-z.-]+)\.([a-z.]{2,6})([/\w .-]*)*\/?$/,
} as const;

// =============================================================================
// ACCESSIBILITY
// =============================================================================
export const A11Y = {
  /** Minimum touch target size (44x44px per WCAG) */
  minTouchTarget: '44px',
  /** Focus ring styles */
  focusRing: '0 0 0 3px rgba(239, 71, 111, 0.3)',
  /** Skip link z-index */
  skipLinkZIndex: Z_INDEX.max,
} as const;

// =============================================================================
// UTILITY FUNCTIONS
// =============================================================================

/**
 * Get responsive value based on breakpoint
 */
export function getResponsiveValue<T>(
  values: { base: T; sm?: T; md?: T; lg?: T; xl?: T },
  breakpoint: keyof typeof BREAKPOINTS
): T {
  const breakpointOrder: (keyof typeof BREAKPOINTS)[] = ['xs', 'sm', 'md', 'lg', 'xl', 'xxl'];
  const currentIndex = breakpointOrder.indexOf(breakpoint);

  for (let i = currentIndex; i >= 0; i--) {
    const key = breakpointOrder[i] as keyof typeof values;
    if (values[key] !== undefined) {
      return values[key] as T;
    }
  }

  return values.base;
}

/**
 * Create a transition string with consistent timing
 */
export function createTransition(
  properties: string | string[],
  duration: keyof typeof ANIMATION = 'default',
  easing: keyof typeof EASING = 'smooth'
): string {
  const props = Array.isArray(properties) ? properties : [properties];
  return props.map(prop => `${prop} ${ANIMATION[duration]} ${EASING[easing]}`).join(', ');
}

/**
 * Clamp a value between min and max
 */
export function clamp(value: number, min: number, max: number): number {
  return Math.min(Math.max(value, min), max);
}

export default {
  Z_INDEX,
  BREAKPOINTS,
  MEDIA_QUERIES,
  ANIMATION,
  EASING,
  SPACING,
  DIMENSIONS,
  COLORS,
  SHADOWS,
  TYPOGRAPHY,
  VALIDATION,
  A11Y,
  getResponsiveValue,
  createTransition,
  clamp,
};
