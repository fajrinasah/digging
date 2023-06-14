import "./styles.css";

export default function ArticleImage({ imgSource = "", alt = "" }) {
  return (
    <div className="article-image">
      <img src={imgSource} alt={alt} />
    </div>
  );
}
