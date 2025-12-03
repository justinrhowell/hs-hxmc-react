import { useRef } from 'react';

/**
 * Configuration options for scroll-triggered animations
 */
interface ScrollAnimationOptions {
  /** Percentage of element that must be visible to trigger (0-1). Default: 0.1 */
  threshold?: number;
  /** Margin around the root element. Default: '0px' */
  rootMargin?: string;
  /** Whether to trigger animation only once. Default: true */
  triggerOnce?: boolean;
}

/**
 * Legacy hook - kept for backwards compatibility.
 * Components should migrate to using ScrollAnimation component directly.
 */
export const useScrollAnimation = (options: ScrollAnimationOptions = {}) => {
  const elementRef = useRef<HTMLElement>(null);
  return { elementRef, isVisible: true };
};

/**
 * Animation style presets - kept for backwards compatibility.
 * These return static styles (no animation) since we're using react-animate-on-scroll now.
 */
export const animationStyles = {
  fadeIn: (isVisible: boolean): React.CSSProperties => ({}),
  fadeInUp: (isVisible: boolean): React.CSSProperties => ({}),
  fadeInDown: (isVisible: boolean): React.CSSProperties => ({}),
  fadeInLeft: (isVisible: boolean): React.CSSProperties => ({}),
  fadeInRight: (isVisible: boolean): React.CSSProperties => ({}),
  scaleIn: (isVisible: boolean): React.CSSProperties => ({}),
  slideInUp: (isVisible: boolean): React.CSSProperties => ({}),
  staggered: (isVisible: boolean, delay: number = 0): React.CSSProperties => ({}),
  subtleSlideUp: (isVisible: boolean): React.CSSProperties => ({}),
  elegantFadeScale: (isVisible: boolean): React.CSSProperties => ({}),
  softRise: (isVisible: boolean): React.CSSProperties => ({}),
  staggeredSubtle: (isVisible: boolean, delay: number = 0): React.CSSProperties => ({}),
  contentBlock: (isVisible: boolean): React.CSSProperties => ({}),
  heroEntrance: (isVisible: boolean): React.CSSProperties => ({}),
  sectionReveal: (isVisible: boolean): React.CSSProperties => ({}),
};
