import {
  ModuleFields,
  TextField,
} from '@hubspot/cms-components/fields';

export function Component({ fieldValues }: any) {
  return (
    <section className="impact-section" style={{ padding: '80px 20px', background: '#f9fafb' }}>
      <div className="container">
        <div className="impact-content" style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '5rem', alignItems: 'center', maxWidth: '1200px', margin: '0 auto' }}>
          <div>
            <h2 style={{ fontSize: '2.5rem', lineHeight: 1.2, marginBottom: '1.5rem', fontFamily: 'var(--font-headline)' }}>
              Measure What <span className="text-gradient">Matters.</span>
            </h2>
            <p style={{ fontSize: '1.05rem', lineHeight: 1.7, color: '#6B7280', marginBottom: '2rem' }}>
              Estimate how much mentorship could save your organization.
            </p>
            <a href="#" style={{ color: 'var(--primary-blue)', textDecoration: 'none', fontSize: '1rem', fontWeight: 600 }}>
              Learn more →
            </a>
          </div>
          <div className="impact-stats" style={{
            background: 'white',
            padding: '2.5rem',
            borderRadius: '20px',
            boxShadow: '0 8px 32px rgba(0, 0, 0, 0.08)'
          }}>
            <div style={{ marginBottom: '2rem', paddingBottom: '1.5rem', borderBottom: '1px solid #e5e7eb' }}>
              <div style={{ fontSize: '1rem', color: '#1a1a1a', marginBottom: '0.5rem' }}>Annual Revenue</div>
              <div style={{ fontSize: '1.75rem', fontWeight: 700, color: 'var(--primary-blue)' }}>$10,000,000</div>
            </div>
            <div className="impact-stat-row interactive-row" style={{ paddingBottom: '1.5rem', borderBottom: '1px solid #e5e7eb', marginBottom: '1.5rem' }}>
              <label className="impact-stat-label" style={{ fontSize: '1rem', fontWeight: 600, color: '#1a1a1a', marginBottom: '0.75rem', display: 'block' }}>
                Employees in mentorship program
              </label>
              <input
                type="range"
                className="impact-slider"
                min="10"
                max="100"
                defaultValue="30"
                style={{
                  width: '100%',
                  height: '8px',
                  borderRadius: '8px',
                  background: 'linear-gradient(to right, rgba(37, 99, 235, 0.15) 0%, rgba(37, 99, 235, 0.25) 100%)',
                  WebkitAppearance: 'none',
                  appearance: 'none'
                }}
              />
              <div className="impact-stat-value editable" style={{ fontSize: '1.5rem', fontWeight: 700, color: 'var(--primary-blue)', textAlign: 'right', marginTop: '0.5rem' }}>
                30%
              </div>
            </div>
            <div className="impact-stat-row interactive-row" style={{ paddingBottom: '1.5rem', borderBottom: '1px solid #e5e7eb', marginBottom: '1.5rem' }}>
              <label className="impact-stat-label" style={{ fontSize: '1rem', fontWeight: 600, color: '#1a1a1a', marginBottom: '0.75rem', display: 'block' }}>
                Productivity increase
              </label>
              <input
                type="range"
                className="impact-slider"
                min="5"
                max="50"
                defaultValue="20"
                style={{
                  width: '100%',
                  height: '8px',
                  borderRadius: '8px',
                  background: 'linear-gradient(to right, rgba(37, 99, 235, 0.15) 0%, rgba(37, 99, 235, 0.25) 100%)',
                  WebkitAppearance: 'none',
                  appearance: 'none'
                }}
              />
              <div className="impact-stat-value editable" style={{ fontSize: '1.5rem', fontWeight: 700, color: 'var(--primary-blue)', textAlign: 'right', marginTop: '0.5rem' }}>
                20%
              </div>
            </div>
            <div className="impact-stat-row highlight-row" style={{
              marginTop: '1rem',
              padding: '2rem 2.5rem',
              background: 'linear-gradient(135deg, rgba(255, 251, 248, 0.8) 0%, rgba(255, 240, 245, 0.8) 100%)',
              borderRadius: '12px',
              border: '2px solid rgba(255, 75, 126, 0.15)'
            }}>
              <div className="impact-stat-label" style={{ fontSize: '1.1rem', fontWeight: 700, color: '#1a1a1a', marginBottom: '0.5rem', display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
                <span className="roi-icon">💰</span>
                Estimated ROI Value
              </div>
              <div className="impact-stat-value" style={{
                fontSize: '2rem',
                fontWeight: 800,
                background: 'var(--gradient-pink)',
                WebkitBackgroundClip: 'text',
                WebkitTextFillColor: 'transparent'
              }}>
                $600,000
              </div>
            </div>
            <div className="impact-disclaimer" style={{
              marginTop: '1.5rem',
              padding: '1rem',
              textAlign: 'center',
              fontSize: '0.875rem',
              color: '#6B7280',
              fontStyle: 'italic',
              background: 'rgba(37, 99, 235, 0.03)',
              borderRadius: '8px',
              border: '1px dashed rgba(37, 99, 235, 0.2)'
            }}>
              *Values are estimates based on your inputs and industry benchmarks
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export const fields = (
  <ModuleFields>
    <TextField
      name="heading"
      label="Section Heading"
      default="Measure What Matters."
    />
  </ModuleFields>
);

export const meta = {
  label: 'ROI Calculator',
};
