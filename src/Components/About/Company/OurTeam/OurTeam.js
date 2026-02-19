import React from 'react';
import './OurTeam.css';

const OurTeam = () => {
  const teamData = [
    {
      id: 1,
      title: "Project Management Office",
      description: "10+ project managers who oversee all aspects of a project and ensure that CodewingX delivers on all agreements with a client.",
      icon: "📊",
      link: "/project-management"
    },
    {
      id: 2,
      title: "Business Analysis Team",
      description: "8+ business analysts and consultants who elicit project requirements and plan software in a way to ensure the expected business value.",
      icon: "💼",
      link: "/business-analysis"
    },
    {
      id: 3,
      title: "Design Team",
      description: "10+ UX and UI designers who advocate human-centered, interactive, and visually balanced software design.",
      icon: "🎨",
      link: "/design"
    },
    {
      id: 4,
      title: "Web Development Team",
      description: "15+ web solution architects and developers (PHP, Python, Golang, front-end) who create customer-facing and back-office apps. Since 2020, the team has been building blockchain expertise.",
      icon: "💻",
      link: "/web-development"
    },
    {
      id: 5,
      title: "Mobile Development Team",
      description: "8+ mobile developers who create native and cross-platform apps that people enjoy using in their daily lives or for work purposes.",
      icon: "📱",
      link: "/mobile-development"
    },
    {
      id: 6,
      title: "IT Infrastructure Team",
      description: "6+ system administrators and engineers who build and maintain high-performing, scalable, and cost-effective infrastructures for our clients.",
      icon: "🔧",
      link: "/infrastructure"
    }
  ];

  return (
    <div className="our-team">
      <div className="container">

        {/* <header className="team-header">
          <h1>Meet CodewingX's Employees – the People Who Will Drive Your Project to Success</h1>
          <p className="header-description">
            We want to devote this page to the main driving force behind CodewingX — our people — and talk about the cross-functional team CodewingX has built.
          </p>
        </header> */}

        <main className="main-content">
          <h2 className="section-title">Key Units We Have and What They Can Do for You</h2>

          <div className="teams-grid">
            {teamData.map((team) => (
              <article key={team.id} className="team-card">
                <div className="card-icon" role="img" aria-label={team.title}>
                  <span>{team.icon}</span>
                </div>
                <h3 className="card-title">{team.title}</h3>
                <p className="card-description">{team.description}</p>
                <a href={team.link} className="read-more" aria-label={`Read more about ${team.title}`}>
                  Read more <span className="arrow" aria-hidden="true">→</span>
                </a>
              </article>
            ))}
          </div>
        </main>

      </div>
    </div>
  );
};

export default OurTeam;