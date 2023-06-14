import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

import "./styles.css";

import CarouselTitle from "../../01-Atoms/Texts/CarouselTitle";
import CarouselSlide from "../../02-Molecules/CarouselSlide";

export default function Carousel() {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
  };

  return (
    <div className="carousel d-flex-column">
      <CarouselTitle />
      <div className="slider-container">
        <Slider {...settings}>
          <div>
            <CarouselSlide />
          </div>
          <div>
            <CarouselSlide />
          </div>
          <div>
            <CarouselSlide />
          </div>
          <div>
            <CarouselSlide />
          </div>
          <div>
            <CarouselSlide />
          </div>
        </Slider>
      </div>
    </div>
  );
}
