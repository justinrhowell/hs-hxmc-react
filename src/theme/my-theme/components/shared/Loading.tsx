import React from 'react';
import { COLORS, ANIMATION } from '../../constants';

/**
 * Props for the Spinner component
 */
export interface SpinnerProps {
  /** Spinner size */
  size?: 'sm' | 'md' | 'lg';
  /** Spinner color */
  color?: string;
  /** Additional class name */
  className?: string;
}

/**
 * Loading Spinner component
 *
 * @example
 * ```tsx
 * <Spinner size="md" />
 * <Spinner size="lg" color="var(--primary-coral)" />
 * ```
 */
export function Spinner({ size = 'md', color = COLORS.text.coral, className }: SpinnerProps) {
  const sizeMap = {
    sm: { width: '16px', height: '16px', border: '2px' },
    md: { width: '24px', height: '24px', border: '3px' },
    lg: { width: '40px', height: '40px', border: '4px' },
  };

  const dimensions = sizeMap[size];

  return (
    <div
      className={className}
      role="status"
      aria-label="Loading"
      style={{
        width: dimensions.width,
        height: dimensions.height,
        border: `${dimensions.border} solid ${COLORS.border.light}`,
        borderTopColor: color,
        borderRadius: '50%',
        animation: 'spin 0.8s linear infinite',
      }}
    >
      <span className="sr-only">Loading...</span>
    </div>
  );
}

/**
 * Props for the Skeleton component
 */
export interface SkeletonProps {
  /** Width of skeleton (CSS value) */
  width?: string;
  /** Height of skeleton (CSS value) */
  height?: string;
  /** Border radius */
  borderRadius?: string;
  /** Skeleton variant */
  variant?: 'text' | 'circular' | 'rectangular' | 'rounded';
  /** Animation type */
  animation?: 'pulse' | 'wave' | 'none';
  /** Additional class name */
  className?: string;
  /** Custom styles */
  style?: React.CSSProperties;
}

/**
 * Skeleton loading placeholder component
 *
 * @example
 * ```tsx
 * // Text skeleton
 * <Skeleton variant="text" width="200px" />
 *
 * // Avatar skeleton
 * <Skeleton variant="circular" width="48px" height="48px" />
 *
 * // Card skeleton
 * <Skeleton variant="rounded" width="100%" height="200px" />
 * ```
 */
export function Skeleton({
  width = '100%',
  height = '1em',
  borderRadius,
  variant = 'text',
  animation = 'pulse',
  className,
  style,
}: SkeletonProps) {
  const getVariantStyles = (): React.CSSProperties => {
    switch (variant) {
      case 'circular':
        return { borderRadius: '50%' };
      case 'rounded':
        return { borderRadius: '12px' };
      case 'rectangular':
        return { borderRadius: '0' };
      case 'text':
      default:
        return { borderRadius: '4px' };
    }
  };

  const getAnimationStyles = (): React.CSSProperties => {
    switch (animation) {
      case 'wave':
        return {
          background: `linear-gradient(90deg,
            ${COLORS.border.light} 0%,
            rgba(255, 255, 255, 0.5) 50%,
            ${COLORS.border.light} 100%)`,
          backgroundSize: '200% 100%',
          animation: 'skeletonWave 1.5s ease-in-out infinite',
        };
      case 'pulse':
        return {
          background: COLORS.border.light,
          animation: 'skeletonPulse 1.5s ease-in-out infinite',
        };
      case 'none':
      default:
        return {
          background: COLORS.border.light,
        };
    }
  };

  return (
    <div
      className={className}
      role="presentation"
      aria-hidden="true"
      style={{
        width,
        height,
        ...getVariantStyles(),
        ...getAnimationStyles(),
        ...(borderRadius && { borderRadius }),
        ...style,
      }}
    />
  );
}

/**
 * Props for the LoadingOverlay component
 */
export interface LoadingOverlayProps {
  /** Whether overlay is visible */
  isLoading: boolean;
  /** Content to show while loading */
  children?: React.ReactNode;
  /** Custom loading content */
  loadingContent?: React.ReactNode;
  /** Overlay background color */
  backgroundColor?: string;
  /** Whether to blur the content behind */
  blur?: boolean;
}

/**
 * Loading overlay component
 *
 * @example
 * ```tsx
 * <LoadingOverlay isLoading={isSubmitting}>
 *   <Form>...</Form>
 * </LoadingOverlay>
 * ```
 */
export function LoadingOverlay({
  isLoading,
  children,
  loadingContent,
  backgroundColor = 'rgba(255, 255, 255, 0.8)',
  blur = true,
}: LoadingOverlayProps) {
  return (
    <div style={{ position: 'relative' }}>
      {children}
      {isLoading && (
        <div
          role="alert"
          aria-busy="true"
          aria-label="Loading"
          style={{
            position: 'absolute',
            top: 0,
            left: 0,
            right: 0,
            bottom: 0,
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            backgroundColor,
            backdropFilter: blur ? 'blur(4px)' : 'none',
            zIndex: 10,
            borderRadius: 'inherit',
          }}
        >
          {loadingContent || <Spinner size="lg" />}
        </div>
      )}
    </div>
  );
}

/**
 * Content placeholder for cards
 */
export function CardSkeleton({ className }: { className?: string }) {
  return (
    <div
      className={className}
      style={{
        padding: '1.5rem',
        background: COLORS.background.white,
        borderRadius: '16px',
        border: `1px solid ${COLORS.border.light}`,
      }}
    >
      <Skeleton variant="text" width="60%" height="1.5rem" style={{ marginBottom: '1rem' }} />
      <Skeleton variant="text" width="100%" style={{ marginBottom: '0.5rem' }} />
      <Skeleton variant="text" width="100%" style={{ marginBottom: '0.5rem' }} />
      <Skeleton variant="text" width="80%" style={{ marginBottom: '1.5rem' }} />
      <Skeleton variant="rounded" width="120px" height="40px" />
    </div>
  );
}

/**
 * Content placeholder for testimonials
 */
export function TestimonialSkeleton({ className }: { className?: string }) {
  return (
    <div
      className={className}
      style={{
        padding: '2rem',
        background: COLORS.background.white,
        borderRadius: '20px',
        border: `1px solid ${COLORS.border.light}`,
      }}
    >
      <Skeleton variant="text" width="100%" height="1.25rem" style={{ marginBottom: '0.75rem' }} />
      <Skeleton variant="text" width="100%" height="1.25rem" style={{ marginBottom: '0.75rem' }} />
      <Skeleton variant="text" width="70%" height="1.25rem" style={{ marginBottom: '2rem' }} />
      <div style={{ display: 'flex', alignItems: 'center', gap: '1rem' }}>
        <Skeleton variant="circular" width="48px" height="48px" />
        <div style={{ flex: 1 }}>
          <Skeleton variant="text" width="120px" height="1rem" style={{ marginBottom: '0.5rem' }} />
          <Skeleton variant="text" width="160px" height="0.875rem" />
        </div>
      </div>
    </div>
  );
}

/**
 * CSS for skeleton animations (add to global.css or include in component)
 */
export const skeletonStyles = `
@keyframes skeletonPulse {
  0%, 100% {
    opacity: 1;
  }
  50% {
    opacity: 0.5;
  }
}

@keyframes skeletonWave {
  0% {
    background-position: 200% 0;
  }
  100% {
    background-position: -200% 0;
  }
}
`;

export default {
  Spinner,
  Skeleton,
  LoadingOverlay,
  CardSkeleton,
  TestimonialSkeleton,
};
