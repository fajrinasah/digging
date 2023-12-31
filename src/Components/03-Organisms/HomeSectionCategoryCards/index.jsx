import "./styles.css";

import SectionTitle from "../../01-Atoms/Texts/SectionTitle";
import CardCategory from "../../02-Molecules/CardCategory";

export default function HomeSectionCategoryCards({
  flexDirection,
  categories,
}) {
  const RenderCategoryCards = () => {
    return categories.map((category) => {
      return <CardCategory key={category.id} category={category.name} />;
    });
  };

  return (
    <section className="home-section-category-cards">
      <SectionTitle
        content="Categories"
        size="small"
        color="contrast"
        bgColor="main"
      />
      <div className="container d-flex-row">
        <div className={`category-cards-container d-flex-${flexDirection}`}>
          <RenderCategoryCards />
        </div>
      </div>
    </section>
  );
}
