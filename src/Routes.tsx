import React, { useContext } from "react";
import { UserContext } from "./Context/UserContext";
import Cookies from "js-cookie";
import { Route, BrowserRouter as Router, useHistory } from "react-router-dom";
import Login from "./components/Login";
import Main from "./components/Main";
import CardDetail from "./components/CardDetail";

const Routes = () => {
  const { isLogin } = useContext(UserContext);

  return (
    <Router>
      <Route path="/login" exact component={Login} />
      <Route path="/" exact component={Main} />
      <Route path="/ticket/:Value">
        <CardDetail />
      </Route>
    </Router>
  );
};

export default Routes;
