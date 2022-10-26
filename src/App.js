import "./App.css";
import Hero from "./components/Hero/Hero";
import Navi from "./components/Navi/Navi";
import Projects from "./components/Projects/Projects";


function App() {
  return (
    <div className="App">
      <div className="container">
        <Navi />
        <Hero />
        <Projects />
      </div>
    </div>
  );
}

export default App;
