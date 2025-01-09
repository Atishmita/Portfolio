import React from "react";
import { bannerImage } from "../../assets/index";


const RightBanner = () =>{
    return (
      <div className="lgl:w-1/2 flex justify-center items-center relative  bottom-0 left-0 w-full h-full z-0">
        <img className="w-[300px] h-[400px] lgl:w-[380px] lgl:h-[520px] z-10" src={bannerImage} alt="" />
        <div className="absolute bottom-0 w-[350px] h-[300px] lgl:w-[500px] lgl:h-[500px] bg-gradient-to-r from-[#1e2024] to-[#202327] shadow-shadowOne flex justify-center items-center"></div>
      </div>
    );
}

export default RightBanner