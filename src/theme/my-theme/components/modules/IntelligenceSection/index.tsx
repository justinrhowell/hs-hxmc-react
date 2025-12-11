import React from 'react';
import { ScrollAnimationScript } from '../../shared/ScrollAnimationScript';
import revealIcon from '../../../assets/reveal-icon.svg';
import sparkIcon from '../../../assets/spark-icon.svg';
import scaleIcon from '../../../assets/scale-icon.svg';
import fuelIcon from '../../../assets/fuel-icon.svg';

export function Component({ fieldValues }: any) {
  // Map icon keys to imported assets
  const iconMap: Record<string, string> = {
    reveal: revealIcon,
    spark: sparkIcon,
    scale: scaleIcon,
    fuel: fuelIcon,
  };

  // Default features
  const defaultFeatures = [
    { icon: 'reveal', title: 'Participant Insights', description: 'Capture an incredible wealth of self-reported data into a strategic asset, revealing authentic mentee needs, goals, and interests to apply key learnings to your larger population.' },
    { icon: 'spark', title: 'Configurable Reporting', description: 'Integrate existing cohort data into the platform and instantly disaggregate standard visualizations by specific populations for strategic analysis.' },
    { icon: 'scale', title: 'Early Alerts', description: 'Spot critical issues before they escalate. Monitor potential retention or performance risks as they are reported and intervene proactively.' },
    { icon: 'fuel', title: 'Outcome Measurement', description: 'Formalized, continuous surveys collect the insights required to quantify ROI across success indicators like belonging, career confidence, and retention.' },
  ];

  // Default stats
  const defaultStats = [
    { value: '+6%', label: 'retention lift' },
    { value: '+8-19%', label: 'boost in sense of belonging' },
    { value: '+30%', label: 'increase in career confidence' },
  ];

  // Default testimonials
  const defaultTestimonials = [
    { quote: "One of the things that we were really pleased with, that we were receiving very early on through the flags...that early indicator that would allow us for an early intervention, I think it's pretty powerful.", author: '–Jennifer Ebinger, Senior Director, Office of Engaged Learning, Southern Methodist University' },
    { quote: 'The real time tracking allows us to make shifts throughout the year to adapt the mentoring experience to the realities of the student experience.', author: '– Rebecca Goldstein, Director of Student Affairs Assessment & Research, Florida Atlantic University' },
    { quote: "One of the challenges over the last several years since we intensely went after student success as a top institutional priority was how do we measure sense of belonging. The tools of Mentor Collective have really been invaluable in finding ways we actually could measure a student's self-perception of belonging.", author: '– Dr. Maria Cuzzo, Provost, University of Wisconsin, Superior' },
  ];

  // Use custom or defaults
  const customFeatures = fieldValues.features || [];
  const features = customFeatures.length > 0
    ? customFeatures.map((f: any) => ({
        icon: iconMap[f.icon_key] || revealIcon,
        title: f.title || 'Feature',
        description: f.description || 'Feature description',
      }))
    : defaultFeatures.map(f => ({ ...f, icon: iconMap[f.icon] }));

  const customStats = fieldValues.stats || [];
  const stats = customStats.length > 0
    ? customStats.map((s: any) => ({
        value: s.value || '+0%',
        label: s.stat_label || 'metric',
      }))
    : defaultStats;

  const customTestimonials = fieldValues.testimonials || [];
  const testimonials = customTestimonials.length > 0
    ? customTestimonials.map((t: any) => ({
        quote: t.quote || 'Testimonial quote',
        author: t.author || '– Author Name',
      }))
    : defaultTestimonials;

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

      /* Node Network Animation */
      .intelligence-network-bg {
        position: absolute;
        top: 0;
        left: 0;
        width: 100%;
        height: 100%;
        overflow: hidden;
        pointer-events: none;
      }

      .intelligence-network-canvas {
        position: absolute;
        top: 0;
        left: 0;
        width: 100%;
        height: 100%;
      }

      /* Glowing nodes */
      .intel-node {
        position: absolute;
        border-radius: 50%;
        pointer-events: none;
      }

      .intel-node-core {
        width: 6px;
        height: 6px;
        background: rgba(239, 71, 111, 0.9);
        border-radius: 50%;
        box-shadow:
          0 0 10px rgba(239, 71, 111, 0.8),
          0 0 20px rgba(239, 71, 111, 0.6),
          0 0 30px rgba(239, 71, 111, 0.4);
        animation: nodePulse 3s ease-in-out infinite;
      }

      .intel-node-core.teal {
        background: rgba(6, 214, 160, 0.9);
        box-shadow:
          0 0 10px rgba(6, 214, 160, 0.8),
          0 0 20px rgba(6, 214, 160, 0.6),
          0 0 30px rgba(6, 214, 160, 0.4);
      }

      .intel-node-core.blue {
        background: rgba(17, 138, 178, 0.9);
        box-shadow:
          0 0 10px rgba(17, 138, 178, 0.8),
          0 0 20px rgba(17, 138, 178, 0.6),
          0 0 30px rgba(17, 138, 178, 0.4);
      }

      .intel-node-core.peach {
        background: rgba(248, 159, 123, 0.9);
        box-shadow:
          0 0 10px rgba(248, 159, 123, 0.8),
          0 0 20px rgba(248, 159, 123, 0.6),
          0 0 30px rgba(248, 159, 123, 0.4);
      }

      @keyframes nodePulse {
        0%, 100% {
          transform: scale(1);
          opacity: 0.7;
        }
        50% {
          transform: scale(1.5);
          opacity: 1;
        }
      }

      @keyframes nodeFloat {
        0%, 100% { transform: translate(0, 0); }
        25% { transform: translate(10px, -15px); }
        50% { transform: translate(-5px, 10px); }
        75% { transform: translate(15px, 5px); }
      }

      @keyframes linePulse {
        0%, 100% { opacity: 0.15; }
        50% { opacity: 0.4; }
      }

      @keyframes sparkle {
        0%, 100% { opacity: 0; transform: scale(0); }
        50% { opacity: 1; transform: scale(1); }
      }

      .intel-sparkle {
        position: absolute;
        width: 4px;
        height: 4px;
        background: white;
        border-radius: 50%;
        box-shadow: 0 0 6px white, 0 0 12px rgba(255, 255, 255, 0.5);
        animation: sparkle 2s ease-in-out infinite;
      }

      /* Subtle gradient orbs for depth */
      .intel-glow-orb {
        position: absolute;
        border-radius: 50%;
        filter: blur(60px);
        opacity: 0.3;
        animation: orbFloat 20s ease-in-out infinite;
      }

      @keyframes orbFloat {
        0%, 100% { transform: translate(0, 0) scale(1); }
        33% { transform: translate(30px, -20px) scale(1.05); }
        66% { transform: translate(-20px, 15px) scale(0.95); }
      }

      @media (prefers-reduced-motion: reduce) {
        .intel-node-core,
        .intel-sparkle,
        .intel-glow-orb {
          animation: none !important;
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
      {/* Tech Network Background */}
      <div className="intelligence-network-bg">
        {/* SVG for connecting lines */}
        <svg className="intelligence-network-canvas" style={{ opacity: 0.6 }}>
          <defs>
            <linearGradient id="lineGradient1" x1="0%" y1="0%" x2="100%" y2="100%">
              <stop offset="0%" stopColor="rgba(239, 71, 111, 0.5)" />
              <stop offset="100%" stopColor="rgba(17, 138, 178, 0.3)" />
            </linearGradient>
            <linearGradient id="lineGradient2" x1="0%" y1="0%" x2="100%" y2="0%">
              <stop offset="0%" stopColor="rgba(6, 214, 160, 0.4)" />
              <stop offset="100%" stopColor="rgba(239, 71, 111, 0.3)" />
            </linearGradient>
            <linearGradient id="lineGradient3" x1="100%" y1="0%" x2="0%" y2="100%">
              <stop offset="0%" stopColor="rgba(248, 159, 123, 0.4)" />
              <stop offset="100%" stopColor="rgba(17, 138, 178, 0.2)" />
            </linearGradient>
          </defs>
          {/* Connecting lines between nodes */}
          <line x1="5%" y1="15%" x2="25%" y2="25%" stroke="url(#lineGradient1)" strokeWidth="1" style={{ animation: 'linePulse 4s ease-in-out infinite' }} />
          <line x1="25%" y1="25%" x2="45%" y2="10%" stroke="url(#lineGradient2)" strokeWidth="1" style={{ animation: 'linePulse 5s ease-in-out infinite 0.5s' }} />
          <line x1="45%" y1="10%" x2="70%" y2="20%" stroke="url(#lineGradient1)" strokeWidth="1" style={{ animation: 'linePulse 4.5s ease-in-out infinite 1s' }} />
          <line x1="70%" y1="20%" x2="90%" y2="8%" stroke="url(#lineGradient3)" strokeWidth="1" style={{ animation: 'linePulse 6s ease-in-out infinite' }} />
          <line x1="10%" y1="40%" x2="30%" y2="55%" stroke="url(#lineGradient2)" strokeWidth="1" style={{ animation: 'linePulse 5.5s ease-in-out infinite 0.3s' }} />
          <line x1="30%" y1="55%" x2="55%" y2="45%" stroke="url(#lineGradient1)" strokeWidth="1" style={{ animation: 'linePulse 4s ease-in-out infinite 0.7s' }} />
          <line x1="55%" y1="45%" x2="80%" y2="50%" stroke="url(#lineGradient3)" strokeWidth="1" style={{ animation: 'linePulse 5s ease-in-out infinite 1.2s' }} />
          <line x1="80%" y1="50%" x2="95%" y2="35%" stroke="url(#lineGradient2)" strokeWidth="1" style={{ animation: 'linePulse 4.5s ease-in-out infinite' }} />
          <line x1="15%" y1="75%" x2="35%" y2="85%" stroke="url(#lineGradient1)" strokeWidth="1" style={{ animation: 'linePulse 6s ease-in-out infinite 0.5s' }} />
          <line x1="35%" y1="85%" x2="60%" y2="70%" stroke="url(#lineGradient3)" strokeWidth="1" style={{ animation: 'linePulse 5s ease-in-out infinite 0.8s' }} />
          <line x1="60%" y1="70%" x2="85%" y2="80%" stroke="url(#lineGradient2)" strokeWidth="1" style={{ animation: 'linePulse 4.5s ease-in-out infinite 1.5s' }} />
          <line x1="85%" y1="80%" x2="95%" y2="65%" stroke="url(#lineGradient1)" strokeWidth="1" style={{ animation: 'linePulse 5.5s ease-in-out infinite' }} />
          {/* Cross connections */}
          <line x1="25%" y1="25%" x2="30%" y2="55%" stroke="url(#lineGradient3)" strokeWidth="0.5" style={{ animation: 'linePulse 7s ease-in-out infinite 0.2s' }} />
          <line x1="55%" y1="45%" x2="60%" y2="70%" stroke="url(#lineGradient1)" strokeWidth="0.5" style={{ animation: 'linePulse 6s ease-in-out infinite 0.6s' }} />
          <line x1="70%" y1="20%" x2="80%" y2="50%" stroke="url(#lineGradient2)" strokeWidth="0.5" style={{ animation: 'linePulse 5.5s ease-in-out infinite 1s' }} />
          <line x1="45%" y1="10%" x2="55%" y2="45%" stroke="url(#lineGradient3)" strokeWidth="0.5" style={{ animation: 'linePulse 6.5s ease-in-out infinite' }} />
        </svg>

        {/* Glowing nodes */}
        <div className="intel-node" style={{ top: '15%', left: '5%', animation: 'nodeFloat 8s ease-in-out infinite' }}>
          <div className="intel-node-core" style={{ animationDelay: '0s' }}></div>
        </div>
        <div className="intel-node" style={{ top: '25%', left: '25%', animation: 'nodeFloat 10s ease-in-out infinite 1s' }}>
          <div className="intel-node-core teal" style={{ animationDelay: '0.5s' }}></div>
        </div>
        <div className="intel-node" style={{ top: '10%', left: '45%', animation: 'nodeFloat 9s ease-in-out infinite 2s' }}>
          <div className="intel-node-core blue" style={{ animationDelay: '1s' }}></div>
        </div>
        <div className="intel-node" style={{ top: '20%', left: '70%', animation: 'nodeFloat 11s ease-in-out infinite 0.5s' }}>
          <div className="intel-node-core peach" style={{ animationDelay: '1.5s' }}></div>
        </div>
        <div className="intel-node" style={{ top: '8%', left: '90%', animation: 'nodeFloat 8s ease-in-out infinite 1.5s' }}>
          <div className="intel-node-core" style={{ animationDelay: '2s' }}></div>
        </div>
        <div className="intel-node" style={{ top: '40%', left: '10%', animation: 'nodeFloat 12s ease-in-out infinite' }}>
          <div className="intel-node-core blue" style={{ animationDelay: '0.3s' }}></div>
        </div>
        <div className="intel-node" style={{ top: '55%', left: '30%', animation: 'nodeFloat 9s ease-in-out infinite 2s' }}>
          <div className="intel-node-core" style={{ animationDelay: '0.8s' }}></div>
        </div>
        <div className="intel-node" style={{ top: '45%', left: '55%', animation: 'nodeFloat 10s ease-in-out infinite 0.8s' }}>
          <div className="intel-node-core teal" style={{ animationDelay: '1.2s' }}></div>
        </div>
        <div className="intel-node" style={{ top: '50%', left: '80%', animation: 'nodeFloat 8s ease-in-out infinite 1.2s' }}>
          <div className="intel-node-core peach" style={{ animationDelay: '1.8s' }}></div>
        </div>
        <div className="intel-node" style={{ top: '35%', left: '95%', animation: 'nodeFloat 11s ease-in-out infinite 0.3s' }}>
          <div className="intel-node-core blue" style={{ animationDelay: '2.2s' }}></div>
        </div>
        <div className="intel-node" style={{ top: '75%', left: '15%', animation: 'nodeFloat 10s ease-in-out infinite 1s' }}>
          <div className="intel-node-core teal" style={{ animationDelay: '0.6s' }}></div>
        </div>
        <div className="intel-node" style={{ top: '85%', left: '35%', animation: 'nodeFloat 9s ease-in-out infinite 0.5s' }}>
          <div className="intel-node-core peach" style={{ animationDelay: '1.1s' }}></div>
        </div>
        <div className="intel-node" style={{ top: '70%', left: '60%', animation: 'nodeFloat 11s ease-in-out infinite 1.8s' }}>
          <div className="intel-node-core" style={{ animationDelay: '1.6s' }}></div>
        </div>
        <div className="intel-node" style={{ top: '80%', left: '85%', animation: 'nodeFloat 8s ease-in-out infinite 0.7s' }}>
          <div className="intel-node-core blue" style={{ animationDelay: '2s' }}></div>
        </div>
        <div className="intel-node" style={{ top: '65%', left: '95%', animation: 'nodeFloat 10s ease-in-out infinite 1.3s' }}>
          <div className="intel-node-core teal" style={{ animationDelay: '0.4s' }}></div>
        </div>

        {/* Sparkle effects */}
        <div className="intel-sparkle" style={{ top: '18%', left: '15%', animationDelay: '0s' }}></div>
        <div className="intel-sparkle" style={{ top: '30%', left: '48%', animationDelay: '0.7s' }}></div>
        <div className="intel-sparkle" style={{ top: '12%', left: '78%', animationDelay: '1.4s' }}></div>
        <div className="intel-sparkle" style={{ top: '52%', left: '22%', animationDelay: '2.1s' }}></div>
        <div className="intel-sparkle" style={{ top: '48%', left: '68%', animationDelay: '0.3s' }}></div>
        <div className="intel-sparkle" style={{ top: '38%', left: '88%', animationDelay: '1.8s' }}></div>
        <div className="intel-sparkle" style={{ top: '78%', left: '28%', animationDelay: '1.1s' }}></div>
        <div className="intel-sparkle" style={{ top: '72%', left: '72%', animationDelay: '2.5s' }}></div>
        <div className="intel-sparkle" style={{ top: '88%', left: '52%', animationDelay: '0.9s' }}></div>
        <div className="intel-sparkle" style={{ top: '62%', left: '8%', animationDelay: '1.6s' }}></div>

        {/* Subtle background glow orbs for depth */}
        <div className="intel-glow-orb" style={{
          top: '-10%',
          left: '-5%',
          width: '400px',
          height: '400px',
          background: 'radial-gradient(circle, rgba(239, 71, 111, 0.4) 0%, transparent 70%)',
        }} />
        <div className="intel-glow-orb" style={{
          top: '30%',
          right: '-10%',
          width: '350px',
          height: '350px',
          background: 'radial-gradient(circle, rgba(17, 138, 178, 0.35) 0%, transparent 70%)',
          animationDelay: '5s',
        }} />
        <div className="intel-glow-orb" style={{
          bottom: '-5%',
          left: '30%',
          width: '300px',
          height: '300px',
          background: 'radial-gradient(circle, rgba(6, 214, 160, 0.3) 0%, transparent 70%)',
          animationDelay: '10s',
        }} />
      </div>
      <div style={{ maxWidth: 'var(--max-width-xl)', margin: '0 auto', position: 'relative', zIndex: 1 }}>
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

          {/* Testimonials Grid */}
          <div style={{
            display: 'grid',
            gridTemplateColumns: `repeat(${Math.min(testimonials.length, 3)}, 1fr)`,
            gap: 'var(--spacing-lg)',
            marginTop: 'var(--spacing-2xl)',
          }} className="intelligence-testimonials-grid">
            <style>{`
              @media (max-width: 768px) {
                .intelligence-testimonials-grid {
                  grid-template-columns: 1fr !important;
                }
              }
            `}</style>

            {testimonials.map((testimonial: any, index: number) => (
              <div
                key={index}
                style={{
                  padding: 'var(--spacing-lg)',
                  background: 'rgba(255, 255, 255, 0.08)',
                  borderRadius: 'var(--radius-lg)',
                  border: '1px solid rgba(255, 255, 255, 0.15)',
                }}
              >
                <p style={{
                  fontSize: 'var(--font-size-small)',
                  fontStyle: 'italic',
                  color: 'rgba(255, 255, 255, 0.85)',
                  lineHeight: 'var(--line-height-relaxed)',
                  marginBottom: 'var(--spacing-md)',
                }}>
                  "{testimonial.quote}"
                </p>
                <p style={{
                  fontSize: 'var(--font-size-xs)',
                  fontWeight: 600,
                  color: 'rgba(255, 255, 255, 0.9)',
                  margin: 0,
                }}>
                  {testimonial.author}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
    </>
  );
}

export const fields: any = [
  {
    type: 'text',
    name: 'heading',
    label: 'Section Heading',
    default: 'The Intelligence',
  },
  {
    type: 'text',
    name: 'subtitle',
    label: 'Subtitle',
    default: 'Transform human connection into measurable outcomes.',
  },
  {
    type: 'group',
    name: 'features',
    label: 'Features',
    help_text: 'Edit the feature cards. Leave empty to use defaults.',
    occurrence: {
      min: 0,
      max: 6,
      default: 0,
    },
    children: [
      {
        type: 'choice',
        name: 'icon_key',
        label: 'Icon',
        choices: [
          ['reveal', 'Reveal (Insights)'],
          ['spark', 'Spark (Reporting)'],
          ['scale', 'Scale (Alerts)'],
          ['fuel', 'Fuel (Measurement)'],
        ],
        default: 'reveal',
      },
      {
        type: 'text',
        name: 'title',
        label: 'Feature Title',
        default: 'Feature Title',
      },
      {
        type: 'text',
        name: 'description',
        label: 'Feature Description',
        default: 'Feature description goes here.',
      },
    ],
  },
  {
    type: 'text',
    name: 'stats_heading',
    label: 'Stats Heading',
    default: 'Measurable Impact Across Key Outcomes',
  },
  {
    type: 'group',
    name: 'stats',
    label: 'Statistics',
    help_text: 'Edit the stat cards. Leave empty to use defaults.',
    occurrence: {
      min: 0,
      max: 6,
      default: 0,
    },
    children: [
      {
        type: 'text',
        name: 'value',
        label: 'Stat Value',
        default: '+6%',
      },
      {
        type: 'text',
        name: 'stat_label',
        label: 'Stat Label',
        default: 'retention lift',
      },
    ],
  },
  {
    type: 'group',
    name: 'testimonials',
    label: 'Testimonials',
    help_text: 'Edit testimonials. Leave empty to use defaults.',
    occurrence: {
      min: 0,
      max: 6,
      default: 0,
    },
    children: [
      {
        type: 'text',
        name: 'quote',
        label: 'Quote',
        default: 'Testimonial quote goes here.',
      },
      {
        type: 'text',
        name: 'author',
        label: 'Author',
        default: '– Author Name, Title, Organization',
      },
    ],
  },
];

export const meta = {
  label: 'Intelligence Section',
};
