import Hero from "./components/Hero";
import Navbar from  "./components/Navbar";
import Services from "./components/Services";
import Portfolio from "./components/Portfolio";
import Process from "./components/Process";
import CTA from "./components/CTA";
import Contacto from "./components/Contacto";
import Footer from "./components/Footer"; // <-- importamos Footer

function App() {
  return (
    <>
      <Navbar />

      <Hero />
      <Services />
      <Portfolio />
      <Process />
      <CTA />
      <Contacto />
      <Footer /> 
    </>
  );
}

export default App;
