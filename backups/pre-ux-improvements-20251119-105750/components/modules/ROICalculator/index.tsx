import React from 'react';
import {
  ModuleFields,
  TextField,
} from '@hubspot/cms-components/fields';
import { useScrollAnimation, animationStyles } from '../useScrollAnimation';

export function Component({ fieldValues }: any) {
  const { elementRef, isVisible } = useScrollAnimation({ threshold: 0.2 });

  return (
    <>
      <script dangerouslySetInnerHTML={{__html: `
        (function() {
          function initROICalculator() {
            const participantsInput = document.getElementById('total-participants');
            const attritionInput = document.getElementById('attrition-rate');
            const costInput = document.getElementById('cost-per-person');
            const targetInput = document.getElementById('target-retention');
            const roiValueElement = document.getElementById('roi-value');

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
              const participants = parseInt((participantsInput.value || '').replace(/[^0-9]/g, '')) || 0;
              const attrition = parseFloat(attritionInput.value) || 0;
              const cost = parseInt((costInput.value || '').replace(/[^0-9]/g, '')) || 0;
              const target = parseFloat(targetInput.value) || 0;

              // Calculate ROI: Participants × (Target Retention Increase / 100) × Cost per Person
              const roi = Math.round(participants * (target / 100) * cost);

              if (roiValueElement) {
                roiValueElement.textContent = formatCurrency(roi);
              }
            }

            function handleParticipantsInput(e) {
              let value = e.target.value.replace(/[^0-9]/g, '');
              if (value) {
                e.target.value = formatNumber(parseInt(value));
              }
              calculateROI();
            }

            function handleCostInput(e) {
              let value = e.target.value.replace(/[^0-9]/g, '');
              if (value) {
                e.target.value = formatCurrency(parseInt(value));
              }
              calculateROI();
            }

            if (participantsInput) {
              participantsInput.addEventListener('input', handleParticipantsInput);
            }
            if (attritionInput) {
              attritionInput.addEventListener('input', calculateROI);
            }
            if (costInput) {
              costInput.addEventListener('input', handleCostInput);
            }
            if (targetInput) {
              targetInput.addEventListener('input', calculateROI);
            }

            // Tooltip functionality
            const tooltips = document.querySelectorAll('.tooltip-trigger');
            tooltips.forEach(trigger => {
              const content = trigger.querySelector('.tooltip-content');
              if (content) {
                trigger.addEventListener('mouseenter', function() {
                  content.style.opacity = '1';
                  content.style.visibility = 'visible';
                });
                trigger.addEventListener('mouseleave', function() {
                  content.style.opacity = '0';
                  content.style.visibility = 'hidden';
                });
              }
            });

            // Initial calculation
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
        className="impact-section"
        style={{
          padding: '60px 20px',
          background: '#f9fafb',
          ...animationStyles.fadeInUp(isVisible),
        }}
        aria-labelledby="roi-heading"
      >
        <div className="container">
          <div
            className="impact-content"
            style={{
              display: 'grid',
              gridTemplateColumns: '1fr 1fr',
              gap: '4rem',
              alignItems: 'center',
              maxWidth: '1200px',
              margin: '0 auto'
            }}
          >
            <div>
              <h2
                id="roi-heading"
                style={{
                  fontSize: '2.5rem',
                  lineHeight: 1.2,
                  marginBottom: '1.5rem',
                  fontFamily: 'var(--font-headline)'
                }}
              >
                Measure What <span className="text-gradient">Matters</span>
              </h2>
              <p style={{
                fontSize: '1.05rem',
                lineHeight: 1.7,
                color: '#6B7280',
                marginBottom: '2rem'
              }}>
                Estimate how much mentorship could save your organization.
              </p>
              <a
                href="#"
                style={{
                  color: 'var(--primary-blue)',
                  textDecoration: 'none',
                  fontSize: '1rem',
                  fontWeight: 600
                }}
                aria-label="Learn more about ROI calculation"
              >
                Learn more →
              </a>
            </div>

            <div
              className="impact-stats"
              style={{
                background: 'white',
                padding: '2rem',
                borderRadius: '16px',
                boxShadow: '0 4px 20px rgba(0, 0, 0, 0.08)'
              }}
              role="form"
              aria-label="ROI Calculator"
            >
              {/* Total Participants */}
              <div style={{ marginBottom: '1rem' }}>
                <label
                  htmlFor="total-participants"
                  style={{
                    fontSize: '0.875rem',
                    color: '#1a1a1a',
                    marginBottom: '0.5rem',
                    display: 'flex',
                    alignItems: 'center',
                    gap: '0.5rem',
                    fontWeight: 600,
                  }}
                >
                  Total Participants
                  <span className="tooltip-trigger" style={{ position: 'relative', display: 'inline-flex' }}>
                    <svg width="16" height="16" viewBox="0 0 16 16" fill="none" style={{ cursor: 'help' }}>
                      <circle cx="8" cy="8" r="7" stroke="#999" strokeWidth="1.5"/>
                      <path d="M8 11.5V8M8 5.5H8.005" stroke="#999" strokeWidth="1.5" strokeLinecap="round"/>
                    </svg>
                    <span className="tooltip-content" style={{
                      position: 'absolute',
                      bottom: '100%',
                      left: '50%',
                      transform: 'translateX(-50%)',
                      marginBottom: '8px',
                      padding: '8px 12px',
                      background: '#333',
                      color: 'white',
                      fontSize: '0.75rem',
                      borderRadius: '6px',
                      whiteSpace: 'nowrap',
                      opacity: 0,
                      visibility: 'hidden',
                      transition: 'opacity 0.2s, visibility 0.2s',
                      pointerEvents: 'none',
                      zIndex: 1000,
                    }}>
                      Students, employees, or members in your program
                    </span>
                  </span>
                </label>
                <input
                  id="total-participants"
                  type="text"
                  defaultValue="1,000"
                  placeholder="Enter Number"
                  style={{
                    fontSize: '1.25rem',
                    fontWeight: 700,
                    color: 'var(--primary-blue)',
                    border: '2px solid #e5e7eb',
                    padding: '0.625rem 0.75rem',
                    borderRadius: '8px',
                    width: '100%',
                    transition: 'border-color 0.2s ease',
                  }}
                />
              </div>

              {/* Attrition Rate */}
              <div style={{ marginBottom: '1rem' }}>
                <label
                  htmlFor="attrition-rate"
                  style={{
                    fontSize: '0.875rem',
                    color: '#1a1a1a',
                    marginBottom: '0.5rem',
                    display: 'flex',
                    alignItems: 'center',
                    gap: '0.5rem',
                    fontWeight: 600,
                  }}
                >
                  Attrition Rate (%)
                  <span className="tooltip-trigger" style={{ position: 'relative', display: 'inline-flex' }}>
                    <svg width="16" height="16" viewBox="0 0 16 16" fill="none" style={{ cursor: 'help' }}>
                      <circle cx="8" cy="8" r="7" stroke="#999" strokeWidth="1.5"/>
                      <path d="M8 11.5V8M8 5.5H8.005" stroke="#999" strokeWidth="1.5" strokeLinecap="round"/>
                    </svg>
                    <span className="tooltip-content" style={{
                      position: 'absolute',
                      bottom: '100%',
                      left: '50%',
                      transform: 'translateX(-50%)',
                      marginBottom: '8px',
                      padding: '8px 12px',
                      background: '#333',
                      color: 'white',
                      fontSize: '0.75rem',
                      borderRadius: '6px',
                      whiteSpace: 'nowrap',
                      opacity: 0,
                      visibility: 'hidden',
                      transition: 'opacity 0.2s, visibility 0.2s',
                      pointerEvents: 'none',
                      zIndex: 1000,
                    }}>
                      Annual dropout or turnover rate
                    </span>
                  </span>
                </label>
                <input
                  id="attrition-rate"
                  type="number"
                  defaultValue="20"
                  placeholder="Enter %"
                  min="0"
                  max="100"
                  step="0.1"
                  style={{
                    fontSize: '1.25rem',
                    fontWeight: 700,
                    color: 'var(--primary-blue)',
                    border: '2px solid #e5e7eb',
                    padding: '0.625rem 0.75rem',
                    borderRadius: '8px',
                    width: '100%',
                    transition: 'border-color 0.2s ease',
                  }}
                />
              </div>

              {/* Cost per Person */}
              <div style={{ marginBottom: '1rem' }}>
                <label
                  htmlFor="cost-per-person"
                  style={{
                    fontSize: '0.875rem',
                    color: '#1a1a1a',
                    marginBottom: '0.5rem',
                    display: 'flex',
                    alignItems: 'center',
                    gap: '0.5rem',
                    fontWeight: 600,
                  }}
                >
                  Cost Per Loss
                  <span className="tooltip-trigger" style={{ position: 'relative', display: 'inline-flex' }}>
                    <svg width="16" height="16" viewBox="0 0 16 16" fill="none" style={{ cursor: 'help' }}>
                      <circle cx="8" cy="8" r="7" stroke="#999" strokeWidth="1.5"/>
                      <path d="M8 11.5V8M8 5.5H8.005" stroke="#999" strokeWidth="1.5" strokeLinecap="round"/>
                    </svg>
                    <span className="tooltip-content" style={{
                      position: 'absolute',
                      bottom: '100%',
                      left: '50%',
                      transform: 'translateX(-50%)',
                      marginBottom: '8px',
                      padding: '8px 12px',
                      background: '#333',
                      color: 'white',
                      fontSize: '0.75rem',
                      borderRadius: '6px',
                      whiteSpace: 'nowrap',
                      opacity: 0,
                      visibility: 'hidden',
                      transition: 'opacity 0.2s, visibility 0.2s',
                      pointerEvents: 'none',
                      zIndex: 1000,
                    }}>
                      Lost tuition, recruitment costs, etc.
                    </span>
                  </span>
                </label>
                <input
                  id="cost-per-person"
                  type="text"
                  defaultValue="$40,000"
                  placeholder="Enter Amount"
                  style={{
                    fontSize: '1.25rem',
                    fontWeight: 700,
                    color: 'var(--primary-blue)',
                    border: '2px solid #e5e7eb',
                    padding: '0.625rem 0.75rem',
                    borderRadius: '8px',
                    width: '100%',
                    transition: 'border-color 0.2s ease',
                  }}
                />
              </div>

              {/* Target Retention Increase */}
              <div style={{ marginBottom: '1.5rem' }}>
                <label
                  htmlFor="target-retention"
                  style={{
                    fontSize: '0.875rem',
                    color: '#1a1a1a',
                    marginBottom: '0.5rem',
                    display: 'flex',
                    alignItems: 'center',
                    gap: '0.5rem',
                    fontWeight: 600,
                  }}
                >
                  Target Increase (%)
                  <span className="tooltip-trigger" style={{ position: 'relative', display: 'inline-flex' }}>
                    <svg width="16" height="16" viewBox="0 0 16 16" fill="none" style={{ cursor: 'help' }}>
                      <circle cx="8" cy="8" r="7" stroke="#999" strokeWidth="1.5"/>
                      <path d="M8 11.5V8M8 5.5H8.005" stroke="#999" strokeWidth="1.5" strokeLinecap="round"/>
                    </svg>
                    <span className="tooltip-content" style={{
                      position: 'absolute',
                      bottom: '100%',
                      left: '50%',
                      transform: 'translateX(-50%)',
                      marginBottom: '8px',
                      padding: '8px 12px',
                      background: '#333',
                      color: 'white',
                      fontSize: '0.75rem',
                      borderRadius: '6px',
                      whiteSpace: 'nowrap',
                      opacity: 0,
                      visibility: 'hidden',
                      transition: 'opacity 0.2s, visibility 0.2s',
                      pointerEvents: 'none',
                      zIndex: 1000,
                    }}>
                      Expected retention improvement
                    </span>
                  </span>
                </label>
                <input
                  id="target-retention"
                  type="number"
                  defaultValue="10"
                  placeholder="Enter %"
                  min="0"
                  max="100"
                  step="0.1"
                  style={{
                    fontSize: '1.25rem',
                    fontWeight: 700,
                    color: 'var(--primary-blue)',
                    border: '2px solid #e5e7eb',
                    padding: '0.625rem 0.75rem',
                    borderRadius: '8px',
                    width: '100%',
                    transition: 'border-color 0.2s ease',
                  }}
                />
              </div>

              {/* ROI Result */}
              <div
                className="impact-stat-row highlight-row"
                style={{
                  marginTop: '0.5rem',
                  padding: '1.5rem',
                  background: 'linear-gradient(135deg, rgba(255, 251, 248, 0.8) 0%, rgba(255, 240, 245, 0.8) 100%)',
                  borderRadius: '12px',
                  border: '2px solid rgba(255, 75, 126, 0.15)'
                }}
              >
                <div
                  className="impact-stat-label"
                  style={{
                    fontSize: '0.875rem',
                    fontWeight: 600,
                    color: '#666',
                    marginBottom: '0.5rem',
                    display: 'flex',
                    alignItems: 'center',
                    gap: '0.5rem'
                  }}
                >
                  <span className="roi-icon" role="img" aria-label="Money">💰</span>
                  Estimated ROI Value
                </div>
                <div
                  id="roi-value"
                  className="impact-stat-value"
                  style={{
                    fontSize: '2rem',
                    fontWeight: 800,
                    background: 'var(--gradient-pink)',
                    WebkitBackgroundClip: 'text',
                    WebkitTextFillColor: 'transparent'
                  }}
                  aria-live="polite"
                  aria-atomic="true"
                >
                  $400,000
                </div>
              </div>

              {/* Disclaimer */}
              <div
                className="impact-disclaimer"
                style={{
                  marginTop: '1rem',
                  padding: '0.75rem',
                  textAlign: 'center',
                  fontSize: '0.75rem',
                  color: '#999',
                  fontStyle: 'italic',
                }}
              >
                *Estimates based on your inputs and industry benchmarks
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

export const fields = (
  <ModuleFields>
    <TextField
      name="heading"
      label="Section Heading"
      default="Measure What Matters"
    />
  </ModuleFields>
);

export const meta = {
  label: 'ROI Calculator',
};
