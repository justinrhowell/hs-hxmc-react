import React, { Component, ErrorInfo } from 'react';
import { COLORS, SHADOWS, DIMENSIONS } from '../../constants';

/**
 * Props for the ErrorBoundary component
 */
export interface ErrorBoundaryProps {
  /** Child components to wrap */
  children: React.ReactNode;
  /** Custom fallback UI when error occurs */
  fallback?: React.ReactNode;
  /** Callback when error is caught */
  onError?: (error: Error, errorInfo: ErrorInfo) => void;
  /** Whether to show error details in development */
  showDetails?: boolean;
}

/**
 * State for the ErrorBoundary component
 */
interface ErrorBoundaryState {
  hasError: boolean;
  error: Error | null;
  errorInfo: ErrorInfo | null;
}

/**
 * Error Boundary component to catch and handle React errors gracefully
 *
 * @example
 * ```tsx
 * <ErrorBoundary fallback={<ErrorFallback />}>
 *   <MyComponent />
 * </ErrorBoundary>
 *
 * // With error callback
 * <ErrorBoundary onError={(error) => logErrorToService(error)}>
 *   <MyComponent />
 * </ErrorBoundary>
 * ```
 */
export class ErrorBoundary extends Component<ErrorBoundaryProps, ErrorBoundaryState> {
  constructor(props: ErrorBoundaryProps) {
    super(props);
    this.state = {
      hasError: false,
      error: null,
      errorInfo: null,
    };
  }

  static getDerivedStateFromError(error: Error): Partial<ErrorBoundaryState> {
    return { hasError: true, error };
  }

  componentDidCatch(error: Error, errorInfo: ErrorInfo): void {
    this.setState({ errorInfo });

    // Call optional error callback
    this.props.onError?.(error, errorInfo);

    // Log to console in development
    if (process.env.NODE_ENV === 'development') {
      console.error('ErrorBoundary caught an error:', error, errorInfo);
    }
  }

  handleRetry = (): void => {
    this.setState({
      hasError: false,
      error: null,
      errorInfo: null,
    });
  };

  render(): React.ReactNode {
    const { hasError, error, errorInfo } = this.state;
    const { children, fallback, showDetails = process.env.NODE_ENV === 'development' } = this.props;

    if (hasError) {
      // Custom fallback provided
      if (fallback) {
        return fallback;
      }

      // Default error UI
      return (
        <div
          role="alert"
          style={{
            padding: DIMENSIONS.card.padding,
            margin: '2rem auto',
            maxWidth: '600px',
            background: COLORS.background.white,
            borderRadius: DIMENSIONS.card.borderRadius,
            boxShadow: SHADOWS.lg,
            border: '2px solid rgba(239, 71, 111, 0.2)',
            textAlign: 'center',
          }}
        >
          <div
            style={{
              width: '64px',
              height: '64px',
              margin: '0 auto 1.5rem',
              background: 'rgba(239, 71, 111, 0.1)',
              borderRadius: '50%',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              fontSize: '2rem',
            }}
          >
            !
          </div>

          <h2
            style={{
              fontSize: '1.5rem',
              fontWeight: 600,
              color: COLORS.text.primary,
              marginBottom: '0.75rem',
              fontFamily: 'var(--font-headline)',
            }}
          >
            Something went wrong
          </h2>

          <p
            style={{
              fontSize: '1rem',
              color: COLORS.text.muted,
              marginBottom: '1.5rem',
              lineHeight: 1.6,
            }}
          >
            We encountered an unexpected error. Please try refreshing the page or contact support if
            the problem persists.
          </p>

          <button
            onClick={this.handleRetry}
            style={{
              padding: '0.75rem 1.5rem',
              background: 'var(--gradient-coral)',
              color: COLORS.text.white,
              border: 'none',
              borderRadius: '8px',
              fontSize: '1rem',
              fontWeight: 600,
              cursor: 'pointer',
              transition: 'transform 0.2s ease, box-shadow 0.2s ease',
            }}
            onMouseOver={(e) => {
              e.currentTarget.style.transform = 'translateY(-2px)';
              e.currentTarget.style.boxShadow = '0 4px 12px rgba(239, 71, 111, 0.3)';
            }}
            onMouseOut={(e) => {
              e.currentTarget.style.transform = 'translateY(0)';
              e.currentTarget.style.boxShadow = 'none';
            }}
          >
            Try Again
          </button>

          {showDetails && error && (
            <details
              style={{
                marginTop: '2rem',
                textAlign: 'left',
                padding: '1rem',
                background: 'rgba(0, 0, 0, 0.02)',
                borderRadius: '8px',
                fontSize: '0.875rem',
              }}
            >
              <summary
                style={{
                  cursor: 'pointer',
                  fontWeight: 600,
                  color: COLORS.text.secondary,
                  marginBottom: '0.5rem',
                }}
              >
                Error Details (Development Only)
              </summary>
              <pre
                style={{
                  overflow: 'auto',
                  padding: '1rem',
                  background: 'rgba(0, 0, 0, 0.05)',
                  borderRadius: '4px',
                  fontSize: '0.75rem',
                  color: '#EF476F',
                  whiteSpace: 'pre-wrap',
                  wordBreak: 'break-word',
                }}
              >
                {error.toString()}
                {errorInfo?.componentStack}
              </pre>
            </details>
          )}
        </div>
      );
    }

    return children;
  }
}

/**
 * Functional wrapper for ErrorBoundary with hooks support
 */
export function withErrorBoundary<P extends object>(
  WrappedComponent: React.ComponentType<P>,
  errorBoundaryProps?: Omit<ErrorBoundaryProps, 'children'>
): React.FC<P> {
  const WithErrorBoundary: React.FC<P> = (props) => (
    <ErrorBoundary {...errorBoundaryProps}>
      <WrappedComponent {...props} />
    </ErrorBoundary>
  );

  WithErrorBoundary.displayName = `WithErrorBoundary(${WrappedComponent.displayName || WrappedComponent.name || 'Component'})`;

  return WithErrorBoundary;
}

/**
 * Simple error fallback component
 */
export function ErrorFallback({
  message = 'This section failed to load',
  onRetry,
}: {
  message?: string;
  onRetry?: () => void;
}) {
  return (
    <div
      role="alert"
      style={{
        padding: '2rem',
        textAlign: 'center',
        background: 'rgba(239, 71, 111, 0.05)',
        borderRadius: '12px',
        border: '1px solid rgba(239, 71, 111, 0.1)',
      }}
    >
      <p style={{ color: COLORS.text.muted, marginBottom: onRetry ? '1rem' : 0 }}>{message}</p>
      {onRetry && (
        <button
          onClick={onRetry}
          style={{
            padding: '0.5rem 1rem',
            background: 'transparent',
            color: COLORS.text.coral,
            border: '1px solid currentColor',
            borderRadius: '6px',
            cursor: 'pointer',
            fontSize: '0.875rem',
          }}
        >
          Retry
        </button>
      )}
    </div>
  );
}

export default ErrorBoundary;
