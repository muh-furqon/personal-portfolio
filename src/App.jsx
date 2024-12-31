import React from "react";
import WelcomeSection from "./Component/WelcomeSection";
import AboutMeSection from "./Component/AboutMeSection";
import ProjectsSection from "./Component/ProjectsSection";
import ExperienceSection from "./Component/ExperienceSection";
import ContactSection from "./Component/ContactSection";
import SocialMediaSidebar from "./Component/SocialMediaSidebar";
import Navbar from "./Component/Navbar";

const App = () => (
  <div>
    <Navbar />
    <SocialMediaSidebar />
    <WelcomeSection />
    <AboutMeSection />
    <ProjectsSection />
    <ExperienceSection />
    <ContactSection />
  </div>
);

export default App;
