import { Field } from "formik";

import "./styles.css";

export default function DiggingToolbarSortFormik() {
  return (
    <fieldset className="digging-toolbar-sort d-flex-row">
      <div className="legend-container">
        <legend className="bold">Sort from</legend>
      </div>
      <div className="radios-container d-flex-row">
        <div className="radio-container d-flex-row">
          <Field
            type="radio"
            name="sortOption"
            value="DESC"
            id="sortFromOldest"
          />
          <label htmlFor="sortFromNewest" className="label-for-radio">
            Newest
          </label>
        </div>
        <div className="radio-container d-flex-row">
          <Field
            type="radio"
            name="sortOption"
            value="ASC"
            id="sortFromOldest"
          />
          <label htmlFor="sortFromOldest" className="label-for-radio">
            Oldest
          </label>
        </div>
      </div>
    </fieldset>
  );
}
