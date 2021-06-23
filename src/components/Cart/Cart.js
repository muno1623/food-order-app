import styles from "./Cart.module.css";
import Modal from "../UI/Modal";

const Cart = (props) => {
    const cartItems = <ul className={styles["cart-items"]}>{[{id: "c1",name:"Sushi", amount:12.99}].map(items => <li>{items.name}</li>)}</ul> ;
  return (
    <Modal onClose={props.onHideCart}>
      {cartItems}
      <div className={styles.total}>
          <span>Total Amount</span>
          <span>35.5</span>
      </div>
      <div className={styles.actions}>
          <button className={styles["button--alt"]} onClick={props.onHideCart}>Close</button>
          <button className={styles.button}>Order</button>
      </div>
    </Modal>
  );
};

export default Cart;
