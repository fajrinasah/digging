import { Formik, Form } from "formik";

import "./styles.css";

import DiggingToolbarSearchFormik from "./DiggingToolbarElementsFormik/DiggingToolbarSearchFormik";
import DiggingToolbarSortRadiosFormik from "./DiggingToolbarElementsFormik/DiggingToolbarSortRadiosFormik";
import InputToolbarSelectCategoryFormik from "./DiggingToolbarElementsFormik/InputToolbarSelectCategoryFormik";
import InputSubmit from "../../01-Atoms/Inputs/InputSubmit";

export default function DiggingToolbarFormik({
  articles = [],
  categories = [],
  generateCurrentQuery = () => {},
  setCurrentQuery = () => {},
  generatePayload = () => {},
  dispatch = () => {},
  getArticles = () => {},
  generateFilteredResults = () => {},
  setFilteredArticles = () => {},
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
          const categoryOption = values.categoryOption;
          const sortOption = values.sortOption;

          const currentQuery = generateCurrentQuery(categoryOption, sortOption);
          setCurrentQuery(currentQuery);

          const payload = generatePayload(categoryOption, sortOption);
          dispatch(getArticles(payload));

          if (values.searchInput) {
            const searchOption = values.searchInput;
            const searchInput = values.searchInput;
            const results = generateFilteredResults(
              articles,
              searchOption,
              searchInput
            );
            setFilteredArticles(results);
          }

          setFilteredArticles(articles);

          console.log(`CLICKED: do filter`);
          setSubmitting(false);
        } catch (error) {
          console.log("error", error?.message);
          return { message: error?.message };
        }
      }}
    >
      {(isSubmitting) => (
        <Form className="digging-toolbar">
          <div className="div-for-select-category">
            <InputToolbarSelectCategoryFormik categories={categories} />
          </div>
          <DiggingToolbarSortRadiosFormik />
          <DiggingToolbarSearchFormik />
          <InputSubmit value="Filter & Search" disabled={isSubmitting} />
        </Form>
      )}
    </Formik>
  );
}
