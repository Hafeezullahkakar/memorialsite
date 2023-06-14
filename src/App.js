import logo from "./logo.svg";
import "./App.css";
import Header from "./ui/components/header/Header";
import Hero from "./ui/components/hero/Hero";
import Services from "./ui/components/services/Services";
import PlaneFeature from "./ui/pages/planfeature/PlaneFeature";
import About from './ui/pages/about/About'
function App() {
  return (
    <div className="App">
      <Header />
      {/* <Hero/> */}
      {/* <Services/> */}

      {/* <PlaneFeature /> */}
      
      <About />
    </div>
  );
}

export default App;
