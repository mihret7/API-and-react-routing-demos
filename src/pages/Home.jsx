import React from 'react'
import './home.css'

function Home() {
  return (
    <>
      <div className="home_body">
        <h1>Welcome to the API Playground!</h1>
        <p>
          Explore APIs, including Fake API, Random User
          Generator, and Gemini AI!
        </p>
        <div className="cta_buttons">
          <a href="/fake" className="cta_button">
            Explore Fake Store API
          </a>
          <a href="/random" className="cta_button">
            Get Random User
          </a>
          <a href="/gemini" className="cta_button">
            Explore Gemini AI
          </a>
        </div>
      </div>
    </>
  );
}

export default Home
