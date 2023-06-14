import "./styles.css";

export default function ArticleDate({
  srGuide = "Published date: ",
  date = "1995/10/30",
  bold = "",
}) {
  return (
    <div className={`article-date ${bold}`}>
      <span className="sr-only">{srGuide}</span>
      <p>{date}</p>
    </div>
  );
}
