import React, { Suspense, lazy } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

import Header from './Components/Header/Header';
import Footer from './Components/Footer/Footer';

// Lazy load components for routing
const Homepage = lazy(() => import('./Components/Homepage/Homepage'));
const About = lazy(() => import('./Components/About/About'));
const Services = lazy(() => import('./Components/Services/Services'));
const Features = lazy(() => import('./Components/Features/Features'));

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
          <Route path="*" element={<div>Page not found</div>} />
        </Routes>
      </Suspense>

      <Footer />
    </Router>
  );
  
};

export default App;
