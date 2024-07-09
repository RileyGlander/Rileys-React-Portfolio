import React, { useState } from "react";

import "./Navbar.css";
import { Link, NavLink } from "react-router-dom";

export const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <nav>
      <a href="/" className="title">
        Riley Glander
      </a>
      <div className="menu" onClick={() => setMenuOpen(!menuOpen)}>
      </div>
      <ul className={menuOpen ? "open" : ""}>
        <li>
          <a href="#projects">Portfolio</a>
        </li>
        <li>
          <a href="#aboutMe">About Me</a>
        </li>
        <li>
          {/* <NavLink to="/contact">Contact</NavLink> */}
          <Link to="/contact">Contact</Link>
        </li>
      </ul>
    </nav>
  );
};

