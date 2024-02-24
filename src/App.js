import { useEffect } from "react";
import {
  Routes,
  Route,
  useNavigationType,
  useLocation,
} from "react-router-dom";
import Acceuil from "./pages/Acceuil";
import ContactUs from "./pages/ContactUs";
import APropos from "./pages/APropos";
import CGU from "./pages/CGU";
import PagePolitiqueDeConfidential from "./pages/PagePolitiqueDeConfidential";
import PageMentionsLgales from "./pages/PageMentionsLgales";
import NousContacter from "./pages/NousContacter";

function App() {
  const action = useNavigationType();
  const location = useLocation();
  const pathname = location.pathname;

  useEffect(() => {
    if (action !== "POP") {
      window.scrollTo(0, 0);
    }
  }, [action, pathname]);

  useEffect(() => {
    let title = "";
    let metaDescription = "";

    switch (pathname) {
      case "/":
        title = "";
        metaDescription = "";
        break;
      case "/contact-us":
        title = "";
        metaDescription = "";
        break;
      case "/a-propos":
        title = "";
        metaDescription = "";
        break;
      case "/cgu":
        title = "";
        metaDescription = "";
        break;
      case "/page-politique-de-confidentialit":
        title = "";
        metaDescription = "";
        break;
      case "/page-mentions-lgales":
        title = "";
        metaDescription = "";
        break;
      case "/nous-contacter":
        title = "";
        metaDescription = "";
        break;
    }

    if (title) {
      document.title = title;
    }

    if (metaDescription) {
      const metaDescriptionTag = document.querySelector(
        'head > meta[name="description"]'
      );
      if (metaDescriptionTag) {
        metaDescriptionTag.content = metaDescription;
      }
    }
  }, [pathname]);

  return (
    <Routes>
      <Route path="/" element={<Acceuil />} />
      <Route path="/contact-us" element={<ContactUs />} />
      <Route path="/a-propos" element={<APropos />} />
      <Route path="/cgu" element={<CGU />} />
      <Route
        path="/page-politique-de-confidentialit"
        element={<PagePolitiqueDeConfidential />}
      />
      <Route path="/page-mentions-lgales" element={<PageMentionsLgales />} />
      <Route path="/nous-contacter" element={<NousContacter />} />
    </Routes>
  );
}
export default App;
