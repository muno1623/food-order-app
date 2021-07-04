import styles from "./Cart.module.css";
import Modal from "../UI/Modal";
import { useContext, useState } from "react";
import CartContext from "../store/cart-context";
import CartItems from "./CartItems";
import Checkout from "./Checkout";
import { func } from "prop-types";

const Cart = (props) => {
  const [orderBtnClicked, setOrderBtnClicked] = useState(false);
  function orderBtnHandler() {
    setOrderBtnClicked(true);
  }
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
  const modalActions = (
    <div className={styles.actions}>
      <button className={styles["button--alt"]} onClick={props.onHideCart}>
        Close
      </button>
      {hasItems && (
        <button className={styles.button} onClick={orderBtnHandler}>
          Order
        </button>
      )}
    </div>
  );
  
  return (
    <Modal onClose={props.onHideCart}>
      <div className={styles["cart-items"]}>{cartItems}</div>
      <div className={styles.total}>
        <span>Total Amount</span>
        <span>{totalAmount}</span>
      </div>
      {!orderBtnClicked && modalActions}
      {orderBtnClicked && <Checkout onCancel={props.onHideCart}></Checkout>}
    </Modal>
  );
};

export default Cart;
