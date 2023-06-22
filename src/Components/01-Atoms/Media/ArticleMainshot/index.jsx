import "./styles.css";

export default function ArticleMainshot({
  size = "small",
  imgSource = "",
  onClick = () => {},
}) {
  return (
    <div className={`article-mainshot ${size} d-flex-row`}>
      <img
        src={process.env.REACT_APP_IMAGE_URL + imgSource}
        alt=""
        onClick={onClick}
      />
    </div>
  );
}
