import React, { useState, useEffect } from 'react';
import {
  ModuleFields,
  TextField,
  ImageField,
} from '@hubspot/cms-components/fields';
import { ScrollAnimationScript } from '../../shared/ScrollAnimationScript';
// Network member images
import heroMaya from '../../../assets/Hero_Maya.jpg';
import heroAnya from '../../../assets/Hero_Anya.jpg';
import heroJordan from '../../../assets/Hero_Jordan.jpg';

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

interface NetworkMember {
  name: string;
  role: string;
  image: string;
  bio: string;
  expertise: string[];
  stats: { label: string; value: string }[];
}

export function Component({ fieldValues }: any) {
  const [expandedNode, setExpandedNode] = useState<string | null>(null);
  const [selectedMember, setSelectedMember] = useState<NetworkMember | null>(null);
  const [hoveredAvatar, setHoveredAvatar] = useState<number | null>(null);
  const [isMobile, setIsMobile] = useState(false);

  // Check for mobile/tablet viewport - use 1024px to catch tablets
  useEffect(() => {
    const checkMobile = () => setIsMobile(window.innerWidth <= 1024);
    checkMobile();
    window.addEventListener('resize', checkMobile);
    return () => window.removeEventListener('resize', checkMobile);
  }, []);

  // Define node positions - positioned around the outside (moved down to avoid nav overlap)
  const nodePositions: Record<string, { position: React.CSSProperties; tooltipPosition: string }> = {
    platform: {
      position: { top: '8%', left: '20%', transform: 'translate(-50%, 0)' },
      tooltipPosition: 'bottom'
    },
    experience: {
      position: { right: '2%', top: '30%', transform: 'translate(0, -50%)' },
      tooltipPosition: 'left'
    },
    intelligence: {
      position: { bottom: '5%', right: '15%', transform: 'translate(0, 0)' },
      tooltipPosition: 'top'
    },
    integration: {
      position: { left: '2%', bottom: '20%', transform: 'translate(0, 50%)' },
      tooltipPosition: 'right'
    }
  };

  // Use custom nodes if provided, otherwise fall back to defaults
  const customNodes = fieldValues.nodes || [];

  // Product-specific node data
  const nodeData: Record<string, NodeData> = customNodes.length === 4 ? {
    platform: {
      label: customNodes[0].node_label || 'The Platform',
      shortLabel: customNodes[0].short_label || 'Platform',
      tooltipTitle: customNodes[0].tooltipTitle || 'AI-Powered Matching',
      tooltipStat: customNodes[0].tooltipStat || '80+',
      tooltipLabel: customNodes[0].tooltipLabel || 'matching variables',
      tooltipDesc: customNodes[0].tooltipDesc || 'Our algorithm considers 80+ variables to create meaningful, identity-aligned matches that drive engagement.',
      fullDescription: customNodes[0].fullDescription || 'Advanced AI matching considers academic goals, career interests, identity factors, and communication preferences to create ideal mentor-mentee pairs.',
      caseStudy: customNodes[0].caseStudy || 'Partners see 95% satisfaction with match quality.',
      ...nodePositions.platform
    },
    experience: {
      label: customNodes[1].node_label || 'The Experience',
      shortLabel: customNodes[1].short_label || 'Experience',
      tooltipTitle: customNodes[1].tooltipTitle || 'Conversation Sparks',
      tooltipStat: customNodes[1].tooltipStat || '3x',
      tooltipLabel: customNodes[1].tooltipLabel || 'higher engagement',
      tooltipDesc: customNodes[1].tooltipDesc || 'AI-powered prompts spark meaningful conversations and keep mentorship relationships active and impactful.',
      fullDescription: customNodes[1].fullDescription || 'Personalized conversation prompts adapt to relationship stage, goals, and context to facilitate deeper connections.',
      caseStudy: customNodes[1].caseStudy || 'Programs with Conversation Sparks see 3x higher engagement rates.',
      ...nodePositions.experience
    },
    intelligence: {
      label: customNodes[2].node_label || 'The Intelligence',
      shortLabel: customNodes[2].short_label || 'Intelligence',
      tooltipTitle: customNodes[2].tooltipTitle || 'Real-Time Insights',
      tooltipStat: customNodes[2].tooltipStat || '100%',
      tooltipLabel: customNodes[2].tooltipLabel || 'visibility',
      tooltipDesc: customNodes[2].tooltipDesc || 'Comprehensive analytics dashboard provides real-time program health monitoring and actionable insights.',
      fullDescription: customNodes[2].fullDescription || 'Track engagement, identify at-risk relationships, measure outcomes, and demonstrate ROI with powerful analytics.',
      caseStudy: customNodes[2].caseStudy || 'Admins save 15+ hours/month with automated insights.',
      ...nodePositions.intelligence
    },
    integration: {
      label: customNodes[3].node_label || 'Integration',
      shortLabel: customNodes[3].short_label || 'Integration',
      tooltipTitle: customNodes[3].tooltipTitle || 'Seamless Integration',
      tooltipStat: customNodes[3].tooltipStat || 'SSO',
      tooltipLabel: customNodes[3].tooltipLabel || '& CRM ready',
      tooltipDesc: customNodes[3].tooltipDesc || 'Integrate with your existing systems including SSO, CRM, and student information systems.',
      fullDescription: customNodes[3].fullDescription || 'Enterprise-grade security with SAML SSO, API access, and integrations with Salesforce, Slate, and major SIS platforms.',
      caseStudy: customNodes[3].caseStudy || 'Typical implementation takes 2-4 weeks from kickoff to launch.',
      ...nodePositions.integration
    }
  } : {
    platform: {
      label: 'The Platform',
      shortLabel: 'Platform',
      tooltipTitle: 'AI-Powered Matching',
      tooltipStat: '80+',
      tooltipLabel: 'matching variables',
      tooltipDesc: 'Our algorithm considers 80+ variables to create meaningful, identity-aligned matches that drive engagement.',
      fullDescription: 'Advanced AI matching considers academic goals, career interests, identity factors, and communication preferences to create ideal mentor-mentee pairs.',
      caseStudy: 'Partners see 95% satisfaction with match quality.',
      ...nodePositions.platform
    },
    experience: {
      label: 'The Experience',
      shortLabel: 'Experience',
      tooltipTitle: 'Conversation Sparks',
      tooltipStat: '3x',
      tooltipLabel: 'higher engagement',
      tooltipDesc: 'AI-powered prompts spark meaningful conversations and keep mentorship relationships active and impactful.',
      fullDescription: 'Personalized conversation prompts adapt to relationship stage, goals, and context to facilitate deeper connections.',
      caseStudy: 'Programs with Conversation Sparks see 3x higher engagement rates.',
      ...nodePositions.experience
    },
    intelligence: {
      label: 'The Intelligence',
      shortLabel: 'Intelligence',
      tooltipTitle: 'Real-Time Insights',
      tooltipStat: '100%',
      tooltipLabel: 'visibility',
      tooltipDesc: 'Comprehensive analytics dashboard provides real-time program health monitoring and actionable insights.',
      fullDescription: 'Track engagement, identify at-risk relationships, measure outcomes, and demonstrate ROI with powerful analytics.',
      caseStudy: 'Admins save 15+ hours/month with automated insights.',
      ...nodePositions.intelligence
    },
    integration: {
      label: 'Integration',
      shortLabel: 'Integration',
      tooltipTitle: 'Seamless Integration',
      tooltipStat: 'SSO',
      tooltipLabel: '& CRM ready',
      tooltipDesc: 'Integrate with your existing systems including SSO, CRM, and student information systems.',
      fullDescription: 'Enterprise-grade security with SAML SSO, API access, and integrations with Salesforce, Slate, and major SIS platforms.',
      caseStudy: 'Typical implementation takes 2-4 weeks from kickoff to launch.',
      ...nodePositions.integration
    }
  };

  // Map member image keys to imported images
  const memberImageMap: Record<string, string> = {
    heroMaya: heroMaya,
    heroAnya: heroAnya,
    heroJordan: heroJordan,
  };

  // Use custom members if provided, otherwise fall back to defaults
  const customMembers = fieldValues.members || [];

  const networkMembers: NetworkMember[] = customMembers.length >= 3 ? customMembers.slice(0, 3).map((m: any) => ({
    name: m.member_name || 'Network Member',
    role: m.role || 'Member',
    image: m.image?.src || memberImageMap[m.image_key] || heroMaya,
    bio: m.bio || 'Mentorship made a difference.',
    expertise: m.expertise ? m.expertise.split(',').map((s: string) => s.trim()) : [],
    stats: [
      { label: m.stat1_label || 'Stat 1', value: m.stat1_value || '0' },
      { label: m.stat2_label || 'Stat 2', value: m.stat2_value || '0' },
      { label: m.stat3_label || 'Stat 3', value: m.stat3_value || '0' }
    ]
  })) : [
    {
      name: 'Sarah Chen',
      role: 'Student Success',
      image: heroMaya,
      bio: 'AI-powered matching connected me with the perfect mentor for my career goals.',
      expertise: ['Career Development', 'Networking', 'Goal Setting'],
      stats: [
        { label: 'Match Quality', value: '95%' },
        { label: 'Engagement', value: 'High' },
        { label: 'Outcome', value: 'Hired' }
      ]
    },
    {
      name: 'Marcus Williams',
      role: 'Early Career Professional',
      image: heroJordan,
      bio: 'The platform made mentorship accessible and structured for my busy schedule.',
      expertise: ['Leadership', 'Professional Growth', 'Work-Life Balance'],
      stats: [
        { label: 'Sessions', value: '24' },
        { label: 'Skills Gained', value: '8' },
        { label: 'Confidence', value: '+45%' }
      ]
    },
    {
      name: 'Dr. Priya Patel',
      role: 'Program Administrator',
      image: heroAnya,
      bio: 'Real-time analytics help me identify issues early and demonstrate program impact.',
      expertise: ['Program Management', 'Data Analysis', 'Student Engagement'],
      stats: [
        { label: 'Time Saved', value: '15hr/mo' },
        { label: 'Program Size', value: '500+' },
        { label: 'ROI', value: '12:1' }
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
          background: 'var(--gradient-coral)',
          boxShadow: isExpanded
            ? 'var(--shadow-coral)'
            : 'var(--shadow-coral-sm)',
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
          fontWeight: 600,
          fontSize: 'var(--font-size-h3)',
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
                fontSize: 'var(--font-size-h4)',
                fontWeight: 600,
                color: 'var(--text-white)',
                fontFamily: 'var(--font-headline)',
                lineHeight: 1
              }}>
                {data.tooltipStat}
              </strong>
              <span style={{
                fontSize: 'var(--font-size-small)',
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

  const renderMemberModal = () => {
    if (!selectedMember) return null;

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
        onClick={() => setSelectedMember(null)}
        role="dialog"
        aria-modal="true"
        aria-labelledby="member-modal-title"
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
            onClick={() => setSelectedMember(null)}
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
            aria-label="Close member profile"
          >
            ×
          </button>

          <div style={{ display: 'flex', alignItems: 'center', gap: 'var(--spacing-lg)', marginBottom: 'var(--spacing-lg)' }}>
            <img
              src={selectedMember.image}
              alt={selectedMember.name}
              style={{
                width: '100px',
                height: '100px',
                borderRadius: 'var(--radius-circle)',
                objectFit: 'cover',
                border: '4px solid var(--text-coral)'
              }}
            />
            <div>
              <h3 id="member-modal-title" style={{ fontSize: 'var(--font-size-h3)', fontWeight: 500, marginBottom: 'var(--spacing-xxs)' }}>
                {selectedMember.name}
              </h3>
              <p style={{ color: 'var(--text-coral)', fontSize: 'var(--font-size-body)', fontWeight: 600 }}>
                {selectedMember.role}
              </p>
            </div>
          </div>

          <p style={{ fontSize: 'var(--font-size-body)', lineHeight: 'var(--line-height-normal)', color: 'var(--text-muted)', marginBottom: 'var(--spacing-lg)' }}>
            {selectedMember.bio}
          </p>

          <div style={{ marginBottom: 'var(--spacing-lg)' }}>
            <h4 style={{ fontSize: 'var(--font-size-small)', fontWeight: 600, marginBottom: 'var(--spacing-sm)', color: 'var(--text-secondary)' }}>
              Expertise
            </h4>
            <div style={{ display: 'flex', gap: 'var(--spacing-xs)', flexWrap: 'wrap' }}>
              {selectedMember.expertise.map((skill, index) => (
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
            {selectedMember.stats.map((stat, index) => (
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

  // Mobile/tablet simplified version with stacked layout
  const renderMobileHero = () => (
    <div style={{ padding: '0', width: '100%' }}>
      {/* Text content first */}
      <div style={{
        display: 'inline-flex',
        alignItems: 'center',
        padding: 'var(--spacing-xs) var(--spacing-md)',
        background: 'var(--bg-light-coral)',
        borderRadius: 'var(--radius-full)',
        fontSize: 'var(--font-size-small)',
        fontWeight: 600,
        color: 'var(--text-coral)',
        marginBottom: 'var(--spacing-md)',
        border: '1px solid var(--border-medium)',
      }}>
        {fieldValues.badge || 'MENTOR COLLECTIVE'}
      </div>

      <h1 style={{
        fontSize: 'var(--font-size-h2)',
        fontWeight: 600,
        lineHeight: 'var(--line-height-tight)',
        letterSpacing: 'var(--letter-spacing-tight)',
        marginBottom: 'var(--spacing-md)',
        color: 'var(--text-primary)',
        fontFamily: 'var(--font-headline)',
      }}>
        {fieldValues.title || 'Mentorship, Reinvented as AI Infrastructure'}
      </h1>

      <p style={{
        fontSize: 'var(--font-size-body)',
        color: 'var(--text-secondary)',
        lineHeight: 'var(--line-height-relaxed)',
        marginBottom: 'var(--spacing-lg)',
        maxWidth: 'var(--max-width-prose)',
      }}>
        {fieldValues.subtitle || 'The Mentorship OS powers belonging, career readiness, and talent development across the entire education-to-workforce ecosystem.'}
      </p>

      <a
        href={fieldValues.primary_button_url || '#'}
        className="btn-primary-navy"
        style={{ width: '100%', display: 'block', textAlign: 'center', marginBottom: 'var(--spacing-lg)' }}
        aria-label={fieldValues.primary_button_text}
      >
        {fieldValues.primary_button_text || 'Request a Demo'}
      </a>

      {/* Mobile visual - avatars in horizontal row */}
      <div style={{
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        gap: 'var(--spacing-md)',
        marginTop: 'var(--spacing-md)',
      }}>
        {networkMembers.slice(0, 3).map((member, index) => (
          <div
            key={index}
            onClick={() => setSelectedMember(member)}
            style={{
              width: '90px',
              height: '90px',
              borderRadius: 'var(--radius-circle)',
              border: '3px solid var(--bg-white)',
              boxShadow: '0 4px 12px rgba(239, 71, 111, 0.25)',
              overflow: 'hidden',
              cursor: 'pointer',
            }}
          >
            <img
              src={member.image}
              alt={`${member.name} - ${member.role}`}
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
  );

  return (
    <>
      <style>{`
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

        /* Avatar container z-index on hover */
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
      `}</style>
      <script dangerouslySetInnerHTML={{__html: `
        (function() {
          function initProductDiagram() {
            // Avatar hover states
            const avatarContainers = document.querySelectorAll('.product-avatar-wrapper');
            let currentTooltip = null;

            avatarContainers.forEach((container, index) => {
              const tooltip = document.querySelector('.product-avatar-tooltip-' + index);
              const avatarContainer = container.closest('.avatar-container');

              if (!tooltip || !avatarContainer) return;

              avatarContainer.addEventListener('mouseenter', function(e) {
                e.stopPropagation();

                if (currentTooltip && currentTooltip !== tooltip) {
                  currentTooltip.style.opacity = '0';
                  currentTooltip.style.visibility = 'hidden';
                }

                container.style.boxShadow = '0 8px 24px rgba(239, 71, 111, 0.4), 0 0 0 4px rgba(239, 71, 111, 0.5)';

                requestAnimationFrame(function() {
                  tooltip.style.opacity = '1';
                  tooltip.style.visibility = 'visible';
                  currentTooltip = tooltip;
                });
              }, { passive: true });

              avatarContainer.addEventListener('mouseleave', function(e) {
                e.stopPropagation();

                container.style.boxShadow = '0 4px 12px rgba(239, 71, 111, 0.25), 0 0 0 2px rgba(239, 71, 111, 0.3)';

                tooltip.style.opacity = '0';
                tooltip.style.visibility = 'hidden';
                if (currentTooltip === tooltip) {
                  currentTooltip = null;
                }
              }, { passive: true });
            });
          }

          if (document.readyState === 'loading') {
            document.addEventListener('DOMContentLoaded', initProductDiagram);
          } else {
            setTimeout(initProductDiagram, 100);
          }
        })();
      `}} />
      <ScrollAnimationScript />
      <section
        className="scroll-animate"
        style={{
          minHeight: isMobile ? 'auto' : '65vh',
          display: 'flex',
          alignItems: 'center',
          padding: isMobile ? 'calc(80px + var(--spacing-xl)) var(--spacing-lg) var(--spacing-xl)' : 'calc(80px + var(--spacing-xl)) var(--spacing-lg) var(--spacing-2xl)',
          background: 'var(--gradient-hero)',
          backgroundImage: 'var(--pattern-dots)',
          backgroundSize: 'var(--pattern-dots-size)',
          position: 'relative',
          overflow: 'hidden',
        }}
      >
        <div style={{ maxWidth: 'var(--max-width-xl)', margin: '0 auto', padding: '0 var(--container-padding)', width: '100%' }}>
          {isMobile ? renderMobileHero() : (
            <>
              <div style={{
                display: 'grid',
                gridTemplateColumns: '1fr 1fr',
                gap: 'var(--spacing-2xl)',
                alignItems: 'center',
                position: 'relative',
                zIndex: 1
              }}>
                {/* Left Column - Text Content */}
                <div>
                  {/* Badge/Pill */}
                  <div style={{
                    display: 'inline-flex',
                    alignItems: 'center',
                    padding: 'var(--spacing-xs) var(--spacing-md)',
                    background: 'var(--bg-light-coral)',
                    borderRadius: 'var(--radius-full)',
                    fontSize: 'var(--font-size-small)',
                    fontWeight: 600,
                    color: 'var(--text-coral)',
                    marginBottom: 'var(--spacing-lg)',
                    border: '1px solid var(--border-medium)',
                  }}>
                    {fieldValues.badge || 'MENTOR COLLECTIVE'}
                  </div>

                  <h1 style={{
                    fontFamily: 'var(--font-headline)',
                    fontSize: 'var(--font-size-h1)',
                    fontWeight: 600,
                    lineHeight: 'var(--line-height-tight)',
                    marginBottom: 'var(--spacing-md)',
                    color: 'var(--text-primary)',
                    letterSpacing: 'var(--letter-spacing-tight)',
                  }}>
                    {fieldValues.title || 'Mentorship, Reinvented as AI Infrastructure'}
                  </h1>

                  <p style={{
                    fontFamily: 'var(--font-body)',
                    fontSize: 'var(--font-size-body-lg)',
                    color: 'var(--text-secondary)',
                    lineHeight: 'var(--line-height-relaxed)',
                    marginBottom: 'var(--spacing-xl)',
                    maxWidth: 'var(--max-width-prose)',
                  }}>
                    {fieldValues.subtitle || 'The Mentorship OS powers belonging, career readiness, and talent development across the entire education-to-workforce ecosystem. Built on human relationships, accelerated by AI, and proven at scale, this technology fuels human connection rather than replacing it.'}
                  </p>

                  <a
                    href={fieldValues.primary_button_url || '#'}
                    className="btn-primary-navy"
                    aria-label={fieldValues.primary_button_text}
                  >
                    {fieldValues.primary_button_text || 'Request a Demo'}
                    <svg width="18" height="18" viewBox="0 0 24 24" fill="none">
                      <path d="M5 12H19M19 12L12 5M19 12L12 19" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                    </svg>
                  </a>
                </div>

                {/* Right Column - Interactive Diagram */}
                <div style={{
                  position: 'relative',
                  width: '100%',
                  maxWidth: '600px',
                  height: '600px',
                  margin: '0 auto',
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
                      <linearGradient id="productLineGradient" x1="0%" y1="0%" x2="100%" y2="100%">
                        <stop offset="0%" style={{ stopColor: '#EF476F', stopOpacity: 0.6 }} />
                        <stop offset="100%" style={{ stopColor: '#F89F7B', stopOpacity: 0.3 }} />
                      </linearGradient>

                      <filter id="productGlow">
                        <feGaussianBlur stdDeviation="3" result="coloredBlur"/>
                        <feMerge>
                          <feMergeNode in="coloredBlur"/>
                          <feMergeNode in="SourceGraphic"/>
                        </feMerge>
                      </filter>
                    </defs>

                    {/* Dynamic connection lines */}
                    <g>
                      <line x1="120" y1="30" x2="300" y2="140" stroke="url(#productLineGradient)" strokeWidth="2.5">
                        <animate attributeName="opacity" values="0;0;0.7;0.7;0" dur="6s" repeatCount="indefinite" />
                      </line>
                      <circle cx="120" cy="30" r="5" fill="#EF476F" filter="url(#productGlow)">
                        <animate attributeName="opacity" values="0;0;0.8;0.8;0" dur="6s" repeatCount="indefinite" />
                      </circle>
                      <circle cx="300" cy="140" r="5" fill="#F89F7B" filter="url(#productGlow)">
                        <animate attributeName="opacity" values="0;0;0.8;0.8;0" dur="6s" repeatCount="indefinite" />
                      </circle>
                    </g>

                    <g>
                      <line x1="570" y1="150" x2="410" y2="380" stroke="url(#productLineGradient)" strokeWidth="2.5">
                        <animate attributeName="opacity" values="0;0.7;0.7;0;0" dur="7s" repeatCount="indefinite" />
                      </line>
                      <circle cx="570" cy="150" r="5" fill="#EF476F" filter="url(#productGlow)">
                        <animate attributeName="opacity" values="0;0.8;0.8;0;0" dur="7s" repeatCount="indefinite" />
                      </circle>
                      <circle cx="410" cy="380" r="5" fill="#F89F7B" filter="url(#productGlow)">
                        <animate attributeName="opacity" values="0;0.8;0.8;0;0" dur="7s" repeatCount="indefinite" />
                      </circle>
                    </g>

                    <g>
                      <line x1="510" y1="570" x2="410" y2="380" stroke="url(#productLineGradient)" strokeWidth="2.5">
                        <animate attributeName="opacity" values="0.6;0;0;0.6;0.6" dur="8s" repeatCount="indefinite" />
                      </line>
                      <circle cx="510" cy="570" r="5" fill="#EF476F" filter="url(#productGlow)">
                        <animate attributeName="opacity" values="0.7;0;0;0.7;0.7" dur="8s" repeatCount="indefinite" />
                      </circle>
                      <circle cx="410" cy="380" r="5" fill="#F89F7B" filter="url(#productGlow)">
                        <animate attributeName="opacity" values="0.7;0;0;0.7;0.7" dur="8s" repeatCount="indefinite" />
                      </circle>
                    </g>

                    <g>
                      <line x1="30" y1="450" x2="160" y2="310" stroke="url(#productLineGradient)" strokeWidth="2.5">
                        <animate attributeName="opacity" values="0;0;0.7;0;0" dur="5s" repeatCount="indefinite" />
                      </line>
                      <circle cx="30" cy="450" r="5" fill="#EF476F" filter="url(#productGlow)">
                        <animate attributeName="opacity" values="0;0;0.8;0;0" dur="5s" repeatCount="indefinite" />
                      </circle>
                      <circle cx="160" cy="310" r="5" fill="#F89F7B" filter="url(#productGlow)">
                        <animate attributeName="opacity" values="0;0;0.8;0;0" dur="5s" repeatCount="indefinite" />
                      </circle>
                    </g>

                    {/* Avatar to Avatar connections */}
                    <g>
                      <line x1="300" y1="140" x2="160" y2="310" stroke="url(#productLineGradient)" strokeWidth="3">
                        <animate attributeName="opacity" values="0;0.8;0.8;0;0" dur="8s" repeatCount="indefinite" />
                      </line>
                    </g>

                    <g>
                      <line x1="160" y1="310" x2="410" y2="380" stroke="url(#productLineGradient)" strokeWidth="3">
                        <animate attributeName="opacity" values="0.7;0;0;0.7;0" dur="6s" repeatCount="indefinite" />
                      </line>
                    </g>

                    <g>
                      <line x1="300" y1="140" x2="410" y2="380" stroke="url(#productLineGradient)" strokeWidth="3">
                        <animate attributeName="opacity" values="0;0;0.7;0.7;0" dur="9s" repeatCount="indefinite" />
                      </line>
                    </g>

                    {/* Floating particles */}
                    <circle cx="200" cy="200" r="4" fill="#F89F7B" filter="url(#productGlow)">
                      <animate attributeName="opacity" values="0;0.8;0" dur="4s" repeatCount="indefinite" />
                      <animate attributeName="cx" values="200;280;200" dur="4s" repeatCount="indefinite" />
                      <animate attributeName="cy" values="200;160;200" dur="4s" repeatCount="indefinite" />
                    </circle>
                    <circle cx="400" cy="300" r="4" fill="#FED700" filter="url(#productGlow)">
                      <animate attributeName="opacity" values="0;0.7;0" dur="5s" repeatCount="indefinite" begin="1s" />
                      <animate attributeName="cx" values="400;450;400" dur="5s" repeatCount="indefinite" begin="1s" />
                      <animate attributeName="cy" values="300;350;300" dur="5s" repeatCount="indefinite" begin="1s" />
                    </circle>
                  </svg>

                  {/* Interactive Nodes */}
                  {renderNode('platform', nodeData.platform)}
                  {renderNode('experience', nodeData.experience)}
                  {renderNode('intelligence', nodeData.intelligence)}
                  {renderNode('integration', nodeData.integration)}

                  {/* Center Avatars - Triangle arrangement */}
                  <div style={{
                    position: 'absolute',
                    top: '50%',
                    left: '50%',
                    transform: 'translate(-50%, -50%)',
                    width: '380px',
                    height: '380px',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    zIndex: 150
                  }}>
                    {networkMembers.slice(0, 3).map((member, index) => {
                      const positions = [
                        { top: '0px', left: '105px' },
                        { top: '165px', left: '0px' },
                        { top: '165px', left: '210px' }
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
                            className="product-avatar-wrapper"
                            onClick={() => setSelectedMember(member)}
                            onMouseEnter={() => setHoveredAvatar(index)}
                            onMouseLeave={() => setHoveredAvatar(null)}
                            onKeyPress={(e) => {
                              if (e.key === 'Enter' || e.key === ' ') {
                                e.preventDefault();
                                setSelectedMember(member);
                              }
                            }}
                            tabIndex={0}
                            role="button"
                            aria-label={`View profile of ${member.name}, ${member.role}`}
                            style={{
                              width: '145px',
                              height: '145px',
                              borderRadius: 'var(--radius-circle)',
                              border: '3px solid var(--bg-white)',
                              boxShadow: isHovered
                                ? '0 8px 24px rgba(239, 71, 111, 0.4), 0 0 0 3px rgba(239, 71, 111, 0.5)'
                                : '0 4px 12px rgba(239, 71, 111, 0.25), 0 0 0 2px rgba(239, 71, 111, 0.3)',
                              overflow: 'hidden',
                              background: 'var(--bg-light)',
                              cursor: 'pointer',
                              transition: 'all 0.3s ease',
                            }}
                          >
                            <img
                              src={member.image}
                              alt={`${member.name} - ${member.role}`}
                              style={{
                                width: '100%',
                                height: '100%',
                                objectFit: 'cover'
                              }}
                            />
                          </div>

                          {/* Hover Tooltip */}
                          <div
                            className={`product-avatar-tooltip-${index}`}
                            style={{
                              position: 'absolute',
                              top: '120px',
                              left: '50%',
                              transform: 'translateX(-50%)',
                              background: 'var(--bg-white)',
                              borderRadius: 'var(--radius-lg)',
                              padding: 'var(--spacing-md) var(--spacing-md)',
                              boxShadow: 'var(--shadow-lg)',
                              zIndex: 600,
                              minWidth: '220px',
                              textAlign: 'center' as const,
                              pointerEvents: 'none',
                              opacity: 0,
                              visibility: 'hidden',
                              transition: 'var(--transition-medium)',
                            }}>
                            <div style={{
                              fontSize: 'var(--font-size-body-lg)',
                              fontWeight: 500,
                              color: 'var(--text-primary)',
                              marginBottom: '2px',
                              fontFamily: 'var(--font-headline)',
                              lineHeight: 1.2,
                            }}>
                              {member.name}
                            </div>
                            <div style={{
                              fontSize: 'var(--font-size-small)',
                              fontWeight: 600,
                              color: 'var(--text-primary)',
                              marginBottom: 'var(--spacing-xs)',
                              fontFamily: 'var(--font-body)',
                            }}>
                              {member.role}
                            </div>
                            <div style={{
                              fontSize: 'var(--font-size-small)',
                              fontWeight: 500,
                              color: 'var(--text-secondary)',
                              fontFamily: 'var(--font-body)',
                              lineHeight: 'var(--line-height-normal)',
                            }}>
                              {member.bio.split('.')[0]}
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

      {renderMemberModal()}
    </>
  );
}

export const fields: any = [
  {
    type: 'text',
    name: 'badge',
    label: 'Badge Text',
    default: 'MENTOR COLLECTIVE',
  },
  {
    type: 'text',
    name: 'title',
    label: 'Hero Title',
    default: 'Mentorship, Reinvented as AI Infrastructure',
  },
  {
    type: 'text',
    name: 'subtitle',
    label: 'Subtitle',
    default: 'The Mentorship OS powers belonging, career readiness, and talent development across the entire education-to-workforce ecosystem. Built on human relationships, accelerated by AI, and proven at scale, this technology fuels human connection rather than replacing it.',
  },
  {
    type: 'text',
    name: 'primary_button_text',
    label: 'Primary Button Text',
    default: 'Request a Demo',
  },
  {
    type: 'text',
    name: 'primary_button_url',
    label: 'Primary Button URL',
    default: '#contact',
  },
  {
    type: 'group',
    name: 'nodes',
    label: 'Interactive Diagram Nodes (4 nodes)',
    help_text: 'The 4 clickable nodes around the diagram (order: Platform, Experience, Intelligence, Integration). Leave empty to use default content.',
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
        default: 'The Platform',
      },
      {
        type: 'text',
        name: 'short_label',
        label: 'Short Label',
        default: 'Platform',
      },
      {
        type: 'text',
        name: 'tooltipTitle',
        label: 'Tooltip Title',
        default: 'AI-Powered Matching',
      },
      {
        type: 'text',
        name: 'tooltipStat',
        label: 'Stat Number',
        default: '80+',
      },
      {
        type: 'text',
        name: 'tooltipLabel',
        label: 'Stat Label',
        default: 'matching variables',
      },
      {
        type: 'text',
        name: 'tooltipDesc',
        label: 'Short Description',
        default: 'Our algorithm considers 80+ variables to create meaningful, identity-aligned matches.',
      },
      {
        type: 'text',
        name: 'fullDescription',
        label: 'Full Description (shown when expanded)',
        default: 'Advanced AI matching considers academic goals, career interests, identity factors, and communication preferences to create ideal mentor-mentee pairs.',
      },
      {
        type: 'text',
        name: 'caseStudy',
        label: 'Case Study Text',
        default: 'Partners see 95% satisfaction with match quality.',
      },
    ],
  },
  {
    type: 'group',
    name: 'members',
    label: 'Member Profiles (3 avatars in diagram)',
    help_text: 'The 3 member avatars in the center. Leave empty to use default content.',
    occurrence: {
      min: 0,
      max: 3,
      default: 0,
    },
    children: [
      {
        type: 'text',
        name: 'member_name',
        label: 'Member Name',
        default: 'Sarah Chen',
      },
      {
        type: 'text',
        name: 'role',
        label: 'Role/Title',
        default: 'Student Success',
      },
      {
        type: 'image',
        name: 'image',
        label: 'Profile Image',
        default: {
          src: '',
          alt: 'Member profile',
        },
      },
      {
        type: 'choice',
        name: 'image_key',
        label: 'Profile Image (Preset)',
        help_text: 'Only used if no custom image is uploaded above.',
        choices: [
          ['heroMaya', 'Maya (Default)'],
          ['heroAnya', 'Anya'],
          ['heroJordan', 'Jordan'],
        ],
        default: 'heroMaya',
      },
      {
        type: 'text',
        name: 'bio',
        label: 'Biography',
        default: 'AI-powered matching connected me with the perfect mentor.',
      },
      {
        type: 'text',
        name: 'expertise',
        label: 'Expertise (comma-separated)',
        default: 'Career Development, Networking, Goal Setting',
      },
      {
        type: 'text',
        name: 'stat1_label',
        label: 'Stat 1 Label',
        default: 'Match Quality',
      },
      {
        type: 'text',
        name: 'stat1_value',
        label: 'Stat 1 Value',
        default: '95%',
      },
      {
        type: 'text',
        name: 'stat2_label',
        label: 'Stat 2 Label',
        default: 'Engagement',
      },
      {
        type: 'text',
        name: 'stat2_value',
        label: 'Stat 2 Value',
        default: 'High',
      },
      {
        type: 'text',
        name: 'stat3_label',
        label: 'Stat 3 Label',
        default: 'Outcome',
      },
      {
        type: 'text',
        name: 'stat3_value',
        label: 'Stat 3 Value',
        default: 'Hired',
      },
    ],
  },
];

export const meta = {
  label: 'Product Hero with Interactive Diagram',
};
