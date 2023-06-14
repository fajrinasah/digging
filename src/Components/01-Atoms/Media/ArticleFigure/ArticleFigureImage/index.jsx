import "./styles.css";

import ArticleMainshot from "../../ArticleMainshot";

export default function ArticleFigureImage({ size, imgSource = "" }) {
  return (
    <div className="article-figure-image img-container">
      <ArticleMainshot size={size} imgSource={imgSource} />
    </div>
  );
}
