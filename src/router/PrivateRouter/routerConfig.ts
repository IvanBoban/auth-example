import HomePage from "../../pages/Private/HomePage";
import UserPage from "../../pages/Private/UserPage";
import RouteConfig from "../types";
import { HOME_PAGE, USER_PAGE } from "./routes";

const routes: Array<RouteConfig> = [
  {
    name: "Home Page",
    path: HOME_PAGE,
    exact: true,
    component: HomePage,
  },
  { name: "User Page", path: USER_PAGE, exact: true, component: UserPage },
];

export default routes;
