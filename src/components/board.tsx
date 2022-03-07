import Board from "react-trello";
import { useHistory } from "react-router";
import { UserContext } from "../Context/UserContext";
import React, { useContext, useState } from "react";

export const data = {
  lanes: [
    {
      cards: [
        {
          description: "2 Gallons of milk at the Deli store",
          id: "Plan1",
          label: "15 mins",
          laneId: "OPEN",
          title: "Buy milk",
        },
        {
          description: "Sort out recyclable and waste as needed",
          id: "Plan2",
          label: "10 mins",
          laneId: "OPEN",
          title: "Dispose Garbage",
        },
        {
          description: "Can AI make memes?",
          id: "Plan3",
          label: "30 mins",
          laneId: "OPEN",
          title: "Write Blog",
        },
        {
          description: "Transfer to bank account",
          id: "Plan4",
          label: "5 mins",
          laneId: "OPEN",
          title: "Pay Rent",
        },
      ],
      currentPage: 1,
      id: "OPEN",
      title: "Open Tasks",
    },
    {
      cards: [
        {
          description:
            "Soap wash and polish floor. Polish windows and doors. Scrap all broken glasses",
          id: "Wip1",
          label: "30 mins",
          laneId: "WIP",
          title: "Clean House",
        },
      ],
      currentPage: 1,
      droppable: false,
      id: "WIP",
      title: "Work In Progress",
    },
    {
      cards: [],
      currentPage: 1,
      id: "COMPLETED",

      style: {
        width: 280,
      },
      title: "Completed",
    },
  ],
};

export default function Boards() {
  const userContext = React.useContext(UserContext);
  const history = useHistory();
  const testing = () => {
    userContext.setLoading();

    const randomTime = Math.random() * 2000;
    setTimeout(() => {
      userContext.setNotLoading();
    }, randomTime);
  };

  const handleClick = (cardId) => {
    userContext.setLoading();
    const randomTime = Math.random() * 2000;
    setTimeout(() => {
      userContext.setNotLoading();
      history.push(`/ticket/${cardId}`);
    }, randomTime);
  };

  return (
    <div className="App">
      <Board
        data={data}
        editable
        onCardMoveAcrossLanes={() => testing()}
        onCardClick={(cardId) => {
          handleClick(cardId);
        }}
      />
    </div>
  );
}
