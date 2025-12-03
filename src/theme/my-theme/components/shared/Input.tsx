import React, { useState, forwardRef } from 'react';
import { COLORS, DIMENSIONS, SHADOWS, A11Y, createTransition } from '../../constants';

/**
 * Input variant types
 */
export type InputVariant = 'default' | 'filled' | 'outlined';

/**
 * Input size types
 */
export type InputSize = 'sm' | 'md' | 'lg';

/**
 * Props for the Input component
 */
export interface InputProps extends Omit<React.InputHTMLAttributes<HTMLInputElement>, 'size'> {
  /** Input label */
  label?: string;
  /** Input variant style */
  variant?: InputVariant;
  /** Input size */
  size?: InputSize;
  /** Error message */
  error?: string;
  /** Helper text */
  helperText?: string;
  /** Full width input */
  fullWidth?: boolean;
  /** Left addon/icon */
  leftAddon?: React.ReactNode;
  /** Right addon/icon */
  rightAddon?: React.ReactNode;
  /** Container class name */
  containerClassName?: string;
  /** Container style */
  containerStyle?: React.CSSProperties;
}

/**
 * Props for the TextArea component
 */
export interface TextAreaProps extends React.TextareaHTMLAttributes<HTMLTextAreaElement> {
  /** TextArea label */
  label?: string;
  /** TextArea variant style */
  variant?: InputVariant;
  /** Error message */
  error?: string;
  /** Helper text */
  helperText?: string;
  /** Full width textarea */
  fullWidth?: boolean;
  /** Container class name */
  containerClassName?: string;
  /** Container style */
  containerStyle?: React.CSSProperties;
}

/**
 * Props for the Select component
 */
export interface SelectProps extends React.SelectHTMLAttributes<HTMLSelectElement> {
  /** Select label */
  label?: string;
  /** Select variant style */
  variant?: InputVariant;
  /** Select size */
  size?: InputSize;
  /** Error message */
  error?: string;
  /** Helper text */
  helperText?: string;
  /** Full width select */
  fullWidth?: boolean;
  /** Select options */
  options: Array<{ value: string; label: string; disabled?: boolean }>;
  /** Container class name */
  containerClassName?: string;
  /** Container style */
  containerStyle?: React.CSSProperties;
}

/**
 * Get variant styles
 */
const getVariantStyles = (variant: InputVariant, hasError: boolean, isFocused: boolean): React.CSSProperties => {
  const errorBorder = '2px solid var(--primary-coral)';
  const focusBorder = '2px solid var(--primary-coral)';

  switch (variant) {
    case 'filled':
      return {
        background: 'rgba(0, 0, 0, 0.04)',
        border: hasError ? errorBorder : '2px solid transparent',
        borderBottom: hasError ? errorBorder : isFocused ? focusBorder : '2px solid var(--border-medium)',
        borderRadius: '8px 8px 0 0',
      };
    case 'outlined':
      return {
        background: 'transparent',
        border: hasError ? errorBorder : isFocused ? focusBorder : `2px solid ${COLORS.border.light}`,
        borderRadius: DIMENSIONS.input.borderRadius,
      };
    case 'default':
    default:
      return {
        background: COLORS.background.white,
        border: hasError ? errorBorder : isFocused ? focusBorder : `1px solid ${COLORS.border.light}`,
        borderRadius: DIMENSIONS.input.borderRadius,
        boxShadow: isFocused ? A11Y.focusRing : 'none',
      };
  }
};

/**
 * Get size styles
 */
const getSizeStyles = (size: InputSize): React.CSSProperties => {
  switch (size) {
    case 'sm':
      return {
        height: '36px',
        padding: '0 var(--spacing-xs)',
        fontSize: 'var(--font-size-small)',
      };
    case 'lg':
      return {
        height: '56px',
        padding: '0 var(--spacing-sm)',
        fontSize: 'var(--font-size-body-lg)',
      };
    case 'md':
    default:
      return {
        height: DIMENSIONS.input.height,
        padding: `0 ${DIMENSIONS.input.paddingX}`,
        fontSize: 'var(--font-size-body)',
      };
  }
};

/**
 * Label component
 */
