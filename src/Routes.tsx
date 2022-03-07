import React, { useContext } from "react";
import { UserContext } from "./Context/UserContext";
import Cookies from "js-cookie";
import { Route, BrowserRouter as Router, useHistory } from "react-router-dom";
import Login from "./components/Login";
import Main from "./components/Main";
import CardDetail from "./components/CardDetail";
import Loading from "./components/LoadingElement";
import { Transition } from "@headlessui/react";

const Routes = () => {
  const { isLoading } = useContext(UserContext);

  return (
    <>
      <Transition
        show={isLoading}
        enter="transition-opacity duration-75"
        enterFrom="opacity-0"
        enterTo="opacity-100"
        leave="transition-opacity duration-150"
        leaveFrom="opacity-100"
        leaveTo="opacity-0"
      >
        <Loading />
      </Transition>
      <Router>
        <Route path="/login" exact component={Login} />
        <Route path="/" exact component={Main} />
        <Route path="/ticket/:Value">
          <CardDetail />
        </Route>
      </Router>
    </>
  );
};

export default Routes;
