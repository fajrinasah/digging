import "./styles.css";

export default function SectionTitle({
  content = "This is Section Title",
  size = "large",
  color = "contrast",
  bgColor = "transparent",
}) {
  return (
    <div className={`section-title ${size} color-${color} bg-${bgColor}`}>
      <div className="decor-circle"></div>
      <div className="decor-triangle-right"></div>
      <p>{content}</p>
    </div>
  );
}
