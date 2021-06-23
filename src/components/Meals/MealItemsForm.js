import React, { useContext } from "react";
import styles from "./MealItemsForm.module.css"
import Input from "../UI/Input";
import CartContext from "../store/cart-context";

const MealItemsForm = (props) => {
    return(
        <form className={styles.form}>
            <Input label="Amount" input={{
                id: "amount" + props.id,
                type:"number",
                min:"1",
                max:"5",
                step: "1",
                defaultValue: "1"
            }}></Input>
            <button>+ Add</button>
        </form>

    );
};

export default MealItemsForm;