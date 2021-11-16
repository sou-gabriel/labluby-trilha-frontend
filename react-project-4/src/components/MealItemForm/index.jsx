import { useRef, useState } from "react";

import { InputGroup } from "../InputGroup";

import classes from "./style.module.css";

export const MealItemForm = (props) => {
  const amountInputRef = useRef();

  const [amountIsValid, setAmountIsValid] = useState(true)

  const submitHandler = (event) => {
    event.preventDefault();

    const enteredAmount = amountInputRef.current.value;
    const enteredAmountAsNumber = Number(enteredAmount)

    if (
      enteredAmount.trim().length === 0 ||
      enteredAmountAsNumber < 1 ||
      enteredAmountAsNumber > 5
    ) {
      setAmountIsValid(false)
      return;
    }

    props.onAddToCart(enteredAmountAsNumber)
  };

  return (
    <form className={classes.form} onSubmit={submitHandler}>
      <InputGroup
        ref={amountInputRef}
        label="Amount"
        input={{
          id: "amount" + props.id,
          type: "number",
          min: "1",
          max: "5",
          defaultValue: "1",
        }}
      />
      <button>+ Add</button>
      {!amountIsValid && <p>Please enter a valid amount (1-5).</p>}
    </form>
  );
};