const Label: React.FC<{ htmlFor?: string; required?: boolean; children: React.ReactNode }> = ({
  htmlFor,
  required,
  children,
}) => (
  <label
    htmlFor={htmlFor}
    style={{
      display: 'block',
      marginBottom: 'var(--spacing-sm)',
      fontSize: 'var(--font-size-small)',
      fontWeight: 600,
      color: COLORS.text.primary,
    }}
  >
    {children}
    {required && <span style={{ color: 'var(--text-coral)', marginLeft: 'var(--spacing-xxs)' }}>*</span>}
  </label>
);

/**
 * Helper/Error text component
 */
const HelperText: React.FC<{ error?: boolean; children: React.ReactNode }> = ({ error, children }) => (
  <span
    style={{
      display: 'block',
      marginTop: 'var(--spacing-sm)',
      fontSize: 'var(--font-size-xs)',
      color: error ? 'var(--text-coral)' : COLORS.text.muted,
    }}
    role={error ? 'alert' : undefined}
  >
    {children}
  </span>
);

/**
 * Reusable Input component with consistent styling
 *
 * @example
 * ```tsx
 * <Input
 *   label="Email"
 *   type="email"
 *   placeholder="Enter your email"
 *   required
 * />
 *
 * <Input
 *   label="Password"
 *   type="password"
 *   error="Password is required"
 *   variant="outlined"
 * />
 * ```
 */
export const Input = forwardRef<HTMLInputElement, InputProps>(
  (
    {
      label,
      variant = 'default',
      size = 'md',
      error,
      helperText,
      fullWidth = false,
      leftAddon,
      rightAddon,
      containerClassName,
      containerStyle,
      id,
      required,
      disabled,
      className,
      style,
      onFocus,
      onBlur,
      ...props
    },
    ref
  ) => {
    const [isFocused, setIsFocused] = useState(false);
    const inputId = id || `input-${Math.random().toString(36).substr(2, 9)}`;

    const handleFocus = (e: React.FocusEvent<HTMLInputElement>) => {
      setIsFocused(true);
      onFocus?.(e);
    };

    const handleBlur = (e: React.FocusEvent<HTMLInputElement>) => {
      setIsFocused(false);
      onBlur?.(e);
    };

    return (
      <div
        className={containerClassName}
        style={{
          width: fullWidth ? '100%' : 'auto',
          ...containerStyle,
        }}
      >
        {label && (
          <Label htmlFor={inputId} required={required}>
            {label}
          </Label>
        )}
        <div
          style={{
            display: 'flex',
            alignItems: 'center',
            width: '100%',
            ...getVariantStyles(variant, !!error, isFocused),
            transition: createTransition(['border-color', 'box-shadow']),
            opacity: disabled ? 0.6 : 1,
          }}
        >
          {leftAddon && (
            <span style={{ paddingLeft: 'var(--spacing-sm)', color: COLORS.text.muted }}>{leftAddon}</span>
          )}
          <input
            ref={ref}
            id={inputId}
            required={required}
            disabled={disabled}
            className={className}
            aria-invalid={!!error}
            aria-describedby={error || helperText ? `${inputId}-helper` : undefined}
            onFocus={handleFocus}
            onBlur={handleBlur}
            style={{
              flex: 1,
              border: 'none',
              background: 'transparent',
              outline: 'none',
              fontFamily: 'var(--font-body)',
              color: COLORS.text.primary,
              ...getSizeStyles(size),
              ...style,
            }}
            {...props}
          />
          {rightAddon && (
            <span style={{ paddingRight: 'var(--spacing-sm)', color: COLORS.text.muted }}>{rightAddon}</span>
          )}
        </div>
        {(error || helperText) && (
          <HelperText error={!!error}>{error || helperText}</HelperText>
        )}
      </div>
    );
  }
);

Input.displayName = 'Input';

/**
 * Reusable TextArea component
 *
 * @example
 * ```tsx
 * <TextArea
 *   label="Message"
 *   placeholder="Enter your message"
 *   rows={4}
 * />
 * ```
 */
