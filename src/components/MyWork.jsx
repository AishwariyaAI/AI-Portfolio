import React from "react";

export default function MyWork() {
  return (
    <section
      id="mywork"
      style={{
        padding: "80px 20px",
        background: "#0b1220",
        color: "white",
      }}
    >
      <h2
        style={{
          textAlign: "center",
          fontSize: "2.8rem",
          fontWeight: "bold",
        }}
      >
        🚀 Currently Working On
      </h2>

      <p
        style={{
          textAlign: "center",
          color: "#94a3b8",
          marginTop: "10px",
          marginBottom: "50px",
        }}
      >
        My current AI, Machine Learning and Generative AI projects
      </p>

      <div
        style={{
          display: "flex",
          gap: "25px",
          flexWrap: "wrap",
          justifyContent: "center",
        }}
      >
        <div style={card}>
          <h3>🤖 AI Agents</h3>
          <p>
            Building Agentic AI workflows using LangGraph, LLMs and
            autonomous decision-making systems.
          </p>
        </div>

        <div style={card}>
          <h3>🚨 AI Incident Investigation Agent</h3>
          <p>
            Real-time anomaly detection, root cause analysis,
            predictive maintenance and incident monitoring using FastAPI.
          </p>
        </div>

        <div style={card}>
          <h3>🏥 AI Medical Assistant RAG</h3>
          <p>
            Healthcare Retrieval-Augmented Generation system using
            LangChain, HuggingFace and FAISS vector search.
          </p>
        </div>

        <div style={card}>
          <h3>📊 Customer Retention Advisor</h3>
          <p>
            Machine learning solution for customer churn prediction,
            retention analytics and business insights.
          </p>
        </div>
      </div>
    </section>
  );
}

const card = {
  width: "320px",
  background: "#111827",
  padding: "24px",
  borderRadius: "16px",
  border: "1px solid #1e293b",
  boxShadow: "0 4px 12px rgba(0,0,0,0.3)",
};