import "../styles.css";

import ButtonStandard from "../../Buttons/ButtonStandard";

export default function InputButton({
  flexDirection,
  content,
  buttonContent,
  buttonClicked,
}) {
  return (
    <div className={`input-button label-and-input d-flex-${flexDirection}`}>
      <div className="label-for-input">
        <p>{content}</p>
      </div>
      <div className="input-for-label d-flex-row">
        <ButtonStandard
          story="ghost"
          content={buttonContent}
          onClick={buttonClicked}
        />
      </div>
    </div>
  );
}
