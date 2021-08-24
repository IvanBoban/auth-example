import React from "react";

export interface ContextProps<T1, T2> {
  state: T1;
  dispatch: React.Dispatch<T2>;
}

export interface ContextProviderProps {
  children: React.ReactChild | JSX.Element;
}
