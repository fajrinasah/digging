import "./styles.css";

export default function ArticleMainshot({ size = "small", imgSource = "" }) {
  return (
    <div className={`article-mainshot ${size}`}>
      <img src={process.env.REACT_APP_IMAGE_URL + imgSource} alt="" />
    </div>
  );
}
