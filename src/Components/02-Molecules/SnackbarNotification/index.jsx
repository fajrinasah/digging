import "./styles.css";

import ModalDefaultText from "../../01-Atoms/Texts/ModalDefaultText";

export default function SnackbarNotification({ content }) {
  return (
    <div className="snackbar-notification">
      <ModalDefaultText
        color="contrast"
        bgColor="main"
        bold="bold"
        content={content}
      />
    </div>
  );
}
