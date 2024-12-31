import React from "react";
import WelcomeSection from "./Component/WelcomeSection";
import AboutMeSection from "./Component/AboutMeSection";
import ProjectsSection from "./Component/ProjectsSection";
import EducationSection from "./Component/EducationSection";
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
    <EducationSection />
    <ContactSection />
  </div>
);

export default App;
