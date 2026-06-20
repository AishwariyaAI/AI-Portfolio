const Publications = () => {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-slate-50">

      <h1 className="text-6xl font-black text-slate-900">
        📚 Publications
      </h1>

      <p className="text-2xl text-slate-600 mt-6">
        Research Publications
      </p>

      <div className="bg-white p-10 rounded-3xl shadow-lg mt-10 max-w-3xl text-center">

        <h2 className="text-3xl font-bold text-slate-900">
          🚧 Work In Progress
        </h2>

        <p className="text-slate-600 mt-6 text-lg">
          I am currently working on AI, Generative AI, Retrieval-Augmented
          Generation (RAG), AI Agents, and Machine Learning projects.
        </p>

        <p className="text-slate-600 mt-4 text-lg">
          Future publications and research papers will be published here.
        </p>

        <p className="mt-8 text-blue-600 font-bold text-xl">
          Stay Tuned 🚀
        </p>

      </div>

    </div>
  );
};

export default Publications;