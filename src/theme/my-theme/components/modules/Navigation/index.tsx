import React from 'react';
import mcLogo from '../../../assets/MentorCollective-Primary-Logo.svg';

interface MenuItem {
  label: string;
  href: string;
  external?: boolean;
}

const menuItems: MenuItem[] = [
  { label: 'Mentorship OS', href: '/product-dev' },
  { label: 'Network', href: '/network-dev' },
  { label: 'Resources', href: '/resource-dev' },
  { label: 'Company', href: '/about-dev' },
  { label: 'Log In', href: 'https://app.mentorcollective.org/sign_in', external: true }
];

export function Component() {
  const logoSrc = mcLogo;
  const logoAlt = 'Mentor Collective';
  const ctaText = 'Request a Demo';
  const ctaHref = '/demo-dev';

  const styles: Record<string, React.CSSProperties> = {
    nav: {
      position: 'fixed',
      top: 0,
      left: 0,
      right: 0,
      background: 'var(--bg-glass)',
      backdropFilter: 'blur(20px)',
      boxShadow: 'var(--shadow-sm)',
      zIndex: 9999,
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
      fontSize: 'var(--font-size-base)',
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
        nav[role="navigation"] {
          position: fixed !important;
          top: 0 !important;
          left: 0 !important;
          right: 0 !important;
          z-index: 9999 !important;
        }

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
          function initNavigation() {
            let lastScrollY = window.scrollY;

            // Scroll effect for navigation
            function handleScroll() {
              const nav = document.querySelector('nav[role="navigation"]');
              const logo = document.querySelector('.nav-logo');
              const currentScrollY = window.scrollY;

              if (!nav || !logo) return;

              lastScrollY = currentScrollY;

              if (currentScrollY > 50) {
                nav.style.padding = '8px 0';
                nav.style.boxShadow = 'var(--shadow-md)';
                logo.style.height = '24px';
              } else {
                nav.style.padding = '12px 0';
                nav.style.boxShadow = 'var(--shadow-sm)';
                logo.style.height = '28px';
              }
            }

            let scrollTimeout;
            window.addEventListener('scroll', function() {
              if (scrollTimeout) {
                window.cancelAnimationFrame(scrollTimeout);
              }
              scrollTimeout = window.requestAnimationFrame(handleScroll);
            }, { passive: true });

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
          }

          if (document.readyState === 'loading') {
            document.addEventListener('DOMContentLoaded', initNavigation);
          } else {
            setTimeout(initNavigation, 100);
          }
        })();
      `}} />

      <nav style={styles.nav} role="navigation" aria-label="Main navigation">
        <div style={styles.container}>
          <div style={styles.flexContainer}>
            <div style={styles.logo} className="nav-logo">
              <a href="/" aria-label={logoAlt} style={{ display: 'flex', alignItems: 'center', height: '100%' }}>
                <img
                  src={logoSrc}
                  alt={logoAlt}
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
                    target={item.external ? '_blank' : undefined}
                    rel={item.external ? 'noopener noreferrer' : undefined}
                    onMouseEnter={(e) => {
                      e.currentTarget.style.color = 'var(--text-coral)';
                    }}
                    onMouseLeave={(e) => {
                      e.currentTarget.style.color = 'var(--text-primary)';
                    }}
                  >
                    {item.label}
                  </a>
                </div>
              ))}
              <a
                href={ctaHref}
                className="btn-primary-coral btn-sm"
                aria-label={ctaText}
              >
                {ctaText}
              </a>
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
                target={item.external ? '_blank' : undefined}
                rel={item.external ? 'noopener noreferrer' : undefined}
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
            <a
              href={ctaHref}
              className="btn-primary-coral btn-sm"
              style={{ width: '100%', marginTop: 'var(--spacing-sm)', display: 'block', textAlign: 'center' }}
            >
              {ctaText}
            </a>
          </div>
        </div>
      </nav>
    </>
  );
}

// Empty fields - navigation is global with hardcoded values
export const fields: any = [];

export const meta = {
  label: 'Navigation (Global)',
};
