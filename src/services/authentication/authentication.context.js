import React, { useState, useEffect, createContext } from "react";
import {
  loginRequest,
  registerRequest,
  logoutRequest,
  authStateChangeListener,
} from "./authentication.services";

export const AuthContext = createContext();

export const AuthContextProvider = ({ children }) => {
  const [user, setUser] = useState(null);
  const [isLoading, setIsLoading] = useState(false);
  const [loginError, setLoginError] = useState(null);
  const [registerError, setRegisterError] = useState(null);
  
  

  useEffect(() => {
    
    const unsubscribe = authStateChangeListener((authUser) => {
      setUser(authUser); 
    });

   
    return () => unsubscribe();
  }, []);

  const onLogin = (email, password) => {
    setIsLoading(true);
    setLoginError(null);
    loginRequest(email, password)
      .then((response) => {
        setUser(response.user); 
        setIsLoading(false);
      })
      .catch((err) => {
        setLoginError(err.message); 
        setIsLoading(false);
      });
  };

  const onRegister = (email, password) => {
    setIsLoading(true);
    setRegisterError(null);
    registerRequest(email, password)
      .then((response) => {
        setUser(response.user); 
        setIsLoading(false);
      })
      .catch((err) => {
        setRegisterError(err.message); 
        setIsLoading(false);
      });
  };

  const onLogout = () => {
    setIsLoading(true);
    logoutRequest()
      .then(() => {
        setUser(null); 
        setIsLoading(false);
      });
      
  };

  return (
    <AuthContext.Provider
      value={{
        isAuthenticated: !!user,
        user,
        isLoading,
        loginError,
        registerError,
        onLogin,
        onRegister,
        onLogout, 
      }}
    >
      {children}
    </AuthContext.Provider>
  );
};
