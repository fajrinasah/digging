import { Formik } from "formik";

import "./styles.css";

import DiggingToolbarSearchFormik from "./DiggingToolbarElementsFormik/DiggingToolbarSearchFormik";
import DiggingToolbarSortRadiosFormik from "./DiggingToolbarElementsFormik/DiggingToolbarSortRadiosFormik";
import InputToolbarSelectCategoryFormik from "./DiggingToolbarElementsFormik/InputToolbarSelectCategoryFormik";
import InputSubmit from "../../01-Atoms/Inputs/InputSubmit";

export default function DiggingToolbarFormik({
  setSearchState = () => {},
  categories = [],
  generateCurrentQuery = () => {},
  setCurrentQuery = () => {},
  generatePayload = () => {},
  dispatch = () => {},
  getArticles = () => {},
  searchArticlesTitle = () => {},
  searchArticlesKeyword = () => {},
}) {
  return (
    <Formik
      initialValues={{
        categoryOption: "",
        sortOption: "DESC",
        searchOption: "title",
        searchInput: "",
      }}
      onSubmit={(values, { setSubmitting }) => {
        try {
          console.log(values);
          const categoryOption = values.categoryOption;
          const sortOption = values.sortOption;

          const currentQuery = generateCurrentQuery(categoryOption, sortOption);
          setCurrentQuery(currentQuery);

          const payload = generatePayload(categoryOption, sortOption);
          dispatch(getArticles(payload));
          console.log(payload);

          if (values.searchInput.length === 0) {
            setSearchState(false);
            console.log(`NO SEARCH`);
          } else if (values.searchOption === "title") {
            setSearchState(true);
            dispatch(searchArticlesTitle(values.searchInput));
            console.log(`SEARCHED: title`);
          } else if (values.searchOption === "keyword") {
            setSearchState(true);
            dispatch(searchArticlesKeyword(values.searchInput));
            console.log(`SEARCHED: keyword`);
          }

          console.log(`CLICKED: do filter`);
          setSubmitting(false);
        } catch (error) {
          console.log("error", error?.message);
          return { message: error?.message };
        }
      }}
    >
      {({ handleSubmit, isSubmitting }) => (
        <form onSubmit={handleSubmit} className="digging-toolbar d-flex-row">
          <div className="div-for-select-category">
            <InputToolbarSelectCategoryFormik categories={categories} />
          </div>
          <DiggingToolbarSortRadiosFormik />
          <DiggingToolbarSearchFormik />
          <InputSubmit value="Apply" disabled={isSubmitting} story="ghost" />
        </form>
      )}
    </Formik>
  );
}
