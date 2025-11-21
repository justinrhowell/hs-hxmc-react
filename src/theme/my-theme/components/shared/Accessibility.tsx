import React, { useEffect, useRef, useCallback } from 'react';
import { Z_INDEX, A11Y } from '../../constants';

/**
 * Skip Link component for keyboard navigation
 * Allows users to skip directly to main content
 *
 * @example
 * ```tsx
 * // In your layout component
 * <SkipLink href="#main-content" />
 * <Navigation />
 * <main id="main-content">...</main>
 * ```
 */
export interface SkipLinkProps {
  /** Target element ID to skip to */
  href: string;
  /** Link text */
  children?: React.ReactNode;
}

export function SkipLink({ href, children = 'Skip to main content' }: SkipLinkProps) {
  return (
    <a
      href={href}
      style={{
        position: 'absolute',
        left: '-9999px',
        top: 'auto',
        width: '1px',
        height: '1px',
        overflow: 'hidden',
        zIndex: A11Y.skipLinkZIndex,
      }}
      onFocus={(e) => {
        e.currentTarget.style.left = '50%';
        e.currentTarget.style.transform = 'translateX(-50%)';
        e.currentTarget.style.top = '1rem';
        e.currentTarget.style.width = 'auto';
        e.currentTarget.style.height = 'auto';
        e.currentTarget.style.overflow = 'visible';
        e.currentTarget.style.padding = '1rem 2rem';
        e.currentTarget.style.background = 'var(--primary-navy)';
        e.currentTarget.style.color = 'white';
        e.currentTarget.style.borderRadius = '8px';
        e.currentTarget.style.textDecoration = 'none';
        e.currentTarget.style.fontWeight = '600';
        e.currentTarget.style.boxShadow = '0 4px 12px rgba(0, 0, 0, 0.2)';
      }}
      onBlur={(e) => {
        e.currentTarget.style.left = '-9999px';
        e.currentTarget.style.transform = 'none';
        e.currentTarget.style.width = '1px';
        e.currentTarget.style.height = '1px';
        e.currentTarget.style.overflow = 'hidden';
      }}
    >
      {children}
    </a>
  );
}

/**
 * Focus Trap component for modals and dialogs
 * Keeps focus within the component when active
 *
 * @example
 * ```tsx
 * <FocusTrap active={isModalOpen}>
 *   <Modal>...</Modal>
 * </FocusTrap>
 * ```
 */
export interface FocusTrapProps {
  /** Child content to trap focus within */
  children: React.ReactNode;
  /** Whether focus trap is active */
  active?: boolean;
  /** Callback when escape key is pressed */
  onEscape?: () => void;
  /** Element to return focus to when trap is deactivated */
  returnFocusTo?: HTMLElement | null;
}

export function FocusTrap({ children, active = true, onEscape, returnFocusTo }: FocusTrapProps) {
  const containerRef = useRef<HTMLDivElement>(null);
  const previousActiveElement = useRef<HTMLElement | null>(null);

  const getFocusableElements = useCallback(() => {
    if (!containerRef.current) return [];

    const focusableSelectors = [
      'button:not([disabled])',
      'a[href]',
      'input:not([disabled])',
      'select:not([disabled])',
      'textarea:not([disabled])',
      '[tabindex]:not([tabindex="-1"])',
    ].join(', ');

    return Array.from(containerRef.current.querySelectorAll<HTMLElement>(focusableSelectors));
  }, []);

  const handleKeyDown = useCallback(
    (e: KeyboardEvent) => {
      if (!active) return;

      if (e.key === 'Escape' && onEscape) {
        onEscape();
        return;
      }

      if (e.key !== 'Tab') return;

      const focusableElements = getFocusableElements();
      if (focusableElements.length === 0) return;

      const firstElement = focusableElements[0];
      const lastElement = focusableElements[focusableElements.length - 1];

      if (e.shiftKey) {
        // Shift + Tab: move backwards
        if (document.activeElement === firstElement) {
          e.preventDefault();
          lastElement.focus();
        }
      } else {
        // Tab: move forwards
        if (document.activeElement === lastElement) {
          e.preventDefault();
          firstElement.focus();
        }
      }
    },
    [active, onEscape, getFocusableElements]
  );

  useEffect(() => {
    if (active) {
      // Store currently focused element
      previousActiveElement.current = document.activeElement as HTMLElement;

      // Focus first focusable element
      const focusableElements = getFocusableElements();
      if (focusableElements.length > 0) {
        setTimeout(() => focusableElements[0].focus(), 0);
      }

      // Add keyboard listener
      document.addEventListener('keydown', handleKeyDown);

      return () => {
        document.removeEventListener('keydown', handleKeyDown);

        // Return focus to previous element or specified element
        const elementToFocus = returnFocusTo || previousActiveElement.current;
        if (elementToFocus && elementToFocus.focus) {
          elementToFocus.focus();
        }
      };
    }
  }, [active, handleKeyDown, getFocusableElements, returnFocusTo]);

  return <div ref={containerRef}>{children}</div>;
}

