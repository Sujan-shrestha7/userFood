import React, { useEffect, useState } from "react";
import HomeNav from "../homeNav";
import search from "../images/search.png";
import location from "../images/location.png";
import Footer from "../Footer";
import { useNavigate, useLocation } from "react-router-dom";
import axios from "axios";
import '../css/searchitem.css';


interface Food {
  id: number;
  foodname: string;
  category: Category;
  fullprice: number;
  cat_name: string;
  discount: number;
  image?: string;
}

interface Category {
  id: number;
  cat_name: string;
}

const Topcategory: React.FC = () => {
  const navigate = useNavigate();
  const locationRouter = useLocation();
  const queryParams = new URLSearchParams(locationRouter.search);
  const category = queryParams.get("category");

  const [results, setResults] = useState<Food[]>([]);

  useEffect(() => {
    if (category) {
      axios
        .get(`http://127.0.0.1:8000/food/foods/?category=${category}`)
        .then((res) => setResults(res.data))
        .catch((err) => console.error("Error fetching foods:", err));
    }
  }, [category]);

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

        <div className="divider h-[2px] mt-[30px] w-[90%] ml-[5%] rounded-[10px] bg-[#FFFFFF] shadow-lg" />

        <div className="result-total-box pt-[70px] pl-[160px] flex flex-wrap gap-x-[25px] gap-y-[50px] ">
          {results.map((result, index) => (
            <div key={result.id} className="result-category cursor-pointer">
              <div
                className="result-box h-[250px] w-[280px] bg-[#000000] rounded-[30px] relative overflow-hidden"
                onClick={() => navigate("/restaurantFoods")}
              >
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
                  src={`http://127.0.0.1:8000/${result.image}`}
                  className="h-full w-full object-cover"
                  alt={result.foodname}
                />
              </div>
              <div className="ml-[10px]">
                <p className="result-foodName font-bold text-[18px] pt-[15px]">
                  {result.foodname}
                </p>
                <div className="result-location-box pt-[10px] w-full flex gap-[10px]">
                  <img
                    src={location}
                    className="result-foodLocation h-[18px] w-[18px]"
                    alt="Location Icon"
                  />
                  <p className="result-foodLocation font-bold text-[14px]">
                  </p>
                </div>
                <div className="rating-box flex text-[#CA5F1A] text-[28px]">
                  {/* {renderStars(result.rating)} */}
                  <span className="ml-[5px] text-[#473F40] pt-[15px] text-[14px]">
                    {/* ({result.rating}) */}
                  </span>
                </div>
                <button className="result-cartMbl text-center cursor-pointer w-[90px] h-[25px] rounded-[5px] mt-[-3px]">
                  Add To Cart
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default Topcategory;
