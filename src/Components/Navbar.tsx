import React, { useEffect, useState } from "react";
import logo from "./images/logo.png";
import "./navbar.css";
import { useNavigate } from "react-router-dom";

const Navbar = () => {
  const [activeItem, setActiveItem] = useState<string>("Dashboard");
  const navigate = useNavigate();
  const menuItems = [
    { name: "Dashboard", path: "/home" },
    { name: "Orders", path: "/order" },
    { name: "Account & Payments", path: "/A&P" },
    { name: "Delivery", path: "/delivery" },
  ];

  useEffect(() => {
    const currentItem = menuItems.find(
      (item) => item.path === location.pathname
    );
    if (currentItem) {
      setActiveItem(currentItem.name);
    }
  }, [location]);
  return (
    <div className="relative h-[60px] pt-[5px] w-full bg-[#FFFFFF]">
      <div className="flex ml-[100px] gap-[100px] ">
        <div className="flex w-[400px] cursor-pointer" >
          <img src={logo} alt="Logo" className="h-[50px] w-[50px]" />
          <p className="xittoofood text-[32px] pl-[12px] pt-[5px]">
            XittooFood
          </p>
        </div>
        <div className="description flex text-[#473F40] w-[350px] items-center justify-center ml-[-40px]">
          <p>"From our kitchen to your doorstep"</p>
        </div>

        <div className="flex w-[450px] ml-[25px] gap-[40px] items-center justify-center">
          <button className="AddRes h-[40px] w-[150px] text-[#473F40] text-[16px] font-bold bg-[#FFFFFF] border-none cursor-pointer">
            Add Restaurant
          </button>
          <button className="h-[40px] w-[120px] bg-[#581818] text-[14px] text-[#fff] border-none cursor-pointer" onClick={() => navigate("home/")}>
            Login
          </button>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
