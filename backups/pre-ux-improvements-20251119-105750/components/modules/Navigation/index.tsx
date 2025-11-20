import React from 'react';
import {
  ModuleFields,
  TextField,
} from '@hubspot/cms-components/fields';
import mcLogo from '../../../assets/mc-logo.png';
import { DemoModal } from '../DemoModal';

export function Component({ fieldValues }: any) {
  const menuItems = [
    {
      label: 'Welcome to MC',
      hasDropdown: true,
      megaMenu: {
        sections: [
          {
            title: 'Platform',
            items: [
              { label: 'How It Works', description: 'AI-powered mentorship matching', icon: '⚡' },
              { label: 'Features', description: 'Tools for meaningful connections', icon: '✨' },
              { label: 'Technology', description: 'Our matching algorithm', icon: '🔬' },
            ]
          },
          {
            title: 'Get Started',
            items: [
              { label: 'For Institutions', description: 'Higher education solutions', icon: '🎓' },
              { label: 'For Employers', description: 'Workforce development', icon: '💼' },
              { label: 'For Organizations', description: 'Community programs', icon: '🤝' },
            ]
          }
        ]
      }
    },
    {
      label: 'Impact',
      hasDropdown: true,
      megaMenu: {
        sections: [
          {
            title: 'Success Stories',
            items: [
              { label: 'Case Studies', description: 'Real results from our partners', icon: '📊' },
              { label: 'Student Outcomes', description: 'Improved retention & belonging', icon: '🎯' },
              { label: 'ROI Calculator', description: 'Measure your potential impact', icon: '💰' },
            ]
          },
          {
            title: 'Research',
            items: [
              { label: 'Data & Insights', description: 'Evidence-based mentorship', icon: '📈' },
              { label: 'Publications', description: 'Academic research', icon: '📚' },
            ]
          }
        ]
      }
    },
    { label: 'Solutions', hasDropdown: false, href: '/solutions' },
    { label: 'Pricing', hasDropdown: false, href: '/pricing' },
    { label: 'Resources', hasDropdown: false, href: '/resources' },
    {
      label: 'Company',
      hasDropdown: true,
      megaMenu: {
        sections: [
          {
            title: 'About',
            items: [
              { label: 'Our Story', description: 'Mission and values', icon: '🌟' },
              { label: 'Team', description: 'Meet the people behind MC', icon: '👥' },
              { label: 'Careers', description: 'Join our team', icon: '🚀' },
            ]
          },
          {
            title: 'Connect',
            items: [
              { label: 'Blog', description: 'Latest news and insights', icon: '✍️' },
              { label: 'Contact Us', description: 'Get in touch', icon: '💬' },
            ]
          }
        ]
      }
    },
    { label: 'Login', hasDropdown: false, href: '/login' }
  ];

  const styles: Record<string, React.CSSProperties> = {
    nav: {
      position: 'sticky',
      top: 0,
      background: 'rgba(255, 255, 255, 0.98)',
      backdropFilter: 'blur(20px)',
      boxShadow: '0 1px 0 rgba(0, 0, 0, 0.05)',
      zIndex: 1000,
      padding: '1rem 0',
    },
    container: {
      maxWidth: '1200px',
      margin: '0 auto',
      padding: '0 1.5rem',
    },
    flexContainer: {
      display: 'flex',
      justifyContent: 'space-between',
      alignItems: 'center',
    },
    logo: {
      height: '28px',
      display: 'flex',
      alignItems: 'center',
      maxWidth: '200px',
    },
    logoImg: {
      height: '100%',
      width: 'auto',
      maxWidth: '100%',
      objectFit: 'contain',
    },
    desktopMenu: {
      display: 'flex',
      alignItems: 'center',
      gap: '2rem',
    },
    menuLink: {
      fontFamily: 'var(--font-body)',
      fontSize: '0.95rem',
      fontWeight: 500,
      color: '#1a1a1a',
      textDecoration: 'none',
      padding: '0.5rem 0',
    },
    ctaButton: {
      background: 'linear-gradient(135deg, #FF4B7E 0%, #FF6B9D 100%)',
      color: 'white',
      padding: '0.75rem 1.75rem',
      borderRadius: '50px',
      fontSize: '0.95rem',
      fontWeight: 600,
      border: 'none',
      cursor: 'pointer',
      boxShadow: '0 4px 16px rgba(255, 75, 126, 0.25)',
      transition: 'all 0.3s ease',
    },
    hamburger: {
      display: 'none',
      background: 'none',
      border: 'none',
      cursor: 'pointer',
      padding: '8px',
      zIndex: 1001,
    },
  };

  return (
    <>
      <script dangerouslySetInnerHTML={{__html: `
        (function() {
          function initMegaMenu() {
            let currentOpenMenu = null;
            let currentBackdrop = null;
            let closeTimeout = null;

            const navItems = document.querySelectorAll('.nav-item-wrapper');

            navItems.forEach((wrapper) => {
              const megaMenu = wrapper.querySelector('.mega-menu');
              const backdrop = wrapper.querySelector('.mega-menu-backdrop');

              if (!megaMenu) return;

              wrapper.addEventListener('mouseenter', function() {
                if (closeTimeout) {
                  clearTimeout(closeTimeout);
                  closeTimeout = null;
                }

                // Close any currently open menu
                if (currentOpenMenu && currentOpenMenu !== megaMenu) {
                  currentOpenMenu.style.opacity = '0';
                  currentOpenMenu.style.visibility = 'hidden';
                  currentOpenMenu.style.transform = 'translateY(-20px)';
                  if (currentBackdrop) {
                    currentBackdrop.style.opacity = '0';
                    currentBackdrop.style.visibility = 'hidden';
                  }
                }

                // Open this menu with fade in animation
                megaMenu.style.opacity = '1';
                megaMenu.style.visibility = 'visible';
                megaMenu.style.transform = 'translateY(0)';
                if (backdrop) {
                  backdrop.style.opacity = '1';
                  backdrop.style.visibility = 'visible';
                }
                currentOpenMenu = megaMenu;
                currentBackdrop = backdrop;
              });

              wrapper.addEventListener('mouseleave', function() {
                closeTimeout = setTimeout(function() {
                  megaMenu.style.opacity = '0';
                  megaMenu.style.visibility = 'hidden';
                  megaMenu.style.transform = 'translateY(-20px)';
                  if (backdrop) {
                    backdrop.style.opacity = '0';
                    backdrop.style.visibility = 'hidden';
                  }
                  currentOpenMenu = null;
                  currentBackdrop = null;
                }, 200);
              });

              // Also close when leaving the mega menu itself
              if (megaMenu) {
                megaMenu.addEventListener('mouseenter', function() {
                  if (closeTimeout) {
                    clearTimeout(closeTimeout);
                    closeTimeout = null;
                  }
                });

                megaMenu.addEventListener('mouseleave', function() {
                  closeTimeout = setTimeout(function() {
                    megaMenu.style.opacity = '0';
                    megaMenu.style.visibility = 'hidden';
                    megaMenu.style.transform = 'translateY(-20px)';
                    if (backdrop) {
                      backdrop.style.opacity = '0';
                      backdrop.style.visibility = 'hidden';
                    }
                    currentOpenMenu = null;
                    currentBackdrop = null;
                  }, 200);
                });
              }
            });

            // Mobile menu toggle
            const hamburger = document.querySelector('.mobile-hamburger');
            const mobileMenu = document.querySelector('.mobile-menu');
            const hamburgerIcon = document.querySelector('.hamburger-icon');
            const closeIcon = document.querySelector('.close-icon');
            let isMobileMenuOpen = false;

            if (hamburger && mobileMenu) {
              hamburger.onclick = function() {
                isMobileMenuOpen = !isMobileMenuOpen;
                mobileMenu.style.transform = isMobileMenuOpen ? 'translateX(0)' : 'translateX(100%)';
                if (hamburgerIcon && closeIcon) {
                  hamburgerIcon.style.display = isMobileMenuOpen ? 'none' : 'block';
                  closeIcon.style.display = isMobileMenuOpen ? 'block' : 'none';
                }
              };
            }

            // Request demo button
            const demoBtns = document.querySelectorAll('.demo-request-btn');
            demoBtns.forEach(btn => {
              btn.onclick = function() {
                const modal = document.querySelector('.demo-modal');
                if (modal) {
                  modal.style.display = 'flex';
                }
                if (mobileMenu && isMobileMenuOpen) {
                  mobileMenu.style.transform = 'translateX(100%)';
                  isMobileMenuOpen = false;
                  if (hamburgerIcon && closeIcon) {
                    hamburgerIcon.style.display = 'block';
                    closeIcon.style.display = 'none';
                  }
                }
              };
            });
          }

          if (document.readyState === 'loading') {
            document.addEventListener('DOMContentLoaded', initMegaMenu);
          } else {
            setTimeout(initMegaMenu, 100);
          }
        })();
      `}} />

      <nav style={styles.nav} role="navigation" aria-label="Main navigation">
        <div style={styles.container}>
          <div style={styles.flexContainer}>
            <div style={styles.logo}>
              <a href="/" aria-label="Mentor Collective Home">
                <img
                  src={mcLogo}
                  alt="Mentor Collective"
                  style={styles.logoImg}
                />
              </a>
            </div>

            {/* Desktop Menu */}
            <div style={styles.desktopMenu} className="desktop-menu">
              {menuItems.map((item, index) => (
                <div key={index} className="nav-item-wrapper" style={{ position: 'relative' }}>
                  <a
                    href={item.href || '#'}
                    style={styles.menuLink}
                    aria-label={item.label}
                    aria-haspopup={item.hasDropdown}
                  >
                    {item.label}
                    {item.hasDropdown && <span style={{ fontSize: '0.7rem', marginLeft: '0.25rem' }}>▼</span>}
                  </a>

                  {/* Mega Menu Dropdown */}
                  {item.hasDropdown && item.megaMenu && (
                    <>
                      {/* Backdrop overlay - separate from mega menu */}
                      <div className="mega-menu-backdrop" style={{
                        position: 'fixed',
                        top: '73px',
                        left: 0,
                        right: 0,
                        bottom: 0,
                        background: 'rgba(0, 0, 0, 0.3)',
                        backdropFilter: 'blur(2px)',
                        opacity: 0,
                        visibility: 'hidden',
                        transition: 'opacity 0.4s cubic-bezier(0.4, 0, 0.2, 1), visibility 0.4s',
                        zIndex: 998,
                        pointerEvents: 'none',
                      }} />

                      <div
                        className="mega-menu"
                        style={{
                          position: 'fixed',
                          top: '73px',
                          left: 0,
                          right: 0,
                          background: 'white',
                          borderTop: '1px solid rgba(0, 0, 0, 0.05)',
                          boxShadow: '0 20px 60px rgba(0, 0, 0, 0.1)',
                          padding: '3rem 0',
                          opacity: 0,
                          visibility: 'hidden',
                          transform: 'translateY(-20px)',
                          transition: 'opacity 0.4s cubic-bezier(0.4, 0, 0.2, 1), transform 0.4s cubic-bezier(0.4, 0, 0.2, 1), visibility 0.4s',
                          zIndex: 999,
                        }}
                      >
                        <div style={{
                          maxWidth: '1200px',
                          margin: '0 auto',
                          padding: '0 1.5rem',
                        }}>
                          <div style={{
                            display: 'grid',
                            gridTemplateColumns: item.megaMenu.sections.length === 2 ? '1fr 1fr' : 'repeat(3, 1fr)',
                            gap: '4rem',
                          }}>
                            {item.megaMenu.sections.map((section, sectionIndex) => (
                              <div key={sectionIndex}>
                                <h3 style={{
                                  fontSize: '0.75rem',
                                  fontWeight: 700,
                                  color: '#999',
                                  textTransform: 'uppercase',
                                  letterSpacing: '0.05em',
                                  marginBottom: '1.5rem',
                                }}>
                                  {section.title}
                                </h3>
                                <div style={{ display: 'flex', flexDirection: 'column', gap: '0.25rem' }}>
                                  {section.items.map((menuItem, itemIndex) => (
                                    <a
                                      key={itemIndex}
                                      href="#"
                                      style={{
                                        display: 'flex',
                                        alignItems: 'flex-start',
                                        gap: '1rem',
                                        padding: '1rem',
                                        borderRadius: '12px',
                                        textDecoration: 'none',
                                        transition: 'all 0.2s ease',
                                      }}
                                      onMouseEnter={(e) => {
                                        e.currentTarget.style.background = 'rgba(255, 75, 126, 0.05)';
                                        e.currentTarget.style.transform = 'translateX(4px)';
                                      }}
                                      onMouseLeave={(e) => {
                                        e.currentTarget.style.background = 'transparent';
                                        e.currentTarget.style.transform = 'translateX(0)';
                                      }}
                                    >
                                      <span style={{ fontSize: '1.5rem', flexShrink: 0 }}>
                                        {menuItem.icon}
                                      </span>
                                      <div style={{ flex: 1 }}>
                                        <div style={{
                                          fontSize: '1rem',
                                          fontWeight: 600,
                                          color: '#1a1a1a',
                                          marginBottom: '0.25rem',
                                        }}>
                                          {menuItem.label}
                                        </div>
                                        <div style={{
                                          fontSize: '0.875rem',
                                          color: '#6B7280',
                                          lineHeight: 1.5,
                                        }}>
                                          {menuItem.description}
                                        </div>
                                      </div>
                                    </a>
                                  ))}
                                </div>
                              </div>
                            ))}
                          </div>
                        </div>
                      </div>
                    </>
                  )}
                </div>
              ))}
              <button
                className="demo-request-btn"
                style={styles.ctaButton}
                type="button"
                aria-label="Request a demo"
              >
                Request a Demo
              </button>
            </div>

            {/* Mobile Hamburger */}
            <button
              style={{
                ...styles.hamburger,
                position: 'relative',
                zIndex: 10001,
              }}
              className="mobile-hamburger"
              type="button"
              aria-label="Toggle menu"
            >
              <svg className="hamburger-icon" width="32" height="32" viewBox="0 0 24 24" fill="none">
                <path d="M3 12H21M3 6H21M3 18H21" stroke="#1a1a1a" strokeWidth="2" strokeLinecap="round"/>
              </svg>
              <svg className="close-icon" width="32" height="32" viewBox="0 0 24 24" fill="none" style={{ display: 'none' }}>
                <path d="M18 6L6 18M6 6L18 18" stroke="#1a1a1a" strokeWidth="2" strokeLinecap="round"/>
              </svg>
            </button>
          </div>
        </div>

        {/* Mobile Menu */}
        <div style={{
          position: 'fixed' as const,
          top: '73px',
          left: 0,
          right: 0,
          bottom: 0,
          backgroundColor: '#ffffff',
          zIndex: 10000,
          padding: '20px',
          transform: 'translateX(100%)',
          transition: 'transform 0.3s ease',
          overflowY: 'auto',
        }} className="mobile-menu">
          <div style={{
            display: 'flex',
            flexDirection: 'column' as const,
            gap: '1.5rem',
          }}>
            {menuItems.map((item, index) => (
              <a
                key={index}
                href={item.href || '#'}
                style={{
                  fontSize: '1.2rem',
                  fontWeight: 500,
                  color: '#1a1a1a',
                  textDecoration: 'none',
                  padding: '0.5rem 0',
                }}
              >
                {item.label}
              </a>
            ))}
            <button
              className="demo-request-btn"
              style={{
                background: 'linear-gradient(135deg, #FF4B7E 0%, #FF6B9D 100%)',
                color: 'white',
                padding: '0.75rem 1.75rem',
                borderRadius: '50px',
                fontSize: '0.95rem',
                fontWeight: 600,
                border: 'none',
                cursor: 'pointer',
                boxShadow: '0 4px 16px rgba(255, 75, 126, 0.25)',
                width: '100%',
                marginTop: '1rem',
              }}
              type="button"
            >
              Request a Demo
            </button>
          </div>
        </div>
      </nav>

      <DemoModal />
    </>
  );
}

export const fields = (
  <ModuleFields>
    <TextField
      name="logoText"
      label="Logo Text"
      default="Mentor Collective"
    />
  </ModuleFields>
);

export const meta = {
  label: 'Navigation',
};
