import React from "react";
import { ContextProviderProps, ContextProps } from "../types";
import reducer from "./reducer";
import { AuthServiceProvider } from "./service";
import { AuthContextState, AuthReducerActions } from "./types";

const initialState = {
  isAuth: null,
};

export const AuthContext = React.createContext<
  ContextProps<AuthContextState, AuthReducerActions>
>({
  state: initialState,
  dispatch: () => null,
});

export const AuthContextProvider = (props: ContextProviderProps) => {
  const [state, dispatch] = React.useReducer(reducer, initialState);

  return (
    <AuthContext.Provider value={{ state, dispatch }}>
      <AuthServiceProvider>{props.children}</AuthServiceProvider>
    </AuthContext.Provider>
  );
};
