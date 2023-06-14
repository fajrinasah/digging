import "./styles.css";

export default function ArticleVideo({
  size = "large",
  videoSource = "",
  videoType = "mp4",
}) {
  return (
    <div className={`article-video-container ${size}`}>
      <div className="decor-custom-div"></div>
      <video controls className={`article-video ${size}`}>
        <source src={videoSource} type={`video/${videoType}`} />
        <p>
          Your browser doesn't support HTML video. Here is a
          <a href={videoSource}>link to the video</a> instead.
        </p>
      </video>
      <div className="decor-custom-div"></div>
    </div>
  );
}
