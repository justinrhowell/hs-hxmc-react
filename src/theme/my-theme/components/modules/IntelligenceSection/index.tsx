import React from 'react';
import {
  ModuleFields,
  TextField,
} from '@hubspot/cms-components/fields';
import { ScrollAnimationScript } from '../../shared/ScrollAnimationScript';

export function Component({ fieldValues }: any) {
  const features = [
    {
      title: fieldValues.feature1_title || 'Real-Time Analytics',
      description: fieldValues.feature1_description || 'Monitor program health at a glance',
    },
    {
      title: fieldValues.feature2_title || 'Configurable Reporting',
      description: fieldValues.feature2_description || 'Generate custom reports for different stakeholders',
    },
    {
      title: fieldValues.feature3_title || 'Early Alerts',
      description: fieldValues.feature3_description || 'Surface struggling mentorships before they fail',
    },
    {
      title: fieldValues.feature4_title || 'Outcome Measurement',
      description: fieldValues.feature4_description || 'Connect mentorship activity directly to institutional outcomes',
    },
  ];

  const stats = [
    { value: fieldValues.stat1_value || '+6%', label: fieldValues.stat1_label || 'retention improvement' },
    { value: fieldValues.stat2_value || '+8-19%', label: fieldValues.stat2_label || 'increase in belonging' },
    { value: fieldValues.stat3_value || '+30%', label: fieldValues.stat3_label || 'career confidence boost' },
  ];

  return (
    <>
    <ScrollAnimationScript />
    <section id="intelligence" className="scroll-animate" style={{ padding: '100px 20px', background: 'var(--bg-white)' }}>
      <div style={{ maxWidth: '1200px', margin: '0 auto' }}>
        <h2 style={{ fontSize: 'var(--font-size-h2)', fontWeight: 500, marginBottom: 'var(--spacing-sm)', color: 'var(--text-coral)', fontFamily: 'var(--font-headline)' }}>
          {fieldValues.heading || 'The Intelligence'}
        </h2>
        <p style={{ fontSize: 'var(--font-size-h3)', fontWeight: 500, color: 'var(--text-primary)', lineHeight: 'var(--line-height-tight)', marginBottom: 'var(--spacing-lg)', maxWidth: '900px', fontFamily: 'var(--font-headline)' }}>
          {fieldValues.subtitle || 'Transform human connection into measurable outcomes.'}
        </p>

        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))', gap: 'var(--spacing-xl)', marginBottom: 'var(--spacing-2xl)' }}>
          {features.map((feature, index) => (
            <div key={index} style={{ background: 'white', padding: 'var(--spacing-xl)', borderRadius: 'var(--radius-lg)', border: '2px solid rgba(239, 71, 111, 0.1)' }}>
              <h3 style={{ fontSize: 'var(--font-size-xl)', fontWeight: 500, marginBottom: 'var(--spacing-md)', color: 'var(--color-primary)' }}>{feature.title}</h3>
              <p style={{ fontSize: 'var(--font-size-base)', lineHeight: 1.7, color: 'var(--text-secondary)' }}>{feature.description}</p>
            </div>
          ))}
        </div>

        <div style={{ background: 'white', padding: 'var(--spacing-2xl)', borderRadius: 'var(--radius-lg)' }}>
          <p style={{ fontSize: 'var(--font-size-xl)', fontWeight: 600, textAlign: 'center', marginBottom: 'var(--spacing-xl)', color: 'var(--text-primary)' }}>
            {fieldValues.stats_heading}
          </p>
          <div style={{ display: 'flex', gap: 'var(--spacing-2xl)', justifyContent: 'center', flexWrap: 'wrap' }}>
            {stats.map((stat, index) => (
              <div key={index} style={{ textAlign: 'center' }}>
                <div style={{ fontSize: 'var(--font-size-4xl)', fontWeight: 800, color: 'var(--color-primary)', marginBottom: 'var(--spacing-xs)' }}>{stat.value}</div>
                <div style={{ fontSize: 'var(--font-size-base)', color: 'var(--text-secondary)', fontWeight: 500 }}>{stat.label}</div>
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
