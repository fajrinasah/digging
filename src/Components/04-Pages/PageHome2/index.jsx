import { useNavigate } from "react-router-dom";
import { useEffect } from "react";
import { useSelector } from "react-redux";

import {
  getArticles,
  getCarouselArticles,
  getMostConserved,
  getCategories,
} from "../../../Store/Slices/Blogs/slices";

import "./styles.css";

import Masthead from "../../02-Molecules/Masthead";
import AccessLoginRegister from "../../02-Molecules/AccessLoginRegister";
import HomeSectionCarousel from "../../03-Organisms/HomeSectionCarousel";
import HomeSectionCategoryCards from "../../03-Organisms/HomeSectionCategoryCards";
import HomeSectionTopTenList from "../../03-Organisms/HomeSectionTopTenList";
import SectionDigging from "../../03-Organisms/SectionDigging";

// const { id } = useSelector((state) => {
//   return {
//     id: state.auth?.id,
//   };
// });

export default function PageHome({ id, dispatch }) {
  const navigate = useNavigate();

  useEffect(() => {
    dispatch(getArticles({ id_cat: 1, page: 1, sort: "ASC" }));
    dispatch(getCarouselArticles());
    dispatch(getMostConserved());
    dispatch(getCategories());
  }, []);

  // const {
  //   categories,
  //   carouselArticles,
  //   mostConservedArticles,
  //   articles,
  //   totalPage,
  //   currentPage,
  //   isLoading,
  // } = useSelector((state) => {
  //   return {
  //     categories: state.blogs.categories,
  //     carouselArticles: state.blogs.carouselArticles,
  //     mostConservedArticles: state.blogs.mostConservedArticles,
  //     articles: state.blogs.articles,
  //     totalPage: state.blogs.totalPage,
  //     currentPage: state.blogs.currentPage,
  //     isLoading: state.blogs.isLoading,
  //   };
  // });

  const categories = useSelector((state) => {
    return state.blogs?.categories;
  });

  const carouselArticles = useSelector((state) => {
    return state.blogs?.carouselArticles;
  });

  const mostConservedArticles = useSelector((state) => {
    return state.blogs?.mostConservedArticles;
  });

  const articles = useSelector((state) => {
    return state.blogs?.articles;
  });

  const totalPage = useSelector((state) => {
    return state.blogs?.totalPage;
  });

  const currentPage = useSelector((state) => {
    return state.blogs?.currentPage;
  });

  const isLoading = useSelector((state) => {
    return state.blogs?.isLoading;
  });

  /*===============FUNCTIONS================*/
  const onChangeCategory = () => {};

  const onChangeSortFromNewest = () => {};

  const onChangeSortFromOldest = () => {};

  const onChangeSelectSearch = () => {};

  const onChangeInputSearch = () => {};

  const disabledPrevious = false;

  const disabledNext = false;

  const onChangePagination = () => {};

  return (
    <div className="page-home">
      <Masthead />

      <div className="access-container">
        {!id ? <AccessLoginRegister /> : null}
      </div>

      <div className="categories-container">
        <HomeSectionCategoryCards flexDirection="row" />
      </div>

      <div className="carousel-container d-flex-row">
        <HomeSectionCarousel
          carouselArticles={carouselArticles}
          navigate={navigate}
        />
      </div>

      <div className="top-ten-container">
        <HomeSectionTopTenList mostConservedArticles={mostConservedArticles} />
      </div>

      <div className="digging-container d-flex-row">
        <SectionDigging
          articles={articles}
          optionsForCategory={categories}
          onChangeCategory={onChangeCategory}
          onChangeSortFromNewest={onChangeSortFromNewest}
          onChangeSortFromOldest={onChangeSortFromOldest}
          onChangeSelectSearch={onChangeSelectSearch}
          onChangeInputSearch={onChangeInputSearch}
          totalPage={totalPage}
          disabledPrevious={disabledPrevious}
          disabledNext={disabledNext}
          onChangePagination={onChangePagination}
        />
      </div>
    </div>
  );
}
