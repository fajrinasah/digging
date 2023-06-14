import "./styles.css";

export default function ModalDefaultText({
  color = "contrast",
  bgColor = "main",
  content = "This is an information to alert user about something",
  bold = "",
}) {
  return (
    <div className={`modal-default-text color-${color} bg-${bgColor} ${bold}`}>
      <div className="frame">
        <div className="modal-content">
          <p>{content}</p>
        </div>
      </div>
    </div>
  );
}
