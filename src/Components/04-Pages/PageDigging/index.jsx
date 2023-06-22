import PageTitle from "../../01-Atoms/Texts/PageTitle";
import SectionDigging from "../../03-Organisms/SectionDiggingFormik";

export default function PageDigging({ category }) {
  return (
    <div className="page-digging d-flex-column">
      <PageTitle content={category} />
      <div className="digging-container d-flex-row">
        <SectionDigging />
      </div>
    </div>
  );
}
