import { useContext, useEffect, useState } from "react";
import { CartContext } from "../../context/cartContext";
import { CartIcon } from "../CartIcon";

import classes from "./style.module.css";

export const CartButton = (props) => {
  const cartContext = useContext(CartContext);
  const [btnIsHightlighted, setBtnIsHighlighted] = useState(false);

  const numberOfCartItems = cartContext.items.reduce((acc, item) => {
    return acc + item.amount;
  }, 0);

  const { items } = cartContext

  const btnClasses = `${classes.button} ${
    btnIsHightlighted ? classes.bump : ""
  }`;

  useEffect(() => {
    if (cartContext.items.length === 0) {
      return;
    }

    setBtnIsHighlighted(true);

    const timer = setTimeout(() => {
      setBtnIsHighlighted(false)
    }, 300)

    return () => clearTimeout(timer)
  }, [items]);

  return (
    <button className={btnClasses} onClick={props.onClick}>
      <span className={classes.icon}>
        <CartIcon />
      </span>
      <span>Your Cart</span>
      <span className={classes.badge}>{numberOfCartItems}</span>
    </button>
  );
};
