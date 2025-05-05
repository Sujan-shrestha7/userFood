import homeImg from "../images/homeImg.png";
import search from "../images/search.png";
import download from "../images/download.png";
import food from "../images/food.png";
import icon from "../images/ricon.png";
import bgimg from "../images/bgimg.png";
import PlayStore from "../images/playStore.png";
import AppleStore from "../images/AppleStore.png";
import fastService from "../images/fastService.png";
import liveTrack from "../images/livetrack.png";
import mblApp from "../images/mblApp.png";
import backMblApp from "../images/backmblApp.png";
import discount from "../images/discount.png";
import Footer from "../Footer";
import HomeNav from "../homeNav";
import { useNavigate } from "react-router-dom";
import location from "../images/location.png";
import vipth from "../images/vipth.png";
import rightsidebar from "../images/rigthside.png";
import leftsidebar from "../images/leftside.png";
import { useState,useEffect } from "react";


interface Category {
  id: number;
  cat_name: string;
  image?: string;
}
const Home = () => {
  const navigate = useNavigate();
  const [categories, setCategories] = useState<Category[]>([]);

  const fullhrres = [
    {
      name: "VIP Thakali Restaurant",
      Location: "Banepa buspark, Banepa",
      img: vipth,
      rating: 3.5,
    },
    {
      name: "VIP Thakali Restaurant",
      Location: "Banepa buspark, Banepa",
      img: vipth,
      rating: 5,
    },
    {
      name: "VIP Thakali Restaurant",
      Location: "Banepa buspark, Banepa",
      img: vipth,
      rating: 3,
    },
    {
      name: "VIP Thakali Restaurant",
      Location: "Banepa buspark, Banepa",
      img: vipth,
      rating: 3.5,
    },
    {
      name: "VIP Thakali Restaurant",
      Location: "Banepa buspark, Banepa",
      img: vipth,
      rating: 3.5,
    },
    {
      name: "VIP Thakali Restaurant",
      Location: "Banepa buspark, Banepa",
      img: vipth,
      rating: 3.5,
    },
  ];
  // const Categories = [
  //   { name: "Traditional Nepali", img: categories },
  //   { name: "Newari cousine", img: categories },
  //   { name: "Tibetan & Himalayan Cuisine", img: categories },
  //   { name: "Sweets & Desserts", img: categories },
  //   { name: "Japnese", img: categories },
  //   { name: "Biryani", img: categories },
  //   { name: "Indian cousine", img: categories },
  // ];
  const results = [
    { name: "Vera pizza", remaining: "8 days remaining" },
    { name: " Chicken Pizza", remaining: "8 days remaining" },
    { name: "Pizza", remaining: "8 days remaining" },
    { name: "Pizza", remaining: "8 days remaining" },
  ];

  

  const fetchCategory = async (): Promise<void> => {
    try {
      const response = await fetch(`http://127.0.0.1:8000/category/category/`);
      const data = await response.json();
      setCategories(data);
    } catch (error) {
      console.log("Failed to fetch categories:", error);
    }
  };
  useEffect(()=>{
    fetchCategory();
  },[]);
  // Helper function to generate stars based on rating
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
      <div className="flex flex-wrap items-center justify-center">
        <div className="search-food mb-[60px] ml-[110px]">
          <h1 className="question">Are You Hungry ?</h1>
          <div className="search-box w-[620px] h-[120px] flex flex-wrap gap-[20px] items-center justify-center mt-[30px] bg-[#fff] rounded-[10px] shadow-lg">
            <div className="relative flex items-center justify-center">
              <input
                type="text"
                className="location-box h-[45px] w-[180px] bg-[#E5E1E1] pl-[30px] rounded-[5px] border-none"
                placeholder="Location..."
              />
              <img
                src={download}
                className="location-img absolute left-[5px] h-[20px] w-[20px] z-10"
                alt=""
              />
            </div>

            {/* search */}
            <div className="relative flex items-center justify-center">
              <input
                type="text"
                className="resSearch-box h-[45px] w-[220px] bg-[#E5E1E1] pl-[30px] rounded-[5px] border-none"
                placeholder="Search for restaurants, food"
              />
              <img
                src={search}
                className="absolute ml-[5px] left-[5px] h-[13px] w-[13px] z-10"
                alt=""
              />
            </div>

            <div>
              <button className="search-button h-[45px] w-[120px] border-none bg-[#FC6E4F] text-[#fff] text-[18px] rounded-[5px] cursor-pointer">
                Search
              </button>
            </div>
          </div>
        </div>
        <div>
          <img src={homeImg} className="home-img w-[680px] h-[550px]" alt="" />
        </div>
      </div>

      {/* top categories */}
      <div className="categories w-full h-[480px] p-[70px] pl-[11.5%] bg-[#F2F2F2]">
        <p className="categories-intro w-full text-center text-[32px]">
          Our Top Categories
        </p>
        <div className="categories-item w-full gap-[20px] flex mt-[60px]">
          <div className="leftsidebar-box">
            <img
              src={leftsidebar}
              className="leftsidebar mt-[65px] h-[30px] w-[45px]"
              alt=""
            />
          </div>
          <div className="slidebar w-[1000px] overflow-x-auto">
            <div className="categories-list flex gap-[25px] justify-center">
              {categories.map((C) => (
                <div
                key={C.id}
                  className="top-categories min-w-[180px] h-[170px] bg-[#fff] flex flex-col items-center justify-center shadow-md rounded-[20px] cursor-pointer"
                >
                  <img
                    src={`http://127.0.0.1:8000/${C.image}`}
                    className="img-categories w-[150px] h-[130px] rounded-[10px] bg-transparent"
                    alt=""
                  />
                  <p className="categories-name  text-lg font-semibold">
                    {C.cat_name}
                  </p>
                </div>
              ))}
            </div>
          </div>
          <div>
            <img
              src={rightsidebar}
              className="leftsidebar mt-[60px] h-[35px] w-[45px]"
              alt=""
            />
          </div>
        </div>
      </div>

      <div className="w-full h-auto my-[35px] bg-[#D5D2D2] relative">
        <p className="todayspecial-intro w-full text-center text-[36px]">
          Today's special
        </p>
        
        <div
          className="todays-result pt-[60px] pl-[160px] flex flex-wrap gap-[25px]"
          onClick={() => navigate("result/")}
        >
          {results.map((result, index) => (
            <div key={index} className="cursor-pointer">
              <div className="today-box h-[250px] w-[280px] bg-[#000000] rounded-[30px] relative overflow-hidden">
                <div className="today-offers absolute h-[70px] w-[100px] top-[180px] text-[#fff] bg-[#D1A815] text-[25px] font-bold px-3 py-1 rounded-tr-[30px]">
                  <div className="flex mt-[10px] ml-[10px]">
                    <p className="discount-num text-[36px] font-bold">15</p>
                    <p className="discount-percentage">
                      % <span className="discount-off text-[18px] ">Off</span>
                    </p>
                  </div>
                </div>
                <img
                  src={food}
                  className="h-full w-full object-cover"
                  alt="Food"
                />
              </div>
              <p className="HomefoodName text-[22px] pl-[35px] pt-[15px] font-[Righteous-Regular, sans-serif] ">
                {result.name}
              </p>
              <p className="special-remaining w-[180px] h-[35px] bg-[#FFE6D9] text-[#F17228] text-center ml-[30px] mt-[15px] pt-[5px] rounded-[8px] shadow-lg">
                {result.remaining}
              </p>
            </div>
          ))}
        </div>
        <div className="HomeFoodName flex items-center justify-center mt-[50px]">
          <button className="popularitem w-[180px] h-[40px] text-[18px] text-[#fff] bg-[#D1A815] rounded-[8px] border-none shadow-[0px_4px_6px_-1px_rgba(0,0,0,0.1),0px_1px_10px_rgba(0,0,0,0.04)] cursor-pointer">
            View All
            <img src={icon} className="h-[13px] w-[13px] pl-[5px] " alt="" />
          </button>
        </div>
      </div>

      {/* top categories */}
      <div className=" w-full h-[500px] p-[70px] bg-[#F2F2F2]">
        <p className="alltime-open-intro w-full text-center text-[32px]">
          24/7 opened restaurant
        </p>
        <div className="w-full flex justify-center gap-[20px] mt-[60px]">
          <div>
            <img
              src={leftsidebar}
              className="leftsidebar mt-[60px] h-[35px] w-[45px]"
              alt=""
            />
          </div>
          <div className="slidebar w-[1000px] overflow-x-auto ">
            <div className="alltime-res flex gap-x-[30px] justify-center">
              {fullhrres.map((f, index) => (
                <div>
                  <div
                    key={index}
                    className="alltime-res-box w-[180px] h-[170px] bg-[#fff] flex flex-col items-center justify-center shadow-md rounded-[20px]"
                  >
                    <img
                      src={f.img}
                      className="alltime-res-box w-[180px] h-[165px] rounded-[20px] bg-transparent"
                      alt=""
                    />
                  </div>

                  <div className="flex w-full ">
                    <img
                      src={location}
                      className="alltime-res-img w-[25px] h-[25px]"
                      alt=""
                    />
                    <p className="text-[14px] font-bold pt-[5px] font-semibold">
                      {f.name}
                    </p>
                  </div>

                  <div className="flex w-full">
                    <p className="text-[14px] text-center font-bold pt-[5px] font-semibold">
                      {f.Location}
                    </p>
                  </div>

                  <div>
                    {/* Rating */}
                    <div className="flex text-[#CA5F1A] text-[28px]">
                      {renderStars(f.rating)}
                      <span className="ml-[5px] text-[#473F40] pt-[15px] text-[14px]">
                        ({f.rating})
                      </span>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div>
            <img
              src={rightsidebar}
              className="leftsidebar mt-[60px] h-[35px] w-[45px]"
              alt=""
            />
          </div>
        </div>
      </div>

      <div className="About-us absolute text-[#fff] text-[25px] text-center px-[15%] pt-[70px] font-bold px-3 rounded-tr-[30px]">
        <p className="About-us-head text-[38px] font-bold">About Us</p>
        <p className="about-us-description pt-[10px] text-[22px]">
          XittooFood is the fastest, easiest and most convenient way to enjoy
          the best food of your favourite restaurants <br />
          at home, at the office or wherever you want to. We know that your{" "}
          <br /> time is valuable and sometimes every minute in the day counts.
          That’s why we deliver! So you can spend <br />
          more time doing the things you love.
        </p>
      </div>
      <img src={bgimg} className="about-us-img h-[400px] w-full" alt="" />

      {/* playstore */}
      <div className="bg-[#FEF1EA] w-full h-auto">
        <div className="bg-fixed flex items-center flex-col">
          <div className="installation-box w-[630px] flex items-center justify-center h-[130px] mt-[60px] w-[500px] bg-[#fff] rounded-[25px] shadow-[0px_4px_6px_-1px_rgba(0,0,0,0.1),0px_1px_10px_rgba(0,0,0,0.04)]">
            <div className="flex flex-row items-center border-[#E8E0E0] border-r-4 border-[#E8E0E0]">
              <img
                className="i-discount-img w-10 md:ml-0 md:w-7 ml-[38px]"
                src={discount}
                alt="Fast Service"
              />
              <h1 className="i-discount-des ml-3 md:text-[15px] text-[22px] text-[#F17228]">
                Daily Discounts
              </h1>
            </div>

            <div className="flex md:border-b-2 md:border-r-0 flex-row ml-[25px] items-center border-r-4 border-[#E8E0E0]">
              <img
                className="livetracking w-10 md:w-7"
                src={liveTrack}
                alt="Tracking"
              />
              <h1 className="i-discount-des ml-3 text-[22px] text-[#3F70DC] mr-8">
                Live Tracking
              </h1>
            </div>

            <div className="flex flex-row items-center">
              <img
                className="i-discount-img w-10 md:ml-0 md:w-7 ml-[38px]"
                src={fastService}
                alt="Fast Service"
              />
              <h1 className="i-discount-des ml-3 text-[22px] text-[#7030A0]">
                Fast Service
              </h1>
            </div>
          </div>
        </div>

{/* for desktop view */}
        <div className="fordesktop-view mt-[80px] bg-fixed flex justify-center">
          <div className="install-app flex flex-row w-full max-w-screen-lg justify-center relative">
            <div className="mbl-app ml-[160px] z-10 relative">
              <img
                className="mbl-app w-[530px] h-[435px] mt-[5px]"
                src={mblApp}
                alt="Install App"
              />
            </div>
            <div className="flex flex-col justify-start ml-[50px] mt-[90px] z-80 relative">
              <h1 className="font-[Righteous-Regular, sans-serif]  md:text-center md:mt-[10px] font-bold text-[32px] text-[#F17228] ml-[10px]">
                Install Our App
              </h1>
              <p className="md:text-center text-[15px] mt-[10px] ml-[10px]">
                "Fresh flavors, warm ambiance, unforgettable moments, <br />{" "}
                crafted with love."
              </p>

              <div className="flex md:mb-[10px] justify-center flex-row">
                <img
                  className="ml-[25px] md:w-[110px] md:h-[40px] mt-[20px] cursor-pointer"
                  src={PlayStore}
                  alt="Play Store"
                />
                <img
                  className="ml-[10px] md:w-[110px] md:h-[40px] mt-[20px] cursor-pointer"
                  src={AppleStore}
                  alt="Apple Store"
                />
              </div>
            </div>
            <div className="absolute top-0 left-0 z-0 mt-[20px]">
              <img
                src={backMblApp}
                alt="Background Image"
                className="w-[100%] h-[280px] object-cover mt-[140px]"
              />
            </div>
          </div>
        </div>
 {/* for mobile view */}
        <div className="formobileview mt-[80px] bg-fixed flex justify-center">
          <div className="install-app flex flex-row w-full max-w-screen-lg justify-center relative">
            <div className=" flex flex-col justify-start mt-[90px] z-80 relative">
              <div className="mbl-app ml-[160px] z-10 relative">
                <img
                  className="mbl-app w-[530px] h-[435px] mt-[5px]"
                  src={mblApp}
                  alt="Install App"
                />
              </div>
              <div className="install-app-msg">
              <div className="">
                <h1 className="text-[32px] text-[#F17228] ml-[10px]">
                  Install Our App
                </h1>
                <p className="text-[15px] mt-[10px] ml-[10px]">
                  "Fresh flavors, warm ambiance, unforgettable moments, <br />
                  crafted with love."
                </p>
              </div>

              <div className="flex md:mb-[10px] justify-center flex-row">
                <img
                  className="ml-[25px] md:w-[110px] md:h-[40px] mt-[20px] cursor-pointer"
                  src={PlayStore}
                  alt="Play Store"
                />
                <img
                  className="ml-[10px] md:w-[110px] md:h-[40px] mt-[20px] cursor-pointer"
                  src={AppleStore}
                  alt="Apple Store"
                />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
{/* list restaurant */}
      <div className="list-restaur h-[300px] pt-[80px] pl-[170px] w-full bg-[#EBEBEB]">
        <p className="text-[26px] font-bold  ">
          "List your restaurant with us and connect with 10,000+ customers,
          boosting your reach and
          <br /> growing your business !!"
        </p>
        <button className="w-[180px] h-[40px] cursor-pointer text-[18px] text-[#fff] bg-[#FFC625] font-[Righteous-Regular, sans-serif] flex items-center justify-center mt-[50px] ml-[35%] rounded-[8px] border-none shadow-[0px_4px_6px_-1px_rgba(0,0,0,0.1),0px_1px_10px_rgba(0,0,0,0.04)]">
          Register Now
          <img src={icon} className="h-[13px] w-[13px] pl-[5px]" alt="icon" />
        </button>
      </div>
      <Footer />
    </div>
  );
};
export default Home;
