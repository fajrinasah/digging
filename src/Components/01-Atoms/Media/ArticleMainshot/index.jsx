import "./styles.css";

export default function ArticleMainshot({ size = "small", imgSource = "" }) {
  return (
    <div className={`article-mainshot ${size}`}>
      <img src={imgSource} alt="" />
    </div>
  );
}
