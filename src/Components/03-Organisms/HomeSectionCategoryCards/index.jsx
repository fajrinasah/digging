import "./styles.css";

import SectionTitle from "../../01-Atoms/Texts/SectionTitle";
import CardCategory from "../../02-Molecules/CardCategory";

export default function HomeSectionCategoryCards({ flexDirection }) {
  return (
    <div className="home-section-category-cards">
      <SectionTitle
        content="Categories"
        size="small"
        color="contrast"
        bgColor="main"
      />
      <div className={`d-flex-${flexDirection}`}>
        <CardCategory />
        <CardCategory />
        <CardCategory />
      </div>
    </div>
  );
}
