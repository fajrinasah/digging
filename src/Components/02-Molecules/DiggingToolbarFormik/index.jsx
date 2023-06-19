import { Formik, Form } from "formik";
import { useState } from "react";

import "./styles.css";

import InputToolbarSelect from "../../01-Atoms/Inputs/InputToolbarSelect";
import DiggingToolbarSort from "../DiggingToolbarSortRadios";
import DiggingToolbarSearch from "../DiggingToolbarSearch";

import DiggingToolbarSearchFormik from "./DiggingToolbarElementsFormik/DiggingToolbarSearchFormik";
import DiggingToolbarSortRadiosFormik from "./DiggingToolbarElementsFormik/DiggingToolbarSortRadiosFormik";
import InputToolbarSelectCategoryFormik from "./DiggingToolbarElementsFormik/InputToolbarSelectCategoryFormik";
import InputSubmit from "../../01-Atoms/Inputs/InputSubmit";
import { getArticles } from "../../../Store/Slices/Blogs/slices";

const generatePayload = (categoryId = "", sortValue = "DESC") => {
  let payload = `?`;

  if (!categoryId) {
    payload = `${payload}sort=${sortValue}&page=1`;
  } else {
    payload = `${payload}id_cat=${categoryId}&sort=${sortValue}&page=1`;
  }

  return payload;
};

const generateCurrentQuery = (categoryId = "", sortValue = "DESC") => {
  let query = `?`;

  if (!categoryId) {
    query = `${query}sort=${sortValue}`;
  } else {
    query = `${query}id_cat=${categoryId}&sort=${sortValue}`;
  }

  return query;
};

const generateFilteredResults = (
  unfilteredResults = [],
  searchOption = "title",
  searchInput = ""
) => {
  let filteredResults = [];

  if (searchOption == "title") {
    filteredResults = unfilteredResults.filter((article) =>
      article.title.includes(searchInput)
    );
  } else {
    filteredResults = unfilteredResults.filter((article) =>
      article.CategoryId.includes(searchInput)
    );
  }

  return filteredResults;
};

export default function DiggingToolbarFormik({ articles = [] }) {
  // const PARAMETER = `?id_cat=${id_cat}&sort=${sort}&page=${page}`;
  const [currentQuery, setCurrentQuery] = useState(`?sort=DESC`);
  const [filteredArticles, setFilteredArticles] = useState([]);

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

          console.log(`CLICKED: send login request`);
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
