import "../styles.css";

export default function InputProfileResult({ dataLabel, dataContent }) {
  return (
    <div
      className={`input-profile-result label-and-input d-flex-${flexDirection}`}
    >
      <div className="label-for-input">
        <p>{dataLabel}</p>
      </div>
      <div className="input-for-label">{dataContent}</div>
    </div>
  );
}
