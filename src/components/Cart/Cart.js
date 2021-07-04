import styles from "./Cart.module.css";
import Modal from "../UI/Modal";
import { useContext, useState } from "react";
import CartContext from "../store/cart-context";
import CartItems from "./CartItems";
import Checkout from "./Checkout";
import { Fragment } from "react";

const Cart = (props) => {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);
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

  const onSubmitHandler = (orderData) => {
    setIsSubmitting(true);
    console.log({
      orderItems: cartCtx.items,
      orderData: orderData,
    });
    setIsSubmitting(false);
    setIsSubmitted(true);
    cartCtx.clearItem();
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

  const cartModalContent = (
    <Fragment>
      <div className={styles["cart-items"]}>{cartItems}</div>
      <div className={styles.total}>
        <span>Total Amount</span>
        <span>{totalAmount}</span>
      </div>
      {!orderBtnClicked && modalActions}
      {orderBtnClicked && (
        <Checkout
          onConfirm={onSubmitHandler}
          onCancel={props.onHideCart}
        ></Checkout>
      )}
    </Fragment>
  );

  const isSubmittingContent = <p>Submmitng Order</p>;

  const isSubmittedContent = (
    <Fragment>
      <p>Order Submitted</p>
      <div className={styles.actions}>
        <button className={styles["button--alt"]} onClick={props.onHideCart}>
          Close
        </button>
      </div>
    </Fragment>
  );

  return (
    <Modal onClose={props.onHideCart}>
      {!isSubmitted && cartModalContent}
      {isSubmitting && isSubmittingContent}
      {isSubmitted && isSubmittedContent}
    </Modal>
  );
};

export default Cart;
