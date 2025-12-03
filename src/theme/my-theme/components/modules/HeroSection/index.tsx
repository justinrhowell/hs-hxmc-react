import {
  ModuleFields,
  TextField,
} from '@hubspot/cms-components/fields';

export function Component({ fieldValues }: any) {
  return (
    <section style={{ padding: '80px 20px', textAlign: 'center' }}>
      <h1 style={{ fontSize: 'var(--font-size-h1)' }}>{fieldValues.title}</h1>
    </section>
  );
}

export const fields = (
  <ModuleFields>
    <TextField
      name="title"
      label="Title"
      default="Hello from React!"
    />
  </ModuleFields>
);

export const meta = {
  label: 'Hero Section',
};
