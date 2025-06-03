import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Login from "./Components/dashboard/Login";
import Home from "./Components/dashboard/Home";
import SearchResults from "./Components/Order&search.tsx/searchResults";
import ResFood from "./Components/Order&search.tsx/resFood";
import Cart from "./Components/dashboard/Cart";
import Payment from "./Components/Payment.tsx/payment";
import HomeNav from "./Components/homeNav";
import Footer from "./Components/Footer";
// import LoginForm from "./Components/dashboard/loginForms";
import LoginForm from "./Components/dashboard/loginForm";
import Registerform from "./Components/dashboard/Registerform";
import Topcategory from "./Components/Top category/Topcategory";
import RegisterRestaurant from "./Components/dashboard/RegisterRestaurant";

const Router: React.FC = () => {
  return (
    <div>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Login />} />
          <Route path="login/" element={<LoginForm />} />
          <Route path="/register" element={<Registerform />} />
          <Route path="/home" element={<Home />} />
          <Route path="/register_restaurant" element={<RegisterRestaurant/>} />
          <Route path="/top-category" element={<Topcategory />} />
          <Route path="result/" element={<SearchResults />} />
          <Route path="home/result/" element={<SearchResults />} />
          <Route path="restaurantFoods/" element={<ResFood />} />
          <Route path="cart/" element={<Cart />} />
          <Route path="payment/" element={<Payment />} />
          <Route path="homenavbar/" element={<HomeNav />} />
          <Route path="footer/" element={<Footer />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
};

export default Router;
