import React from "react";
import { motion } from "framer-motion";
import ResumeCard from "./ResumeCard";

const Achievements = () => {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1, transition: { duration: 0.5 } }}
      className="w-full lgl:flex-row gap-20"
    >
      <div>
        <div className=" mt-14 w-full h-[800px] border-l-[6px] border-l-black border-opacity-30 flex flex-col gap-10">
          <ResumeCard
            title="Coding Ninjas Codekaze 24"
            subTitle="Secured a rank of AIR 64 in Coding Ninjas Codekaze 24"
            result="AIR 64"
            des=" Solved 5 out of 6 coding questions in Java and also received some cool goodies."
          />
          <ResumeCard
            title="Leetcode"
            subTitle="Solved 300+ DSA questions on Leetcode"
            result="300+"
            des="I have solved DSA questions in Java and Python, as well as SQL queries."
          />
          <ResumeCard
            title="Technical Lead"
            subTitle="Idea and Innovation Club, VSSUT"
            result="IIC"
            des="I am the official Technical Lead of the IIC, VSSUT"
          />
        </div>
      </div>
    </motion.div>
  );
};

export default Achievements;
