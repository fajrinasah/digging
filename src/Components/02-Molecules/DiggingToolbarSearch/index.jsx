import "./styles.css";
import "../../01-Atoms/Inputs/InputToolbarSelect/styles.css";

export default function DiggingToolbarSearch({
  onChangeSelectSearch = {},
  onChangeInputSearch = {},
}) {
  const searchTypes = [
    { value: "title", content: "Title" },
    { value: "keyword", content: "Keyword" },
  ];

  const RenderOptions = () =>
    searchTypes.map((option, index) => {
      return (
        <option key={index} value={option.value}>
          {option.content}
        </option>
      );
    });
  return (
    <div className="digging-toolbar-search d-flex-row">
      <div className="input-toolbar-select d-flex-row">
        <label htmlFor="search-type" className="label-for-select">
          Search
        </label>

        <select
          name="search-type"
          id="search-type"
          className="select-for-label"
          onChange={onChangeSelectSearch}
        >
          <RenderOptions />
        </select>
      </div>

      <input
        className="input-for-search"
        type="text"
        id="searchInput"
        name="searchInput"
        placeholder="type here"
        title="Search Input"
        onChange={onChangeInputSearch}
      />
    </div>
  );
}
