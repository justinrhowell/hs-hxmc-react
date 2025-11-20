import {
  ModuleFields,
  ChoiceField,
} from '@hubspot/cms-components/fields';

export function Component({ fieldValues }: any) {
  const height = fieldValues.height || 'medium';

  const heightMap: Record<string, string> = {
    small: '40px',
    medium: '80px',
    large: '120px',
    xlarge: '160px',
  };

  return (
    <div style={{
      height: heightMap[height],
      width: '100%',
    }} />
  );
}

export const fields = (
  <ModuleFields>
    <ChoiceField
      name="height"
      label="Spacer Height"
      choices={[
        ['small', 'Small (40px)'],
        ['medium', 'Medium (80px)'],
        ['large', 'Large (120px)'],
        ['xlarge', 'Extra Large (160px)'],
      ]}
      default="medium"
    />
  </ModuleFields>
);

export const meta = {
  label: 'Spacer',
};
