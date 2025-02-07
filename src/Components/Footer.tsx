import React from "react";
import logo from "./images/logo.png";
import playstore from "./images/playStore.png";
import appletore from "./images/AppleStore.png";

const Footer = () => {
  return (
    <div className="w-full h-[320px] bg-[#000000]">
      <div className="pt-[50px] pl-[100px] gap-[650px] flex flex-wrap">
        <div className=" flex flex-wrap gap-[15px]">
          <img src={logo} className="w-[50px] h-[50px]" alt="" />
          <p className="text-[#fff] text-[38px] font-bolder">XittooFood</p>
        </div>
        <div className="pt-[10px] text-[18px] text-[#fff] gap-[70px] flex flex-wrap">
          <p>Add Your Restaurant</p>
          <p>Nearby Restaurants</p>
        </div>
      </div>
      <div className="mt-[15px] flex flex-wrap">
        <div className="flex flex-wrap ml-[180px] gap-[20px]">
          <img
            src={playstore}
            className="w-[170px] h-[55px] cursor-pointer"
            alt=""
          />
          <img
            src={appletore}
            className="w-[170px] h-[55px] cursor-pointer"
            alt=""
          />
        </div>
        <div className="pt-[10px] text-[18px] text-[#fff] ml-[740px] flex flex-wrap">
          <p>View All Cities</p>
        </div>
        <div className="h-[1px] w-[1350px] bg-[#fff] ml-[80px] mt-[60px]"></div>
        <div className="relative ml-[1110px] mt-[20px] text-[14px] text-[#fff] flex flex-wrap gap-[70px]">
          <p>Terms & Conditions</p>
          <p>Privacy Policy</p>
        </div>
        <div className="ml-[650px] mt-[25px] text-[12px] text-[#fff]">
          ©2024 Emerge Infosys Pvt. Ltd. All rights reserved
        </div>
      </div>
    </div>
  );
};

export default Footer;
