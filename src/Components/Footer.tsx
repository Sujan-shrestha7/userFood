import React from "react";
import logo from "./images/logo.png";
import playstore from "./images/playStore.png";
import appletore from "./images/AppleStore.png";
import './footer.css';


const Footer = () => {
  return (
    <div className="footer w-full h-[320px] bg-[#000000]">
      <div className="xittooFood-logo pt-[50px] pl-[100px] gap-[650px] flex flex-wrap">
        <div className=" flex flex-wrap gap-[15px]">
          <img src={logo} className="logo w-[50px] h-[50px]" alt="" />
          <p className="xitto-text text-[#fff] text-[38px] font-bolder">XittooFood</p>
        </div>
        <div className="add-nearby pt-[10px] text-[18px] text-[#fff] gap-[70px] flex flex-wrap">
          <p>Add Your Restaurant</p>
          <p>Nearby Restaurants</p>
        </div>
      </div>
      <div className="visit-more mt-[15px] flex flex-wrap">
        <div className="store-app flex flex-wrap ml-[180px] gap-[20px]">
          <img
            src={playstore}
            className="store-img w-[170px] h-[55px] cursor-pointer"
            alt=""
          />
          <img
            src={appletore}
            className=" store-img w-[170px] h-[55px] cursor-pointer"
            alt=""
          />
        </div>
        <div className="view-cities mt-[-15px] text-[18px] text-[#fff] ml-[740px] flex flex-wrap">
          <p>View All Cities</p>
        </div>
        {/* divider */}
        <div className="divider-line h-[1px] w-[90%] bg-[#fff] ml-[5%] mt-[60px]"></div>
        <div className="termss">
        <div className="view-terms relative ml-[1110px] mt-[20px] text-[14px] text-[#fff] flex flex-wrap gap-[70px]">
          <p>Terms & Conditions</p>
          <p>Privacy Policy</p>
        </div>
        <div className="copyright ml-[40%] mt-[25px] text-[12px] text-[#fff]">
          ©2024 Xittoo Tech All rights reserved
        </div>
      </div>
      </div>
    </div>
  );
};

export default Footer;
