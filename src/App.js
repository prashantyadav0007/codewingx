import Navbar from './Components/Navbar';
import Hero from './Components/Hero';
import Services from './Components/Services';
import Projects from './Components/Projects';
// import CTA from './Components/CTA'; // if you don’t have CTA.js, comment this
import Footer from './Components/Footer';


function App() {
  return (
    <div className="bg-dark text-white">
      <Navbar />
      <Hero />
      <Services />
      <Projects />
      {/* <CTA /> */}
      <Footer />
    </div>
  );
}

export default App;
