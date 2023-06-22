import { Routes, Route } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";
import { toast, Toaster, ToastBar } from "react-hot-toast";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faRectangleXmark } from "@fortawesome/free-solid-svg-icons";

import { logout } from "./Store/Slices/Authorization/slices";
import { keepLogin } from "./Store/Slices/Authorization/slices";

import ProtectedRoute from "./protected.routes";

import "./App.css";

import Loader from "./Components/01-Atoms/Loader";
import Header from "./Components/03-Organisms/Header";
import Footer from "./Components/03-Organisms/Footer";
import PageHome from "./Components/04-Pages/PageHome";
import PageDigging from "./Components/04-Pages/PageDigging";

import PageRegister from "./Components/04-Pages/PageRegister";
import PageVerification from "./Components/04-Pages/PageVerification";
import PageForgotPassword from "./Components/04-Pages/PageForgotPassword";
import PageResetPassword from "./Components/04-Pages/PageResetPassword";
import PageLogin from "./Components/04-Pages/PageLogin";

import PageArticleViewing from "./Components/04-Pages/PageArticleViewing";
import PageProfileOther from "./Components/04-Pages/PageProfileOther";
import PageProfileOwn from "./Components/04-Pages/PageProfileOwn";
import PageCompose from "../src/Components/04-Pages/PageCompose";
import PageProfileEdit from "./Components/04-Pages/PageProfileEdit";
import PageChangePassword from "./Components/04-Pages/PageChangePassword";

import PageNotFound from "./Components/04-Pages/PageNotFound";

/*import ButtonToTop from "./Components/01-Atoms/Buttons/ButtonToTop";*/

const root = document.querySelector(":root");
root.classList.add("default-theme");

function App() {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(keepLogin());
  }, []);

  // const id = useSelector((state) => {
  //   return state.auth?.id;
  // });

  const isKeepLoginLoading = useSelector((state) => {
    return state.auth?.isKeepLoginLoading;
  });
  const id = useSelector((state) => {
    return state.auth?.id;
  });

  // const isRegisterLoading = useSelector((state) => {
  //   return state.auth?.isRegisterLoading;
  // });

  const logoutClicked = () => {
    dispatch(logout());
  };

  if (isKeepLoginLoading) {
    return (
      <div className="loader-container-container">
        <Loader color="main" bgColor="accent" />
      </div>
    );
  }

  return (
    <div id="body-container" className="default-theme">
      <Header logoutClicked={logoutClicked} id={id} />
      <div className="header-space"></div>

      <Routes>
        <Route path="/" element={<PageHome id={id} dispatch={dispatch} />} />
        <Route
          path="/register"
          element={<PageRegister dispatch={dispatch} id={id} />}
        />
        <Route path="/verification/:token" element={<PageVerification />} />
        <Route
          path="/verification-change-email/:token"
          element={<PageVerification />}
        />
        <Route
          path="/login"
          element={<PageLogin dispatch={dispatch} id={id} />}
        />
        <Route
          path="/forgotPassword"
          element={<PageForgotPassword dispatch={dispatch} />}
        />
        <Route
          path="reset-password/:token"
          element={<PageResetPassword dispatch={dispatch} />}
        />
        <Route path="/digging" element={<PageDigging />} />
        <Route
          path="/articleViewing/:id"
          element={<PageArticleViewing authId={id} dispatch={dispatch} />}
        />
        <Route path="/profile/:UserId" element={<PageProfileOther />} />
        <Route
          path="/compose"
          element={
            <ProtectedRoute>
              <PageCompose dispatch={dispatch} />
            </ProtectedRoute>
          }
        />
        <Route
          path="/myProfile"
          element={
            <ProtectedRoute>
              <PageProfileOwn dispatch={dispatch} />
            </ProtectedRoute>
          }
        />
        <Route
          path="/editProfile"
          element={
            <ProtectedRoute>
              <PageProfileEdit />
            </ProtectedRoute>
          }
        />
        <Route
          path="/changePassword"
          element={
            <ProtectedRoute>
              <PageChangePassword dispatch={dispatch} />
            </ProtectedRoute>
          }
        />
        <Route path="*" element={<PageNotFound />} />
      </Routes>
      <Footer />
      <Toaster
        toastOptions={{
          loading: {
            style: {
              background: "var(--main)",
            },
          },
        }}
      >
        {(t) => (
          <ToastBar toast={t}>
            {({ icon, message }) => (
              <>
                {icon}
                {message}
                {t.type !== "loading" && (
                  <button onClick={() => toast.dismiss(t.id)}>
                    <FontAwesomeIcon
                      icon={faRectangleXmark}
                      aria-hidden="true"
                    />
                    <span className="sr-only">Close</span>
                  </button>
                )}
              </>
            )}
            {(t) => (
              <ToastBar
                toast={t}
                style={{
                  ...t.style,
                  animation: t.visible
                    ? "custom-enter 1s ease"
                    : "custom-exit 1s ease",
                }}
              />
            )}
          </ToastBar>
        )}
      </Toaster>
    </div>
  );
}

export default App;
