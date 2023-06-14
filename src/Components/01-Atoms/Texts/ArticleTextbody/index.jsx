import "./styles.css";

export default function ArticleTextbody({
  textbody = "",
  color = "contrast",
  size = "large",
}) {
  return (
    <div className={`article-textbody color-${color} ${size}`}>{textbody}</div>
  );
}
