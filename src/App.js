import "./App.css";
import About from "./components/About/About";
import Contact from "./components/Contact/Contact";
import Footer from "./components/Footer/Footer";
import Hero from "./components/Hero/Hero";
import Navi from "./components/Navi/Navi";
import Projects from "./components/Projects/Projects";
import Skills from "./components/Skills/Skills";

function App() {
  return (
    <div className="App">
      <div className="container">
        <Navi />
        <Hero />
        <Projects />
        <Skills />
        <About />
      </div>
      <Contact />
      <Footer />
    </div>
  );
}

export default App;
