import classes from "./Checkout.module.css";
import { useRef, useState } from "react";
import { useContext } from "react";
import CartContext from "../store/cart-context";

const Checkout = (props) => {

  const isEmpty = (value) => value.trim() === "";
  const isNotFiveChars = (value) => value.trim().length !== 5;

  const [formIsValid, setFormIsValid] = useState({
    name: true,
    street: true,
    postal: true,
    city: true
  });
  const nameInput = useRef();
  const streetInput = useRef();
  const postalInput = useRef();
  const cityInput = useRef();

  const confirmHandler = (event) => {
    event.preventDefault();

    const enteredNameIsValid = !isEmpty(nameInput.current.value);
    const enteredStreetIsValid = !isEmpty(streetInput.current.value);
    const enteredPostalIsValid = !isNotFiveChars(postalInput.current.value);
    const enteredCityIsValid = !isEmpty(cityInput.current.value);
  
    setFormIsValid({
      name: enteredNameIsValid,
      street: enteredStreetIsValid,
      postal: enteredPostalIsValid,
      city: enteredCityIsValid
    })
  
    const formValid =
      enteredCityIsValid &&
      enteredStreetIsValid &&
      enteredNameIsValid &&
      enteredPostalIsValid;

    if (!formValid) {
      return;
    }

    props.onConfirm({
      name: nameInput.current.value,
      street: streetInput.current.value,
      postal: postalInput.current.value,
      city: cityInput.current.value
    });
  };

  const nameClass = `${classes.control} ${!formIsValid.name ? classes.invalid : ""}`;
  const streetClass = `${classes.control} ${!formIsValid.street ? classes.invalid : ""}`;
  const postalClass = `${classes.control} ${!formIsValid.postal ? classes.invalid : ""}`;
  const cityClass = `${classes.control} ${!formIsValid.city ? classes.invalid : ""}`;

  return (
    <form className={classes.form} onSubmit={confirmHandler}>
      <div className={nameClass}>
        <label htmlFor="name">Your Name</label>
        <input ref={nameInput} type="text" id="name" />
        {!formIsValid.name && <p className={classes.para}>Enter Correct Name</p>}
      </div>
      <div className={streetClass}>
        <label htmlFor="street">Street</label>
        <input ref={streetInput} type="text" id="street" />
        {!formIsValid.street && <p className={classes.para}>Enter Correct Street</p>}
      </div>
      <div className={postalClass}>
        <label htmlFor="postal">Postal Code</label>
        <input ref={postalInput} type="text" id="postal" />
        {!formIsValid.postal && <p className={classes.para}>Enter Correct Postal Code</p>}
      </div>
      <div className={cityClass}>
        <label htmlFor="city">City</label>
        <input ref={cityInput} type="text" id="city" />
        {!formIsValid.city && <p className={classes.para}>Enter Correct City</p>}
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
