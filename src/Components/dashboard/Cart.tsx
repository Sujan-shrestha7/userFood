import { useState } from "react";
import HomeNav from "../homeNav";
import search from "..//images/search.png";
import resimg from "../images/vip.png";
import sidedown from "../images/downicon.png";
import { useNavigate } from "react-router-dom";
import remove from '../images/removee.webp'
import '../css/cart.css';


const Cart:React.FC = () => {
  const [expandedIndex, setExpandedIndex] = useState<number | null>(null);
  const navigate =useNavigate();

  const toggleExpand = (index: number) => {
  setExpandedIndex(expandedIndex === index ? null : index);
};
console.log("test");
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
      fName: "Chicken pizza, CocaCola",
      restName: "VIP Thakali Restaurant",
      Location: "Banepa-buspark",
      items: 3,
      price: 980,
    },
    {
      img: resimg,
      fName: "Chicken pizza, CocaCola,Chicken pizza, CocaCola",
      restName: "VIP Thakali Restaurant",
      Location: "Banepa-buspark",
      items: 3,
      price: 980,
    },
    {
      img: resimg,
      fName: "Chicken pizza, CocaCola",
      restName: "VIP Thakali Restaurant",
      Location: "Banepa-buspark",
      items: 3,
      price: 980,
    },
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

  return (
    <div>
      <HomeNav />
      <div className="cart-css my-[100px]">
        <div className="cart-top flex items-center justify-between px-[80px]">
          <p className="cart-text text-[28px] font-semibold text-[#473F40]">
            Cart
          </p>
          <div className="cart-box relative flex items-center">
            <img
              src={search}
              className=" absolute left-[10px] h-[13px] w-[13px]"
              alt="Search Icon"
            />
            <input
              type="text"
              className="searchBox h-[35px] w-[220px] bg-[#F5F3F2] pl-[30px] pr-[10px] rounded-[5px] border-none"
              placeholder="Search for restaurants, food"
            />
            <button className="searchButton ml-[10px] h-[35px] w-[120px] bg-[#FC6E4F] text-[#fff] text-[15px] border-none rounded-[5px] cursor-pointer">
              Search
            </button>
          </div>
        </div>

        {/* Divider Line */}
        <div className="h-[2px] mt-[30px] w-[90%] ml-[5%] rounded-[10px] bg-[#FFFFFF] shadow-lg" />

        {/* Search Results */}
        <div className="cart-result-box pt-[70px] pl-[150px] flex flex-wrap gap-x-[25px] gap-y-[10px]">
          {details.map((d, index) => (
              <div key={index} className="cart-items-box w-[1200px] gap-[20px]">
                <div className="h-auto flex items-center justify-between flex-wrap gap-x-[30px] p-[10px] bg-[#fff]">
                  {/* Left Section (Image + Text) */}
                  <div className="box-img-check flex gap-[5px]">
                    <input
                      type="checkbox"
                      className="check-box h-[20px] w-[20px] mt-[6px]"
                      name=""
                      id=""
                    />
                    <div className="flex items-center gap-[20px] pl-[15px] text-[18px]">
                      <img
                        src={d.img}
                        className="res-img-cart h-[35px] w-[35px] rounded-full"
                        alt=""
                      />
                      <p className="cart-details">
                        {d.fName} - {d.restName}, {d.Location} ({d.items}) - Rs.{" "}
                        {d.price}/-
                      </p>
                    </div>
                  </div>
                  {/* Right Section (Remove Button and Image Toggling) */}
                  <div className="remove-expand flex gap-[30px]">
                    <div
                      className="pt-[10px] cursor-pointer"
                      onClick={() => toggleExpand(index)}
                    >
                      <img
                        src={sidedown}
                        className={`transition-all duration-300 ${
                          expandedIndex === index
                            ? "h-[15px] w-[20px]"
                            : "h-[15px] w-[20px]" // Default size
                        }`}
                        alt="Expand"
                      />
                    </div>
                    <button className="cartBox-removeBtn w-[130px] h-[35px] cursor-pointer text-[#fff] text-[16px] border-none bg-[#7C1600]">
                      Remove
                    </button>
                    <img src={remove} className="mobileview-remove h-[30px]" alt="" />
                  </div>
                </div>

                {/* Conditionally render the extra content when expanded */}
                {expandedIndex === index && (
                  <div className="w-full bg-[#F1E8E8] p-[15px] mt-[10px]">
                    {/* cart  */}
                    <div className="cart-More flex items-center justify-center">
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
                )}
              </div>
          ))}
          {/* Proceed Button */}
          <div className="proceedBtn w-full flex justify-end px-[180px] mt-[25px]">
            <button className=" hover:bg-[#015D18] bg-[#CCA311] hover:text-[#fff] text-white w-[130px] h-[35px] rounded-md text-[18px] " onClick={() => navigate("/payment")}>
              Proceed
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Cart;
