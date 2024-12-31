import React, { useEffect, useRef } from "react";
import { FaArrowUp } from "react-icons/fa"; // Import top arrow icon
import './index.css'; // Ensure your TailwindCSS is imported here

const App = () => {
  const sectionsRef = useRef([]); // Array to hold references to sections
  const currentSectionRef = useRef(0); // Keep track of the current section index

  useEffect(() => {
    const handleScroll = () => {
      const scrollY = window.scrollY;
      const sectionHeight = window.innerHeight; // Height of each section
      const currentSection = Math.round(scrollY / sectionHeight);
      currentSectionRef.current = Math.min(
        Math.max(currentSection, 0),
        sectionsRef.current.length - 1
      );
      updateActiveDot();
    };

    const updateActiveDot = () => {
      const dots = document.querySelectorAll(".dot");
      dots.forEach(dot => dot.classList.remove("active"));
      if (dots[currentSectionRef.current]) {
        dots[currentSectionRef.current].classList.add("active");
      }
    };

    // Add scroll event listener
    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  return (
    <div>
      {/* Dot Indicators */}
      <div className="fixed bottom-4 right-4 z-50">
        <div className="flex flex-col space-y-2">
          {Array.from({ length: 5 }).map((_, index) => (
            <span
              key={index}
              className="dot w-3 h-3 rounded-full bg-gray-400"
            ></span>
          ))}
        </div>
      </div>

      {/* Jump to Top Button */}
      <button
        onClick={scrollToTop}
        className="fixed bottom-4 left-4 bg-blue-600 text-white p-2 rounded shadow hover:bg-blue-700 z-50"
      >
        <FaArrowUp />
      </button>

      {/* Section 1: Welcome */}
      <div
        id="welcome"
        ref={(el) => (sectionsRef.current[0] = el)}
        className="section bg-blue-600 flex flex-col items-center justify-center"
      >
        <h1 className="text-6xl font-extrabold">Hello There!</h1>
        <p className="text-3xl mt-4">
          My name is Muhammad Furqon Wahyu Sasongko, a full-stack developer.
        </p>
      </div>

      {/* Section 2: About Me */}
      <div
        id="about-me"
        ref={(el) => (sectionsRef.current[1] = el)}
        className="section bg-purple-500"
      >
        <div className="w-1/2 p-10 flex justify-center">
          <img
            src="https://via.placeholder.com/200"
            alt="Profile"
            className="rounded-full shadow-lg"
          />
        </div>
        <div className="w-1/2 p-10 text-white">
          <h2 className="text-4xl font-bold">About Me</h2>
          <p className="mt-4 text-lg">
            I am a passionate full-stack developer experienced in creating
            interactive web applications, including web games that enhance user
            engagement and real-life interactions. Proficient in React,
            JavaScript, and TailwindCSS, I focus on building user-friendly and
            engaging applications. My primary interest lies in game development
            across various platforms, where I enjoy learning of how to make
            others happy through my creations. I am always eager to learn new
            technologies and improve my skills to create better applications.
          </p>
        </div>
      </div>

      {/* Section 3: Projects */}
      <div
        id="projects"
        ref={(el) => (sectionsRef.current[2] = el)}
        className="section bg-red-500 flex flex-col items-center justify-center"
      >
        <h2 className="text-4xl font-bold text-white">Projects</h2>
        <p className="text-lg text-white mt-4">Here’s what I’ve worked on!</p>
      </div>

      {/* Section 4: Educational History */}
      <div
        id="education"
        ref={(el) => (sectionsRef.current[3] = el)}
        className="section bg-blue-500 flex flex-col items-center justify-center"
      >
        <h2 className="text-4xl font-bold text-white">Educational History</h2>
        <ul className="mt-4 text-white text-lg list-disc">
          <li>Bachelor’s in Computer Science – University of XYZ</li>
          <li>React Certification – Online Bootcamp</li>
        </ul>
      </div>

      {/* Section 5: Contact Me */}
      <div
        id="contact"
        ref={(el) => (sectionsRef.current[4] = el)}
        className="section bg-green-500 flex flex-col items-center justify-center"
      >
        <h2 className="text-4xl font-bold text-white">Contact Me</h2>
        <p className="text-lg text-white mt-4">Let's get in touch!</p>
        <a
          href="mailto:your-email@example.com"
          className="mt-4 bg-white text-green-500 px-6 py-3 rounded shadow hover:bg-green-100"
        >
          Email Me
        </a>
        <a
          href="/resume.pdf"
          target="_blank"
          className="mt-4 bg-white text-green-500 px-6 py-3 rounded shadow hover:bg-green-100"
        >
          View My Resume
        </a>
      </div>
    </div>
  );
};

export default App;
