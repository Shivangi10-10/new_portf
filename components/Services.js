import React, { useState, useEffect } from 'react';
import styles from './Services.module.css';

const Services = () => {
  const [activeCategory, setActiveCategory] = useState(null);
  const [selectedCategories, setSelectedCategories] = useState(new Set());

  const skillsData = {
    'Frontend Development': {
      skills: ['JavaScript', 'React.js', 'TypeScript', 'CSS3', 'HTML5'],
      logos: {
        'JavaScript': 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg',
        'React.js': 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg',
        'TypeScript': 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/typescript/typescript-original.svg',
        'CSS3': 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/css3/css3-original.svg',
        'HTML5': 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/html5/html5-original.svg'
      },
      color: '#4A90E2',
      position: { x: 15, y: 15 }
    },
    'Backend Development': {
      skills: ['Node.js', 'Express.js'],
      logos: {
        'Node.js': 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nodejs/nodejs-original.svg',
        'Express.js': 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/express/express-original.svg'
      },
      color: '#50C878',
      position: { x: 85, y: 15 }
    },
    'Programming Languages': {
      skills: ['Python', 'Java', 'C++', 'Go'],
      logos: {
        'Python': 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/python/python-original.svg',
        'Java': 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/java/java-original.svg',
        'C++': 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/cplusplus/cplusplus-original.svg',
        'Go': 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/go/go-original.svg'
      },
      color: '#9B59B6',
      position: { x: 50, y: 30 }
    },
    'Database & Storage': {
      skills: ['MongoDB', 'MySQL'],
      logos: {
        'MongoDB': 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mongodb/mongodb-original.svg',
        'MySQL': 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mysql/mysql-original.svg'
      },
      color: '#FF6B6B',
      position: { x: 15, y: 45 }
    },
    'Machine Learning & AI': {
      skills: ['ML', 'Federated Learning'],
      logos: {
        'ML': 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/tensorflow/tensorflow-original.svg',
        'Federated Learning': 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/pytorch/pytorch-original.svg'
      },
      color: '#E74C3C',
      position: { x: 85, y: 45 }
    },
    'Analytics & BI': {
      skills: ['Power BI', 'Tableau'],
      logos: {
        'Power BI': 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/microsoftsqlserver/microsoftsqlserver-plain.svg',
        'Tableau': 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/tableau/tableau-original.svg'
      },
      color: '#F39C12',
      position: { x: 50, y: 60 }
    },
    'Version Control': {
      skills: ['Git', 'GitHub'],
      logos: {
        'Git': 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/git/git-original.svg',
        'GitHub': 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/github/github-original.svg'
      },
      color: '#34495E',
      position: { x: 15, y: 75 }
    },
    'Cloud & Deployment': {
      skills: ['AWS', 'Vercel', 'Netlify'],
      logos: {
        'AWS': 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/amazonwebservices/amazonwebservices-plain-wordmark.svg',
        'Vercel': 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/vercel/vercel-original.svg',
        'Netlify': 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/netlify/netlify-original.svg'
      },
      color: '#E67E22',
      position: { x: 85, y: 75 }
    },
    'DevOps & Tools': {
      skills: ['Docker', 'Jenkins', 'Jira'],
      logos: {
        'Docker': 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/docker/docker-original.svg',
        'Jenkins': 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/jenkins/jenkins-original.svg',
        'Jira': 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/jira/jira-original.svg'
      },
      color: '#1ABC9C',
      position: { x: 35, y: 90 }
    },
    'Methodology': {
      skills: ['Agile'],
      logos: {
        'Agile': 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/confluence/confluence-original.svg'
      },
      color: '#8E44AD',
      position: { x: 65, y: 90 }
    }
  };

  const connections = [
    { from: 'Frontend Development', to: 'Programming Languages' },
    { from: 'Backend Development', to: 'Programming Languages' },
    { from: 'Programming Languages', to: 'Database & Storage' },
    { from: 'Programming Languages', to: 'Machine Learning & AI' },
    { from: 'Machine Learning & AI', to: 'Analytics & BI' },
    { from: 'Database & Storage', to: 'Version Control' },
    { from: 'Analytics & BI', to: 'Cloud & Deployment' },
    { from: 'Version Control', to: 'DevOps & Tools' },
    { from: 'Cloud & Deployment', to: 'DevOps & Tools' },
    { from: 'DevOps & Tools', to: 'Methodology' }
  ];

  const handleCategoryClick = (category) => {
    const newSelected = new Set(selectedCategories);
    if (newSelected.has(category)) {
      newSelected.delete(category);
    } else {
      newSelected.add(category);
    }
    setSelectedCategories(newSelected);
  };

  const isCategoryVisible = (category) => {
    if (selectedCategories.size === 0) {
      return true;
    }
    return selectedCategories.has(category);
  };

  return (
    <section className={styles.servicesSection} id="skills">
      <style jsx>{`
        .skills-section {
          min-height: 100vh;
          background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
          padding: 2rem 1rem;
          position: relative;
          overflow: hidden;
          scroll-margin-top: 80px;
          display: flex;
          flex-direction: column;
        }

        .skills-section::before {
          content: '';
          position: absolute;
          top: 0;
          left: 0;
          right: 0;
          bottom: 0;
          background: url("data:image/svg+xml,%3Csvg width='40' height='40' viewBox='0 0 40 40' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='%23ffffff' fill-opacity='0.03'%3E%3Cpath d='m0 40l40-40h-40v40zm40 0v-40h-40l40 40z'/%3E%3C/g%3E%3C/svg%3E") repeat;
          z-index: 1;
        }

        .container {
          max-width: 1400px;
          margin: 0 auto;
          position: relative;
          z-index: 2;
          width: 100%;
          flex: 1;
          display: flex;
          flex-direction: column;
        }

        .section-header {
          text-align: center;
          margin-bottom: 2rem;
          padding-top: 1rem;
        }

        .title {
          font-size: 3.5rem;
          font-weight: 800;
          color: white;
          margin-bottom: 1rem;
          text-shadow: 0 4px 20px rgba(0, 0, 0, 0.3);
          line-height: 1.1;
        }

        .subtitle {
          font-size: 1.2rem;
          color: rgba(255, 255, 255, 0.8);
          margin-bottom: 1.5rem;
          max-width: 600px;
          margin-left: auto;
          margin-right: auto;
          line-height: 1.6;
        }

        .title-underline {
          width: 100px;
          height: 4px;
          background: rgba(255, 255, 255, 0.3);
          margin: 0 auto;
          border-radius: 2px;
        }

        .interaction-hint {
          color: rgba(255, 255, 255, 0.7);
          font-size: 0.9rem;
          font-style: italic;
          margin-top: 1rem;
        }

        .flowchart-container {
          position: relative;
          width: 100%;
          height: 70vh;
          min-height: 500px;
          flex: 1;
        }

        .connections-svg {
          position: absolute;
          top: 0;
          left: 0;
          width: 100%;
          height: 100%;
          z-index: 1;
        }

        .connection-line {
          stroke: rgba(255, 255, 255, 0.2);
          stroke-width: 2;
          transition: all 0.3s ease;
        }

        .connection-line.highlighted {
          stroke: rgba(255, 255, 255, 0.6);
          stroke-width: 3;
        }

        .category-node {
          position: absolute;
          transform: translate(-50%, -50%);
          animation: fadeInUp 0.6s ease forwards;
          opacity: 0;
          z-index: 10;
          cursor: pointer;
        }

        .category-node.hidden {
          opacity: 0.2;
          pointer-events: none;
        }

        .category-box {
          background: rgba(255, 255, 255, 0.95);
          backdrop-filter: blur(20px);
          border-radius: 20px;
          padding: 1.2rem;
          border: 2px solid transparent;
          box-shadow: 0 10px 30px rgba(0, 0, 0, 0.1);
          transition: all 0.3s ease;
          min-width: 180px;
          max-width: 250px;
          position: relative;
          overflow: hidden;
        }

        .category-box::before {
          content: '';
          position: absolute;
          top: 0;
          left: 0;
          right: 0;
          bottom: 0;
          background: linear-gradient(135deg, rgba(255, 255, 255, 0.1), rgba(255, 255, 255, 0.05));
          z-index: -1;
        }

        .category-node:hover .category-box {
          transform: translateY(-5px);
          box-shadow: 0 20px 50px rgba(0, 0, 0, 0.15);
        }

        .category-node.selected .category-box {
          background: rgba(255, 255, 255, 1);
          transform: translateY(-5px) scale(1.05);
        }

        .category-header {
          display: flex;
          justify-content: space-between;
          align-items: center;
          margin-bottom: 1rem;
          padding-bottom: 0.75rem;
          border-bottom: 1px solid;
        }

        .category-title {
          font-weight: 700;
          font-size: 0.85rem;
          text-transform: uppercase;
          letter-spacing: 0.5px;
          line-height: 1.2;
        }

        .skill-count {
          color: white;
          font-weight: 700;
          font-size: 0.75rem;
          padding: 0.25rem 0.5rem;
          border-radius: 10px;
          min-width: 20px;
          text-align: center;
          flex-shrink: 0;
        }

        .skills-grid {
          display: grid;
          grid-template-columns: repeat(auto-fit, minmax(70px, 1fr));
          gap: 0.75rem;
        }

        .skill-item {
          display: flex;
          flex-direction: column;
          align-items: center;
          text-align: center;
          animation: fadeInUp 0.4s ease forwards;
          opacity: 0;
        }

        .skill-logo {
          width: 28px;
          height: 28px;
          margin-bottom: 0.5rem;
          transition: transform 0.2s ease;
        }

        .skill-item:hover .skill-logo {
          transform: scale(1.1);
        }

        .skill-name {
          font-size: 0.7rem;
          font-weight: 600;
          color: #2c3e50;
          line-height: 1.2;
        }

        .category-glow {
          position: absolute;
          top: 0;
          left: 0;
          right: 0;
          bottom: 0;
          border-radius: 20px;
          opacity: 0;
          transition: opacity 0.3s ease;
          pointer-events: none;
          z-index: -1;
        }

        .category-node:hover .category-glow,
        .category-node.selected .category-glow {
          opacity: 0.3;
        }

        @keyframes fadeInUp {
          from {
            opacity: 0;
            transform: translateY(30px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }

        /* Tablet Styles */
        @media (max-width: 1024px) {
          .skills-section {
            padding: 2rem 1rem;
          }
          
          .title {
            font-size: 3rem;
          }
          
          .flowchart-container {
            height: 75vh;
            min-height: 600px;
          }
          
          .category-box {
            min-width: 160px;
            max-width: 200px;
            padding: 1rem;
          }
          
          .category-title {
            font-size: 0.8rem;
          }
        }

        /* Mobile Landscape */
        @media (max-width: 768px) {
          .skills-section {
            padding: 1.5rem 0.75rem;
            min-height: 100vh;
          }
          
          .title {
            font-size: 2.5rem;
          }
          
          .subtitle {
            font-size: 1rem;
            padding: 0 1rem;
          }
          
          .flowchart-container {
            height: 80vh;
            min-height: 500px;
          }
          
          .category-box {
            min-width: 140px;
            max-width: 180px;
            padding: 0.9rem;
          }
          
          .category-title {
            font-size: 0.75rem;
          }
          
          .skill-logo {
            width: 24px;
            height: 24px;
          }
          
          .skill-name {
            font-size: 0.65rem;
          }
          
          .skills-grid {
            gap: 0.5rem;
            grid-template-columns: repeat(auto-fit, minmax(60px, 1fr));
          }
        }

        /* Mobile Portrait */
        @media (max-width: 480px) {
          .skills-section {
            padding: 1rem 0.5rem;
          }
          
          .title {
            font-size: 2rem;
          }
          
          .subtitle {
            font-size: 0.9rem;
            padding: 0 0.5rem;
          }
          
          .section-header {
            margin-bottom: 1.5rem;
          }
          
          .flowchart-container {
            height: 85vh;
            min-height: 450px;
          }
          
          .category-box {
            min-width: 120px;
            max-width: 160px;
            padding: 0.75rem;
          }
          
          .category-title {
            font-size: 0.7rem;
            line-height: 1.1;
          }
          
          .skill-count {
            font-size: 0.7rem;
            padding: 0.2rem 0.4rem;
          }
          
          .skill-logo {
            width: 20px;
            height: 20px;
            margin-bottom: 0.3rem;
          }
          
          .skill-name {
            font-size: 0.6rem;
          }
          
          .skills-grid {
            gap: 0.4rem;
            grid-template-columns: repeat(auto-fit, minmax(50px, 1fr));
          }
          
          .category-header {
            margin-bottom: 0.75rem;
            padding-bottom: 0.5rem;
          }
        }

        /* Small Mobile */
        @media (max-width: 360px) {
          .title {
            font-size: 1.8rem;
          }
          
          .subtitle {
            font-size: 0.85rem;
          }
          
          .category-box {
            min-width: 110px;
            max-width: 140px;
            padding: 0.6rem;
          }
          
          .category-title {
            font-size: 0.65rem;
          }
          
          .skill-logo {
            width: 18px;
            height: 18px;
          }
          
          .skill-name {
            font-size: 0.55rem;
          }
          
          .skills-grid {
            grid-template-columns: repeat(auto-fit, minmax(45px, 1fr));
          }
        }

        /* Large Desktop */
        @media (min-width: 1440px) {
          .skills-section {
            padding: 4rem 2rem;
          }
          
          .title {
            font-size: 4rem;
          }
          
          .subtitle {
            font-size: 1.3rem;
          }
          
          .flowchart-container {
            height: 75vh;
            min-height: 700px;
          }
          
          .category-box {
            min-width: 220px;
            max-width: 280px;
            padding: 1.5rem;
          }
          
          .category-title {
            font-size: 0.95rem;
          }
          
          .skill-logo {
            width: 32px;
            height: 32px;
          }
          
          .skill-name {
            font-size: 0.75rem;
          }
        }
      `}</style>

      <div className={styles.container}>
        <div className={styles.sectionHeader}>
          <h2 className={styles.title}>Skills</h2>
          <p className={styles.subtitle}>
            My comprehensive development stack organized by expertise areas
          </p>
          <div className={styles.titleUnderline}></div>
          
        </div>

        <div className={styles.flowchartContainer}>
          <svg className={styles.connectionsSvg}>
            {connections.map((connection, index) => {
              const fromCategory = skillsData[connection.from];
              const toCategory = skillsData[connection.to];
              if (!fromCategory || !toCategory) return null;
              
              const isConnectionVisible = isCategoryVisible(connection.from) && isCategoryVisible(connection.to);
              
              return (
                <line
                  key={index}
                  x1={`${fromCategory.position.x}%`}
                  y1={`${fromCategory.position.y}%`}
                  x2={`${toCategory.position.x}%`}
                  y2={`${toCategory.position.y}%`}
                  className={`${styles.connectionLine} ${
                    selectedCategories.has(connection.from) || selectedCategories.has(connection.to) 
                      ? styles.highlighted : ''
                  }`}
                  strokeDasharray="5,5"
                  style={{
                    opacity: isConnectionVisible ? (selectedCategories.has(connection.from) || selectedCategories.has(connection.to) ? 0.8 : 0.4) : 0
                  }}
                />
              );
            })}
          </svg>

          {Object.entries(skillsData).map(([category, data], index) => (
            <div
              key={category}
              className={`${styles.categoryNode} ${
                activeCategory === category ? styles.hovered : ''
              } ${
                selectedCategories.has(category) ? styles.selected : ''
              } ${
                !isCategoryVisible(category) ? styles.hidden : ''
              }`}
              style={{
                left: `${data.position.x}%`,
                top: `${data.position.y}%`,
                animationDelay: `${index * 0.15}s`,
                opacity: isCategoryVisible(category) ? 1 : 0.2,
                transform: isCategoryVisible(category) 
                  ? 'translate(-50%, -50%) scale(1)' 
                  : 'translate(-50%, -50%) scale(0.8)',
                transition: 'all 0.3s ease',
                pointerEvents: isCategoryVisible(category) ? 'auto' : 'none'
              }}
              onMouseEnter={() => setActiveCategory(category)}
              onMouseLeave={() => setActiveCategory(null)}
              onClick={() => handleCategoryClick(category)}
            >
              <div 
                className={styles.categoryBox}
                style={{ 
                  borderColor: data.color,
                  boxShadow: selectedCategories.has(category) 
                    ? `0 0 25px ${data.color}40, 0 0 50px ${data.color}20`
                    : `0 10px 30px rgba(0, 0, 0, 0.1)`
                }}
              >
                <div 
                  className={styles.categoryHeader}
                  style={{ 
                    color: data.color,
                    borderBottomColor: `${data.color}30`
                  }}
                >
                  <span className={styles.categoryTitle}>{category}</span>
                  <div 
                    className={styles.skillCount}
                    style={{ backgroundColor: data.color }}
                  >
                    {data.skills.length}
                  </div>
                </div>
                
                <div className={styles.skillsGrid}>
                  {data.skills.map((skill, skillIndex) => (
                    <div 
                      key={skill} 
                      className={styles.skillItem}
                      style={{ animationDelay: `${(index * 0.15) + (skillIndex * 0.05)}s` }}
                    >
                      <img
                        src={data.logos[skill]}
                        alt={`${skill} logo`}
                        className={styles.skillLogo}
                        onError={(e) => {
                          e.target.style.display = 'none';
                        }}
                      />
                      <span className={styles.skillName}>{skill}</span>
                    </div>
                  ))}
                </div>
              </div>

              <div 
                className={styles.categoryGlow}
                style={{ 
                  boxShadow: `0 0 30px ${data.color}25, 0 0 60px ${data.color}10` 
                }}
              ></div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;