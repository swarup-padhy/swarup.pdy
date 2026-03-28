import { Target, Zap, Users, BookOpen } from 'react-feather';
import './About.css';

const About = ({ data }) => {
  const getStrengthIcon = (strength) => {
    const iconMap = {
      'Analytical thinking and problem-solving': Target,
      'Test automation and framework development': Zap,
      'API testing and validation': Users,
      'Performance testing and optimization': BookOpen,
      'Cross-functional collaboration': Users,
      'Continuous learning and adaptation': BookOpen
    };
    return iconMap[strength] || Target;
  };

  return (
    <section id="about" className="about" aria-label="About section">
      <div className="about-container">
        <div className="about-grid">
          <article className="about-copy">
            <h2 className="section-title">Who I Am</h2>
            <p className="about-philosophy">{data.philosophy}</p>
            <p className="about-intro">{data.introduction}</p>
            <div className="about-details" role="list">
              <div className="about-experience" role="listitem">
                <span className="experience-label">Experience:</span>
                <span className="experience-value">{data.experience}</span>
              </div>
              <div className="about-focus" role="listitem">
                <span className="focus-label">Current Focus:</span>
                <span className="focus-value">{data.focus}</span>
              </div>
            </div>
          </article>
          <aside className="about-metrics" aria-label="Performance metrics">
            {data.metrics && data.metrics.map((metric, index) => (
              <div key={index} className="metric-item">
                <span className="metric-value">{metric.value}</span>
                <span className="metric-label">{metric.label}</span>
              </div>
            ))}
          </aside>
        </div>

        <div className="strengths-section">
          <h3 className="strengths-title">Core strengths</h3>
          <div className="strengths-grid">
            {data.keyStrengths.map((strength, index) => {
              const IconComponent = getStrengthIcon(strength);
              return (
                <div key={index} className="strength-item" tabIndex={0}>
                  <IconComponent size={16} />
                  <span>{strength}</span>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
