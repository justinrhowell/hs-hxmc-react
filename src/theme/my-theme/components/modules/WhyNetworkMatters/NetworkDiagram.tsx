import React from 'react';

// Outer nodes around the circle
const outerNodes = [
  { label: 'Employers', angle: -45 },
  { label: 'Institutions', angle: 45 },
  { label: 'Students', angle: 135 },
  { label: 'Early Talent', angle: 225 },
];

// Inner spark items - the outcomes/benefits (positioned as + nodes)
const innerSparks = [
  { label: 'Belonging', angle: 0 },
  { label: 'Career Mobility', angle: 72 },
  { label: 'Retention', angle: 144 },
  { label: 'Social Capital', angle: 216 },
  { label: 'Readiness', angle: 288 },
];

export function NetworkDiagram() {
  const diagramId = 'network-diagram-' + Math.random().toString(36).substr(2, 9);

  return (
    <>
      <style dangerouslySetInnerHTML={{__html: `
        .network-diagram-container {
          position: relative;
          width: 100%;
          max-width: 450px;
          aspect-ratio: 1;
          margin: 0 auto;
        }

        /* Main circle */
        .network-main-circle {
          position: absolute;
          top: 50%;
          left: 50%;
          transform: translate(-50%, -50%);
          width: 70%;
          height: 70%;
          border-radius: 50%;
          border: 3px solid rgba(239, 71, 111, 0.2);
          background: radial-gradient(circle at center, rgba(255, 255, 255, 0.95) 0%, rgba(253, 248, 239, 0.9) 100%);
          box-shadow: 0 8px 32px rgba(239, 71, 111, 0.1);
          display: flex;
          align-items: center;
          justify-content: center;
          z-index: 2;
        }

        /* Center content wrapper */
        .network-center-content {
          display: flex;
          flex-direction: column;
          align-items: center;
          gap: 8px;
        }

        /* Network icon in center */
        .network-center-icon {
          width: 60px;
          height: 60px;
          color: var(--primary-coral);
          opacity: 0.9;
        }

        .network-center-text {
          font-family: var(--font-headline);
          font-size: var(--font-size-xs);
          font-weight: 600;
          color: var(--text-coral);
          text-align: center;
          line-height: 1.3;
          max-width: 120px;
        }

        /* Outer nodes */
        .network-outer-node {
          position: absolute;
          z-index: 10;
          opacity: 0;
          transform: scale(0.8);
          transition: all 0.5s cubic-bezier(0.34, 1.56, 0.64, 1);
        }

        .network-outer-node.is-visible {
          opacity: 1;
          transform: scale(1);
        }

        .network-outer-node-content {
          background: var(--gradient-coral);
          color: white;
          padding: 10px 18px;
          border-radius: var(--radius-full);
          font-family: var(--font-headline);
          font-size: var(--font-size-small);
          font-weight: 600;
          white-space: nowrap;
          box-shadow: 0 4px 16px rgba(239, 71, 111, 0.35);
          cursor: default;
          transition: all 0.3s ease;
        }

        .network-outer-node-content:hover {
          transform: scale(1.05);
          box-shadow: 0 6px 20px rgba(239, 71, 111, 0.45);
        }

        /* Inner expandable nodes */
        .network-inner-node {
          position: absolute;
          z-index: 5;
          opacity: 0;
          transform: scale(0);
          transition: all 0.5s cubic-bezier(0.34, 1.56, 0.64, 1);
        }

        .network-inner-node.is-visible {
          opacity: 1;
          transform: scale(1);
        }

        .network-inner-node-circle {
          width: 36px;
          height: 36px;
          border-radius: 50%;
          background: white;
          border: 2px solid rgba(239, 71, 111, 0.3);
          display: flex;
          align-items: center;
          justify-content: center;
          cursor: pointer;
          transition: all 0.3s cubic-bezier(0.34, 1.56, 0.64, 1);
          box-shadow: 0 2px 8px rgba(0, 0, 0, 0.08);
          position: relative;
        }

        .network-inner-node-circle:hover {
          background: var(--gradient-coral);
          border-color: transparent;
          transform: scale(1.15);
          box-shadow: 0 4px 16px rgba(239, 71, 111, 0.4);
        }

        .network-inner-node-circle:hover .network-plus-icon {
          color: white;
        }

        .network-inner-node-circle:hover .network-node-label {
          opacity: 1;
          transform: translateX(0);
          pointer-events: auto;
        }

        .network-plus-icon {
          width: 16px;
          height: 16px;
          color: var(--primary-coral);
          transition: color 0.3s ease;
        }

        /* Expandable label */
        .network-node-label {
          position: absolute;
          left: calc(100% + 8px);
          top: 50%;
          transform: translateY(-50%) translateX(-10px);
          background: var(--primary-coral);
          color: white;
          padding: 6px 12px;
          border-radius: var(--radius-md);
          font-family: var(--font-headline);
          font-size: var(--font-size-xs);
          font-weight: 600;
          white-space: nowrap;
          opacity: 0;
          pointer-events: none;
          transition: all 0.3s cubic-bezier(0.34, 1.56, 0.64, 1);
          box-shadow: 0 4px 12px rgba(239, 71, 111, 0.3);
          z-index: 20;
        }

        /* Position labels based on node position */
        .network-inner-node[data-position="right"] .network-node-label {
          left: calc(100% + 8px);
          right: auto;
          transform: translateY(-50%) translateX(-10px);
        }

        .network-inner-node[data-position="right"] .network-inner-node-circle:hover .network-node-label {
          transform: translateY(-50%) translateX(0);
        }

        .network-inner-node[data-position="left"] .network-node-label {
          right: calc(100% + 8px);
          left: auto;
          transform: translateY(-50%) translateX(10px);
        }

        .network-inner-node[data-position="left"] .network-inner-node-circle:hover .network-node-label {
          transform: translateY(-50%) translateX(0);
        }

        .network-inner-node[data-position="top"] .network-node-label {
          bottom: calc(100% + 8px);
          top: auto;
          left: 50%;
          transform: translateX(-50%) translateY(10px);
        }

        .network-inner-node[data-position="top"] .network-inner-node-circle:hover .network-node-label {
          transform: translateX(-50%) translateY(0);
        }

        .network-inner-node[data-position="bottom"] .network-node-label {
          top: calc(100% + 8px);
          bottom: auto;
          left: 50%;
          transform: translateX(-50%) translateY(-10px);
        }

        .network-inner-node[data-position="bottom"] .network-inner-node-circle:hover .network-node-label {
          transform: translateX(-50%) translateY(0);
        }

        /* Pulsing outer ring animation */
        .network-pulse-ring {
          position: absolute;
          top: 50%;
          left: 50%;
          transform: translate(-50%, -50%);
          width: 70%;
          height: 70%;
          border-radius: 50%;
          border: 2px solid rgba(239, 71, 111, 0.15);
          animation: pulseRing 3s ease-out infinite;
          z-index: 1;
        }

        @keyframes pulseRing {
          0% {
            transform: translate(-50%, -50%) scale(1);
            opacity: 0.6;
          }
          100% {
            transform: translate(-50%, -50%) scale(1.4);
            opacity: 0;
          }
        }

        /* Star burst animation on inner nodes */
        .network-inner-node-circle::before {
          content: '';
          position: absolute;
          width: 100%;
          height: 100%;
          border-radius: 50%;
          background: rgba(255, 209, 102, 0.3);
          transform: scale(0);
          opacity: 0;
          transition: all 0.3s ease;
        }

        .network-inner-node-circle:hover::before {
          transform: scale(1.8);
          opacity: 1;
          animation: sparkBurst 0.6s ease-out forwards;
        }

        @keyframes sparkBurst {
          0% {
            transform: scale(1);
            opacity: 0.6;
          }
          100% {
            transform: scale(2);
            opacity: 0;
          }
        }

        /* Reduced motion support */
        @media (prefers-reduced-motion: reduce) {
          .network-outer-node,
          .network-inner-node {
            transition: none;
            opacity: 1;
            transform: scale(1);
          }
          .network-pulse-ring {
            animation: none;
          }
          .network-inner-node-circle::before {
            display: none;
          }
        }

        @media (max-width: 768px) {
          .network-outer-node-content {
            padding: 8px 14px;
            font-size: var(--font-size-xs);
          }
          .network-inner-node-circle {
            width: 32px;
            height: 32px;
          }
          .network-center-icon {
            width: 48px;
            height: 48px;
          }
          .network-center-text {
            font-size: 11px;
            max-width: 100px;
          }
        }
      `}} />

      <div className="network-diagram-container" id={diagramId}>
        {/* Pulsing ring effect */}
        <div className="network-pulse-ring" />

        {/* Main circle with network icon and text */}
        <div className="network-main-circle">
          <div className="network-center-content">
            {/* Network/Connection icon */}
            <svg className="network-center-icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
              {/* Central hub */}
              <circle cx="12" cy="12" r="3" fill="currentColor" stroke="none" />
              {/* Outer connection points */}
              <circle cx="12" cy="3" r="2" fill="currentColor" stroke="none" />
              <circle cx="21" cy="12" r="2" fill="currentColor" stroke="none" />
              <circle cx="12" cy="21" r="2" fill="currentColor" stroke="none" />
              <circle cx="3" cy="12" r="2" fill="currentColor" stroke="none" />
              {/* Connection lines */}
              <line x1="12" y1="5" x2="12" y2="9" strokeLinecap="round" />
              <line x1="19" y1="12" x2="15" y2="12" strokeLinecap="round" />
              <line x1="12" y1="19" x2="12" y2="15" strokeLinecap="round" />
              <line x1="5" y1="12" x2="9" y2="12" strokeLinecap="round" />
              {/* Diagonal connections */}
              <circle cx="5.5" cy="5.5" r="1.5" fill="currentColor" stroke="none" opacity="0.6" />
              <circle cx="18.5" cy="5.5" r="1.5" fill="currentColor" stroke="none" opacity="0.6" />
              <circle cx="5.5" cy="18.5" r="1.5" fill="currentColor" stroke="none" opacity="0.6" />
              <circle cx="18.5" cy="18.5" r="1.5" fill="currentColor" stroke="none" opacity="0.6" />
              <line x1="7" y1="7" x2="10" y2="10" strokeLinecap="round" opacity="0.6" />
              <line x1="17" y1="7" x2="14" y2="10" strokeLinecap="round" opacity="0.6" />
              <line x1="7" y1="17" x2="10" y2="14" strokeLinecap="round" opacity="0.6" />
              <line x1="17" y1="17" x2="14" y2="14" strokeLinecap="round" opacity="0.6" />
            </svg>
            {/* Text below icon */}
            <span className="network-center-text">Powered by Mentor Collective</span>
          </div>
        </div>

        {/* Outer nodes - positioned around the circle */}
        {outerNodes.map((node, index) => {
          const radius = 48;
          const angleRad = (node.angle * Math.PI) / 180;
          const x = 50 + radius * Math.cos(angleRad);
          const y = 50 + radius * Math.sin(angleRad);

          return (
            <div
              key={node.label}
              className="network-outer-node"
              style={{
                left: `${x}%`,
                top: `${y}%`,
                transform: 'translate(-50%, -50%) scale(0.8)',
                transitionDelay: `${index * 150}ms`,
              }}
              data-node-index={index}
            >
              <div className="network-outer-node-content">
                {node.label}
              </div>
            </div>
          );
        })}

        {/* Inner expandable + nodes */}
        {innerSparks.map((spark, index) => {
          const radius = 28;
          const angleRad = (spark.angle * Math.PI) / 180;
          const x = 50 + radius * Math.cos(angleRad);
          const y = 50 + radius * Math.sin(angleRad);

          // Determine label position based on angle
          let position = 'right';
          if (spark.angle > 90 && spark.angle < 270) {
            position = 'left';
          }
          if (spark.angle === 90 || (spark.angle > 60 && spark.angle < 120)) {
            position = 'bottom';
          }
          if (spark.angle === 270 || (spark.angle > 240 && spark.angle < 300)) {
            position = 'top';
          }

          return (
            <div
              key={spark.label}
              className="network-inner-node"
              data-position={position}
              style={{
                left: `${x}%`,
                top: `${y}%`,
                transform: 'translate(-50%, -50%) scale(0)',
                transitionDelay: `${400 + index * 100}ms`,
              }}
              data-spark-index={index}
            >
              <div className="network-inner-node-circle">
                {/* Plus icon */}
                <svg className="network-plus-icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
                  <line x1="12" y1="5" x2="12" y2="19" strokeLinecap="round" />
                  <line x1="5" y1="12" x2="19" y2="12" strokeLinecap="round" />
                </svg>
                {/* Expandable label */}
                <span className="network-node-label">{spark.label}</span>
              </div>
            </div>
          );
        })}
      </div>

      {/* Intersection Observer script for scroll reveal */}
      <script dangerouslySetInnerHTML={{__html: `
        (function() {
          function initNetworkDiagram() {
            var container = document.getElementById('${diagramId}');
            if (!container) return;

            var outerNodes = container.querySelectorAll('.network-outer-node');
            var innerNodes = container.querySelectorAll('.network-inner-node');

            var observer = new IntersectionObserver(function(entries) {
              entries.forEach(function(entry) {
                if (entry.isIntersecting) {
                  // Animate outer nodes first
                  outerNodes.forEach(function(node, i) {
                    setTimeout(function() {
                      node.classList.add('is-visible');
                    }, i * 150);
                  });

                  // Then animate inner nodes
                  innerNodes.forEach(function(node, i) {
                    setTimeout(function() {
                      node.classList.add('is-visible');
                    }, 600 + i * 100);
                  });

                  observer.unobserve(entry.target);
                }
              });
            }, { threshold: 0.3 });

            observer.observe(container);
          }

          if (document.readyState === 'loading') {
            document.addEventListener('DOMContentLoaded', initNetworkDiagram);
          } else {
            setTimeout(initNetworkDiagram, 100);
          }
        })();
      `}} />
    </>
  );
}
