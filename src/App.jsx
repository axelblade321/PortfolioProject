import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import About from "./components/About";
import Skills from "./components/Skills";
import Projects from "./components/Projects";
import Education from "./components/Educations";
import Contact from "./components/Contact";
import Footer from "./components/Footer";

import "./styles/global.css";

function App() {
  return (
    <>
      <Navbar />

      <main className="container">
        <Hero />
        <About />
        <Skills />
        <Projects />
        <Education />
        <Contact />
      </main>

      <Footer />
    </>
  );
}

export default App;