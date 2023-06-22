import "../styles.css";

export default function InputSelect({
  flexDirection,
  inputId,
  labelText,
  placeholderOption = "",
  value,
  onChange,
  onBlur,
  optionsArray = [],
}) {
  // const categories = [
  //   { value: "all", content: "All" },
  //   { value: "anthropology", content: "Anthropology" },
  //   { value: "archaeology", content: "Archaeology" },
  //   { value: "museology", content: "Museology" },
  //   { value: "others", content: "Others" },
  // ];

  const RenderOptions = () => {
    return optionsArray.map((option) => {
      return (
        <option key={option?.id} value={option?.id}>
          {option?.name}
        </option>
      );
    });
  };

  return (
    <div className={`label-and-input d-flex-${flexDirection}`}>
      <label for={inputId} className="label-for-input">
        {labelText}
      </label>
      <select
        className="input-for-label"
        name={inputId}
        id={inputId}
        value={value}
        onChange={onChange}
        onBlur={onBlur}
      >
        <option className="placeholder-option" value="">
          {placeholderOption}
        </option>
        <RenderOptions />
      </select>
    </div>
  );
}
