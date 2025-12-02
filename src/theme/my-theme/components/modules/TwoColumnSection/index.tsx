import {
  ModuleFields,
  TextField,
  RichTextField,
  ImageField,
  ChoiceField,
} from '@hubspot/cms-components/fields';

export function Component({ fieldValues }: any) {
  const imagePosition = fieldValues.image_position || 'right';
  const hasImage = fieldValues.image && fieldValues.image.src;

  return (
    <section style={{
      padding: 'var(--section-padding-lg) var(--spacing-lg)',
      background: 'var(--bg-white)',
    }}>
      <div style={{
        maxWidth: 'var(--max-width-xl)',
        margin: '0 auto',
        display: 'grid',
        gridTemplateColumns: hasImage ? 'repeat(auto-fit, minmax(300px, 1fr))' : '1fr',
        gap: 'var(--spacing-2xl)',
        alignItems: 'center',
      }}>
        {hasImage && imagePosition === 'left' && (
          <div style={{
            order: imagePosition === 'left' ? 1 : 2,
          }}>
            <img
              src={fieldValues.image.src}
              alt={fieldValues.image.alt || ''}
              style={{
                width: '100%',
                height: 'auto',
                borderRadius: 'var(--radius-lg)',
                boxShadow: 'var(--shadow-md)',
              }}
            />
          </div>
        )}

        <div style={{
          order: imagePosition === 'left' ? 2 : 1,
        }}>
          {fieldValues.eyebrow && (
            <div style={{
              fontSize: 'var(--font-size-small)',
              fontWeight: 600,
              color: 'var(--text-coral)',
              marginBottom: 'var(--spacing-sm)',
              letterSpacing: 'var(--letter-spacing-wide)',
              textTransform: 'uppercase',
            }}>
              {fieldValues.eyebrow}
            </div>
          )}

          <h2 style={{
            fontSize: 'var(--font-size-h2)',
            fontWeight: 500,
            marginBottom: 'var(--spacing-md)',
            color: 'var(--text-primary)',
            fontFamily: 'var(--font-headline)',
          }}>
            {fieldValues.heading}
          </h2>

          <div
            style={{
              fontSize: 'var(--font-size-body-lg)',
              color: 'var(--text-primary)',
              lineHeight: 'var(--line-height-relaxed)',
              marginBottom: 'var(--spacing-lg)',
            }}
            dangerouslySetInnerHTML={{ __html: fieldValues.content }}
          />

          {fieldValues.button_text && (
            <a
              href={fieldValues.button_url || '#'}
              style={{
                display: 'inline-block',
                padding: 'var(--btn-padding)',
                background: 'var(--gradient-coral)',
                color: 'var(--text-white)',
                border: 'none',
                borderRadius: 'var(--radius-full)',
                fontSize: 'var(--font-size-body)',
                fontWeight: 600,
                textDecoration: 'none',
                boxShadow: 'var(--shadow-coral-sm)',
                transition: 'var(--transition-medium)',
              }}
              aria-label={fieldValues.button_text}
            >
              {fieldValues.button_text}
            </a>
          )}
        </div>

        {hasImage && imagePosition === 'right' && (
          <div style={{
            order: imagePosition === 'left' ? 1 : 2,
          }}>
            <img
              src={fieldValues.image.src}
              alt={fieldValues.image.alt || ''}
              style={{
                width: '100%',
                height: 'auto',
                borderRadius: 'var(--radius-lg)',
                boxShadow: 'var(--shadow-md)',
              }}
            />
          </div>
        )}
      </div>
    </section>
  );
}

export const fields = (
  <ModuleFields>
    <TextField name="eyebrow" label="Eyebrow Text (Optional)" default="" />
    <TextField name="heading" label="Heading" default="Two Column Section" />
    <RichTextField name="content" label="Content" default="<p>Add your content here.</p>" />
    <ImageField name="image" label="Image" />
    <ChoiceField
      name="image_position"
      label="Image Position"
      choices={[
        ['left', 'Left'],
        ['right', 'Right'],
      ]}
      default="right"
    />
    <TextField name="button_text" label="Button Text (Optional)" default="" />
    <TextField name="button_url" label="Button URL" default="#" />
  </ModuleFields>
);

export const meta = {
  label: 'Two Column Section',
};
