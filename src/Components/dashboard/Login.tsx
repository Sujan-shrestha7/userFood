import React from "react";
import Navbar from "../Navbar";
import homeImg from "../images/homeImg.png";
import search from "../images/search.png";
import download from "../images/download.png";
import food from "../images/food.png";
import icon from "../images/ricon.png";
import bgimg from "../images/bgimg.png";
import PlayStore from "../images/playStore.png";
import AppleStore from "../images/AppleStore.png";
import fastService from "../images/fastService.png";
import liveTrack from "../images/livetrack.png";
import mblApp from "../images/mblApp.png";
import backMblApp from "../images/backmblApp.png";
import discount from "../images/discount.png";
import Footer from "../Footer";

const Login = () => {
  return (
    <div>
      <Navbar />
      <div className="flex flex-wrap items-center justify-center">
        <div className="mb-[60px]  ml-[110px]">
          <h1 className="question">Are You Hungry ?</h1>
          <div className="w-[620px] h-[120px] flex flex-wrap gap-[20px] items-center justify-center mt-[30px] bg-[#fff] rounded-[10px] shadow-lg">
            <div className="relative flex items-center justify-center">
              <input
                type="text"
                className="h-[35px] w-[170px] bg-[#E5E1E1] pl-[30px] rounded-[5px] border-none"
                placeholder="Location..."
              />
              <img
                src={download}
                className="absolute left-[5px] h-[20px] w-[20px] z-10"
                alt=""
              />
            </div>
            <div className="relative flex items-center justify-center">
              <input
                type="text"
                className="h-[35px] w-[220px] bg-[#E5E1E1] pl-[30px] rounded-[5px] border-none"
                placeholder="Search for restaurants, food"
              />
              <img
                src={search}
                className="absolute ml-[5px] left-[5px] h-[13px] w-[13px] z-10"
                alt=""
              />
            </div>

            <div>
              <button className="h-[35px] w-[120px] border-none bg-[#FC6E4F] text-[#fff] text-[15px] rounded-[5px] cursor-pointer">
                Search
              </button>
            </div>
          </div>
        </div>
        <div>
          <img src={homeImg} className="w-[710px] h-[580px]" alt="" />
        </div>
      </div>

      <div className="w-full h-[650px] bg-[#F9F9F9] relative">
        <div>
          <p className="popularitem absolute top-[10%] left-[43%] text-center text-[36px]">
            Popular Items
          </p>
        </div>

        <div className="pt-[160px] pl-[160px] flex flex-wrap gap-[25px]">
          <div className="cursor-pointer">
            <div className="h-[250px] w-[280px] bg-[#000000] rounded-[30px] relative border-none overflow-hidden">
              <div className="absolute h-[70px] w-[100px] top-[180px] text-[#fff] bg-[#FCCD23] text-[25px] font-bold px-3 py-1 rounded-tr-[30px]">
                <div className="flex mt-[15px] ml-[10px]">
                  <p className="text-[36px] font-bold">15</p>
                  <p>
                    % <p className="text-[18px]">Off</p>
                  </p>
                </div>
              </div>
              <img
                src={food}
                className="h-full w-full object-cover"
                alt="Food"
              />
            </div>
            <p className="HomefoodName text-[22px] pl-[35px] pt-[15px]">
              Pizza
            </p>
            <p className="OfferTime w-[180px] h-[35px] bg-[#FFE6D9] text-[#F17228] text-center ml-[30px] mt-[15px] pt-[5px] rounded-[8px] shadow-lg">
              8 days remaining
            </p>
          </div>

          <div className="cursor-pointer">
            <div className="h-[250px] w-[280px] bg-[#000000] rounded-[30px] relative border-none overflow-hidden">
              <div className="absolute h-[70px] w-[100px] top-[180px] text-[#fff] bg-[#FCCD23] text-[25px] font-bold px-3 py-1 rounded-tr-[30px]">
                <div className="flex mt-[15px] ml-[10px]">
                  <p className="text-[36px] font-bold">20</p>
                  <p>
                    % <p className="text-[18px]">Off</p>
                  </p>
                </div>
              </div>
              <img
                src={food}
                className="h-full w-full object-cover"
                alt="Food"
              />
            </div>
            <p className="HomefoodName text-[22px] pl-[35px] pt-[15px]">
              Mo Mo
            </p>
            <p className="OfferTime w-[180px] h-[35px] bg-[#FFE6D9] text-[#F17228] text-center ml-[30px] mt-[15px] pt-[5px] rounded-[8px] shadow-lg">
              8 days remaining
            </p>
          </div>

          <div className="cursor-pointer">
            <div className="h-[250px] w-[280px] bg-[#000000] rounded-[30px] relative border-none overflow-hidden">
              <div className="absolute h-[70px] w-[100px] top-[180px] text-[#fff] bg-[#FCCD23] text-[25px] font-bold px-3 py-1 rounded-tr-[30px]">
                <div className="flex mt-[15px] ml-[10px]">
                  <p className="text-[36px] font-bold">10</p>
                  <p>
                    % <p className="text-[18px]">Off</p>
                  </p>
                </div>
              </div>
              <img
                src={food}
                className="h-full w-full object-cover"
                alt="Food"
              />
            </div>
            <p className="HomefoodName text-[22px] pl-[35px] pt-[15px]">
              Pizza
            </p>
            <p className="OfferTime w-[180px] h-[35px] bg-[#FFE6D9] text-[#F17228] text-center ml-[30px] mt-[15px] pt-[5px] rounded-[8px] shadow-lg">
              8 days remaining
            </p>
          </div>

          <div className="cursor-pointer">
            <div className="h-[250px] w-[280px] bg-[#000000] rounded-[30px] relative border-none overflow-hidden">
              <div className="absolute h-[70px] w-[100px] top-[180px] text-[#fff] bg-[#FCCD23] text-[25px] font-bold px-3 py-1 rounded-tr-[30px]">
                <div className="flex mt-[15px] ml-[10px]">
                  <p className="text-[36px] font-bold">25</p>
                  <p>
                    % <p className="text-[18px]">Off</p>
                  </p>
                </div>
              </div>
              <img
                src={food}
                className="h-full w-full object-cover"
                alt="Food"
              />
            </div>
            <p className="font-[Righteous-Regular, sans-serif] text-[22px] pl-[25px] pt-[15px]">
              Chowmein
            </p>
            <p className="OfferTime w-[180px] h-[30px] bg-[#FFE6D9] text-[#F17228] text-center ml-[30px] mt-[15px] pt-[5px] rounded-[8px] shadow-lg">
              8 days remaining
            </p>
          </div>
        </div>
        <div className="HomeFoodName flex items-center justify-center mt-[50px]">
          <button className="w-[180px] h-[40px] text-[18px] text-[#fff] bg-[#FCCD23] rounded-[8px] border-none shadow-[0px_4px_6px_-1px_rgba(0,0,0,0.1),0px_1px_10px_rgba(0,0,0,0.04)]">
            View All
            <img src={icon} className="h-[13px] w-[13px] pl-[5px] " alt="" />
          </button>
        </div>
      </div>

      <div>
        <div className="absolute text-[#fff] text-[25px] text-center pl-[220px] pt-[70px] font-bold px-3 py-1 rounded-tr-[30px]">
          <p className="AboutDes text-[38px] font-bold">About Us</p>
          <p className="pt-[10px] text-[22px]">
            XittooFood is the fastest, easiest and most convenient way to enjoy
            the best food of your favourite restaurants <br />
            at home, at the office or wherever you want to. We know that your{" "}
            <br /> time is valuable and sometimes every minute in the day
            counts. That’s why we deliver! So you can spend <br />
            more time doing the things you love.
          </p>
        </div>
        <img src={bgimg} className="h-[400px] w-full" alt="" />
      </div>

      <div className="bg-[#FEF1EA] w-full h-auto">
        <div className="bg-fixed flex items-center flex-col">
          <div className=" w-[630px] flex items-center justify-center h-[130px] mt-[60px] w-[500px] bg-[#fff] rounded-[25px] shadow-[0px_4px_6px_-1px_rgba(0,0,0,0.1),0px_1px_10px_rgba(0,0,0,0.04)]">
            <div className="md:mt-4 col-md-6  flex flex-row items-center md:border-b-2 md:border-r-0 border-r-4 border-[#E8E0E0] md:border-b-2 md:border-r-0 border-r-4 border-[#E8E0E0]">
              <img
                className="w-10 md:ml-0 md:w-7 ml-[38px]"
                src={discount}
                alt="Fast Service"
              />
              <h1 className="ml-3 font-[Righteous-Regular, sans-serif] font-bold md:text-[15px] text-[22px] text-[#F17228]">
                Daily Discounts
              </h1>
            </div>

            <div className="flex md:border-b-2 md:border-r-0 flex-row ml-[25px] items-center border-r-4 border-[#E8E0E0]">
              <img
                className="livetracking w-10 md:w-7"
                src={liveTrack}
                alt="Tracking"
              />
              <h1 className="ml-3 font-[Righteous-Regular, sans-serif] font-bold text-[22px] text-[#3F70DC] mr-8">
                Live Tracking
              </h1>
            </div>

            <div className="flex flex-row items-center">
              <img
                className="w-10 md:ml-0 md:w-7 ml-[38px]"
                src={fastService}
                alt="Fast Service"
              />
              <h1 className="ml-3 font-[Righteous-Regular, sans-serif] font-bold text-[22px] text-[#7030A0]">
                Fast Service
              </h1>
            </div>
          </div>
        </div>

        <div className="mt-[80px] bg-fixed flex justify-center">
          <div className="flex flex-row w-full max-w-screen-lg justify-center relative">
            <div className="ml-[160px] z-10 relative">
              <img
                className=" w-[530px] h-[435px] mt-[5px]"
                src={mblApp}
                alt="Install App"
              />
            </div>
            <div className="flex flex-col justify-start ml-[50px] mt-[90px] z-80 relative">
              <h1 className="font-[Righteous-Regular, sans-serif]  md:text-center md:mt-[10px] font-bold text-[32px] text-[#F17228] ml-[10px]">
                Install Our App
              </h1>
              <p className="md:text-center text-[15px] mt-[10px] ml-[10px]">
                "Fresh flavors, warm ambiance, unforgettable moments, <br />{" "}
                crafted with love."
              </p>

              <div className="flex md:mb-[10px] justify-center flex-row">
                <img
                  className="ml-[25px] md:w-[110px] md:h-[40px] mt-[20px] cursor-pointer"
                  src={PlayStore}
                  alt="Play Store"
                />
                <img
                  className="ml-[10px] md:w-[110px] md:h-[40px] mt-[20px] cursor-pointer"
                  src={AppleStore}
                  alt="Apple Store"
                />
              </div>
            </div>
            <div className="absolute top-0 left-0 z-0 mt-[20px]">
              <img
                src={backMblApp}
                alt="Background Image"
                className="w-[100%] h-[280px] object-cover mt-[140px]"
              />
            </div>
          </div>
        </div>
      </div>

      <div className="h-[300px] w-full bg-[#EBEBEB]">
        <p className="text-[26px] font-bold pl-[170px] pt-[80px]">
          "List your restaurant with us and connect with 10,000+ customers,
          boosting your reach and
          <br /> growing your business !!"
        </p>
        <button className="w-[180px] h-[40px] cursor-pointer text-[18px] text-[#fff] bg-[#FFC625] font-[Righteous-Regular, sans-serif] flex items-center justify-center mt-[50px] ml-[675px] rounded-[8px] border-none shadow-[0px_4px_6px_-1px_rgba(0,0,0,0.1),0px_1px_10px_rgba(0,0,0,0.04)]">
          Register Now
          <img src={icon} className="h-[13px] w-[13px] pl-[5px]" alt="icon" />
        </button>
      </div>
      <Footer/>
    </div>
  );
};
export default Login;
