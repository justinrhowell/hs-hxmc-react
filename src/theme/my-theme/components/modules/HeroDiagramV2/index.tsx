import React, { useState, useEffect } from 'react';
import heroToccara from '../../../assets/Hero_Toccara.jpg';
import heroSara from '../../../assets/Hero_Sara.jpg';
import heroNic from '../../../assets/Hero_Nic.jpg';
import { DemoModal } from '../../shared/DemoModal';
import { ScrollAnimationScript } from '../../shared/ScrollAnimationScript';

interface NodeData {
  label: string;
  shortLabel: string;
  tooltipTitle: string;
  tooltipStat: string;
  tooltipLabel: string;
  tooltipDesc: string;
  fullDescription: string;
  caseStudy: string;
  angle: number; // Position on circle in degrees
}

interface MentorProfile {
  name: string;
  role: string;
  image: string;
  bio: string;
  expertise: string[];
  stats: { label: string; value: string }[];
  size: 'small' | 'medium' | 'large';
}

export function Component({ fieldValues }: any) {
  const [isDemoModalOpen, setIsDemoModalOpen] = useState(false);
  const [expandedNode, setExpandedNode] = useState<string | null>(null);
  const [selectedMentor, setSelectedMentor] = useState<MentorProfile | null>(null);
  const [hoveredAvatar, setHoveredAvatar] = useState<number | null>(null);
  const [isMobile, setIsMobile] = useState(false);

  const description = fieldValues?.description || "Mentorship reinvented as scalable AI infrastructure. Foster human connection, enhance durable skills, and drive improved retention and career outcomes across your educational, workforce, and employer ecosystems.";

  useEffect(() => {
    const checkMobile = () => setIsMobile(window.innerWidth <= 768);
    checkMobile();
    window.addEventListener('resize', checkMobile);
    return () => window.removeEventListener('resize', checkMobile);
  }, []);

  // Node data with angles for circular positioning
  const nodeData: NodeData[] = [
    {
      label: 'Students & Early Talent',
      shortLabel: 'Students',
      tooltipTitle: 'Students & Early Talent',
      tooltipStat: '2.5x',
      tooltipLabel: 'more likely to feel career-ready',
      tooltipDesc: 'Students, upskillers, and early talent build the durable skills and social capital needed to unlock career mobility.',
      fullDescription: '2.5x more likely to feel career-ready and develop the durable skills employers need.',
      caseStudy: 'Students paired with mentors report significantly higher career confidence.',
      angle: 315 // Top left
    },
    {
      label: 'Employers',
      shortLabel: 'Employers',
      tooltipTitle: 'Employers',
      tooltipStat: '+42%',
      tooltipLabel: 'increase in intern-to-full-time conversion',
      tooltipDesc: 'Employers leverage mentorship to boost retention and build stronger teams.',
      fullDescription: 'Reduced early attrition and increased engagement among underrepresented talent.',
      caseStudy: 'Partner employers see 42% increase in intern-to-full-time conversion rates.',
      angle: 45 // Top right
    },
    {
      label: 'Organizations',
      shortLabel: 'Organizations',
      tooltipTitle: 'Organizations',
      tooltipStat: '+8-19%',
      tooltipLabel: 'boost in sense of belonging',
      tooltipDesc: 'Organizations use our platform to improve belonging, retention, and career readiness.',
      fullDescription: '+8-19% boost in sense of belonging across program participants.',
      caseStudy: 'Partner institutions report significant improvements in student retention.',
      angle: 135 // Bottom right
    },
    {
      label: 'Strategic Partnerships',
      shortLabel: 'Partnerships',
      tooltipTitle: 'Strategic Partnerships',
      tooltipStat: '90-92%',
      tooltipLabel: 'retention (vs. 64% national avg)',
      tooltipDesc: 'Ecosystem partners embed mentorship directly into certification and training pipelines.',
      fullDescription: 'Drive 90–92% retention (vs. 64% national avg).',
      caseStudy: 'Strategic partners achieve retention rates far exceeding national averages.',
      angle: 225 // Bottom left
    }
  ];

  // Mentor profiles - 3 main characters for homepage: Toccara (top), Sara, Nic
  const mentorProfiles: MentorProfile[] = [
    {
      name: 'Toccara Richards',
      role: 'First Year Student',
      image: heroToccara,
      bio: 'Mentorship improved her sense of belonging.',
      expertise: ['Campus Resources', 'Peer Support', 'Persistence'],
      stats: [
        { label: 'Belonging', value: '+19%' },
        { label: 'Campus Engagement', value: '+45%' },
        { label: 'Graduated', value: '4 Years' }
      ],
      size: 'large'
    },
    {
      name: 'Sara Chen',
      role: 'Award Winning Researcher',
      image: heroSara,
      bio: 'Mentorship developed human skills in AI Era.',
      expertise: ['AI Research', 'Human Skills', 'Leadership'],
      stats: [
        { label: 'Retention', value: '+6%' },
        { label: 'Career Confidence', value: '+30%' },
        { label: 'Team Lead', value: 'Yes' }
      ],
      size: 'large'
    },
    {
      name: 'Nic Hayes',
      role: 'Apprentice to Project Manager',
      image: heroNic,
      bio: 'Mentorship developed durable skills.',
      expertise: ['Project Management', 'Durable Skills', 'Career Growth'],
      stats: [
        { label: 'Conversion', value: '+42%' },
        { label: 'Promotion', value: 'Youngest PM' },
        { label: 'Mentor Impact', value: '86%' }
      ],
      size: 'large'
    }
  ];

  // Calculate position on circle path
  const getNodePosition = (angle: number, radius: number) => {
    const radian = (angle * Math.PI) / 180;
    return {
      x: Math.cos(radian) * radius,
      y: Math.sin(radian) * radius
    };
  };

  // Get size in pixels based on size category
  const getAvatarSize = (size: 'small' | 'medium' | 'large') => {
    switch (size) {
      case 'small': return 70;
      case 'medium': return 100;
      case 'large': return 120;
    }
  };

  // Triangle arrangement for 3 avatars: Toccara (top), Sara (bottom left), Nic (bottom right)
  // Container is 340px x 340px
  const avatarPositions = [
    { top: '50px', left: '170px' },     // Toccara - top center
    { top: '220px', left: '70px' },     // Sara - bottom left
    { top: '220px', left: '270px' },    // Nic - bottom right
  ];

  const handleNodeClick = (index: number) => {
    setExpandedNode(expandedNode === String(index) ? null : String(index));
  };

  const renderNode = (data: NodeData, index: number) => {
    const isExpanded = expandedNode === String(index);
    const radius = 260; // Distance from center
    const pos = getNodePosition(data.angle, radius);

    // Determine tooltip position based on angle
    const getTooltipDirection = (angle: number) => {
      if (angle >= 315 || angle < 45) return 'right';
      if (angle >= 45 && angle < 135) return 'bottom';
      if (angle >= 135 && angle < 225) return 'left';
      return 'top';
    };

    const tooltipDir = getTooltipDirection(data.angle);
    const tooltipStyles: React.CSSProperties = {
      position: 'absolute',
      background: 'var(--bg-white)',
      padding: 'var(--spacing-md)',
      borderRadius: 'var(--radius-lg)',
      boxShadow: 'var(--shadow-hover)',
      width: '280px',
      zIndex: 300,
      opacity: 0,
      visibility: 'hidden',
      pointerEvents: 'none',
      transition: 'var(--transition-medium)',
      ...(tooltipDir === 'right' && { left: 'calc(100% + 15px)', top: '50%', transform: 'translateY(-50%)' }),
      ...(tooltipDir === 'left' && { right: 'calc(100% + 15px)', top: '50%', transform: 'translateY(-50%)' }),
      ...(tooltipDir === 'bottom' && { top: 'calc(100% + 15px)', left: '50%', transform: 'translateX(-50%)' }),
      ...(tooltipDir === 'top' && { bottom: 'calc(100% + 15px)', left: '50%', transform: 'translateX(-50%)' }),
    };

    return (
      <div
        key={index}
        className="diagram-node-v2"
        tabIndex={0}
        role="button"
        aria-label={`${data.label}: ${data.tooltipDesc}`}
        style={{
          position: 'absolute',
          top: '50%',
          left: '50%',
          transform: `translate(calc(-50% + ${pos.x}px), calc(-50% + ${pos.y}px))`,
          width: '60px',
          height: '60px',
          borderRadius: 'var(--radius-circle)',
          background: 'var(--gradient-coral)',
          boxShadow: 'var(--shadow-coral-sm)',
          cursor: 'pointer',
          transition: 'var(--transition-medium)',
          zIndex: 10,
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          border: '3px solid var(--bg-white)'
        }}
      >
        <div style={{
          color: 'var(--text-white)',
          fontWeight: 600,
          fontSize: 'var(--font-size-h3)',
        }}>
          +
        </div>

        <div className="node-tooltip-v2" style={tooltipStyles} onClick={(e) => e.stopPropagation()}>
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
            fontSize: 'var(--font-size-body)',
            lineHeight: 'var(--line-height-normal)',
            color: 'var(--text-secondary)',
            marginBottom: 'var(--spacing-md)'
          }}>
            {data.tooltipDesc}
          </p>
          <div style={{
            padding: 'var(--spacing-md)',
            background: 'var(--primary-blue)',
            borderRadius: 'var(--radius-md)',
            borderLeft: '4px solid var(--secondary-blue)'
          }}>
            <strong style={{
              fontSize: 'var(--font-size-h4)',
              fontWeight: 600,
              color: 'var(--text-white)',
            }}>
              {data.tooltipStat}
            </strong>
            <span style={{
              fontSize: 'var(--font-size-small)',
              color: 'var(--text-white)',
              marginLeft: 'var(--spacing-xs)',
              opacity: 0.9
            }}>
              {data.tooltipLabel}
            </span>
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
            }}
            aria-label="Close"
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
              <h3 style={{ fontSize: 'var(--font-size-h3)', fontWeight: 500, marginBottom: 'var(--spacing-xxs)' }}>
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

  if (isMobile) {
    return (
      <section style={{ padding: 'var(--spacing-2xl) var(--spacing-lg)', background: 'var(--gradient-hero)' }}>
        <div style={{ maxWidth: 'var(--max-width-xl)', margin: '0 auto' }}>
          <h1 style={{
            fontFamily: 'var(--font-headline)',
            fontSize: 'var(--font-size-h2)',
            fontWeight: 500,
            marginBottom: 'var(--spacing-md)',
            color: 'var(--text-primary)'
          }}>
            {fieldValues?.title || 'The AI Mentorship OS powering connection, retention and results.'}
          </h1>
          <p style={{
            fontSize: 'var(--font-size-body)',
            color: 'var(--text-secondary)',
            marginBottom: 'var(--spacing-xl)'
          }}>
            {description}
          </p>
          <button
            onClick={() => setIsDemoModalOpen(true)}
            className="btn-primary-coral"
            style={{ width: '100%' }}
          >
            {fieldValues?.button_text || 'Request a Demo'}
          </button>
        </div>
        <DemoModal isOpen={isDemoModalOpen} onClose={() => setIsDemoModalOpen(false)} />
      </section>
    );
  }

  return (
    <>
      <style>{`
        .diagram-node-v2 {
          transition: box-shadow 0.3s ease, filter 0.3s ease !important;
        }

        .diagram-node-v2:hover {
          box-shadow: 0 12px 40px rgba(239, 71, 111, 0.5) !important;
          filter: brightness(1.05);
          z-index: 260 !important;
        }

        .diagram-node-v2:hover .node-tooltip-v2 {
          opacity: 1 !important;
          visibility: visible !important;
          pointer-events: auto !important;
        }

        .avatar-v2:hover {
          z-index: 500 !important;
        }

        .avatar-v2-wrapper:hover {
          box-shadow: 0 8px 24px rgba(239, 71, 111, 0.4), 0 0 0 4px rgba(239, 71, 111, 0.5) !important;
        }
      `}</style>

      <script dangerouslySetInnerHTML={{__html: `
        (function() {
          function initHeroV2() {
            const avatars = document.querySelectorAll('.avatar-v2-wrapper');

            avatars.forEach((avatar, index) => {
              const tooltip = document.querySelector('.avatar-v2-tooltip-' + index);
              if (!tooltip) return;

              avatar.addEventListener('mouseenter', function() {
                tooltip.style.opacity = '1';
                tooltip.style.visibility = 'visible';
              });

              avatar.addEventListener('mouseleave', function() {
                tooltip.style.opacity = '0';
                tooltip.style.visibility = 'hidden';
              });
            });
          }

          if (document.readyState === 'loading') {
            document.addEventListener('DOMContentLoaded', initHeroV2);
          } else {
            setTimeout(initHeroV2, 100);
          }
        })();
      `}} />

      <ScrollAnimationScript />

      <section
        className="scroll-animate"
        style={{
          minHeight: '70vh',
          display: 'flex',
          alignItems: 'center',
          padding: 'var(--spacing-2xl) 0',
          background: 'var(--gradient-hero)',
          position: 'relative',
          overflow: 'visible',
        }}
      >
        <div style={{ maxWidth: 'var(--max-width-xl)', margin: '0 auto', padding: '0 var(--container-padding)', width: '100%' }}>
          <div style={{
            display: 'grid',
            gridTemplateColumns: '1fr 1fr',
            gap: 'var(--spacing-2xl)',
            alignItems: 'center',
          }}>
            <div>
              <h1 style={{
                fontFamily: 'var(--font-headline)',
                fontSize: 'var(--font-size-h1)',
                fontWeight: 500,
                lineHeight: 'var(--line-height-tight)',
                marginBottom: 'var(--spacing-lg)',
                color: 'var(--text-primary)',
                letterSpacing: 'var(--letter-spacing-tight)',
              }}>
                {fieldValues?.title || 'The AI Mentorship OS powering connection, retention and results.'}
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
                className="btn-primary-coral"
              >
                {fieldValues?.button_text || 'Request a Demo'}
              </button>
            </div>

            {/* Diagram Area */}
            <div style={{
              position: 'relative',
              width: '100%',
              maxWidth: '600px',
              height: '600px',
              margin: '0 auto',
            }}>
              {/* Circular path (visual guide) */}
              <svg
                style={{
                  position: 'absolute',
                  top: '50%',
                  left: '50%',
                  transform: 'translate(-50%, -50%)',
                  width: '100%',
                  height: '100%',
                  zIndex: 0,
                  pointerEvents: 'none'
                }}
                viewBox="0 0 600 600"
              >
                {/* Main circle path */}
                <circle
                  cx="300"
                  cy="300"
                  r="260"
                  fill="none"
                  stroke="rgba(239, 71, 111, 0.15)"
                  strokeWidth="2"
                  strokeDasharray="8 8"
                />

                {/* Connection lines from nodes to center */}
                {nodeData.map((node, i) => {
                  const pos = getNodePosition(node.angle, 260);
                  return (
                    <line
                      key={i}
                      x1={300 + pos.x}
                      y1={300 + pos.y}
                      x2="300"
                      y2="300"
                      stroke="rgba(239, 71, 111, 0.2)"
                      strokeWidth="1.5"
                    />
                  );
                })}

                {/* Floating particles */}
                <circle cx="200" cy="200" r="4" fill="#F89F7B">
                  <animate attributeName="opacity" values="0;0.8;0" dur="4s" repeatCount="indefinite" />
                  <animate attributeName="cx" values="200;280;200" dur="4s" repeatCount="indefinite" />
                  <animate attributeName="cy" values="200;160;200" dur="4s" repeatCount="indefinite" />
                </circle>
                <circle cx="400" cy="400" r="3" fill="#FED700">
                  <animate attributeName="opacity" values="0;0.7;0" dur="5s" repeatCount="indefinite" begin="1s" />
                  <animate attributeName="cx" values="400;350;400" dur="5s" repeatCount="indefinite" begin="1s" />
                  <animate attributeName="cy" values="400;350;400" dur="5s" repeatCount="indefinite" begin="1s" />
                </circle>
                <circle cx="150" cy="350" r="3" fill="#EF476F">
                  <animate attributeName="opacity" values="0;0.6;0" dur="6s" repeatCount="indefinite" begin="2s" />
                  <animate attributeName="cx" values="150;200;150" dur="6s" repeatCount="indefinite" begin="2s" />
                  <animate attributeName="cy" values="350;300;350" dur="6s" repeatCount="indefinite" begin="2s" />
                </circle>
              </svg>

              {/* Nodes on circular path */}
              {nodeData.map((node, index) => renderNode(node, index))}

              {/* Center avatar cluster - 6 avatars: 3 large, 3 small */}
              <div style={{
                position: 'absolute',
                top: '50%',
                left: '50%',
                transform: 'translate(-50%, -50%)',
                width: '340px',
                height: '340px',
                zIndex: 100,
              }}>
                {mentorProfiles.slice(0, 3).map((mentor, index) => {
                  const size = getAvatarSize(mentor.size);
                  const pos = avatarPositions[index];

                  return (
                    <div
                      key={index}
                      className="avatar-v2"
                      style={{
                        position: 'absolute',
                        top: pos.top,
                        left: pos.left,
                        transform: 'translate(-50%, -50%)',
                        zIndex: 100 + (mentor.size === 'large' ? 3 : 1),
                      }}
                    >
                      <div
                        className="avatar-v2-wrapper"
                        onClick={() => setSelectedMentor(mentor)}
                        style={{
                          width: `${size}px`,
                          height: `${size}px`,
                          borderRadius: 'var(--radius-circle)',
                          border: '3px solid var(--bg-white)',
                          boxShadow: '0 4px 12px rgba(239, 71, 111, 0.25), 0 0 0 2px rgba(239, 71, 111, 0.3)',
                          overflow: 'hidden',
                          cursor: 'pointer',
                          transition: 'var(--transition-medium)',
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

                      {/* Tooltip */}
                      <div
                        className={`avatar-v2-tooltip-${index}`}
                        style={{
                          position: 'absolute',
                          top: `${size + 10}px`,
                          left: '50%',
                          transform: 'translateX(-50%)',
                          background: 'var(--bg-white)',
                          borderRadius: 'var(--radius-lg)',
                          padding: 'var(--spacing-md)',
                          boxShadow: 'var(--shadow-lg)',
                          zIndex: 600,
                          minWidth: '200px',
                          textAlign: 'center',
                          opacity: 0,
                          visibility: 'hidden',
                          transition: 'var(--transition-medium)',
                          pointerEvents: 'none',
                        }}
                      >
                        <div style={{
                          fontSize: 'var(--font-size-body-lg)',
                          fontWeight: 500,
                          color: 'var(--text-primary)',
                          marginBottom: '2px',
                          fontFamily: 'var(--font-headline)',
                        }}>
                          {mentor.name}
                        </div>
                        <div style={{
                          fontSize: 'var(--font-size-small)',
                          fontWeight: 600,
                          color: 'var(--text-coral)',
                          marginBottom: 'var(--spacing-xs)',
                        }}>
                          {mentor.role}
                        </div>
                        <div style={{
                          fontSize: 'var(--font-size-small)',
                          color: 'var(--text-secondary)',
                          lineHeight: 'var(--line-height-normal)',
                        }}>
                          {mentor.bio.split('.')[0]}
                        </div>
                      </div>
                    </div>
                  );
                })}
              </div>
            </div>
          </div>
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
    default: 'Mentorship reinvented as scalable AI infrastructure. Foster human connection, enhance durable skills, and drive improved retention and career outcomes.',
  },
  {
    type: 'text',
    name: 'button_text',
    label: 'Button Text',
    default: 'Request a Demo',
  },
];

export const meta = {
  label: 'Hero Diagram V2 (Test)',
};
