import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

import "./styles.css";

import CarouselTitle from "../../01-Atoms/Texts/CarouselTitle";
import CarouselSlide from "../../02-Molecules/CarouselSlide";

export default function Carousel({
  carouselArticles = [],
  navigate,
  dispatch,
  setArticleData,
}) {
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
          {/* <RenderCarouselSlides /> */}
          <div>
            <CarouselSlide
              category={carouselArticles[0]?.Category?.name}
              date={carouselArticles[0]?.createdAt}
              byline={carouselArticles[0]?.User?.username}
              mainshotSource={carouselArticles[0]?.imageURL}
              headline={carouselArticles[0]?.title}
              onClick={() =>
                navigate(`/articleViewing/${carouselArticles[0]?.id}`, {
                  state: { articleId: carouselArticles[0]?.id },
                })
              }
            />
          </div>
          <div>
            <CarouselSlide
              category={carouselArticles[1]?.Category?.name}
              date={carouselArticles[1]?.createdAt}
              byline={carouselArticles[1]?.User?.username}
              mainshotSource={carouselArticles[1]?.imageURL}
              headline={carouselArticles[1]?.title}
              onClick={() =>
                navigate(`/articleViewing/${carouselArticles[1]?.id}`, {
                  state: { id: carouselArticles[1]?.id },
                })
              }
            />
          </div>
          <div>
            <CarouselSlide
              category={carouselArticles[2]?.Category?.name}
              date={carouselArticles[2]?.createdAt}
              byline={carouselArticles[2]?.User?.username}
              mainshotSource={carouselArticles[2]?.imageURL}
              headline={carouselArticles[2]?.title}
              onClick={() =>
                navigate(`/articleViewing/${carouselArticles[2]?.id}`, {
                  state: { id: carouselArticles[2]?.id },
                })
              }
            />
          </div>
          <div>
            <CarouselSlide
              category={carouselArticles[3]?.Category?.name}
              date={carouselArticles[3]?.createdAt}
              byline={carouselArticles[3]?.User?.username}
              mainshotSource={carouselArticles[3]?.imageURL}
              headline={carouselArticles[3]?.title}
              onClick={() =>
                navigate(`/articleViewing/${carouselArticles[3]?.id}`, {
                  state: { id: carouselArticles[3]?.id },
                })
              }
            />
          </div>
          <div>
            <CarouselSlide
              category={carouselArticles[4]?.Category?.name}
              date={carouselArticles[4]?.createdAt}
              byline={carouselArticles[4]?.User?.username}
              mainshotSource={carouselArticles[4]?.imageURL}
              headline={carouselArticles[4]?.title}
              onClick={() =>
                navigate(`/articleViewing/${carouselArticles[4]?.id}`, {
                  state: { id: carouselArticles[4]?.id },
                })
              }
            />
          </div>
        </Slider>
      </div>
    </div>
  );
}
