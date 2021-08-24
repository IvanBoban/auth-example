import {
  AuthContextState,
  AuthReducerActions,
  AuthReducerActionTypes,
} from "./types";

export default function reducer(
  state: AuthContextState,
  action: AuthReducerActions
) {
  switch (action.type) {
    case AuthReducerActionTypes.CONTEXT_SIGN_IN:
      return {
        ...state,
        isAuth: true,
      };

    case AuthReducerActionTypes.CONTEXT_SIGN_OUT:
      return {
        ...state,
        isAuth: false,
      };

    default:
      return state;
  }
}
