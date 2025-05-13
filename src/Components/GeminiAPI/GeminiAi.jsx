import React, { useState } from "react";
import { GoogleGenAI } from "@google/genai";
import "./geminiAi.css";

const API_KEY = import.meta.env.VITE_GEMINI_API_KEY;
const ai = new GoogleGenAI(
  {apiKey: 
    `${API_KEY}`,
  }
);

const formatResponse = (text) => {
  if (!text) return "";

  text = text.replace(/\*\*(.*?)\*\*/g, "<strong>$1</strong>");
  const lines = text.split("\n");

  let html = "";
  let inList = false;

  lines.forEach((line) => {
    const trimmed = line.trim();
    if (trimmed.startsWith("*")) {
      if (!inList) {
        html += "<ul>";
        inList = true;
      }
      html += `<li>${trimmed.substring(1).trim()}</li>`;
    } else {
      if (inList) {
        html += "</ul>";
        inList = false;
      }
      if (trimmed.length > 0) {
        html += `<p>${trimmed}</p>`;
      }
    }
  });

  if (inList) {
    html += "</ul>";
  }

  return html;
};

function AskAI() {

  const [question, setQuestion] = useState("");
  const [answer, setAnswer] = useState("");
  const [loading, setLoading] = useState(false);


  const handleAsk = async () => {
    if (!question.trim()) return;

    setLoading(true);
    try {
      const response = await ai.models.generateContent(
        {
        model: "gemini-2.0-flash",
        contents: question,
      }
      );
      const unFormatted = response.text;
      const formatted = formatResponse(response.text);


      setAnswer(formatted);


    } catch (error) {
      console.error("Error:", error);
      setAnswer("<p>Something went wrong. Please try again!</p>");
    }
    setLoading(false);
  };

  return (
    <div className="askai-container">
      <h2>Hey, ask me anything ...</h2>
      <textarea
        className="askai-textarea"
        value={question}
        onChange={(e) => setQuestion(e.target.value)}
        placeholder="Type your question..."
        rows="4"
      ></textarea>
      <br />
      <button className="askai-button" onClick={handleAsk} disabled={loading}>
        {loading ? "Loading..." : "Ask"}
      </button>

      <div className="askai-answer-container">
        {answer && (
          <div
            className="askai-answer"
            dangerouslySetInnerHTML={{ __html: answer }}
          />
        )}
      </div>
    </div>
  );
}

export default AskAI;
