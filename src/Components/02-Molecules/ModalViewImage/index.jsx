import "./styles.css";

import ButtonStandard from "../../01-Atoms/Buttons/ButtonStandard";
import ArticleMainshot from "../../01-Atoms/Media/ArticleMainshot";

export default function ModalViewImage({ imgSource, closeClicked = () => {} }) {
  return (
    <div className="modal-view-image d-flex-column">
      <div className="modal-image-container d-flex-row">
        <ArticleMainshot size="x-large" imgSource={imgSource} />
      </div>
      <div className="modal-view-image-button d-flex-row">
        <ButtonStandard
          story="ghost"
          bold=""
          content="Close"
          onClick={closeClicked}
        />
      </div>
    </div>
  );
}
