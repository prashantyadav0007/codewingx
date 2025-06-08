import React from 'react';
import Header from '../Header/Header';
import About from '../About/About'; // Updated path with subfolder
import Services from '../Services/Services';
import Footer from '../Footer/Footer';// Updated import



const Homepage = () => {
  return (
    <div>
      <Header />
      
        <About />
        <Services /> 
        
     

  
      <Footer />
    </div>
  );
};

export default Homepage;