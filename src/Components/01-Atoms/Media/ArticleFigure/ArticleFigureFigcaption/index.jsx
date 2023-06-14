import "./styles.css";

export default function ArticleFigureFigcaption({
  figcaption = "This is the main image’s caption that gives more information about the image concisely.",
}) {
  return (
    <figcaption className="article-figure-figcaption">
      <span className="figcaption-container">{figcaption}</span>
    </figcaption>
  );
}
