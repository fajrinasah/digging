import { useRef, useState } from "react";
import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import ReactQuill from "react-quill";
import "react-quill/dist/quill.snow.css";

import "./styles.css";
import "../../02-Molecules/FormComposeArticleDetails/styles.css";
import "../../02-Molecules/FormComposeArticleContent/styles.css";
import "../../01-Atoms/Inputs/styles.css";
import "../../01-Atoms/ComposeTextbody/styles.css";
import "../../01-Atoms/ComposeReferences/styles.css";

import PageTitle from "../../01-Atoms/Texts/PageTitle";
import SectionTitle from "../../01-Atoms/Texts/SectionTitle";
import FormComposeArticleDetails from "../../02-Molecules/FormComposeArticleDetails";
import FormComposeArticleContent from "../../02-Molecules/FormComposeArticleContent";
import InputSubmit from "../../01-Atoms/Inputs/InputSubmit";

import InputText from "../../01-Atoms/Inputs/InputText";
import InputTextArea from "../../01-Atoms/Inputs/InputTextArea";
import InputFile from "../../01-Atoms/Inputs/InputFile";
import InputSelect from "../../01-Atoms/Inputs/InputSelect";
import ComposeTextbody from "../../01-Atoms/ComposeTextbody";
import ComposeReferences from "../../01-Atoms/ComposeReferences";

import { publishArticle } from "../../../Store/Slices/Blogs/slices";
import { toastError, toastSuccess } from "../../01-Atoms/CustomToasts";

const modules = {
  toolbar: [
    ["bold", "italic", "underline", "strike"],
    [{ script: "sub" }, { script: "super" }],
    ["blockquote"],
    ["image", "video"],
  ],
};

/*===============================================================*/
//
/*===============================================================*/

export default function PageCompose({ dispatch }) {
  const navigate = useNavigate();

  /*=====================GLOBAL STATE=============================*/
  const categories = useSelector((state) => {
    return state.blogs?.categories;
  });

  const isLoading = useSelector((state) => {
    return state.blogs?.isLoading;
  });

  /*=====================LOCAL STATE=============================*/
  const [mainshot, setMainshot] = useState(null);

  /*=====================REFS=============================*/
  const categoryRef = useRef();
  const titleRef = useRef();
  const contentRef = useRef();
  const keywordsRef = useRef();

  /*=====================UPLOAD MAINSHOT=============================*/
  const uploadMainshotHandler = (e) => {
    const selectedMainshot = e.target.files[0];

    // Validate the requirements
    if (selectedMainshot) {
      const { type, size } = selectedMainshot;
      const allowedExtensions = [
        "image/jpg",
        "image/jpeg",
        "image/webp",
        "image/png",
      ];
      const maxSize = 3 * 1024 * 1024;

      if (allowedExtensions.includes(type) && size <= maxSize) {
        setMainshot(selectedMainshot);
        console.log("selected mainshot is valid");
      } else {
        setMainshot(null);
        e.target.value = null;
        console.log("selected mainshot is not valid");
        toastError(
          "Please upload a valid image (.jpg, .jpeg, .webp, .png) with maximum size 3MB"
        );
      }
    }
  };
  /*=====================PUBLISH HANDLER=============================*/
  const publishHandler = (e) => {
    e.preventDefault();

    if (!categoryRef.current?.value) {
      toastError("Please select a category");
      return;
    }

    if (!titleRef.current?.value) {
      console.log("headline: ", titleRef.current?.value);
      toastError("Please input the headline");
      return;
    }

    if (!mainshot) {
      toastError("Please upload an image as this artcle's mainshot");
      return;
    }

    const data = {
      title: titleRef.current?.value,
      content: contentRef.current?.value,
      country: "",
      CategoryId: categoryRef.current?.value,
      url: "",
      keywords: keywordsRef.current?.value.replaceAll(",", ""),
    };

    const formData = new FormData();
    formData.append("data", JSON.stringify(data));
    formData.append("file", mainshot);

    console.log("CategoryId: ", categoryRef.current?.value);
    console.log("title: ", titleRef.current?.value);
    console.log("content: ", contentRef.current?.value);
    console.log("mainshot: ", mainshot);
    console.log("keywords", keywordsRef.current?.value);
    console.log("form data: ", formData);

    dispatch(publishArticle(formData));
    navigate("/");
  };

  /*=========================================================================*/
  const RenderOptions = () => {
    return categories.map((option) => {
      return (
        <option key={option?.id} value={option?.id}>
          {option?.name}
        </option>
      );
    });
  };

  return (
    <div className="page-compose">
      <PageTitle content="Compose a New Finding" />
      <form onSubmit={publishHandler} className="form-compose">
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
            {/*------------------------------------MAINSHOT--------------------------------------*/}
            <InputFile
              flexDirection="row"
              inputId="mainshot"
              labelText="Mainshot"
              inputName="mainshot"
              inputPlaceholder=""
              accept="image/jpg, image/jpeg, image/webp, image/png"
              onChange={uploadMainshotHandler}
              required={true}
            />
            {/*------------------------------------MAINSHOT CAPTION--------------------------------------*/}
            <InputText
              flexDirection="row"
              inputId="mainshotCaption"
              labelText="Mainshot caption"
              inputName="mainshot-caption"
              inputPlaceholder="This is the main image’s caption that gives more information about the image concisely."
              required={false}
            />
            {/*------------------------------------CATEGORY--------------------------------------*/}
            <div className={`label-and-input d-flex-row`}>
              <label htmlFor="category" className="label-for-input">
                Category
              </label>
              <select
                className="input-for-label"
                name="category"
                id="category"
                ref={categoryRef}
                required={true}
              >
                <option className="placeholder-option" value="">
                  Choose this article's category
                </option>
                <RenderOptions />
              </select>
            </div>

            {/*------------------------------------HEADLINE--------------------------------------*/}
            <div className={`label-and-input d-flex-row`}>
              <label htmlFor="headline" className="label-for-input">
                Headline
              </label>
              <input
                className="input-for-label"
                type="text"
                required={true}
                id="headline"
                name="headline"
                placeholder="An intriguing title to give the gist of your finding."
                ref={titleRef}
              />
            </div>

            {/*------------------------------------SUBHEADLINE--------------------------------------*/}
            <InputText
              flexDirection="row"
              inputId="subheadline"
              labelText="Subheadline"
              inputName="subheadline"
              inputPlaceholder="This is the article’s subheadline to catch user’s attention to this particular article."
              required={false}
            />

            {/*------------------------------------LEDE--------------------------------------*/}
            <InputTextArea
              flexDirection="row"
              inputId="lede"
              labelText="Lede"
              inputName="lede"
              inputPlaceholder="An opening sentence or paragraph that summarized the most important aspects of your finding."
              required={false}
            />
            {/*------------------------------------KEYWORDS--------------------------------------*/}
            <div className={`label-and-input d-flex-row`}>
              <label htmlFor="keywords" className="label-for-input">
                Keywords
              </label>
              <input
                className="input-for-label"
                type="text"
                required={true}
                id="keywords"
                name="keywords"
                placeholder="A group of three to five keywords, each separated by a comma."
                ref={keywordsRef}
              />
            </div>
          </div>
        </fieldset>

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
              {/*------------------------------------COMPOSE TEXTBODY--------------------------------------*/}
              <div className="compose-textbody">
                <ReactQuill
                  modules={modules}
                  theme="snow"
                  placeholder="Content goes here..."
                  ref={contentRef}
                />
              </div>

              <div className="decor-custom-div"></div>
              {/*------------------------------------COMPOSE REFERENCES--------------------------------------*/}

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
