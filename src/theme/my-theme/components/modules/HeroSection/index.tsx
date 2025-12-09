import React from 'react';
import { ScrollAnimationScript } from '../../shared/ScrollAnimationScript';

export function Component({ fieldValues }: any) {
  const title = fieldValues.title || 'Hero Title';
  const subtitle = fieldValues.subtitle || '';
  const description = fieldValues.description || '';
  const buttonText = fieldValues.button_text || '';
  const buttonUrl = fieldValues.button_url || '#';
  const buttonStyle = fieldValues.button_style || 'coral';
  const alignment = fieldValues.alignment || 'center';
  const backgroundStyle = fieldValues.background_style || 'light';
  const showPattern = fieldValues.show_pattern !== false;

  // Background styles
  const backgroundStyles: Record<string, React.CSSProperties> = {
    light: {
      background: 'var(--gradient-hero)',
    },
    dark: {
      background: 'linear-gradient(180deg, #1a1a2e 0%, #16213e 100%)',
    },
    coral: {
      background: 'var(--gradient-coral-peach)',
    },
    white: {
      background: 'var(--bg-white)',
    },
  };

  const textColorStyles: Record<string, { primary: string; secondary: string }> = {
    light: { primary: 'var(--text-primary)', secondary: 'var(--text-secondary)' },
    dark: { primary: 'var(--text-white)', secondary: 'rgba(255, 255, 255, 0.8)' },
    coral: { primary: 'var(--text-white)', secondary: 'var(--text-white-soft)' },
    white: { primary: 'var(--text-primary)', secondary: 'var(--text-secondary)' },
  };

  const buttonClasses: Record<string, string> = {
    coral: 'btn-primary-coral',
    blue: 'btn-primary-blue',
    white: 'btn-white',
    outline: 'btn-outline',
  };

  const textColors = textColorStyles[backgroundStyle] || textColorStyles.light;

  return (
    <>
      <ScrollAnimationScript />
      <section
        className="scroll-animate"
        style={{
          ...backgroundStyles[backgroundStyle],
          backgroundImage: showPattern ? 'var(--pattern-dots)' : 'none',
          backgroundSize: showPattern ? 'var(--pattern-dots-size)' : 'auto',
          padding: 'var(--spacing-lg) var(--spacing-lg) var(--section-padding-lg)',
          minHeight: fieldValues.min_height || 'auto',
        }}
      >
        <div
          style={{
            maxWidth: 'var(--max-width-xl)',
            margin: '0 auto',
            textAlign: alignment as React.CSSProperties['textAlign'],
          }}
        >
          {/* Badge/Pill */}
          {fieldValues.badge && (
            <div
              style={{
                display: 'inline-flex',
                alignItems: 'center',
                padding: 'var(--spacing-xs) var(--spacing-md)',
                background: backgroundStyle === 'dark' || backgroundStyle === 'coral'
                  ? 'rgba(255, 255, 255, 0.15)'
                  : 'var(--bg-light-coral)',
                borderRadius: 'var(--radius-full)',
                fontSize: 'var(--font-size-small)',
                fontWeight: 600,
                color: backgroundStyle === 'dark' || backgroundStyle === 'coral'
                  ? 'var(--text-white)'
                  : 'var(--text-coral)',
                marginBottom: 'var(--spacing-lg)',
                border: '1px solid var(--border-medium)',
              }}
            >
              {fieldValues.badge}
            </div>
          )}

          <h1
            style={{
              fontFamily: 'var(--font-headline)',
              fontSize: 'var(--font-size-h1)',
              fontWeight: 500,
              lineHeight: 'var(--line-height-tight)',
              letterSpacing: 'var(--letter-spacing-tight)',
              marginBottom: subtitle ? 'var(--spacing-md)' : 'var(--spacing-lg)',
              color: textColors.primary,
              maxWidth: alignment === 'center' ? 'var(--max-width-lg)' : 'none',
              margin: alignment === 'center' ? '0 auto var(--spacing-lg)' : '0 0 var(--spacing-lg) 0',
            }}
          >
            {title}
          </h1>

          {subtitle && (
            <p
              style={{
                fontSize: 'var(--font-size-h3)',
                fontWeight: 500,
                color: backgroundStyle === 'coral' ? 'var(--text-white)' : 'var(--text-coral)',
                marginBottom: 'var(--spacing-md)',
                maxWidth: alignment === 'center' ? 'var(--max-width-md)' : 'none',
                margin: alignment === 'center' ? '0 auto var(--spacing-md)' : '0 0 var(--spacing-md) 0',
              }}
            >
              {subtitle}
            </p>
          )}

          {description && (
            <p
              style={{
                fontFamily: 'var(--font-body)',
                fontSize: 'var(--font-size-body-lg)',
                color: textColors.secondary,
                lineHeight: 'var(--line-height-relaxed)',
                marginBottom: buttonText ? 'var(--spacing-xl)' : '0',
                maxWidth: alignment === 'center' ? 'var(--max-width-prose)' : 'none',
                margin: alignment === 'center' ? '0 auto var(--spacing-xl)' : '0 0 var(--spacing-xl) 0',
              }}
            >
              {description}
            </p>
          )}

          {buttonText && (
            <a
              href={buttonUrl}
              className={buttonClasses[buttonStyle] || 'btn-primary-coral'}
              style={{ textDecoration: 'none' }}
            >
              {buttonText}
            </a>
          )}

          {/* Optional Image */}
          {fieldValues.hero_image?.src && (
            <div
              style={{
                marginTop: 'var(--spacing-2xl)',
                maxWidth: 'var(--max-width-lg)',
                margin: alignment === 'center' ? 'var(--spacing-2xl) auto 0' : 'var(--spacing-2xl) 0 0 0',
              }}
            >
              <img
                src={fieldValues.hero_image.src}
                alt={fieldValues.hero_image.alt || 'Hero image'}
                style={{
                  width: '100%',
                  height: 'auto',
                  borderRadius: 'var(--radius-xl)',
                  boxShadow: 'var(--shadow-lg)',
                }}
              />
            </div>
          )}
        </div>
      </section>
    </>
  );
}

