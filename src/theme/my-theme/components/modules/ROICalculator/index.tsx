import React from 'react';
import {
  ModuleFields,
  TextField,
} from '@hubspot/cms-components/fields';
import { useScrollAnimation, animationStyles } from '../../hooks/useScrollAnimation';

export function Component({ fieldValues }: any) {
  const { elementRef, isVisible } = useScrollAnimation({ threshold: 0.2 });

  return (
    <>
      <script dangerouslySetInnerHTML={{__html: `
        (function() {
          function initROICalculator() {
            const studentsServedInput = document.getElementById('students-served');
            const programsInput = document.getElementById('num-programs');
            const hourlyRateInput = document.getElementById('hourly-rate');
            const totalStudentsInput = document.getElementById('total-students');
            const tuitionInput = document.getElementById('tuition');
            const lossRateInput = document.getElementById('loss-rate');
            const retentionIncreaseInput = document.getElementById('retention-increase');

            const staffSavingsElement = document.getElementById('staff-savings-value');
            const revenueSavingsElement = document.getElementById('revenue-savings-value');
            const totalROIElement = document.getElementById('total-roi-value');

            function formatCurrency(value) {
              return new Intl.NumberFormat('en-US', {
                style: 'currency',
                currency: 'USD',
                minimumFractionDigits: 0,
                maximumFractionDigits: 0,
              }).format(value);
            }

            function formatNumber(value) {
              return new Intl.NumberFormat('en-US').format(value);
            }

            function calculateROI() {
              const studentsServed = parseInt((studentsServedInput.value || '').replace(/[^0-9]/g, '')) || 0;
              const numPrograms = parseInt((programsInput.value || '').replace(/[^0-9]/g, '')) || 0;
              const hourlyRate = parseFloat((hourlyRateInput.value || '').replace(/[^0-9.]/g, '')) || 0;
              const totalStudents = parseInt((totalStudentsInput.value || '').replace(/[^0-9]/g, '')) || 0;
              const tuition = parseInt((tuitionInput.value || '').replace(/[^0-9]/g, '')) || 0;
              const lossRate = parseFloat(lossRateInput.value) || 0;
              const retentionIncrease = parseFloat(retentionIncreaseInput.value) || 0;

              const trainingHours = 106.25 * numPrograms;
              const matchingHours = 12 * studentsServed / 60;
              const communicatingHours = 58 * 2.5 * studentsServed / 60;
              const totalHours = trainingHours + matchingHours + communicatingHours;
              const staffCostSavings = Math.round(hourlyRate * totalHours);

              const lostStudents = totalStudents * (lossRate / 100);
              const retainedStudents = lostStudents * (retentionIncrease / 100);
              const revenueSavings = Math.round(retainedStudents * tuition);

              const totalROI = staffCostSavings + revenueSavings;

              if (staffSavingsElement) {
                staffSavingsElement.textContent = formatCurrency(staffCostSavings);
              }
              if (revenueSavingsElement) {
                revenueSavingsElement.textContent = formatCurrency(revenueSavings);
              }
              if (totalROIElement) {
                totalROIElement.textContent = formatCurrency(totalROI);
              }
            }

            function handleNumberInput(e) {
              let value = e.target.value.replace(/[^0-9]/g, '');
              if (value) {
                e.target.value = formatNumber(parseInt(value));
              }
              calculateROI();
            }

            function handleCurrencyInput(e) {
              let value = e.target.value.replace(/[^0-9]/g, '');
              if (value) {
                e.target.value = formatCurrency(parseInt(value));
              }
              calculateROI();
            }

            function handleDecimalInput(e) {
              let value = e.target.value.replace(/[^0-9.]/g, '');
              if (value) {
                e.target.value = '$' + parseFloat(value).toFixed(2);
              }
              calculateROI();
            }

            if (studentsServedInput) {
              studentsServedInput.addEventListener('input', handleNumberInput);
            }
            if (programsInput) {
              programsInput.addEventListener('input', handleNumberInput);
            }
            if (hourlyRateInput) {
              hourlyRateInput.addEventListener('input', handleDecimalInput);
            }
            if (totalStudentsInput) {
              totalStudentsInput.addEventListener('input', handleNumberInput);
            }
            if (tuitionInput) {
              tuitionInput.addEventListener('input', handleCurrencyInput);
            }
            if (lossRateInput) {
              lossRateInput.addEventListener('input', calculateROI);
            }
            if (retentionIncreaseInput) {
              retentionIncreaseInput.addEventListener('input', calculateROI);
            }

            calculateROI();
          }

          if (document.readyState === 'loading') {
            document.addEventListener('DOMContentLoaded', initROICalculator);
          } else {
            setTimeout(initROICalculator, 100);
          }
        })();
      `}} />

      <section
        ref={elementRef as React.RefObject<HTMLElement>}
        style={{
          padding: 'var(--section-padding-md) var(--spacing-lg)',
          background: 'var(--gradient-warm)',
          backgroundImage: 'var(--pattern-dots)',
          backgroundSize: 'var(--pattern-dots-size)',
          position: 'relative',
          ...animationStyles.fadeInUp(isVisible),
        }}
      >
        <div style={{ maxWidth: 'var(--max-width-xl)', margin: '0 auto' }}>
          <div style={{ textAlign: 'center', marginBottom: 'var(--spacing-xl)' }}>
            <h2 style={{
              fontSize: 'var(--font-size-h2)',
              lineHeight: 'var(--line-height-tight)',
              letterSpacing: 'var(--letter-spacing-tight)',
              marginBottom: 'var(--spacing-sm)',
              fontFamily: 'var(--font-headline)',
              fontWeight: 700,
              color: 'var(--text-primary)'
            }}>
              {fieldValues.heading || 'Measure What Matters'}
            </h2>
            <p style={{
              fontSize: '1.1rem',
              lineHeight: 'var(--line-height-relaxed)',
              color: 'var(--text-secondary)',
              maxWidth: 'var(--max-width-prose)',
              margin: '0 auto'
            }}>
              {fieldValues.description || 'Estimate how much mentorship could save your organization.'}
            </p>
          </div>

          <div style={{
            background: 'var(--bg-white)',
            padding: 'var(--card-padding)',
            borderRadius: 'var(--radius-xl)',
            boxShadow: 'var(--shadow-lg)',
            border: '2px solid var(--border-light)',
            maxWidth: 'var(--max-width-lg)',
            margin: '0 auto'
          }}>
            <div style={{
              display: 'grid',
              gridTemplateColumns: 'repeat(2, 1fr)',
              gap: 'var(--spacing-md)',
              marginBottom: 'var(--spacing-lg)'
            }} className="roi-inputs-grid">
              <div>
                <label htmlFor="students-served" style={{ fontSize: '0.8rem', color: 'var(--text-muted)', marginBottom: 'var(--spacing-xs)', display: 'block', fontWeight: 600 }}>
                  Students Served
                </label>
                <input id="students-served" type="text" defaultValue="1,000" placeholder="Enter Number" className="roi-calculator-input" style={{ fontSize: '1.1rem', fontWeight: 600, color: 'var(--text-coral)', border: '2px solid var(--border-medium)', padding: '0.6rem 0.75rem', borderRadius: 'var(--radius-md)', width: '100%', outline: 'none' }} />
              </div>

              <div>
                <label htmlFor="num-programs" style={{ fontSize: '0.8rem', color: 'var(--text-muted)', marginBottom: 'var(--spacing-xs)', display: 'block', fontWeight: 600 }}>
                  Number of Programs
                </label>
                <input id="num-programs" type="text" defaultValue="1" placeholder="Enter Number" className="roi-calculator-input" style={{ fontSize: '1.1rem', fontWeight: 600, color: 'var(--text-coral)', border: '2px solid var(--border-medium)', padding: '0.6rem 0.75rem', borderRadius: 'var(--radius-md)', width: '100%', outline: 'none' }} />
              </div>

              <div>
                <label htmlFor="hourly-rate" style={{ fontSize: '0.8rem', color: 'var(--text-muted)', marginBottom: 'var(--spacing-xs)', display: 'block', fontWeight: 600 }}>
                  Staff Hourly Rate
                </label>
                <input id="hourly-rate" type="text" defaultValue="$22.00" placeholder="Enter Amount" className="roi-calculator-input" style={{ fontSize: '1.1rem', fontWeight: 600, color: 'var(--text-coral)', border: '2px solid var(--border-medium)', padding: '0.6rem 0.75rem', borderRadius: 'var(--radius-md)', width: '100%', outline: 'none' }} />
              </div>

              <div>
                <label htmlFor="total-students" style={{ fontSize: '0.8rem', color: 'var(--text-muted)', marginBottom: 'var(--spacing-xs)', display: 'block', fontWeight: 600 }}>
                  Total Student Population
                </label>
                <input id="total-students" type="text" defaultValue="6,200" placeholder="Enter Number" className="roi-calculator-input" style={{ fontSize: '1.1rem', fontWeight: 600, color: 'var(--text-coral)', border: '2px solid var(--border-medium)', padding: '0.6rem 0.75rem', borderRadius: 'var(--radius-md)', width: '100%', outline: 'none' }} />
              </div>

              <div>
                <label htmlFor="tuition" style={{ fontSize: '0.8rem', color: 'var(--text-muted)', marginBottom: 'var(--spacing-xs)', display: 'block', fontWeight: 600 }}>
                  Tuition Per Student
                </label>
                <input id="tuition" type="text" defaultValue="$15,000" placeholder="Enter Amount" style={{ fontSize: '1.1rem', fontWeight: 600, color: 'var(--text-coral)', border: '2px solid var(--border-medium)', padding: '0.6rem 0.75rem', borderRadius: 'var(--radius-md)', width: '100%', outline: 'none' }} />
              </div>

              <div>
                <label htmlFor="loss-rate" style={{ fontSize: '0.8rem', color: 'var(--text-muted)', marginBottom: 'var(--spacing-xs)', display: 'block', fontWeight: 600 }}>
                  Attrition Rate (%)
                </label>
                <input id="loss-rate" type="number" defaultValue="26" placeholder="%" min="0" max="100" step="0.1" style={{ fontSize: '1.1rem', fontWeight: 600, color: 'var(--text-coral)', border: '2px solid var(--border-medium)', padding: '0.6rem 0.75rem', borderRadius: 'var(--radius-md)', width: '100%', outline: 'none' }} />
              </div>

              <div>
                <label htmlFor="retention-increase" style={{ fontSize: '0.8rem', color: 'var(--text-muted)', marginBottom: 'var(--spacing-xs)', display: 'block', fontWeight: 600 }}>
                  Retention Improvement (%)
                </label>
                <input id="retention-increase" type="number" defaultValue="3.5" placeholder="%" min="0" max="100" step="0.1" style={{ fontSize: '1.1rem', fontWeight: 600, color: 'var(--text-coral)', border: '2px solid var(--border-medium)', padding: '0.6rem 0.75rem', borderRadius: 'var(--radius-md)', width: '100%', outline: 'none' }} />
              </div>
            </div>

            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(2, 1fr)', gap: '1rem', marginBottom: '1.5rem' }}>
              <div style={{ padding: '1.25rem', background: 'linear-gradient(135deg, rgba(239, 71, 111, 0.08) 0%, rgba(248, 159, 123, 0.05) 100%)', borderRadius: '16px', border: '2px solid rgba(239, 71, 111, 0.2)' }}>
                <div style={{ fontSize: '0.75rem', fontWeight: 600, color: '#666', marginBottom: '0.5rem', textTransform: 'uppercase', letterSpacing: '0.05em' }}>
                  Staff Savings
                </div>
                <div id="staff-savings-value" style={{ fontSize: '1.75rem', fontWeight: 800, color: '#EF476F' }}>
                  $23,408
                </div>
              </div>

              <div style={{ padding: '1.25rem', background: 'linear-gradient(135deg, rgba(239, 71, 111, 0.08) 0%, rgba(248, 159, 123, 0.05) 100%)', borderRadius: '16px', border: '2px solid rgba(239, 71, 111, 0.2)' }}>
                <div style={{ fontSize: '0.75rem', fontWeight: 600, color: '#666', marginBottom: '0.5rem', textTransform: 'uppercase', letterSpacing: '0.05em' }}>
                  Revenue Retained
                </div>
                <div id="revenue-savings-value" style={{ fontSize: '1.75rem', fontWeight: 800, color: '#EF476F' }}>
                  $845,700
                </div>
              </div>
            </div>

            <div style={{ padding: '2rem', background: 'linear-gradient(135deg, #EF476F 0%, #F89F7B 100%)', borderRadius: '20px', textAlign: 'center', boxShadow: '0 8px 24px rgba(239, 71, 111, 0.35)' }}>
              <div style={{ fontSize: '0.85rem', fontWeight: 600, color: 'rgba(255, 255, 255, 0.9)', marginBottom: '0.75rem', textTransform: 'uppercase', letterSpacing: '0.1em' }}>
                Total Annual ROI
              </div>
              <div id="total-roi-value" style={{ fontSize: '2.75rem', fontWeight: 900, color: 'white', lineHeight: 1 }}>
                $869,108
              </div>
            </div>

            <div style={{ marginTop: '1.5rem', textAlign: 'center', fontSize: '0.7rem', color: '#999', fontStyle: 'italic' }}>
              *Estimates based on your inputs and industry benchmarks
            </div>

            <div style={{ marginTop: '1.5rem', textAlign: 'center' }}>
              <a href={fieldValues.link_url || '#'} style={{ color: '#EF476F', textDecoration: 'none', fontSize: '0.95rem', fontWeight: 600 }}>
                {fieldValues.link_text || 'Learn more'} →
              </a>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

export const fields = (
  <ModuleFields>
    <TextField name="heading" label="Section Heading" default="Measure What Matters" />
    <TextField name="description" label="Description" default="Estimate how much mentorship could save your organization." />
    <TextField name="link_text" label="Link Text" default="Learn more" />
    <TextField name="link_url" label="Link URL" default="#" />
  </ModuleFields>
);

export const meta = {
  label: 'ROI Calculator',
};
