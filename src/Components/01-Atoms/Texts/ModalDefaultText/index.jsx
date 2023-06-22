import "./styles.css";

export default function ModalDefaultText({
  type = "",
  color = "contrast",
  bgColor = "main",
  content = "This is an information to alert user about something",
  bold = "",
}) {
  return (
    <div
      className={`modal-default-text ${type} color-${color} bg-${bgColor} ${bold} d-flex-row`}
    >
      <div className="frame">
        <div className="modal-content d-flex-row">
          <p>{content}</p>
        </div>
      </div>
    </div>
  );
}
