import React, { useContext, useState } from "react";
import { useParams } from "react-router";
import { useHistory } from "react-router-dom";
import { data } from "./board";
import { UserContext } from "../Context/UserContext";

const CardDetail = () => {
  const userContext = React.useContext(UserContext);
  const history = useHistory();
  let { Value } = useParams<{ Value: string }>();
  const cards = data.lanes.find((el) =>
    el.cards.find((elm) => elm.id === Value)
  );
  const card = cards?.cards.find((el) => el.id === Value);
  const handleClick = () => {
    userContext.setLoading();
    const randomTime = Math.random() * 2000;
    setTimeout(() => {
      userContext.setNotLoading();
      history.push("/");
    }, randomTime);
  };

  return (
    <div className="absolute flex flex-col w-screen h-screen top-0 left-0 ">
      <div className="m-auto p-4 flex flex-col items-center bg-gray-100 rounded-lg gap-4 w-5/6 md:w-1/3">
        <h1 className="text-xl font-bold">Card Details</h1>
        <div className="grid grid-cols-2 gap-2">
          <div className="font-bold">Title</div>
          <div>{card?.title}</div>
          <div className="font-bold">Label</div>
          <div>{card?.label}</div>
          <div className="font-bold">Description</div>
          <div>{card?.description}</div>
          <div className="font-bold">Status</div>
          <div>{card?.laneId}</div>
        </div>
        <button
          onClick={handleClick}
          type="submit"
          className=" w-3/5 text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm w-full sm:w-auto px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
        >
          Back
        </button>
      </div>
    </div>
  );
};

export default CardDetail;
