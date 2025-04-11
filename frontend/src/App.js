// src/App.js
import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import Carousel from "./components/Carousel";
import AboutUs from "./components/AboutUs";
import Login from "../src/pages/Login";

const Home = () => {
  return (
    <div>
      <Carousel />
      <AboutUs />
    </div>
  );
};

const App = () => {
  return (
    <Router>
      <div style={{ minHeight: "100vh", position: "relative" }}>
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/login" element={<Login />} />
        </Routes>
        <Footer />
      </div>
    </Router>
  );
};

export default App;