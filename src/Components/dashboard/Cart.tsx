import React from "react";
import HomeNav from "../homeNav";
import search from "..//images/search.png";

const Cart = () => {
  const details = [
    {
      fName: "chicken pizza, CocaCola",
      restName: "VIP Thakali Restaurant",
      Location: "Banepa-buspark",
      items: 3,
    },
  ];

  return (
    <div>
      <HomeNav />
      <div className="my-[100px]">
        <div className="flex items-center justify-between px-[80px]">
          <p className="text-[28px] font-semibold text-[#473F40]">
            Your Search Results
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

        {/* Search Results */}
        <div className="pt-[70px] pl-[160px] flex flex-wrap gap-x-[25px] gap-y-[50px] ">
            
            {details.map((d, index) => (
                <div className="w-auto h-[45px] bg-[#fff]">
                  <p>{d.fName} - {d.restName},{d.Location}({d.items})</p>
                </div>
            ))}
            </div>
        </div>
      </div>
  );
};

export default Cart;
