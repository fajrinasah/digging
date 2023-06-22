import "./styles.css";

import SectionTitle from "../../01-Atoms/Texts/SectionTitle";
import ComposeTextbody from "../../01-Atoms/ComposeTextbody";
import ComposeReferences from "../../01-Atoms/ComposeReferences";

export default function FormComposeArticleContent({ textbodyRef }) {
  return (
    <div className="form-compose-article-content fieldset-container d-flex-row">
      <fieldset className="form-container-article-content d-flex-column">
        <legend>
          <SectionTitle
            content="Article's Content"
            size="small"
            color="contrast"
            bgColor="main"
          />
        </legend>
        <div className="form-container">
          <ComposeTextbody textbodyRef={textbodyRef} />
          <div className="decor-custom-div"></div>
          <ComposeReferences />
        </div>
      </fieldset>
      <div className="decor-custom-div"></div>
    </div>
  );
}
