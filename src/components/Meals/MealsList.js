import React from "react";
import Card from "../UI/Card";
import styles from "./MealsList.module.css";
import MealItemsForm from "./MealItemsForm";

const MealsList = (props) => {
  let price = `€ ${props.item.price.toFixed(2)}`;
  return (
    <li>
      <div className={styles.meal}>
        <h3>{props.item.name}</h3>
        <div className={styles.description}>{props.item.description}</div>
        <div className={styles.price}>{price}</div>
        <MealItemsForm id={props.item.id}></MealItemsForm>
      </div>
      <div>
        
      </div>
    </li>
  );
};

export default MealsList;
