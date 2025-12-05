import React from 'react';
import {
  ModuleFields,
  TextField,
} from '@hubspot/cms-components/fields';
import { ScrollAnimationScript } from '../../shared/ScrollAnimationScript';
import revealIcon from '../../../assets/reveal-icon.svg';
import sparkIcon from '../../../assets/spark-icon.svg';
import scaleIcon from '../../../assets/scale-icon.svg';
import fuelIcon from '../../../assets/fuel-icon.svg';

export function Component({ fieldValues }: any) {
  const features = [
    {
      icon: revealIcon,
      title: fieldValues.feature1_title || 'Real-Time Analytics',
      description: fieldValues.feature1_description || 'Monitor program health at a glance with live dashboards and instant visibility into engagement metrics.',
    },
    {
      icon: sparkIcon,
      title: fieldValues.feature2_title || 'Configurable Reporting',
      description: fieldValues.feature2_description || 'Generate custom reports for different stakeholders with flexible data exports and visualizations.',
    },
    {
      icon: scaleIcon,
      title: fieldValues.feature3_title || 'Early Alerts',
      description: fieldValues.feature3_description || 'Surface struggling mentorships before they fail with AI-powered risk detection and intervention prompts.',
    },
    {
      icon: fuelIcon,
      title: fieldValues.feature4_title || 'Outcome Measurement',
      description: fieldValues.feature4_description || 'Connect mentorship activity directly to institutional outcomes with ROI tracking and impact reports.',
    },
  ];

  const stats = [
    { value: fieldValues.stat1_value || '+6%', label: fieldValues.stat1_label || 'retention improvement' },
    { value: fieldValues.stat2_value || '+8-19%', label: fieldValues.stat2_label || 'increase in belonging' },
    { value: fieldValues.stat3_value || '+30%', label: fieldValues.stat3_label || 'career confidence boost' },
  ];

  return (
    <>
    <style>{`
      @media (max-width: 768px) {
        .intelligence-stats-grid {
          grid-template-columns: 1fr !important;
        }
        .intelligence-features-grid {
          grid-template-columns: 1fr !important;
        }
      }
    `}</style>
    <ScrollAnimationScript />
    <section
      id="intelligence"
      className="scroll-animate"
      style={{
        padding: 'var(--section-padding-lg) var(--spacing-lg)',
        background: 'linear-gradient(180deg, #1a1a2e 0%, #16213e 100%)',
        position: 'relative',
        overflow: 'hidden',
      }}
    >
      <div style={{ maxWidth: 'var(--max-width-xl)', margin: '0 auto' }}>
        <div style={{ textAlign: 'center', marginBottom: 'var(--spacing-2xl)' }}>
          <h2 style={{
            fontSize: 'var(--font-size-h2)',
            fontWeight: 500,
            marginBottom: 'var(--spacing-sm)',
            color: 'var(--text-white)',
            fontFamily: 'var(--font-headline)',
            lineHeight: 'var(--line-height-tight)',
            letterSpacing: 'var(--letter-spacing-tight)',
          }}>
            {fieldValues.heading || 'The Intelligence'}
          </h2>
          <p style={{
            fontSize: 'var(--font-size-body-lg)',
            color: 'rgba(255, 255, 255, 0.8)',
            lineHeight: 'var(--line-height-relaxed)',
            maxWidth: 'var(--max-width-prose)',
            margin: '0 auto',
          }}>
            {fieldValues.subtitle || 'Transform human connection into measurable outcomes.'}
          </p>
        </div>

        <div
          className="intelligence-features-grid"
          style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(2, 1fr)',
            gap: 'var(--spacing-xl)',
            marginBottom: 'var(--spacing-2xl)',
            maxWidth: '1100px',
            margin: '0 auto var(--spacing-2xl)',
          }}
        >
          {features.map((feature, index) => (
            <div
              key={index}
              className="feature-card scroll-animate"
              data-delay={index * 100}
              style={{
                background: 'linear-gradient(135deg, rgba(255, 255, 255, 0.95) 0%, rgba(255, 251, 248, 0.95) 100%)',
                padding: 'var(--card-padding-lg)',
                borderRadius: 'var(--radius-xl)',
                boxShadow: 'var(--shadow-lg)',
                border: '1px solid var(--border-light)',
                transition: 'var(--transition-bounce)',
                position: 'relative',
                overflow: 'hidden',
              }}
            >
              <div style={{
                marginBottom: 'var(--spacing-lg)',
                height: '60px',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'flex-start',
              }}>
                <img
                  src={feature.icon}
                  alt={`${feature.title} icon`}
                  style={{
                    height: '100%',
                    width: 'auto',
                    filter: 'drop-shadow(0 4px 8px rgba(239, 71, 111, 0.15))'
                  }}
                />
              </div>
              <h3 style={{
                fontSize: 'var(--font-size-h3)',
                fontWeight: 500,
                marginBottom: 'var(--spacing-sm)',
                color: 'var(--text-primary)',
                fontFamily: 'var(--font-headline)',
                lineHeight: 'var(--line-height-normal)',
              }}>
                {feature.title}
              </h3>
              <p style={{
                fontSize: 'var(--font-size-body)',
                lineHeight: 'var(--line-height-relaxed)',
                color: 'var(--text-muted)',
                fontFamily: 'var(--font-body)',
                margin: 0,
              }}>
                {feature.description}
              </p>
            </div>
          ))}
        </div>

        <div style={{
          padding: 'var(--spacing-2xl) 0',
          marginTop: 'var(--spacing-xl)',
        }}>
          <p style={{
            fontSize: 'var(--font-size-h3)',
            fontWeight: 500,
            textAlign: 'center',
            marginBottom: 'var(--spacing-xl)',
            color: 'var(--text-white)',
            fontFamily: 'var(--font-headline)',
          }}>
            {fieldValues.stats_heading || 'Measurable Impact Across Key Outcomes'}
          </p>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: 'var(--spacing-lg)' }} className="intelligence-stats-grid">
            {stats.map((stat, index) => (
              <div
                key={index}
                className="stat-card scroll-animate"
                data-delay={index * 100}
                style={{
                  padding: 'var(--card-padding)',
                  background: 'rgba(255, 255, 255, 0.08)',
                  borderRadius: 'var(--radius-xl)',
                  border: '1px solid rgba(255, 255, 255, 0.15)',
                  boxShadow: '0 8px 32px rgba(0, 0, 0, 0.2)',
                  transition: 'var(--transition-smooth)',
                  position: 'relative',
                  overflow: 'hidden',
                  backdropFilter: 'blur(10px)',
                  textAlign: 'center',
                }}
              >
                <div style={{
                  position: 'absolute',
                  top: '-50%',
                  right: '-20%',
                  width: '150px',
                  height: '150px',
                  background: 'radial-gradient(circle, rgba(239, 71, 111, 0.15) 0%, transparent 70%)',
                  borderRadius: 'var(--radius-circle)'
                }} />
                <div style={{
                  fontSize: 'var(--font-size-h1)',
                  fontWeight: 800,
                  background: 'var(--gradient-coral-peach)',
                  WebkitBackgroundClip: 'text',
                  WebkitTextFillColor: 'transparent',
                  backgroundClip: 'text',
                  letterSpacing: 'var(--letter-spacing-tight)',
                  marginBottom: 'var(--spacing-sm)',
                  position: 'relative',
                  zIndex: 'var(--z-base)',
                  fontFamily: 'var(--font-headline)',
                }}>
                  {stat.value}
                </div>
                <div style={{
                  fontSize: 'var(--font-size-body)',
                  color: 'rgba(255, 255, 255, 0.9)',
                  fontWeight: 500,
                  lineHeight: 'var(--line-height-normal)',
                  position: 'relative',
                  zIndex: 'var(--z-base)',
                }}>
                  {stat.label}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
    </>
  );
}

export const fields = (
  <ModuleFields>
    <TextField name="heading" label="Section Heading" default="The Intelligence" />
    <TextField name="subtitle" label="Subtitle" default="Transform human connection into measurable outcomes" />
    <TextField name="feature1_title" label="Feature 1 Title" default="Real-Time Analytics" />
    <TextField name="feature1_description" label="Feature 1 Description" default="Monitor program health at a glance" />
    <TextField name="feature2_title" label="Feature 2 Title" default="Configurable Reporting" />
    <TextField name="feature2_description" label="Feature 2 Description" default="Generate custom reports for different stakeholders" />
    <TextField name="feature3_title" label="Feature 3 Title" default="Early Alerts" />
    <TextField name="feature3_description" label="Feature 3 Description" default="Surface struggling mentorships before they fail" />
    <TextField name="feature4_title" label="Feature 4 Title" default="Outcome Measurement" />
    <TextField name="feature4_description" label="Feature 4 Description" default="Connect mentorship activity directly to institutional outcomes" />
    <TextField name="stats_heading" label="Stats Heading" default="Measurable Impact Across Key Outcomes" />
    <TextField name="stat1_value" label="Stat 1 Value" default="+6%" />
    <TextField name="stat1_label" label="Stat 1 Label" default="retention improvement" />
    <TextField name="stat2_value" label="Stat 2 Value" default="+8-19%" />
    <TextField name="stat2_label" label="Stat 2 Label" default="increase in belonging" />
    <TextField name="stat3_value" label="Stat 3 Value" default="+30%" />
    <TextField name="stat3_label" label="Stat 3 Label" default="career confidence boost" />
  </ModuleFields>
);

export const meta = {
  label: 'Intelligence Section',
};
