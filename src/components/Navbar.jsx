import { useState, useEffect } from 'react';
import { Menu, X } from 'react-feather';
import './Navbar.css';

const Navbar = () => {
  const [activeSection, setActiveSection] = useState('hero');
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const sections = ['hero', 'about', 'skills', 'projects'];
      const navbarHeight = document.querySelector('.navbar')?.offsetHeight || 64;
      const scrollPosition = window.scrollY + navbarHeight + 20;

      for (const section of sections) {
        const element = document.getElementById(section);
        if (element) {
          const { offsetTop, offsetHeight } = element;
          if (scrollPosition >= offsetTop && scrollPosition < offsetTop + offsetHeight) {
            setActiveSection(section);
            break;
          }
        }
      }
    };

    // Throttle scroll events for performance
    let ticking = false;
    const throttledHandleScroll = () => {
      if (!ticking) {
        requestAnimationFrame(() => {
          handleScroll();
          ticking = false;
        });
        ticking = true;
      }
    };

    window.addEventListener('scroll', throttledHandleScroll, { passive: true });
    handleScroll(); // Check initial position

    return () => window.removeEventListener('scroll', throttledHandleScroll);
  }, []);

  const scrollToSection = (sectionId) => {
    const element = document.getElementById(sectionId);
    if (element) {
      const navbarHeight = document.querySelector('.navbar')?.offsetHeight || 64;
      const offsetTop = element.offsetTop - navbarHeight - 20;

      window.scrollTo({
        top: offsetTop,
        behavior: 'smooth'
      });
    }
    setIsMobileMenuOpen(false); // Close mobile menu after navigation
  };

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  return (
    <>
      {/* Skip Link for Accessibility */}
      <a
        href="#main-content"
        className="skip-link"
        onFocus={(e) => e.target.style.display = 'block'}
        onBlur={(e) => e.target.style.display = 'none'}
      >
        Skip to main content
      </a>

      <nav className="navbar">
        <div className="navbar-container">
          <div className="navbar-brand">
            <span>Swarup QA</span>
          </div>

          {/* Desktop Menu */}
          <ul className="navbar-menu desktop-menu">
            <li>
              <a
                href="#hero"
                className={`navbar-link ${activeSection === 'hero' ? 'active' : ''}`}
                onClick={(e) => { e.preventDefault(); scrollToSection('hero'); }}
                aria-current={activeSection === 'hero' ? 'page' : undefined}
              >
                Overview
              </a>
            </li>
            <li>
              <a
                href="#about"
                className={`navbar-link ${activeSection === 'about' ? 'active' : ''}`}
                onClick={(e) => { e.preventDefault(); scrollToSection('about'); }}
                aria-current={activeSection === 'about' ? 'page' : undefined}
              >
                Who I Am
              </a>
            </li>
            <li>
              <a
                href="#skills"
                className={`navbar-link ${activeSection === 'skills' ? 'active' : ''}`}
                onClick={(e) => { e.preventDefault(); scrollToSection('skills'); }}
                aria-current={activeSection === 'skills' ? 'page' : undefined}
              >
                What I Know
              </a>
            </li>
            <li>
              <a
                href="#projects"
                className={`navbar-link ${activeSection === 'projects' ? 'active' : ''}`}
                onClick={(e) => { e.preventDefault(); scrollToSection('projects'); }}
                aria-current={activeSection === 'projects' ? 'page' : undefined}
              >
                What I've Built
              </a>
            </li>
          </ul>

          {/* Mobile Menu Button */}
          <button
            className="mobile-menu-toggle"
            onClick={toggleMobileMenu}
            aria-label="Toggle navigation menu"
            aria-expanded={isMobileMenuOpen}
          >
            {isMobileMenuOpen ? <X size={20} /> : <Menu size={20} />}
          </button>
        </div>

        {/* Mobile Menu */}
        <div className={`mobile-menu ${isMobileMenuOpen ? 'open' : ''}`}>
          <ul className="navbar-menu mobile-menu-list">
            <li>
              <a
                href="#hero"
                className={`navbar-link ${activeSection === 'hero' ? 'active' : ''}`}
                onClick={(e) => { e.preventDefault(); scrollToSection('hero'); }}
                aria-current={activeSection === 'hero' ? 'page' : undefined}
              >
                Overview
              </a>
            </li>
            <li>
              <a
                href="#about"
                className={`navbar-link ${activeSection === 'about' ? 'active' : ''}`}
                onClick={(e) => { e.preventDefault(); scrollToSection('about'); }}
                aria-current={activeSection === 'about' ? 'page' : undefined}
              >
                Who I Am
              </a>
            </li>
            <li>
              <a
                href="#skills"
                className={`navbar-link ${activeSection === 'skills' ? 'active' : ''}`}
                onClick={(e) => { e.preventDefault(); scrollToSection('skills'); }}
                aria-current={activeSection === 'skills' ? 'page' : undefined}
              >
                What I Know
              </a>
            </li>
            <li>
              <a
                href="#projects"
                className={`navbar-link ${activeSection === 'projects' ? 'active' : ''}`}
                onClick={(e) => { e.preventDefault(); scrollToSection('projects'); }}
                aria-current={activeSection === 'projects' ? 'page' : undefined}
              >
                What I've Built
              </a>
            </li>
          </ul>
        </div>
      </nav>
    </>
  );
};

export default Navbar;
