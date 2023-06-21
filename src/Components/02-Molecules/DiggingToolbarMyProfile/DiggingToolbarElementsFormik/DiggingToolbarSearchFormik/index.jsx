import { Field } from "formik";

import "./styles.css";
import "../InputToolbarSelectCategoryFormik/styles.css";

export default function DiggingToolbarSearchFormik() {
  return (
    <div className="digging-toolbar-search d-flex-row">
      <div className="input-toolbar-select d-flex-row">
        <label htmlFor="searchOption" className="label-for-select">
          Search
        </label>

        <Field
          as="select"
          name="searchOption"
          id="searchOption"
          className="select-for-label"
        >
          <option value="title">Title</option>
          <option value="keyword">Keyword</option>
        </Field>
      </div>

      <Field
        className="input-for-search"
        type="text"
        id="searchInput"
        name="searchInput"
        placeholder="type here"
        title="Search Input"
      />
    </div>
  );
}
