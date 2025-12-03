import React from 'react';
import ScrollAnimation from 'react-animate-on-scroll';
import 'animate.css/animate.min.css';

interface AnimateOnScrollProps {
  children: React.ReactNode;
  animation?: string;
  duration?: number;
  delay?: number;
  offset?: number;
  animateOnce?: boolean;
  className?: string;
  style?: React.CSSProperties;
}

/**
 * Wrapper component for scroll-triggered animations using react-animate-on-scroll.
 *
 * @example
 * <AnimateOnScroll animation="fadeInUp">
 *   <div>This will animate when scrolled into view</div>
 * </AnimateOnScroll>
 *
 * Available animations (from animate.css):
 * - fadeIn, fadeInUp, fadeInDown, fadeInLeft, fadeInRight
 * - slideInUp, slideInDown, slideInLeft, slideInRight
 * - zoomIn, zoomInUp, zoomInDown
 * - bounceIn, bounceInUp, bounceInDown
 *
 * See https://animate.style/ for full list
 */
export const AnimateOnScroll: React.FC<AnimateOnScrollProps> = ({
  children,
  animation = 'fadeInUp',
  duration = 1,
  delay = 0,
  offset = 100,
  animateOnce = true,
  className = '',
  style = {},
}) => {
  return (
    <ScrollAnimation
      animateIn={animation}
      duration={duration}
      delay={delay}
      offset={offset}
      animateOnce={animateOnce}
      className={className}
      style={style}
    >
      {children}
    </ScrollAnimation>
  );
};

export default AnimateOnScroll;
