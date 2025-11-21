/**
 * Custom React Hooks Library
 * Re-exports all custom hooks for easy importing
 *
 * @example
 * import { useScrollAnimation, animationStyles } from '../hooks';
 */

// Scroll Animation Hook and Presets
export { useScrollAnimation, animationStyles } from './useScrollAnimation';

// Re-export accessibility hooks from shared
export { useFocusOnMount, useAnnounce } from '../shared/Accessibility';
