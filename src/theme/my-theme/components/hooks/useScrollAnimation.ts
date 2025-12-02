import { useEffect, useRef, useState } from 'react';

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
 * Custom hook for scroll-triggered animations using Intersection Observer.
 * Uses CSS class-based animations for better compatibility with HubSpot.
 */
export const useScrollAnimation = (options: ScrollAnimationOptions = {}) => {
  const {
    threshold = 0.1,
    rootMargin = '0px',
    triggerOnce = true,
  } = options;

  const elementRef = useRef<HTMLElement>(null);
  const [isVisible, setIsVisible] = useState(true);

  useEffect(() => {
    const element = elementRef.current;
    if (!element) return;

    // Add the animation class
    element.classList.add('scroll-animate');

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          element.classList.add('is-visible');
          setIsVisible(true);
          if (triggerOnce) {
            observer.unobserve(element);
          }
        } else if (!triggerOnce) {
          element.classList.remove('is-visible');
          setIsVisible(false);
        }
      },
      { threshold, rootMargin }
    );

    // Small delay to ensure initial state is set
    requestAnimationFrame(() => {
      observer.observe(element);
    });

    return () => {
      observer.unobserve(element);
    };
  }, [threshold, rootMargin, triggerOnce]);

  return { elementRef, isVisible };
};

/**
 * Animation style presets for scroll-triggered animations.
 *
 * Each function takes a visibility boolean and returns CSS properties
 * that create smooth entrance animations when elements scroll into view.
 *
 * @example
 * ```tsx
 * // Basic fade in
 * <div style={animationStyles.fadeIn(isVisible)}>Content</div>
 *
 * // Fade in with upward slide
 * <section style={animationStyles.fadeInUp(isVisible)}>Section</section>
 *
 * // Staggered animation with delay
 * {items.map((item, index) => (
 *   <div key={index} style={animationStyles.staggered(isVisible, index * 0.1)}>
 *     {item.content}
 *   </div>
 * ))}
 * ```
 *
 * Available presets:
 * - `fadeIn` - Simple opacity fade
 * - `fadeInUp` - Fade with upward movement (30px)
 * - `fadeInDown` - Fade with downward movement
 * - `fadeInLeft` - Fade from left
 * - `fadeInRight` - Fade from right
 * - `scaleIn` - Fade with scale effect
 * - `slideInUp` - More dramatic slide (50px)
 * - `staggered` - Delayed animation for lists
 * - `subtleSlideUp` - Elegant, subtle slide (24px) - recommended for sections
 * - `elegantFadeScale` - Premium feel with slight scale
 * - `softRise` - Gentle rise animation (16px)
 * - `staggeredSubtle` - Subtle stagger for grids
 * - `contentBlock` - Optimized for content blocks
 */
