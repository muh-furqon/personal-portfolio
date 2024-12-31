import React, { useState } from "react";

const experiences = [
  {
    company: "Exp Inc",
    website: "https://expinc.io/",
    role: "Full-stack Web Developer",
    startDate: "Mar 2024",
    endDate: "Dec 2024",
    details: [
      "Developed user-friendly interfaces using React and Tailwind CSS.",
      "Collaborated with backend developers to integrate APIs.",
      "Involved in 'Perspective' games that based on truth or dare.",
    ],
  },
];

const ExperienceSection = () => {
  const [selectedExperience, setSelectedExperience] = useState(experiences[0]);

  return (
    <div id="experience" className="section bg-[#F5F5F5] flex flex-col items-center justify-center py-10">
      <h2 className="text-4xl font-bold text-[#1A1A1A] font-mono mb-6">Experience</h2>
      <div className="flex flex-row w-full max-w-4xl bg-white rounded-lg shadow-lg overflow-hidden">
        {/* Sidebar */}
        <div className="w-1/3 bg-[#E5E5E5] p-6">
          <ul className="space-y-4">
            {experiences.map((exp, index) => (
              <li
                key={index}
                className={`cursor-pointer p-3 rounded-lg transition-colors ${
                  selectedExperience.company === exp.company
                    ? "bg-[#1A1A1A] text-white"
                    : "bg-transparent text-black hover:bg-[#CCCCCC]"
                }`}
                onClick={() => setSelectedExperience(exp)}
              >
                {exp.company}
              </li>
            ))}
          </ul>
        </div>

        {/* Detail Panel */}
        <div className="w-2/3 p-6">
          <h3 className="text-2xl font-bold text-black">
            {selectedExperience.role} at{" "}
            <a
              href={selectedExperience.website}
              target="_blank"
              rel="noopener noreferrer"
              className="text-blue-500 underline hover:text-blue-700"
            >
              {selectedExperience.company}
            </a>
          </h3>
          <p className="text-gray-600 mb-4">
            {selectedExperience.startDate} <span className="text-black">•</span> {selectedExperience.endDate}
          </p>
          <ul className="list-disc ml-5 space-y-2 text-gray-800">
            {selectedExperience.details.map((detail, index) => (
              <li key={index}>{detail}</li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
};

export default ExperienceSection;
