import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
// import logo from "../../../logo.png";
import logo from "./images/logo.png";
import cart from "./images/cart.png";
import notification from "./images/notification.png";
import profile from "./images/profile.png";
import "./Navbar.css";

const HomeNav: React.FC = () => {
  const [showProfileMenu, setShowProfileMenu] = useState<boolean>(false);
  // const[categories, setCategory] = useState<>;
  const navigate = useNavigate();
  let name = localStorage.getItem('name')

  const toggleProfileMenu = (): void => {
    setShowProfileMenu((prev) => !prev);
  };
const logoutBtn = ()=>{
  localStorage.clear();
navigate("/")
}

// const getCategory = 


  return (
    <div className="header-all sticky top-0 left-0 right-0 z-50 h-[60px] pt-[5px] w-full bg-[#FFFFFF] shadow-md">
      <div className="allsection flex ml-[100px] gap-[100px] items-center">
        <div
          className="logosection flex items-center w-[400px] cursor-pointer"
          onClick={() => navigate("/home")}
        >
          <img src={logo} alt="Logo" className="xittoLogo h-[50px] w-[150px]" />
          {/* <p className="xittoofood text-[32px] pl-[12px]">XittooFood</p> */}
        </div>

        <div className="description flex text-[#473F40] w-[350px] items-center justify-center ml-[-40px]">
          <p>"From our kitchen to your doorstep"</p>
        </div>

        <div className="icon-button flex w-[430px] gap-[40px] items-center justify-center">
          <button onClick={()=>navigate("/register_restaurant")} className="AddRes h-[40px] w-[150px] text-[#473F40] text-[16px] font-bold bg-[#FFFFFF] border-none cursor-pointer">
            Add Restaurant
          </button>

          <div
            className="rounded-full h-[40px] w-[40px] bg-[#D9D9D9] cursor-pointer flex items-center justify-center"
            onClick={() => navigate("/cart")}
          >
            <img src={cart} className="h-[25px] w-[35px]" alt="Cart" />
          </div>

          <div className="rounded-full h-[40px] w-[40px] bg-[#D9D9D9] cursor-pointer flex items-center justify-center">
            <img
              src={notification}
              className="h-[25px] w-[23px]"
              alt="Notification"
            />
          </div>

          <div className="profile-icon relative mr-[-100px]">
            <div
              className="rounded-full h-[40px] w-[40px] cursor-pointer flex items-center justify-center"
              onClick={toggleProfileMenu}
            >
              <img src={profile} className="h-[40px] w-[40px]" alt="Profile" />
            </div>

            {showProfileMenu && (
              <div className="pl-[20px] absolute right-[-40px] mt-[10px] w-[200px] h-[300px] bg-[#636363] text-[#fff] text-[18px] shadow-lg rounded-[10px] flex flex-col justify-between">
                <ul className="text-white mt-[20px]">
                  <li
                    className="p-2 mt-[20px] cursor-pointer hover:bg-gray-700 list-none"
                    onClick={() => navigate("/profile")}
                  >
                    {name}
                  </li>
                  <li
                    className="p-2 mt-[20px] cursor-pointer hover:bg-gray-700 list-none"
                    onClick={() => navigate("/profile")}
                  >
                    View Profile
                  </li>
                  <li
                    className="p-2 mt-[10px] cursor-pointer hover:bg-gray-700 list-none"
                    onClick={() => navigate("/settings")}
                  >
                    Settings
                  </li>
                </ul>
                <li onClick={logoutBtn} className="p-2 mb-[50px] mt-[20px] cursor-pointer hover:bg-gray-700 list-none ml-[-20px] text-center">
                  Logout
                </li>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default HomeNav;
