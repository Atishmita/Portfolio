import React from "react";
import { bannerImage } from "../../assets/index";


const RightBanner = () =>{
    return (
      <div className="w-1/2 flex justify-center items-center relative absolute bottom-0 left-0 w-full h-full z-0">
        <img className="w-[400px] h-[540px] z-10" src={bannerImage} alt="" />
        <div className="absolute bottom-0 w-[500px] h-[500px] bg-gradient-to-r from-[#1e2024] to-[#202327] shadow-shadowOne flex justify-center items-center"></div>
      </div>
    );
}

export default RightBanner