import React from "react";
import Slider from "react-slick";

import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { SliderContainer } from "./Slider.styled";

const SimpleSlider = () => {
  const photos = [
    "./1.jpg",
    "./2.jpg",
    "./3.jpg",
    "./4.jpg",
    "./5.jpg",
    "./6.jpg",
    "./7.jpg",
    "./8.jpg",
    "./9.jpg",
  ];
  const settings = {
    dots: true,
    infinite: true,

    slidesToShow: 3,
    slidesToScroll: 3,
    autoplay: true,
    speed: 3000,
    autoplaySpeed: 5000,
    cssEase: "linear",
    spacing: 20,
  };

  return (
    <SliderContainer>
      <Slider {...settings}>
        {photos.map((img) => {
          return (
            <div key={img}>
              <img src={img} alt={img} width={400} height={300} />
            </div>
          );
        })}
      </Slider>
    </SliderContainer>
  );
};

export default SimpleSlider;
