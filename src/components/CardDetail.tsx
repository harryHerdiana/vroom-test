import React, { useContext, useState } from "react";
import { useParams } from "react-router-dom";

const CardDetail = () => {
  let { cardId } = useParams();
  return (
    <div>
      <h1>Hello</h1>
      <h2>I'm {{ cardId }}</h2>
    </div>
  );
};

export default CardDetail;
