import React from "react";
import Navbar from "./Components/Navbar";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./Components/dashboard/Home";
import Footer from "./Components/Footer";

const Router = () => {
  return (
    <div>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Navbar />}></Route>
          <Route path="home/" element={<Home />}></Route>
          <Route path="footer/" element={<Footer />}></Route>
        </Routes>
      </BrowserRouter>
    </div>
  );
};

export default Router;
