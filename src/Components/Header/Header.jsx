import React from "react";

import "./header.css";

const Header = () => {
  return (
    <>
      <div className="header_outer_container">
        <div className="header_container">
          <div className="header_inner">
            <ul>
              <li>
                <a href="/">Home</a>
              </li>
              <li>
                <a href="/fake">Fake Store API</a>
              </li>
              <li>
                <a href="/random">Random User</a>
              </li>
              <li>
                <a href="/gemini">Gemini AI</a>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </>
  );
};

export default Header;
