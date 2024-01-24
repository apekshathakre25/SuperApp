import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { createRoot } from "react-dom/client";
import Register from "./Components/Register/Register.jsx";
import Genre from "./Pages/Genre/Genre.jsx";
import Home from "./Pages/Home/Home.jsx";
import MoviesPage from "./Pages/MoviesPage/MoviesPage.jsx";
import { Component } from "react";

const AppRouter = () => (
  <BrowserRouter>
    <Routes>
      <Route path="/Register" element={<Register />} />
      <Route path="/Genre" element={<Genre />} />
      <Route path="/" element={<Home />} />
      <Route path="/Movies" element={<MoviesPage />} />
    </Routes>
  </BrowserRouter>
);

const root = createRoot(document.getElementById("root"));
root.render(<AppRouter />);