export const animationStyles = {
  fadeIn: (isVisible: boolean): React.CSSProperties => ({
    opacity: isVisible ? 1 : 0,
    transition: 'opacity 0.8s cubic-bezier(0.4, 0, 0.2, 1)',
  }),

  fadeInUp: (isVisible: boolean): React.CSSProperties => ({
    opacity: isVisible ? 1 : 0,
    transform: isVisible ? 'translateY(0)' : 'translateY(40px)',
    transition: 'opacity 0.9s cubic-bezier(0.4, 0, 0.2, 1), transform 0.9s cubic-bezier(0.16, 1, 0.3, 1)',
  }),

  fadeInDown: (isVisible: boolean): React.CSSProperties => ({
    opacity: isVisible ? 1 : 0,
    transform: isVisible ? 'translateY(0)' : 'translateY(-30px)',
    transition: 'opacity 0.8s cubic-bezier(0.4, 0, 0.2, 1), transform 0.8s cubic-bezier(0.16, 1, 0.3, 1)',
  }),

  fadeInLeft: (isVisible: boolean): React.CSSProperties => ({
    opacity: isVisible ? 1 : 0,
    transform: isVisible ? 'translateX(0)' : 'translateX(-40px)',
    transition: 'opacity 0.8s cubic-bezier(0.4, 0, 0.2, 1), transform 0.8s cubic-bezier(0.16, 1, 0.3, 1)',
  }),

  fadeInRight: (isVisible: boolean): React.CSSProperties => ({
    opacity: isVisible ? 1 : 0,
    transform: isVisible ? 'translateX(0)' : 'translateX(40px)',
    transition: 'opacity 0.8s cubic-bezier(0.4, 0, 0.2, 1), transform 0.8s cubic-bezier(0.16, 1, 0.3, 1)',
  }),

  scaleIn: (isVisible: boolean): React.CSSProperties => ({
    opacity: isVisible ? 1 : 0,
    transform: isVisible ? 'scale(1)' : 'scale(0.95)',
    transition: 'opacity 0.8s cubic-bezier(0.4, 0, 0.2, 1), transform 0.8s cubic-bezier(0.16, 1, 0.3, 1)',
  }),

  slideInUp: (isVisible: boolean): React.CSSProperties => ({
    transform: isVisible ? 'translateY(0)' : 'translateY(60px)',
    opacity: isVisible ? 1 : 0,
    transition: 'transform 1s cubic-bezier(0.16, 1, 0.3, 1), opacity 1s cubic-bezier(0.4, 0, 0.2, 1)',
  }),

  staggered: (isVisible: boolean, delay: number = 0): React.CSSProperties => ({
    opacity: isVisible ? 1 : 0,
    transform: isVisible ? 'translateY(0)' : 'translateY(30px)',
    transition: `opacity 0.8s cubic-bezier(0.4, 0, 0.2, 1) ${delay}s, transform 0.8s cubic-bezier(0.16, 1, 0.3, 1) ${delay}s`,
  }),

  // Subtle, elegant slide up - perfect for sections
  subtleSlideUp: (isVisible: boolean): React.CSSProperties => ({
    opacity: isVisible ? 1 : 0,
    transform: isVisible ? 'translateY(0)' : 'translateY(32px)',
    transition: 'opacity 1s cubic-bezier(0.4, 0, 0.2, 1), transform 1s cubic-bezier(0.16, 1, 0.3, 1)',
  }),

  // Elegant fade with slight scale
  elegantFadeScale: (isVisible: boolean): React.CSSProperties => ({
    opacity: isVisible ? 1 : 0,
    transform: isVisible ? 'scale(1) translateY(0)' : 'scale(0.97) translateY(20px)',
    transition: 'opacity 0.9s cubic-bezier(0.4, 0, 0.2, 1), transform 0.9s cubic-bezier(0.16, 1, 0.3, 1)',
  }),

  // Soft rise animation
  softRise: (isVisible: boolean): React.CSSProperties => ({
    opacity: isVisible ? 1 : 0,
    transform: isVisible ? 'translateY(0)' : 'translateY(24px)',
    transition: 'opacity 0.8s cubic-bezier(0.4, 0, 0.2, 1), transform 0.8s cubic-bezier(0.25, 0.46, 0.45, 0.94)',
  }),

  // Staggered with subtle movement - great for cards and list items
  staggeredSubtle: (isVisible: boolean, delay: number = 0): React.CSSProperties => ({
    opacity: isVisible ? 1 : 0,
    transform: isVisible ? 'translateY(0)' : 'translateY(24px)',
    transition: `opacity 0.8s cubic-bezier(0.4, 0, 0.2, 1) ${delay}s, transform 0.8s cubic-bezier(0.16, 1, 0.3, 1) ${delay}s`,
  }),

  // Content block animation
  contentBlock: (isVisible: boolean): React.CSSProperties => ({
    opacity: isVisible ? 1 : 0,
    transform: isVisible ? 'translateY(0)' : 'translateY(28px)',
    transition: 'opacity 0.9s cubic-bezier(0.4, 0, 0.2, 1), transform 0.9s cubic-bezier(0.23, 1, 0.32, 1)',
  }),

  // Premium hero animation - slower and more dramatic
  heroEntrance: (isVisible: boolean): React.CSSProperties => ({
    opacity: isVisible ? 1 : 0,
    transform: isVisible ? 'translateY(0)' : 'translateY(48px)',
    transition: 'opacity 1.2s cubic-bezier(0.4, 0, 0.2, 1), transform 1.2s cubic-bezier(0.16, 1, 0.3, 1)',
  }),

  // Gentle reveal for large sections
  sectionReveal: (isVisible: boolean): React.CSSProperties => ({
    opacity: isVisible ? 1 : 0,
    transform: isVisible ? 'translateY(0)' : 'translateY(40px)',
    transition: 'opacity 1.1s cubic-bezier(0.4, 0, 0.2, 1), transform 1.1s cubic-bezier(0.16, 1, 0.3, 1)',
  }),
};
