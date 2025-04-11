import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "./Navbar";
import Footer from "./Footer";
import Carousel from "./Carousel";
import Login from "./pages/Login";

const Home = () => (
  <div style={{ paddingBottom: '60px' }}> {/* Espaço para o footer */}
    <Carousel />
  </div>
);

const App = () => {
  return (
    <Router>
      <div style={{ minHeight: '100vh', position: 'relative' }}>
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