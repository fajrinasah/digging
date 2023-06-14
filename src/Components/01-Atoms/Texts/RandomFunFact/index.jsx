import "./styles.css";

export default function RandomFunFact({
  funfact = "This is a random sentence of fun fact based on scientific facts.",
  cite = "",
  size = "large",
}) {
  return (
    <div className={`random-fun-fact ${size}`}>
      <blockquote cite={cite}>“{funfact}”</blockquote>
    </div>
  );
}
