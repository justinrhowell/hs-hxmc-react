import React, { useState, useEffect } from 'react';
import {
  ModuleFields,
  TextField,
} from '@hubspot/cms-components/fields';
import heroImg01 from '../../../assets/hero-img-01.png';
import heroImg02 from '../../../assets/hero-img-02.png';
import heroImg03 from '../../../assets/hero-img-03.png';
import { DemoModal } from '../DemoModal';
import { useScrollAnimation, animationStyles } from '../useScrollAnimation';

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

  const description = "In an AI-driven world, human skills are your edge. We help schools and employers use AI to scale human connection, improving durable skills, belonging and career outcomes.";

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

  const nodeData: Record<string, NodeData> = {
    learners: {
      label: 'Learners',
      shortLabel: 'Learners',
      tooltipTitle: 'Learners & Career Starters',
      tooltipStat: '70%',
      tooltipLabel: 'planning careers in critical sectors',
      tooltipDesc: 'Students and individuals seeking guidance and career development through meaningful mentorship connections.',
      fullDescription: 'Our AI matches learners with mentors based on goals, interests, and career aspirations. Real-time insights help track progress and ensure meaningful connections.',
      caseStudy: 'Duke University saw 85% engagement rate among students using our mentorship platform.',
      position: { top: '0%', left: '50%', transform: 'translateX(-50%)' },
      tooltipPosition: 'bottom'
    },
    employers: {
      label: 'Employers',
      shortLabel: 'Employers',
      tooltipTitle: 'Employers',
      tooltipStat: '+42%',
      tooltipLabel: 'increase in conversion',
      tooltipDesc: 'Organizations leveraging mentorship to develop talent, increase retention, and build stronger teams.',
      fullDescription: 'Help your workforce develop critical skills through peer mentorship. Our platform facilitates knowledge transfer and builds stronger team connections.',
      caseStudy: 'JPMorgan Chase increased intern-to-full-time conversion by 42% using structured mentorship.',
      position: { right: '0%', top: '50%', transform: 'translateY(-50%)' },
      tooltipPosition: 'left'
    },
    organizations: {
      label: 'Organizations',
      shortLabel: 'Organizations',
      tooltipTitle: 'Organizations',
      tooltipStat: '2.5x',
      tooltipLabel: 'more likely to feel career-ready',
      tooltipDesc: 'Educational institutions and nonprofits using our platform to drive meaningful outcomes and student success.',
      fullDescription: 'Scale mentorship across your entire organization with AI-powered matching, automated check-ins, and data-driven insights.',
      caseStudy: 'UCLA reported students were 2.5x more likely to feel career-ready after participating in our program.',
      position: { bottom: '0%', left: '50%', transform: 'translateX(-50%)' },
      tooltipPosition: 'top'
    },
    partnerships: {
      label: 'Strategic Partnerships',
      shortLabel: 'Partnerships',
      tooltipTitle: 'Strategic Partnerships',
      tooltipStat: '90-92%',
      tooltipLabel: 'retention rate',
      tooltipDesc: 'Fostering curiosity and innovation through guided conversations that spark growth and discovery.',
      fullDescription: 'Partner organizations benefit from shared best practices, collaborative learning, and network effects across multiple institutions.',
      caseStudy: 'Our partnership network maintains a 90-92% retention rate year-over-year.',
      position: { left: '0%', top: '50%', transform: 'translateY(-50%)' },
      tooltipPosition: 'right'
    }
  };

  const mentorProfiles: MentorProfile[] = [
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
      background: 'white',
      color: '#1a1a1a',
      padding: isExpanded ? '2rem' : '1.5rem',
      borderRadius: '16px',
      boxShadow: '0 12px 40px rgba(0, 0, 0, 0.2)',
      opacity: 0,
      pointerEvents: 'none',
      transition: 'opacity 0.3s ease, transform 0.3s ease',
      zIndex: 5,
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
          display: 'flex',
          alignItems: 'center',
          gap: '0.75rem',
          padding: '1rem 1.5rem',
          borderRadius: '60px',
          background: isExpanded
            ? 'linear-gradient(135deg, #FF6B9D 0%, #FFA0BC 100%)'
            : 'linear-gradient(135deg, #FF4B7E 0%, #FF6B9D 100%)',
          boxShadow: isExpanded
            ? '0 8px 32px rgba(255, 75, 126, 0.5)'
            : '0 4px 16px rgba(255, 75, 126, 0.3)',
          cursor: 'pointer',
          transition: 'all 0.3s ease',
          transform: isExpanded ? 'scale(1.05)' : 'scale(1)',
          zIndex: isExpanded ? 20 : 10
        }}
      >
        {/* Plus/Minus Icon */}
        <div style={{
          width: '28px',
          height: '28px',
          borderRadius: '50%',
          background: 'rgba(255, 255, 255, 0.3)',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          color: 'white',
          fontWeight: 700,
          fontSize: '18px',
          flexShrink: 0,
          transition: 'transform 0.3s ease',
          transform: isExpanded ? 'rotate(45deg)' : 'rotate(0deg)'
        }}>
          +
        </div>

        {/* Node Content */}
        <div style={{ display: 'flex', flexDirection: 'column', gap: '0.25rem' }}>
          <span style={{
            color: 'white',
            fontFamily: 'var(--font-headline)',
            fontSize: '0.95rem',
            fontWeight: 500,
            whiteSpace: 'nowrap'
          }}>
            {data.label}
          </span>
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
            fontSize: '1.25rem',
            fontWeight: 600,
            marginBottom: '0.75rem',
            color: '#FF4B7E'
          }}>
            {data.tooltipTitle}
          </h4>
          <p style={{
            fontFamily: 'var(--font-body)',
            fontSize: '0.95rem',
            lineHeight: 1.6,
            color: '#4a4a4a',
            marginBottom: '1rem'
          }}>
            {data.tooltipDesc}
          </p>

          {isExpanded && (
            <>
              <p style={{
                fontSize: '0.9rem',
                lineHeight: 1.6,
                color: '#666',
                marginBottom: '1rem',
                paddingTop: '1rem',
                borderTop: '1px solid #E0E0E0'
              }}>
                {data.fullDescription}
              </p>
              <div style={{
                background: '#F8F9FA',
                padding: '1rem',
                borderRadius: '8px',
                marginBottom: '1rem'
              }}>
                <strong style={{ fontSize: '0.85rem', color: '#666' }}>Case Study:</strong>
                <p style={{ fontSize: '0.9rem', color: '#333', marginTop: '0.5rem' }}>
                  {data.caseStudy}
                </p>
              </div>
            </>
          )}

          <div style={{
            padding: '1rem',
            background: 'rgba(255, 75, 126, 0.05)',
            borderRadius: '12px',
            borderLeft: '4px solid #FF4B7E'
          }}>
            <div style={{
              display: 'flex',
              alignItems: 'baseline',
              gap: '0.5rem',
              flexWrap: 'wrap'
            }}>
              <strong style={{
                fontSize: '2rem',
                fontWeight: 800,
                color: '#FF4B7E',
                fontFamily: 'var(--font-headline)',
                lineHeight: 1
              }}>
                {data.tooltipStat}
              </strong>
              <span style={{
                fontSize: '0.9rem',
                color: '#1a1a1a',
                fontWeight: 500
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
          backgroundColor: 'rgba(0, 0, 0, 0.6)',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          zIndex: 9999,
          padding: '20px',
          backdropFilter: 'blur(4px)',
        }}
        onClick={() => setSelectedMentor(null)}
        role="dialog"
        aria-modal="true"
        aria-labelledby="mentor-modal-title"
      >
        <div
          style={{
            backgroundColor: 'white',
            borderRadius: '24px',
            maxWidth: '500px',
            width: '100%',
            padding: '40px',
            position: 'relative',
          }}
          onClick={(e) => e.stopPropagation()}
        >
          <button
            onClick={() => setSelectedMentor(null)}
            style={{
              position: 'absolute',
              top: '20px',
              right: '20px',
              background: 'transparent',
              border: 'none',
              cursor: 'pointer',
              color: '#666',
              fontSize: '24px',
              padding: '8px',
            }}
            aria-label="Close mentor profile"
          >
            ×
          </button>

          <div style={{ display: 'flex', alignItems: 'center', gap: '20px', marginBottom: '24px' }}>
            <img
              src={selectedMentor.image}
              alt={selectedMentor.name}
              style={{
                width: '100px',
                height: '100px',
                borderRadius: '50%',
                objectFit: 'cover',
                border: '4px solid #FF4B7E'
              }}
            />
            <div>
              <h3 id="mentor-modal-title" style={{ fontSize: '24px', fontWeight: 700, marginBottom: '4px' }}>
                {selectedMentor.name}
              </h3>
              <p style={{ color: '#FF4B7E', fontSize: '16px', fontWeight: 600 }}>
                {selectedMentor.role}
              </p>
            </div>
          </div>

          <p style={{ fontSize: '15px', lineHeight: 1.6, color: '#666', marginBottom: '20px' }}>
            {selectedMentor.bio}
          </p>

          <div style={{ marginBottom: '20px' }}>
            <h4 style={{ fontSize: '14px', fontWeight: 600, marginBottom: '12px', color: '#333' }}>
              Expertise
            </h4>
            <div style={{ display: 'flex', gap: '8px', flexWrap: 'wrap' }}>
              {selectedMentor.expertise.map((skill, index) => (
                <span
                  key={index}
                  style={{
                    background: '#FFF0F5',
                    color: '#FF4B7E',
                    padding: '6px 12px',
                    borderRadius: '20px',
                    fontSize: '13px',
                    fontWeight: 500
                  }}
                >
                  {skill}
                </span>
              ))}
            </div>
          </div>

          <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr 1fr', gap: '16px' }}>
            {selectedMentor.stats.map((stat, index) => (
              <div
                key={index}
                style={{
                  textAlign: 'center',
                  padding: '16px',
                  background: '#F8F9FA',
                  borderRadius: '12px'
                }}
              >
                <div style={{ fontSize: '24px', fontWeight: 700, color: '#FF4B7E', marginBottom: '4px' }}>
                  {stat.value}
                </div>
                <div style={{ fontSize: '12px', color: '#666' }}>
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
    <div style={{ padding: '2rem 0' }}>
      <h1 style={{
        fontFamily: 'var(--font-headline)',
        fontSize: '2.25rem',
        fontWeight: 500,
        lineHeight: 1.2,
        marginBottom: '1rem',
        color: '#1a1a1a',
      }}>
        {fieldValues.title}
      </h1>
      <p style={{
        fontSize: '1rem',
        color: '#4a4a4a',
        lineHeight: 1.6,
        marginBottom: '2rem'
      }}>
        {description}
      </p>

      {/* Mobile Stats Cards */}
      <div style={{ display: 'grid', gap: '1rem', marginBottom: '2rem' }}>
        {Object.entries(nodeData).map(([key, data]) => (
          <div
            key={key}
            style={{
              background: 'white',
              padding: '1.5rem',
              borderRadius: '16px',
              boxShadow: '0 4px 16px rgba(0, 0, 0, 0.08)',
              border: '2px solid rgba(255, 75, 126, 0.1)'
            }}
          >
            <h3 style={{
              fontSize: '1.1rem',
              fontWeight: 600,
              color: '#FF4B7E',
              marginBottom: '0.5rem'
            }}>
              {data.tooltipTitle}
            </h3>
            <p style={{ fontSize: '0.9rem', color: '#666', marginBottom: '1rem' }}>
              {data.tooltipDesc}
            </p>
            <div style={{
              background: 'rgba(255, 75, 126, 0.05)',
              padding: '0.75rem',
              borderRadius: '8px',
              borderLeft: '3px solid #FF4B7E'
            }}>
              <strong style={{ fontSize: '1.5rem', color: '#FF4B7E' }}>
                {data.tooltipStat}
              </strong>
              <span style={{ fontSize: '0.85rem', color: '#333', marginLeft: '0.5rem' }}>
                {data.tooltipLabel}
              </span>
            </div>
          </div>
        ))}
      </div>

      {/* Mobile Mentors */}
      <div style={{ marginBottom: '2rem' }}>
        <h3 style={{ fontSize: '1.25rem', fontWeight: 600, marginBottom: '1rem', textAlign: 'center' }}>
          Meet Our Mentors
        </h3>
        <div style={{ display: 'flex', justifyContent: 'center', gap: '1rem' }}>
          {mentorProfiles.map((mentor, index) => (
            <div
              key={index}
              onClick={() => setSelectedMentor(mentor)}
              style={{
                width: '80px',
                height: '80px',
                borderRadius: '50%',
                border: '3px solid white',
                boxShadow: '0 4px 12px rgba(0,0,0,0.15)',
                overflow: 'hidden',
                cursor: 'pointer',
                transition: 'transform 0.3s ease'
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
          background: 'linear-gradient(135deg, #FF4B7E 0%, #FF6B9D 100%)',
          color: 'white',
          padding: '1rem 2rem',
          borderRadius: '50px',
          fontSize: '1rem',
          fontWeight: 600,
          border: 'none',
          cursor: 'pointer',
          boxShadow: '0 8px 24px rgba(255, 75, 126, 0.3)',
          width: '100%'
        }}
        aria-label="Request a demo"
      >
        Request a Demo
      </button>
    </div>
  );

  return (
    <>
      <script dangerouslySetInnerHTML={{__html: `
        (function() {
          function initHeroDiagram() {
            // Avatar hover states - use vanilla JS since React state doesn't hydrate
            const avatarContainers = document.querySelectorAll('.avatar-wrapper');

            avatarContainers.forEach((container, index) => {
              const tooltip = document.querySelector('.avatar-tooltip-' + index);

              container.addEventListener('mouseenter', function() {
                // Add glow effect
                this.style.boxShadow = '0 8px 24px rgba(255, 75, 126, 0.4), 0 0 0 4px rgba(255, 75, 126, 0.5)';

                // Show tooltip
                if (tooltip) {
                  tooltip.style.opacity = '1';
                  tooltip.style.visibility = 'visible';
                }
              });

              container.addEventListener('mouseleave', function() {
                // Remove glow effect
                this.style.boxShadow = '0 4px 12px rgba(255, 75, 126, 0.25), 0 0 0 2px rgba(255, 75, 126, 0.3)';

                // Hide tooltip
                if (tooltip) {
                  tooltip.style.opacity = '0';
                  tooltip.style.visibility = 'hidden';
                }
              });
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
          minHeight: isMobile ? 'auto' : '85vh',
          display: 'flex',
          alignItems: 'center',
          padding: '3rem 0',
          background: 'linear-gradient(135deg, #FFFBF8 0%, #FFF8F3 50%, #FFFAF5 100%)',
          position: 'relative',
          overflow: 'hidden',
          ...animationStyles.fadeIn(isVisible),
        }}
        aria-labelledby="hero-heading"
      >
        <div style={{ maxWidth: '1200px', margin: '0 auto', padding: '0 1.5rem', width: '100%' }}>
          {isMobile ? renderMobileHero() : (
            <>
              <div className="hero-content" style={{
                display: 'grid',
                gridTemplateColumns: '1fr 1fr',
                gap: '4rem',
                alignItems: 'center',
                position: 'relative',
                zIndex: 1
              }}>
                <div>
                  <h1
                    id="hero-heading"
                    style={{
                      fontFamily: 'var(--font-headline)',
                      fontSize: '3.5rem',
                      fontWeight: 500,
                      lineHeight: 1.15,
                      marginBottom: '1.5rem',
                      color: '#1a1a1a',
                      letterSpacing: '-0.02em'
                    }}
                  >
                    {fieldValues.title}
                  </h1>
                  <p style={{
                    fontFamily: 'var(--font-body)',
                    fontSize: '1.15rem',
                    color: '#4a4a4a',
                    lineHeight: 1.7,
                    marginBottom: '2rem'
                  }}>
                    {description}
                  </p>
                  <button
                    onClick={() => setIsDemoModalOpen(true)}
                    style={{
                      background: 'linear-gradient(135deg, #FF4B7E 0%, #FF6B9D 100%)',
                      color: 'white',
                      padding: '1rem 2.5rem',
                      borderRadius: '50px',
                      fontFamily: 'var(--font-body)',
                      fontSize: '1.05rem',
                      fontWeight: 600,
                      border: 'none',
                      cursor: 'pointer',
                      boxShadow: '0 8px 24px rgba(255, 75, 126, 0.3)',
                      transition: 'all 0.3s ease'
                    }}
                    aria-label="Request a demo"
                  >
                    Request a Demo
                  </button>
                </div>

                <div className="hero-diagram" style={{
                  position: 'relative',
                  width: '100%',
                  maxWidth: '600px',
                  height: '600px',
                  margin: '0 auto',
                  overflow: 'visible'
                }}>
                  {/* SVG Connection Lines - Hidden to match reference design */}

                  {/* Interactive Nodes */}
                  {renderNode('learners', nodeData.learners)}
                  {renderNode('employers', nodeData.employers)}
                  {renderNode('organizations', nodeData.organizations)}
                  {renderNode('partnerships', nodeData.partnerships)}

                  {/* Center Avatars - Diagonal arrangement with overlap */}
                  <div style={{
                    position: 'absolute',
                    top: '50%',
                    left: '50%',
                    transform: 'translate(-50%, -50%)',
                    width: '200px',
                    height: '200px',
                    zIndex: 100
                  }}>
                    {mentorProfiles.map((mentor, index) => {
                      const positions = [
                        { top: '10px', left: '20px', zIndex: 1 },   // Avatar 1 - top left
                        { top: '50px', left: '70px', zIndex: 2 },   // Avatar 2 - center (overlapping)
                        { top: '90px', left: '120px', zIndex: 3 }   // Avatar 3 - bottom right
                      ];

                      const isHovered = hoveredAvatar === index;

                      return (
                        <div
                          key={index}
                          style={{
                            position: 'absolute',
                            ...positions[index],
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
                              width: '90px',
                              height: '90px',
                              borderRadius: '50%',
                              border: '4px solid white',
                              boxShadow: isHovered
                                ? '0 8px 24px rgba(255, 75, 126, 0.4), 0 0 0 4px rgba(255, 75, 126, 0.5)'
                                : '0 4px 12px rgba(255, 75, 126, 0.25), 0 0 0 2px rgba(255, 75, 126, 0.3)',
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
                              top: '110px',
                              left: '50%',
                              transform: 'translateX(-50%)',
                              background: 'white',
                              borderRadius: '16px',
                              padding: '20px 24px',
                              boxShadow: '0 12px 32px rgba(0, 0, 0, 0.15)',
                              zIndex: 200,
                              minWidth: '240px',
                              textAlign: 'center' as const,
                              pointerEvents: 'none',
                              opacity: 0,
                              visibility: 'hidden',
                              transition: 'opacity 0.3s ease, visibility 0.3s ease',
                            }}>
                            <div style={{
                              fontSize: '1.5rem',
                              fontWeight: 700,
                              color: '#1a1a1a',
                              marginBottom: '4px',
                              fontFamily: 'var(--font-headline)',
                            }}>
                              {mentor.name}
                            </div>
                            <div style={{
                              fontSize: '1rem',
                              color: '#999',
                              marginBottom: '12px',
                              fontFamily: 'var(--font-body)',
                            }}>
                              {mentor.role}
                            </div>
                            <div style={{
                              fontSize: '1.15rem',
                              fontWeight: 600,
                              color: '#FF4B7E',
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

              {/* Powered by badge */}
              <div style={{
                display: 'flex',
                justifyContent: 'center',
                marginTop: '3rem'
              }}>
                <button
                  style={{
                    background: 'white',
                    color: '#FF4B7E',
                    padding: '0.75rem 2rem',
                    borderRadius: '50px',
                    fontFamily: 'var(--font-body)',
                    fontSize: '0.95rem',
                    fontWeight: 600,
                    border: '2px solid rgba(255, 75, 126, 0.2)',
                    cursor: 'default',
                    boxShadow: '0 4px 16px rgba(255, 75, 126, 0.15)',
                  }}
                  aria-label="Powered by AI-powered mentorship OS"
                >
                  POWERED BY AI-POWERED MENTORSHIP OS
                </button>
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

export const fields = (
  <ModuleFields>
    <TextField
      name="title"
      label="Hero Title"
      default="The AI Mentorship OS powering connection, retention and results."
    />
  </ModuleFields>
);

export const meta = {
  label: 'Hero with Diagram',
};
