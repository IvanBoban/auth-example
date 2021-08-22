import ErrorPage from "../../pages/Global/ErrorPage";
import NotFoundPage from "../../pages/Global/NotFoundPage";
import RouteConfig from "../../types/Route";
import { ERROR_PAGE, NOT_FOUND_PAGE } from "./routes";

const routes: Array<RouteConfig> = [
  {
    name: "Not found page",
    path: NOT_FOUND_PAGE,
    exact: true,
    component: NotFoundPage,
  },
  {
    name: "Error page",
    path: ERROR_PAGE,
    exact: true,
    component: ErrorPage,
  },
];

export default routes;
