import { useLocation, useNavigate, Navigate } from "react-router-dom";
import { useSelector } from "react-redux";
import { useEffect, useState } from "react";

import { toastError } from "../../01-Atoms/CustomToasts";
import {
  getArticles,
  doConserveArticle,
  deleteArticle,
} from "../../../Store/Slices/Blogs/slices";
import {
  setArticleData,
  setArticleKeywords,
} from "../../../Store/Slices/Blogs";

import "./styles.css";

import LinkCategory from "../../01-Atoms/Navigations/LinkCategory";
import ArticleDate from "../../01-Atoms/Texts/ArticleDate";
import ArticleHeadline from "../../01-Atoms/Texts/ArticleHeadline";
import ArticleSubheadline from "../../01-Atoms/Texts/ArticleSubheadline";
import ArticleFigureFigcaption from "../../01-Atoms/Media/ArticleFigure/ArticleFigureFigcaption";
import ArticleFigureImage from "../../01-Atoms/Media/ArticleFigure/ArticleFigureImage";
import ArticleLede from "../../01-Atoms/Texts/ArticleLede";
import ArticleTextbody from "../../01-Atoms/Texts/ArticleTextbody";
import DummyArticleTextbody from "../../../DummyData/DummyArticleTextbody";
import ArticleViewingDetails from "../../02-Molecules/ArticleViewingDetails";
import ButtonStandard from "../../01-Atoms/Buttons/ButtonStandard";
import NavKeyword from "../../01-Atoms/Navigations/NavKeyword";
import ModalCrucial from "../../02-Molecules/ModalCrucial";

export default function PageArticleViewing({
  authId,
  dispatch,
  subheadline = "This is the article’s subheadline, a simple sentence, to catch user’s attention to this particular article.",
  figcaption = "This is the main image’s caption that gives more information about the image concisely.",
  lede = "This is the article’s lede. An opening sentence or paragraph that summarized the most important aspects of your finding. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Et magnis dis parturient montes nascetur ridiculus mus. Neque convallis a cras semper. Suspendisse faucibus interdum posuere lorem. ",
  authorPhotoAlt = "",
  authorDisplayName = "Display Name",
}) {
  const navigate = useNavigate();
  const location = useLocation();
  const articleId = location.state.articleId;
  const userId = location.state.userId;

  const articleData = useSelector((state) => {
    return state.blogs?.articleData[0];
  });

  const articleKeywords = useSelector((state) => {
    return state.blogs?.articleKeywords;
  });

  /*===============LOCAL STATES================*/
  const [deleteConfirmationModal, showDeleteConfirmationModal] =
    useState(false);

  /*===============USE EFFECT================*/
  useEffect(() => {
    dispatch(getArticles(""));
    dispatch(setArticleData(articleId));
    dispatch(setArticleKeywords());
    console.log(`articleId: ${articleId}`);
  }, [location]);

  /*===============RENDER FUNCTIONS================*/

  const references = [
    {
      listNumber: 1,
      listContent: `Lorem, Ipsum. 2023. “Dolor Sit Amet”. Consectetur: Adipiscing.`,
    },
    {
      listNumber: 2,
      listContent: `Dolor, Sit. 2023. “Amet Sit Dolor”.
  lorem-ipsumdolor-sit.amet/consectetur/adipiscing-elit`,
    },
  ];

  /*===============UTILITY FUNCTIONS================*/
  const cancelDelete = () => {
    showDeleteConfirmationModal(false);
  };

  const confirmDelete = () => {
    dispatch(deleteArticle(articleId));
    console.log(`DISPATCHED: deleteArticle(${articleId})`);
    navigate("/myProfile", { replace: true });
  };

  const deleteClicked = () => {
    showDeleteConfirmationModal(true);
  };

  const conserveClicked = () => {
    if (!authId) {
      console.log("redirected to register page");
      toastError("You must register or login first to conserve a finding");
      navigate("/register", { replace: true });
    }

    dispatch(doConserveArticle({ BlogId: articleData?.id }));
    console.log(
      `DISPATCHED: doConserveArticle(${{ BlogId: articleData?.id }})`
    );
  };

  return (
    <div className="page-article-viewing other">
      <div className="category">
        <LinkCategory category={articleData?.Category?.name} destination="" />
      </div>
      <div className="date d-flex-row">
        <ArticleDate
          srGuide="Published date:"
          date={articleData?.createdAt}
          bold="bold"
        />
        <ArticleDate
          srGuide="Last edited date:"
          date={articleData?.updatedAt}
          bold=""
        />
      </div>
      <div className="headline">
        <ArticleHeadline
          headline={articleData?.title}
          color="contrast"
          size="small"
        />
      </div>
      <div className="subheadline">
        <ArticleSubheadline
          subheadline={subheadline}
          color="contrast"
          size="small"
          bold="bold"
        />
      </div>
      <div className="figure">
        <figure className="article-figure d-flex-row">
          <ArticleFigureFigcaption figcaption={figcaption} />
          <ArticleFigureImage size="large" imgSource={articleData?.imageURL} />
        </figure>
      </div>
      <div className="lede">
        <ArticleLede lede={lede} color="contrast" size="small" bold="bold" />
      </div>
      <div className="textbody">
        <ArticleTextbody textbody={articleData?.content} color="" size="" />
      </div>
      <div className="article-viewing-details-container d-flex-column">
        <ArticleViewingDetails
          articleKeywords={articleKeywords}
          references={references}
          authorPhoto={articleData?.User?.imgProfile}
          authorPhotoAlt={authorPhotoAlt}
          authorDisplayName={authorDisplayName}
          authorUsername={articleData?.User?.username}
          authorProfilePage={`/profile/${articleData?.UserId}`}
          userId={articleData?.UserId}
        />
        <div className="button-container">
          {userId && userId == authId ? (
            <ButtonStandard
              story="ghost-warning"
              bold="bold"
              content="Bury"
              onClick={() => deleteClicked()}
            />
          ) : (
            <ButtonStandard
              story="raised"
              bold="bold"
              content="Conserve it!"
              onClick={() => conserveClicked()}
            />
          )}
          {deleteConfirmationModal ? (
            <ModalCrucial
              crucialType="danger"
              content="Are you sure you want to bury this finding?"
              confirmCrucial="Bury"
              cancelClicked={() => cancelDelete()}
              confirmClicked={() => confirmDelete()}
            />
          ) : null}
        </div>
      </div>
    </div>
  );
}
