import React from "react";
import Slider from "react-slick";
// Importando as imagens
import img01 from "../assets/img01.jpg";
import img02 from "../assets/img02.jpg";
import img03 from "../assets/img03.png";

const Carousel = () => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
  };

  return (
    <div style={{ width: "80%", margin: "0 auto", marginTop: "20px" }}>
      <Slider {...settings}>
        <div>
          <img
            src={img01}
            alt="Imagem 1"
            style={{ width: "100%", height: "400px", objectFit: "cover" }}
          />
        </div>
        <div>
          <img
            src={img02}
            alt="Imagem 2"
            style={{ width: "100%", height: "400px", objectFit: "cover" }}
          />
        </div>
        <div>
          <img
            src={img03}
            alt="Imagem 3"
            style={{ width: "100%", height: "400px", objectFit: "cover" }}
          />
        </div>
      </Slider>
    </div>
  );
};

export default Carousel;