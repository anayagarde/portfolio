import Navbar from "./components/Navbar";
import Home from "./components/Home";
import About from "./components/About";
import Projects from "./components/Projects";
import Education from "./components/Education";
import Experience from "./components/Experience";
import Portfolio from "./components/Portfolio";
import Contact from "./components/Contact";


function App() {
  return (
    <div>
      <Navbar/>
      <Home/>
      <About />
      <Education />
      <Experience />
      <Projects />
      <Portfolio/>
      <Contact/>
    </div>
  );
}

export default App;
