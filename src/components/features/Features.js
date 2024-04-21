import React from "react";
import Title from "../layouts/Title";
import Card from "./Card";
import { FaGlobe } from "react-icons/fa";
import { SiAntdesign, SiCodingninjas, SiTaichigraphics } from "react-icons/si";

const Features = () => {
  return (
    <section
      id="features"
      className="w-full py-20 border-b-[1px] border-b-black"
    >
      <Title title="Features" des="What I Do" />
      <div className="grid grid-cols-3 gap-20">
        {" "}
        <Card
          title="Web Development"
          des="Expert in building dynamic and responsive websites with HTML, CSS, JavaScript, and frameworks. Passionate about creating seamless user experiences. "
          icon={<FaGlobe />}
        />
        <Card
          title="Compititive Coding"
          des="Skilled in algorithmic problem-solving and competitive coding. Passionate about continuous learning and mastering coding challenges."
          icon={<SiCodingninjas />}
        />{" "}
        <Card
          title="UI/UX Designer"
          des="Passionate about creating intuitive and engaging user interfaces. Skilled in wireframing, prototyping, and user-centric design."
          icon={<SiAntdesign />}
        />
        <Card
          title="Graphic Designer"
          des="Proficient in Photoshop and Illustrator for captivating designs. Experienced in logos, branding, and print materials."
          icon={<SiTaichigraphics />}
        />
      </div>
    </section>
  );
};

export default Features;
