import React, { useContext } from "react";
import { useNavigate } from "react-router-dom";
import { UserContext } from "./Context/UserContext";
import Cookies from "js-cookie";
import { Route, Routes as RoutesComponent } from "react-router";
import Login from "./components/Login";
import Main from "./components/Main";
import App from "./App";

const Routes = () => {
  const navigate = useNavigate();
  const { isLogin } = useContext(UserContext);
  console.log(isLogin);

  return (
    <RoutesComponent>
      <Route path="/login" element={<Login />} />
      <Route path="/" element={<Main />} />
    </RoutesComponent>
  );
};

export default Routes;
