import React from "react";
import { motion } from "framer-motion";
import ResumeCard from "./ResumeCard";

const Education = () => {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1, transition: { duration: 0.5 } }}
      className="w-full flex flex-col lgl:flex-row gap-20"
    >
      <div>
        <div className="py-12 font-titleFont flex flex-col gap-4">
          <p className="text-sm text-designColor tracking-[4px]">2021-2025</p>
          <h2 className="text-4xl font-bold">Education Quality</h2>
        </div>
        <div className=" mt-14 w-full h-[1000px] border-l-[6px] border-l-black border-opacity-30 flex flex-col gap-10">
          <ResumeCard
            title="Btech in Computer Science and Engineering"
            subTitle="Veer Surrendra Sai University Of Technology (2021-2025)"
            result="8.83/10"
            des=" Basic focus on algorithms, software development, and system optimization. Actively engaged in hands-on projects and workshops to enhance practical skills and stay updated with the latest industry trends."   />
          <ResumeCard
            title="Higher Secondary School of Education"
            subTitle="Kendriya Vidyalaya Khurda Road"
            result="92.4/100"
            des="Focused on mathematics, physics, and computer science, fostering critical thinking and problem-solving skills. Engaged in coding competitions and science fairs, igniting a passion for technology and innovation." />
          <ResumeCard
            title="Secondary School of Education"
            subTitle="Kendriya Vidyalaya Khurda Road"
            result="98.2/100"
            des="I cultivated a strong academic foundation across various subjects, including mathematics, science, and computer studies. This period honed my analytical thinking and problem-solving abilities."    />
        </div>
      </div>
    </motion.div>
  );
};

export default Education;
