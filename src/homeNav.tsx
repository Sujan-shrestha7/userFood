import React, { useEffect, useState } from "react";
import logo from "./Components/images/logo.png";
import './Components/Navbar.css'
import cart from './Components/images/cart.png';
import notification from './Components/images/notification.png'
import profile from './Components/images/profile.png'

interface MenuItem {
  name: string;
  path: string;
}

const HomeNav: React.FC = () => {
  const [activeItem, setActiveItem] = useState<string>("Dashboard");

  const menuItems: MenuItem[] = [
    { name: "Dashboard", path: "/home" },
    { name: "Orders", path: "/order" },
    { name: "Account & Payments", path: "/A&P" },
    { name: "Delivery", path: "/delivery" },
  ];

  useEffect(() => {
    const currentPath = window.location.pathname;
    const currentItem = menuItems.find((item) => item.path === currentPath);
    if (currentItem) {
      setActiveItem(currentItem.name);
    }
  }, []);

  return (
    <div className="relative h-[60px] pt-[5px] w-full bg-[#FFFFFF]">
      <div className="flex ml-[100px] gap-[100px]">
        <div className="flex w-[400px]">
          <img src={logo} alt="Logo" className="h-[50px] w-[50px]" />
          <p className="xittoofood text-[32px] pl-[12px] pt-[5px]">
            XittooFood
          </p>
        </div>
        <div className="description flex text-[#473F40] w-[350px] items-center justify-center ml-[-40px]">
          <p>"From our kitchen to your doorstep"</p>
        </div>

        <div className="flex w-[430px] gap-[40px] items-center justify-center">
          <button className="AddRes h-[40px] w-[150px] text-[#473F40] text-[16px] font-bold bg-[#FFFFFF] border-none cursor-pointer">
            Add Restaurant
          </button>
          <div className="rounded-[50px] h-[40px] w-[40px] bg-[#D9D9D9]">
            <img src={cart} className="h-[25px] w-[35px]  mt-[8px] ml-[2px] items-center justify-center" alt="" />
          </div>
          <div className="rounded-[50px] h-[40px] w-[40px] bg-[#D9D9D9]">
            <img src={notification} className="h-[25px] w-[23px] m-[8px] items-center justify-center" alt="" />
          </div>
          <div className="rounded-[50px] h-[40px] w-[40px]">
            <img src={profile} className="h-[40px] w-[40px] items-center justify-center" alt="" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default HomeNav;
