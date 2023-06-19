import "./styles.css";
import InputToolbarSelect from "../../01-Atoms/Inputs/InputToolbarSelect";
import DiggingToolbarSort from "../DiggingToolbarSortRadios";
import DiggingToolbarSearch from "../DiggingToolbarSearch";

export default function DiggingToolbar({
  optionsForCategory,
  onChangeCategory,
  onChangeSortFromNewest,
  onChangeSortFromOldest,
  onChangeSelectSearch,
  onChangeInputSearch,
}) {
  return (
    <div className="digging-toolbar">
      <div className="div-for-select-category">
        <InputToolbarSelect
          forId="selectCategory"
          label="Category"
          optionsArr={optionsForCategory}
          onChange={onChangeCategory}
        />
      </div>
      <DiggingToolbarSort
        onChangeSortFromNewest={onChangeSortFromNewest}
        onChangeSortFromOldest={onChangeSortFromOldest}
      />
      <DiggingToolbarSearch
        onChangeSelectSearch={onChangeSelectSearch}
        onChangeInputSearch={onChangeInputSearch}
      />
    </div>
  );
}
