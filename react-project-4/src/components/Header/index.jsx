import { CartButton } from "../CartButton";

import mealsImagePath from "../../assets/images/meals.jpg";

import classes from "./style.module.css";

export const Header = (props) => {
  return (
    <>
      <header className={classes.header}>
        <h1>ReactMeals</h1>
        <CartButton onClick={props.onShowCart} />
      </header>
      <div className={classes["main-image"]}>
        <img src={mealsImagePath} alt="A table full of delicious food!" />
      </div>
    </>
  );
};
