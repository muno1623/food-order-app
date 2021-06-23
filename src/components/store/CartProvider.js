import CartContext from "./cart-context";
import { useReducer } from "react";

const defualtCartState = {
  items: [],
  totalAmount: 0
};

const cartReducer = (state, action) => {
  return defualtCartState;
};

const CartProvider = (props) => {
  
    const removeItemFromCartHandler = () => {};
    const addItemToCartHandler = () => {};

    const cartContext = {
        items: [],
        totalAmount: 0,
        addItem: addItemToCartHandler,
        removeItem: removeItemFromCartHandler
    };

  return <CartContext.Provider value={cartContext}>{props.children}</CartContext.Provider>;
};

export default CartProvider;
