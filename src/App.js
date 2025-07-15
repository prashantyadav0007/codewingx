import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

// import Header from './Components/Header/Header';
// import Footer from './Components/Footer/Footer';

// Direct imports instead of lazy loading
import Homepage from './Components/Homepage/Homepage';
import About from './Components/About/About';
import Services from './Components/Services/Services';
import Features from './Components/Features/Features';
import OurTeam from './Components/About/Company/OurTeam/OurTeam';
import ClientReviews from './Components/About/Company/ClientReviews/ClientReviews';
import WhereStart from './Components/About/Approach/WhereStart/WhereStart';
import Hero from './Components/Hero/Hero';
import ApproachtoSD from './Components/About/Approach/ApproachtoSD/ApproachtoSD';
import OurPartners from './Components/About/Approach/OurPartners/OurPartners';
<<<<<<< HEAD
import ContactForm from './Components/Header/ContactForm';
import Solutions from './Components/Services/Solutions';
import Stories from './Components/Stories/Stories';
import WhyChoose from './Components/Stories/WhyChoose';
=======
import SoftwareDev from './Components/Services/Development/SoftwareDev/SoftwareDev';
import WebDev from './Components/Services/Development/WebDev/WebDev';

>>>>>>> 0e59afc3826711c69486aa6763f0735bec431410
const App = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Homepage />} />
        <Route path="/services" element={<Services />} />
        <Route path="/about" element={<About />} />
        <Route path="/features" element={<Features />} />
        <Route path="/ourteam" element={<OurTeam />} />
        <Route path="/clientreviews" element={<ClientReviews />} />
        <Route path="/wherestart" element={<WhereStart />} />
        <Route path="/hero" element={<Hero />} />
<<<<<<< HEAD
        <Route path="/contactform" element={<ContactForm />} />
        <Route path="/solutions" element={<Solutions />} />
        <Route path="/stories" element={<Stories />} />
        <Route path="/whychoose" element={<WhyChoose />} />


                <Route path="/Approachtosd" element={<ApproachtoSD />} />

                <Route path="/ourpartners" element={<OurPartners />} />



=======
        <Route path="/Approachtosd" element={<ApproachtoSD />} />
        <Route path="/ourpartners" element={<OurPartners />} />
        <Route path="/softwaredev" element={<SoftwareDev/>} />
        <Route path="/webdev" element={<WebDev/>} />
>>>>>>> 0e59afc3826711c69486aa6763f0735bec431410
        <Route path="*" element={<div>Page not found</div>} />
      </Routes>
    </Router>
  );
};

export default App;