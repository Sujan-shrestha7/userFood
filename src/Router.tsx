import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Login from "./Components/dashboard/Login";
import Home from "./Components/dashboard/Home";
import SearchResults from "./Components/Order&search.tsx/searchResults";
import ResFood from "./Components/Order&search.tsx/resFood";
import Cart from "./Components/dashboard/Cart";

const Router: React.FC = () => {
  return (
    <div>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Login />} />
          <Route path="/home" element={<Home />} />
          <Route path="result/" element={<SearchResults/>} />
          <Route path="home/result/" element={<SearchResults/>} />
          <Route path="restaurantFoods/" element={<ResFood/>} />
          <Route path="cart/" element={<Cart/>} />
          
        </Routes>
      </BrowserRouter>
    </div>
  );
};

export default Router;
