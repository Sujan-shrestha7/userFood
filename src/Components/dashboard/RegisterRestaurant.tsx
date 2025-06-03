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
        <div className=" w-full my-[30px]">
            <p className="text-center text-[24px] font-bold ">Registration Form</p>
        </div>
      </div>
    </div>
  );
};

export default RegisterRestaurant;
