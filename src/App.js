import React, { Suspense, lazy } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

import Header from './Components/Header/Header';
import Footer from './Components/Footer/Footer';

// Lazy load components for routing
const Homepage = lazy(() => import('./Components/Homepage/Homepage'));
const About = lazy(() => import('./Components/About/About'));
const Services = lazy(() => import('./Components/Services/Services'));
const Features = lazy(() => import('./Components/Features/Features'));
const Aboutcompany = lazy(() => import('./Components/About/Company/Aboutcompany/Aboutcompany'));
const OurTeam = lazy(() => import('./Components/About/Company/OurTeam/OurTeam'));
const ClientReviews = lazy(() => import('./Components/About/Company/ClientReviews/ClientReviews'));



const LoadingFallback = () => (
  <div style={{ 
    display: 'flex', 
    justifyContent: 'center', 
    alignItems: 'center', 
    height: '100vh',
    fontSize: '20px'
  }}>
    Loading...
  </div>
);

const App = () => {
  return (
    <Router>
     
      
      <Suspense fallback={<LoadingFallback />}>
        <Routes>
          <Route path="/" element={<Homepage />} />
          <Route path="/services" element={<Services />} />
           <Route path="/about" element={<About />} />

          <Route path="/features" element={<Features />} />
           <Route path="/aboutcompany" element={<Aboutcompany />} />
           <Route path="/ourteam" element={<OurTeam />} />
            <Route path="/clientreviews" element={<ClientReviews />} />



          <Route path="*" element={<div>Page not found</div>} />
        </Routes>
      </Suspense>

      
    </Router>
  );
  
};

export default App;
