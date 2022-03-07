import React, { useContext } from "react";
import "./App.css";
import { UserProvider } from "./Context/UserContext";
import Routes from "./Routes";

function App() {
  return (
    <UserProvider>
      <Routes />
    </UserProvider>
  );
}

export default App;
