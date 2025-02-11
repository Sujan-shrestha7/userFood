import React, { useEffect, useState } from "react";
import logo from "./images/logo.png";
import './Navbar.css';
import cart from './images/cart.png';
import notification from './images/notification.png';
import profile from './images/profile.png';
import { useNavigate } from "react-router-dom";

interface MenuItem {
  name: string;
  path: string;
}

const HomeNav: React.FC = () => {
  const [activeItem, setActiveItem] = useState<string>("Dashboard");
    const navigate = useNavigate();
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
    <div className="sticky top-0 left-0 right-0 z-50 h-[60px] pt-[5px] w-full bg-[#FFFFFF] shadow-md">
      <div className="flex ml-[100px] gap-[100px] items-center">
        
        {/* Logo Section */} 
        <div className="flex items-center w-[400px] cursor-pointer" onClick={() => navigate("/home")}>
          <img src={logo} alt="Logo" className="h-[50px] w-[50px]" />
          <p className="xittoofood text-[32px] pl-[12px]">XittooFood</p>
        </div>

        {/* Description Section */}
        <div className="description flex text-[#473F40] w-[350px] items-center justify-center ml-[-40px]">
          <p>"From our kitchen to your doorstep"</p>
        </div>

        {/* Icons & Buttons */}
        <div className="flex w-[430px] gap-[40px] items-center justify-center">
          <button className="AddRes h-[40px] w-[150px] text-[#473F40] text-[16px] font-bold bg-[#FFFFFF] border-none cursor-pointer">
            Add Restaurant
          </button>

          {/* Cart Icon */}
          <div className="rounded-full h-[40px] w-[40px] bg-[#D9D9D9] cursor-pointer flex items-center justify-center">
            <img src={cart} className="h-[25px] w-[35px]" alt="Cart" />
          </div>

          {/* Notification Icon */}
          <div className="rounded-full h-[40px] w-[40px] bg-[#D9D9D9] cursor-pointer flex items-center justify-center">
            <img src={notification} className="h-[25px] w-[23px]" alt="Notification" />
          </div>

          {/* Profile Icon */}
          <div className="rounded-full h-[40px] w-[40px] cursor-pointer flex items-center justify-center">
            <img src={profile} className="h-[40px] w-[40px]" alt="Profile" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default HomeNav;
