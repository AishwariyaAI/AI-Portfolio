const Contact = () => {
  return (
    <div className="min-h-screen p-20 bg-slate-50">

      <h1 className="text-6xl font-black text-slate-900">
        📬 Get In Touch
      </h1>

      <p className="text-xl text-slate-600 mt-4">
        Open to AI/ML, Generative AI, LLM, RAG and Full Stack AI opportunities.
      </p>

      <div className="mt-12 space-y-6">

        <div className="bg-white p-6 rounded-2xl shadow-md">
          <h3 className="text-lg text-slate-500">📧 Email</h3>

          <a
            href="mailto:aishwariyaalwar@gmail.com"
            className="text-2xl font-semibold text-blue-600 hover:underline"
          >
            aishwariyaalwar@gmail.com
          </a>
        </div>

        <div className="bg-white p-6 rounded-2xl shadow-md">
          <h3 className="text-lg text-slate-500">💻 GitHub</h3>

          <a
            href="https://github.com/AishwariyaAI"
            target="_blank"
            rel="noopener noreferrer"
            className="text-2xl font-semibold text-blue-600 hover:underline"
          >
            github.com/AishwariyaAI
          </a>
        </div>

        <div className="bg-white p-6 rounded-2xl shadow-md">
          <h3 className="text-lg text-slate-500">📍 Location</h3>

          <p className="text-2xl font-semibold text-slate-800">
            Chennai, Tamil Nadu, India
          </p>
        </div>

      </div>

    </div>
  );
};

export default Contact;