import React, { useContext } from "react";
import Card from "../UI/Card";
import styles from "./MealsList.module.css";
import MealItemsForm from "./MealItemsForm";
import CartContext from "../store/cart-context";

const MealsList = (props) => {
  const cartCtx = useContext(CartContext);

  const onAddToCartHandler = (amountNumber) => {
    cartCtx.addItem({
      id: props.id,
      name: props.item.name,
      amount: amountNumber,
      price: props.item.price,
    });
    console.log(cartCtx.items);
  };

  let price = `€ ${props.item.price.toFixed(2)}`;
  return (
    <li>
      <div className={styles.meal}>
        <h3>{props.item.name}</h3>
        <div className={styles.description}>{props.item.description}</div>
        <div className={styles.price}>{price}</div>
        <MealItemsForm
          onAddToCart={onAddToCartHandler}
          id={props.item.id}
        ></MealItemsForm>
      </div>
      <div></div>
    </li>
  );
};

export default MealsList;
