import React from "react";
import "./basketControls.css";
import QuantityHandler from "./QuantityHandler/quantityHandler";

const cartList = [
  { label: "Mountain Dew", type: "beverage" },
  { label: "Desperados", type: "tequila" },
  { label: "Jack Daniels", type: "whiskey" },
];

const basketControls = (props) => (
  <div className="BuildControls">
    <h1>
      <strong>Basket checkout</strong>
    </h1>
    {cartList.map((ctrl) => (
      <QuantityHandler
        key={ctrl.label}
        label={ctrl.label}
        added={() => props.itemAdded(ctrl.type)}
        removed={() => props.itemRemoved(ctrl.type)}
        disabled={props.disabled[ctrl.type]}
        quantity={props.quantity[ctrl.type]}
        priceUpdate={props.priceUpdate[ctrl.type]}
      />
    ))}
    <hr />
    <div className="CartItem">
      <h1>
        $<strong>{props.price.toFixed(2)}</strong>
      </h1>
      <button
        onClick={props.clearBasket}
        className={"Button"}
        disabled={!props.purchasable}
      >
        Clear
      </button>
      <button
        className={"Button"}
        disabled={!props.purchasable}
        onClick={props.ordered}
      >
        Check out >
      </button>
    </div>
  </div>
);

export default basketControls;
