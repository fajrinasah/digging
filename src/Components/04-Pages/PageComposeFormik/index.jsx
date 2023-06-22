import "./styles.css";
import "../../02-Molecules/FormComposeArticleDetails/styles.css";
import "../../02-Molecules/FormComposeArticleContent/styles.css";

import "../../01-Atoms/Texts/SectionTitle/styles.css";
import "../../01-Atoms/ComposeTextbody/styles.css";
import "../../01-Atoms/ComposeReferences/styles.css";
import "../../01-Atoms/Texts/SectionTitle/styles.css";
import "../../01-Atoms/Inputs/InputSelect/styles.css";
import "../../01-Atoms/Inputs/InputText/styles.css";
import "../../01-Atoms/Inputs/InputTextArea/styles.css";
import "../../01-Atoms/Inputs/InputFile/styles.css";

import "../../01-Atoms/Texts/PageTitle";
import "../../01-Atoms/Inputs/InputSubmit";

import FormComposeArticleDetails from "../../02-Molecules/FormComposeArticleDetails";
import FormComposeArticleContent from "../../02-Molecules/FormComposeArticleContent";

export default function PageCompose() {
  return (
    <div className="page-compose">
      <PageTitle content="Compose a New Finding" />
      <form className="form-compose">
        {/*==========================ARTICLE'S DETAILS==============================*/}
        {/* <FormComposeArticleDetails optionsArrObj={categoriesArrObj} /> */}
        <fieldset className="form-compose-article-details">
          <legend>
            <SectionTitle
              content="Article's Details"
              size="small"
              color="contrast"
              bgColor="main"
            />
          </legend>
          <div className="form-container">
            <InputSelect
              flexDirection="row"
              inputId=""
              labelText="Category"
              placeholderOption="Choose this article's category"
              // optionsArray={optionsArray}
              // value={categoryValue}
              // onChange={handleChange}
              // onBlur={handleBlur}
            />
            <InputText
              flexDirection="row"
              inputId="headline"
              labelText="Headline"
              required=""
              autoCapitalize=""
              inputName=""
              inputPlaceholder="An intriguing title to give the gist of your finding."
              minLength=""
              maxLength=""
              title=""
            />
            <InputText
              flexDirection="row"
              inputId="subheadline"
              labelText="Subheadline"
              required=""
              autoCapitalize=""
              inputName=""
              inputPlaceholder="This is the article’s subheadline to catch user’s attention to this particular article."
              minLength=""
              maxLength=""
              title=""
            />
            <InputFile
              flexDirection="row"
              inputId="mainImage"
              labelText="Main Image"
              required=""
              autoCapitalize=""
              inputName=""
              inputPlaceholder=""
              accept=""
              title=""
            />
            <InputText
              flexDirection="row"
              inputId="mainImageCaption"
              labelText="Main Image Caption"
              required=""
              autoCapitalize=""
              inputName=""
              inputPlaceholder="This is the main image’s caption that gives more information about the image concisely."
              minLength=""
              maxLength=""
              title=""
            />
            <InputTextArea
              flexDirection="row"
              inputId="lede"
              labelText="Lede"
              required=""
              autoCapitalize=""
              inputName=""
              inputPlaceholder="An opening sentence or paragraph that summarized the most important aspects of your finding."
              cols=""
              rows=""
              minLength=""
              maxLength=""
              title=""
            />
            <InputText
              flexDirection="row"
              inputId="keywords"
              labelText="Keywords"
              required=""
              autoCapitalize=""
              inputName=""
              inputPlaceholder="A group of three to five keywords, each separated by a comma."
              minLength=""
              maxLength=""
              title=""
            />
          </div>
        </fieldset>

        {/*==========================ARTICLE'S CONTENT==============================*/}
        {/* <FormComposeArticleContent /> */}
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
              <ComposeTextbody />
              <div className="decor-custom-div"></div>
              <ComposeReferences />
            </div>
          </fieldset>
          <div className="decor-custom-div"></div>
        </div>

        <div className="button-container">
          <InputSubmit value="Publish" />
        </div>
      </form>
    </div>
  );
}
