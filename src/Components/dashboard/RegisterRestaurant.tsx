import React from "react";
import HomeNav from "../homeNav";
import woodart from "../images/woodarts.jpg";

const RegisterRestaurant: React.FC = () => {
  return (
    <div>
      <HomeNav />
      <div className="bg-[#fff] m-[35px] mx-[50px] rounded-[20px] flex">
        <div>
          <img
            src={woodart}
            className="relative w-[825px] h-auto rounded-tl-[20px] rounded-bl-[20px] z-10 opacity-80"
            alt="Wood Art"
          />
        </div>
        <div className="w-full my-[30px]">
          <p className="text-center text-[24px] font-bold">Registration Form</p>
          <div className="m-[30px] mx-[30px]">
            <div className="flex flex-col gap-y-[10px]">
              <label className="font-bold text-[14px]">Full Name</label>
              <input
                type="text"
                placeholder="Name"
                className="w-full h-[35px] border-0 border-b-2 border-black outline-none py-2 px-1 placeholder-black-500 placeholder:text-[18px] placeholder:text-gray placeholder:font-bold"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default RegisterRestaurant;
