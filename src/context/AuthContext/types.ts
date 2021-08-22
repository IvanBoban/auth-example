export interface AuthContextState {
  isAuth: boolean | null;
}

export enum AuthReducerActionTypes {
  SIGN_IN = "SIGN_IN",
  SIGN_OUT = "SIGN_OUT",
}

export interface SignIn {
  type: AuthReducerActionTypes.SIGN_IN;
}

export interface SignOut {
  type: AuthReducerActionTypes.SIGN_OUT;
}

export type AuthReducerActions = SignIn | SignOut;