export const fields: any = [
  {
    type: 'text',
    name: 'badge',
    label: 'Badge Text (Optional)',
    help_text: 'Small pill/badge displayed above the title',
    default: '',
  },
  {
    type: 'text',
    name: 'title',
    label: 'Hero Title',
    default: 'Your Compelling Headline Here',
  },
  {
    type: 'text',
    name: 'subtitle',
    label: 'Subtitle (Optional)',
    help_text: 'Displayed below title in coral/accent color',
    default: '',
  },
  {
    type: 'text',
    name: 'description',
    label: 'Description (Optional)',
    default: '',
  },
  {
    type: 'text',
    name: 'button_text',
    label: 'Button Text (Optional)',
    help_text: 'Leave empty to hide button',
    default: '',
  },
  {
    type: 'text',
    name: 'button_url',
    label: 'Button URL',
    default: '#',
  },
  {
    type: 'choice',
    name: 'button_style',
    label: 'Button Style',
    choices: [
      ['coral', 'Coral (Primary)'],
      ['blue', 'Blue'],
      ['white', 'White'],
      ['outline', 'Outline'],
    ],
    default: 'coral',
  },
  {
    type: 'image',
    name: 'hero_image',
    label: 'Hero Image (Optional)',
    default: {
      src: '',
      alt: 'Hero image',
    },
  },
  {
    type: 'choice',
    name: 'alignment',
    label: 'Content Alignment',
    choices: [
      ['center', 'Center'],
      ['left', 'Left'],
    ],
    default: 'center',
  },
  {
    type: 'choice',
    name: 'background_style',
    label: 'Background Style',
    choices: [
      ['light', 'Light Gradient'],
      ['dark', 'Dark'],
      ['coral', 'Coral Gradient'],
      ['white', 'White'],
    ],
    default: 'light',
  },
  {
    type: 'boolean',
    name: 'show_pattern',
    label: 'Show Dot Pattern',
    default: true,
  },
  {
    type: 'text',
    name: 'min_height',
    label: 'Minimum Height (e.g., 60vh, 400px)',
    help_text: 'Optional minimum height for the hero section',
    default: '',
  },
];

export const meta = {
  label: 'Hero Section',
};
