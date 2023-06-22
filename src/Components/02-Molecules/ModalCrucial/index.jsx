import "./styles.css";

import ModalDefaultText from "../../01-Atoms/Texts/ModalDefaultText";
import ButtonStandard from "../../01-Atoms/Buttons/ButtonStandard";

export default function ModalCrucial({
  crucialType = "danger",
  content = "Are you sure you want to {do something crucial}?",
  confirmCrucial = "Confirm",
  cancelClicked,
  confirmClicked,
}) {
  return (
    <div className="modal-crucial d-flex-column">
      <div className="modal-text-container">
        <ModalDefaultText
          color="contrast"
          bgColor="main"
          content={content}
          bold="bold"
        />
      </div>
      <div className="modal-crucial-buttons d-flex-row">
        <ButtonStandard
          story="ghost"
          bold="bold"
          content="Cancel"
          onClick={cancelClicked}
        />
        {crucialType === "danger" ? (
          <ButtonStandard
            story="raised-warning"
            bold="bold"
            content={confirmCrucial}
            onClick={confirmClicked}
          />
        ) : (
          <ButtonStandard
            story="raised"
            bold="bold"
            content={confirmCrucial}
            onClick={confirmClicked}
          />
        )}
      </div>
    </div>
  );
}
