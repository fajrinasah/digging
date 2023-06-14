import "./styles.css";

export default function InputToolbarSelect({
  forId = "",
  label = "Choose an option",
  optionsArrObj = [{}],
}) {
  const RenderOptions = () =>
    optionsArrObj.map((option, index) => {
      return (
        <option key={index} value={option.value}>
          {option.content}
        </option>
      );
    });

  return (
    <div className="input-toolbar-select d-flex-row">
      <label for={`${forId}-select`} className="label-for-select">
        {label}
      </label>

      <select
        name={`${forId}-select`}
        id={`${forId}-select`}
        className="select-for-label"
      >
        <RenderOptions />
      </select>
    </div>
  );
}
