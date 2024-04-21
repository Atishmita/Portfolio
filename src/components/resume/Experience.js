import React from "react";
import { motion } from "framer-motion";
import ResumeCard from "./ResumeCard";

const Experience = () => {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1, transition: { duration: 0.5 } }}
      className="w-full flex gap-20"
    >
      <div>
        <div className="py-12 font-titleFont flex flex-col gap-4">
          <h2 className="text-4xl font-bold">Experience</h2>
        </div>
        <div className="flex">
          <div className=" mt-14 w-1/2 h-[1000px] border-l-[6px] border-l-black border-opacity-30 flex flex-col gap-10 mr-20">
            <ResumeCard
              title="Frontend Developer Intern"
              subTitle="Lancyfirm"
              result="Dec 22 - Mar 23"
              des=" Contributed in the development of the frontend of the Lancyfirm official website."
            />
            <ResumeCard
              title="User Interface Desiging Intern"
              subTitle="Zopiqa"
              result="Apr 23 - Jun 23"
              des="During my internship at Zopiqa, I worked on creating user-friendly interfaces through research, prototyping, and collaboration with the design and development teams."
            />
            <ResumeCard
              title="User Interface Desiging Intern"
              subTitle="Lancyfirm"
              result="Dec 22 - Mar 23"
              des="Designed the User-friendly Lancyfirm official website from scratch trough research, prototyping and wireframing "
            />
          </div>
          <div className=" mt-14 w-1/2 h-[1000px] border-l-[6px] border-l-black border-opacity-30 flex flex-col gap-10">
            <ResumeCard
              title="User Interface Desiging Intern"
              subTitle="Graduate Us"
              result="Jan 23 - Jun 23"
              des="During my internship at Graduate Us, I worked on creating the web vesion of the official website. "
            />
            <ResumeCard
              title="Graphic Desiging Intern"
              subTitle="Wasper Tech"
              result="Sept 22 - May 23"
              des="During my internship at Wasper, I worked on creating Instagram Posters , templates etc. "
            />
            <ResumeCard
              title="Core Member"
              subTitle="Idea Innovation Cell , VSSUT Burla"
              result="jun 22 - Present"
              des="Technical team Member"
            />
          </div>
        </div>
      </div>
    </motion.div>
  );
};

export default Experience;
