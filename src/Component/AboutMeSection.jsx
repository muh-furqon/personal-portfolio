import React from "react";
import { Images } from "../assets";

const AboutMeSection = () => (
  <div
    id="about-me"
    className="section bg-cover bg-center min-h-screen"
    style={{ backgroundImage: `url(${Images.about})` }}
  >
    <div className="w-1/2 p-10 flex justify-center">
      <img
        src={Images.profile}
        alt="Profile"
        className="rounded-full shadow-lg"
      />
    </div>
    <div className="w-1/2 p-10">
      <h2 className="text-4xl text-[#1A1A1A] font-bold font-mono">About Me</h2>
      <p className="mt-4 text-base font-mono">
        My name is Furqon, and I enjoy creating experiences that bring joy to
        others. I discovered my passion for web development in 2023 during my
        first school lessons, where I learned to creatively combine templates
        to build websites. Since then, I’ve been dedicated to improving my web
        development skills, focusing on creating user-friendly and engaging
        applications.
      </p>
      <p className="mt-4 text-base font-mono">
        In 2024, I had the opportunity to intern at a{" "}
        <a
          href="https://expinc.io" // Replace this URL with the actual company's link
          target="_blank"
          rel="noopener noreferrer"
          className="text-blue-500 underline cursor-pointer"
        >
          gamification company based in the Netherlands
        </a>, which inspired me to explore game development. Currently, I’m focused on building web-based games to merge my web development expertise with interactive game design, while also learning to develop games for other platforms.
      </p>
      <p className="mt-4 text-base font-mono">
        I’ve worked extensively with <span className="font-bold">JavaScript</span>,{" "}
        <span className="font-bold">React</span>, <span className="font-bold">Node.js</span>,{" "}
        <span className="font-bold">Express.js</span>, and{" "}
        <span className="font-bold">TailwindCSS</span>. While web development
        remains my core skill, I’m expanding into game development, starting
        with web games and aiming to create on diverse platforms in the future.
      </p>
    </div>
  </div>
);

export default AboutMeSection;
