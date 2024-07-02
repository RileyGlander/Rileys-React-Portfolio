import React, { useState } from "react";

import "./Navbar.css";
import { Link, NavLink } from "react-router-dom";

export const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <nav>
      <Link to="/" className="title">
        Riley Glander
      </Link>
      <div className="menu" onClick={() => setMenuOpen(!menuOpen)}>
      </div>
      <ul className={menuOpen ? "open" : ""}>
        <li>
          <NavLink to="#portfolio">Portfolio</NavLink>
        </li>
        <li>
          <NavLink to="#about-me">About Me</NavLink>
        </li>
        <li>
          <NavLink to="#contact">Contact</NavLink>
        </li>
      </ul>
    </nav>
  );
};

