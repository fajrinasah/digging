import "../styles.css";

export default function InputSelect({
  flexDirection,
  inputId,
  labelText,
  placeholderOption = "",
}) {
  const categories = [
    { value: "all", content: "All" },
    { value: "anthropology", content: "Anthropology" },
    { value: "archaeology", content: "Archaeology" },
    { value: "museology", content: "Museology" },
    { value: "others", content: "Others" },
  ];

  const RenderOptions = () =>
    categories.map((option, index) => {
      return (
        <option key={index} value={option.value}>
          {option.content}
        </option>
      );
    });

  return (
    <div className={`label-and-input d-flex-${flexDirection}`}>
      <label for={inputId} className="label-for-input">
        {labelText}
      </label>
      <select className="input-for-label" name={inputId} id={inputId}>
        <option className="placeholder-option" value="">
          {placeholderOption}
        </option>
        <RenderOptions />
      </select>
    </div>
  );
}
