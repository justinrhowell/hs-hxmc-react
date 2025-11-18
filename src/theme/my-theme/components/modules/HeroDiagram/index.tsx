import {
  ModuleFields,
  TextField,
} from '@hubspot/cms-components/fields';
import { useState } from 'react';
import heroImg01 from '../../../assets/hero-img-01.png';
import heroImg02 from '../../../assets/hero-img-02.png';
import heroImg03 from '../../../assets/hero-img-03.png';

export function Component({ fieldValues }: any) {
  const description = "In an AI-driven world, human skills are your edge. We help schools and employers use AI to scale human connection, improving durable skills, belonging and career outcomes.";

  const nodeData = {
    learners: {
      label: 'Learners',
      shortLabel: 'Learners',
      tooltipTitle: 'Learners & Career Starters',
      tooltipStat: '70%',
      tooltipLabel: 'planning careers in critical sectors',
      tooltipDesc: 'Students and individuals seeking guidance and career development through meaningful mentorship connections.',
      position: { top: '5%', left: '50%', transform: 'translateX(-50%)' },
      tooltipPosition: 'bottom'
    },
    employers: {
      label: 'Employers',
      shortLabel: 'Employers',
      tooltipTitle: 'Employers',
      tooltipStat: '+42%',
      tooltipLabel: 'increase in conversion',
      tooltipDesc: 'Organizations leveraging mentorship to develop talent, increase retention, and build stronger teams.',
      position: { right: '5%', top: '50%', transform: 'translateY(-50%)' },
      tooltipPosition: 'left'
    },
    organizations: {
      label: 'Organizations',
      shortLabel: 'Organizations',
      tooltipTitle: 'Organizations',
      tooltipStat: '2.5x',
      tooltipLabel: 'more likely to feel career-ready',
      tooltipDesc: 'Educational institutions and nonprofits using our platform to drive meaningful outcomes and student success.',
      position: { bottom: '5%', left: '50%', transform: 'translateX(-50%)' },
      tooltipPosition: 'top'
    },
    partnerships: {
      label: 'Strategic Partnerships',
      shortLabel: 'Partnerships',
      tooltipTitle: 'Strategic Partnerships',
      tooltipStat: '90-92%',
      tooltipLabel: 'retention rate',
      tooltipDesc: 'Fostering curiosity and innovation through guided conversations that spark growth and discovery.',
      position: { left: '5%', top: '50%', transform: 'translateY(-50%)' },
      tooltipPosition: 'right'
    }
  };

  const getTooltipStyles = (tooltipPosition: string) => {
    const base = {
      position: 'absolute' as const,
      background: 'white',
      color: '#1a1a1a',
      padding: '1.5rem',
      borderRadius: '16px',
      boxShadow: '0 12px 40px rgba(0, 0, 0, 0.2)',
      opacity: 0,
      pointerEvents: 'none' as const,
      transition: 'opacity 0.3s ease, transform 0.3s ease',
      zIndex: 5,
      width: '280px',
      maxWidth: '90vw'
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

  const renderNode = (nodeId: string, data: any) => {
    const hoverClass = `diagram-node-${nodeId}`;

    return (
      <div
        key={nodeId}
        className={`diagram-node ${hoverClass}`}
        style={{
          position: 'absolute',
          ...data.position,
          display: 'flex',
          alignItems: 'center',
          gap: '0.75rem',
          padding: '1rem 1.5rem',
          borderRadius: '60px',
          background: 'linear-gradient(135deg, #FF4B7E 0%, #FF6B9D 100%)',
          boxShadow: '0 4px 16px rgba(255, 75, 126, 0.3)',
          cursor: 'pointer',
          transition: 'all 0.3s ease',
          zIndex: 10
        }}
      >
        {/* Plus Icon */}
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
          flexShrink: 0
        }}>
          +
        </div>

        {/* Node Content - Always Visible */}
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

        {/* Tooltip - Shows on Hover */}
        <div className="node-tooltip" style={getTooltipStyles(data.tooltipPosition)}>
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

  return (
    <section style={{
      minHeight: '85vh',
      display: 'flex',
      alignItems: 'center',
      padding: '3rem 0',
      background: 'linear-gradient(135deg, #FFFBF8 0%, #FFF8F3 50%, #FFFAF5 100%)',
      position: 'relative',
      overflow: 'hidden'
    }}>
      <div style={{ maxWidth: '1200px', margin: '0 auto', padding: '0 1.5rem', width: '100%' }}>
        <div className="hero-content" style={{
          display: 'grid',
          gridTemplateColumns: '1fr 1fr',
          gap: '4rem',
          alignItems: 'center',
          position: 'relative',
          zIndex: 1
        }}>
          <div>
            <h1 style={{
              fontFamily: 'var(--font-headline)',
              fontSize: '3.5rem',
              fontWeight: 500,
              lineHeight: 1.15,
              marginBottom: '1.5rem',
              color: '#1a1a1a',
              letterSpacing: '-0.02em'
            }}>
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
            <button style={{
              background: 'linear-gradient(135deg, #FF4B7E 0%, #FF6B9D 100%)',
              color: 'white',
              padding: '1rem 2.5rem',
              borderRadius: '50px',
              fontFamily: 'var(--font-body)',
              fontSize: '1.05rem',
              fontWeight: 600,
              border: 'none',
              cursor: 'pointer',
              boxShadow: '0 8px 24px rgba(255, 75, 126, 0.3)'
            }}>
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
            {/* SVG Connection Lines with Animated Dots */}
            <svg style={{
              position: 'absolute',
              width: '100%',
              height: '100%',
              pointerEvents: 'none',
              zIndex: 0
            }} viewBox="0 0 600 600">
              <defs>
                <linearGradient id="lineGradient" x1="0%" y1="0%" x2="100%" y2="100%">
                  <stop offset="0%" style={{ stopColor: '#FF4B7E', stopOpacity: 1 }} />
                  <stop offset="50%" style={{ stopColor: '#FF6B9D', stopOpacity: 1 }} />
                  <stop offset="100%" style={{ stopColor: '#FFA0BC', stopOpacity: 1 }} />
                </linearGradient>
                <filter id="glow">
                  <feGaussianBlur stdDeviation="3" result="coloredBlur"/>
                  <feMerge>
                    <feMergeNode in="coloredBlur"/>
                    <feMergeNode in="SourceGraphic"/>
                  </feMerge>
                </filter>
              </defs>

              {/* Top (Learners) to Center - 3 lines */}
              <line x1="300" y1="80" x2="220" y2="220" stroke="url(#lineGradient)" strokeWidth="2" opacity="0.4" strokeDasharray="6,6" />
              <circle r="4" fill="#FF4B7E">
                <animateMotion dur="3s" repeatCount="indefinite">
                  <mpath href="#path-learners-1"/>
                </animateMotion>
              </circle>
              <path id="path-learners-1" d="M300,80 L220,220" fill="none" stroke="none"/>

              <line x1="300" y1="80" x2="300" y2="250" stroke="url(#lineGradient)" strokeWidth="2" opacity="0.4" strokeDasharray="6,6" />
              <circle r="4" fill="#FF4B7E">
                <animateMotion dur="3s" repeatCount="indefinite" begin="0.5s">
                  <mpath href="#path-learners-2"/>
                </animateMotion>
              </circle>
              <path id="path-learners-2" d="M300,80 L300,250" fill="none" stroke="none"/>

              <line x1="300" y1="80" x2="380" y2="220" stroke="url(#lineGradient)" strokeWidth="2" opacity="0.4" strokeDasharray="6,6" />
              <circle r="4" fill="#FF4B7E">
                <animateMotion dur="3s" repeatCount="indefinite" begin="1s">
                  <mpath href="#path-learners-3"/>
                </animateMotion>
              </circle>
              <path id="path-learners-3" d="M300,80 L380,220" fill="none" stroke="none"/>

              {/* Right (Employers) to Center - 3 lines */}
              <line x1="520" y1="300" x2="380" y2="220" stroke="url(#lineGradient)" strokeWidth="2" opacity="0.4" strokeDasharray="6,6" />
              <circle r="4" fill="#FF6B9D">
                <animateMotion dur="3s" repeatCount="indefinite" begin="0.2s">
                  <mpath href="#path-employers-1"/>
                </animateMotion>
              </circle>
              <path id="path-employers-1" d="M520,300 L380,220" fill="none" stroke="none"/>

              <line x1="520" y1="300" x2="350" y2="300" stroke="url(#lineGradient)" strokeWidth="2" opacity="0.4" strokeDasharray="6,6" />
              <circle r="4" fill="#FF6B9D">
                <animateMotion dur="3s" repeatCount="indefinite" begin="0.7s">
                  <mpath href="#path-employers-2"/>
                </animateMotion>
              </circle>
              <path id="path-employers-2" d="M520,300 L350,300" fill="none" stroke="none"/>

              <line x1="520" y1="300" x2="380" y2="380" stroke="url(#lineGradient)" strokeWidth="2" opacity="0.4" strokeDasharray="6,6" />
              <circle r="4" fill="#FF6B9D">
                <animateMotion dur="3s" repeatCount="indefinite" begin="1.2s">
                  <mpath href="#path-employers-3"/>
                </animateMotion>
              </circle>
              <path id="path-employers-3" d="M520,300 L380,380" fill="none" stroke="none"/>

              {/* Bottom (Organizations) to Center - 3 lines */}
              <line x1="300" y1="520" x2="220" y2="380" stroke="url(#lineGradient)" strokeWidth="2" opacity="0.4" strokeDasharray="6,6" />
              <circle r="4" fill="#FFA0BC">
                <animateMotion dur="3s" repeatCount="indefinite" begin="0.4s">
                  <mpath href="#path-orgs-1"/>
                </animateMotion>
              </circle>
              <path id="path-orgs-1" d="M300,520 L220,380" fill="none" stroke="none"/>

              <line x1="300" y1="520" x2="300" y2="350" stroke="url(#lineGradient)" strokeWidth="2" opacity="0.4" strokeDasharray="6,6" />
              <circle r="4" fill="#FFA0BC">
                <animateMotion dur="3s" repeatCount="indefinite" begin="0.9s">
                  <mpath href="#path-orgs-2"/>
                </animateMotion>
              </circle>
              <path id="path-orgs-2" d="M300,520 L300,350" fill="none" stroke="none"/>

              <line x1="300" y1="520" x2="380" y2="380" stroke="url(#lineGradient)" strokeWidth="2" opacity="0.4" strokeDasharray="6,6" />
              <circle r="4" fill="#FFA0BC">
                <animateMotion dur="3s" repeatCount="indefinite" begin="1.4s">
                  <mpath href="#path-orgs-3"/>
                </animateMotion>
              </circle>
              <path id="path-orgs-3" d="M300,520 L380,380" fill="none" stroke="none"/>

              {/* Left (Questions/Ideas) to Center - 3 lines */}
              <line x1="80" y1="300" x2="220" y2="220" stroke="url(#lineGradient)" strokeWidth="2" opacity="0.4" strokeDasharray="6,6" />
              <circle r="4" fill="#FF8BA7">
                <animateMotion dur="3s" repeatCount="indefinite" begin="0.3s">
                  <mpath href="#path-questions-1"/>
                </animateMotion>
              </circle>
              <path id="path-questions-1" d="M80,300 L220,220" fill="none" stroke="none"/>

              <line x1="80" y1="300" x2="250" y2="300" stroke="url(#lineGradient)" strokeWidth="2" opacity="0.4" strokeDasharray="6,6" />
              <circle r="4" fill="#FF8BA7">
                <animateMotion dur="3s" repeatCount="indefinite" begin="0.8s">
                  <mpath href="#path-questions-2"/>
                </animateMotion>
              </circle>
              <path id="path-questions-2" d="M80,300 L250,300" fill="none" stroke="none"/>

              <line x1="80" y1="300" x2="220" y2="380" stroke="url(#lineGradient)" strokeWidth="2" opacity="0.4" strokeDasharray="6,6" />
              <circle r="4" fill="#FF8BA7">
                <animateMotion dur="3s" repeatCount="indefinite" begin="1.3s">
                  <mpath href="#path-questions-3"/>
                </animateMotion>
              </circle>
              <path id="path-questions-3" d="M80,300 L220,380" fill="none" stroke="none"/>
            </svg>

            {/* Dynamic Expandable Nodes */}
            {renderNode('learners', nodeData.learners)}
            {renderNode('employers', nodeData.employers)}
            {renderNode('organizations', nodeData.organizations)}
            {renderNode('partnerships', nodeData.partnerships)}

            {/* Center Avatars Group */}
            <div style={{
              position: 'absolute',
              top: '50%',
              left: '50%',
              transform: 'translate(-50%, -50%)',
              display: 'flex',
              gap: '1rem',
              alignItems: 'center',
              zIndex: 100
            }}>
              {/* Avatar 1 */}
              <div className="avatar-wrapper" style={{
                width: '80px',
                height: '80px',
                borderRadius: '50%',
                border: '4px solid white',
                boxShadow: '0 4px 12px rgba(0,0,0,0.15)',
                overflow: 'hidden',
                background: '#f0f0f0',
                cursor: 'pointer',
                transition: 'transform 0.3s ease'
              }}>
                <img
                  src={heroImg01}
                  alt="Sarah Chen - Career Mentor"
                  style={{
                    width: '100%',
                    height: '100%',
                    objectFit: 'cover'
                  }}
                />
              </div>
              {/* Avatar 2 (larger center) */}
              <div className="avatar-wrapper" style={{
                width: '100px',
                height: '100px',
                borderRadius: '50%',
                border: '4px solid white',
                boxShadow: '0 6px 16px rgba(0,0,0,0.2)',
                overflow: 'hidden',
                background: '#f0f0f0',
                cursor: 'pointer',
                transition: 'transform 0.3s ease'
              }}>
                <img
                  src={heroImg02}
                  alt="Maya Rodriguez - Student"
                  style={{
                    width: '100%',
                    height: '100%',
                    objectFit: 'cover'
                  }}
                />
              </div>
              {/* Avatar 3 */}
              <div className="avatar-wrapper" style={{
                width: '80px',
                height: '80px',
                borderRadius: '50%',
                border: '4px solid white',
                boxShadow: '0 4px 12px rgba(0,0,0,0.15)',
                overflow: 'hidden',
                background: '#f0f0f0',
                cursor: 'pointer',
                transition: 'transform 0.3s ease'
              }}>
                <img
                  src={heroImg03}
                  alt="James Park - Industry Professional"
                  style={{
                    width: '100%',
                    height: '100%',
                    objectFit: 'cover'
                  }}
                />
              </div>
            </div>
          </div>
        </div>
        {/* Powered by button */}
        <div style={{
          display: 'flex',
          justifyContent: 'center',
          marginTop: '3rem'
        }}>
          <button style={{
            background: 'white',
            color: '#FF4B7E',
            padding: '0.75rem 2rem',
            borderRadius: '50px',
            fontFamily: 'var(--font-body)',
            fontSize: '0.95rem',
            fontWeight: 600,
            border: '2px solid rgba(255, 75, 126, 0.2)',
            cursor: 'pointer',
            boxShadow: '0 4px 16px rgba(255, 75, 126, 0.15)',
            transition: 'all 0.3s ease'
          }}>
            POWERED BY AI-POWERED MENTORSHIP OS
          </button>
        </div>
      </div>
    </section>
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