/**
 * Visually Hidden component for screen reader only content
 *
 * @example
 * ```tsx
 * <VisuallyHidden>This text is only for screen readers</VisuallyHidden>
 *
 * <button>
 *   <Icon />
 *   <VisuallyHidden>Close menu</VisuallyHidden>
 * </button>
 * ```
 */
export interface VisuallyHiddenProps {
  children: React.ReactNode;
  /** Render as a different element */
  as?: keyof JSX.IntrinsicElements;
}

export function VisuallyHidden({ children, as: Component = 'span' }: VisuallyHiddenProps) {
  return (
    <Component
      style={{
        position: 'absolute',
        width: '1px',
        height: '1px',
        padding: 0,
        margin: '-1px',
        overflow: 'hidden',
        clip: 'rect(0, 0, 0, 0)',
        whiteSpace: 'nowrap',
        border: 0,
      }}
    >
      {children}
    </Component>
  );
}

/**
 * Live Region component for dynamic content announcements
 *
 * @example
 * ```tsx
 * <LiveRegion politeness="polite">
 *   {message}
 * </LiveRegion>
 * ```
 */
export interface LiveRegionProps {
  children: React.ReactNode;
  /** How urgently the announcement should be made */
  politeness?: 'polite' | 'assertive' | 'off';
  /** Whether the entire content should be announced */
  atomic?: boolean;
}

export function LiveRegion({ children, politeness = 'polite', atomic = true }: LiveRegionProps) {
  return (
    <div
      role="status"
      aria-live={politeness}
      aria-atomic={atomic}
      style={{
        position: 'absolute',
        width: '1px',
        height: '1px',
        padding: 0,
        margin: '-1px',
        overflow: 'hidden',
        clip: 'rect(0, 0, 0, 0)',
        whiteSpace: 'nowrap',
        border: 0,
      }}
    >
      {children}
    </div>
  );
}

/**
 * Hook to manage focus when content changes
 *
 * @example
 * ```tsx
 * function MyComponent() {
 *   const focusRef = useFocusOnMount<HTMLHeadingElement>();
 *   return <h1 ref={focusRef} tabIndex={-1}>New Content</h1>;
 * }
 * ```
 */
export function useFocusOnMount<T extends HTMLElement>() {
  const ref = useRef<T>(null);

  useEffect(() => {
    if (ref.current) {
      ref.current.focus();
    }
  }, []);

  return ref;
}

/**
 * Hook to announce messages to screen readers
 *
 * @example
 * ```tsx
 * function MyComponent() {
 *   const announce = useAnnounce();
 *
 *   const handleSubmit = () => {
 *     // ... submit logic
 *     announce('Form submitted successfully');
 *   };
 * }
 * ```
 */
export function useAnnounce() {
  const announce = useCallback((message: string, politeness: 'polite' | 'assertive' = 'polite') => {
    const announcement = document.createElement('div');
    announcement.setAttribute('role', 'status');
    announcement.setAttribute('aria-live', politeness);
    announcement.setAttribute('aria-atomic', 'true');
    announcement.style.cssText = `
      position: absolute;
      width: 1px;
      height: 1px;
      padding: 0;
      margin: -1px;
      overflow: hidden;
      clip: rect(0, 0, 0, 0);
      white-space: nowrap;
      border: 0;
    `;

    document.body.appendChild(announcement);

    // Delay to ensure screen reader picks up the change
    setTimeout(() => {
      announcement.textContent = message;
    }, 100);

    // Clean up after announcement
    setTimeout(() => {
      document.body.removeChild(announcement);
    }, 1000);
  }, []);

  return announce;
}

export default {
  SkipLink,
  FocusTrap,
  VisuallyHidden,
  LiveRegion,
  useFocusOnMount,
  useAnnounce,
};
