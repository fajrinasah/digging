import "./styles.css";

export default function ArticleFigure({
  imgSource = "",
  figcaption = "This is the main image’s caption that gives more information about the image concisely.",
}) {
  return (
    <figure className="article-figure d-flex-row">
      <figcaption className="article-figure-figcaption">
        <span className="figcaption-container">{figcaption}</span>
      </figcaption>
      <div className="article-figure-image img-container">
        <img src={imgSource} alt="" />
      </div>
    </figure>
  );
}
