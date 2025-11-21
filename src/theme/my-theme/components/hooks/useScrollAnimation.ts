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
 *
 * Provides a ref to attach to the animated element and a boolean indicating
 * whether the element is currently visible in the viewport.
 *
 * @param options - Configuration options for the animation
 * @returns Object containing elementRef and isVisible state
 *
 * @example
 * ```tsx
 * function MyComponent() {
 *   const { elementRef, isVisible } = useScrollAnimation({ threshold: 0.2 });
 *
 *   return (
 *     <section
 *       ref={elementRef as React.RefObject<HTMLElement>}
 *       style={animationStyles.fadeInUp(isVisible)}
 *     >
 *       Content that fades in when scrolled into view
 *     </section>
 *   );
 * }
 * ```
 *
 * @see {@link animationStyles} for available animation presets
 */
export const useScrollAnimation = (options: ScrollAnimationOptions = {}) => {
  const {
    threshold = 0.1,
    rootMargin = '0px',
    triggerOnce = true,
  } = options;

  const elementRef = useRef<HTMLElement>(null);
  const [isVisible, setIsVisible] = useState(true); // Start visible to prevent flash

  useEffect(() => {
    const element = elementRef.current;
    if (!element) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          if (triggerOnce) {
            observer.unobserve(element);
          }
        } else if (!triggerOnce) {
          setIsVisible(false);
        }
      },
      { threshold, rootMargin }
    );

    observer.observe(element);

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
    transition: 'opacity 0.6s ease-out',
  }),

  fadeInUp: (isVisible: boolean): React.CSSProperties => ({
    opacity: isVisible ? 1 : 0,
    transform: isVisible ? 'translateY(0)' : 'translateY(30px)',
    transition: 'opacity 0.6s ease-out, transform 0.6s ease-out',
  }),

  fadeInDown: (isVisible: boolean): React.CSSProperties => ({
    opacity: isVisible ? 1 : 0,
    transform: isVisible ? 'translateY(0)' : 'translateY(-30px)',
    transition: 'opacity 0.6s ease-out, transform 0.6s ease-out',
  }),

  fadeInLeft: (isVisible: boolean): React.CSSProperties => ({
    opacity: isVisible ? 1 : 0,
    transform: isVisible ? 'translateX(0)' : 'translateX(-30px)',
    transition: 'opacity 0.6s ease-out, transform 0.6s ease-out',
  }),

  fadeInRight: (isVisible: boolean): React.CSSProperties => ({
    opacity: isVisible ? 1 : 0,
    transform: isVisible ? 'translateX(0)' : 'translateX(30px)',
    transition: 'opacity 0.6s ease-out, transform 0.6s ease-out',
  }),

  scaleIn: (isVisible: boolean): React.CSSProperties => ({
    opacity: isVisible ? 1 : 0,
    transform: isVisible ? 'scale(1)' : 'scale(0.9)',
    transition: 'opacity 0.6s ease-out, transform 0.6s ease-out',
  }),

  slideInUp: (isVisible: boolean): React.CSSProperties => ({
    transform: isVisible ? 'translateY(0)' : 'translateY(50px)',
    opacity: isVisible ? 1 : 0,
    transition: 'transform 0.8s cubic-bezier(0.16, 1, 0.3, 1), opacity 0.8s ease-out',
  }),

  staggered: (isVisible: boolean, delay: number = 0): React.CSSProperties => ({
    opacity: isVisible ? 1 : 0,
    transform: isVisible ? 'translateY(0)' : 'translateY(20px)',
    transition: `opacity 0.6s ease-out ${delay}s, transform 0.6s ease-out ${delay}s`,
  }),

  // Subtle, elegant slide up - perfect for sections
  subtleSlideUp: (isVisible: boolean): React.CSSProperties => ({
    opacity: isVisible ? 1 : 0,
    transform: isVisible ? 'translateY(0)' : 'translateY(24px)',
    transition: 'opacity 0.8s cubic-bezier(0.4, 0, 0.2, 1), transform 0.8s cubic-bezier(0.4, 0, 0.2, 1)',
  }),

  // Elegant fade with slight scale
  elegantFadeScale: (isVisible: boolean): React.CSSProperties => ({
    opacity: isVisible ? 1 : 0,
    transform: isVisible ? 'scale(1)' : 'scale(0.96)',
    transition: 'opacity 0.7s ease-out, transform 0.7s cubic-bezier(0.34, 1.56, 0.64, 1)',
  }),

  // Soft rise animation
  softRise: (isVisible: boolean): React.CSSProperties => ({
    opacity: isVisible ? 1 : 0,
    transform: isVisible ? 'translateY(0)' : 'translateY(16px)',
    transition: 'opacity 0.6s ease-out, transform 0.6s cubic-bezier(0.25, 0.46, 0.45, 0.94)',
  }),

  // Staggered with subtle movement
  staggeredSubtle: (isVisible: boolean, delay: number = 0): React.CSSProperties => ({
    opacity: isVisible ? 1 : 0,
    transform: isVisible ? 'translateY(0)' : 'translateY(16px)',
    transition: `opacity 0.7s cubic-bezier(0.4, 0, 0.2, 1) ${delay}s, transform 0.7s cubic-bezier(0.4, 0, 0.2, 1) ${delay}s`,
  }),

  // Content block animation
  contentBlock: (isVisible: boolean): React.CSSProperties => ({
    opacity: isVisible ? 1 : 0,
    transform: isVisible ? 'translateY(0)' : 'translateY(20px)',
    transition: 'opacity 0.7s ease-out, transform 0.7s cubic-bezier(0.23, 1, 0.32, 1)',
  }),
};
