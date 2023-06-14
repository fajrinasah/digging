import "./styles.css";
import InputToolbarSelect from "../../01-Atoms/Inputs/InputToolbarSelect";
import DiggingToolbarSort from "../DiggingToolbarSort";
import DiggingToolbarSearch from "../DiggingToolbarSearch";

export default function DiggingToolbar({
  optionsForCategory,
  sortFromNewest,
  sortFromOldest,
}) {
  return (
    <div className="digging-toolbar">
      <div className="div-for-select-category">
        <InputToolbarSelect
          forId="selectCategory"
          label="Category"
          optionsArr={optionsForCategory}
        />
      </div>
      <DiggingToolbarSort
        newestClicked={sortFromNewest}
        oldestClicked={sortFromOldest}
      />
      <DiggingToolbarSearch />
    </div>
  );
}
