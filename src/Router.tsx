import React from "react";
import Navbar from "./Components/Navbar";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./Components/dashboard/Home";
import Footer from "./Components/Footer";
import HomeNav from "./homeNav";

const Router: React.FC = () => {
  return (
    <div>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Navbar />} />
          <Route path="login/" element={<Home />} />
          <Route path="homeNav/" element={<HomeNav />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
};

export default Router;
