import React, { useState } from "react";
import { useTypewriter, Cursor } from "react-simple-typewriter";
import {
  FaFacebookF,
  FaTwitter,
  FaReact,
  FaLinkedinIn,
  FaNodeJs,
} from "react-icons/fa";
import { SiMongodb, SiFigma, SiJavascript } from "react-icons/si";
import { navLinksdata } from "../../constants";
import { Link } from "react-scroll";

const LeftBanner=() =>{
     const [text] = useTypewriter({
    words: ["Competitive Programmer.", "MERN Developer.", "UI/UX Designer."],
    Loop: true,
    typeSpeed: 20,
    deleteSpeed: 10,
    delaySpeed: 2000,
  });

  const handleClickFacebook = () => {
    window.open(
      "https://www.facebook.com/profile.php?id=100073188185590",
      "_blank"
    );
  };

  const handleClickTwitter = () => {
    window.open("https://twitter.com/home", "_blank");
  };

  const handleClickLinkedIn = () => {
    window.open(
      "https://www.linkedin.com/in/atishmita-dash-503b12223/",
      "_blank"
    );
  };
    const handleClickUXDesigner = () => {
      window.open("https://www.behance.net/atishmitadash1", "_blank");
    };
    
  const [showMenu, setShowMenu] = useState(false);

    return (
      <div className="w-full lgl:w-1/2 flex flex-col gap-14">
        <div className="flex flex-col gap-5">
          <h4 className="text-lg pt-3 pb-3 font-normal">WELCOME TO MY WORLD</h4>
          <h1 className="text-5xl font-bold text-white">
            Hi, I'm
            <span className="text-designColor capitalize"> Atishmita Dash</span>
          </h1>
          <h2 className="text-3xl font-bold text-white">
            a <span>{text}</span>
            <Cursor
              cursorBlinking="false"
              cursorStyle="|"
              cursorColor="#ff014f"
            />
          </h2>
          <p className="text-base font-bodyFont leading-6 tracking-wide">
            I am a Final year student with expertise in coding, MERN Stack
            development, and UI/UX designing. I deliver innovative solutions
            that prioritize functionality, aesthetics, and user satisfaction.
          </p>
        </div>
        <div className=" flex items-center space-x-6 lg:space-x-12">
          {navLinksdata.map((item) =>
            item.link === "projects" ? (
              <button
                key={item.id}
                className="bg-designColor font-semibold  rounded-md outline outline-offset- outline-designColor pt-3 pr-4 pb-3 pl-4"
              >
                <Link
                  onClick={() => setShowMenu(false)}
                  activeClass="active"
                  to={item.link}
                  spy={true}
                  smooth={true}
                  offset={-70}
                  duration={500}
                >
                  Web Development
                </Link>
              </button>
            ) : null
          )}
          <button
            className="text-designColor capitalize font-semibold rounded-md outline-2 outline outline-offset- outline-designColor pt-3 pr-4 pb-3 pl-4"
            onClick={handleClickUXDesigner}
          >
            UI/UX Designing
          </button>
        </div>
        <div className="bg-red -400 flex flex-col xl:flex-row gap-6 lgl:gap-0 ">
          <div>
            <h2 className="text-base uppercase font-titleFont mb-4 ">
              Find me in
            </h2>
            <div className="flex gap-4 mr-12">
              <span className="bannerIcon" onClick={handleClickFacebook}>
                <FaFacebookF />
              </span>
              <span className="bannerIcon" onClick={handleClickTwitter}>
                <FaTwitter />
              </span>
              <span className="bannerIcon" onClick={handleClickLinkedIn}>
                <FaLinkedinIn />
              </span>
            </div>
          </div>
          <div>
            <h2 className="text-base uppercase font-titleFont mb-4">
              BEST SKILL ON
            </h2>
            <div className="flex gap-4">
              <span className="bannerIcon">
                <FaReact />
              </span>
              <span className="bannerIcon">
                <FaNodeJs />
              </span>
              <span className="bannerIcon">
                <SiJavascript />
              </span>
              <span className="bannerIcon">
                <SiMongodb />
              </span>
              <span className="bannerIcon">
                <SiFigma />
              </span>
            </div>
          </div>
        </div>
      </div>
    );
}

export default LeftBanner