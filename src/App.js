import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

import Header from './Components/Header/Header';
import Footer from './Components/Footer/Footer';

// Direct imports instead of lazy loading
import Homepage from './Components/Homepage/Homepage';
import About from './Components/About/About';
import Services from './Components/Services/Services';
import Features from './Components/Features/Features';
import Aboutcompany from './Components/About/Company/Aboutcompany/Aboutcompany';
import OurTeam from './Components/About/Company/OurTeam/OurTeam';
import ClientReviews from './Components/About/Company/ClientReviews/ClientReviews';
import WhereStart from './Components/About/Approach/WhereStart/WhereStart';
import Hero from './Components/Hero/Hero'

const App = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Homepage />} />
        <Route path="/services" element={<Services />} />
        <Route path="/about" element={<About />} />
        <Route path="/features" element={<Features />} />
        <Route path="/aboutcompany" element={<Aboutcompany />} />
        <Route path="/ourteam" element={<OurTeam />} />
        <Route path="/clientreviews" element={<ClientReviews />} />
        <Route path="/wherestart" element={<WhereStart />} />
        <Route path="/hero" element={<Hero />} />



        <Route path="*" element={<div>Page not found</div>} />
      </Routes>
    </Router>
  );
};

export default App;