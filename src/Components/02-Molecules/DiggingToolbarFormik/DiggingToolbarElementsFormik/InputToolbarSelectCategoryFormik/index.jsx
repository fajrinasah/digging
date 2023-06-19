import { Field } from "formik";

import "./styles.css";

export default function InputToolbarSelectCategoryFormik({ categories = [] }) {
  const RenderOptions = () =>
    categories.map((category) => {
      return (
        <option key={category.id} value={category.id}>
          {category.name}
        </option>
      );
    });

  return (
    <div className="input-toolbar-select d-flex-row">
      <label htmlFor="categoryOption" className="label-for-select">
        Category
      </label>

      <Field
        as="select"
        name="categoryOption"
        id="categoryOption"
        className="select-for-label"
      >
        <option value="">All</option>
        <RenderOptions />
      </Field>
    </div>
  );
}
