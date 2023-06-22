import "./styles.css";

export default function UserPhoto({
  size = "medium",
  imgSource = "",
  alt = "",
  onClick = () => {},
}) {
  return (
    <div className={`user-photo ${size} d-flex-row`}>
      <img
        src={process.env.REACT_APP_IMAGE_URL + imgSource}
        alt={alt}
        onClick={onClick}
      />
    </div>
  );
}
