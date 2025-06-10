import React from "react";
import HomeNav from "../homeNav";
import woodart from "../images/woodarts.jpg";

const RegisterRestaurant: React.FC = () => {
  return (
    <div>
      <HomeNav />
      <div className="bg-[#fff] m-[35px] mx-[50px] rounded-[20px] flex">
        <div className="w-[825px]">
          <img
            src={woodart}
            className="w-full h-auto rounded-tl-[20px] rounded-bl-[20px] opacity-90"
            alt="Wood Art"
          />
            <p className="w-[500px] absolute top-1/2 font-bold text-[28px] px-[30px] text-black text-center">
              Connect with the 100000+ plus customers with us
            </p>
        </div>
        <div className="w-full my-[30px]">
          <p className="text-center text-[24px] font-bold">Registration Form</p>
          <div className="m-[30px] flex flex-col gap-y-[30px] mx-[30px]">
            <div className="flex flex-col gap-y-[10px]">
              <label className="font-bold text-[14px]">Full Name</label>
              <input
                type="text"
                placeholder="Name"
                className="font-bold w-full h-[35px] border-0 border-b-2 border-black outline-none py-2 px-1 placeholder-black-500 placeholder:text-[18px] placeholder:text-gray placeholder:font-bold"
              />
            </div>
            <div className="flex flex-col gap-y-[10px]">
              <label className="font-bold text-[14px]">Location</label>
              <input
                type="text"
                placeholder="Restaurant Location"
                className="font-bold w-full h-[35px] border-0 border-b-2 border-black outline-none py-2 px-1 placeholder-black-500 placeholder:text-[18px] placeholder:text-gray placeholder:font-bold"
              />
            </div>
            <div className="flex flex-col gap-y-[10px]">
              <label className="font-bold text-[14px]">Address</label>
              <input
                type="text"
                placeholder="Restaurant Owner Address"
                className="font-bold w-full h-[35px] border-0 border-b-2 border-black outline-none py-2 px-1 placeholder-black-500 placeholder:text-[18px] placeholder:text-gray placeholder:font-bold"
              />
            </div>
            <div className="flex flex-col gap-y-[10px]">
              <label className="font-bold text-[14px]">Restaurant Email</label>
              <input
                type="text"
                placeholder="Restaurant Email"
                className="font-bold w-full h-[35px] border-0 border-b-2 border-black outline-none py-2 px-1 placeholder-black-500 placeholder:text-[18px] placeholder:text-gray placeholder:font-bold"
              />
            </div>
            <div className="flex flex-col gap-y-[10px]">
              <label className="font-bold text-[14px]">Email</label>
              <input
                type="text"
                placeholder="Restaurant Owner Email"
                className="font-bold w-full h-[35px] border-0 border-b-2 border-black outline-none py-2 px-1 placeholder-black-500 placeholder:text-[18px] placeholder:text-gray placeholder:font-bold"
              />
            </div>
            <div className="flex flex-col gap-y-[10px]">
              <label className="font-bold text-[14px]">Contact</label>
              <input
                type="text"
                placeholder="Restaurant Owner Contact"
                className="font-bold w-full h-[35px] border-0 border-b-2 border-black outline-none py-2 px-1 placeholder-black-500 placeholder:text-[18px] placeholder:text-gray placeholder:font-bold"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default RegisterRestaurant;
