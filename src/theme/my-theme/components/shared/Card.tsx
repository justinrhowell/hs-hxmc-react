import React from 'react';
import { SHADOWS, COLORS, DIMENSIONS, createTransition } from '../../constants';

/**
 * Card variant types
 */
export type CardVariant = 'default' | 'elevated' | 'outlined' | 'glass' | 'gradient';

/**
 * Card padding size
 */
export type CardPadding = 'none' | 'sm' | 'md' | 'lg';

/**
 * Props for the Card component
 */
export interface CardProps {
  /** Card content */
  children: React.ReactNode;
  /** Card variant style */
  variant?: CardVariant;
  /** Card padding */
  padding?: CardPadding;
  /** Enable hover effect */
  hoverable?: boolean;
  /** Click handler (makes card interactive) */
  onClick?: (e: React.MouseEvent<HTMLDivElement>) => void;
  /** Additional class name */
  className?: string;
  /** Custom styles */
  style?: React.CSSProperties;
  /** ARIA role */
  role?: string;
  /** Tab index for focusable cards */
  tabIndex?: number;
  /** ARIA label */
  'aria-label'?: string;
}

/**
 * Get styles based on variant
 */
const getVariantStyles = (variant: CardVariant): React.CSSProperties => {
  switch (variant) {
    case 'elevated':
      return {
        background: COLORS.background.white,
        boxShadow: SHADOWS.lg,
        border: 'none',
      };
    case 'outlined':
      return {
        background: COLORS.background.white,
        boxShadow: 'none',
        border: `2px solid ${COLORS.border.light}`,
      };
    case 'glass':
      return {
        background: 'linear-gradient(135deg, rgba(255, 255, 255, 0.95) 0%, rgba(255, 251, 248, 0.9) 100%)',
        boxShadow: SHADOWS.lg,
        border: `1px solid ${COLORS.border.light}`,
        backdropFilter: 'blur(10px)',
      };
    case 'gradient':
      return {
        background: 'linear-gradient(135deg, rgba(255, 255, 255, 0.98) 0%, rgba(255, 251, 248, 0.95) 100%)',
        boxShadow: SHADOWS.md,
        border: '2px solid rgba(239, 71, 111, 0.1)',
      };
    case 'default':
    default:
      return {
        background: COLORS.background.white,
        boxShadow: SHADOWS.card,
        border: `1px solid ${COLORS.border.light}`,
      };
  }
};

/**
 * Get padding styles based on size
 */
const getPaddingStyles = (padding: CardPadding): React.CSSProperties => {
  switch (padding) {
    case 'none':
      return { padding: 0 };
    case 'sm':
      return { padding: 'var(--spacing-sm)' };
    case 'lg':
      return { padding: 'var(--card-padding-lg)' };
    case 'md':
    default:
      return { padding: DIMENSIONS.card.padding };
  }
};

/**
 * Reusable Card component with consistent styling
 *
 * @example
 * ```tsx
 * <Card variant="elevated" padding="lg">
 *   <h3>Card Title</h3>
 *   <p>Card content goes here</p>
 * </Card>
 *
 * <Card variant="glass" hoverable onClick={handleClick}>
 *   Interactive glass card
 * </Card>
 * ```
 */
export function Card({
  children,
  variant = 'default',
  padding = 'md',
  hoverable = false,
  onClick,
  className,
  style,
  role,
  tabIndex,
  'aria-label': ariaLabel,
}: CardProps) {
  const isInteractive = onClick || hoverable;

  const baseStyles: React.CSSProperties = {
    borderRadius: DIMENSIONS.card.borderRadius,
    transition: createTransition(['transform', 'box-shadow', 'border-color']),
    cursor: isInteractive ? 'pointer' : 'default',
    ...getVariantStyles(variant),
    ...getPaddingStyles(padding),
    ...style,
  };

  const handleKeyDown = (e: React.KeyboardEvent<HTMLDivElement>) => {
    if (onClick && (e.key === 'Enter' || e.key === ' ')) {
      e.preventDefault();
      onClick(e as unknown as React.MouseEvent<HTMLDivElement>);
    }
  };

  return (
    <div
      className={className}
      style={baseStyles}
      onClick={onClick}
      onKeyDown={isInteractive ? handleKeyDown : undefined}
      role={role || (onClick ? 'button' : undefined)}
      tabIndex={tabIndex ?? (onClick ? 0 : undefined)}
      aria-label={ariaLabel}
    >
      {children}
    </div>
  );
}

/**
 * Card Header subcomponent
 */
export interface CardHeaderProps {
  children: React.ReactNode;
  className?: string;
  style?: React.CSSProperties;
}

export function CardHeader({ children, className, style }: CardHeaderProps) {
  return (
    <div
      className={className}
      style={{
        marginBottom: 'var(--spacing-sm)',
        paddingBottom: 'var(--spacing-sm)',
        borderBottom: `1px solid ${COLORS.border.light}`,
        ...style,
      }}
    >
      {children}
    </div>
  );
}

/**
 * Card Body subcomponent
 */
export interface CardBodyProps {
  children: React.ReactNode;
  className?: string;
  style?: React.CSSProperties;
}

export function CardBody({ children, className, style }: CardBodyProps) {
  return (
    <div className={className} style={style}>
      {children}
    </div>
  );
}

/**
 * Card Footer subcomponent
 */
export interface CardFooterProps {
  children: React.ReactNode;
  className?: string;
  style?: React.CSSProperties;
}

export function CardFooter({ children, className, style }: CardFooterProps) {
  return (
    <div
      className={className}
      style={{
        marginTop: 'var(--spacing-sm)',
        paddingTop: 'var(--spacing-sm)',
        borderTop: `1px solid ${COLORS.border.light}`,
        ...style,
      }}
    >
      {children}
    </div>
  );
}

export default Card;
