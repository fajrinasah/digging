import "./styles.css";

export default function ButtonSwitch({
  labelText,
  shape = "round",
  onSwitched,
}) {
  return (
    <label className="button-switch">
      <span className="sr-only">{labelText}</span>
      <input type="checkbox" onChange={onSwitched} />
      <span className={`slider ${shape}`}></span>
    </label>
  );
}
