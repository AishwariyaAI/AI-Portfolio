import { motion } from "framer-motion";
import { FiArrowRight } from "react-icons/fi";
import { useNavigate } from "react-router-dom";

const Hero = () => {
  return (
    <section
      className="relative min-h-screen flex items-center justify-center px-6 pt-40 overflow-hidden"
    >
      {/* Background Glow */}
      <div className="absolute top-[-200px] left-1/2 -translate-x-1/2 w-[700px] h-[700px] bg-blue-300 opacity-20 blur-[150px] rounded-full"></div>
      <div className="absolute bottom-[-150px] left-[10%] w-[500px] h-[500px] bg-cyan-300 opacity-20 blur-[140px] rounded-full"></div>
      <div className="absolute top-[20%] right-[5%] w-[500px] h-[500px] bg-emerald-300 opacity-20 blur-[140px] rounded-full"></div>

      {/* Content */}
      <motion.div
        initial={{ opacity: 0, y: 40 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
        className="relative z-20 text-center max-w-6xl"
      >
        {/* Internship Box */}
        <div className="flex justify-center mb-10">
          <div className="flex items-center gap-4 px-8 py-4 rounded-full border border-slate-200 bg-white shadow-xl">

            <div className="relative flex items-center justify-center">
              <span className="absolute inline-flex h-5 w-5 rounded-full bg-green-400 opacity-75 animate-ping"></span>
              <span className="relative inline-flex rounded-full h-3 w-3 bg-green-500"></span>
            </div>

            <p className="text-lg md:text-xl font-medium text-slate-700">
              Currently a
              <span className="text-blue-600 font-bold mx-2">GenAI Intern</span>
              at
              <span className="text-slate-900 font-bold ml-2">
                Evolve Robot Lab
              </span>
            </p>
          </div>
        </div>

        {/* Heading */}
        <h1 className="text-6xl md:text-8xl font-black leading-tight text-slate-900">
            AI/ML Engineer &

        </h1>

        <h1 className="text-6xl md:text-8xl font-black leading-tight mt-2">
          <span className="bg-gradient-to-r from-blue-600 via-cyan-400 to-emerald-400 bg-clip-text text-transparent">
            Full Stack AI Developer

          </span>
        </h1>

        {/* Subtitle */}
        <p className="mt-10 text-xl md:text-2xl text-slate-600 leading-relaxed max-w-4xl mx-auto">
          Building production-ready AI systems using Machine Learning,
          Generative AI, RAG, AI Agents, FastAPI and React.

          Currently working on Agentic AI, Multimodal AI Applications,
          Predictive Maintenance Systems and AI Incident Monitoring Platforms.
        </p>

        {/* Buttons */}
        <div className="flex flex-col md:flex-row justify-center gap-6 mt-14">

          {/* VIEW MY WORK */}
          <button
            onClick={() =>
             document.getElementById("mywork")?.scrollIntoView({
              behavior: "smooth",
    })
  }
>
  View My Work
</button>

          {/* DOWNLOAD RESUME */}
          <a
            href="/Aishwariya_A_AIML_Resume.pdf"
            target="_blank"
            rel="noopener noreferrer"
          
            className="bg-white border border-slate-300 px-10 py-5 rounded-2xl text-xl font-semibold hover:bg-slate-100 transition text-center"
          >
            Download Resume
          </a>

        </div>
      </motion.div>
    </section>
  );
};

export default Hero;