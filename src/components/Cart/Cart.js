import styles from "./Cart.module.css";
import Modal from "../UI/Modal";
import { useContext } from "react";
import CartContext from "../store/cart-context";
import CartItems from "./CartItems";

const Cart = (props) => {
  const cartCtx = useContext(CartContext);

  const onAdd = (item) => {
    cartCtx.addItem(item);
  };

  const onRemove = (id) => {
    cartCtx.removeItem(id);
  };

  const cartItems = cartCtx.items.map((items) => {
    return (
      <CartItems
        onAdd={onAdd.bind(null, items)}
        onRemove={onRemove.bind(null, items.id)}
        key={items.id}
        name={items.name}
        price={items.price}
        amount={items.amount}
      ></CartItems>
    );
  });

  const totalAmount = `€ ${cartCtx.totalAmount.toFixed(2)}`;
  const hasItems = cartCtx.items.length > 0;
  return (
    <Modal onClose={props.onHideCart}>
      <div className={styles["cart-items"]}>{cartItems}</div>
      <div className={styles.total}>
        <span>Total Amount</span>
        <span>{totalAmount}</span>
      </div>
      <div className={styles.actions}>
        <button className={styles["button--alt"]} onClick={props.onHideCart}>
          Close
        </button>
        {hasItems && <button className={styles.button}>Order</button>}
      </div>
    </Modal>
  );
};

export default Cart;
