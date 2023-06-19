import { useNavigate } from "react-router-dom";
import { useEffect, useState } from "react";
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
import SectionDigging from "../../03-Organisms/SectionDiggingFormik";

import {
  generatePayload,
  generateCurrentQuery,
  generateFilteredResults,
} from "./utilityFunctions";

export default function PageHome({ id, dispatch }) {
  const navigate = useNavigate();

  useEffect(() => {
    dispatch(getArticles({ id_cat: 1, page: 1, sort: "ASC" }));
    dispatch(getCarouselArticles());
    dispatch(getMostConserved());
    dispatch(getCategories());
  }, []);

  const [currentQuery, setCurrentQuery] = useState(`?sort=DESC`);
  const [filteredArticles, setFilteredArticles] = useState([]);

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

  /*===============PAGINATION FUNCTIONS================*/

  const disabledPrevious = currentPage === 1;
  const disabledNext = currentPage >= totalPage;

  const onChangePagination = (page) => {
    if (page == "previous") {
      dispatch(getArticles(`${currentQuery}&page=${currentPage - 1}`));
    } else if (page == "next") {
      dispatch(getArticles(`${currentQuery}&page=${currentPage + 1}`));
    } else {
      dispatch(getArticles(`${currentQuery}&page=${page}`));
    }
  };

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
          filteredArticles={filteredArticles}
          categories={categories}
          isLoading={isLoading}
          generateCurrentQuery={generateCurrentQuery}
          setCurrentQuery={setCurrentQuery}
          generatePayload={generatePayload}
          dispatch={dispatch}
          getArticles={getArticles}
          generateFilteredResults={generateFilteredResults}
          setFilteredArticles={setFilteredArticles}
          totalPage={totalPage}
          disabledPrevious={disabledPrevious}
          disabledNext={disabledNext}
          onChangePagination={onChangePagination}
        />
      </div>
    </div>
  );
}
