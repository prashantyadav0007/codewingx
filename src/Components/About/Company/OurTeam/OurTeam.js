import React from 'react';
import './OurTeam.css';

const OurTeam = () => {
  const teamData = [
    {
      id: 1,
      title: "Project management office",
      description: "10+ project managers who oversee all aspects of a project and ensure that CodewingX delivers on all agreements with a client.",
    },
    {
      id: 2,
      title: "Business analysis team",
      description: "8+ business analysts and consultants who elicit project requirements and plan software in a way to ensure the expected business value.",
    },
    {
      id: 3,
      title: "Design team",
      description: "10+ UX and UI designers who advocate human-centered, interactive, and visually balanced software design.",
    },
    {
      id: 4,
      title: "Web development team",
      description: "15+ web solution architects and developers (PHP, Python, Golang, front-end development) who create customer-facing and back office apps. Since 2020, the team has been developing blockchain expertise.",
    },
    {
      id: 5,
      title: "Mobile development team",
      description: "8+ mobile developers who create native and cross-platform apps that people enjoy using in their daily lives or for work purposes.",
    },
    {
      id: 6,
      title: "IT infrastructure team",
      description: "6+ system administrators and engineers who build and maintain high-performing, scalable, and cost-effective infrastructures for our clients.",
    }
  ];

  return (
    <div className="our-team">
      <div className="container">
        <header className="team-header">
          <h1>Meet CodewingX's Employees – the People Who Will Drive Your Project to Success</h1>
          <p>We want to devote this page to the main driving force behind CodewingX — our people — and talk about a cross-functional team CodewingX has built.</p>
        </header>

        <div className="content-wrapper">
          <main className="main-content">
            <h2>Key Units We Have and What They Can Do for You</h2>
            
            <div className="teams-grid">
              {teamData.map((team) => (
                <div key={team.id} className="team-card">
                  <h3>{team.title}</h3>
                  <p>{team.description}</p>
                  
                  <a href="#" className="read-more">
                    Read more <span className="arrow">→</span>
                  </a>
                </div>
              ))}
            </div>
          </main>
        </div>
      </div>
    </div>
  );
};

export default OurTeam;