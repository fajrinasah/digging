import "./styles.css";

export default function UserPhoto({
  size = "medium",
  imgSource = "",
  alt = "",
}) {
  return (
    <div className={`user-photo ${size}`}>
      <img src={imgSource} alt={alt} />
    </div>
  );
}
