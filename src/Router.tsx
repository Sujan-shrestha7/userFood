import React from "react";
import Navbar from "./Components/Navbar";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Login from "./Components/dashboard/Login";
import HomeNav from "./homeNav";
import Home from "./Components/dashboard/Home";
import SearchResults from "./Components/Order&search.tsx/searchResults";

const Router: React.FC = () => {
  return (
    <div>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Navbar />} />
          <Route path="login/" element={<Login />} />
          <Route path="home/" element={<Home />} />
          <Route path="result/" element={<SearchResults/>} />
        </Routes>
      </BrowserRouter>
    </div>
  );
};

export default Router;
