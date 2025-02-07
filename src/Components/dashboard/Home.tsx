import React from "react";
import Navbar from "../Navbar";
import homeImg from "../images/homeImg.png";
import search from "../images/search.png";
import download from "../images/download.png";
import food from "../images/food.png";
import icon from "../images/ricon.png";

const Home = () => {
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
              <div className="absolute h-[100px] w-[100px] top-[160px] text-[#fff] bg-[#FCCD23] text-[25px] font-bold px-3 py-1 rounded-tr-[30px]">
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
              <div className="absolute h-[100px] w-[100px] top-[160px] text-[#fff] bg-[#FCCD23] text-[25px] font-bold px-3 py-1 rounded-tr-[30px]">
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
              <div className="absolute h-[100px] w-[100px] top-[160px] text-[#fff] bg-[#FCCD23] text-[25px] font-bold px-3 py-1 rounded-tr-[30px]">
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
              <div className="absolute h-[100px] w-[100px] top-[160px] text-[#fff] bg-[#FCCD23] text-[25px] font-bold px-3 py-1 rounded-tr-[30px]">
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
            <p className="HomefoodName text-[22px] pl-[25px] pt-[15px]">
              Chowmein
            </p>
            <p className="OfferTime w-[180px] h-[30px] bg-[#FFE6D9] text-[#F17228] text-center ml-[30px] mt-[15px] pt-[5px] rounded-[8px] shadow-lg">
              8 days remaining
            </p>
          </div>
        </div>
        <div className="HomeFoodName flex items-center justify-center mt-[50px]">
          <button className="w-[180px] h-[40px] text-[18px] text-[#fff] bg-[#FCCD23] rounded-[8px] border-none shadow-2xl">
            View All
            <img src={icon} className="h-[13px] w-[13px] pl-[5px] " alt="" />
          </button>
        </div>
      </div>
    </div>
  );
};
export default Home;
