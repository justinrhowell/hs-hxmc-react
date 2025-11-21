import React from 'react';
import {
  ModuleFields,
  TextField,
} from '@hubspot/cms-components/fields';
import mcLogo from '../../../assets/MentorCollective-Primary-Logo.svg';
import { DemoModal } from '../../shared/DemoModal';

export function Component({ fieldValues }: any) {
  const menuItems = [
    {
      label: 'Mentorship OS',
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
            title: 'Solutions',
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
      label: 'Network',
      hasDropdown: true,
      megaMenu: {
        sections: [
          {
            title: 'Build Your Network',
            items: [
              { label: 'Matching', description: 'Smart mentor-mentee pairing', icon: '🔗' },
              { label: 'Community', description: 'Connect with peers', icon: '👥' },
              { label: 'Alumni Network', description: 'Leverage alumni connections', icon: '🎓' },
            ]
          },
          {
            title: 'Growth',
            items: [
              { label: 'Professional Development', description: 'Career advancement paths', icon: '📈' },
              { label: 'Skills Development', description: 'Build durable skills', icon: '💡' },
            ]
          }
        ]
      }
    },
    { label: 'Outcomes', hasDropdown: false, href: '/outcomes' },
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
    { label: 'Log In', hasDropdown: false, href: '/login' }
  ];

  const styles: Record<string, React.CSSProperties> = {
    nav: {
      position: 'sticky',
      top: 0,
      background: 'rgba(255, 255, 255, 0.98)',
      backdropFilter: 'blur(20px)',
      boxShadow: 'var(--shadow-sm)',
      zIndex: 'var(--z-modal)',
      padding: '1.25rem 0',
      transition: 'var(--transition-smooth)',
      overflow: 'visible',
    },
    container: {
      maxWidth: 'var(--max-width-xl)',
      margin: '0 auto',
      padding: '0 var(--container-padding)',
    },
    flexContainer: {
      display: 'flex',
      justifyContent: 'space-between',
      alignItems: 'center',
    },
    logo: {
      height: '32px',
      display: 'flex',
      alignItems: 'center',
      maxWidth: '180px',
      transition: 'var(--transition-smooth)',
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
      gap: 'var(--spacing-lg)',
    },
    menuLink: {
      fontFamily: 'var(--font-body)',
      fontSize: '0.95rem',
      fontWeight: 500,
      color: 'var(--text-primary)',
      textDecoration: 'none',
      padding: '0.5rem 0',
      transition: 'var(--transition-fast)',
    },
    ctaButton: {
      background: 'var(--gradient-coral)',
      color: 'var(--text-white)',
      padding: '0.75rem 1.75rem',
      borderRadius: 'var(--radius-full)',
      fontSize: '0.95rem',
      fontWeight: 600,
      border: 'none',
      cursor: 'pointer',
      boxShadow: 'var(--shadow-md)',
      transition: 'var(--transition-medium)',
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
      <style>{`
        @media (max-width: 768px) {
          .desktop-menu {
            display: none !important;
          }

          .mobile-hamburger {
            display: flex !important;
          }

          .mobile-menu {
            padding: 70px 20px 20px !important;
          }
        }

        @media (max-width: 480px) {
          .mobile-menu {
            padding: 60px 16px 16px !important;
          }

          .mobile-menu a {
            font-size: 1.1rem !important;
          }
        }

        @media (max-height: 600px) {
          /* For short screens, reduce top padding */
          .mobile-menu {
            padding-top: 60px !important;
          }
        }
      `}</style>
      <script dangerouslySetInnerHTML={{__html: `
        (function() {
          function initMegaMenu() {
            let currentOpenMenu = null;
            let closeTimeout = null;
            let lastScrollY = window.scrollY;
            let scrollingDown = false;

            // Scroll effect for navigation
            function handleScroll() {
              const nav = document.querySelector('nav[role="navigation"]');
              const logo = document.querySelector('.nav-logo');
              const currentScrollY = window.scrollY;

              if (!nav || !logo) return;

              // Determine scroll direction
              scrollingDown = currentScrollY > lastScrollY;
              lastScrollY = currentScrollY;

              if (currentScrollY > 50) {
                // Scrolled state - smaller, more shadow
                nav.style.padding = '0.75rem 0';
                nav.style.boxShadow = '0 4px 20px rgba(0, 0, 0, 0.08)';
                logo.style.height = '28px';
              } else {
                // Top of page - larger, less shadow
                nav.style.padding = '1.25rem 0';
                nav.style.boxShadow = '0 2px 8px rgba(0, 0, 0, 0.05)';
                logo.style.height = '32px';
              }
            }

            // Throttled scroll handler
            let scrollTimeout;
            window.addEventListener('scroll', function() {
              if (scrollTimeout) {
                window.cancelAnimationFrame(scrollTimeout);
              }
              scrollTimeout = window.requestAnimationFrame(handleScroll);
            }, { passive: true });

            const navItems = document.querySelectorAll('.nav-item-wrapper');

            navItems.forEach((wrapper) => {
              const megaMenu = wrapper.querySelector('.mega-menu');

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
                }

                // Open this menu with fade in animation
                megaMenu.style.opacity = '1';
                megaMenu.style.visibility = 'visible';
                megaMenu.style.transform = 'translateY(0)';
                currentOpenMenu = megaMenu;
              });

              wrapper.addEventListener('mouseleave', function() {
                closeTimeout = setTimeout(function() {
                  megaMenu.style.opacity = '0';
                  megaMenu.style.visibility = 'hidden';
                  megaMenu.style.transform = 'translateY(-20px)';
                  currentOpenMenu = null;
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
                    currentOpenMenu = null;
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
            <div style={styles.logo} className="nav-logo">
              <a href="/" aria-label="Mentor Collective Home" style={{ display: 'flex', alignItems: 'center', height: '100%' }}>
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
                    onMouseEnter={(e) => {
                      e.currentTarget.style.color = 'var(--text-coral)';
                    }}
                    onMouseLeave={(e) => {
                      e.currentTarget.style.color = 'var(--text-primary)';
                    }}
                  >
                    {item.label}
                    {item.hasDropdown && <span style={{ fontSize: '0.7rem', marginLeft: '0.25rem', opacity: 0.5 }}>▼</span>}
                  </a>

                  {/* Mega Menu Dropdown */}
                  {item.hasDropdown && item.megaMenu && (
                    <>
                      <div
                        className="mega-menu"
                        style={{
                          position: 'fixed',
                          top: '100%',
                          left: 0,
                          right: 0,
                          background: 'var(--bg-white)',
                          borderTop: '1px solid rgba(0, 0, 0, 0.05)',
                          boxShadow: '0 20px 60px rgba(0, 0, 0, 0.1)',
                          padding: '2.5rem 0',
                          opacity: 0,
                          visibility: 'hidden',
                          transform: 'translateY(-10px)',
                          transition: 'var(--transition-smooth)',
                          zIndex: 999,
                        }}
                      >
                        <div style={{
                          maxWidth: 'var(--max-width-xl)',
                          margin: '0 auto',
                          padding: '0 var(--container-padding)',
                        }}>
                          <div style={{
                            display: 'grid',
                            gridTemplateColumns: item.megaMenu.sections.length === 2 ? '1fr 1fr' : 'repeat(3, 1fr)',
                            gap: 'var(--spacing-2xl)',
                          }}>
                            {item.megaMenu.sections.map((section, sectionIndex) => (
                              <div key={sectionIndex}>
                                <h3 style={{
                                  fontSize: '0.75rem',
                                  fontWeight: 700,
                                  color: 'var(--text-muted)',
                                  textTransform: 'uppercase',
                                  letterSpacing: '0.05em',
                                  marginBottom: 'var(--spacing-md)',
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
                                        gap: 'var(--spacing-sm)',
                                        padding: 'var(--spacing-sm)',
                                        borderRadius: 'var(--radius-md)',
                                        textDecoration: 'none',
                                        transition: 'var(--transition-fast)',
                                      }}
                                      onMouseEnter={(e) => {
                                        e.currentTarget.style.background = 'var(--bg-light-coral)';
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
                                          color: 'var(--text-primary)',
                                          marginBottom: '0.25rem',
                                        }}>
                                          {menuItem.label}
                                        </div>
                                        <div style={{
                                          fontSize: '0.875rem',
                                          color: 'var(--text-muted)',
                                          lineHeight: 'var(--line-height-normal)',
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
          top: 0,
          left: 0,
          right: 0,
          bottom: 0,
          backgroundColor: 'var(--bg-white)',
          zIndex: 10000,
          padding: '80px 20px 20px',
          transform: 'translateX(100%)',
          transition: 'var(--transition-medium)',
          overflowY: 'auto',
          WebkitOverflowScrolling: 'touch',
        }} className="mobile-menu">
          <div style={{
            display: 'flex',
            flexDirection: 'column' as const,
            gap: 'var(--spacing-md)',
          }}>
            {menuItems.map((item, index) => (
              <a
                key={index}
                href={item.href || '#'}
                style={{
                  fontSize: '1.2rem',
                  fontWeight: 500,
                  color: 'var(--text-primary)',
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
                background: 'var(--gradient-coral)',
                color: 'var(--text-white)',
                padding: '0.75rem 1.75rem',
                borderRadius: 'var(--radius-full)',
                fontSize: '0.95rem',
                fontWeight: 600,
                border: 'none',
                cursor: 'pointer',
                boxShadow: 'var(--shadow-md)',
                width: '100%',
                marginTop: 'var(--spacing-sm)',
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
