import React from "react";
import { FaFacebook, FaTwitter, FaLinkedin } from "react-icons/fa";
import { contactImg } from "../../assets/index";

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
const ContactLeft = () => {
  return (
    <div className="w-1/3 lgl:w-[35%] h-full bg-gradient-to-r from-[#1e2024] to-[#23272b] p-4 lgl:p-8 rounded-lg shadow-shadowOne flex flex-col gap-12 justify-center">
      <img
        className="w-full h-64 object-cover rounded-lg mb-2"
        src={contactImg}
        alt="contactImg"
      />
      <div className="flex flex-col gap-4">
        <h3 className="text-3xl font-bold text-white">Atishmita Dash</h3>
        <p className="text-lg font-normal text-gray-400">Web Developer</p>
        <p className="text-base text-gray-400 tracking-wide">
          Prefinal year student with expertise in frontend development,
          competitive programming, UI/UX design, and graphic designing. Eager to
          contribute and learn in innovative projects.
        </p>
        <p className="text-base text-gray-400 flex items-center gap-2">
          Phone: <span className="text-lightText">+91 7681099969</span>
        </p>
        <p className="text-base text-gray-400 flex items-center gap-2">
          Email: <span className="text-lightText">dashatishmita@gmail.com</span>
        </p>
      </div>
      <div className="flex flex-col gap-4">
        <h2 className="text-base uppercase font-titleFont mb-4">Find me in</h2>
        <div className="flex gap-4">
          <span className="bannerIcon" onClick={handleClickFacebook}>
            <FaFacebook />
          </span>
          <span className="bannerIcon" onClick={handleClickTwitter}>
            <FaTwitter />
          </span>
          <span className="bannerIcon" onClick={handleClickLinkedIn}>
            <FaLinkedin />
          </span>
        </div>
      </div>
    </div>
  );
};

export default ContactLeft;
