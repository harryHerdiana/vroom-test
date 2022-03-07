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
  setLoading: () => null,
  setNotLoading: () => null,
  isLoading: false,
  isLogin: false,
};

export const UserContext = createContext<IUserContext>(userContextDefaultValue);
export const UserProvider = (props: { children: React.ReactElement }) => {
  const randomTime = Math.random() * 2000;
  const [isLoading, setIsloading] = useState<boolean>(false);
  const [isLogin, setIsLogin] = useState<boolean>(false);
  const userContextDefaultValue: IUserContext = {
    userData: [
      {
        email: "test@vroom.com.au",
        password: "frontendtest2022",
      },
    ],
    isLoading: isLoading,
    isLogin: isLogin,
    setLogin: () => setIsLogin(true),
    setLogout: () => setIsLogin(false),
    setLoading: () => setIsloading(true),
    setNotLoading: () => setIsloading(false),
  };

  return (
    <UserContext.Provider value={userContextDefaultValue}>
      {props.children}
    </UserContext.Provider>
  );
};
