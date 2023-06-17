import "./styles.css";

import ModalDefaultText from "../../01-Atoms/Texts/ModalDefaultText";

export default function SnackbarNotification({
  content = "",
  color = "main",
  bgColor = "contrast",
}) {
  return (
    <div className={`snackbar-notification`}>
      <ModalDefaultText
        color={color}
        bgColor={bgColor}
        bold="bold"
        content={content}
      />
    </div>
  );
}
