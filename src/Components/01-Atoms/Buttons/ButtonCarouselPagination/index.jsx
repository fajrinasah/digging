import "./styles.css";

export default function ButtonCarouselPagination(
  status = "default",
  currentPage = "",
  totalPage = "",
  onClick
) {
  return (
    <button
      className={`button-carousel-pagination ${(status = "default")}`}
      type="button"
      onClick={onClick}
    >
      <span className="sr-only">
        Page {currentPage} of {totalPage}
      </span>
    </button>
  );
}
