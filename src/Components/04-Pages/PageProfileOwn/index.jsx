import { useNavigate } from "react-router-dom";
import { useEffect, useState } from "react";
import { useSelector } from "react-redux";

/*------------------------------------------*/
import "./styles.css";

import PageTitle from "../../01-Atoms/Texts/PageTitle";
import ProfileSectionInformation from "../../03-Organisms/ProfileSectionInformation";
import SectionDiggingMyProfile from "../../03-Organisms/SectionDiggingMyProfile";
import ProfileSectionRadios from "../../02-Molecules/ProfileSectionRadios";

import { setMyArticles, setMyInformation } from "../../../Store/Slices/Blogs";
import {
  getArticles,
  getConservedArticles,
} from "../../../Store/Slices/Blogs/slices";

export default function PageProfileOwn({ dispatch }) {
  const navigate = useNavigate();

  /*========================USE EFFECT========================*/
  useEffect(() => {
    dispatch(getArticles(""));
    dispatch(setMyArticles());
    dispatch(getConservedArticles());
  }, []);

  /*========================GLOBAL STATE========================*/
  const username = useSelector((state) => {
    return state.auth?.username;
  });

  const imgProfile = useSelector((state) => {
    return state.auth?.imgProfile;
  });

  const myArticles = useSelector((state) => {
    return state.blogs?.myArticles;
  });

  const myConservedArticles = useSelector((state) => {
    return state.blogs?.myConservedArticles;
  });

  const isLoading = useSelector((state) => {
    return state.blogs?.isLoading;
  });

  /*========================LOCAL STATES========================*/
  const [myFindings, showMyFindings] = useState(true);
  // const [conserved, showConserved] = useState(false);

  /*========================UTILITY FUNCTIONS========================*/
  // Navigate to PageCompose
  const composeClicked = () => {
    navigate("/compose");
  };

  // Navigate to PageProfileEdit
  const editClicked = () => {
    navigate("/editProfile");
  };

  // View My Findings
  const viewMyFindings = () => {
    showMyFindings(true);
  };

  // View Conserved Findings
  const viewConserved = () => {
    showMyFindings(false);
  };

  return (
    <div className="page-profile own d-flex-column">
      <PageTitle content="My Profile" />
      <ProfileSectionInformation
        whose="own"
        // displayName={}
        username={username}
        imgSource={imgProfile}
        totalFindings={myArticles.length}
        composeClicked={() => composeClicked()}
        editClicked={() => editClicked()}
      />
      <div className="profile-section d-flex-row">
        <ProfileSectionRadios
          viewMyFindings={viewMyFindings}
          viewConserved={viewConserved}
        />
      </div>
      <SectionDiggingMyProfile
        myArticles={myArticles}
        myConservedArticles={myConservedArticles}
        isLoading={isLoading}
        myFindings={myFindings}
      />
      {/* {myFindings ? (
        <SectionDiggingMyProfile articles={myArticles} isLoading={isLoading} />
      ) : (
        <SectionDiggingMyProfile
          articles={myConservedArticles}
          isLoading={isLoading}
        />
      )} */}
    </div>
  );
}
