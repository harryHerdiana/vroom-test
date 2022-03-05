import React, { useContext } from "react";
import { useNavigate } from "react-router-dom";
import { UserContext } from "../Context/UserContext";
import Cookies from "js-cookie";
const Main = () => {
  const navigate = useNavigate();
  const { isLogin, setLogout } = useContext(UserContext);
  const handleLogout = () => {
    setLogout();
    Cookies.remove("user");
    Cookies.remove("email");
    Cookies.remove("token");
  };
  return (
    <div>
      {isLogin === false && (
        <div>
          <h1>You are not logged in, please log in by clicking below button</h1>
          <button onClick={() => navigate("/login")}>Login</button>
        </div>
      )}
      {isLogin && (
        <div>
          <h1 className="uppercase text-4xl">Test</h1>
          <button onClick={handleLogout}>Log out</button>
        </div>
      )}
    </div>
  );
};

export default Main;
