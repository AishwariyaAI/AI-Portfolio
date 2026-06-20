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
        Generative AI, and Intelligent Systems through internships,
        academic projects, and continuous learning.
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
        {/* Internship */}
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
            🤖 Generative AI Intern
          </h3>

          <p
            style={{
              color: "#cbd5e1",
              marginBottom: "20px",
            }}
          >
            Evolve Robot Lab, Chennai | Present
          </p>

          <ul
            style={{
              lineHeight: "1.8",
              color: "#e2e8f0",
            }}
          >
            <li>
              Working on real-world Generative AI applications using
              Large Language Models (LLMs).
            </li>

            <li>
              Designing Retrieval-Augmented Generation (RAG)
              pipelines for intelligent information retrieval.
            </li>

            <li>
              Exploring AI Agents, LangChain, Prompt Engineering,
              and advanced AI workflows.
            </li>

            <li>
              Building FastAPI-based AI applications and integrating
              AI models into scalable systems.
            </li>

            <li>
              Collaborating on practical AI solutions for
              automation and intelligent decision-making.
            </li>
          </ul>

          <div style={{ marginTop: "20px", color: "#60a5fa" }}>
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
              Developing strong foundations in Robotics,
              Automation Systems, Artificial Intelligence,
              and Intelligent Control Systems.
            </li>

            <li>
              Built multiple AI/ML projects including
              Predictive Maintenance, RAG Applications,
              AI Assistants, and Monitoring Systems.
            </li>

            <li>
              Exploring Deep Learning, Computer Vision,
              Machine Learning, and Generative AI.
            </li>

            <li>
              Applying software engineering principles
              to develop real-world AI solutions.
            </li>
          </ul>

          <div style={{ marginTop: "20px", color: "#34d399" }}>
            Focus Areas: AI • Machine Learning • Robotics • Automation • Data Science
          </div>
        </div>
      </div>
    </section>
  );
}