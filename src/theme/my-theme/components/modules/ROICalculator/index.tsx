import React from 'react';
import {
  ModuleFields,
  TextField,
} from '@hubspot/cms-components/fields';
import { useScrollAnimation, animationStyles } from '../../hooks/useScrollAnimation';

export function Component({ fieldValues }: any) {
  const { elementRef, isVisible } = useScrollAnimation({ threshold: 0.2 });

  const inputStyle = {
    fontSize: 'var(--font-size-body-lg)',
    fontWeight: 600,
    color: 'var(--primary-blue)',
    border: '2px solid var(--border-light)',
    padding: 'var(--spacing-xs) var(--spacing-sm)',
    borderRadius: 'var(--radius-md)',
    width: '100%',
    outline: 'none'
  };

  const labelStyle = {
    fontSize: 'var(--font-size-label)',
    color: 'var(--text-muted)',
    marginBottom: 'var(--spacing-xs)',
    display: 'block',
    fontWeight: 600
  };

  return (
    <>
      <script dangerouslySetInnerHTML={{__html: `
        (function() {
          function initROICalculator() {
            // Toggle elements
            const heToggle = document.getElementById('roi-toggle-he');
            const corpToggle = document.getElementById('roi-toggle-corp');
            const heCalculator = document.getElementById('roi-calculator-he');
            const corpCalculator = document.getElementById('roi-calculator-corp');

            // HE inputs
            const studentsServedInput = document.getElementById('students-served');
            const hourlyRateHEInput = document.getElementById('hourly-rate-he');
            const totalStudentsInput = document.getElementById('total-students');
            const tuitionInput = document.getElementById('tuition');
            const lossRateInput = document.getElementById('loss-rate');
            const retentionIncreaseHEInput = document.getElementById('retention-increase-he');

            // HE outputs
            const staffSavingsHEElement = document.getElementById('staff-savings-value-he');
            const revenueSavingsHEElement = document.getElementById('revenue-savings-value-he');
            const totalROIHEElement = document.getElementById('total-roi-value-he');

            // Corp inputs
            const employeesServedInput = document.getElementById('employees-served');
            const hourlyRateCorpInput = document.getElementById('hourly-rate-corp');
            const totalEmployeesInput = document.getElementById('total-employees');
            const revenuePerEmployeeInput = document.getElementById('revenue-per-employee');
            const turnoverRateInput = document.getElementById('turnover-rate');
            const retentionIncreaseCorpInput = document.getElementById('retention-increase-corp');

            // Corp outputs
            const staffSavingsCorpElement = document.getElementById('staff-savings-value-corp');
            const revenueSavingsCorpElement = document.getElementById('revenue-savings-value-corp');
            const totalROICorpElement = document.getElementById('total-roi-value-corp');

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

            // Toggle handler
            function handleToggle(mode) {
              if (mode === 'he') {
                heToggle.classList.add('active');
                corpToggle.classList.remove('active');
                heCalculator.style.display = 'block';
                corpCalculator.style.display = 'none';
              } else {
                corpToggle.classList.add('active');
                heToggle.classList.remove('active');
                corpCalculator.style.display = 'block';
                heCalculator.style.display = 'none';
              }
            }

            if (heToggle) {
              heToggle.addEventListener('click', function() { handleToggle('he'); });
            }
            if (corpToggle) {
              corpToggle.addEventListener('click', function() { handleToggle('corp'); });
            }

            // HE Calculator
            function calculateHEROI() {
              const studentsServed = parseInt((studentsServedInput.value || '').replace(/[^0-9]/g, '')) || 0;
              const hourlyRate = parseFloat((hourlyRateHEInput.value || '').replace(/[^0-9.]/g, '')) || 0;
              const totalStudents = parseInt((totalStudentsInput.value || '').replace(/[^0-9]/g, '')) || 0;
              const tuition = parseInt((tuitionInput.value || '').replace(/[^0-9]/g, '')) || 0;
              const lossRate = parseFloat(lossRateInput.value) || 0;
              const retentionIncrease = parseFloat(retentionIncreaseHEInput.value) || 0;

              const matchingHours = 12 * studentsServed / 60;
              const communicatingHours = 58 * 2.5 * studentsServed / 60;
              const totalHours = matchingHours + communicatingHours;
              const staffCostSavings = Math.round(hourlyRate * totalHours);

              const lostStudents = totalStudents * (lossRate / 100);
              const retainedStudents = lostStudents * (retentionIncrease / 100);
              const revenueSavings = Math.round(retainedStudents * tuition);

              const totalROI = staffCostSavings + revenueSavings;

              if (staffSavingsHEElement) staffSavingsHEElement.textContent = formatCurrency(staffCostSavings);
              if (revenueSavingsHEElement) revenueSavingsHEElement.textContent = formatCurrency(revenueSavings);
              if (totalROIHEElement) totalROIHEElement.textContent = formatCurrency(totalROI);
            }

            // Corp Calculator
            function calculateCorpROI() {
              const employeesServed = parseInt((employeesServedInput.value || '').replace(/[^0-9]/g, '')) || 0;
              const hourlyRate = parseFloat((hourlyRateCorpInput.value || '').replace(/[^0-9.]/g, '')) || 0;
              const totalEmployees = parseInt((totalEmployeesInput.value || '').replace(/[^0-9]/g, '')) || 0;
              const revenuePerEmployee = parseInt((revenuePerEmployeeInput.value || '').replace(/[^0-9]/g, '')) || 0;
              const turnoverRate = parseFloat(turnoverRateInput.value) || 0;
              const retentionIncrease = parseFloat(retentionIncreaseCorpInput.value) || 0;

              const matchingHours = 12 * employeesServed / 60;
              const communicatingHours = 58 * 2.5 * employeesServed / 60;
              const totalHours = matchingHours + communicatingHours;
              const staffCostSavings = Math.round(hourlyRate * totalHours);

              const lostEmployees = totalEmployees * (turnoverRate / 100);
              const retainedEmployees = lostEmployees * (retentionIncrease / 100);
              const revenueSavings = Math.round(retainedEmployees * revenuePerEmployee);

              const totalROI = staffCostSavings + revenueSavings;

              if (staffSavingsCorpElement) staffSavingsCorpElement.textContent = formatCurrency(staffCostSavings);
              if (revenueSavingsCorpElement) revenueSavingsCorpElement.textContent = formatCurrency(revenueSavings);
              if (totalROICorpElement) totalROICorpElement.textContent = formatCurrency(totalROI);
            }

            function handleNumberInput(e, calcFn) {
              let value = e.target.value.replace(/[^0-9]/g, '');
              if (value) {
                e.target.value = formatNumber(parseInt(value));
              }
              calcFn();
            }

            function handleCurrencyInput(e, calcFn) {
              let value = e.target.value.replace(/[^0-9]/g, '');
              if (value) {
                e.target.value = formatCurrency(parseInt(value));
              }
              calcFn();
            }

            function handleDecimalInput(e, calcFn) {
              let value = e.target.value.replace(/[^0-9.]/g, '');
              if (value) {
                e.target.value = '$' + parseFloat(value).toFixed(2);
              }
              calcFn();
            }

            // HE event listeners
            if (studentsServedInput) studentsServedInput.addEventListener('input', function(e) { handleNumberInput(e, calculateHEROI); });
            if (hourlyRateHEInput) hourlyRateHEInput.addEventListener('input', function(e) { handleDecimalInput(e, calculateHEROI); });
            if (totalStudentsInput) totalStudentsInput.addEventListener('input', function(e) { handleNumberInput(e, calculateHEROI); });
            if (tuitionInput) tuitionInput.addEventListener('input', function(e) { handleCurrencyInput(e, calculateHEROI); });
            if (lossRateInput) lossRateInput.addEventListener('input', calculateHEROI);
            if (retentionIncreaseHEInput) retentionIncreaseHEInput.addEventListener('input', calculateHEROI);

            // Corp event listeners
            if (employeesServedInput) employeesServedInput.addEventListener('input', function(e) { handleNumberInput(e, calculateCorpROI); });
            if (hourlyRateCorpInput) hourlyRateCorpInput.addEventListener('input', function(e) { handleDecimalInput(e, calculateCorpROI); });
            if (totalEmployeesInput) totalEmployeesInput.addEventListener('input', function(e) { handleNumberInput(e, calculateCorpROI); });
            if (revenuePerEmployeeInput) revenuePerEmployeeInput.addEventListener('input', function(e) { handleCurrencyInput(e, calculateCorpROI); });
            if (turnoverRateInput) turnoverRateInput.addEventListener('input', calculateCorpROI);
            if (retentionIncreaseCorpInput) retentionIncreaseCorpInput.addEventListener('input', calculateCorpROI);

            // Initial calculations
            calculateHEROI();
            calculateCorpROI();
          }

          if (document.readyState === 'loading') {
            document.addEventListener('DOMContentLoaded', initROICalculator);
          } else {
            setTimeout(initROICalculator, 100);
          }
        })();
      `}} />

      <style dangerouslySetInnerHTML={{__html: `
        .roi-toggle-container {
          display: flex;
          justify-content: center;
          gap: 0;
          margin-bottom: var(--spacing-xl);
        }
        .roi-toggle-btn {
          padding: var(--spacing-sm) var(--spacing-xl);
          font-size: var(--font-size-body);
          font-weight: 600;
          border: 2px solid var(--border-light);
          background: var(--bg-white);
          color: var(--text-secondary);
          cursor: pointer;
          transition: var(--transition-fast);
        }
        .roi-toggle-btn:first-child {
          border-radius: var(--radius-sm) 0 0 var(--radius-sm);
          border-right: 1px solid var(--border-light);
        }
        .roi-toggle-btn:last-child {
          border-radius: 0 var(--radius-sm) var(--radius-sm) 0;
          border-left: 1px solid var(--border-light);
        }
        .roi-toggle-btn:hover {
          background: var(--bg-light-coral);
        }
        .roi-toggle-btn.active {
          background: var(--gradient-teal);
          color: var(--text-white);
          border-color: var(--primary-blue);
        }
        #roi-calculator-he input:focus,
        #roi-calculator-corp input:focus {
          border-color: var(--primary-blue) !important;
          box-shadow: 0 0 0 3px rgba(74, 158, 170, 0.15) !important;
        }
        .roi-toggle-btn:focus {
          outline: none !important;
          box-shadow: 0 0 0 3px rgba(74, 158, 170, 0.3) !important;
        }
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
              fontWeight: 500,
              color: 'var(--text-primary)'
            }}>
              {fieldValues.heading || 'Measure What Matters'}
            </h2>
            <p style={{
              fontSize: 'var(--font-size-body-lg)',
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
            {/* Toggle Buttons */}
            <div className="roi-toggle-container">
              <button id="roi-toggle-he" className="roi-toggle-btn active" type="button">
                Higher Education
              </button>
              <button id="roi-toggle-corp" className="roi-toggle-btn" type="button">
                Corporate
              </button>
            </div>

            {/* Higher Education Calculator */}
            <div id="roi-calculator-he" style={{ display: 'block' }}>
              <div style={{
                display: 'grid',
                gridTemplateColumns: 'repeat(2, 1fr)',
                gap: 'var(--spacing-md)',
                marginBottom: 'var(--spacing-lg)'
              }} className="roi-inputs-grid">
                <div>
                  <label htmlFor="students-served" style={labelStyle}>
                    Students Served
                  </label>
                  <input id="students-served" type="text" defaultValue="1,000" placeholder="Enter Number" style={inputStyle} />
                </div>

                <div>
                  <label htmlFor="hourly-rate-he" style={labelStyle}>
                    Staff Hourly Rate
                  </label>
                  <input id="hourly-rate-he" type="text" defaultValue="$22.00" placeholder="Enter Amount" style={inputStyle} />
                </div>

                <div>
                  <label htmlFor="total-students" style={labelStyle}>
                    Total Student Population
                  </label>
                  <input id="total-students" type="text" defaultValue="6,200" placeholder="Enter Number" style={inputStyle} />
                </div>

                <div>
                  <label htmlFor="tuition" style={labelStyle}>
                    Tuition Per Student
                  </label>
                  <input id="tuition" type="text" defaultValue="$15,000" placeholder="Enter Amount" style={inputStyle} />
                </div>

                <div>
                  <label htmlFor="loss-rate" style={labelStyle}>
                    Attrition Rate (%)
                  </label>
                  <input id="loss-rate" type="number" defaultValue="26" placeholder="%" min="0" max="100" step="0.1" style={inputStyle} />
                </div>

                <div>
                  <label htmlFor="retention-increase-he" style={labelStyle}>
                    Retention Improvement (%)
                  </label>
                  <input id="retention-increase-he" type="number" defaultValue="3.5" placeholder="%" min="0" max="100" step="0.1" style={inputStyle} />
                </div>
              </div>

              <div style={{ display: 'grid', gridTemplateColumns: 'repeat(2, 1fr)', gap: 'var(--spacing-md)', marginBottom: 'var(--spacing-lg)' }}>
                <div style={{ padding: 'var(--spacing-md)', background: 'var(--gradient-blue-light)', borderRadius: 'var(--radius-lg)', border: '2px solid var(--border-medium)' }}>
                  <div style={{ fontSize: 'var(--font-size-label)', fontWeight: 600, color: 'var(--text-muted)', marginBottom: 'var(--spacing-xs)', textTransform: 'uppercase', letterSpacing: 'var(--letter-spacing-wide)' }}>
                    Staff Savings
                  </div>
                  <div id="staff-savings-value-he" style={{ fontSize: 'var(--font-size-h3)', fontWeight: 800, color: 'var(--primary-blue)' }}>
                    $23,408
                  </div>
                </div>

                <div style={{ padding: 'var(--spacing-md)', background: 'var(--gradient-blue-light)', borderRadius: 'var(--radius-lg)', border: '2px solid var(--border-medium)' }}>
                  <div style={{ fontSize: 'var(--font-size-label)', fontWeight: 600, color: 'var(--text-muted)', marginBottom: 'var(--spacing-xs)', textTransform: 'uppercase', letterSpacing: 'var(--letter-spacing-wide)' }}>
                    Revenue Retained
                  </div>
                  <div id="revenue-savings-value-he" style={{ fontSize: 'var(--font-size-h3)', fontWeight: 800, color: 'var(--primary-blue)' }}>
                    $845,700
                  </div>
                </div>
              </div>

              <div style={{ padding: 'var(--spacing-xl)', background: 'var(--gradient-teal)', borderRadius: 'var(--radius-lg)', textAlign: 'center', boxShadow: 'var(--shadow-lg)' }}>
                <div style={{ fontSize: 'var(--font-size-small)', fontWeight: 600, color: 'var(--text-white-soft)', marginBottom: 'var(--spacing-sm)', textTransform: 'uppercase', letterSpacing: 'var(--letter-spacing-wide)' }}>
                  Total Annual ROI
                </div>
                <div id="total-roi-value-he" style={{ fontSize: 'var(--font-size-h1)', fontWeight: 900, color: 'var(--text-white)', lineHeight: 1 }}>
                  $869,108
                </div>
              </div>
            </div>

            {/* Corporate Calculator */}
            <div id="roi-calculator-corp" style={{ display: 'none' }}>
              <div style={{
                display: 'grid',
                gridTemplateColumns: 'repeat(2, 1fr)',
                gap: 'var(--spacing-md)',
                marginBottom: 'var(--spacing-lg)'
              }} className="roi-inputs-grid">
                <div>
                  <label htmlFor="employees-served" style={labelStyle}>
                    Employees Served
                  </label>
                  <input id="employees-served" type="text" defaultValue="1,000" placeholder="Enter Number" style={inputStyle} />
                </div>

                <div>
                  <label htmlFor="hourly-rate-corp" style={labelStyle}>
                    Staff Hourly Rate
                  </label>
                  <input id="hourly-rate-corp" type="text" defaultValue="$35.00" placeholder="Enter Amount" style={inputStyle} />
                </div>

                <div>
                  <label htmlFor="total-employees" style={labelStyle}>
                    Total Employee Population
                  </label>
                  <input id="total-employees" type="text" defaultValue="5,000" placeholder="Enter Number" style={inputStyle} />
                </div>

                <div>
                  <label htmlFor="revenue-per-employee" style={labelStyle}>
                    Revenue Per Employee
                  </label>
                  <input id="revenue-per-employee" type="text" defaultValue="$75,000" placeholder="Enter Amount" style={inputStyle} />
                </div>

                <div>
                  <label htmlFor="turnover-rate" style={labelStyle}>
                    Turnover Rate (%)
                  </label>
                  <input id="turnover-rate" type="number" defaultValue="18" placeholder="%" min="0" max="100" step="0.1" style={inputStyle} />
                </div>

                <div>
                  <label htmlFor="retention-increase-corp" style={labelStyle}>
                    Retention Improvement (%)
                  </label>
                  <input id="retention-increase-corp" type="number" defaultValue="5" placeholder="%" min="0" max="100" step="0.1" style={inputStyle} />
                </div>
              </div>

              <div style={{ display: 'grid', gridTemplateColumns: 'repeat(2, 1fr)', gap: 'var(--spacing-md)', marginBottom: 'var(--spacing-lg)' }}>
                <div style={{ padding: 'var(--spacing-md)', background: 'var(--gradient-blue-light)', borderRadius: 'var(--radius-lg)', border: '2px solid var(--border-medium)' }}>
                  <div style={{ fontSize: 'var(--font-size-label)', fontWeight: 600, color: 'var(--text-muted)', marginBottom: 'var(--spacing-xs)', textTransform: 'uppercase', letterSpacing: 'var(--letter-spacing-wide)' }}>
                    Staff Savings
                  </div>
                  <div id="staff-savings-value-corp" style={{ fontSize: 'var(--font-size-h3)', fontWeight: 800, color: 'var(--primary-blue)' }}>
                    $37,917
                  </div>
                </div>

                <div style={{ padding: 'var(--spacing-md)', background: 'var(--gradient-blue-light)', borderRadius: 'var(--radius-lg)', border: '2px solid var(--border-medium)' }}>
                  <div style={{ fontSize: 'var(--font-size-label)', fontWeight: 600, color: 'var(--text-muted)', marginBottom: 'var(--spacing-xs)', textTransform: 'uppercase', letterSpacing: 'var(--letter-spacing-wide)' }}>
                    Revenue Retained
                  </div>
                  <div id="revenue-savings-value-corp" style={{ fontSize: 'var(--font-size-h3)', fontWeight: 800, color: 'var(--primary-blue)' }}>
                    $3,375,000
                  </div>
                </div>
              </div>

              <div style={{ padding: 'var(--spacing-xl)', background: 'var(--gradient-teal)', borderRadius: 'var(--radius-lg)', textAlign: 'center', boxShadow: 'var(--shadow-lg)' }}>
                <div style={{ fontSize: 'var(--font-size-small)', fontWeight: 600, color: 'var(--text-white-soft)', marginBottom: 'var(--spacing-sm)', textTransform: 'uppercase', letterSpacing: 'var(--letter-spacing-wide)' }}>
                  Total Annual ROI
                </div>
                <div id="total-roi-value-corp" style={{ fontSize: 'var(--font-size-h1)', fontWeight: 900, color: 'var(--text-white)', lineHeight: 1 }}>
                  $3,412,917
                </div>
              </div>
            </div>

            <div style={{ marginTop: 'var(--spacing-lg)', textAlign: 'center', fontSize: 'var(--font-size-xs)', color: 'var(--text-muted)', fontStyle: 'italic' }}>
              *Estimates based on your inputs and industry benchmarks
            </div>

            <div style={{ marginTop: 'var(--spacing-lg)', textAlign: 'center' }}>
              <a href={fieldValues.link_url || '#'} style={{ color: 'var(--primary-blue)', textDecoration: 'none', fontSize: 'var(--font-size-body)', fontWeight: 600 }}>
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
