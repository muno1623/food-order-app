import classes from "./Checkout.module.css";
import { useRef } from "react";
import { useContext } from "react";
import CartContext from "../store/cart-context";

const Checkout = (props) => {
  const nameInput = useRef();
  const streetInput = useRef();
  const postalInput = useRef();
  const cityInput = useRef();
  const cartCtx = useContext(CartContext);

  const confirmHandler = (event) => {
    event.preventDefault();
    console.log(cartCtx.items);
    const orderData = {
      items: cartCtx.items,
      totalAmount: cartCtx.totalAmount,
      name: nameInput.current.value,
      street: streetInput.current.value,
      postal: postalInput.current.value,
      city: cityInput.current.value,
    };
  };

  return (
    <form className={classes.form} onSubmit={confirmHandler}>
      <div className={classes.control}>
        <label htmlFor="name">Your Name</label>
        <input ref={nameInput} type="text" id="name" />
      </div>
      <div className={classes.control}>
        <label htmlFor="street">Street</label>
        <input ref={streetInput} type="text" id="street" />
      </div>
      <div className={classes.control}>
        <label htmlFor="postal">Postal Code</label>
        <input ref={postalInput} type="text" id="postal" />
      </div>
      <div className={classes.control}>
        <label htmlFor="city">City</label>
        <input ref={cityInput} type="text" id="city" />
      </div>
      <div className={classes.actions}>
        <button type="button" onClick={props.onCancel}>
          Cancel
        </button>
        <button className={classes.submit}>Confirm</button>
      </div>
    </form>
  );
};

export default Checkout;
