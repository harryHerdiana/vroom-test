import React, { useContext, useState } from "react";
import { useHistory } from "react-router";
import { UserContext } from "../Context/UserContext";
import Cookies from "js-cookie";
import Boards from "./board";

const Main = () => {
  const history = useHistory();
  const { isLogin, setLogout, isLoading, setLoading, setNotLoading } =
    useContext(UserContext);
  const handleLogin = () => {};
  const handleLogout = () => {
    setLoading();
    const randomTime = Math.random() * 2000;
    setTimeout(() => {
      setNotLoading();
      setLogout();
      Cookies.remove("user");
      Cookies.remove("email");
      Cookies.remove("token");
    }, randomTime);
  };
  return (
    <div className="relative">
      {!isLogin && (
        <div className="absolute flex flex-col w-screen h-screen top-0 left-0 ">
          <div className="m-auto text-center flex-col gap-4 flex items-center px-4">
            <img src="images/Logo.png" alt="logo" className="w-max md:w-1/3" />
            <h1 className="text-xl">
              You are not logged in, please log in by clicking below button
            </h1>
            <button
              className=" text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-full text-sm px-5 py-2.5 text-center mr-2 mb-2 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800 md:w-1/5 w-4/5"
              onClick={() => history.push("/login")}
            >
              Login
            </button>
          </div>
        </div>
      )}
      {isLogin && (
        <div className="flex flex-col">
          <div className="absolute right-12 bottom-12 ">
            <button
              className="w-40 text-white bg-red-700 hover:bg-red-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-full text-sm px-5 py-2.5 text-center mr-2 mb-2 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
              onClick={handleLogout}
            >
              Log out
            </button>
          </div>
          <Boards />
        </div>
      )}
    </div>
  );
};

export default Main;
