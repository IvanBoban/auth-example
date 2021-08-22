import React from "react";
import { AuthContext } from "../context/AuthContext";
import PrivateRouter from "./PrivateRouter";
import PublicRouter from "./PublicRouter";

export default function Router() {
  const authContext = React.useContext(AuthContext);
  const { state } = authContext;

  if (state.isAuth === null) {
    return <div>Loading...</div>;
  }

  if (!state.isAuth) {
    return <PublicRouter />;
  }

  return <PrivateRouter />;
}
