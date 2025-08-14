import React, { useState } from 'react';
import styles from './Portfolio.module.css';

const Portfolio = () => {
  const [currentProject, setCurrentProject] = useState(0);
  const [isHovered, setIsHovered] = useState(false);

  const projects = [
    {
      id: 1,
      title: "HOMELESS HEARTS",
      subtitle: "COMMUNITY PORTAL +\nANIMAL WELFARE",
      mainImage: "/assets/hh.png",
      githubLink: "https://github.com/Shivangi10-10/Homeless-Hearts-final",
      duration: "Jan 2024 - Jun 2024",
      description: "Developed a MERN‑stack portal (React.js, Node.js, Express.js, MongoDB) to support community‑based stray animal feeding and welfare initiatives. Elevated volunteer engagement by 75% through personalized user dashboards and real‑time updates. Increased response to animal welfare reports by 60% with a user‑friendly report section for swift issue logging.",
      tags: ["MONGODB", "EXPRESS.JS", "REACT.JS", "NODE.JS", "CHART.JS"]
    },
    {
      id: 2,
      title: "WORKWISE",
      subtitle: "GRAPH-BASED +\nREFERRAL BOT",
      mainImage:"/assets/d.jpg",
      githubLink: "https://github.com/Shivangi10-10/majorf",
      duration: "Jan 2025 - May 2025",
      description: "Designed a smart Discord bot to simplify and modernize the job referral process through automated networking. Implemented a Graph‑based HITS algorithm, ranking referrers by authority, relevance, and network strength → achieved 98% match accuracy. Reduced cold outreach by 70%, boosting referral success to 78%.",
      tags: ["GO (PROGRAMMING LANGUAGE)", "MONGODB", "DISCORD API", "GRAPH ALGORITHMS", "HITS ALGORITHM"]
    },
    {
      id: 3,
      title: "CONFERENCE ROOM",
      subtitle: "BOOKING SYSTEM +\nIOCL PROJECT",
      mainImage: "/assets/iocl.png",
      githubLink: "https://github.com/Shivangi10-10/final_project",
      duration: "Jun 2024 - Jul 2024",
      description: "Developed a cutting‑edge MERN‑stack Conference Room Booking System, transforming workspace management with real-time availability and automated notifications. Reduced booking conflicts by 90% through implementation of live availability checks. Improved resource utilisation by 40% with automated maintenance scheduling and tracking.",
      tags: ["MONGODB", "EXPRESS.JS", "REACT.JS", "NODE.JS", "CHART.JS", "EMAIL.JS"]
    }
  ];

  const nextProject = () => {
    setCurrentProject((prev) => (prev + 1) % projects.length);
  };

  const prevProject = () => {
    setCurrentProject((prev) => (prev - 1 + projects.length) % projects.length);
  };

  const currentProjectData = projects[currentProject];

  return (
    <div className={styles.portfolio}>
      <style jsx>{`
        .portfolio {
          min-height: 100vh;
          background: linear-gradient(135deg, #f5f7fa 0%, #c3cfe2 100%);
          padding: 2rem;
          font-family: 'Arial', sans-serif;
        }

        .container {
          max-width: 1200px;
          margin: 0 auto;
          position: relative;
        }

        .projectsHeading {
          text-align: center;
          margin-bottom: 3rem;
        }

        .headingText {
          font-size: 3.5rem;
          font-weight: bold;
          background: linear-gradient(45deg, #667eea 0%, #764ba2 100%);
          -webkit-background-clip: text;
          -webkit-text-fill-color: transparent;
          background-clip: text;
          text-shadow: 0 5px 15px rgba(102, 126, 234, 0.2);
          margin: 0;
          letter-spacing: 2px;
        }

        .navigation {
          display: flex;
          justify-content: center;
          align-items: center;
          gap: 2rem;
          margin-bottom: 3rem;
          background: white;
          padding: 1rem 2rem;
          border-radius: 50px;
          box-shadow: 0 10px 30px rgba(0,0,0,0.1);
          width: fit-content;
          margin-left: auto;
          margin-right: auto;
        }

        .navButton {
          background: linear-gradient(45deg, #667eea 0%, #764ba2 100%);
          color: white;
          border: none;
          width: 50px;
          height: 50px;
          border-radius: 50%;
          font-size: 1.5rem;
          cursor: pointer;
          transition: all 0.3s ease;
          box-shadow: 0 5px 15px rgba(102, 126, 234, 0.3);
        }

        .navButton:hover {
          transform: translateY(-2px);
          box-shadow: 0 8px 25px rgba(102, 126, 234, 0.4);
        }

        .projectCounter {
          font-weight: bold;
          color: #333;
          font-size: 1.1rem;
          min-width: 60px;
          text-align: center;
        }

        .collageArea {
          position: relative;
          background: #f8f9fa;
          border-radius: 20px;
          padding: 3rem;
          min-height: 600px;
          box-shadow: 0 20px 60px rgba(0,0,0,0.1);
          overflow: hidden;
          transition: all 0.3s ease;
        }

        .collageArea:hover {
          transform: translateY(-5px);
          box-shadow: 0 25px 80px rgba(0,0,0,0.15);
        }

        .pinkSticky {
          position: absolute;
          top: 20px;
          right: 20px;
          width: 150px;
          height: 150px;
          background: linear-gradient(45deg, #ff6b6b, #ee5a52);
          border-radius: 5px;
          padding: 1rem;
          box-shadow: 0 5px 15px rgba(255, 107, 107, 0.3);
          transform: rotate(5deg);
          z-index: 10;
        }

        .smileyFace {
          font-size: 2rem;
          text-align: center;
          margin-bottom: 0.5rem;
          color: white;
        }

        .stickyText {
          font-size: 0.8rem;
          font-weight: bold;
          color: white;
          text-align: center;
          line-height: 1.2;
          white-space: pre-line;
        }

        .mainImageContainer {
          position: relative;
          width: 60%;
          margin: 2rem auto;
        }

        .imageLabel {
          position: absolute;
          top: -10px;
          left: -10px;
          background: white;
          padding: 0.5rem 1rem;
          border-radius: 20px;
          font-size: 0.9rem;
          font-weight: bold;
          box-shadow: 0 3px 10px rgba(0,0,0,0.1);
          z-index: 5;
        }

        .mainImage {
          width: 100%;
          height: 300px;
          object-fit: cover;
          border-radius: 15px;
          box-shadow: 0 10px 30px rgba(0,0,0,0.2);
          transition: all 0.3s ease;
        }

        .mainImage:hover {
          transform: scale(1.02);
        }

        .titleLabel {
          position: absolute;
          bottom: 20px;
          left: 20px;
          background: linear-gradient(45deg, #667eea 0%, #764ba2 100%);
          padding: 1rem 2rem;
          border-radius: 25px;
          transform: rotate(-2deg);
          box-shadow: 0 5px 15px rgba(102, 126, 234, 0.3);
        }

        .labelText {
          color: white;
          font-weight: bold;
          font-size: 1.1rem;
        }

        .tape1 {
          position: absolute;
          top: 50px;
          left: 100px;
          width: 80px;
          height: 30px;
          background: rgba(255, 255, 255, 0.8);
          border: 2px dashed #ccc;
          transform: rotate(-10deg);
        }

        .descriptionPanel {
          position: absolute;
          top: 50%;
          right: -350px;
          transform: translateY(-50%);
          width: 320px;
          background: white;
          border-radius: 15px;
          padding: 2rem;
          box-shadow: 0 15px 40px rgba(0,0,0,0.1);
          transition: all 0.3s ease;
          opacity: 0;
        }

        .descriptionPanel.visible {
          right: 20px;
          opacity: 1;
        }

        .paperContent {
          position: relative;
        }

        .descriptionTitle {
          font-size: 1.5rem;
          font-weight: bold;
          color: #333;
          margin-bottom: 1rem;
          border-bottom: 3px solid #667eea;
          padding-bottom: 0.5rem;
        }

        .descriptionText {
          color: #666;
          line-height: 1.6;
          margin-bottom: 1.5rem;
        }

        .tags {
          display: flex;
          flex-wrap: wrap;
          gap: 0.5rem;
          margin-bottom: 1rem;
        }

        .tag {
          background: linear-gradient(45deg, #667eea 0%, #764ba2 100%);
          color: white;
          padding: 0.3rem 0.8rem;
          border-radius: 15px;
          font-size: 0.8rem;
          font-weight: bold;
        }

        .projectMeta {
          margin-bottom: 1rem;
        }

        .duration {
          color: #888;
          font-size: 0.9rem;
          margin-bottom: 0.5rem;
        }

        .githubLink {
          display: inline-block;
          color: #667eea;
          text-decoration: none;
          font-weight: bold;
          margin-bottom: 1rem;
          transition: color 0.3s ease;
        }

        .githubLink:hover {
          color: #764ba2;
        }

        .achievements {
          margin-top: 1rem;
        }

        .achievementItem {
          color: #555;
          font-size: 0.9rem;
          margin-bottom: 0.5rem;
          padding-left: 1rem;
          position: relative;
        }

        .achievementItem::before {
          content: "→";
          position: absolute;
          left: 0;
          color: #667eea;
          font-weight: bold;
        }
      `}</style>

      <div className={styles.container}>
        {/* Projects Heading */}
        <div className={styles.projectsHeading}>
          <h1 className={styles.headingText}>Projects</h1>
        </div>

        {/* Navigation */}
        <div className={styles.navigation}>
          <button 
            className={styles.navButton} 
            onClick={prevProject}
            aria-label="Previous project"
          >
            ←
          </button>
          <span className={styles.projectCounter}>
            {currentProject + 1} / {projects.length}
          </span>
          <button 
            className={styles.navButton} 
            onClick={nextProject}
            aria-label="Next project"
          >
            →
          </button>
        </div>

        {/* Main collage area */}
        <div 
          className={styles.collageArea}
          onMouseEnter={() => setIsHovered(true)}
          onMouseLeave={() => setIsHovered(false)}
        >
          {/* Pink sticky note */}
          <div className={styles.pinkSticky}>
            <div className={styles.smileyFace}>:)</div>
            <div className={styles.stickyText}>
              {currentProjectData.subtitle}
            </div>
          </div>

          {/* Main project image */}
          <div className={styles.mainImageContainer}>
            <div className={styles.imageLabel}>{currentProjectData.title} main</div>
            <img 
              src={currentProjectData.mainImage} 
              alt={`${currentProjectData.title} main`}
              className={styles.mainImage}
            />
          </div>

          {/* Project title label */}
          <div className={styles.titleLabel}>
            <span className={styles.labelText}>{currentProjectData.title}</span>
          </div>

          {/* Tape elements */}
          <div className={styles.tape1}></div>

          {/* Hover description panel */}
          <div className={`${styles.descriptionPanel} ${isHovered ? styles.visible : ''}`}>
            <div className={styles.paperContent}>
              <h3 className={styles.descriptionTitle}>{currentProjectData.title}</h3>
              <div className={styles.projectMeta}>
                <div className={styles.duration}>{currentProjectData.duration}</div>
                <a 
                  href={currentProjectData.githubLink} 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className={styles.githubLink}
                >
                  View on GitHub →
                </a>
              </div>
              <p className={styles.descriptionText}>{currentProjectData.description}</p>
              <div className={styles.tags}>
                {currentProjectData.tags.map((tag, index) => (
                  <span key={index} className={styles.tag}>{tag}</span>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Portfolio;