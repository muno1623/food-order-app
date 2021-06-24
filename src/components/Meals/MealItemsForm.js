import React, { useContext } from "react";
import styles from "./MealItemsForm.module.css";
import Input from "../UI/Input";
import CartContext from "../store/cart-context";
import { useRef } from "react";

const MealItemsForm = (props) => {
  const amountInputRef = useRef();

  const submitHandler = (event) => {
    event.preventDefault();
    const enteredAmount = amountInputRef.current.value;
    const enteredAmountNumber = +enteredAmount;
    if(enteredAmount.trim().length === 0 || enteredAmountNumber<1 || enteredAmountNumber >5 )
    {
        return;
    };
    props.onAddToCart(enteredAmountNumber);
  };

  return (
    <form onSubmit={submitHandler} className={styles.form}>
      <Input
        ref={amountInputRef}
        label="Amount"
        input={{
          id: "amount" + props.id,
          type: "number",
          min: "1",
          max: "5",
          step: "1",
          defaultValue: "1",
        }}
      ></Input>
      <button>+ Add</button>
    </form>
  );
};

export default MealItemsForm;
