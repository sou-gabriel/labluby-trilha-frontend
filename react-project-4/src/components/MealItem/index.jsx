import { useContext } from "react";
import { CartContext } from "../../context/cartContext";

import { MealItemForm } from "../MealItemForm";

import classes from "./style.module.css";

export const MealItem = (props) => {
  const cartContext = useContext(CartContext);
  const price = `$${props.price.toFixed(2)}`;

  const addToCartHandler = (amount) => {
    cartContext.addItem({
      id: props.id,
      name: props.name,
      amount,
      price: props.price
    });
  };

  return (
    <li className={classes.meal}>
      <header>
        <h3>{props.name}</h3>
        <p className={classes.description}>{props.description}</p>
        <p className={classes.price}>{price}</p>
      </header>
      <div>
        <MealItemForm id={props.id} onAddToCart={addToCartHandler} />
      </div>
    </li>
  );
};
