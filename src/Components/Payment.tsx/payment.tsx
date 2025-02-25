import React, { useState } from "react";
import HomeNav from "../homeNav";
import resimg from "../images/vip.png"; // Ensure correct path
import Footer from "../Footer";
import "../css/payment.css";

const Payment = () => {
  const [deliveryOption, setDeliveryOption] = useState("now");
  const [paymentMethod, setPaymentMethod] = useState("");

  const myCart = [
    { qty: 3, food: "MoMo", price: 190, Discount: 100 },
    { qty: 2, food: "Pizza", price: 210, Discount: 0 },
    { qty: 3, food: "Chowmein", price: 290, Discount: 0 },
  ];

  const TotalAmount = myCart.reduce(
    (sum, item) => sum + item.price * item.qty,
    0
  );
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
      <div className="allsection mt-[100px]">
        <p className="billPayment text-[28px] pl-[120px] font-semibold text-[#473F40]">
          Bill Payment
        </p>
      </div>

      <div className="divider h-[2px] mt-[30px] w-[90%] ml-[5%] rounded-[10px] bg-[#FFFFFF] shadow-lg" />
      {/* Payment Details Section */}
      <div className="cart-result-box pt-[70px] pl-[150px] flex flex-wrap gap-x-[25px] gap-y-[10px]">
        {details.map((d, index) => (
          <div key={index} className="cart-items-box w-[1200px] gap-[20px]">
            <div className="h-auto flex items-center justify-between flex-wrap gap-x-[30px] p-[10px] bg-[#fff]">
              {/* Left Section (Image + Text) */}
              <div className="box-img-check flex gap-[5px]">
                <input
                  type="checkbox"
                  className="check-box h-[20px] w-[20px] mt-[6px]"
                />
                <div className="flex items-center gap-[20px] pl-[15px] text-[18px]">
                  <img
                    src={d.img}
                    className="res-img-cart h-[35px] w-[35px] rounded-full"
                    alt="Restaurant"
                  />
                  <p className="cart-details">
                    {d.fName} - {d.restName}, {d.Location} ({d.items}) - Rs.{" "}
                    {d.price}/-
                  </p>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
{/* Cart Section for mobilr (Fixed width: 420px) */}
<div className="cart-More-mbl flex ml-[50px]">
          <div className="bg-white shadow-lg p-6 rounded-lg">
            {/* Foods and Total Header */}
            <div className="foot-total flex justify-between mt-[20px] w-[380px] mb-[30px]">
              <p className="font-semibold">Foods</p>
              <p className="font-semibold">Total</p>
            </div>
            {/* Cart Items */}
            <div className="cart-itemBox w-[400px]">
              {myCart.map((item, index) => (
                <div
                  key={index}
                  className="cartMore-box mt-[5px] flex justify-between"
                >
                  <div className="flex text-[#504C4C] text-[16px] gap-[25px]">
                    <p className="ml-[-30px]">{item.qty}x</p>
                    <p>
                      {item.food} ({item.price})
                    </p>
                  </div>
                  <p className="text-right text-[14px]">
                    Rs. {item.price * item.qty}/-
                  </p>
                </div>
              ))}
            </div>
            {/* Charges and Totals */}
            <div className="text-[#888383] ml-[10px] text-[14px]">
              <div className="cart-subTotal mt-[10px] flex justify-between text-[#504C4C]">
                <p>Sub Total</p>
                <p>Rs. {TotalAmount}/-</p>
              </div>
              <div className="cart-VAT mt-[5px] flex justify-between text-[#504C4C]">
                <p>VAT</p>
                <p>Rs. {VAT}/-</p>
              </div>
              <div className="cart-serviceChr mt-[5px] flex justify-between text-[#504C4C]">
                <p>Service Charge</p>
                <p>Rs. 0/-</p>
              </div>
              <div className="cart-delivery mt-[5px] flex justify-between text-[#504C4C]">
                <p>Delivery Charge</p>
                <p>Rs. {DeliveryCharge} /-</p>
              </div>
            </div>

            {/* Divider Line */}
            <div className="cart-divider h-[2px] mt-[20px] w-[400px] bg-[#ccc] mx-auto" />

            {/* Grand Total */}
            <div className="cart-grandTotal mt-[10px] flex justify-between font-bold text-lg">
              <p>Grand Total</p>
              <p>Rs. {GrandTotal} /-</p>
            </div>
          </div>
          
      <div className="divider h-[2px] mt-[30px] w-[90%] ml-[5%] rounded-[10px] bg-[#FFFFFF] shadow-lg" />
        </div>

      {/* Flex container for Address and Cart */}
      <div className="Order-Details flex justify-center mx-[180px] gap-[20px] pl-[50px] mt-[50px]">
        {/* Address Section (Flexible) */}
        <div className="details-box flex-grow bg-white p-[15px] shadow-lg rounded-lg">
          <div className="address-box flex flex-col gap-y-[10px]">
            <p className="address-text text-[18px] text-[20px] font-semibold text-[18px] text-[#473F40]">
              Enter Your Address:
            </p>
            <input
              type="text"
              placeholder="Enter your address "
              className="address-input mt-[10px] ml-[45px] pl-[30px] py-[5px] border rounded-md w-[400px] h-[40px]"
            />
          </div>

          <div className="contact-box flex mt-[40px] flex-col gap-y-[10px]">
            <p className="contact-text text-[18px] text-[20px] font-semibold text-[18px] text-[#473F40]">
              Contact Number:
            </p>
            <input
              type="number"
              placeholder="Enter your address "
              className="contact-input mt-[10px] ml-[45px] pl-[30px] py-[5px] border rounded-md w-[400px] h-[40px]"
            />
          </div>
          <div className="delivery-box mt-[50px] flex flex-col gap-y-[10px]">
            <p className="delivery-text text-[20px] font-semibold text-[#473F40]">
              Delivery Status:
            </p>

            {/* Deliver Now Option */}
            <label className="delivery-now-box flex items-center gap-[10px] mt-[5px] ml-[50px] cursor-pointer">
              <input
                type="radio"
                name="deliveryStatus"
                value="Deliver Now"
                className="form-radio h-4 w-4 text-blue-600"
              />
              <span className="h-[35px] w-[150px] bg-[#F1F1F1] text-center pt-[10px]">
                Deliver Now
              </span>
            </label>

            {/* Schedule for Later Option */}
            <label className="schedule-box flex items-start gap-[10px] mt-[25px] ml-[50px] cursor-pointer">
              <input
                type="radio"
                name="deliveryStatus"
                value="Schedule for Later"
                className="form-radio h-4 w-4 text-blue-600 mt-2"
              />
              <div className="delivery-schedule h-[125px] w-[480px] bg-[#F1F1F1] pl-[30px] pt-[10px]">
                <p>Schedule for later</p>
                <div className="schedule-time flex justify-between mt-[20px] mx-[40px]">
                  <div className="flex flex-col gap-y-[10px]">
                    <p>Date</p>
                    <input
                      type="date"
                      className="dt-input w-[150px] h-[35px] pl-[5px]"
                    />
                  </div>
                  <div className="time-box flex flex-col gap-y-[10px]">
                    <p>Time</p>
                    <input
                      type="time"
                      className="dt-input w-[150px] h-[35px] pl-[5px]"
                    />
                  </div>
                </div>
              </div>
            </label>

            <div>
              <p className="text-lg font-semibold mt-[50px] text-gray-800">
                Payment Method:
              </p>
              <div className="flex justify-around mt-5">
                {["Khalti", "Esewa", "Connect-IPS"].map((method) => (
                  <label
                    key={method}
                    className="flex items-center mt-[20px] cursor-pointer"
                  >
                    <input
                      type="radio"
                      name="payment"
                      value={method}
                      checked={paymentMethod === method}
                      onChange={() => setPaymentMethod(method)}
                      className="accent-blue-500"
                    />
                    <span className="ml-2">{method}</span>
                  </label>
                ))}
              </div>
            </div>
          </div>
        </div>

        <div className="divider-desktop h-[420px] w-[2px] rounded-[10px] bg-[#FFFFFF] shadow-lg" />

        {/* Cart Section for desktop (Fixed width: 420px) */}
        <div className="cart-More-desktop flex ml-[50px]">
          <div className="bg-white shadow-lg p-6 rounded-lg">
            {/* Foods and Total Header */}
            <div className="foot-total flex justify-between mt-[20px] w-[380px] mb-[30px]">
              <p className="font-semibold">Foods</p>
              <p className="font-semibold">Total</p>
            </div>
            {/* Cart Items */}
            <div className="w-[400px]">
              {myCart.map((item, index) => (
                <div
                  key={index}
                  className="cartMore-box mt-[5px] flex justify-between"
                >
                  <div className="flex text-[#504C4C] text-[16px] gap-[25px]">
                    <p className="ml-[-30px]">{item.qty}x</p>
                    <p>
                      {item.food} ({item.price})
                    </p>
                  </div>
                  <p className="text-right text-[14px]">
                    Rs. {item.price * item.qty}/-
                  </p>
                </div>
              ))}
            </div>
            {/* Charges and Totals */}
            <div className="text-[#888383] ml-[10px] text-[14px]">
              <div className="cart-subTotal mt-[10px] flex justify-between text-[#504C4C]">
                <p>Sub Total</p>
                <p>Rs. {TotalAmount}/-</p>
              </div>
              <div className="cart-VAT mt-[5px] flex justify-between text-[#504C4C]">
                <p>VAT</p>
                <p>Rs. {VAT}/-</p>
              </div>
              <div className="cart-serviceChr mt-[5px] flex justify-between text-[#504C4C]">
                <p>Service Charge</p>
                <p>Rs. 0/-</p>
              </div>
              <div className="cart-delivery mt-[5px] flex justify-between text-[#504C4C]">
                <p>Delivery Charge</p>
                <p>Rs. {DeliveryCharge} /-</p>
              </div>
            </div>

            {/* Divider Line */}
            <div className="h-[2px] mt-[20px] w-[400px] bg-[#ccc] mx-auto" />

            {/* Grand Total */}
            <div className="cart-grandTotal mt-[10px] flex justify-between font-bold text-lg">
              <p>Grand Total</p>
              <p>Rs. {GrandTotal} /-</p>
            </div>
          </div>
        </div>
      </div>

      <div className="mt-[40px] w-full text-center mb-[50px] ">
        <button className="h-[40px] w-[250px] text-[18px] cursor-pointer hover:border-[1px]-[#000000] bg-[#06542F] border-none text-[#fff]">
          {" "}
          Place Order
        </button>
      </div>
      <Footer />
    </div>
  );
};

export default Payment;
