import React from "react";
import HomeNav from "../homeNav";
import search from "..//images/search.png";

const Cart = () => {
  return (
    <div>
      <HomeNav />
      <div className="my-[100px]">
        <div className="flex items-center justify-between px-[80px]">
          <p className="text-[28px] ml-[50px] font-semibold text-[#473F40]">
            My Cart
          </p>
          <div className="relative flex items-center">
            <img
              src={search}
              className="absolute left-[10px] h-[13px] w-[13px]"
              alt="Search Icon"
            />
            <input
              type="text"
              className="h-[35px] w-[220px] bg-[#F5F3F2] pl-[30px] pr-[10px] rounded-[5px] border-none"
              placeholder="Search for restaurants, food"
            />
            <button className="ml-[10px] h-[35px] w-[120px] bg-[#FC6E4F] text-[#fff] text-[15px] border-none rounded-[5px] cursor-pointer">
              Search
            </button>
          </div>
        </div>

        {/* Divider Line */}
        <div className="h-[2px] mt-[30px] w-[90%] ml-[5%] rounded-[10px] bg-[#FFFFFF] shadow-lg" />
      </div>
    </div>
  );
};

export default Cart;
