import DiggingToolbar from "../../02-Molecules/DiggingToolbar";
import CardArticle from "../CardArticle";

export default function SectionDigging() {
  return (
    <div className="section-digging">
      <DiggingToolbar />
      <div className="cards-display d-flex-row">
        <CardArticle direction="vertical" />
        <CardArticle direction="vertical" />
        <CardArticle direction="vertical" />
        <CardArticle direction="vertical" />
        <CardArticle direction="vertical" />
        <CardArticle direction="vertical" />
        <CardArticle direction="vertical" />
      </div>
    </div>
  );
}
