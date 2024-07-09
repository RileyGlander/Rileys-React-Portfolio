import React, { useState } from "react";

import "./Navbar.css";
import { Link, NavLink } from "react-router-dom";
import { Link as ScrollLink, animateScroll as scroll } from 'react-scroll';

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
                <li><ScrollLink to="projects" smooth={true} duration={500}>Projects</ScrollLink></li>
                <li><ScrollLink to="aboutMe" smooth={true} duration={500}>About Me</ScrollLink></li>
        <li>
          {/* <NavLink to="/contact">Contact</NavLink> */}
          <Link to="/contact">Contact</Link>
        </li>
      </ul>
    </nav>
  );
};

