import { ChevronDown, Download, Award } from 'react-feather';
import './Hero.css';

const Hero = ({ data }) => {
  const scrollToProjects = () => {
    const element = document.getElementById('projects');
    if (element) {
      const navbarHeight = document.querySelector('.navbar')?.offsetHeight || 64;
      const offsetTop = element.offsetTop - navbarHeight - 20;

      window.scrollTo({
        top: offsetTop,
        behavior: 'smooth'
      });
    }
  };

  const scrollToAbout = () => {
    const element = document.getElementById('about');
    if (element) {
      const navbarHeight = document.querySelector('.navbar')?.offsetHeight || 64;
      const offsetTop = element.offsetTop - navbarHeight - 20;

      window.scrollTo({
        top: offsetTop,
        behavior: 'smooth'
      });
    }
  };

  return (
    <section id="hero" className="hero">
      <div className="hero-background">
        <div className="hero-pattern"></div>
      </div>
      <div className="hero-container">
        <div className="hero-content">
          <div className="hero-badges">
            <div className="hero-badge">
              <Award size={16} />
              <span>5+ Years Experience</span>
            </div>
            <div className="hero-badge">
              <Award size={16} />
              <span>1000+ Test Cases Automated</span>
            </div>
          </div>

          <h1 className="hero-headline">
            {data.headline}
          </h1>

          <p className="hero-subtext">
            I design automated testing frameworks that reduce bug rates by 80% and accelerate release cycles for seamless digital experiences.
          </p>

          <div className="hero-actions">
            <button
              className="hero-cta primary"
              onClick={scrollToProjects}
            >
              {data.ctaButton}
              <ChevronDown size={16} />
            </button>

            <a
              href="#about"
              className="hero-cta secondary"
              onClick={(e) => { e.preventDefault(); scrollToAbout(); }}
            >
              <Download size={16} />
              Learn More About Me
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
