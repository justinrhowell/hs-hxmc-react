import React from 'react';

/**
 * Vanilla JavaScript scroll animation observer.
 * Include this component once per page (typically in a layout or first section).
 *
 * Elements with class "scroll-animate" will fade in when scrolled into view.
 * Add "data-delay" attribute for staggered animations (value in ms).
 */
export const ScrollAnimationScript: React.FC = () => {
  return (
    <script dangerouslySetInnerHTML={{__html: `
      (function() {
        // Only run on client side
        if (typeof window === 'undefined' || typeof IntersectionObserver === 'undefined') return;

        // Debounce initialization to ensure DOM is ready
        function initScrollAnimations() {
          var elements = document.querySelectorAll('.scroll-animate');
          if (elements.length === 0) return;

          var observer = new IntersectionObserver(function(entries) {
            entries.forEach(function(entry) {
              if (entry.isIntersecting) {
                var delay = entry.target.getAttribute('data-delay') || 0;
                setTimeout(function() {
                  entry.target.classList.add('is-visible');
                }, parseInt(delay));
                observer.unobserve(entry.target);
              }
            });
          }, {
            threshold: 0.1,
            rootMargin: '0px 0px -50px 0px'
          });

          elements.forEach(function(el) {
            observer.observe(el);
          });
        }

        // Run when DOM is ready
        if (document.readyState === 'loading') {
          document.addEventListener('DOMContentLoaded', initScrollAnimations);
        } else {
          // Small delay to ensure React has rendered
          setTimeout(initScrollAnimations, 100);
        }
      })();
    `}} />
  );
};

export default ScrollAnimationScript;
