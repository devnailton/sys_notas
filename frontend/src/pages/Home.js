import React from "react";
import Carousel from "../components/Carousel";
import AboutUs from "../components/AboutUs";
import Products from "../components/Products";
import Contact from "../components/Contact";

const Home = () => {
  return (
    <div>
      <Carousel />
      <AboutUs />
      <Products />
      <Contact />
    </div>
  );
};

export default Home;