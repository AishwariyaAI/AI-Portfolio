import React from "react";

export default function Experience() {
  return (
    <section
      style={{
        padding: "80px 20px",
        color: "#fff",
        background: "#0f172a",
      }}
    >
      <h2
        style={{
          textAlign: "center",
          fontSize: "3rem",
          marginBottom: "10px",
          fontWeight: "bold",
        }}
      >
        💼 Experience & Education
      </h2>

      <p
        style={{
          textAlign: "center",
          color: "#94a3b8",
          marginBottom: "50px",
          fontSize: "1.1rem",
        }}
      >
        Building expertise in Artificial Intelligence, Machine Learning,
        Generative AI, Linux, Databases, and Intelligent Systems through
        internships, academic projects, and continuous learning.
      </p>

      <div
        style={{
          maxWidth: "1000px",
          margin: "auto",
          display: "flex",
          flexDirection: "column",
          gap: "30px",
        }}
      >
        {/* Current Internship */}
        <div
          style={{
            background: "#111827",
            padding: "30px",
            borderRadius: "16px",
            border: "1px solid #1e293b",
          }}
        >
          <h3
            style={{
              color: "#60a5fa",
              fontSize: "1.8rem",
              marginBottom: "10px",
            }}
          >
            🚀 AI Engineer Intern
          </h3>

          <p
            style={{
              color: "#cbd5e1",
              marginBottom: "20px",
            }}
          >
            DataGen Systems Private Limited | Present
          </p>

          <ul
            style={{
              lineHeight: "1.8",
              color: "#e2e8f0",
            }}
          >
            <li>
              Developing AI-powered applications using Python, Linux, SQL, and
              modern AI technologies.
            </li>

            <li>
              Learning Linux system administration, user management, shell
              scripting, and database concepts for enterprise environments.
            </li>

            <li>
              Working with AI/ML workflows, backend development, and intelligent
              automation solutions.
            </li>

            <li>
              Collaborating with the engineering team to build scalable,
              production-ready AI applications.
            </li>

            <li>
              Continuously improving software development, problem-solving, and
              deployment skills.
            </li>
          </ul>

          <div style={{ marginTop: "20px", color: "#60a5fa" }}>
            Technologies: Python • Linux • SQL • AI/ML • FastAPI • Git
          </div>
        </div>

        {/* Previous Internship */}
        <div
          style={{
            background: "#111827",
            padding: "30px",
            borderRadius: "16px",
            border: "1px solid #1e293b",
          }}
        >
          <h3
            style={{
              color: "#a78bfa",
              fontSize: "1.8rem",
              marginBottom: "10px",
            }}
          >
            🤖 Generative AI Intern
          </h3>

          <p
            style={{
              color: "#cbd5e1",
              marginBottom: "20px",
            }}
          >
            Evolve Robot Lab, Chennai | Completed
          </p>

          <ul
            style={{
              lineHeight: "1.8",
              color: "#e2e8f0",
            }}
          >
            <li>
              Developed Generative AI applications using Large Language Models
              (LLMs).
            </li>

            <li>
              Designed Retrieval-Augmented Generation (RAG) pipelines for
              intelligent information retrieval.
            </li>

            <li>
              Worked with LangChain, Prompt Engineering, AI Agents, and LLM
              workflows.
            </li>

            <li>
              Built FastAPI-based AI applications and integrated AI models into
              scalable systems.
            </li>

            <li>
              Contributed to practical AI solutions for automation and
              intelligent decision-making.
            </li>
          </ul>

          <div style={{ marginTop: "20px", color: "#a78bfa" }}>
            Technologies: Python • FastAPI • LLMs • RAG • LangChain • AI Agents
          </div>
        </div>

        {/* Education */}
        <div
          style={{
            background: "#111827",
            padding: "30px",
            borderRadius: "16px",
            border: "1px solid #1e293b",
          }}
        >
          <h3
            style={{
              color: "#34d399",
              fontSize: "1.8rem",
              marginBottom: "10px",
            }}
          >
            🎓 B.E. Robotics and Automation
          </h3>

          <p
            style={{
              color: "#cbd5e1",
              marginBottom: "20px",
            }}
          >
            Sri Ramakrishna Engineering College, Coimbatore
          </p>

          <ul
            style={{
              lineHeight: "1.8",
              color: "#e2e8f0",
            }}
          >
            <li>
              Building strong foundations in Robotics, Automation Systems,
              Artificial Intelligence, and Intelligent Control Systems.
            </li>

            <li>
              Developed AI/ML projects including Predictive Maintenance, RAG
              Applications, AI Assistants, CryptoWatch, and DataGenie.
            </li>

            <li>
              Exploring Deep Learning, Machine Learning, NLP, Computer Vision,
              and Generative AI.
            </li>

            <li>
              Applying software engineering principles to develop real-world AI
              solutions.
            </li>
          </ul>

          <div style={{ marginTop: "20px", color: "#34d399" }}>
            Focus Areas: AI • Machine Learning • Robotics • Automation • Data
            Science
          </div>
        </div>
      </div>
    </section>
  );
}