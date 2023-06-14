import "./styles.css";

export default function ArticleLede({
  lede = "This is the article’s lede. An opening sentence or paragraph that summarized the most important aspects of your finding. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Et magnis dis parturient montes nascetur ridiculus mus. Neque convallis a cras semper. Suspendisse faucibus interdum posuere lorem. ",
  color = "contrast",
  size = "large",
  bold = "",
}) {
  return (
    <div className={`article-lede color-${color} ${size} ${bold}`}>
      <p>{lede}</p>
    </div>
  );
}
