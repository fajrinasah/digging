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

import Header from "./Components/03-Organisms/Header";
import Footer from "./Components/03-Organisms/Footer";
import PageHome from "../src/Components/04-Pages/PageHome";
import PageDigging from "./Components/04-Pages/PageDigging";
import PageCompose from "../src/Components/04-Pages/PageCompose";
import PageProfileOwn from "./Components/04-Pages/PageProfileOwn";
import PageNotFound from "./Components/04-Pages/PageNotFound";
import PageLogin from "./Components/04-Pages/PageLoginFormik";
import PageRegisterVerification from "./Components/04-Pages/PageRegisterVerification";
import PageProfileOther from "./Components/04-Pages/PageProfileOther";
import PageForgotPassword from "./Components/04-Pages/PageForgotPassword";
import PageResetPassword from "./Components/04-Pages/PageResetPassword";
import PageRegister from "./Components/04-Pages/PageRegisterFormik";
import PageProfileEdit from "./Components/04-Pages/PageProfileEdit";
import Loader from "./Components/01-Atoms/Loader";
import SnackbarNotification from "./Components/02-Molecules/SnackbarNotification";
import ButtonStandard from "./Components/01-Atoms/Buttons/ButtonStandard";
import ModalDefaultText from "./Components/01-Atoms/Texts/ModalDefaultText";

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
        <Route path="/" element={<PageHome id={id} />} />
        <Route
          path="/register"
          element={<PageRegister dispatch={dispatch} id={id} />}
        />
        <Route
          path="/verification/:token"
          element={<PageRegisterVerification />}
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
          path="/compose"
          element={
            <ProtectedRoute>
              <PageCompose />
            </ProtectedRoute>
          }
        />
        <Route
          path="/profile"
          element={
            <ProtectedRoute>
              <PageProfileOwn />
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
