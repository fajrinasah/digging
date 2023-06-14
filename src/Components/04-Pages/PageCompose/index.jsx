import "./styles.css";

import PageTitle from "../../01-Atoms/Texts/PageTitle";
import FormComposeArticleDetails from "../../02-Molecules/FormComposeArticleDetails";
import FormComposeArticleContent from "../../02-Molecules/FormComposeArticleContent";
import InputSubmit from "../../01-Atoms/Inputs/InputSubmit";

export default function PageCompose(categoriesArrObj, formAction) {
  return (
    <div className="page-compose">
      <PageTitle content="Compose a New Finding" />
      <form action={formAction} className="form-compose">
        <FormComposeArticleDetails optionsArrObj={categoriesArrObj} />
        <FormComposeArticleContent />
        <div className="button-container">
          <InputSubmit value="Publish" />
        </div>
      </form>
    </div>
  );
}
