import React from "react";
import Title from "../layouts/Title";
import {
  projectOne,
  projectTwo,
  projectThree,
  project1,
  project2,
} from "../../assets/index";
import ProjectsCard from "./ProjectsCard";

const Projects = () => {
  return (
    <section
      id="projects"
      className="w-full py-20 border-b-[1px] border-b-black"
    >
      <div className="flex justify-center items-center text-center">
        <Title
          title="VISIT MY PORTFOLIO AND KEEP YOUR FEEDBACK"
          des="My Projects"
        />
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6 xl:gap-14">
        <ProjectsCard
          title="Location Management "
          des="It is a feature-rich web application for sharing and managing location-based content using MERN Stack."
          src={project1}
          githubLink="https://github.com/Atishmita/LocationFrontend"
          websiteLink="https://locationfrontend.onrender.com/"
        />
        <ProjectsCard
          title="Fitness Website "
          des="Designed and developed a fitness website using ReactJs, integrating a shopping feature for gym-related
products, including equipment and nutritions, enhancing user convenience and engagement."
          src={project2}
          githubLink="https://github.com/Atishmita/Fitness-App"
          websiteLink="https://fitness-app-lovat-omega.vercel.app/"
        />
        <ProjectsCard
          title="Radar & Sensor Wing"
          des="Developed a responsive website for the Radar and Sensor Wing of DRDO,Chandipur using React framework. "
          src={projectOne}
          githubLink="https://github.com/Atishmita/R-S-Wing-Website"
          websiteLink="https://radarandsensor.netlify.app/"
        />
        <ProjectsCard
          title="Dashboard"
          des="Best and most modern React admin dashboard. This Admin Panel includes one Dashboard, Three Pages, Four Apps, and Seven fully functional charts."
          src={projectTwo}
          githubLink="https://github.com/Atishmita/Modern_dashboard"
          websiteLink="https://dashboard-atishmita.netlify.app"
        />

        <ProjectsCard
          title="Development of GUI for signal processing applications"
          des="Developed and implemented a Data Acquisition System for acoustic signal processing in Microsoft Visual Studio using C#."
          src={projectThree}
        />
      </div>
    </section>
  );
};

export default Projects;
