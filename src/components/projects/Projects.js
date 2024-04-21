import React from "react";
import Title from "../layouts/Title";
import { projectOne, projectTwo, projectThree } from "../../assets/index";
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
      <div className="grid grid-cols-3 gap-14">
        <ProjectsCard
          title="Dashboard"
          des="Best and most modern React admin dashboard. This Admin Panel includes one Dashboard, Three Pages, Four Apps, and Seven fully functional charts."
          src={projectOne}
          githubLink="https://github.com/Atishmita/Modern_dashboard"
          websiteLink="https://dashboard-atishmita.netlify.app"
        />
        <ProjectsCard
          title="xyz"
          des="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam "
          src={projectTwo}
        />
        <ProjectsCard
          title="xyz"
          des="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam "
          src={projectThree}
        />
      </div>
    </section>
  );
};

export default Projects;
