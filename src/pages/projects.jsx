const projects = [

  {title:"AI Incident Investigation Agent",
   tech:"FastAPI, Python, Machine Learning, NASA Dataset, Streamlit, SQLite",
   desc:"End-to-end AI incident monitoring platform with anomaly detection, severity prediction, root cause analysis, JWT authentication and live monitoring dashboard.",
   github:"https://github.com/AishwariyaAI/AI-Incident-Investigation-Agent"
  },

  {
    title:"AI Medical Assistant RAG",
    tech:"LangChain, FAISS, HuggingFace, LLMs, Streamlit",
    desc:"Healthcare RAG application using document embeddings, semantic search and intelligent medical question answering.",
    github:"https://github.com/AishwariyaAI/AI-Medical-Assistant-RAG"
  },

  {
    title:"Customer Retention Advisor",
    tech:"Python, Scikit-Learn, Pandas, Streamlit",
    desc:"Machine learning solution for customer churn prediction with complete ML lifecycle and business insights.",
    github:"https://github.com/AishwariyaAI/Customer-Retention-Advisor"
  },

];

const Projects = () => {
  return (

    <div className="min-h-screen bg-slate-50 p-10">

      <h1 className="text-6xl font-black text-center text-slate-900 mt-20">
        💡 Projects
      </h1>

      <p className="text-center text-slate-600 text-xl mt-6">
        Explore my AI and Machine Learning projects
      </p>

      <div className="grid md:grid-cols-3 gap-8 mt-20 max-w-7xl mx-auto">

        {projects.map((project,index)=>(

          <div
            key={index}
            className="bg-white border border-slate-200 rounded-3xl p-8 hover:-translate-y-2 transition duration-300 shadow-sm hover:shadow-xl"
          >

            <div className="text-5xl mb-6">
              🚀
            </div>

            <h1 className="text-3xl font-bold text-slate-900">
  <a
    href={project.github}
    target="_blank"
    rel="noopener noreferrer"
    className="hover:text-blue-600 hover:underline"
  >
    {project.title}
  </a>
</h1>

            <p className="text-blue-600 font-semibold mt-4">
              {project.tech}
            </p>

            <p className="text-slate-600 mt-5 text-lg leading-relaxed">
              {project.desc}
            </p>

            <a
              href={project.github}
              target="_blank"
              className="inline-block mt-8 bg-blue-600 text-white px-6 py-3 rounded-2xl hover:bg-blue-700 transition"
            >
              View Project
            </a>

          </div>

        ))}

      </div>

    </div>

  );
};

export default Projects;