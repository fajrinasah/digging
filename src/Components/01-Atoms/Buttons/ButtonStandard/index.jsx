import "./styles.css";

export default function ButtonStandard({
  story = "ghost",
  bold = "bold",
  content,
  onClick,
}) {
  return (
    <button
      type="button"
      className={`button-standard ${story} ${bold}`}
      onClick={onClick}
    >
      {content}
    </button>
  );
}
