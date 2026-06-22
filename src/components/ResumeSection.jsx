import React from "react";

export default function ResumeSection() {
  return (
    <section
      id="resume"
      style={{
        padding: "70px 20px",
        background: "#0f172a",
        textAlign: "center",
      }}
    >
      <h2 style={{ fontSize: "2.3rem" }}>My Resume</h2>

      <p style={{ color: "#94a3b8", marginTop: "10px" }}>
        Download my resume to know more about my skills and experience.
      </p>

      <a
        href="/Aishwariya_A_AIML_Resume.Pdf"
        download
        style={{
          marginTop: "25px",
          display: "inline-block",
          padding: "12px 22px",
          background: "#3b82f6",
          color: "white",
          borderRadius: "8px",
          textDecoration: "none",
          fontWeight: "bold",
        }}
      >
        Download Resume
      </a>
    </section>
  );
}