import React from "react";
import Slider from "react-slick";

import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const SimpleSlider = () => {
  const photos = ["./1.jpg", "./2.jpg", "./3.jpg"];
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
  };

  return (
    <Slider {...settings}>
      {photos.map((img) => {
        return (
          <div key={img}>
            <img src={img} alt={img} width={400} height={300} />
          </div>
        );
      })}
    </Slider>
  );
};

export default SimpleSlider;
