import More from "./components/more/More";
import About from "./pages/about/About";
import Home from "./pages/home/Home";
import Login from "./pages/login/Login";
import News from "./pages/news/News";
import Panel from "./pages/panel/Panel";
import Shop from "./pages/shop/Shop";

const Rout = [
  {
    path: "/",
    element: <Home />,
  },
  { path: "/shop/:IdItem", element: <Shop /> },
  { path: "/news", element: <News /> },
  { path: "/about", element: <About /> },
  { path: "/login", element: <Login /> },
  { path: "/panel", element: <Panel /> },
];
export default Rout;
