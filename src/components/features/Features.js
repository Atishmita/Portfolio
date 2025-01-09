import React from "react";
import Title from "../layouts/Title";
import Card from "./Card";
import { FaGlobe } from "react-icons/fa";
import { SiAntdesign, SiCodingninjas, SiTaichigraphics } from "react-icons/si";

const Features = () => {
  const handleWebDevelopmentClick = () => {
    const projectSection = document.getElementById("projects");
    if (projectSection) {
      projectSection.scrollIntoView({ behavior: "smooth" });
    }
  };
  return (
    <section
      id="features"
      className="w-full py-20 border-b-[1px] border-b-black"
    >
      <Title title="Features" des="What I Do" />
      <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6 xl:gap-20">
        {" "}
        <Card
          title="Web Development"
          des="Expert in Building Dynamic and Responsive Web Applications with the MERN Stack."
          icon={<FaGlobe />}
          onClick={handleWebDevelopmentClick}
        />
        <Card
          title="Competitive Coding"
          des="Skilled in algorithmic problem-solving and competitive coding. Passionate about continuous learning and mastering coding challenges."
          icon={<SiCodingninjas />}
          onClick={() =>
            window.open("https://leetcode.com/u/Atishmita_Dash/", "_blank")
          }
        />
        <Card
          title="UI/UX Designing"
          des="Passionate about creating intuitive and engaging user interfaces. Skilled in wireframing, prototyping, and user-centric design."
          icon={<SiAntdesign />}
          onClick={() =>
            window.open("https://www.behance.net/atishmitadash1", "_blank")
          }
        />
        
      </div>
    </section>
  );
};

export default Features;
