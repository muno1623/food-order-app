import React, { useContext } from "react";
import styles from "./HeaderCartButton.module.css"
import CartIcon from "../Cart/CartIcon";
import CartContext from "../store/cart-context";

const HeaderCartButton = (props) => {

    const cartCtx = useContext(CartContext);
    const numberOfItems = cartCtx.items.reduce((currtNumber, item)=>{return currtNumber+item.amount}, 0);
    return(
        <button className={styles.button} onClick={props.onClick}>
            <span className={styles.icon}>
                <CartIcon></CartIcon>
            </span>
            <span >Cart</span>
            <span className={styles.badge}>{numberOfItems}</span>
        </button>
    );
};

export default HeaderCartButton;