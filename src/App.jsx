import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import Cursor from "./components/Cursor";
import ScrollProgress from "./components/ScrollProgress";

import Hero from "./sections/Hero";
import About from "./sections/About";
import Experience from "./sections/Experience";
import Projects from "./sections/Projects";
import Skills from "./sections/Skills";
import Certificates from "./sections/Certificates";
import Contact from "./sections/Contact";

export default function App() {
  return (
    <div className="bg-animated">

      <Cursor />
      <ScrollProgress />

      <Navbar />

      <Hero />
      <About />
      <Experience />
      <Projects />
      <Skills />
      <Certificates />
      <Contact />

      <Footer />

    </div>
  );
}