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
      padding: '80px 20px',
      background: 'white',
    }}>
      <div style={{
        maxWidth: '1200px',
        margin: '0 auto',
        display: 'grid',
        gridTemplateColumns: hasImage ? 'repeat(auto-fit, minmax(300px, 1fr))' : '1fr',
        gap: '4rem',
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
                borderRadius: '16px',
                boxShadow: '0 4px 20px rgba(0, 0, 0, 0.1)',
              }}
            />
          </div>
        )}

        <div style={{
          order: imagePosition === 'left' ? 2 : 1,
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

          <h2 style={{
            fontSize: 'clamp(1.75rem, 3vw, 2.5rem)',
            fontWeight: 500,
            marginBottom: '1.5rem',
            color: '#1a1a1a',
            fontFamily: 'var(--font-headline)',
          }}>
            {fieldValues.heading}
          </h2>

          <div
            style={{
              fontSize: '1.1rem',
              color: '#4a4a4a',
              lineHeight: 1.7,
              marginBottom: '2rem',
            }}
            dangerouslySetInnerHTML={{ __html: fieldValues.content }}
          />

          {fieldValues.button_text && (
            <a
              href={fieldValues.button_url || '#'}
              style={{
                display: 'inline-block',
                padding: '1rem 2.5rem',
                background: 'linear-gradient(135deg, #EF476F 0%, #F89F7B 100%)',
                color: 'white',
                border: 'none',
                borderRadius: '50px',
                fontSize: '1.05rem',
                fontWeight: 600,
                textDecoration: 'none',
                boxShadow: '0 8px 24px rgba(239, 71, 111, 0.3)',
                transition: 'all 0.3s ease',
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
                borderRadius: '16px',
                boxShadow: '0 4px 20px rgba(0, 0, 0, 0.1)',
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
