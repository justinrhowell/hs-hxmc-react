import React from 'react';
import {
  ModuleFields,
  TextField,
  BooleanField,
  ImageField,
} from '@hubspot/cms-components/fields';
import mcLogo from '../../../assets/MentorCollective-Primary-Logo.svg';
import { DemoModal } from '../../shared/DemoModal';

interface MenuItem {
  label: string;
  href: string;
  external?: boolean;
}

const defaultMenuItems: MenuItem[] = [
  { label: 'Mentorship OS', href: '/product' },
  { label: 'Network', href: '/network' },
  { label: 'Resources', href: '/resources' },
  { label: 'Company', href: '/about' },
  { label: 'Log In', href: 'https://app.mentorcollective.org/sign_in', external: true }
];

export function Component({ fieldValues }: any) {
  // Build menu items from field values or use defaults
  const menuItems: MenuItem[] = (fieldValues.menu_items && fieldValues.menu_items.length > 0)
    ? fieldValues.menu_items.map((item: any) => ({
        label: item.menu_label || 'Menu Item',
        href: item.href || '#',
        external: item.external === 'true' || item.external === true,
      }))
    : defaultMenuItems;

  const logoSrc = fieldValues.logo?.src || mcLogo;
  const logoAlt = fieldValues.logo?.alt || 'Mentor Collective';
  const ctaText = fieldValues.cta_text || 'Request a Demo';
  const showCta = fieldValues.show_cta !== false;

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
              {showCta && (
                <button
                  className="demo-request-btn btn-primary-coral btn-sm"
                  type="button"
                  aria-label={ctaText}
                >
                  {ctaText}
                </button>
              )}
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
            {showCta && (
              <button
                className="demo-request-btn btn-primary-coral btn-sm"
                style={{ width: '100%', marginTop: 'var(--spacing-sm)' }}
                type="button"
              >
                {ctaText}
              </button>
            )}
          </div>
        </div>
      </nav>

      <DemoModal />
    </>
  );
}

export const fields: any = [
  {
    type: 'image',
    name: 'logo',
    label: 'Logo Image',
    default: {
      src: '',
      alt: 'Mentor Collective',
    },
  },
  {
    type: 'group',
    name: 'menu_items',
    label: 'Menu Items',
    occurrence: {
      min: 1,
      max: 10,
      default: 5,
    },
    default: [
      { label: 'Mentorship OS', href: '/product', external: 'false' },
      { label: 'Network', href: '/network', external: 'false' },
      { label: 'Resources', href: '/resources', external: 'false' },
      { label: 'Company', href: '/about', external: 'false' },
      { label: 'Log In', href: 'https://app.mentorcollective.org/sign_in', external: 'true' },
    ],
    children: [
      {
        type: 'text',
        name: 'menu_label',
        label: 'Menu Label',
        default: 'Menu Item',
      },
      {
        type: 'text',
        name: 'href',
        label: 'Link URL',
        default: '#',
      },
      {
        type: 'choice',
        name: 'external',
        label: 'Open in New Tab?',
        choices: [
          ['false', 'No'],
          ['true', 'Yes'],
        ],
        default: 'false',
      },
    ],
  },
  {
    type: 'boolean',
    name: 'show_cta',
    label: 'Show CTA Button',
    default: true,
  },
  {
    type: 'text',
    name: 'cta_text',
    label: 'CTA Button Text',
    default: 'Request a Demo',
  },
];

export const meta = {
  label: 'Navigation',
};
