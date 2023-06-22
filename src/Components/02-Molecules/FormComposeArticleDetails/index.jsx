import "./styles.css";

import SectionTitle from "../../01-Atoms/Texts/SectionTitle";
import InputSelect from "../../01-Atoms/Inputs/InputSelect";
import InputText from "../../01-Atoms/Inputs/InputText";
import InputTextArea from "../../01-Atoms/Inputs/InputTextArea";
import InputFile from "../../01-Atoms/Inputs/InputFile";

export default function FormComposeArticleDetails({
  optionsArray = [],
  categoryRef,
  titleRef,
  onChangeFile = () => {},
  keywordsRef,
}) {
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
          inputId="category"
          labelText="Category"
          placeholderOption="Choose this article's category"
          ref={categoryRef}
          optionsArray={optionsArray}
          required={true}
          // value={categoryValue}
          // onChange={handleChange}
          // onBlur={handleBlur}
        />
        <InputText
          flexDirection="row"
          inputId="headline"
          labelText="Headline"
          inputName="headline"
          inputPlaceholder="An intriguing title to give the gist of your finding."
          ref={titleRef}
          required={true}
        />
        <InputText
          flexDirection="row"
          inputId="subheadline"
          labelText="Subheadline"
          inputName="subheadline"
          inputPlaceholder="This is the article’s subheadline to catch user’s attention to this particular article."
          required={false}
        />
        <InputFile
          flexDirection="row"
          inputId="mainshot"
          labelText="Mainshot"
          inputName="mainshot"
          inputPlaceholder=""
          accept="image/jpg, image/jpeg, image/webp, image/png"
          onChange={onChangeFile}
          required={true}
        />
        <InputText
          flexDirection="row"
          inputId="mainshotCaption"
          labelText="Mainshot caption"
          inputName="mainshot-caption"
          inputPlaceholder="This is the main image’s caption that gives more information about the image concisely."
          required={false}
        />
        <InputTextArea
          flexDirection="row"
          inputId="lede"
          labelText="Lede"
          inputName="lede"
          inputPlaceholder="An opening sentence or paragraph that summarized the most important aspects of your finding."
          required={false}
        />
        <InputText
          flexDirection="row"
          inputId="keywords"
          labelText="Keywords"
          inputName="keywords"
          inputPlaceholder="A group of three to five keywords, each separated by a comma."
          ref={keywordsRef}
          required={false}
        />
      </div>
    </fieldset>
  );
}
