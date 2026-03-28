import { ExternalLink, GitHub } from 'react-feather';
import './Projects.css';

import { useState } from 'react';

const Projects = ({ data }) => {
  const [selectedFilter, setSelectedFilter] = useState('All');

  const allCategories = ['All', ...new Set(data.map((project) => project.category || 'Other'))];
  const shownProjects = selectedFilter === 'All' ? data : data.filter((project) => project.category === selectedFilter);

  return (
    <section id="projects" className="projects" aria-label="Projects section">
      <div className="projects-container">
        <div className="projects-content">
          <h2 className="section-title">What I've Built</h2>
          <div className="projects-filters" role="tablist" aria-label="Project categories">
            {allCategories.map((category) => (
              <button
                key={category}
                className={`project-pill ${selectedFilter === category ? 'active' : ''}`}
                onClick={() => setSelectedFilter(category)}
                role="tab"
                aria-selected={selectedFilter === category}
              >
                {category}
              </button>
            ))}
          </div>

          <div className="projects-grid">
            {shownProjects.map((project, index) => (
              <div key={index} className="project-card" tabIndex={0}>
                <div className="project-header">
                  <h3 className="project-title">{project.title}</h3>
                  <a
                    href={project.githubUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="project-link"
                    aria-label={`View ${project.title} on GitHub`}
                  >
                    <GitHub size={16} />
                  </a>
                </div>
                <p className="project-description">{project.description}</p>
                <p className="project-role">{project.role}</p>
                <p className="project-impact">{project.impact}</p>
                <div className="project-tech">
                  {project.technologies.map((tech, techIndex) => (
                    <span key={techIndex} className="tech-tag">
                      {tech}
                    </span>
                  ))}
                </div>
                <div className="project-actions">
                  <a
                    href={project.githubUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="project-action"
                  >
                    <ExternalLink size={14} />
                    View on GitHub
                  </a>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Projects;
