// import React, { useState } from 'react';
// import { ChevronDown, ArrowRight, Filter } from 'lucide-react';
// import './Stories.css';

// const Stories = () => {
//   const [activeFilter, setActiveFilter] = useState({
//     services: false,
//     industries: false,
//     solutions: false
//   });

//   const [visibleStories, setVisibleStories] = useState(8);

//   const toggleFilter = (filterType) => {
//     setActiveFilter(prev => ({
//       ...prev,
//       [filterType]: !prev[filterType]
//     }));
//   };

//   const stories = [
//     {
//       id: 1,
//       title: "GMP4-Compliant Software to Automate Cancer & TPN Drugs Manufacturing",
//       image: "/api/placeholder/400/250",
//       category: "Healthcare"
//     },
//     {
//       id: 2,
//       title: "Custom Software for End-to-End Loan Management Automation",
//       image: "/api/placeholder/400/250",
//       category: "Finance"
//     },
//     {
//       id: 3,
//       title: "Blockchain-Based Wine Supply Chain Software for FIDÉwine",
//       image: "/api/placeholder/400/250",
//       category: "Supply Chain",
//       logo: "FIDÉ wine"
//     },
//     {
//       id: 4,
//       title: "Development of Viber, a Messaging and VoIP App with 1B+ Users",
//       image: "/api/placeholder/400/250",
//       category: "Communication",
//       logo: "Viber"
//     },
//     {
//       id: 5,
//       title: "IoT-Based Physiotherapy Platform Driving 70% Reduction in Pain and Unneeded Surgeries",
//       image: "/api/placeholder/400/250",
//       category: "Healthcare",
//       logo: "AKLOS Health"
//     },
//     {
//       id: 6,
//       title: "Data Analytics System Enabling Cross Analysis of 30,000 Attributes and 100x Faster Reporting",
//       image: "/api/placeholder/400/250",
//       category: "Analytics"
//     },
//     {
//       id: 7,
//       title: "Insurance App with 3D Auto Models to Transform Claim Submission",
//       image: "/api/placeholder/400/250",
//       category: "Insurance"
//     },
//     {
//       id: 8,
//       title: "Underwriting Automation Software for a Global Aviation Insurer with $30B in Assets",
//       image: "/api/placeholder/400/250",
//       category: "Insurance"
//     }
//   ];

//   const showMoreStories = () => {
//     setVisibleStories(prev => prev + 8);
//   };

//   const timelineSteps = [
//     {
//       year: "2018",
//       step: "01",
//       title: "Pre Campaign",
//       description: "Select all the factors which is necessary for the growth of the management",
//       color: "#7dd3fc"
//     },
//     {
//       year: "2019", 
//       step: "02",
//       title: "Follow Through",
//       description: "All the factors which have select should be followed by workers. Determined working goals and after that select timeline and products.",
//       color: "#3b82f6"
//     },
//     {
//       year: "2020",
//       step: "03", 
//       title: "Feasibility Study",
//       description: "Select donors which maintain all the factors of the process. Step by step process gives you a perfect result at the end",
//       color: "#1e3a8a"
//     },
//     {
//       year: "2021",
//       step: "04",
//       title: "Solicits Gifts", 
//       description: "All the factors divided in steps at every end you have the single sample and gives you the low lost factor",
//       color: "#9ca3af"
//     },
//     {
//       year: "2022",
//       step: "05",
//       title: "Lower Growth Level",
//       description: "Before producing the large amount of the product create a sample which gives you the accurate result and loss amount is decrease.",
//       color: "#44c1efff"
//     }
//   ];

//   return (
//     <div className="stories-container">
//       {/* Success Story Timeline Section */}
//       <div className="timeline-section">
//         <div className="timeline-header">
//           <div className="timeline-title">
//             <span className="title-line"></span>
//             <h1>SUCCESS <span className="highlight">STORY</span></h1>
//           </div>
//         </div>

//         <div className="timeline-wrapper">
//           <div className="timeline-badges">
//             {timelineSteps.map((step, index) => (
//               <div key={index} className="timeline-badge" style={{ color: step.color }}>
//                 <div className="badge-ribbon" style={{ backgroundColor: step.color }}>
//                   <span>{step.year}</span>
//                 </div>
//               </div>
//             ))}
//           </div>

//           <div className="timeline-line">
//             {timelineSteps.map((step, index) => (
//               <div key={index} className="timeline-dot" style={{ backgroundColor: step.color }}></div>
//             ))}
//           </div>

//           <div className="timeline-cards">
//             {timelineSteps.map((step, index) => (
//               <div key={index} className="timeline-card" style={{ backgroundColor: step.color }}>
//                 <div className="card-arrow" style={{ borderBottomColor: step.color }}></div>
//                 <div className="card-number" style={{ color: step.color }}>{step.step}</div>
//                 <h3>{step.title}</h3>
//                 <p>{step.description}</p>
//               </div>
//             ))}
//           </div>
//         </div>

//         <div className="timeline-footer">
//           <div className="footer-brand">CodewingX</div>
//           <div className="footer-page">3</div>
//           <div className="footer-website">WWW.CodewingX.COM</div>
//         </div>
//       </div>


//     </div>
//   );
// };

// export default Stories;