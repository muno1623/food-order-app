import CartContext from "./cart-context";
import { useReducer } from "react";

const defualtCartState = {
  items: [],
  totalAmount: 0
};

const cartReducer = (state, action) => {
  console.log(action);
  if(action.type==="ADD"){
    
    const updatedItems = state.items.concat(action.item);
    const newTotalamount = state.totalAmount + action.item.price * action.item.amount;
    return {
      items: updatedItems,
      totalAmount: newTotalamount
    }
  };
  return defualtCartState;
};

const CartProvider = (props) => {

    const [cartState, dispatchCartAction] = useReducer(cartReducer, defualtCartState);

    const addItemToCartHandler = (item) => {
      dispatchCartAction({type: "ADD", item: item})
      
    };

    const removeItemFromCartHandler = (id) => {
      dispatchCartAction({type: "REMOVE", id: id});
    };

    const cartContext = {
        items: cartState.items,
        totalAmount: cartState.totalAmount,
        addItem: addItemToCartHandler,
        removeItem: removeItemFromCartHandler
    };

  return <CartContext.Provider value={cartContext}>{props.children}</CartContext.Provider>;
};

export default CartProvider;
