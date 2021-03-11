import React from "react";
import "./quantityHandler.css";

const quantityHandler = (props) => (
  <div className={"CartItem"}>
    <div className={"Label"}>{props.label}</div>
    <button
      className={"Less"}
      onClick={props.removed}
      disabled={props.disabled}
    >
      -
    </button>
    <h1>{props.quantity}</h1>
    <button className={"More"} onClick={props.added}>
      +
    </button>
    <h1>${props.priceUpdate.toFixed(2)}</h1>
  </div>
);

export default quantityHandler;