export const TextArea = forwardRef<HTMLTextAreaElement, TextAreaProps>(
  (
    {
      label,
      variant = 'default',
      error,
      helperText,
      fullWidth = false,
      containerClassName,
      containerStyle,
      id,
      required,
      disabled,
      className,
      style,
      onFocus,
      onBlur,
      ...props
    },
    ref
  ) => {
    const [isFocused, setIsFocused] = useState(false);
    const textareaId = id || `textarea-${Math.random().toString(36).substr(2, 9)}`;

    const handleFocus = (e: React.FocusEvent<HTMLTextAreaElement>) => {
      setIsFocused(true);
      onFocus?.(e);
    };

    const handleBlur = (e: React.FocusEvent<HTMLTextAreaElement>) => {
      setIsFocused(false);
      onBlur?.(e);
    };

    return (
      <div
        className={containerClassName}
        style={{
          width: fullWidth ? '100%' : 'auto',
          ...containerStyle,
        }}
      >
        {label && (
          <Label htmlFor={textareaId} required={required}>
            {label}
          </Label>
        )}
        <textarea
          ref={ref}
          id={textareaId}
          required={required}
          disabled={disabled}
          className={className}
          aria-invalid={!!error}
          aria-describedby={error || helperText ? `${textareaId}-helper` : undefined}
          onFocus={handleFocus}
          onBlur={handleBlur}
          style={{
            width: '100%',
            padding: 'var(--spacing-sm)',
            fontFamily: 'var(--font-body)',
            fontSize: 'var(--font-size-body)',
            color: COLORS.text.primary,
            resize: 'vertical',
            minHeight: '120px',
            outline: 'none',
            transition: createTransition(['border-color', 'box-shadow']),
            opacity: disabled ? 0.6 : 1,
            ...getVariantStyles(variant, !!error, isFocused),
            ...style,
          }}
          {...props}
        />
        {(error || helperText) && (
          <HelperText error={!!error}>{error || helperText}</HelperText>
        )}
      </div>
    );
  }
);

TextArea.displayName = 'TextArea';

/**
 * Reusable Select component
 *
 * @example
 * ```tsx
 * <Select
 *   label="Country"
 *   options={[
 *     { value: 'us', label: 'United States' },
 *     { value: 'ca', label: 'Canada' },
 *   ]}
 * />
 * ```
 */
export const Select = forwardRef<HTMLSelectElement, SelectProps>(
  (
    {
      label,
      variant = 'default',
      size = 'md',
      error,
      helperText,
      fullWidth = false,
      options,
      containerClassName,
      containerStyle,
      id,
      required,
      disabled,
      className,
      style,
      onFocus,
      onBlur,
      ...props
    },
    ref
  ) => {
    const [isFocused, setIsFocused] = useState(false);
    const selectId = id || `select-${Math.random().toString(36).substr(2, 9)}`;

    const handleFocus = (e: React.FocusEvent<HTMLSelectElement>) => {
      setIsFocused(true);
      onFocus?.(e);
    };

    const handleBlur = (e: React.FocusEvent<HTMLSelectElement>) => {
      setIsFocused(false);
      onBlur?.(e);
    };

    return (
      <div
        className={containerClassName}
        style={{
          width: fullWidth ? '100%' : 'auto',
          ...containerStyle,
        }}
      >
        {label && (
          <Label htmlFor={selectId} required={required}>
            {label}
          </Label>
        )}
        <select
          ref={ref}
          id={selectId}
          required={required}
          disabled={disabled}
          className={className}
          aria-invalid={!!error}
          aria-describedby={error || helperText ? `${selectId}-helper` : undefined}
          onFocus={handleFocus}
          onBlur={handleBlur}
          style={{
            width: fullWidth ? '100%' : 'auto',
            fontFamily: 'var(--font-body)',
            color: COLORS.text.primary,
            cursor: 'pointer',
            outline: 'none',
            transition: createTransition(['border-color', 'box-shadow']),
            opacity: disabled ? 0.6 : 1,
            appearance: 'none',
            backgroundImage: `url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' fill='none' viewBox='0 0 24 24' stroke='%236B7280'%3E%3Cpath stroke-linecap='round' stroke-linejoin='round' stroke-width='2' d='M19 9l-7 7-7-7'%3E%3C/path%3E%3C/svg%3E")`,
            backgroundRepeat: 'no-repeat',
            backgroundPosition: 'right var(--spacing-sm) center',
            backgroundSize: 'var(--spacing-sm)',
            paddingRight: 'var(--spacing-xl)',
            ...getVariantStyles(variant, !!error, isFocused),
            ...getSizeStyles(size),
            ...style,
          }}
          {...props}
        >
          {options.map((option) => (
            <option key={option.value} value={option.value} disabled={option.disabled}>
              {option.label}
            </option>
          ))}
        </select>
        {(error || helperText) && (
          <HelperText error={!!error}>{error || helperText}</HelperText>
        )}
      </div>
    );
  }
);

Select.displayName = 'Select';

export default Input;
