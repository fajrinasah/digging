import "./styles.css";

export default function ArticleSubheadline({
  subheadline = "This is the article’s subheadline, a simple sentence, to catch user’s attention to this particular article.",
  color = "contrast",
  size = "large",
  bold = "bold",
}) {
  return (
    <div className={`article-subheadline color-${color} ${size} ${bold}`}>
      <p>{subheadline}</p>
    </div>
  );
}
