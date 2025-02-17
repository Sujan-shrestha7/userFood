import React, { useState } from "react";
import HomeNav from "../homeNav";
import resimg from "../images/vip.png"; // Ensure correct path

const Payment = () => {
  const myCart = [
    { qty: 3, food: "MoMo", price: 190, Discount: 100 },
    { qty: 2, food: "Pizza", price: 210, Discount: 0 },
    { qty: 3, food: "Chowmein", price: 290, Discount: 0 },
  ];

  const TotalAmount = myCart.reduce((sum, item) => sum + item.price * item.qty, 0);
  const VAT = (TotalAmount * 0.13).toFixed(2);
  const DeliveryCharge = 150;
  const GrandTotal = parseFloat(VAT) + TotalAmount + DeliveryCharge;

  const details = [
    {
      img: resimg,
      fName: "Chicken pizza, CocaCola",
      restName: "VIP Thakali Restaurant",
      Location: "Banepa-buspark",
      items: 3,
      price: 980,
    },
    {
      img: resimg,
      fName: "Momo, Cold Drinks",
      restName: "Himalayan Restaurant",
      Location: "Dhulikhel-7",
      items: 2,
      price: 500,
    },
  ];

  return (
    <div>
      <HomeNav />

      {/* Title Section */}
      <div className="my-[100px]">
        <p className="text-[28px] ml-[50px] font-semibold text-[#473F40]">
          Bill Payment
        </p>
        <div className="h-[2px] mt-[30px] w-[90%] ml-[5%] rounded-[10px] bg-[#FFFFFF] shadow-lg" />
      </div>

      {/* Payment Details Section */}
      <div className="pl-[100px] mt-[-50px] flex flex-col gap-y-[10px]">
        {details.map((d, index) => (
          <div key={index} className="w-[1300px] bg-[#fff] h-[45px] shadow-md rounded-lg">
            <div className="flex items-center gap-[15px] p-[5px]">
              <img src={d.img} className="h-[35px] w-[35px] rounded-full" alt="Restaurant" />
              <p className="text-[18px] text-[#504C4C]">
                {d.fName} - {d.restName}, {d.Location} ({d.items}) - Rs. {d.price}/-
              </p>
            </div>
          </div>
        ))}
      </div>

      {/* Flex container for Address and Cart */}
      <div className="flex justify-center mx-[110px] pl-[100px] mt-[50px]">
        {/* Address Section (Flexible) */}
        <div className="flex-grow bg-white p-[15px] shadow-lg rounded-lg">
          <div className="flex pl-[50px] flex-col gap-y-[10px]">
            <p className="text-[18px] text-[20px] font-semibold text-[18px] text-[#473F40]">Enter Your Address:</p>
            <input
              type="text"
              placeholder="Enter your address "
              className="mt-[10px] ml-[25px] pl-[30px] py-[5px] border rounded-md w-[400px] h-[45px]"
            />
          </div>

          <div className="flex mt-[50px] pl-[50px] flex-col gap-y-[10px]">
            <p className="text-[18px] text-[20px] font-semibold text-[18px] text-[#473F40]">Contact Number:</p>
            <input
              type="number"
              placeholder="Enter your address "
              className="mt-[10px] ml-[25px] pl-[30px] py-[5px] border rounded-md w-[400px] h-[45px]"
            />
          </div>
        </div>
        <div className="h-[320px] w-[2px] rounded-[10px] bg-[#FFFFFF] shadow-lg" />

        {/* Cart Section (Fixed width: 420px) */}
        <div className="w-[420px] bg-white p-[15px] shadow-lg rounded-lg">
          {/* Cart Items */}
          <p className="text-center font-bold text-[16px]">My Cart</p>
          {myCart.map((item, index) => (
            <div key={index} className="mt-[15px] flex justify-between">
              <div className="flex text-[#504C4C] text-[16px] gap-[10px]">
                <p>{item.qty}x</p>
                <p>
                  {item.food} ({item.price})
                </p>
              </div>
              <p className="text-right text-[14px]">Rs. {item.price * item.qty}/-</p>
            </div>
          ))}

          {/* Charges and Totals */}
          <div className="text-[#888383] text-[14px] ml-[30px] mt-[10px]">
            <div className="flex justify-between text-[#504C4C]">
              <p>Sub Total</p>
              <p>Rs. {TotalAmount}/-</p>
            </div>
            <div className="flex justify-between text-[#504C4C]">
              <p>VAT (13%)</p>
              <p>Rs. {VAT}/-</p>
            </div>
            <div className="flex justify-between text-[#504C4C]">
              <p>Service Charge</p>
              <p>Rs. 0/-</p>
            </div>
            <div className="flex justify-between text-[#504C4C]">
              <p>Delivery Charge</p>
              <p>Rs. {DeliveryCharge}/-</p>
            </div>
          </div>

          {/* Divider Line */}
          <div className="h-[2px] mt-[10px] w-full bg-[#ccc]" />

          {/* Grand Total */}
          <div className="mt-[10px] flex justify-between font-bold text-lg">
            <p>Grand Total</p>
            <p>Rs. {GrandTotal.toFixed(2)}/-</p>
          </div>

          {/* Proceed Button */}
          <div className="mt-[20px] flex justify-center">
            <button className="bg-[#CCA311] text-[#fff] px-[20px] py-[10px] rounded-md text-[18px]">
              Proceed to Payment
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Payment;
