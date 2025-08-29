import ErrorPage from "./pages/ErrorPage";
import Home from "./pages/home";
import Shop from "./pages/shop";

const routes = [
  {
    path: "/",
    element: <Home />,
    errorElement: <ErrorPage />,
  },
  {
    path: "/shop",
    element: <Shop />,
  },
];

export default routes;
