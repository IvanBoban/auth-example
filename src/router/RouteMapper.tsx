import React from "react";
import { Route, Switch } from "react-router-dom";
import RouteConfig from "../types/Route";

interface GenericRouterProps {
  routes: Array<RouteConfig>;
}

export default function RouteMapper(props: GenericRouterProps) {
  const { routes } = props;
  return (
    <Switch>
      {routes.map((route: RouteConfig) => {
        return (
          <Route
            key={route.name}
            exact={route.exact}
            path={route.path}
            render={() => {
              return <route.component />;
            }}
          />
        );
      })}
    </Switch>
  );
}
