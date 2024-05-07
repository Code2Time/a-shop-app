import { useRoutes } from "react-router-dom";
import "./App.css";
import Rout from "./Routes";
import useScrollToTop from "./ScrollToTop";
import ScrollToTop from "./scroll/ScrollToTop";

function App() {
  const router = useRoutes(Rout);
  return (
    <>
    <ScrollToTop />
      {router}
      <useScrollToTop />
    </>
  );
}

export default App;
