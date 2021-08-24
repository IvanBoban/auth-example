import LoginPage from "../../pages/Public/LoginPage";
import SignUpPage from "../../pages/Public/SignUpPage";
import RouteConfig from "../types";
import { LOGIN_PAGE, SIGN_UP_PAGE } from "./routes";

const routes: Array<RouteConfig> = [
  {
    path: LOGIN_PAGE,
    exact: true,
    name: "Login Page",
    component: LoginPage,
  },
  {
    path: SIGN_UP_PAGE,
    exact: true,
    name: "Sign up page",
    component: SignUpPage,
  },
];

export default routes;
