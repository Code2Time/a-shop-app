import { useRoutes } from "react-router-dom";
import "./App.css";
import Rout from "./Routes";
import ScrollToTop from "./ScrollToTop";

function App() {
  const router = useRoutes(Rout);
  return (
    <>
      {router}
      <ScrollToTop />
   </>
  );
}

export default App;
