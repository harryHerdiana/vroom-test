import React, { useContext, useState } from "react";
import { useParams } from "react-router";
import { useHistory } from "react-router-dom";
import { data } from "./board";

const CardDetail = () => {
  const history = useHistory();
  let { Value } = useParams<{ Value: string }>();
  const cards = data.lanes.find((el) =>
    el.cards.find((elm) => elm.id === Value)
  );
  const card = cards?.cards.find((el) => el.id === Value);
  return (
    <div>
      <h1>Hello</h1>
      <h2>I'm {card?.description}</h2>
      <button onClick={() => history.push("/")}>Back</button>
    </div>
  );
};

export default CardDetail;
