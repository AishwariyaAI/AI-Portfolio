const Certifications = () => {
  return (
    <div className="min-h-screen bg-slate-50 p-20">

      <h1 className="text-6xl font-black text-slate-900">
        🏆 Certifications
      </h1>

      <p className="text-xl text-slate-600 mt-4">
        Professional certifications, internship achievements, technical training,
        and continuous learning milestones in Artificial Intelligence, Data Science,
        Analytics, and Software Development.
      </p>

      <div className="grid md:grid-cols-2 gap-8 mt-14">

        {/* Certification 1 */}
        <div className="bg-white p-8 rounded-3xl shadow-lg hover:shadow-xl transition">
          <div className="text-5xl mb-4">🤖</div>

          <h2 className="text-2xl font-bold text-slate-900">
            Generative AI Internship
          </h2>

          <p className="text-blue-600 font-semibold mt-2">
            Evolve Robot Lab, Chennai
          </p>

          <p className="text-slate-600 mt-4">
            Hands-on experience building Generative AI applications,
            RAG systems, AI Agents, LLM integrations, and FastAPI-based solutions.
          </p>
        </div>

        {/* Certification 2 */}
        <div className="bg-white p-8 rounded-3xl shadow-lg hover:shadow-xl transition">
          <div className="text-5xl mb-4">📊</div>

          <h2 className="text-2xl font-bold text-slate-900">
            Data Analytics Essentials
          </h2>

          <p className="text-blue-600 font-semibold mt-2">
            Cisco Networking Academy
          </p>

          <p className="text-slate-600 mt-4">
            Foundations of data analytics, visualization,
            data-driven decision making, and business insights.
          </p>
        </div>

        {/* Certification 3 */}
        <div className="bg-white p-8 rounded-3xl shadow-lg hover:shadow-xl transition">
          <div className="text-5xl mb-4">🐍</div>

          <h2 className="text-2xl font-bold text-slate-900">
            Data Science with Python
          </h2>

          <p className="text-blue-600 font-semibold mt-2">
            Nucot
          </p>

          <p className="text-slate-600 mt-4">
            Python programming, data analysis,
            machine learning fundamentals and practical applications.
          </p>
        </div>

        {/* Certification 4 */}
        <div className="bg-white p-8 rounded-3xl shadow-lg hover:shadow-xl transition">
          <div className="text-5xl mb-4">🗄️</div>

          <h2 className="text-2xl font-bold text-slate-900">
            SQL Intermediate
          </h2>

          <p className="text-blue-600 font-semibold mt-2">
            HackerRank
          </p>

          <p className="text-slate-600 mt-4">
            Database querying, joins, aggregations,
            subqueries, and real-world SQL problem solving.
          </p>
        </div>

        {/* Certification 5 */}
        <div className="bg-white p-8 rounded-3xl shadow-lg hover:shadow-xl transition">
          <div className="text-5xl mb-4">📈</div>

          <h2 className="text-2xl font-bold text-slate-900">
            Data Analysis with Python
          </h2>

          <p className="text-blue-600 font-semibold mt-2">
            IBM
          </p>

          <p className="text-slate-600 mt-4">
            Data cleaning, exploratory data analysis,
            visualization, and business intelligence techniques.
          </p>
        </div>

        {/* Future Certifications */}
        <div className="bg-gradient-to-r from-blue-600 to-cyan-500 text-white p-8 rounded-3xl shadow-lg">
          <div className="text-5xl mb-4">🚀</div>

          <h2 className="text-2xl font-bold">
            More Certifications Coming Soon
          </h2>

          <p className="mt-4">
            Continuously learning and earning certifications
            in AI, Machine Learning, Generative AI, Cloud,
            and Full Stack Development.
          </p>
        </div>

      </div>

    </div>
  );
};

export default Certifications;