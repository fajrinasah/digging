import "./styles.css";
import ButtonStandard from "../../01-Atoms/Buttons/ButtonStandard";

export default function DiggingToolbarSort({ newestClicked, oldestClicked }) {
  return (
    <div className="digging-toolbar-sort d-flex-row">
      <p className="bold">Sort from</p>
      <ButtonStandard
        story="flat"
        bold=""
        content="Newest"
        onClick={newestClicked}
      />
      <ButtonStandard
        story="flat"
        bold=""
        content="Oldest"
        onClick={oldestClicked}
      />
    </div>
  );
}
