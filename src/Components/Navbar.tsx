import React, { useState } from "react";
import logo from "./images/logo.png";
import "./navbar.css";

const Navbar = () => {
  const [activeTab, setActiveTab] = useState<string>("accountOrders");

  return (
    <div className="relative">
      <div className="items-center justify-center">
        {/* Tabs Navigation */}
        <nav className="sticky top-0 mb-4 flex gap-[10px] h-[60px] p-[5px] bg-[#fff] shadow-md">
          <div className="flex w-[400px] ml-[70px] items-center">
            <img src={logo} alt="Logo" className="h-[50px] w-[50px]" />
            <p className="xittoofood text-[32px] pl-[10px]">XittooFood</p>
          </div>
          <div className="description text-[#473F40] w-[350px] flex items-center justify-center pl-[40px]">
            <p>"From our kitchen to your doorstep"</p>
          </div>
          <div className="flex gap-[60px] ml-[200px]">
            <button
              className={`w-[180px] h-[45px] text-[18px] font-bold border-none cursor-pointer ${
                activeTab === "accountOrders"
                  ? "text-[#581818] underline"
                  : "text-[#473F40] bg-[#fff]"
              }`}
              onClick={() => setActiveTab("accountOrders")}
              aria-controls="tab-accountOrders"
              role="tab"
              aria-selected={activeTab === "accountOrders"}
            >
              Account Orders
            </button>
            <button
              className={`w-[180px] h-[45px] text-[18px] font-bold border-none cursor-pointer ${
                activeTab === "Payments"
                  ? "text-[#581818] underline"
                  : "text-[#473F40] bg-[#fff]"
              }`}
              onClick={() => setActiveTab("Payments")}
              aria-controls="tab-Payments"
              role="tab"
              aria-selected={activeTab === "Payments"}
            >
              Add Restaurant
            </button>
            <button
              className={`w-[150px] h-[45px] text-[18px] font-bold cursor-pointer ${
                activeTab === "Returned"
                  ? "bg-[#3d0d0d]"
                  : "bg-[#581818] text-[#fff]"
              }`}
              onClick={() => setActiveTab("Returned")}
              aria-controls="tab-Returned"
              role="tab"
              aria-selected={activeTab === "Returned"}
            >
              Login
            </button>
          </div>
        </nav>

        {/* Tabs Content */}
        <div className="p-4">
          <div
            id="tab-accountOrders"
            role="tabpanel"
            className={`${activeTab === "accountOrders" ? "block" : "hidden"} text-gray-700`}
          >
            <p>Account Orders content goes here.</p>
          </div>
          <div
            id="tab-Payments"
            role="tabpanel"
            className={`${activeTab === "Payments" ? "block" : "hidden"} text-gray-700`}
          >
            <p>Add Restaurant content goes here.</p>
          </div>
          <div
            id="tab-Returned"
            role="tabpanel"
            className={`${activeTab === "Returned" ? "block" : "hidden"} text-gray-700`}
          >
            <p>Login content goes here.</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
