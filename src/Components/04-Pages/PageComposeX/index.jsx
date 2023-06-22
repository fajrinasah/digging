import { useRef, useState } from "react";
import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";

import "./styles.css";

import PageTitle from "../../01-Atoms/Texts/PageTitle";
import FormComposeArticleDetails from "../../02-Molecules/FormComposeArticleDetails";
import FormComposeArticleContent from "../../02-Molecules/FormComposeArticleContent";
import InputSubmit from "../../01-Atoms/Inputs/InputSubmit";

import { publishArticle } from "../../../Store/Slices/Blogs/slices";
import { toastError } from "../../01-Atoms/CustomToasts";

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

    if (!titleRef.current?.value) {
      console.log("headline: ", titleRef.current?.value);
      toastError("Please input the headline");
      return;
    }
    if (!categoryRef.current?.value) {
      toastError("Please select a category");
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

    console.log("mainshot: ", mainshot);
    console.log("form data: ", formData);

    dispatch(publishArticle(formData));
    navigate("/myProfile");
  };

  /*=========================================================================*/

  return (
    <div className="page-compose">
      <PageTitle content="Compose a New Finding" />
      <form onSubmit={publishHandler} className="form-compose">
        <FormComposeArticleDetails
          optionsArray={categories}
          categoryRef={categoryRef}
          titleRef={titleRef}
          keywordsRef={keywordsRef}
          onChangeFile={uploadMainshotHandler}
        />
        <FormComposeArticleContent textbodyRef={contentRef} />
        <div className="button-container">
          <InputSubmit value="Publish" />
        </div>
      </form>
    </div>
  );
}
