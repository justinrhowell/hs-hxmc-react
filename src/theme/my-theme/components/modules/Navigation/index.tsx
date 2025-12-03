import React from 'react';
import {
  ModuleFields,
  TextField,
} from '@hubspot/cms-components/fields';
import mcLogo from '../../../assets/MentorCollective-Primary-Logo.svg';
import { DemoModal } from '../../shared/DemoModal';

export function Component({ fieldValues }: any) {
  const menuItems = [
    { label: 'Mentorship OS', hasDropdown: false, href: '/product' },
    { label: 'Network', hasDropdown: false, href: '/network' },
    { label: 'Outcomes', hasDropdown: false, href: '/outcomes' },
    { label: 'Resources', hasDropdown: false, href: '/resources' },
    { label: 'Company', hasDropdown: false, href: '/about' },
    { label: 'Log In', hasDropdown: false, href: '/login' }
  ];

  const styles: Record<string, React.CSSProperties> = {
    nav: {
      position: 'sticky',
      top: 0,
      background: 'var(--bg-glass)',
      backdropFilter: 'blur(20px)',
      boxShadow: 'var(--shadow-sm)',
      zIndex: 'var(--z-modal)',
      padding: '12px 0',
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
      height: '28px',
      display: 'flex',
      alignItems: 'center',
      maxWidth: '160px',
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
      gap: 'var(--spacing-md)',
    },
    menuLink: {
      fontFamily: 'var(--font-body)',
      fontSize: 'var(--font-size-small)',
      fontWeight: 500,
      color: 'var(--text-primary)',
      textDecoration: 'none',
      padding: 'var(--spacing-xs) 0',
      transition: 'var(--transition-fast)',
    },
    hamburger: {
      display: 'none',
      background: 'none',
      border: 'none',
      cursor: 'pointer',
      padding: 'var(--spacing-xs)',
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

          .nav-logo {
            height: 24px !important;
          }

          .mobile-menu {
            padding: 70px var(--spacing-md) var(--spacing-md) !important;
          }

          .mobile-menu a {
            font-size: var(--font-size-body) !important;
          }
        }

        @media (max-width: 480px) {
          .nav-logo {
            height: 22px !important;
          }

          .mobile-menu {
            padding: 60px var(--spacing-sm) var(--spacing-sm) !important;
          }

          .mobile-menu a {
            font-size: var(--font-size-small) !important;
          }
        }

        @media (max-height: 600px) {
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
                nav.style.padding = '8px 0';
                nav.style.boxShadow = 'var(--shadow-md)';
                logo.style.height = '24px';
              } else {
                // Top of page - larger, less shadow
                nav.style.padding = '12px 0';
                nav.style.boxShadow = 'var(--shadow-sm)';
                logo.style.height = '28px';
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
                    {item.hasDropdown && <span style={{ fontSize: 'var(--font-size-xs)', marginLeft: 'var(--spacing-xxs)', opacity: 0.5 }}>▼</span>}
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
                          borderTop: '1px solid var(--border-light)',
                          boxShadow: 'var(--shadow-xl)',
                          padding: 'var(--spacing-xl) 0',
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
                                  fontSize: 'var(--font-size-label)',
                                  fontWeight: 500,
                                  color: 'var(--text-muted)',
                                  textTransform: 'uppercase',
                                  letterSpacing: 'var(--letter-spacing-wide)',
                                  marginBottom: 'var(--spacing-md)',
                                }}>
                                  {section.title}
                                </h3>
                                <div style={{ display: 'flex', flexDirection: 'column', gap: 'var(--spacing-xxs)' }}>
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
                                      <span style={{ fontSize: 'var(--font-size-h3)', flexShrink: 0 }}>
                                        {menuItem.icon}
                                      </span>
                                      <div style={{ flex: 1 }}>
                                        <div style={{
                                          fontSize: 'var(--font-size-body)',
                                          fontWeight: 600,
                                          color: 'var(--text-primary)',
                                          marginBottom: 'var(--spacing-xxs)',
                                        }}>
                                          {menuItem.label}
                                        </div>
                                        <div style={{
                                          fontSize: 'var(--font-size-small)',
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
                className="demo-request-btn btn-primary-coral btn-sm"
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
              <svg className="hamburger-icon" width="24" height="24" viewBox="0 0 24 24" fill="none">
                <path d="M3 12H21M3 6H21M3 18H21" stroke="var(--text-primary)" strokeWidth="2" strokeLinecap="round"/>
              </svg>
              <svg className="close-icon" width="24" height="24" viewBox="0 0 24 24" fill="none" style={{ display: 'none' }}>
                <path d="M18 6L6 18M6 6L18 18" stroke="var(--text-primary)" strokeWidth="2" strokeLinecap="round"/>
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
          padding: '70px var(--spacing-md) var(--spacing-md)',
          transform: 'translateX(100%)',
          transition: 'var(--transition-medium)',
          overflowY: 'auto',
          WebkitOverflowScrolling: 'touch',
        }} className="mobile-menu">
          <div style={{
            display: 'flex',
            flexDirection: 'column' as const,
            gap: 'var(--spacing-sm)',
          }}>
            {menuItems.map((item, index) => (
              <a
                key={index}
                href={item.href || '#'}
                style={{
                  fontSize: 'var(--font-size-body)',
                  fontWeight: 500,
                  color: 'var(--text-primary)',
                  textDecoration: 'none',
                  padding: 'var(--spacing-xs) 0',
                }}
              >
                {item.label}
              </a>
            ))}
            <button
              className="demo-request-btn btn-primary-coral btn-sm"
              style={{ width: '100%', marginTop: 'var(--spacing-sm)' }}
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
