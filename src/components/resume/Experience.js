import React from "react";
import { motion } from "framer-motion";
import ResumeCard from "./ResumeCard";

const Experience = () => {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1, transition: { duration: 0.5 } }}
      className="w-full flex flex-col lg:flex-row gap-6 lg:gap-20"
    >
      <div className="w-full lg:w-1/2">
        <div className="py-12 font-titleFont flex flex-col gap-4">
          <h2 className="text-4xl font-bold">Experience</h2>
        </div>
        <div className="mt-14 border-l-[6px] border-l-black border-opacity-30 flex flex-col gap-10">
          <ResumeCard
            title="Summer Intern"
            subTitle="DRDO,Chandipur Balasore"
            result="May 24 - June 24"
            des="Contributed in the development of GUI for signal processing applications and developed a responsive website for the Radar and Sensor Wing of DRDO using react framework."
          />
          <ResumeCard
            title="Frontend Developer Intern"
            subTitle="Lancyfirm"
            result="Dec 22 - Mar 23"
            des="Contributed in the development of the frontend of the Lancyfirm official website."
          />
          <ResumeCard
            title="User Interface Designing Intern"
            subTitle="Zopiqa"
            result="Apr 23 - Jun 23"
            des="During my internship at Zopiqa, I worked on creating user-friendly interfaces through research, prototyping, and collaboration with the design and development teams."
          />
        </div>
      </div>
      <div className="w-full lg:w-1/2">
        <div className="mt-14 border-l-[6px] border-l-black border-opacity-30 flex flex-col gap-10">
          <ResumeCard
            title="User Interface Designing Intern"
            subTitle="Graduate Us"
            result="Jan 23 - Jun 23"
            des="During my internship at Graduate Us, I worked on creating the web version of the official website."
          />
          <ResumeCard
            title="Graphic Designing Intern"
            subTitle="Wasper Tech"
            result="Sept 22 - May 23"
            des="During my internship at Wasper, I worked on creating Instagram Posters, templates, etc."
          />
          <ResumeCard
            title="Core Member"
            subTitle="Idea Innovation Cell , VSSUT Burla"
            result="Jun 22 - Present"
            des="Technical team Member"
          />
        </div>
      </div>
    </motion.div>
  );
};

export default Experience;
