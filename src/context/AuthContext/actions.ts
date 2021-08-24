import { AuthReducerActionTypes, ContextSignIn, ContextSignOut } from "./types";

export const contextSignIn = (): ContextSignIn => ({
  type: AuthReducerActionTypes.CONTEXT_SIGN_IN,
});

export const contextSignOut = (): ContextSignOut => ({
  type: AuthReducerActionTypes.CONTEXT_SIGN_OUT,
});
