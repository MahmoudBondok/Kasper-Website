import './App.css';
import About from "./Components/About/About";
import AboutT from './Components/About/Video';
import Quote from "./Components/Quote/Quote";
import Header from "./Components/Home/Header";
import Landing from "./Components/Home/Landing";
import Portfolio from "./Components/Portfolio/Portfolio";
import Pricing from './Components/Pricing/Pricing';
import DesignServices from "./Components/Services/DesignServices";
import Services from "./Components/Services/Services";
import Skils from "./Components/Skils/Skils";
import Subscribe from './Components/Subscribe/Subscribe';
import Contact from './Components/Contact/Contact';
import Footer from './Components/Footer/Footer';

function App() {
  return (
    <div>
      <Header />
      <Landing />
      <Services />
      <DesignServices />
      <Portfolio />
      <AboutT />
      <About />
      <Skils />
      <Quote />
      <Pricing />
      <Subscribe />
      <Contact />
      <Footer />
    </div>
  );
}

export default App;