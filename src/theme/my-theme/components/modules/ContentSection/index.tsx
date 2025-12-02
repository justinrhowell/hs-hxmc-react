import {
  ModuleFields,
  TextField,
  ChoiceField,
  RichTextField,
} from '@hubspot/cms-components/fields';

export function Component({ fieldValues }: any) {
  const alignment = fieldValues.alignment || 'left';
  const bgColor = fieldValues.background_color || 'white';

  return (
    <section style={{
      padding: '80px 20px',
      background: bgColor,
    }}>
      <div style={{
        maxWidth: '1200px',
        margin: '0 auto',
        textAlign: alignment as any,
      }}>
        {fieldValues.eyebrow && (
          <div style={{
            fontSize: '0.9rem',
            fontWeight: 600,
            color: '#EF476F',
            marginBottom: '1rem',
            letterSpacing: '0.05em',
            textTransform: 'uppercase',
          }}>
            {fieldValues.eyebrow}
          </div>
        )}

        {fieldValues.heading && (
          <h2 style={{
            fontSize: 'clamp(2rem, 4vw, 3rem)',
            fontWeight: 500,
            marginBottom: '1.5rem',
            color: '#1a1a1a',
            fontFamily: 'var(--font-headline)',
          }}>
            {fieldValues.heading}
          </h2>
        )}

        {fieldValues.content && (
          <div
            style={{
              fontSize: '1.15rem',
              color: 'var(--text-primary)',
              lineHeight: 1.7,
              marginBottom: '2rem',
              maxWidth: alignment === 'center' ? '800px' : '100%',
              margin: alignment === 'center' ? '0 auto 2rem' : '0 0 2rem 0',
            }}
            dangerouslySetInnerHTML={{ __html: fieldValues.content }}
          />
        )}

        {fieldValues.button_text && (
          <a
            href={fieldValues.button_url || '#'}
            style={{
              display: 'inline-block',
              padding: 'var(--btn-padding)',
              background: 'linear-gradient(135deg, #EF476F 0%, #F89F7B 100%)',
              color: 'white',
              border: 'none',
              borderRadius: 'var(--radius-full)',
              fontSize: '1rem',
              fontWeight: 600,
              textDecoration: 'none',
              boxShadow: '0 8px 24px rgba(239, 71, 111, 0.3)',
              transition: 'var(--transition-medium)',
            }}
            aria-label={fieldValues.button_text}
          >
            {fieldValues.button_text}
          </a>
        )}
      </div>
    </section>
  );
}

export const fields = (
  <ModuleFields>
    <TextField name="eyebrow" label="Eyebrow Text (Optional)" default="" />
    <TextField name="heading" label="Heading" default="Section Heading" />
    <RichTextField name="content" label="Content" default="<p>Add your content here. You can use rich text formatting.</p>" />
    <ChoiceField
      name="alignment"
      label="Text Alignment"
      choices={[
        ['left', 'Left'],
        ['center', 'Center'],
      ]}
      default="left"
    />
    <ChoiceField
      name="background_color"
      label="Background Color"
      choices={[
        ['white', 'White'],
        ['#FFFBF8', 'Light Peach'],
        ['linear-gradient(180deg, #FFFBF8 0%, white 100%)', 'Gradient Peach'],
      ]}
      default="white"
    />
    <TextField name="button_text" label="Button Text (Optional)" default="" />
    <TextField name="button_url" label="Button URL" default="#" />
  </ModuleFields>
);

export const meta = {
  label: 'Content Section',
};
