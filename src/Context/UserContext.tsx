import React, { useState, createContext } from "react";
import { IUserContext } from "./userContextType";

const userContextDefaultValue: IUserContext = {
  userData: [
    {
      email: "",
      password: "",
    },
  ],
  setLogin: () => null,
  setLogout: () => null,
  toggleLoading: () => null,
  isLoading: false,
  isLogin: false,
};

export const UserContext = createContext<IUserContext>(userContextDefaultValue);
export const UserProvider = (props: { children: React.ReactElement }) => {
  const [isLoading, setIsloading] = useState<boolean>(false);
  const [isLogin, setIsLogin] = useState<boolean>(false);
  const userContextDefaultValue: IUserContext = {
    userData: [
      {
        email: "test@vroom.com.au",
        password: "frontendtest2022",
      },
    ],
    setLogin: () => setIsLogin(true),
    setLogout: () => setIsLogin(false),
    toggleLoading: () => setIsloading(!isLoading),
    isLoading: isLoading,
    isLogin: isLogin,
  };

  return (
    <UserContext.Provider value={userContextDefaultValue}>
      {props.children}
    </UserContext.Provider>
  );
};
