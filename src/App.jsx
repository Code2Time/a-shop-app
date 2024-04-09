import { useRoutes } from "react-router-dom";
import "./App.css";
import Rout from "./Routes";
import useScrollToTop from "./ScrollToTop";

function App() {
  const router = useRoutes(Rout);
  return (
    <>
      {router}
      <useScrollToTop />
    </>
  );
}

export default App;
