import { BrowserRouter, Routes, Route } from "react-router-dom";

import "./App.css";
import PageHome from "../src/Components/04-Pages/PageHome";
import PageDigging from "./Components/04-Pages/PageDigging";
import PageCompose from "../src/Components/04-Pages/PageCompose";
import PageProfileOwn from "./Components/04-Pages/PageProfileOwn";

import Header from "./Components/03-Organisms/Header";
/*import ButtonToTop from "./Components/01-Atoms/Buttons/ButtonToTop";*/
import Footer from "./Components/03-Organisms/Footer";

import Masthead from "./Components/02-Molecules/Masthead";
import PageForgotReset from "./Components/04-Pages/PageForgotReset";
import HomeSectionCarousel from "./Components/03-Organisms/HomeSectionCarousel";
import PageNotFound from "./Components/04-Pages/PageNotFound";
import PageLogin from "./Components/04-Pages/PageLogin";
import PageProfileOther from "./Components/04-Pages/PageProfileOther";
import PageRegisterVerification from "./Components/04-Pages/PageRegisterVerified";
import FormForgotReset from "./Components/02-Molecules/FormForgotReset";
import PageRegister from "./Components/04-Pages/PageRegister";
import PageProfileEdit from "./Components/04-Pages/PageProfileEdit";
import Loader from "./Components/01-Atoms/Loader";
import NoFinding from "./Components/01-Atoms/NoFinding";
import Pagination from "./Components/01-Atoms/Pagination";

function App() {
  const root = document.querySelector(":root");
  root.classList.add("default-theme");

  return (
    <div id="body-container" className="default-theme">
      <BrowserRouter>
        <Header />
        <Pagination />
        <Routes>
          <Route path="/" element={<PageHome />} />
          <Route path="/digging" element={<PageDigging />} />
          <Route path="/compose" element={<PageCompose />} />
          <Route path="/profile" element={<PageProfileOwn />} />
          <Route path="*" element={<PageNotFound />} />
        </Routes>
        <Footer />
      </BrowserRouter>
    </div>
  );
}

export default App;
