import React from 'react';
import { ANIMATION, EASING, SHADOWS, COLORS, DIMENSIONS, A11Y, createTransition } from '../../constants';

/**
 * Button variant types
 */
export type ButtonVariant = 'primary' | 'secondary' | 'outline' | 'ghost' | 'coral';

/**
 * Button size types
 */
export type ButtonSize = 'sm' | 'md' | 'lg';

/**
 * Props for the Button component
 */
export interface ButtonProps {
  /** Button content */
  children: React.ReactNode;
  /** Button variant style */
  variant?: ButtonVariant;
  /** Button size */
  size?: ButtonSize;
  /** Full width button */
  fullWidth?: boolean;
  /** Disabled state */
  disabled?: boolean;
  /** Loading state */
  loading?: boolean;
  /** Click handler */
  onClick?: (e: React.MouseEvent<HTMLButtonElement>) => void;
  /** Button type */
  type?: 'button' | 'submit' | 'reset';
  /** Accessible label */
  'aria-label'?: string;
  /** Additional class name */
  className?: string;
  /** Icon to display before text */
  leftIcon?: React.ReactNode;
  /** Icon to display after text */
  rightIcon?: React.ReactNode;
  /** Link href (renders as anchor) */
  href?: string;
  /** Link target */
  target?: '_blank' | '_self' | '_parent' | '_top';
  /** Custom styles */
  style?: React.CSSProperties;
}

/**
 * Get styles based on variant
 */
const getVariantStyles = (variant: ButtonVariant): React.CSSProperties => {
  const baseStyles: React.CSSProperties = {
    border: 'none',
    cursor: 'pointer',
  };

  switch (variant) {
    case 'primary':
      return {
        ...baseStyles,
        background: COLORS.primary.navy,
        color: COLORS.text.white,
        boxShadow: SHADOWS.button,
      };
    case 'secondary':
      return {
        ...baseStyles,
        background: 'transparent',
        color: COLORS.text.primary,
        border: `2px solid ${COLORS.text.primary}`,
      };
    case 'outline':
      return {
        ...baseStyles,
        background: 'transparent',
        color: COLORS.text.coral,
        border: '2px solid rgba(239, 71, 111, 0.3)',
      };
    case 'ghost':
      return {
        ...baseStyles,
        background: 'transparent',
        color: COLORS.text.primary,
      };
    case 'coral':
      return {
        ...baseStyles,
        background: 'var(--gradient-coral)',
        color: COLORS.text.white,
        boxShadow: 'var(--shadow-coral)',
      };
    default:
      return baseStyles;
  }
};

/**
 * Get styles based on size
 */
const getSizeStyles = (size: ButtonSize): React.CSSProperties => {
  switch (size) {
    case 'sm':
      return {
        height: DIMENSIONS.button.heightSm,
        padding: '0 1rem',
        fontSize: '0.875rem',
      };
    case 'lg':
      return {
        height: DIMENSIONS.button.heightLg,
        padding: '0 2rem',
        fontSize: '1.125rem',
      };
    case 'md':
    default:
      return {
        height: DIMENSIONS.button.height,
        padding: `0 ${DIMENSIONS.button.paddingX}`,
        fontSize: '1rem',
      };
  }
};

/**
 * Reusable Button component with consistent styling
 *
 * @example
 * ```tsx
 * <Button variant="primary" onClick={handleClick}>
 *   Click Me
 * </Button>
 *
 * <Button variant="coral" rightIcon={<span>→</span>}>
 *   Request a Demo
 * </Button>
 *
 * <Button href="/contact" variant="outline">
 *   Contact Us
 * </Button>
 * ```
 */
export function Button({
  children,
  variant = 'primary',
  size = 'md',
  fullWidth = false,
  disabled = false,
  loading = false,
  onClick,
  type = 'button',
  'aria-label': ariaLabel,
  className,
  leftIcon,
  rightIcon,
  href,
  target,
  style,
}: ButtonProps) {
  const baseStyles: React.CSSProperties = {
    display: 'inline-flex',
    alignItems: 'center',
    justifyContent: 'center',
    gap: '0.5rem',
    fontWeight: 600,
    fontFamily: 'var(--font-body)',
    borderRadius: DIMENSIONS.button.borderRadius,
    textDecoration: 'none',
    transition: createTransition(['background', 'transform', 'box-shadow', 'border-color', 'opacity']),
    minWidth: A11Y.minTouchTarget,
    minHeight: A11Y.minTouchTarget,
    width: fullWidth ? '100%' : 'auto',
    opacity: disabled || loading ? 0.6 : 1,
    pointerEvents: disabled || loading ? 'none' : 'auto',
    ...getVariantStyles(variant),
    ...getSizeStyles(size),
    ...style,
  };

  const content = (
    <>
      {loading && (
        <span
          style={{
            width: '1rem',
            height: '1rem',
            border: '2px solid currentColor',
            borderTopColor: 'transparent',
            borderRadius: '50%',
            animation: 'spin 0.8s linear infinite',
          }}
        />
      )}
      {!loading && leftIcon && <span className="button-icon-left">{leftIcon}</span>}
      <span>{children}</span>
      {!loading && rightIcon && <span className="button-icon-right">{rightIcon}</span>}
    </>
  );

  // Render as anchor if href is provided
  if (href) {
    return (
      <a
        href={href}
        target={target}
        rel={target === '_blank' ? 'noopener noreferrer' : undefined}
        className={className}
        style={baseStyles}
        aria-label={ariaLabel}
      >
        {content}
      </a>
    );
  }

  return (
    <button
      type={type}
      onClick={onClick}
      disabled={disabled || loading}
      className={className}
      style={baseStyles}
      aria-label={ariaLabel}
      aria-busy={loading}
    >
      {content}
    </button>
  );
}

export default Button;
