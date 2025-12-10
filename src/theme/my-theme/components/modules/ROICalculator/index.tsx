import React from 'react';
import {
  ModuleFields,
  TextField,
} from '@hubspot/cms-components/fields';
import { ScrollAnimationScript } from '../../shared/ScrollAnimationScript';

export function Component({ fieldValues }: any) {

  const inputStyle = {
    fontSize: 'var(--font-size-body-lg)',
    fontWeight: 600,
    color: 'var(--primary-navy)',
    border: '1px solid var(--text-muted)',
    padding: 'var(--spacing-xs) var(--spacing-sm)',
    borderRadius: 'var(--radius-md)',
    width: '100%',
    outline: 'none'
  };

  const labelStyle = {
    fontSize: 'var(--font-size-small)',
    color: 'var(--text-secondary)',
    marginBottom: 'var(--spacing-xs)',
    display: 'block',
    fontWeight: 600
  };

  return (
    <>
      <script dangerouslySetInnerHTML={{__html: `
        (function() {
          // HubSpot Analytics Tracking
          var roiTracking = {
            hasInteracted: false,
            currentSegment: 'higher_ed',
            lastTrackedROI: null,
            debounceTimer: null,

            // Track calculator interaction event
            trackInteraction: function(segment, inputs, results) {
              // Debounce to avoid tracking every keystroke
              if (this.debounceTimer) clearTimeout(this.debounceTimer);

              var self = this;
              this.debounceTimer = setTimeout(function() {
                // Only track if values have changed significantly
                var roiValue = results.totalROI || results.savings || 0;
                if (self.lastTrackedROI === roiValue) return;
                self.lastTrackedROI = roiValue;

                // Store in localStorage for form submission capture
                var trackingData = {
                  timestamp: Date.now(),
                  segment: segment,
                  inputs: inputs,
                  results: results,
                  page_url: window.location.href
                };
                localStorage.setItem('mc_roi_calculator', JSON.stringify(trackingData));

                // Track via HubSpot Analytics API if available
                if (typeof _hsq !== 'undefined') {
                  // First interaction event
                  if (!self.hasInteracted) {
                    _hsq.push(['trackCustomBehavioralEvent', {
                      name: 'pe512371_roi_calculator_started',
                      properties: {
                        calculator_segment: segment
                      }
                    }]);
                    self.hasInteracted = true;
                  }

                  // Track calculation completed with results
                  _hsq.push(['trackCustomBehavioralEvent', {
                    name: 'pe512371_roi_calculator_completed',
                    properties: {
                      calculator_segment: segment,
                      total_roi_estimate: roiValue,
                      staff_savings: results.staffSavings || 0,
                      revenue_retained: results.revenueRetained || 0,
                      turnover_cost: results.turnoverCost || 0,
                      mentorship_savings: results.savings || 0
                    }
                  }]);
                }

                console.log('[ROI Calculator] Tracked:', trackingData);
              }, 1500); // Wait 1.5s after last input before tracking
            },

            // Track segment switch
            trackSegmentSwitch: function(newSegment) {
              this.currentSegment = newSegment;

              if (typeof _hsq !== 'undefined') {
                _hsq.push(['trackCustomBehavioralEvent', {
                  name: 'pe512371_roi_calculator_segment_switch',
                  properties: {
                    calculator_segment: newSegment
                  }
                }]);
              }
            }
          };

          // Make tracking available globally for form integration
          window.mcROITracking = roiTracking;

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

            // Corp inputs (using the Emerging Market calculator formula)
            const corpEmployeesInput = document.getElementById('corp-employees');
            const corpTurnoverRateInput = document.getElementById('corp-turnover-rate');
            const corpAvgSalaryInput = document.getElementById('corp-avg-salary');
            const corpMentorshipIncreaseInput = document.getElementById('corp-mentorship-increase');

            // Corp outputs
            const corpTurnoverCostElement = document.getElementById('corp-turnover-cost-value');
            const corpSavingsElement = document.getElementById('corp-savings-value');

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
              // Reset all buttons
              if (heToggle) {
                heToggle.classList.remove('active');
              }
              if (corpToggle) {
                corpToggle.classList.remove('active');
              }

              // Hide all calculators
              if (heCalculator) heCalculator.style.display = 'none';
              if (corpCalculator) corpCalculator.style.display = 'none';

              // Show selected
              if (mode === 'he') {
                if (heToggle) heToggle.classList.add('active');
                if (heCalculator) heCalculator.style.display = 'block';
                roiTracking.trackSegmentSwitch('higher_ed');
              } else if (mode === 'corp') {
                if (corpToggle) corpToggle.classList.add('active');
                if (corpCalculator) corpCalculator.style.display = 'block';
                roiTracking.trackSegmentSwitch('corporate');
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

              // Track interaction with HubSpot
              roiTracking.trackInteraction('higher_ed', {
                studentsServed: studentsServed,
                hourlyRate: hourlyRate,
                totalStudents: totalStudents,
                tuition: tuition,
                attritionRate: lossRate,
                retentionImprovement: retentionIncrease
              }, {
                staffSavings: staffCostSavings,
                revenueRetained: revenueSavings,
                totalROI: totalROI
              });
            }

            // Corp Calculator (using the Emerging Market formula from sales)
            function calculateCorpROI() {
              const employees = parseInt((corpEmployeesInput.value || '').replace(/[^0-9]/g, '')) || 0;
              const turnoverRate = parseFloat(corpTurnoverRateInput.value) || 0;
              const avgSalary = parseInt((corpAvgSalaryInput.value || '').replace(/[^0-9]/g, '')) || 0;
              const mentorshipIncrease = parseFloat(corpMentorshipIncreaseInput.value) || 0;
              const costOfTurnover = 0.60; // Fixed at 60%

              // Cost of employee turnover = employees × turnover_rate × salary × cost_of_turnover
              const turnoverCost = Math.round(employees * (turnoverRate / 100) * avgSalary * costOfTurnover);

              // Savings = turnover_cost × mentorship_increase
              const savings = Math.round(turnoverCost * (mentorshipIncrease / 100));

              if (corpTurnoverCostElement) corpTurnoverCostElement.textContent = formatCurrency(turnoverCost);
              if (corpSavingsElement) corpSavingsElement.textContent = formatCurrency(savings);

              // Track interaction with HubSpot
              roiTracking.trackInteraction('corporate', {
                employees: employees,
                turnoverRate: turnoverRate,
                avgSalary: avgSalary,
                mentorshipRetentionIncrease: mentorshipIncrease
              }, {
                turnoverCost: turnoverCost,
                savings: savings
              });
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
            if (corpEmployeesInput) corpEmployeesInput.addEventListener('input', function(e) { handleNumberInput(e, calculateCorpROI); });
            if (corpTurnoverRateInput) corpTurnoverRateInput.addEventListener('input', calculateCorpROI);
            if (corpAvgSalaryInput) corpAvgSalaryInput.addEventListener('input', function(e) { handleCurrencyInput(e, calculateCorpROI); });
            if (corpMentorshipIncreaseInput) corpMentorshipIncreaseInput.addEventListener('input', calculateCorpROI);

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
          padding: var(--spacing-sm) var(--spacing-lg);
          font-size: var(--font-size-body);
          font-weight: 600;
          border: 1px solid var(--text-muted);
          background: var(--bg-white);
          color: var(--text-secondary);
          cursor: pointer;
          transition: var(--transition-fast);
        }
        .roi-toggle-btn:first-child {
          border-radius: var(--radius-sm) 0 0 var(--radius-sm);
          border-right: none;
        }
        .roi-toggle-btn:last-child {
          border-radius: 0 var(--radius-sm) var(--radius-sm) 0;
        }
        .roi-toggle-btn:hover {
          background: var(--bg-cream);
        }
        .roi-toggle-btn.active {
          background: var(--primary-navy);
          color: var(--text-white);
          border-color: var(--primary-navy);
        }
        #roi-calculator-he input:focus,
        #roi-calculator-corp input:focus,
        #roi-calculator-em input:focus {
          border-color: var(--primary-blue) !important;
          box-shadow: 0 0 0 3px rgba(74, 158, 170, 0.15) !important;
        }
        .roi-toggle-btn:focus {
          outline: none !important;
          box-shadow: 0 0 0 3px rgba(74, 158, 170, 0.3) !important;
        }
        @media (max-width: 640px) {
          .roi-toggle-container {
            flex-wrap: wrap;
          }
          .roi-toggle-btn {
            flex: 1 1 auto;
            min-width: 120px;
          }
          .roi-toggle-btn:first-child {
            border-radius: var(--radius-sm) 0 0 var(--radius-sm);
            border-right: none;
          }
          .roi-toggle-btn:last-child {
            border-radius: 0 var(--radius-sm) var(--radius-sm) 0;
          }
        }
      `}} />

      <ScrollAnimationScript />
      <section
        className="scroll-animate"
        style={{
          padding: 'var(--section-padding-md) var(--spacing-lg)',
          background: 'linear-gradient(180deg, #1a1a2e 0%, #16213e 100%)',
          position: 'relative',
          overflow: 'hidden',
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
              color: 'var(--text-white)'
            }}>
              {fieldValues.heading || 'Measure What Matters'}
            </h2>
            <p style={{
              fontSize: 'var(--font-size-body-lg)',
              lineHeight: 'var(--line-height-relaxed)',
              color: 'rgba(255, 255, 255, 0.8)',
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
                Higher Ed
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

              <div style={{ display: 'grid', gridTemplateColumns: 'repeat(2, 1fr)', gap: 'var(--spacing-sm)', marginBottom: 'var(--spacing-md)' }}>
                <div style={{ padding: 'var(--spacing-sm) var(--spacing-md)', background: 'var(--bg-cream)', borderRadius: 'var(--radius-md)', border: '1px solid var(--text-muted)' }}>
                  <div style={{ fontSize: 'var(--font-size-xs)', fontWeight: 600, color: 'var(--text-secondary)', marginBottom: '2px', textTransform: 'uppercase', letterSpacing: 'var(--letter-spacing-wide)' }}>
                    Staff Savings
                  </div>
                  <div id="staff-savings-value-he" style={{ fontSize: 'var(--font-size-h4)', fontWeight: 700, color: 'var(--primary-navy)' }}>
                    $23,408
                  </div>
                </div>

                <div style={{ padding: 'var(--spacing-sm) var(--spacing-md)', background: 'var(--bg-cream)', borderRadius: 'var(--radius-md)', border: '1px solid var(--text-muted)' }}>
                  <div style={{ fontSize: 'var(--font-size-xs)', fontWeight: 600, color: 'var(--text-secondary)', marginBottom: '2px', textTransform: 'uppercase', letterSpacing: 'var(--letter-spacing-wide)' }}>
                    Revenue Retained
                  </div>
                  <div id="revenue-savings-value-he" style={{ fontSize: 'var(--font-size-h4)', fontWeight: 700, color: 'var(--primary-navy)' }}>
                    $845,700
                  </div>
                </div>
              </div>

              <div style={{ padding: 'var(--spacing-md) var(--spacing-lg)', background: 'var(--primary-navy)', borderRadius: 'var(--radius-md)', textAlign: 'center' }}>
                <div style={{ fontSize: 'var(--font-size-xs)', fontWeight: 600, color: 'rgba(255,255,255,0.7)', marginBottom: '4px', textTransform: 'uppercase', letterSpacing: 'var(--letter-spacing-wide)' }}>
                  Total Annual ROI
                </div>
                <div id="total-roi-value-he" style={{ fontSize: 'var(--font-size-h3)', fontWeight: 800, color: 'var(--text-white)', lineHeight: 1 }}>
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
                  <label htmlFor="corp-employees" style={labelStyle}>
                    How Many Employees
                  </label>
                  <input id="corp-employees" type="text" defaultValue="100" placeholder="Enter Number" style={inputStyle} />
                </div>

                <div>
                  <label htmlFor="corp-turnover-rate" style={labelStyle}>
                    Average Turnover Rate (%)
                  </label>
                  <input id="corp-turnover-rate" type="number" defaultValue="10" placeholder="%" min="0" max="100" step="0.1" style={inputStyle} />
                </div>

                <div>
                  <label htmlFor="corp-avg-salary" style={labelStyle}>
                    Average Salary
                  </label>
                  <input id="corp-avg-salary" type="text" defaultValue="$50,000" placeholder="Enter Amount" style={inputStyle} />
                </div>

                <div>
                  <label style={labelStyle}>
                    Cost of Turnover*
                  </label>
                  <div style={{
                    ...inputStyle,
                    background: 'var(--bg-cream)',
                    color: 'var(--text-muted)',
                    cursor: 'not-allowed'
                  }}>
                    60%
                  </div>
                </div>

                <div style={{ gridColumn: '1 / -1' }}>
                  <label htmlFor="corp-mentorship-increase" style={labelStyle}>
                    Estimated Mentorship Retention Increase (%)
                  </label>
                  <input id="corp-mentorship-increase" type="number" defaultValue="30" placeholder="%" min="0" max="100" step="0.1" style={inputStyle} />
                </div>
              </div>

              <div style={{ display: 'grid', gridTemplateColumns: 'repeat(2, 1fr)', gap: 'var(--spacing-sm)', marginBottom: 'var(--spacing-md)' }}>
                <div style={{ padding: 'var(--spacing-sm) var(--spacing-md)', background: 'var(--bg-cream)', borderRadius: 'var(--radius-md)', border: '1px solid var(--text-muted)' }}>
                  <div style={{ fontSize: 'var(--font-size-xs)', fontWeight: 600, color: 'var(--text-secondary)', marginBottom: '2px', textTransform: 'uppercase', letterSpacing: 'var(--letter-spacing-wide)' }}>
                    Cost of Employee Turnover
                  </div>
                  <div id="corp-turnover-cost-value" style={{ fontSize: 'var(--font-size-h4)', fontWeight: 700, color: 'var(--primary-navy)' }}>
                    $300,000
                  </div>
                </div>

                <div style={{ padding: 'var(--spacing-sm) var(--spacing-md)', background: 'var(--bg-cream)', borderRadius: 'var(--radius-md)', border: '1px solid var(--text-muted)' }}>
                  <div style={{ fontSize: 'var(--font-size-xs)', fontWeight: 600, color: 'var(--text-secondary)', marginBottom: '2px', textTransform: 'uppercase', letterSpacing: 'var(--letter-spacing-wide)' }}>
                    Savings with Mentor Collective
                  </div>
                  <div id="corp-savings-value" style={{ fontSize: 'var(--font-size-h4)', fontWeight: 700, color: 'var(--primary-navy)' }}>
                    $90,000
                  </div>
                </div>
              </div>

              <div style={{ fontSize: 'var(--font-size-xs)', color: 'var(--text-muted)', fontStyle: 'italic', marginBottom: 'var(--spacing-md)' }}>
                *Average cost of turnover = 60% of annual salary
              </div>
            </div>

            <div style={{ marginTop: 'var(--spacing-md)', textAlign: 'center', fontSize: 'var(--font-size-xs)', color: 'var(--text-muted)', fontStyle: 'italic' }}>
              *Estimates based on your inputs and industry benchmarks
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
