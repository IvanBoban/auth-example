import React from "react";
import { Switch } from "react-router-dom";
import GlobalRoutes from "../GlobalRoutes";
import RouteMapper from "../RouteMapper";
import routes from "./routerConfig";

export default function PrivateRouter() {
  return (
    <Switch>
      <RouteMapper routes={routes} />
      <GlobalRoutes />
    </Switch>
  );
}
