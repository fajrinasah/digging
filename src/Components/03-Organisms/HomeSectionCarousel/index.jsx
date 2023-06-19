import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

import "./styles.css";

import CarouselTitle from "../../01-Atoms/Texts/CarouselTitle";
import CarouselSlide from "../../02-Molecules/CarouselSlide";

export default function Carousel({ carouselArticles = [], navigate }) {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
  };

  const RenderCarouselSlides = () => {
    return carouselArticles.map((article) => {
      return (
        <div>
          <CarouselSlide
            key={article?.id}
            category={article?.Category?.name}
            date={article?.createdAt}
            byline={article?.User?.username}
            mainshotSource={article?.imageURL}
            headline={article?.title}
            onClick={() =>
              navigate(`/articleViewing/${article?.id}`, {
                state: { id: article?.id },
              })
            }
          />
        </div>
      );
    });
  };

  return (
    <div className="carousel d-flex-column">
      <CarouselTitle />
      <div className="slider-container">
        <Slider {...settings}>
          <RenderCarouselSlides />
        </Slider>
      </div>
    </div>
  );
}
