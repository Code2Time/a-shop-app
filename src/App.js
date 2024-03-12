import { useRoutes } from "react-router-dom";
import "./App.css";
import Rout from "./Routes";

function App() {
  const router = useRoutes(Rout);
  return router;
}

export default App;
