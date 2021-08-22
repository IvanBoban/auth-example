import routes from "./routerConfig";
import { Redirect, Route } from "react-router-dom";
import { NOT_FOUND_PAGE } from "./routes";
import RouteMapper from "../RouteMapper";

export default function GlobalRoutes() {
  return (
    <>
      <RouteMapper routes={routes} />
      <Route
        path="*"
        render={() => {
          return <Redirect to={NOT_FOUND_PAGE} />;
        }}
      />
    </>
  );
}
