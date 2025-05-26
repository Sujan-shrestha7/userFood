import React from "react";
import HomeNav from "../homeNav";
import search from "../images/search.png";
import food from "../images/food.png";
import location from "../images/location.png";
import Footer from "../Footer";
import { useNavigate } from "react-router-dom";
import '../css/searchitem.css';

const SearchResults: React.FC = () => {
  const navigate = useNavigate();
  const results = [
    {
      name: "Vera pizza",
      resName: "Pasa Voj",
      Location: "Durbarmarg",
      img: food,
      rating: 4.5,
    },
    {
      name: "Pizza",
      resName: "Pasa Voj",
      Location: "Banepa-7",
      img: food,
      rating: 4.0,
    },
    {
      name: "Pizza",
      resName: "Pasa Voj",
      Location: "Durbarmarg",
      img: food,
      rating: 3.8,
    },
    {
      name: "Pizza",
      resName: "Pasa Voj",
      Location: "Durbarmarg",
      img: food,
      rating: 5.0,
    },
    {
      name: "Pizza",
      resName: "VIP Thakali",
      Location: "Banepa buspark, Banepa",
      img: food,
      rating: 4.2,
    },
    {
      name: "Pizza",
      resName: "VIP Thakali",
      Location: "Banepa buspark, Banepa",
      img: food,
      rating: 3.5,
    },
    {
      name: "Pizza",
      resName: "VIP Thakali",
      Location: "Banepa buspark, Banepa",
      img: food,
      rating: 4.7,
    },
    {
      name: "Pizza",
      resName: "VIP Thakali",
      Location: "Banepa buspark, Banepa",
      img: food,
      rating: 4.1,
    },
  ];

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
      <div className="my-[100px]">
        <div className="search-result-box flex items-center justify-between px-[80px]">
          <p className="search-text text-[28px] font-semibold text-[#473F40]">
            Your Search Results
          </p>
          <div className="relative flex items-center">
            <img
              src={search}
              className="absolute left-[10px] h-[13px] w-[13px]"
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
        <div className="divider h-[2px] mt-[30px] w-[90%] ml-[5%] rounded-[10px] bg-[#FFFFFF] shadow-lg" />

        {/* Search Results */}
        <div className="result-total-box pt-[70px] pl-[160px] flex flex-wrap gap-x-[25px] gap-y-[50px] ">
          {results.map((result, index) => (
            <div key={index} className="result-category cursor-pointer" >
              <div className="result-box h-[250px] w-[280px] bg-[#000000] rounded-[30px] relative overflow-hidden" onClick={() => navigate("/restaurantFoods")}>
                {(index + 1) % 2 === 0 && (
                  <div className="absolute h-[70px] w-[100px] top-[180px] text-[#fff] bg-[#D1A815] text-[25px] font-bold px-3 py-1 rounded-tr-[30px]">
                    <div className="flex mt-[10px] ml-[10px]">
                      <p className="text-[36px] font-bold">15</p>
                      <p>
                        % <span className="text-[18px]">Off</span>
                      </p>
                    </div>
                  </div>
                )}
                <img
                  src={result.img}
                  className="h-full w-full object-cover"
                  alt={result.name}
                />
              </div>
              <div className="ml-[10px]">
                <p className="result-foodName font-bold text-[18px] pt-[15px]">
                  {result.name} - {result.resName}
                </p>
                <div className="result-location-box pt-[10px] w-full flex gap-[10px]">
                  <img
                    src={location}
                    className="result-foodLocation h-[18px] w-[18px]"
                    alt="Location Icon"
                  />
                  <p className="result-foodLocation font-bold text-[14px]">
                    {result.Location}
                  </p>
                  {/* <button className="result-cart text-center cursor-pointer w-[90px] h-[25px] rounded-[5px] mt-[-3px]">Add To Cart</button> */}
                </div>


                {/* Rating */}
                <div className="rating-box flex text-[#CA5F1A] text-[28px]">
                  {renderStars(result.rating)}
                  <span className="ml-[5px] text-[#473F40] pt-[15px] text-[14px]">
                    ({result.rating})
                  </span>
                </div>
                <button className="result-cartMbl text-center cursor-pointer w-[90px] h-[25px] rounded-[5px] mt-[-3px]">Add To Cart</button>
              </div>
            </div>
          ))}
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default SearchResults;
