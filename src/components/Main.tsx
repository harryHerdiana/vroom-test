import React, { useContext, useState } from "react";
import { useNavigate } from "react-router-dom";
import { UserContext } from "../Context/UserContext";
import Cookies from "js-cookie";
import { Board } from "./board";

export let initialBoardData = {
  items: {
    "item-1": {
      id: "item-1",
      title: "Todo Number: 1.",
      description: "Description text 1",
      status: "open",
      created: 1646581923,
    },
    "item-2": {
      id: "item-2",
      title: "Todo Number: 2.",
      description: "Description text 2",
      status: "open",
      created: 1646581923,
    },
    "item-3": {
      id: "item-3",
      title: "Todo Number: 3.",
      description: "Description text 3",
      status: "open",
      created: 1646581923,
    },
    "item-4": {
      id: "item-4",
      title: "Todo Number: 4.",
      description: "Description text 4",
      status: "open",
      created: 1646581923,
    },
  },
  columns: {
    "column-1": {
      id: "column-1",
      title: "Open",
      itemsIds: ["item-1", "item-2", "item-3", "item-4"],
    },
    "column-2": {
      id: "column-2",
      title: "In Progress",
      itemsIds: [],
    },
    "column-3": {
      id: "column-3",
      title: "Complete",
      itemsIds: [],
    },
  },
  columnsOrder: ["column-1", "column-2", "column-3"],
};

const handleAdd = () => {
  const dateUTC = Math.round(new Date().getTime() / 1000);
  let cardLength = Object.keys(initialBoardData.items).length;
  const newCardLength = (cardLength += 1);
  const newItemId = `item-${newCardLength}`;
  // eslint-disable-next-line no-new-object
  const newItem = new Object({
    items: {
      [`${newItemId}`]: {
        id: newItemId,
        title: `Todo Number: ${newCardLength}`,
        description: `Description Text: ${newCardLength}`,
        status: "open",
        created: dateUTC,
      },
    },
  });

  const newObject = Object.assign({}, initialBoardData, newItem);
  console.log(newObject);
};

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
          <button onClick={handleAdd}>Add card</button>
          <Board />
        </div>
      )}
    </div>
  );
};

export default Main;
