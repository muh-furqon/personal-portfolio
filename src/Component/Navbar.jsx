import React from "react";
import { Link } from "react-scroll";

const Navbar = () => {
  return (
    <nav className="fixed top-0 left-0 right-0 bg-[#1A1A1A] bg-opacity-70 backdrop-blur-lg p-4 z-20 text-[#30c6a3] font-mono">
      <ul className="flex justify-center space-x-6">
        <li>
          <Link to="welcome" smooth={true} duration={500}>Welcome</Link>
        </li>
        <li>
          <Link to="about-me" smooth={true} duration={500}>About Me</Link>
        </li>
        <li>
          <Link to="projects" smooth={true} duration={500}>Projects</Link>
        </li>
        <li>
          <Link to="education" smooth={true} duration={500}>Education</Link>
        </li>
        <li>
          <Link to="contact" smooth={true} duration={500}>Contact</Link>
        </li>
      </ul>
    </nav>
  );
};

export default Navbar;
