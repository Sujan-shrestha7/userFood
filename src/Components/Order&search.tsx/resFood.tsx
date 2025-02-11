import React, { useState } from "react";
import HomeNav from "../homeNav";
import background from "../images/background.png";
import vip from "../images/vip.png";
import location from "../images/location.png";
import "../Navbar.css";

const ResFood: React.FC = () => {
  const [activeTab, setActiveTab] = useState<string>("Menu");

  const restaurant = [
    {
      name: "VIP Thakali Restaurant",
      img: background,
      location: "Banepa-busbark, Banepa",
      rating: 3.8,
    },
  ];

  const renderStars = (rating: number) => {
    const fullStars = Math.floor(rating);
    const halfStar = rating % 1 >= 0.5;
    const emptyStars = 5 - fullStars - (halfStar ? 1 : 0);

    return (
      <div className="flex gap-[2px]">
        {"★".repeat(fullStars)}
        {halfStar && "☆"}
        {"☆".repeat(emptyStars)}
      </div>
    );
  };

  return (
    <div>
      <HomeNav />
      {restaurant.map((rest, index) => (
        <div key={index} className="relative overflow-hidden">
          <h2 className="absolute items-center justify-center mt-[4%] ml-[35%] text-[#FFF] text-[52px] font-bold bg-black px-4 py-2 rounded-lg">
            {rest.name}
          </h2>
          <img
            src={rest.img}
            className="w-full h-auto inset-0 bg-black bg-opacity-40"
            alt="restaurant-background"
          />
          <div className="mt-[-140px]">
            <img src={vip} className="ml-[43%] h-[240px] w-[250px]" alt="VIP" />
            <p className="restaurantName text-[20px] text-center font-bold ml-[20px]">
              {rest.name}
            </p>
            <div className="flex text-center items-center justify-center font-bold gap-[10px] mt-[5px] ml-[25px]">
              <img src={location} className="h-[25px] w-[25px]" alt="Location" />
              <p className="text-[14px]">{rest.location}</p>
            </div>
            <div className="flex text-[#CA5F1A] text-[28px] items-center justify-center font-bold gap-[10px] mt-[-8px] ml-[35px]">
              {renderStars(rest.rating)}
              <span className="text-[#473F40] pt-[7px] text-[14px]">
                ({rest.rating})
              </span>
            </div>
          </div>
        </div>
      ))}

      {/* Divider Line */}
      <div className="h-[2px] mt-[30px] w-[90%] ml-[5%] rounded-[10px] bg-[#9B9B9B] shadow-lg" />

      {/* Navigation Tabs */}
      <nav>
        <div className="flex gap-[120px] mt-[40px] ml-[15%]">
          <button
            className={`text-[16px] bg-transparent border-none font-bold cursor-pointer px-4 py-2 ${
              activeTab === "Menu" ? "border-b-4 border-none text-orange-500" : "text-gray-700"
            }`}
            onClick={() => setActiveTab("Menu")}
            aria-controls="tab-Menu"
            role="tab"
          >
            Menu
          </button>
          <button
            className={`text-[16px] bg-transparent border-none font-bold cursor-pointer px-4 py-2 ${
              activeTab === "About-Us" ? "border-b-4 border-none text-orange-500" : "text-gray-700"
            }`}
            onClick={() => setActiveTab("About-Us")}
            aria-controls="tab-About-Us"
            role="tab"
          >
            About Us
          </button>
          <button
            className={`text-[16px] bg-transparent border-none font-bold cursor-pointer px-4 py-2 ${
              activeTab === "Branches" ? "border-b-4 border-none text-orange-500" : "text-gray-700"
            }`}
            onClick={() => setActiveTab("Branches")}
            aria-controls="tab-Branches"
            role="tab"
          >
            Other Branches
          </button>
        </div>
      </nav>

      {/* Tab Content */}
      <div className="mt-[20px] ml-[15%] text-[18px]">
        <div
          id="tab-Menu"
          role="tabpanel"
          className={`${activeTab === "Menu" ? "block" : "hidden"} text-gray-700`}
        >
          <p>Here's the menu with delicious items!</p>
        </div>
        <div
          id="tab-About-Us"
          role="tabpanel"
          className={`${activeTab === "About-Us" ? "block" : "hidden"} text-gray-700`}
        >
          <p>We are passionate about serving authentic Thakali food.</p>
        </div>
        <div
          id="tab-Branches"
          role="tabpanel"
          className={`${activeTab === "Branches" ? "block" : "hidden"} text-gray-700`}
        >
          <p>Find us in Banepa, Dhulikhel, and Kathmandu!</p>
        </div>
      </div>
    </div>
  );
};

export default ResFood;
