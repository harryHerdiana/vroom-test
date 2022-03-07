import React, { useContext, useState } from "react";
import { useHistory } from "react-router";
import { UserContext } from "../Context/UserContext";
import Cookies from "js-cookie";
import Boards from "./board";

const Main = () => {
  const history = useHistory();
  const { isLogin, setLogout } = useContext(UserContext);
  const handleLogin = () => {};
  const handleLogout = () => {
    setLogout();
    Cookies.remove("user");
    Cookies.remove("email");
    Cookies.remove("token");
  };
  return (
    <div className="flex flex-col">
      {isLogin === false && (
        <div>
          <h1>You are not logged in, please log in by clicking below button</h1>
          <button onClick={() => history.push("/login")}>Login</button>
        </div>
      )}
      {isLogin && (
        <div>
          <h1 className="uppercase text-4xl">Test</h1>
          <button onClick={handleLogout}>Log out</button>
          <Boards />
        </div>
      )}
    </div>
  );
};

export default Main;
