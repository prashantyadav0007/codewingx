import React from 'react';
import './OurTeam.css';

const OurTeam = () => {
  const teamData = [
    {
      id: 1,
      title: "Project management office",
      description: "60+ project managers who oversee all aspects of a project and ensure that CodewingX delivers on all agreements with a client.",
      members: [
        { name: "Sarah Johnson", image: "https://images.unsplash.com/photo-1494790108755-2616b612b647?w=150&h=150&fit=crop&crop=face" },
        { name: "Mike Chen", image: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=150&h=150&fit=crop&crop=face" },
        { name: "David Wilson", image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=150&h=150&fit=crop&crop=face" }
      ],
      bgColor: "mint"
    },
    {
      id: 2,
      title: "Business analysis team",
      description: "40+ business analysts and consultants who elicit project requirements and plan software in a way to ensure the expected business value.",
      members: [
        { name: "Emma Davis", image: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=150&h=150&fit=crop&crop=face" },
        { name: "Lisa Anderson", image: "https://images.unsplash.com/photo-1544005313-94ddf0286df2?w=150&h=150&fit=crop&crop=face" },
        { name: "John Smith", image: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=150&h=150&fit=crop&crop=face" }
      ],
      bgColor: "blue"
    },
    {
      id: 3,
      title: "Design team",
      description: "10+ UX and UI designers who advocate human-centered, interactive, and visually balanced software design.",
      members: [
        { name: "Alex Brown", image: "https://images.unsplash.com/photo-1507591064344-4c6ce005b128?w=150&h=150&fit=crop&crop=face" },
        { name: "Ryan Taylor", image: "https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?w=150&h=150&fit=crop&crop=face" },
        { name: "Mark Johnson", image: "https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?w=150&h=150&fit=crop&crop=face" }
      ],
      bgColor: "purple"
    },
    {
      id: 4,
      title: "Web development team",
      description: "60+ web solution architects and developers (PHP, Python, Golang, front-end development) who create customer-facing and back office apps. Since 2020, the team has been developing blockchain expertise.",
      members: [
        { name: "Tom Wilson", image: "https://images.unsplash.com/photo-1560250097-0b93528c311a?w=150&h=150&fit=crop&crop=face" },
        { name: "Chris Lee", image: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=150&h=150&fit=crop&crop=face" },
        { name: "Jessica White", image: "https://images.unsplash.com/photo-1487412720507-e7ab37603c6f?w=150&h=150&fit=crop&crop=face" }
      ],
      bgColor: "yellow"
    },
    {
      id: 5,
      title: "Mobile development team",
      description: "70+ mobile developers who create native and cross-platform apps that people enjoy using in their daily lives or for work purposes.",
      members: [
        { name: "Steve Clark", image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=150&h=150&fit=crop&crop=face" },
        { name: "Robert Davis", image: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=150&h=150&fit=crop&crop=face" },
        { name: "Maria Garcia", image: "https://images.unsplash.com/photo-1544005313-94ddf0286df2?w=150&h=150&fit=crop&crop=face" }
      ],
      bgColor: "blue"
    },
    {
      id: 6,
      title: "IT infrastructure team",
      description: "60+ system administrators and engineers who build and maintain high-performing, scalable, and cost-effective infrastructures for our clients.",
      members: [
        { name: "Kevin Martinez", image: "https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?w=150&h=150&fit=crop&crop=face" },
        { name: "Daniel Brown", image: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=150&h=150&fit=crop&crop=face" },
        { name: "Paul Rodriguez", image: "https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?w=150&h=150&fit=crop&crop=face" }
      ],
      bgColor: "mint"
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
                <div key={team.id} className={`team-card ${team.bgColor}`}>
                  <div className="team-members">
                    {team.members.map((member, index) => (
                      <div key={index} className="member-avatar">
                        <img src={member.image} alt={member.name} />
                      </div>
                    ))}
                  </div>
                  
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