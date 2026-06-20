const TechStack = () => {
  return (
    <div className="min-h-screen bg-slate-50 p-10">

      <h1 className="text-5xl font-black text-center text-slate-900">
        💻 Technical Skills
      </h1>

      <p className="text-center text-slate-600 mt-4 mb-12">
        Core technologies, AI/ML expertise, development tools and frameworks
        used in building intelligent applications.
      </p>

      <div className="grid md:grid-cols-2 gap-8 max-w-6xl mx-auto">

        {/* AI & ML */}
        <div className="bg-white p-8 rounded-2xl shadow">
          <h2 className="text-2xl font-bold mb-4">
            🤖 AI & Machine Learning
          </h2>

          <ul className="space-y-2 text-slate-700">
            <li>Machine Learning</li>
            <li>Deep Learning</li>
            <li>Artificial Intelligence</li>
            <li>Predictive Analytics</li>
            <li>Feature Engineering</li>
            <li>Computer Vision</li>
          </ul>
        </div>

        {/* GenAI */}
        <div className="bg-white p-8 rounded-2xl shadow">
          <h2 className="text-2xl font-bold mb-4">
            🚀 Generative AI
          </h2>

          <ul className="space-y-2 text-slate-700">
            <li>Generative AI</li>
            <li>Large Language Models (LLMs)</li>
            <li>Prompt Engineering</li>
            <li>RAG</li>
            <li>AI Agents</li>
            <li>LangChain</li>
            <li>LangGraph</li>
            <li>Hugging Face</li>
          </ul>
        </div>

        {/* Programming */}
        <div className="bg-white p-8 rounded-2xl shadow">
          <h2 className="text-2xl font-bold mb-4">
            💻 Programming
          </h2>

          <ul className="space-y-2 text-slate-700">
            <li>Python</li>
            <li>SQL</li>
            <li>JavaScript</li>
            <li>Git</li>
            <li>GitHub</li>
          </ul>
        </div>

        {/* Backend */}
        <div className="bg-white p-8 rounded-2xl shadow">
          <h2 className="text-2xl font-bold mb-4">
            ⚡ Backend Development
          </h2>

          <ul className="space-y-2 text-slate-700">
            <li>FastAPI</li>
            <li>REST APIs</li>
            <li>JWT Authentication</li>
            <li>API Integration</li>
          </ul>
        </div>

        {/* Data Science */}
        <div className="bg-white p-8 rounded-2xl shadow">
          <h2 className="text-2xl font-bold mb-4">
            📊 Data Science
          </h2>

          <ul className="space-y-2 text-slate-700">
            <li>Pandas</li>
            <li>NumPy</li>
            <li>Scikit-Learn</li>
            <li>Data Analysis</li>
            <li>Data Visualization</li>
          </ul>
        </div>

        {/* Cloud */}
        <div className="bg-white p-8 rounded-2xl shadow">
          <h2 className="text-2xl font-bold mb-4">
            ☁️ Databases & Cloud
          </h2>

          <ul className="space-y-2 text-slate-700">
            <li>SQLite</li>
            <li>PostgreSQL</li>
            <li>AWS</li>
            <li>Docker</li>
          </ul>
        </div>

      </div>
    </div>
  );
};

export default TechStack;