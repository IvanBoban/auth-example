export interface AuthContextState {
  isAuth: boolean | null;
}

export enum AuthReducerActionTypes {
  CONTEXT_SIGN_IN = "CONTEXT_SIGN_IN",
  CONTEXT_SIGN_OUT = "CONTEXT_SIGN_OUT",
}

export interface ContextSignIn {
  type: AuthReducerActionTypes.CONTEXT_SIGN_IN;
}

export interface ContextSignOut {
  type: AuthReducerActionTypes.CONTEXT_SIGN_OUT;
}

export type AuthReducerActions = ContextSignIn | ContextSignOut;
