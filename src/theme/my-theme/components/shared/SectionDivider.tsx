import React from 'react';

interface SectionDividerProps {
  variant?: 'light' | 'dark' | 'coral';
  spacing?: 'sm' | 'md' | 'lg';
}

export function SectionDivider({ variant = 'light', spacing = 'md' }: SectionDividerProps) {
  const spacingMap = {
    sm: 'var(--spacing-lg)',
    md: 'var(--spacing-xl)',
    lg: 'var(--spacing-2xl)',
  };

  const colorMap = {
    light: 'linear-gradient(90deg, transparent 0%, rgba(239, 71, 111, 0.15) 20%, rgba(239, 71, 111, 0.25) 50%, rgba(239, 71, 111, 0.15) 80%, transparent 100%)',
    dark: 'linear-gradient(90deg, transparent 0%, rgba(255, 255, 255, 0.15) 20%, rgba(255, 255, 255, 0.25) 50%, rgba(255, 255, 255, 0.15) 80%, transparent 100%)',
    coral: 'linear-gradient(90deg, transparent 0%, var(--primary-coral) 20%, var(--primary-coral) 80%, transparent 100%)',
  };

  return (
    <div
      style={{
        width: '100%',
        maxWidth: 'var(--max-width-lg)',
        margin: `0 auto`,
        padding: `${spacingMap[spacing]} var(--spacing-lg)`,
      }}
    >
      <div
        style={{
          height: '1px',
          background: colorMap[variant],
        }}
      />
    </div>
  );
}
