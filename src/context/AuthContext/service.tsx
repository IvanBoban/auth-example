import React from "react";
import { AuthContext } from ".";
import ApiService from "../../services/apiService";
import { ContextProps, ContextProviderProps } from "../../types/Context";
import { contextSignIn, contextSignOut } from "./actions";

interface AuthContextServiceProps {
  serviceSignIn: (email: string, password: string) => Promise<void>;
  serviceSignOut: (email: string) => Promise<void>;
}

const AuthService = React.createContext<AuthContextServiceProps>({
  serviceSignIn: async () => {},
  serviceSignOut: async () => {},
});

const AuthServiceProvider = (props: ContextProviderProps) => {
  const apiService = new ApiService();
  const authContext = React.useContext(AuthContext);
  const { state, dispatch } = authContext;

  const serviceSignIn = async (email: string, password: string) => {
    try {
      await apiService.signIn(email, password);
      authContext.dispatch(contextSignIn());
    } catch (error) {
      throw error;
    }
  };

  const serviceSignOut = async (email: string) => {
    try {
      await apiService.signOut(email);
      authContext.dispatch(contextSignOut());
    } catch (error) {
      throw error;
    }
  };

  return (
    <AuthService.Provider value={{ serviceSignIn, serviceSignOut }}>
      {props.children}
    </AuthService.Provider>
  );
};

const AuthServiceConsumer = AuthService.Consumer;

export { AuthService, AuthServiceProvider, AuthServiceConsumer };
