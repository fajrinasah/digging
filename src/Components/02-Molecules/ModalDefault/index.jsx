import "./styles.css";

import ModalDefaultText from "../../01-Atoms/Texts/ModalDefaultText";
import ButtonStandard from "../../01-Atoms/Buttons/ButtonStandard";

export default function ModalDefault({ content, confirmClicked }) {
  return (
    <div className="modal-default d-flex-column">
      <ModalDefaultText
        color="main"
        bgColor="contrast"
        content={content}
        bold=""
      />
      <div className="modal-button-container d-flex-row">
        <ButtonStandard
          story="raised"
          bold="bold"
          content="Okay"
          onClick={confirmClicked}
        />
      </div>
    </div>
  );
}
