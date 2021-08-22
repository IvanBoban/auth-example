import { AuthReducerActionTypes, SignIn, SignOut } from "./types";

export const signIn = (): SignIn => ({
  type: AuthReducerActionTypes.SIGN_IN,
});

export const signOut = (): SignOut => ({
  type: AuthReducerActionTypes.SIGN_OUT,
});
