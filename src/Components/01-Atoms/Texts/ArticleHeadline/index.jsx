import "./styles.css";

export default function ArticleHeadline({
  headline = "This is Supposed to be This Article’s Headline",
  color = "contrast",
  size = "large",
}) {
  return (
    <div className={`article-headline color-${color} ${size}`}>
      <h2>{headline}</h2>
    </div>
  );
}
