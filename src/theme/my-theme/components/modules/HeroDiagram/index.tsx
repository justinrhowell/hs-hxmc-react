import React, { useState, useEffect } from 'react';
import {
  ModuleFields,
  TextField,
} from '@hubspot/cms-components/fields';
import heroImg01 from '../../../assets/hero-img-01.png';
import heroImg02 from '../../../assets/hero-img-02.png';
import heroImg03 from '../../../assets/hero-img-03.png';
import { DemoModal } from '../../shared/DemoModal';
import { useScrollAnimation, animationStyles } from '../../hooks/useScrollAnimation';

interface NodeData {
  label: string;
  shortLabel: string;
  tooltipTitle: string;
  tooltipStat: string;
  tooltipLabel: string;
  tooltipDesc: string;
  fullDescription: string;
  caseStudy: string;
  position: React.CSSProperties;
  tooltipPosition: string;
}

interface MentorProfile {
  name: string;
  role: string;
  image: string;
  bio: string;
  expertise: string[];
  stats: { label: string; value: string }[];
}

export function Component({ fieldValues }: any) {
  const [isDemoModalOpen, setIsDemoModalOpen] = useState(false);
  const [expandedNode, setExpandedNode] = useState<string | null>(null);
  const [selectedMentor, setSelectedMentor] = useState<MentorProfile | null>(null);
  const [hoveredAvatar, setHoveredAvatar] = useState<number | null>(null);
  const [prefersReducedMotion, setPrefersReducedMotion] = useState(false);
  const [isMobile, setIsMobile] = useState(false);
  const { elementRef, isVisible } = useScrollAnimation({ threshold: 0.1 });

  const description = fieldValues.description || "Mentorship reinvented as scalable AI infrastructure. Foster human connection, enhance durable skills, and drive improved retention and career outcomes across your educational, workforce, and employer ecosystems.";

  // Check for reduced motion preference
  useEffect(() => {
    const mediaQuery = window.matchMedia('(prefers-reduced-motion: reduce)');
    setPrefersReducedMotion(mediaQuery.matches);

    const handleChange = () => setPrefersReducedMotion(mediaQuery.matches);
    mediaQuery.addEventListener('change', handleChange);
    return () => mediaQuery.removeEventListener('change', handleChange);
  }, []);

  // Check for mobile viewport
  useEffect(() => {
    const checkMobile = () => setIsMobile(window.innerWidth <= 768);
    checkMobile();
    window.addEventListener('resize', checkMobile);
    return () => window.removeEventListener('resize', checkMobile);
  }, []);

  // Define node positions - asymmetrical constellation layout
  const nodePositions: Record<string, { position: React.CSSProperties; tooltipPosition: string }> = {
    learners: {
      position: { top: '8%', left: '35%', transform: 'translate(-50%, -50%)' },
      tooltipPosition: 'bottom'
    },
    employers: {
      position: { right: '5%', top: '35%', transform: 'translate(50%, -50%)' },
      tooltipPosition: 'left'
    },
    organizations: {
      position: { bottom: '15%', left: '60%', transform: 'translate(-50%, 50%)' },
      tooltipPosition: 'top'
    },
    partnerships: {
      position: { left: '8%', top: '60%', transform: 'translate(-50%, -50%)' },
      tooltipPosition: 'right'
    }
  };

  // Use custom nodes if provided, otherwise fall back to defaults
  const customNodes = fieldValues.nodes || [];

  const nodeData: Record<string, NodeData> = customNodes.length === 4 ? {
    learners: {
      label: customNodes[0].node_label,
      shortLabel: customNodes[0].short_label,
      tooltipTitle: customNodes[0].tooltipTitle,
      tooltipStat: customNodes[0].tooltipStat,
      tooltipLabel: customNodes[0].tooltipLabel,
      tooltipDesc: customNodes[0].tooltipDesc,
      fullDescription: customNodes[0].fullDescription,
      caseStudy: customNodes[0].caseStudy,
      ...nodePositions.learners
    },
    employers: {
      label: customNodes[1].node_label,
      shortLabel: customNodes[1].short_label,
      tooltipTitle: customNodes[1].tooltipTitle,
      tooltipStat: customNodes[1].tooltipStat,
      tooltipLabel: customNodes[1].tooltipLabel,
      tooltipDesc: customNodes[1].tooltipDesc,
      fullDescription: customNodes[1].fullDescription,
      caseStudy: customNodes[1].caseStudy,
      ...nodePositions.employers
    },
    organizations: {
      label: customNodes[2].node_label,
      shortLabel: customNodes[2].short_label,
      tooltipTitle: customNodes[2].tooltipTitle,
      tooltipStat: customNodes[2].tooltipStat,
      tooltipLabel: customNodes[2].tooltipLabel,
      tooltipDesc: customNodes[2].tooltipDesc,
      fullDescription: customNodes[2].fullDescription,
      caseStudy: customNodes[2].caseStudy,
      ...nodePositions.organizations
    },
    partnerships: {
      label: customNodes[3].node_label,
      shortLabel: customNodes[3].short_label,
      tooltipTitle: customNodes[3].tooltipTitle,
      tooltipStat: customNodes[3].tooltipStat,
      tooltipLabel: customNodes[3].tooltipLabel,
      tooltipDesc: customNodes[3].tooltipDesc,
      fullDescription: customNodes[3].fullDescription,
      caseStudy: customNodes[3].caseStudy,
      ...nodePositions.partnerships
    }
  } : {
    learners: {
      label: 'Students & Early Talent',
      shortLabel: 'Students',
      tooltipTitle: 'Students & Early Talent',
      tooltipStat: '2.5x',
      tooltipLabel: 'more likely to feel career-ready',
      tooltipDesc: 'Students, upskillers, and early talent build the durable skills and social capital needed to unlock career mobility.',
      fullDescription: '2.5x more likely to feel career-ready and develop the durable skills employers need. 21% increase in comfort asking established professionals for help, demonstrating increased social capital for mentees.',
      caseStudy: 'Students paired with mentors report significantly higher career confidence and networking abilities.',
      ...nodePositions.learners
    },
    employers: {
      label: 'Employers',
      shortLabel: 'Employers',
      tooltipTitle: 'Employers',
      tooltipStat: '+42%',
      tooltipLabel: 'increase in intern-to-full-time conversion',
      tooltipDesc: 'Employers leverage mentorship to boost retention and build stronger teams with proven conversion rates.',
      fullDescription: 'Reduced early attrition and increased engagement among underrepresented talent. Mentorship programs drive measurable improvements in talent retention and team cohesion.',
      caseStudy: 'Partner employers see 42% increase in intern-to-full-time conversion rates.',
      ...nodePositions.employers
    },
    organizations: {
      label: 'Organizations',
      shortLabel: 'Organizations',
      tooltipTitle: 'Organizations',
      tooltipStat: '+8-19%',
      tooltipLabel: 'boost in sense of belonging',
      tooltipDesc: 'Organizations use our platform to improve belonging, retention, and career readiness.',
      fullDescription: '2.5x more likely to feel career-ready. +8-19% boost in sense of belonging across program participants.',
      caseStudy: 'Partner institutions report significant improvements in student retention and belonging metrics.',
      ...nodePositions.organizations
    },
    partnerships: {
      label: 'Strategic Partnerships',
      shortLabel: 'Partnerships',
      tooltipTitle: 'Strategic Partnerships',
      tooltipStat: '90-92%',
      tooltipLabel: 'retention (vs. 64% national avg)',
      tooltipDesc: 'Ecosystem partners embed mentorship directly into certification, training and regional workforce pipelines.',
      fullDescription: 'Drive 90–92% retention (vs. 64% national avg). +$20K in savings per retained teacher for partner districts.',
      caseStudy: 'Strategic partners achieve retention rates far exceeding national averages through embedded mentorship.',
      ...nodePositions.partnerships
    }
  };

  // Map mentor image keys to imported images
  const mentorImageMap: Record<string, string> = {
    heroImg01: heroImg01,
    heroImg02: heroImg02,
    heroImg03: heroImg03,
  };

  // Use custom mentors if provided, otherwise fall back to defaults
  const customMentors = fieldValues.mentors || [];

  const mentorProfiles: MentorProfile[] = customMentors.length === 3 ? customMentors.map((m: any) => ({
    name: m.mentor_name,
    role: m.role,
    image: mentorImageMap[m.image_key] || heroImg01,
    bio: m.bio,
    expertise: m.expertise ? m.expertise.split(',').map((s: string) => s.trim()) : [],
    stats: [
      { label: m.stat1_label || 'Mentees', value: m.stat1_value || '0' },
      { label: m.stat2_label || 'Years Experience', value: m.stat2_value || '0' },
      { label: m.stat3_label || 'Success Rate', value: m.stat3_value || '0%' }
    ]
  })) : [
    {
      name: 'Sarah Chen',
      role: 'Career Mentor',
      image: heroImg01,
      bio: 'Technology executive with 15 years of experience helping early-career professionals navigate the tech industry.',
      expertise: ['Career Planning', 'Leadership', 'Tech Industry'],
      stats: [
        { label: 'Mentees', value: '47' },
        { label: 'Years Experience', value: '15' },
        { label: 'Success Rate', value: '94%' }
      ]
    },
    {
      name: 'Maya Rodriguez',
      role: 'Student Success',
      image: heroImg02,
      bio: 'Recent graduate who successfully navigated career transitions with mentorship. Now helping others find their path.',
      expertise: ['Student Life', 'Career Transitions', 'Networking'],
      stats: [
        { label: 'Mentees', value: '23' },
        { label: 'Career Changes', value: '3' },
        { label: 'Success Rate', value: '91%' }
      ]
    },
    {
      name: 'James Park',
      role: 'Industry Professional',
      image: heroImg03,
      bio: 'Senior manager at Fortune 500 company, passionate about developing the next generation of talent.',
      expertise: ['Business Strategy', 'Management', 'Professional Development'],
      stats: [
        { label: 'Mentees', value: '62' },
        { label: 'Years Experience', value: '20' },
        { label: 'Success Rate', value: '96%' }
      ]
    }
  ];

  const getTooltipStyles = (tooltipPosition: string, isExpanded: boolean): React.CSSProperties => {
    const base: React.CSSProperties = {
      position: 'absolute',
      background: 'var(--bg-white)',
      color: 'var(--text-primary)',
      padding: isExpanded ? 'var(--card-padding)' : 'var(--spacing-md)',
      borderRadius: 'var(--radius-lg)',
      boxShadow: 'var(--shadow-hover)',
      opacity: 0,
      pointerEvents: 'none',
      transition: 'var(--transition-medium)',
      zIndex: 300,
      width: isExpanded ? '400px' : '280px',
      maxWidth: '90vw',
      maxHeight: isExpanded ? '500px' : 'auto',
      overflow: isExpanded ? 'auto' : 'visible'
    };

    switch (tooltipPosition) {
      case 'bottom':
        return { ...base, top: 'calc(100% + 25px)', left: '50%', transform: 'translateX(-50%)' };
      case 'top':
        return { ...base, bottom: 'calc(100% + 25px)', left: '50%', transform: 'translateX(-50%)' };
      case 'left':
        return { ...base, right: 'calc(100% + 25px)', top: '50%', transform: 'translateY(-50%)' };
      case 'right':
        return { ...base, left: 'calc(100% + 25px)', top: '50%', transform: 'translateY(-50%)' };
      default:
        return base;
    }
  };

  const handleNodeClick = (nodeId: string) => {
    setExpandedNode(expandedNode === nodeId ? null : nodeId);
  };

  const handleNodeKeyPress = (e: React.KeyboardEvent, nodeId: string) => {
    if (e.key === 'Enter' || e.key === ' ') {
      e.preventDefault();
      handleNodeClick(nodeId);
    }
  };

  const renderNode = (nodeId: string, data: NodeData) => {
    const isExpanded = expandedNode === nodeId;
    const hoverClass = `diagram-node-${nodeId}`;

    return (
      <div
        key={nodeId}
        className={`diagram-node ${hoverClass}`}
        onClick={() => handleNodeClick(nodeId)}
        onKeyPress={(e) => handleNodeKeyPress(e, nodeId)}
        tabIndex={0}
        role="button"
        aria-expanded={isExpanded}
        aria-label={`${data.label}: ${data.tooltipDesc}`}
        style={{
          position: 'absolute',
          ...data.position,
          width: '60px',
          height: '60px',
          borderRadius: 'var(--radius-circle)',
          background: isExpanded
            ? 'linear-gradient(135deg, #E35D7A 0%, #F89F7B 100%)'
            : 'linear-gradient(135deg, #E35D7A 0%, #F89F7B 100%)',
          boxShadow: isExpanded
            ? '0 12px 40px rgba(239, 71, 111, 0.4)'
            : '0 8px 24px rgba(239, 71, 111, 0.3)',
          cursor: 'pointer',
          transition: 'var(--transition-medium)',
          zIndex: isExpanded ? 250 : 10,
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          border: '3px solid var(--bg-white)'
        }}
      >
        {/* Plus/Minus Icon */}
        <div style={{
          width: '100%',
          height: '100%',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          color: 'var(--text-white)',
          fontWeight: 700,
          fontSize: '24px',
          transition: 'var(--transition-medium)',
          transform: isExpanded ? 'rotate(45deg)' : 'rotate(0deg)'
        }}>
          +
        </div>

        {/* Enhanced Tooltip with Expandable Content */}
        <div
          className="node-tooltip"
          style={{
            ...getTooltipStyles(data.tooltipPosition, isExpanded),
            opacity: isExpanded ? 1 : 0,
            pointerEvents: isExpanded ? 'auto' : 'none'
          }}
          onClick={(e) => e.stopPropagation()}
        >
          <h4 style={{
            fontFamily: 'var(--font-headline)',
            fontSize: 'var(--font-size-h4)',
            fontWeight: 600,
            marginBottom: 'var(--spacing-sm)',
            color: 'var(--text-primary)'
          }}>
            {data.tooltipTitle}
          </h4>
          <p style={{
            fontFamily: 'var(--font-body)',
            fontSize: 'var(--font-size-body)',
            lineHeight: 'var(--line-height-normal)',
            color: 'var(--text-primary)',
            marginBottom: 'var(--spacing-md)'
          }}>
            {data.tooltipDesc}
          </p>

          {isExpanded && (
            <>
              <p style={{
                fontSize: 'var(--font-size-small)',
                lineHeight: 'var(--line-height-normal)',
                color: 'var(--text-muted)',
                marginBottom: 'var(--spacing-md)',
                paddingTop: 'var(--spacing-md)',
                borderTop: '1px solid var(--border-light)'
              }}>
                {data.fullDescription}
              </p>
              <div style={{
                background: 'var(--bg-cream)',
                padding: 'var(--spacing-md)',
                borderRadius: 'var(--radius-sm)',
                marginBottom: 'var(--spacing-md)'
              }}>
                <strong style={{ fontSize: 'var(--font-size-small)', color: 'var(--text-muted)' }}>Case Study:</strong>
                <p style={{ fontSize: 'var(--font-size-small)', color: 'var(--text-secondary)', marginTop: 'var(--spacing-xs)' }}>
                  {data.caseStudy}
                </p>
              </div>
            </>
          )}

          <div style={{
            padding: 'var(--spacing-md)',
            background: 'var(--primary-blue)',
            borderRadius: 'var(--radius-md)',
            borderLeft: '4px solid var(--secondary-blue)'
          }}>
            <div style={{
              display: 'flex',
              alignItems: 'baseline',
              gap: 'var(--spacing-xs)',
              flexWrap: 'wrap'
            }}>
              <strong style={{
                fontSize: 'var(--font-size-h2)',
                fontWeight: 600,
                color: 'var(--text-white)',
                fontFamily: 'var(--font-headline)',
                lineHeight: 1
              }}>
                {data.tooltipStat}
              </strong>
              <span style={{
                fontSize: 'var(--font-size-body)',
                color: 'var(--text-white)',
                fontWeight: 500,
                opacity: 0.9
              }}>
                {data.tooltipLabel}
              </span>
            </div>
          </div>
        </div>
      </div>
    );
  };

  const renderMentorModal = () => {
    if (!selectedMentor) return null;

    return (
      <div
        style={{
          position: 'fixed',
          top: 0,
          left: 0,
          right: 0,
          bottom: 0,
          backgroundColor: 'var(--overlay-dark)',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          zIndex: 9999,
          padding: 'var(--spacing-lg)',
          backdropFilter: 'blur(4px)',
        }}
        onClick={() => setSelectedMentor(null)}
        role="dialog"
        aria-modal="true"
        aria-labelledby="mentor-modal-title"
      >
        <div
          style={{
            backgroundColor: 'var(--bg-white)',
            borderRadius: 'var(--radius-xl)',
            maxWidth: 'var(--max-width-sm)',
            width: '100%',
            padding: 'var(--spacing-2xl)',
            position: 'relative',
          }}
          onClick={(e) => e.stopPropagation()}
        >
          <button
            onClick={() => setSelectedMentor(null)}
            style={{
              position: 'absolute',
              top: 'var(--spacing-lg)',
              right: 'var(--spacing-lg)',
              background: 'transparent',
              border: 'none',
              cursor: 'pointer',
              color: 'var(--text-muted)',
              fontSize: 'var(--font-size-h3)',
              padding: 'var(--spacing-xs)',
            }}
            aria-label="Close mentor profile"
          >
            ×
          </button>

          <div style={{ display: 'flex', alignItems: 'center', gap: 'var(--spacing-lg)', marginBottom: 'var(--spacing-lg)' }}>
            <img
              src={selectedMentor.image}
              alt={selectedMentor.name}
              style={{
                width: '100px',
                height: '100px',
                borderRadius: 'var(--radius-circle)',
                objectFit: 'cover',
                border: '4px solid var(--text-coral)'
              }}
            />
            <div>
              <h3 id="mentor-modal-title" style={{ fontSize: 'var(--font-size-h3)', fontWeight: 500, marginBottom: 'var(--spacing-xxs)' }}>
                {selectedMentor.name}
              </h3>
              <p style={{ color: 'var(--text-coral)', fontSize: 'var(--font-size-body)', fontWeight: 600 }}>
                {selectedMentor.role}
              </p>
            </div>
          </div>

          <p style={{ fontSize: 'var(--font-size-body)', lineHeight: 'var(--line-height-normal)', color: 'var(--text-muted)', marginBottom: 'var(--spacing-lg)' }}>
            {selectedMentor.bio}
          </p>

          <div style={{ marginBottom: 'var(--spacing-lg)' }}>
            <h4 style={{ fontSize: 'var(--font-size-small)', fontWeight: 600, marginBottom: 'var(--spacing-sm)', color: 'var(--text-secondary)' }}>
              Expertise
            </h4>
            <div style={{ display: 'flex', gap: 'var(--spacing-xs)', flexWrap: 'wrap' }}>
              {selectedMentor.expertise.map((skill, index) => (
                <span
                  key={index}
                  style={{
                    background: 'var(--bg-light-coral)',
                    color: 'var(--text-coral)',
                    padding: 'var(--spacing-xxs) var(--spacing-sm)',
                    borderRadius: 'var(--radius-xl)',
                    fontSize: 'var(--font-size-small)',
                    fontWeight: 500
                  }}
                >
                  {skill}
                </span>
              ))}
            </div>
          </div>

          <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr 1fr', gap: 'var(--spacing-md)' }}>
            {selectedMentor.stats.map((stat, index) => (
              <div
                key={index}
                style={{
                  textAlign: 'center',
                  padding: 'var(--spacing-md)',
                  background: 'var(--bg-cream)',
                  borderRadius: 'var(--radius-md)'
                }}
              >
                <div style={{ fontSize: 'var(--font-size-h3)', fontWeight: 700, color: 'var(--text-coral)', marginBottom: 'var(--spacing-xxs)' }}>
                  {stat.value}
                </div>
                <div style={{ fontSize: 'var(--font-size-xs)', color: 'var(--text-muted)' }}>
                  {stat.label}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    );
  };

  // Mobile simplified version
  const renderMobileHero = () => (
    <div style={{ padding: 'var(--spacing-lg) 0', width: '100%', overflow: 'hidden' }}>
      <h1 className="hero-mobile-title" style={{
        fontFamily: 'var(--font-headline)',
        fontSize: 'var(--font-size-h1)',
        fontWeight: 700,
        lineHeight: 'var(--line-height-tight)',
        letterSpacing: 'var(--letter-spacing-tight)',
        marginBottom: 'var(--spacing-md)',
        color: 'var(--text-primary)',
        wordWrap: 'break-word',
        overflowWrap: 'break-word',
        hyphens: 'auto',
        maxWidth: '100%',
      }}>
        {fieldValues.title}
      </h1>
      <p className="hero-mobile-description" style={{
        fontSize: 'var(--font-size-body)',
        color: 'var(--text-secondary)',
        lineHeight: 'var(--line-height-normal)',
        marginBottom: 'var(--spacing-xl)',
        maxWidth: 'var(--max-width-prose)',
        wordWrap: 'break-word',
        overflowWrap: 'break-word',
      }}>
        {description}
      </p>

      {/* Mobile Stats Cards */}
      <div style={{ display: 'grid', gap: 'var(--spacing-md)', marginBottom: 'var(--spacing-xl)' }}>
        {Object.entries(nodeData).map(([key, data]) => (
          <div
            key={key}
            style={{
              background: 'var(--bg-white)',
              padding: 'var(--spacing-lg)',
              borderRadius: 'var(--radius-lg)',
              boxShadow: 'var(--shadow-md)',
              border: '2px solid var(--border-coral-light)'
            }}
          >
            <h3 style={{
              fontSize: 'var(--font-size-body-lg)',
              fontWeight: 500,
              color: 'var(--text-primary)',
              marginBottom: 'var(--spacing-xs)'
            }}>
              {data.tooltipTitle}
            </h3>
            <p style={{ fontSize: 'var(--font-size-small)', color: 'var(--text-muted)', marginBottom: 'var(--spacing-md)' }}>
              {data.tooltipDesc}
            </p>
            <div style={{
              background: 'var(--primary-blue)',
              padding: 'var(--spacing-sm)',
              borderRadius: 'var(--radius-sm)',
              borderLeft: '3px solid var(--secondary-blue)'
            }}>
              <strong style={{ fontSize: 'var(--font-size-h3)', fontWeight: 600, color: 'var(--text-white)' }}>
                {data.tooltipStat}
              </strong>
              <span style={{ fontSize: 'var(--font-size-body)', color: 'var(--text-white)', marginLeft: 'var(--spacing-xs)', opacity: 0.9 }}>
                {data.tooltipLabel}
              </span>
            </div>
          </div>
        ))}
      </div>

      {/* Mobile Mentors */}
      <div style={{ marginBottom: 'var(--spacing-xl)' }}>
        <h3 style={{ fontSize: 'var(--font-size-h4)', fontWeight: 500, marginBottom: 'var(--spacing-md)', textAlign: 'center' }}>
          Meet Our Mentors
        </h3>
        <div style={{ display: 'flex', justifyContent: 'center', gap: 'var(--spacing-md)' }}>
          {mentorProfiles.map((mentor, index) => (
            <div
              key={index}
              onClick={() => setSelectedMentor(mentor)}
              style={{
                width: '80px',
                height: '80px',
                borderRadius: 'var(--radius-circle)',
                border: '3px solid var(--bg-white)',
                boxShadow: 'var(--shadow-md)',
                overflow: 'hidden',
                cursor: 'pointer',
                transition: 'var(--transition-medium)'
              }}
            >
              <img
                src={mentor.image}
                alt={mentor.name}
                style={{
                  width: '100%',
                  height: '100%',
                  objectFit: 'cover'
                }}
              />
            </div>
          ))}
        </div>
      </div>

      <button
        onClick={() => setIsDemoModalOpen(true)}
        style={{
          background: 'var(--gradient-coral)',
          color: 'var(--text-white)',
          padding: 'var(--btn-padding)',
          borderRadius: 'var(--radius-full)',
          fontSize: 'var(--font-size-body)',
          fontWeight: 600,
          border: 'none',
          cursor: 'pointer',
          boxShadow: 'var(--shadow-coral-sm)',
          width: '100%',
          transition: 'var(--transition-medium)'
        }}
        onMouseEnter={(e) => {
          e.currentTarget.style.transform = 'translateY(-2px)';
          e.currentTarget.style.boxShadow = 'var(--shadow-coral)';
        }}
        onMouseLeave={(e) => {
          e.currentTarget.style.transform = 'translateY(0)';
          e.currentTarget.style.boxShadow = 'var(--shadow-coral-sm)';
        }}
        aria-label={fieldValues.button_text}
      >
        {fieldValues.button_text}
      </button>
    </div>
  );

  return (
    <>
      <style>{`
        /* Mobile responsive fixes */
        @media (max-width: 768px) {
          .hero-mobile-title {
            font-size: 1.75rem !important;
            line-height: 1.3 !important;
            word-wrap: break-word !important;
            overflow-wrap: break-word !important;
            hyphens: auto !important;
          }

          .hero-mobile-description {
            font-size: 0.95rem !important;
          }
        }

        @media (max-width: 480px) {
          .hero-mobile-title {
            font-size: 1.5rem !important;
            line-height: 1.3 !important;
          }

          .hero-mobile-description {
            font-size: 0.9rem !important;
          }
        }

        @media (max-width: 375px) {
          .hero-mobile-title {
            font-size: 1.35rem !important;
          }
        }

        /* Ensure hover states have proper z-index layering */
        .diagram-node {
          transition: box-shadow 0.3s ease, filter 0.3s ease !important;
        }

        .diagram-node:hover {
          z-index: 260 !important;
          box-shadow: 0 12px 40px rgba(239, 71, 111, 0.5) !important;
          filter: brightness(1.05);
        }

        .diagram-node:hover .node-tooltip {
          opacity: 1 !important;
          z-index: 310 !important;
        }

        /* Avatar container z-index on hover - use CSS only to avoid flickering */
        .avatar-container {
          transition: none !important;
          will-change: z-index;
        }

        .avatar-container:hover {
          z-index: 500 !important;
        }

        /* Avatar wrapper optimization */
        .avatar-wrapper {
          will-change: box-shadow;
          transition: box-shadow 0.2s ease !important;
        }

        /* Avatar tooltips must appear above everything */
        .avatar-wrapper:hover + [class^="avatar-tooltip-"],
        [class^="avatar-tooltip-"] {
          z-index: 700 !important;
        }

        /* Prevent tooltip from interfering with hover */
        [class^="avatar-tooltip-"] {
          pointer-events: none !important;
        }

        /* Prevent section overflow from clipping */
        section {
          overflow: visible !important;
        }
      `}</style>
      <script dangerouslySetInnerHTML={{__html: `
        (function() {
          function initHeroDiagram() {
            // Avatar hover states - use vanilla JS since React state doesn't hydrate
            const avatarContainers = document.querySelectorAll('.avatar-wrapper');
            let currentTooltip = null;

            avatarContainers.forEach((container, index) => {
              const tooltip = document.querySelector('.avatar-tooltip-' + index);
              const avatarContainer = container.closest('.avatar-container');

              if (!tooltip || !avatarContainer) return;

              // Use mouseenter on the parent container to avoid flicker
              avatarContainer.addEventListener('mouseenter', function(e) {
                e.stopPropagation();

                // Hide any currently visible tooltip
                if (currentTooltip && currentTooltip !== tooltip) {
                  currentTooltip.style.opacity = '0';
                  currentTooltip.style.visibility = 'hidden';
                }

                // Add glow effect to avatar
                container.style.boxShadow = '0 8px 24px rgba(239, 71, 111, 0.4), 0 0 0 4px rgba(239, 71, 111, 0.5)';

                // Show tooltip with slight delay to prevent flicker
                requestAnimationFrame(function() {
                  tooltip.style.opacity = '1';
                  tooltip.style.visibility = 'visible';
                  currentTooltip = tooltip;
                });
              }, { passive: true });

              avatarContainer.addEventListener('mouseleave', function(e) {
                e.stopPropagation();

                // Remove glow effect
                container.style.boxShadow = '0 4px 12px rgba(239, 71, 111, 0.25), 0 0 0 2px rgba(239, 71, 111, 0.3)';

                // Hide tooltip
                tooltip.style.opacity = '0';
                tooltip.style.visibility = 'hidden';
                if (currentTooltip === tooltip) {
                  currentTooltip = null;
                }
              }, { passive: true });
            });
          }

          if (document.readyState === 'loading') {
            document.addEventListener('DOMContentLoaded', initHeroDiagram);
          } else {
            setTimeout(initHeroDiagram, 100);
          }
        })();
      `}} />
      <section
        ref={elementRef as React.RefObject<HTMLElement>}
        style={{
          minHeight: isMobile ? 'auto' : '65vh',
          display: 'flex',
          alignItems: 'center',
          padding: 'var(--spacing-2xl) 0',
          background: 'var(--gradient-hero)',
          position: 'relative',
          overflow: 'visible',
          ...animationStyles.subtleSlideUp(isVisible),
        }}
        aria-labelledby="hero-heading"
      >
        <div style={{ maxWidth: 'var(--max-width-xl)', margin: '0 auto', padding: '0 var(--container-padding)', width: '100%' }}>
          {isMobile ? renderMobileHero() : (
            <>
              <div className="hero-content" style={{
                display: 'grid',
                gridTemplateColumns: '1fr 1fr',
                gap: 'var(--spacing-2xl)',
                alignItems: 'center',
                position: 'relative',
                zIndex: 1,
                overflow: 'visible'
              }}>
                <div>
                  <h1
                    id="hero-heading"
                    style={{
                      fontFamily: 'var(--font-headline)',
                      fontSize: 'var(--font-size-h1)',
                      fontWeight: 500,
                      lineHeight: 'var(--line-height-tight)',
                      marginBottom: 'var(--spacing-lg)',
                      color: 'var(--text-primary)',
                      letterSpacing: 'var(--letter-spacing-tight)',
                      wordWrap: 'break-word',
                      overflowWrap: 'break-word',
                    }}
                  >
                    {fieldValues.title}
                  </h1>
                  <p style={{
                    fontFamily: 'var(--font-body)',
                    fontSize: 'var(--font-size-body-lg)',
                    color: 'var(--text-primary)',
                    lineHeight: 'var(--line-height-relaxed)',
                    marginBottom: 'var(--spacing-xl)'
                  }}>
                    {description}
                  </p>

                  <button
                    onClick={() => setIsDemoModalOpen(true)}
                    style={{
                      background: 'var(--gradient-coral)',
                      color: 'var(--text-white)',
                      padding: 'var(--btn-padding)',
                      borderRadius: 'var(--radius-full)',
                      fontFamily: 'var(--font-body)',
                      fontSize: 'var(--font-size-body)',
                      fontWeight: 600,
                      border: 'none',
                      cursor: 'pointer',
                      boxShadow: 'var(--shadow-coral-sm)',
                      transition: 'var(--transition-medium)'
                    }}
                    onMouseEnter={(e) => {
                      e.currentTarget.style.transform = 'translateY(-2px)';
                      e.currentTarget.style.boxShadow = 'var(--shadow-coral)';
                    }}
                    onMouseLeave={(e) => {
                      e.currentTarget.style.transform = 'translateY(0)';
                      e.currentTarget.style.boxShadow = 'var(--shadow-coral-sm)';
                    }}
                    aria-label={fieldValues.button_text}
                  >
                    {fieldValues.button_text}
                  </button>
                </div>

                <div className="hero-diagram" style={{
                  position: 'relative',
                  width: '100%',
                  maxWidth: '600px',
                  height: '600px',
                  margin: '0 auto',
                  overflow: 'visible',
                  zIndex: 1
                }}>
                  {/* Animated Background SVG */}
                  <svg
                    style={{
                      position: 'absolute',
                      top: '50%',
                      left: '50%',
                      transform: 'translate(-50%, -50%)',
                      width: '120%',
                      height: '120%',
                      zIndex: 0,
                      opacity: 0.6,
                      pointerEvents: 'none'
                    }}
                    viewBox="0 0 600 600"
                  >
                    <defs>
                      {/* Gradient for lines */}
                      <linearGradient id="lineGradient" x1="0%" y1="0%" x2="100%" y2="100%">
                        <stop offset="0%" style={{ stopColor: '#EF476F', stopOpacity: 0.6 }} />
                        <stop offset="100%" style={{ stopColor: '#F89F7B', stopOpacity: 0.3 }} />
                      </linearGradient>

                      {/* Glow filter for nodes */}
                      <filter id="glow">
                        <feGaussianBlur stdDeviation="3" result="coloredBlur"/>
                        <feMerge>
                          <feMergeNode in="coloredBlur"/>
                          <feMergeNode in="SourceGraphic"/>
                        </feMerge>
                      </filter>
                    </defs>

                    {/* Connection lines */}
                    <line x1="210" y1="80" x2="520" y2="180" stroke="url(#lineGradient)" strokeWidth="1.5">
                      <animate attributeName="opacity" values="0.3;0.6;0.3" dur="8s" repeatCount="indefinite" />
                    </line>
                    <line x1="520" y1="180" x2="360" y2="450" stroke="url(#lineGradient)" strokeWidth="1.5">
                      <animate attributeName="opacity" values="0.4;0.7;0.4" dur="10s" repeatCount="indefinite" />
                    </line>
                    <line x1="360" y1="450" x2="80" y2="340" stroke="url(#lineGradient)" strokeWidth="1.5">
                      <animate attributeName="opacity" values="0.3;0.6;0.3" dur="9s" repeatCount="indefinite" />
                    </line>
                    <line x1="80" y1="340" x2="210" y2="80" stroke="url(#lineGradient)" strokeWidth="1.5">
                      <animate attributeName="opacity" values="0.35;0.65;0.35" dur="11s" repeatCount="indefinite" />
                    </line>
                    {/* Cross lines */}
                    <line x1="210" y1="80" x2="360" y2="450" stroke="url(#lineGradient)" strokeWidth="1">
                      <animate attributeName="opacity" values="0.2;0.45;0.2" dur="12s" repeatCount="indefinite" />
                    </line>
                    <line x1="520" y1="180" x2="80" y2="340" stroke="url(#lineGradient)" strokeWidth="1">
                      <animate attributeName="opacity" values="0.2;0.5;0.2" dur="14s" repeatCount="indefinite" />
                    </line>

                    {/* Scattered nodes */}
                    <circle cx="320" cy="150" r="3" fill="#F89F7B" filter="url(#glow)">
                      <animate attributeName="r" values="2;4;2" dur="6s" repeatCount="indefinite" />
                      <animate attributeName="opacity" values="0.4;0.7;0.4" dur="6s" repeatCount="indefinite" />
                    </circle>
                    <circle cx="420" cy="280" r="4" fill="#FED700" filter="url(#glow)">
                      <animate attributeName="r" values="3;5;3" dur="8s" repeatCount="indefinite" />
                      <animate attributeName="opacity" values="0.5;0.8;0.5" dur="8s" repeatCount="indefinite" />
                    </circle>
                    <circle cx="180" cy="380" r="3" fill="#EF476F" filter="url(#glow)">
                      <animate attributeName="r" values="2;5;2" dur="7s" repeatCount="indefinite" />
                      <animate attributeName="opacity" values="0.4;0.75;0.4" dur="7s" repeatCount="indefinite" />
                    </circle>
                    <circle cx="280" cy="320" r="4" fill="#F89F7B" filter="url(#glow)">
                      <animate attributeName="r" values="3;6;3" dur="9s" repeatCount="indefinite" />
                      <animate attributeName="opacity" values="0.45;0.8;0.45" dur="9s" repeatCount="indefinite" />
                    </circle>
                    <circle cx="450" cy="380" r="3" fill="#FED700" filter="url(#glow)">
                      <animate attributeName="r" values="2;4;2" dur="10s" repeatCount="indefinite" />
                      <animate attributeName="opacity" values="0.4;0.7;0.4" dur="10s" repeatCount="indefinite" />
                    </circle>
                    <circle cx="140" cy="200" r="3" fill="#EF476F" filter="url(#glow)">
                      <animate attributeName="r" values="2;5;2" dur="8s" repeatCount="indefinite" />
                      <animate attributeName="opacity" values="0.45;0.75;0.45" dur="8s" repeatCount="indefinite" />
                    </circle>
                  </svg>

                  {/* Interactive Nodes */}
                  {renderNode('learners', nodeData.learners)}
                  {renderNode('employers', nodeData.employers)}
                  {renderNode('organizations', nodeData.organizations)}
                  {renderNode('partnerships', nodeData.partnerships)}

                  {/* Center Avatars - Floating constellation arrangement */}
                  <div style={{
                    position: 'absolute',
                    top: '50%',
                    left: '50%',
                    transform: 'translate(-50%, -50%)',
                    width: '280px',
                    height: '280px',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    zIndex: 150
                  }}>
                    {mentorProfiles.map((mentor, index) => {
                      // Floating positions with whitespace between avatars
                      const positions = [
                        { top: '-10px', left: '90px' },    // Avatar 1 - top center-right
                        { top: '85px', left: '10px' },     // Avatar 2 - middle left
                        { top: '160px', left: '140px' }    // Avatar 3 - bottom right
                      ];

                      const isHovered = hoveredAvatar === index;

                      return (
                        <div
                          key={index}
                          className={`avatar-container avatar-container-${index}`}
                          style={{
                            position: 'absolute',
                            ...positions[index],
                            zIndex: 151 + index,
                          }}
                        >
                          <div
                            className="avatar-wrapper"
                            onClick={() => setSelectedMentor(mentor)}
                            onMouseEnter={() => setHoveredAvatar(index)}
                            onMouseLeave={() => setHoveredAvatar(null)}
                            onKeyPress={(e) => {
                              if (e.key === 'Enter' || e.key === ' ') {
                                e.preventDefault();
                                setSelectedMentor(mentor);
                              }
                            }}
                            tabIndex={0}
                            role="button"
                            aria-label={`View profile of ${mentor.name}, ${mentor.role}`}
                            style={{
                              width: '105px',
                              height: '105px',
                              borderRadius: 'var(--radius-circle)',
                              border: '4px solid var(--bg-white)',
                              boxShadow: isHovered
                                ? '0 8px 24px rgba(239, 71, 111, 0.4), 0 0 0 4px rgba(239, 71, 111, 0.5)'
                                : '0 4px 12px rgba(239, 71, 111, 0.25), 0 0 0 2px rgba(239, 71, 111, 0.3)',
                              overflow: 'hidden',
                              background: '#f0f0f0',
                              cursor: 'pointer',
                              transition: 'all 0.3s ease',
                            }}
                          >
                            <img
                              src={mentor.image}
                              alt={`${mentor.name} - ${mentor.role}`}
                              style={{
                                width: '100%',
                                height: '100%',
                                objectFit: 'cover'
                              }}
                            />
                          </div>

                          {/* Hover Tooltip - Always rendered, shown/hidden with vanilla JS */}
                          <div
                            className={`avatar-tooltip-${index}`}
                            style={{
                              position: 'absolute',
                              top: '120px',
                              left: '50%',
                              transform: 'translateX(-50%)',
                              background: 'var(--bg-white)',
                              borderRadius: 'var(--radius-lg)',
                              padding: 'var(--spacing-lg) var(--spacing-lg)',
                              boxShadow: 'var(--shadow-lg)',
                              zIndex: 600,
                              minWidth: '240px',
                              textAlign: 'center' as const,
                              pointerEvents: 'none',
                              opacity: 0,
                              visibility: 'hidden',
                              transition: 'var(--transition-medium)',
                            }}>
                            <div style={{
                              fontSize: 'var(--font-size-h3)',
                              fontWeight: 700,
                              color: 'var(--text-primary)',
                              marginBottom: 'var(--spacing-xxs)',
                              fontFamily: 'var(--font-headline)',
                            }}>
                              {mentor.name}
                            </div>
                            <div style={{
                              fontSize: 'var(--font-size-body)',
                              color: 'var(--text-muted)',
                              marginBottom: 'var(--spacing-sm)',
                              fontFamily: 'var(--font-body)',
                            }}>
                              {mentor.role}
                            </div>
                            <div style={{
                              fontSize: 'var(--font-size-body-lg)',
                              fontWeight: 600,
                              color: 'var(--text-coral)',
                              fontFamily: 'var(--font-body)',
                            }}>
                              {mentor.stats[0].value} mentees guided
                            </div>
                          </div>
                        </div>
                      );
                    })}
                  </div>
                </div>
              </div>
            </>
          )}
        </div>
      </section>




      <DemoModal isOpen={isDemoModalOpen} onClose={() => setIsDemoModalOpen(false)} />
      {renderMentorModal()}
    </>
  );
}

export const fields: any = [
  {
    type: 'text',
    name: 'title',
    label: 'Hero Title',
    default: 'The AI Mentorship OS powering connection, retention and results.',
  },
  {
    type: 'text',
    name: 'description',
    label: 'Description',
    default: 'Mentorship reinvented as scalable AI infrastructure. Foster human connection, enhance durable skills, and drive improved retention and career outcomes across your educational, workforce, and employer ecosystems.',
  },
  {
    type: 'text',
    name: 'button_text',
    label: 'Button Text',
    default: 'Request a Demo',
  },
  {
    type: 'group',
    name: 'nodes',
    label: 'Diagram Nodes',
    help_text: 'The 4 clickable nodes around the diagram (order: top, right, bottom, left). Leave empty to use default content.',
    occurrence: {
      min: 0,
      max: 4,
      default: 0,
    },
    children: [
      {
        type: 'text',
        name: 'node_label',
        label: 'Node Label',
        default: 'Learners',
      },
      {
        type: 'text',
        name: 'short_label',
        label: 'Short Label',
        default: 'Learners',
      },
      {
        type: 'text',
        name: 'tooltipTitle',
        label: 'Tooltip Title',
        default: 'Learners & Career Starters',
      },
      {
        type: 'text',
        name: 'tooltipStat',
        label: 'Stat Number',
        default: '70%',
      },
      {
        type: 'text',
        name: 'tooltipLabel',
        label: 'Stat Label',
        default: 'planning careers in critical sectors',
      },
      {
        type: 'text',
        name: 'tooltipDesc',
        label: 'Short Description',
        default: 'Students and individuals seeking guidance and career development through meaningful mentorship connections.',
      },
      {
        type: 'text',
        name: 'fullDescription',
        label: 'Full Description (shown when expanded)',
        default: 'Our AI matches learners with mentors based on goals, interests, and career aspirations. Real-time insights help track progress and ensure meaningful connections.',
      },
      {
        type: 'text',
        name: 'caseStudy',
        label: 'Case Study Text',
        default: 'Duke University saw 85% engagement rate among students using our mentorship platform.',
      },
    ],
  },
  {
    type: 'group',
    name: 'mentors',
    label: 'Mentor Profiles',
    help_text: 'The 3 mentor avatars in the center of the diagram. Leave empty to use default content.',
    occurrence: {
      min: 0,
      max: 3,
      default: 0,
    },
    children: [
      {
        type: 'text',
        name: 'mentor_name',
        label: 'Mentor Name',
        default: 'Sarah Chen',
      },
      {
        type: 'text',
        name: 'role',
        label: 'Role/Title',
        default: 'Career Mentor',
      },
      {
        type: 'choice',
        name: 'image_key',
        label: 'Profile Image',
        choices: [
          ['heroImg01', 'Hero Image 1'],
          ['heroImg02', 'Hero Image 2'],
          ['heroImg03', 'Hero Image 3'],
        ],
        default: 'heroImg01',
      },
      {
        type: 'text',
        name: 'bio',
        label: 'Biography',
        default: 'Technology executive with 15 years of experience helping early-career professionals navigate the tech industry.',
      },
      {
        type: 'text',
        name: 'expertise',
        label: 'Expertise (comma-separated)',
        default: 'Career Planning, Leadership, Tech Industry',
      },
      {
        type: 'text',
        name: 'stat1_label',
        label: 'Stat 1 Label',
        default: 'Mentees',
      },
      {
        type: 'text',
        name: 'stat1_value',
        label: 'Stat 1 Value',
        default: '47',
      },
      {
        type: 'text',
        name: 'stat2_label',
        label: 'Stat 2 Label',
        default: 'Years Experience',
      },
      {
        type: 'text',
        name: 'stat2_value',
        label: 'Stat 2 Value',
        default: '15',
      },
      {
        type: 'text',
        name: 'stat3_label',
        label: 'Stat 3 Label',
        default: 'Success Rate',
      },
      {
        type: 'text',
        name: 'stat3_value',
        label: 'Stat 3 Value',
        default: '94%',
      },
    ],
  },
];

export const meta = {
  label: 'Hero with Diagram',
};
