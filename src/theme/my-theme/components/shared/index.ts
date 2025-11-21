/**
 * Shared Components Library
 * Re-exports all shared components for easy importing
 *
 * @example
 * import { Button, Card, Input, ErrorBoundary } from '../shared';
 */

// Button component and types
export { Button } from './Button';
export type { ButtonProps, ButtonVariant, ButtonSize } from './Button';

// Card component and types
export { Card, CardHeader, CardBody, CardFooter } from './Card';
export type { CardProps, CardVariant, CardPadding, CardHeaderProps, CardBodyProps, CardFooterProps } from './Card';

// Input components and types
export { Input, TextArea, Select } from './Input';
export type { InputProps, TextAreaProps, SelectProps, InputVariant, InputSize } from './Input';

// Error boundary components
export { ErrorBoundary, withErrorBoundary, ErrorFallback } from './ErrorBoundary';
export type { ErrorBoundaryProps } from './ErrorBoundary';

// Demo modal (existing)
export { DemoModal } from './DemoModal';

// Accessibility components and hooks
export {
  SkipLink,
  FocusTrap,
  VisuallyHidden,
  LiveRegion,
  useFocusOnMount,
  useAnnounce,
} from './Accessibility';
export type {
  SkipLinkProps,
  FocusTrapProps,
  VisuallyHiddenProps,
  LiveRegionProps,
} from './Accessibility';

// Loading/Skeleton components
export {
  Spinner,
  Skeleton,
  LoadingOverlay,
  CardSkeleton,
  TestimonialSkeleton,
} from './Loading';
export type {
  SpinnerProps,
  SkeletonProps,
  LoadingOverlayProps,
} from './Loading';
