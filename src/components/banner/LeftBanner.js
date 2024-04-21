import React from "react";
import { useTypewriter, Cursor } from "react-simple-typewriter";
import { FaFacebookF, FaTwitter, FaReact, FaLinkedinIn } from "react-icons/fa";
import { SiTailwindcss, SiFigma, SiHtml5, SiJavascript } from "react-icons/si";

const LeftBanner=() =>{
     const [text] = useTypewriter({
    words: ["Professional Coder.", "Frontend Developer.", "UI/UX Designer."],
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

    return (
      <div className="w-1/2 flex flex-col gap-14">
        <div className="flex flex-col gap-5">
          <h4 className="text-lg font-normal">WELCOME TO MY WORLD</h4>
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
            I am a Prefinal year student with expertise in coding, frontend
            development, and UI/UX design. I deliver innovative solutions that
            prioritize functionality, aesthetics, and user satisfaction.
          </p>
        </div>
        <div className=" flex items-center space-x-6 lg:space-x-12">
          <button className="text-designColor capitalize font-semibold rounded-md outline-2 outline outline-offset- outline-designColor pt-3 pr-4 pb-3 pl-4">
            Frontend Developer
          </button>
          <button className="bg-designColor font-semibold  rounded-md outline outline-offset- outline-designColor pt-3 pr-4 pb-3 pl-4">
            UI/UX Designer
          </button>
        </div>
        <div className="bg-red -400 flex space-x-20 lg:space-x-25">
          <div>
            <h2 className="text-base uppercase font-titleFont mb-4 ">
              Find me in
            </h2>
            <div className="flex justify-between gap-4">
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
                <SiHtml5 />
              </span>
              <span className="bannerIcon">
                <SiJavascript />
              </span>
              <span className="bannerIcon">
                <FaReact />
              </span>
              <span className="bannerIcon">
                <SiFigma />
              </span>
              <span className="bannerIcon">
                <SiTailwindcss />
              </span>
            </div>
          </div>
        </div>
      </div>
    );
}

export default LeftBanner