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
// import ClientReviews from './Components/About/Company/ClientReviews/ClientReviews';
import WhereStart from './Components/About/Approach/WhereStart/WhereStart';
import Hero from './Components/Hero/Hero';
import ApproachtoSD from './Components/About/Approach/ApproachtoSD/ApproachtoSD';
// import OurPartners from './Components/About/Approach/OurPartners/OurPartners';

import ContactForm from './Components/Header/ContactForm';
import Solutions from './Components/Services/Solutions';
import Stories from './Components/Stories/Stories';
import WhyChoose from './Components/Stories/WhyChoose';
import Founder from './Components/Founder/Founder';
import Overview from './Components/Footer/Overview/Overview';
import Privacy from './Components/Footer/Privacy';
import Terms from './Components/Footer/Terms';
import FAQs from './Components/Footer/FAQs';
// import SoftwareDev from './Components/Services/Development/SoftwareDev/SoftwareDev';
// import WebDev from './Components/Services/Development/WebDev/WebDev';

const NotFound = () => (
  <div style={{ textAlign: 'center', padding: '50px' }}>
    <h1>404 - Page Not Found</h1>
    <p>The page you are looking for does not exist.</p>
    <a href="/">Go Back to Home</a>
  </div>
);

const App = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Homepage />} />
        <Route path="/about" element={<About />} />
        <Route path="/services" element={<Services />} />
        <Route path="/features" element={<Features />} />
        <Route path="/ourteam" element={<OurTeam />} />
        <Route path="/wherestart" element={<WhereStart />} />
        <Route path="/hero" element={<Hero />} />
        <Route path="/approachtosd" element={<ApproachtoSD />} />
        <Route path="/contactform" element={<ContactForm />} />
        <Route path="/solutions" element={<Solutions />} />
        <Route path="/stories" element={<Stories />} />
        <Route path="/whychoose" element={<WhyChoose />} />
        <Route path="/founder" element={<Founder />} />
        <Route path="/overview" element={<Overview />} />
        <Route path="/Privacy" element={<Privacy />} />
        <Route path="/Terms" element={<Terms />} />
        <Route path="/FAQs" element={<FAQs />} />

        {/* <Route path="/clientreviews" element={<ClientReviews />} /> */}
        {/* <Route path="/ourpartners" element={<OurPartners />} /> */}
        {/* <Route path="/softwaredev" element={<SoftwareDev />} /> */}
        {/* <Route path="/webdev" element={<WebDev />} /> */}

        <Route path="*" element={<NotFound />} />
      </Routes>
    </Router>
  );
};

export default App;