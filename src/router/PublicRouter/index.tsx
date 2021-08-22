import React from "react";
import GlobalRoutes from "../GlobalRoutes";
import RouteMapper from "../RouteMapper";
import routes from "./routerConfig";

export default function PublicRouter() {
  return (
    <>
      <RouteMapper routes={routes} />
      <GlobalRoutes />
    </>
  );
}
