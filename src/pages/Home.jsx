import React from "react";
import "./home.css";
import { Link } from "react-router-dom"; 

function Home() {
  return (
    <>
      <div className="home_body">
        <h1>Welcome to the API Playground!</h1>
        <p>
          Explore APIs, including Fake API, Random User Generator, and Gemini
          AI!
        </p>
        <div className="cta_buttons">
          <Link to="/fake" className="cta_button">
            Explore Fake Store API
          </Link>
          <Link to="/random" className="cta_button">
            Get Random User
          </Link>
          <Link to="/gemini" className="cta_button">
            Explore Gemini AI
          </Link>
        </div>
      </div>
    </>
  );
}

export default Home;
