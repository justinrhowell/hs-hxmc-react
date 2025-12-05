import React from 'react';
import {
  ModuleFields,
  ChoiceField,
} from '@hubspot/cms-components/fields';

export function Component({ fieldValues }: any) {
  const variant = fieldValues.variant || 'light';
  const spacing = fieldValues.spacing || 'md';

  const spacingMap: Record<string, string> = {
    sm: 'var(--spacing-md)',
    md: 'var(--spacing-lg)',
    lg: 'var(--spacing-xl)',
  };

  const colorMap: Record<string, string> = {
    light: 'linear-gradient(90deg, transparent 0%, rgba(239, 71, 111, 0.2) 15%, rgba(239, 71, 111, 0.35) 50%, rgba(239, 71, 111, 0.2) 85%, transparent 100%)',
    dark: 'linear-gradient(90deg, transparent 0%, rgba(255, 255, 255, 0.2) 15%, rgba(255, 255, 255, 0.35) 50%, rgba(255, 255, 255, 0.2) 85%, transparent 100%)',
    coral: 'linear-gradient(90deg, transparent 0%, var(--primary-coral) 15%, var(--primary-coral) 85%, transparent 100%)',
  };

  return (
    <div
      style={{
        width: '100%',
        background: '#FFFFFF',
        padding: `${spacingMap[spacing]} var(--spacing-lg)`,
      }}
    >
      <div
        style={{
          maxWidth: 'var(--max-width-xl)',
          margin: '0 auto',
        }}
      >
        <div
          style={{
            height: '1px',
            background: colorMap[variant],
          }}
        />
      </div>
    </div>
  );
}

export const fields = (
  <ModuleFields>
    <ChoiceField
      name="variant"
      label="Divider Style"
      choices={[
        ['light', 'Light (coral tint, for white backgrounds)'],
        ['dark', 'Dark (white tint, for dark backgrounds)'],
        ['coral', 'Coral (solid coral line)'],
      ]}
      default="light"
    />
    <ChoiceField
      name="spacing"
      label="Vertical Spacing"
      choices={[
        ['sm', 'Small (32px)'],
        ['md', 'Medium (48px)'],
        ['lg', 'Large (64px)'],
      ]}
      default="md"
    />
  </ModuleFields>
);

export const meta = {
  label: 'Section Divider',
};
