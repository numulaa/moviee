import React from "react";
import "../styles/Header.css";

const Header = () => {
  return (
    <header>
      <nav>
        <h1>Moviee</h1>
        <ul>
          {/* <li>My Movie</li> */}
          <li>
            <i className="fa-solid fa-user"></i>
          </li>
          <li>
            <i className="fa-solid fa-right-from-bracket"></i>
          </li>
        </ul>
      </nav>
    </header>
  );
};

export default Header;
