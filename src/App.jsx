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

/* HOME PAGE */
function Home() {
  return (
    <>
      <Background />
      <Navbar />
      <Hero />
      
      <MyWork />
      <Cards />


      {/* ✅ RESUME SECTION (BUTTON ONLY) */}
      <div style={{ textAlign: "center", marginTop: "40px", paddingBottom: "60px" }}>
        <h2 style={{ color: "#fff" }}>My Resume</h2>

        <a
          href="/Aishwariya_A_AIML_Resume.pdf"
          target="_blank"
          rel="noopener noreferrer"
          download
          style={{
            marginTop: "15px",
            display: "inline-block",
            padding: "12px 20px",
            background: "#3b82f6",
            color: "#fff",
            borderRadius: "8px",
            textDecoration: "none",
          }}
        >
          Download Resume
        </a>
      </div>
    </>
  );
}

/* APP ROUTER */
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