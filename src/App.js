import './App.css';
import './Media.css';
import Certifications from './components/Certifications';
import Footer from './components/Footer';

import Hero from './components/Hero';
import IndiaUsa from './components/IndiaUsa';
import Navbar from './components/Navbar';
import Services from './components/Services';
import Testimonial from './components/Testimonial';
import WhyUs from './components/WhyUs';
import WorkFeature from './components/WorkFeature';

function App() {
  return (
    <div className="App">
      <Navbar/>
      <Hero/>
      <Services/>
      <WhyUs/>
      <WorkFeature/>
      <IndiaUsa/>
      <Testimonial/>
      <Certifications/>
      <Footer/>
    </div>
  );
}

export default App;
