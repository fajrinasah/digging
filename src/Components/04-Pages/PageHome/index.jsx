import { useSelector } from "react-redux";

import "./styles.css";

import Masthead from "../../02-Molecules/Masthead";
import AccessLoginRegister from "../../02-Molecules/AccessLoginRegister";
import HomeSectionCarousel from "../../03-Organisms/HomeSectionCarousel";
import HomeSectionCategoryCards from "../../03-Organisms/HomeSectionCategoryCards";
import HomeSectionTopTenList from "../../03-Organisms/HomeSectionTopTenList";
import SectionDigging from "../../03-Organisms/SectionDigging";

export default function PageHome() {
  const { id } = useSelector((state) => {
    return {
      id: state.auth?.id,
    };
  });

  return (
    <div className="page-home">
      <Masthead />

      <div className="access-container">
        {id ? <AccessLoginRegister /> : null}
      </div>

      <div className="categories-container">
        <HomeSectionCategoryCards flexDirection="row" />
      </div>

      <div className="carousel-container d-flex-row">
        <HomeSectionCarousel />
      </div>

      <div className="top-ten-container">
        <HomeSectionTopTenList />
      </div>

      <div className="digging-container d-flex-row">
        <SectionDigging />
      </div>
    </div>
  );
}
