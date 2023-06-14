import "./styles.css";

export default function FindingsCounter({ totalFindings }) {
  return (
    <div className="findings-counter">
      <p className="findings">Findings:</p>
      <p className="counter">{totalFindings}</p>
    </div>
  );
}
