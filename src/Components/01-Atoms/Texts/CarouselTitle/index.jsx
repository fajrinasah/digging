import "./styles.css";

export default function CarouselTitle({ size = "large" }) {
  return (
    <div className={`carousel-title ${size}`}>
      <div className="decor-circle"></div>
      <div className="decor-triangle-right"></div>
      <h2>
        Just Founded!
        <span className="sr-only">New articles for you to dig.</span>
      </h2>
    </div>
  );
}
