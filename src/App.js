import React, { Suspense } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

// Components
import Header from './Components/Header/Header';
import About from './Components/About/About';
import Services from './Components/Services/Services';
import Footer from './Components/Footer/Footer';
import Features from './Components/Features/Features';
// Add Homepage component
// import Homepage from './Components/Homepage/Homepage'; // or wherever your homepage is


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
      <Header />
      <Services />
      <About />
      <Suspense LoadingFallback={<div>Loading...</div>}>
        <Routes>
          {/* Add a default route for homepage */}
          {/* <Route path="/" element={<Homepage />} /> */}
          <Route path="/about" element={<About />} />
          <Route path="/services" element={<Services />} />
          <Route path="/features" element={<Features />} />
          {/* Add a catch-all route for 404 */}
          <Route path="*" element={<div>Page not found</div>} />
        </Routes>
      </Suspense>
      
      <Footer />
    </Router>
  );
};

export default App;