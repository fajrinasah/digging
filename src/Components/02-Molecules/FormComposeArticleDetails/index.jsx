import "./styles.css";

import SectionTitle from "../../01-Atoms/Texts/SectionTitle";
import InputSelect from "../../01-Atoms/Inputs/InputSelect";
import InputText from "../../01-Atoms/Inputs/InputText";
import InputTextArea from "../../01-Atoms/Inputs/InputTextArea";
import InputFile from "../../01-Atoms/Inputs/InputFile";

export default function FormComposeArticleDetails({ optionsArrObj }) {
  return (
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
          optionsArrObj={optionsArrObj}
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
  );
}
