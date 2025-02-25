import React, { useState } from "react";
import background from "../images/background.png";
import "../Navbar.css";
import search from "../images/search.png";
import cart from "../images/cart.png";

const Menu: React.FC = () => {
  const [activeTab, setActiveTab] = useState<string>("Menu");

  const food = [
    { name: "chicken Pizza", Price: 790 },
    { name: "cheese Pizza", Price: 790 },
    { name: "veg Pizza", Price: 790 },
    { name: "thakali Pizza", Price: 790 },
  ];

  const menus = [
    { name: "Momo", Price: 370 },
    { name: "Chowmein", Price: 170 },
    { name: "Chicken-Chowmein", Price: 130 },
    { name: "Veg-Chowmein", Price: 120 },
    { name: "Buff-Momo", Price: 170 },
    { name: "chicken Pizza", Price: 790 },
    { name: "cheese Pizza", Price: 790 },
    { name: "veg Pizza", Price: 790 },
    { name: "thakali Pizza", Price: 790 },
    { name: "chicken Pizza", Price: 790 },
    { name: "cheese Pizza", Price: 790 },
    { name: "veg Pizza", Price: 790 },
    { name: "thakali Pizza", Price: 790 },
    { name: "chicken Pizza", Price: 790 },
  ];

  const popularItems = [
    { name: "Momo", Price: 370 },
    { name: "Chowmein", Price: 170 },
    { name: "Chicken-Chowmein", Price: 130 },
    { name: "Veg-Chowmein", Price: 120 },
    { name: "Buff-Momo", Price: 170 },
  ];

  const myCart = [
    { qty: 3, food: "MoMo", price: 190, Discount: 100 },
    { qty: 2, food: "Pizza", price: 210, Discount: 0 },
    { qty: 3, food: "Chowmein", price: 290, Discount: 0 },
  ];

  const TotalAmount = myCart.reduce((sum, item) => {
    return sum + item.price * item.qty;
  }, 0);

  const VAT = (TotalAmount * 0.13).toFixed(2);
  const DeliveryCharge = 150;
  const GrandTotal = parseInt(VAT) + TotalAmount + DeliveryCharge;

  const restaurant = [
    {
      name: "VIP Thakali Restaurant",
      img: background,
      location: "Banepa-busbark, Banepa",
      rating: 3.8,
    },
  ];

  return (
    <div className="mt-[50px] ml-[-20px]">
      <div className="flex flex-wrap gap-[100px]">
        <div className="ml-[-100px]">
          <p className="foodstyle mb-[30px]">Popular Items</p>

          <div>
            {popularItems.map((rest, index) => (
              <div className="flex mb-[10px] mt-[20px] justify-between">
                <div className="">
                  <a
                    href=""
                    className="no-underline text-[#000000] text-[16px]"
                  >
                    {" "}
                    <p>{rest.name}</p>
                  </a>
                </div>
              </div>
            ))}
          </div>
        </div>
        {/* divider */}
        <div className=" h-auto w-[2px] bg-[#fff]" />

        {/* food items  */}
        <div>
          <div className="flex gap-[200px] ml-[-30px]">
            <div className="foodstyle ml-[-30px]">Pizza Items</div>

            {/* search  */}
            <div className="relative flex ">
              <img
                src={search}
                className="absolute left-[10px] h-[13px] mt-[10px] w-[13px]"
                alt="Search Icon"
              />
              <input
                type="text"
                className="h-[35px] w-[220px] bg-[#F5F3F2] pl-[30px] pr-[10px] rounded-[5px] border-none"
                placeholder="Search for restaurants, food"
              />
              <button className="ml-[10px] h-[35px] w-[120px] bg-[#D5A805] text-[#fff] text-[15px] rounded-[5px] cursor-pointer">
                Search
              </button>
            </div>
          </div>

          
          {/* searched items  */}
          <div className="text-[16px] w-[600px] ml-[-30px] mt-[40px]">
            {food.map((rest, index) => (
              <div>
                <div className="flex mb-[20px] mt-[20px] justify-between">
                  <p>{rest.name}</p>
                  <div className="flex gap-[20px]">
                    <p>Rs.{rest.Price}/- </p>
                    <button className="flex cursor-pointer pt-[8px] mt-[-8px] text-[14px] h-[32px] w-[110px] bg-[#137F13] text-[#fff] text-center rounded-[5px] border-none">
                      <img
                        src={cart}
                        className="w-[22px] h-[13px] mt-[px]"
                        alt=""
                      />
                      <p className="mt-[]">Add To Cart </p>
                    </button>
                  </div>
                </div>
                <div className="w-[100%] mt-[-15px] h-[1px] bg-[#fff]" />
              </div>
            ))}
          </div>

          {/* menus items  */}

          <div className="text-[16px] w-[500px] mt-[40px]">
            <p className="foodstyle text-[18px] ml-[-30px] mb-[40px]">
              Other Menus
            </p>
            {menus.map((rest, index) => (
              <div>
                <div className="flex mb-[10px] mt-[25px] w-[550px] text-[#363636] justify-between">
                  <p>{rest.name}</p>
                  <div className="flex gap-[20px]">
                    <p>Rs.{rest.Price}/- </p>
                    <button className="flex cursor-pointer pt-[8px] mt-[-8px] text-[14px] h-[32px] w-[110px] bg-[#137F13] text-[#fff] text-center rounded-[5px] border-none">
                      <img src={cart} className="w-[22px] h-[13px]" alt="" />
                      <p className="mt-[]">Add To Cart </p>
                    </button>
                  </div>
                </div>
{/* divider line */}
                <div className="w-[110%] mt-[-5px] h-[1px] bg-[#E5E5E5]" />
              </div>
            ))}
          </div>
        </div>

        {/* divider line  */}
        <div className=" h-auto ml-[-80px] w-[2px] bg-[#fff]" />

        {/* cart  */}
        <div className="ml-[-20px]">
          <p className="foodstyle text-center ">My Cart</p>
          <div className="flex justify-between mt-[50px] w-[250px] mb-[30px]">
            <p>Foods</p>
            <p>Total</p>
          </div>
          <div className=" w-[300px]">
            {myCart.map((item, index) => (
                <div className="ml-[-0px] mt-[10px] flex justify-between">
                  <div className="flex  justify-between text-[#504C4C] text-[16px] gap-[25px]">
                    <p className="ml-[-30px]">{item.qty}x</p>
                    <p>{item.food}  ({item.price})</p>
                  </div>
                  <p className="mr-[45px] text-right text-[14px]">
                    Rs. {item.price * item.qty}/-
                  </p>
                </div>
            ))}
          </div>
          <div className="ml-[15px] text-[#888383] text-[14px]">
            <div className=" mt-[20px] flex gap-[170px] text-[#504C4C] ">
              <p> Sub Total </p>
              <p className=" ml-[-45px]">Rs. {TotalAmount}/-</p>
            </div>
            <div className=" mt-[10px] flex gap-[170px] text-[#504C4C] ">
              <p className=""> VAT </p>
              <p className=" ml-[-12px]">Rs. {VAT}/-</p>
            </div>
            <div className=" mt-[10px] flex gap-[170px] text-[#504C4C]">
              <p> Service Charge </p>
              <p className=" ml-[-83px]">Rs. 0/-</p>
            </div>
            <div className="mt-[10px] flex gap-[140px] text-[#504C4C]">
              <p> Delivery Charge </p>
              <p className=" ml-[-57px]">Rs. {DeliveryCharge} /-</p>
            </div>
          </div>

          {/* divider line  */}
          <div className=" h-[2px] mt-[20px] ml-[-35px] w-[350px] bg-[#fff]" />

          <div className=" mt-[10px] ml-[-35px] flex gap-[140px]">
            <p className="totalamount"> Grand Total </p>
            <p className=" ml-[-10px]">Rs. {GrandTotal} /-</p>
          </div>

          <div className="mt-[45px]">
            <button className="bg-[#CCA311] text-[#fff] w-[150px] h-[30px] ml-[60px]">
              Proceed
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Menu;
