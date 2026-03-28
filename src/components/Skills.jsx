import { CheckCircle, Code, Settings, Tool } from 'react-feather';
import './Skills.css';

import { useState } from 'react';

const Skills = ({ data }) => {
  const [selectedCategory, setSelectedCategory] = useState('All');

  const skillCategories = [
    {
      title: 'Testing Types',
      icon: CheckCircle,
      skills: data.testingTypes,
      color: 'var(--color-accent)',
      category: 'Testing'
    },
    {
      title: 'Automation Tools',
      icon: Settings,
      skills: data.automationTools,
      color: 'var(--color-accent)',
      category: 'Automation'
    },
    {
      title: 'Programming',
      icon: Code,
      skills: data.programmingLanguages,
      color: 'var(--color-accent)',
      category: 'Programming'
    },
    {
      title: 'Other Tools',
      icon: Tool,
      skills: data.otherTools,
      color: 'var(--color-accent)',
      category: 'Tools'
    }
  ];

  const availableFilters = ['All', 'Testing', 'Automation', 'Programming', 'Tools'];
  const filteredCategories = selectedCategory === 'All'
    ? skillCategories
    : skillCategories.filter((category) => category.category === selectedCategory);

  return (
    <section id="skills" className="skills" aria-label="Skills section">
      <div className="skills-container">
        <div className="skills-content">
          <h2 className="section-title">What I Know</h2>
          <div className="skills-filters" role="tablist" aria-label="Skill categories">
            {availableFilters.map((filter) => (
              <button
                key={filter}
                className={`filter-pill ${selectedCategory === filter ? 'active' : ''}`}
                onClick={() => setSelectedCategory(filter)}
                role="tab"
                aria-selected={selectedCategory === filter}
              >
                {filter}
              </button>
            ))}
          </div>
          <div className="skills-grid">
            {filteredCategories.map((category, index) => {
              const IconComponent = category.icon;
              return (
                <div key={index} className="skill-category">
                  <div className="category-header">
                    <IconComponent size={20} style={{ color: category.color }} />
                    <h3 className="category-title">{category.title}</h3>
                  </div>
                  <div className="skill-tags">
                    {category.skills.map((skill, skillIndex) => (
                      <span key={skillIndex} className="skill-tag">
                        {skill}
                      </span>
                    ))}
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Skills;
