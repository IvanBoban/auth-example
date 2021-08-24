import React from "react";

export default interface RouteConfig {
  path: string;
  name: string;
  exact?: boolean;
  component: React.ElementType;
}
