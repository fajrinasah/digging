import "./styles.css";

export default function DiggingToolbarSort({
  onChangeSortFromNewest = {},
  onChangeSortFromOldest = {},
}) {
  return (
    <fieldset className="digging-toolbar-sort d-flex-row">
      <legend className="bold">Sort from</legend>
      <div className="radios-container d-flex-row">
        <div className="radio-container d-flex-row">
          <input
            defaultChecked
            type="radio"
            name="sortOption"
            value="ASC"
            id="sortFromNewest"
            onChange={onChangeSortFromNewest}
          />
          <label htmlFor="sortFromNewest" className="label-for-radio">
            Newest
          </label>
        </div>
        <div className="radio-container d-flex-row">
          <input
            defaultChecked
            type="radio"
            name="sortOption"
            value="DESC"
            id="sortFromOldest"
            onChange={onChangeSortFromOldest}
          />
          <label htmlFor="sortFromOldest" className="label-for-radio">
            Oldest
          </label>
        </div>
      </div>
    </fieldset>
  );
}
