import React from "react";
import { motion } from "framer-motion";
import { Images } from "../assets";

const projects = [
  {
    title: "Tinder",
    description: "A simple website based on Tinder.",
    image: Images.tinder,
    link: "https://tinder-expincstudent-web.vercel.app/",
  },
  {
    title: "Perspective",
    description: "A fun multiplayer game that enhances your relationship with others.",
    image: Images.perspective,
    link: "https://perspective-card-student.vercel.app/",
  },
];

const Projects = () => {
  return (
    <div id="projects" className="section bg-cover bg-center flex flex-col items-center justify-center py-10" style={{ backgroundImage: `url(${Images.project})` }}>
      <h2 className="text-4xl font-bold text-[#1A1A1A] font-mono">Projects</h2>
      <p className="text-lg text-[#1A1A1A] mt-4 font-mono">Explore the projects I've participated in!</p>

      {/* Projects Container */}
      <div className="flex justify-center items-center gap-6 mt-8">
        {projects.map((project, index) => (
          <motion.div
            key={index}
            className="min-w-[300px] max-w-[400px] bg-white rounded-lg shadow-md overflow-hidden cursor-pointer transition-transform duration-300 ease-in-out"
            whileHover={{ scale: 1.05 }} // Scale effect on hover
            whileTap={{ scale: 0.95 }} // Scale effect on tap
            onClick={() => window.open(project.link, "_blank")}
          >
            <img
              src={project.image}
              alt={project.title}
              className="w-full h-48 object-cover"
            />
            <div className="p-4 text-center">
              <h3 className="text-xl font-bold text-black">{project.title}</h3>
              <p className="text-sm text-gray-700">{project.description}</p>
            </div>
          </motion.div>
        ))}
      </div>      
    </div>
  );
};

export default Projects;
