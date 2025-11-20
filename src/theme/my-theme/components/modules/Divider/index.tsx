import {
  ModuleFields,
  ChoiceField,
} from '@hubspot/cms-components/fields';

export function Component({ fieldValues }: any) {
  const style = fieldValues.style || 'solid';
  const color = fieldValues.color || '#EF476F';

  const styleMap: Record<string, string> = {
    solid: 'solid',
    dashed: 'dashed',
    dotted: 'dotted',
    gradient: 'none',
  };

  return (
    <div style={{
      maxWidth: '1200px',
      margin: '40px auto',
      padding: '0 20px',
    }}>
      {style === 'gradient' ? (
        <div style={{
          height: '2px',
          background: 'linear-gradient(90deg, transparent 0%, #EF476F 50%, transparent 100%)',
        }} />
      ) : (
        <hr style={{
          border: 'none',
          borderTop: `2px ${styleMap[style]} ${color}`,
          opacity: 0.3,
        }} />
      )}
    </div>
  );
}

export const fields = (
  <ModuleFields>
    <ChoiceField
      name="style"
      label="Divider Style"
      choices={[
        ['solid', 'Solid Line'],
        ['dashed', 'Dashed Line'],
        ['dotted', 'Dotted Line'],
        ['gradient', 'Gradient Fade'],
      ]}
      default="solid"
    />
    <ChoiceField
      name="color"
      label="Color"
      choices={[
        ['#EF476F', 'Brand Coral'],
        ['#1a1a1a', 'Dark Gray'],
        ['#6B7280', 'Medium Gray'],
        ['#E5E7EB', 'Light Gray'],
      ]}
      default="#EF476F"
    />
  </ModuleFields>
);

export const meta = {
  label: 'Divider',
};
