import React from 'react';
import Header from '../Header/Header';
import About from '../About/About'; // Updated path with subfolder
import Services from '../Services/Services';
import Footer from '../Footer/Footer';// Updated import
import Hero from '../Hero/Hero';
import Solutions from '../Services/Solutions';
import Stories from '../Stories/Stories';
import WhyChoose from '../Stories/WhyChoose';
import OurPatner from '../About/Approach/OurPartners/OurPartners';
import OurTeam from '../About/Company/OurTeam/OurTeam';
import Founder from '../Founder/Founder';
const Homepage = () => {
  return (
    <div>
      <Header />
      <Hero />

      
      
        <Services /> 
        <Solutions />
       
          
          

          <OurTeam />
          <About />
          {/* <Founder /> */}
      <Footer />
    </div>
  );
};

export default Homepage;