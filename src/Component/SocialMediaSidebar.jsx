import React from "react";
import { FaLinkedin, FaGithub } from "react-icons/fa";

const SocialMediaSidebar = () => {
  return (
    <div className="fixed left-5 top-1/2 space-y-4 z-10"> {/* Adjust margin left */}
      <a
        href="https://linkedin.com/in/your-profile"
        target="_blank"
        rel="noopener noreferrer"
        className="flex items-center"
        title="LinkedIn"
      >
        <FaLinkedin size={24} className="hover:scale-110 transition-transform" color="#30c6a3" />
      </a>
      <a
        href="https://github.com/muh-furqon/"
        target="_blank"
        rel="noopener noreferrer"
        className="flex items-center"
        title="GitHub"
      >
        <FaGithub size={24} className="hover:scale-110 transition-transform" color="#30c6a3" />
      </a>
    </div>
  );
};

export default SocialMediaSidebar;
