import React from "react";
import Navbar from "../Navbar";
import homeImg from "../images/homeImg.png";
import search from "../images/search.png";
import download from "../images/download.png";
import food from "../images/food.png";

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
      <div className="w-full h-[600px] bg-[#F9F9F9] relative">
        <div>
          <p className="popularitem absolute top-[10%] left-[45%] text-center text-[28px]">
            Popular Items
          </p>
        </div>
        <div className="pt-[200px] pl-[160px] flex flex-wrap gap-[25px]">
          <div className="h-[250px] w-[280px] bg-[#000000] rounded-[30px] relative border-none overflow-hidden">
            <div className="absolute h-[100px] w-[100px] top-[160px] text-[#fff] bg-[#FCCD23] text-[25px] font-bold px-3 py-1 rounded-tr-[30px]">
              <div className="flex mt-[15px] ml-[10px]">
                <p className="text-[40px]">15</p>
                <p>
                  % <p className="text-[18px]">Off</p>
                </p>
              </div>
            </div>
            <img src={food} className="h-full w-full object-cover" alt="Food" />
          </div>

          <div className="h-[250px] w-[280px] bg-[#000000] rounded-[30px] relative border-none overflow-hidden">
            <div className="absolute h-[100px] w-[100px] top-[160px] text-[#fff] bg-[#FCCD23] text-[25px] font-bold px-3 py-1 rounded-tr-[30px]">
              <div className="flex mt-[15px] ml-[10px]">
                <p className="text-[40px]">15</p>
                <p>
                  % <p className="text-[18px]">Off</p>
                </p>
              </div>
            </div>
            <img src={food} className="h-full w-full object-cover" alt="Food" />
          </div>

          <div className="h-[250px] w-[280px] bg-[#000000] rounded-[30px] relative border-none overflow-hidden">
            <div className="absolute h-[100px] w-[100px] top-[160px] text-[#fff] bg-[#FCCD23] text-[25px] font-bold px-3 py-1 rounded-tr-[30px]">
              <div className="flex mt-[15px] ml-[10px]">
                <p className="text-[40px]">15</p>
                <p>
                  % <p className="text-[18px]">Off</p>
                </p>
              </div>
            </div>
            <img src={food} className="h-full w-full object-cover" alt="Food" />
          </div>

          <div className="h-[250px] w-[280px] bg-[#000000] rounded-[30px] relative border-none overflow-hidden">
            <div className="absolute h-[100px] w-[100px] top-[160px] text-[#fff] bg-[#FCCD23] text-[25px] font-bold px-3 py-1 rounded-tr-[30px]">
              <div className="flex mt-[15px] ml-[10px]">
                <p className="text-[40px]">15</p>
                <p>
                  % <p className="text-[18px]">Off</p>
                </p>
              </div>
            </div>
            <img src={food} className="h-full w-full object-cover" alt="Food" />
          </div>
          
        </div>
      </div>
    </div>
  );
};
export default Home;
