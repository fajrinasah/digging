import { useNavigate } from "react-router-dom";
import { useEffect, useState } from "react";
import { useSelector } from "react-redux";

/*------------------------------------------*/
import {
  getArticles,
  getCarouselArticles,
  getMostConserved,
  getCategories,
  getMostConservedInEachCategory,
} from "../../../Store/Slices/Blogs/slices";
import {
  setFilteredArticles,
  searchArticlesTitle,
  searchArticlesKeyword,
  setArticleData,
} from "../../../Store/Slices/Blogs";
import { generatePayload, generateCurrentQuery } from "./utilityFunctions";
/*------------------------------------------*/

import "./styles.css";

/*------------------------------------------*/

import Masthead from "../../02-Molecules/Masthead";
import AccessLoginRegister from "../../02-Molecules/AccessLoginRegister";
import HomeSectionCarousel from "../../03-Organisms/HomeSectionCarousel";
import HomeSectionCategoryCards from "../../03-Organisms/HomeSectionCategoryCards";
import HomeSectionTopTenList from "../../03-Organisms/HomeSectionTopTenList";
import SectionDigging from "../../03-Organisms/SectionDiggingFormik";

// const buttonPageArray = document.getElementsByClassName("button-page");

export default function PageHome({ id, dispatch }) {
  const navigate = useNavigate();

  /*===============GLOBAL STATES================*/
  const categories = useSelector((state) => {
    return state.blogs?.categories;
  });

  const carouselArticles = useSelector((state) => {
    return state.blogs?.carouselArticles;
  });

  const mostConservedArticles = useSelector((state) => {
    return state.blogs?.mostConservedArticles;
  });

  const mostConservedInEachCategory = useSelector((state) => {
    return state.blogs?.mostConservedInEachCategory;
  });

  const articles = useSelector((state) => {
    return state.blogs?.articles;
  });

  const filteredArticles = useSelector((state) => {
    return state.blogs?.filteredArticles;
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

  /*===============LOCAL STATES================*/

  const [currentQuery, setCurrentQuery] = useState(`?sort=DESC`);
  const [searchState, setSearchState] = useState(false);

  /*===============USE EFFECT================*/
  useEffect(() => {
    dispatch(getMostConservedInEachCategory());
    dispatch(getArticles(`?sort=DESC&page=1`));
    dispatch(getCarouselArticles());
    dispatch(getMostConserved());
    dispatch(getCategories());
  }, [dispatch]);

  /*===============PAGINATION CONFIGURATIONS================*/

  const disabledPrevious = currentPage === 1;
  const disabledNext = currentPage >= totalPage;

  const onChangePagination = (page) => {
    if (page === "previous") {
      console.log(
        `DISPATCHED: getArticles(${currentQuery}&page=${currentPage - 1})`
      );
      dispatch(getArticles(`${currentQuery}&page=${currentPage - 1}`));
    } else if (page === "next") {
      console.log(
        `DISPATCHED: getArticles(${currentQuery}&page=${currentPage + 1})`
      );
      dispatch(getArticles(`${currentQuery}&page=${currentPage + 1}`));
    } else {
      console.log(`DISPATCHED: getArticles(${currentQuery}&page=${page})`);
      dispatch(getArticles(`${currentQuery}&page=${page}`));
    }
  };

  /*===============ACTIVE PAGE STYLE================*/

  // for (let i = 1; i < totalPage; i++) {
  //   buttonPageArray[i] == `button#${currentPage}.button-page`
  //     ? (document.getElementById(currentPage).className == "button-page active" ? document.getElementById(currentPage).class)
  //     : (document.getElementById(`${i}`).className = "button-page");
  // }

  return (
    <div className="page-home">
      <Masthead />

      <div className="access-container">
        {!id ? <AccessLoginRegister /> : null}
      </div>

      <div className="categories-container">
        <HomeSectionCategoryCards
          flexDirection="row"
          categories={mostConservedInEachCategory}
        />
      </div>

      <div className="carousel-container d-flex-row">
        <HomeSectionCarousel
          carouselArticles={carouselArticles}
          navigate={navigate}
          dispatch={dispatch}
          setArticleData={setArticleData}
        />
      </div>

      <div className="top-ten-container">
        <HomeSectionTopTenList mostConservedArticles={mostConservedArticles} />
      </div>

      <div className="digging-container d-flex-row">
        <SectionDigging
          searchState={searchState}
          setSearchState={setSearchState}
          unfilteredArticles={articles}
          filteredArticles={filteredArticles}
          categories={categories}
          isLoading={isLoading}
          generateCurrentQuery={generateCurrentQuery}
          setCurrentQuery={setCurrentQuery}
          generatePayload={generatePayload}
          dispatch={dispatch}
          getArticles={getArticles}
          searchArticlesTitle={searchArticlesTitle}
          searchArticlesKeyword={searchArticlesKeyword}
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
