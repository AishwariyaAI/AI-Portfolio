import MyWork from "./components/MyWork";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import Cards from "./components/Cards";
import Background from "./components/Background";

import Projects from "./pages/projects";
import Experience from "./pages/Experience";
import TechStack from "./pages/TechStack";
import Publications from "./pages/Publications";
import Certifications from "./pages/Certifications";
import Blog from "./pages/Blog";
import Contact from "./pages/Contact";

import {
  BrowserRouter,
  Routes,
  Route,
} from "react-router-dom";

function Home() {
  return (
    <div className="relative min-h-screen">

      <Background />

      <Navbar />

      <Hero />

      <MyWork />

      <Cards />

    </div>
  );
}

function App() {
  return (
    <BrowserRouter>

      <Routes>

        <Route path="/" element={<Home />} />

        <Route path="/projects" element={<Projects />} />

        <Route path="/experience" element={<Experience />} />

        <Route path="/techstack" element={<TechStack />} />

        <Route path="/publications" element={<Publications />} />

        <Route path="/certifications" element={<Certifications />} />

        <Route path="/blog" element={<Blog />} />

        <Route path="/contact" element={<Contact />} />

      </Routes>

    </BrowserRouter>
  );
}

export default App;