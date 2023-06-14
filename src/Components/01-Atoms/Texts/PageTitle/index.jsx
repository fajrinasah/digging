import "./styles.css";

export default function PageTitle({ content = "This is Page Title" }) {
  return (
    <div className="page-title">
      <h2>{content}</h2>
    </div>
  );
}
