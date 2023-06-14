import { Link } from "react-router-dom";

import "./styles.css";

export default function LinkCategory({ category = "Category", destination }) {
  return (
    <div class="link-category">
      <div class="decor-circle"></div>
      <Link className="link-of-category" to={destination}>
        {category}
      </Link>
    </div>
  );
}
