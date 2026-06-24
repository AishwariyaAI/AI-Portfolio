const projects = [
  {
    title: "AI Incident Investigation Agent",
    tech: "FastAPI, Python, Machine Learning, NASA Dataset, Streamlit, SQLite",
    desc: "End-to-end AI incident monitoring platform with anomaly detection, severity prediction, root cause analysis, JWT authentication and live monitoring dashboard.",
    status: "✅ Completed",
    github: "https://github.com/AishwariyaAI/AI-Incident-Investigation-Agent",
  },

  {
    title: "CryptoWatch - Real-Time Market Sentiment Tracker",
    tech: "Python • Streamlit • NewsAPI • Hugging Face Transformers • Groq LLM • NLP • Sentiment Analysis • Plotly • yFinance • Pandas • Data Visualization",
    desc: "AI-powered cryptocurrency intelligence platform that analyzes real-time crypto news using NLP sentiment analysis, Fear & Greed Index tracking, Bitcoin/Ethereum market monitoring, AI-generated market summaries using Groq LLM, interactive visualizations, and trading recommendations.",
    status: "✅ Completed",
    github: "https://github.com/AishwariyaAI/CryptoWatch-Real-Time-Market-Sentiment-Tracker",
  },

  {
    title: "AI Medical Assistant RAG",
    tech: "LangChain, FAISS, HuggingFace, LLMs, Streamlit",
    desc: "Healthcare RAG application using document embeddings, semantic search and intelligent medical question answering.",
    status: "📈 Actively Being Developed",
    github: "https://github.com/AishwariyaAI/AI-Medical-Assistant-RAG",
  },

  {
    title: "Customer Retention Advisor",
    tech: "Python, Scikit-Learn, Pandas, Streamlit",
    desc: "Machine learning solution for customer churn prediction with complete ML lifecycle and business insights.",
    status: "💡Ongoing Development",
    github: "https://github.com/AishwariyaAI/Customer-Retention-Advisor",
  },

  {
    title: "AI Portfolio Website",
    tech: "React, Vite, TailwindCSS, Framer Motion",
    desc: "Personal AI portfolio showcasing projects, experience, technical skills, certifications and publications with modern responsive UI.",
    status: "✅ Live",
    github: "https://github.com/AishwariyaAI/AI-Portfolio",
  },
];

const Projects = () => {
  return (
    <section
      id="mywork"
      className="min-h-screen bg-slate-50 py-24 px-6"
    >
      <div className="max-w-7xl mx-auto">

        <h1 className="text-6xl font-black text-center text-slate-900">
          💡 Projects
        </h1>

        <p className="text-center text-slate-600 text-xl mt-6">
          Explore my AI, Machine Learning and Full Stack AI Projects
        </p>

        <div className="grid md:grid-cols-2 lg:grid-cols-2 gap-8 mt-20">

          {projects.map((project, index) => (
            <div
              key={index}
              className="bg-white border border-slate-200 rounded-3xl p-8 shadow-sm hover:shadow-2xl hover:-translate-y-2 transition duration-300"
            >

              <div className="text-5xl mb-6">
                🚀
              </div>

              <h2 className="text-3xl font-bold text-slate-900">
                <a
                  href={project.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-blue-600 transition"
                >
                  {project.title}
                </a>
              </h2>

              <p className="text-blue-600 font-semibold mt-4">
                {project.tech}
              </p>

              <p className="text-slate-600 mt-5 text-lg leading-relaxed">
                {project.desc}
              </p>

              <p className="text-orange-600 font-semibold mt-4">
                {project.status}
              </p>

              <div className="flex gap-4 mt-8">

                <a
                  href={project.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="bg-blue-600 text-white px-6 py-3 rounded-2xl hover:bg-blue-700 transition"
                >
                  GitHub Repo
                </a>

              </div>

            </div>
          ))}

        </div>
      </div>
    </section>
  );
};

export default Projects;