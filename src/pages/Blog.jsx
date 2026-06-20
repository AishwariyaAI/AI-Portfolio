const Blog = () => {
  return (
    <div className="min-h-screen bg-slate-50 p-20">

      <h1 className="text-6xl font-black text-slate-900">
        ✍️ Blog
      </h1>

      <p className="text-xl text-slate-600 mt-4">
        My AI Learning Journey & Technical Insights
      </p>

      {/* Main Blog */}
      <div className="bg-white p-10 rounded-3xl shadow-lg mt-12">

        <h2 className="text-4xl font-bold text-slate-900">
          From Machine Learning to AI Agents
        </h2>

        <p className="mt-6 text-slate-600 leading-relaxed">
          My journey into Artificial Intelligence started with Python,
          Machine Learning, Data Science, and Deep Learning. As I explored
          advanced AI technologies, I became fascinated by Large Language
          Models (LLMs), Retrieval-Augmented Generation (RAG), and AI Agents.
        </p>

        <p className="mt-6 text-slate-600 leading-relaxed">
          During my Generative AI Internship at Evolve Robot Lab, Chennai,
          I worked on building practical AI solutions, integrating LLMs,
          designing RAG pipelines, and creating AI-powered applications
          using FastAPI and modern AI frameworks.
        </p>

        <p className="mt-6 text-slate-600 leading-relaxed">
          Currently, I am developing projects such as an AI Incident
          Investigation Agent and AI Medical Assistant RAG system while
          continuously learning LangChain, AI Agents, Deep Learning,
          Prompt Engineering, and scalable AI deployment.
        </p>

        <p className="mt-8 text-blue-600 font-semibold">
          More blogs coming soon 🚀
        </p>

      </div>

      {/* Upcoming Articles */}
      <div className="bg-white p-10 rounded-3xl shadow-lg mt-10 text-center">

        <h2 className="text-3xl font-bold text-slate-900">
          🚧 Upcoming Articles
        </h2>

        <ul className="mt-6 text-lg text-slate-700 space-y-3">
          <li>Building AI Agents with LangGraph</li>
          <li>Understanding RAG Systems</li>
          <li>FastAPI for AI Engineers</li>
          <li>Deploying LLM Applications</li>
          <li>Building Production AI Systems</li>
          <li>Prompt Engineering Best Practices</li>
          <li>Machine Learning Projects for Beginners</li>
        </ul>

        <p className="mt-8 text-blue-600 font-bold text-xl">
          Stay Tuned 🚀
        </p>

      </div>

    </div>
  );
};

export default Blog;