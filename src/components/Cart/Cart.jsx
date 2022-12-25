import React, { useContext } from "react";
import { Context } from "../../Context/context";
import CartItem from "../CartItem/CartItem";
import styles from "./Cart.module.scss";

const Cart = ({ setOpenCart }) => {
  const { addedItems } = useContext(Context);

  const closeModal = () => {
    setOpenCart(false);
    document.body.style.overflow = "visible";
    document.body.style.marginRight = "0px";
  };

  return (
    <div className={styles.modal} onClick={closeModal}>
      <div className={styles.cart} onClick={(e) => e.stopPropagation()}>
        <div className={styles.header}>
          <h2>Корзина</h2>
          <img src="img/exitbtn.png" alt="exit" onClick={closeModal} />
        </div>
        {addedItems.length > 0 ? (
          addedItems.map((item, index) => (
            <div className={styles.cartItems} key={index}>
              <CartItem item={item} />
            </div>
          ))
        ) : (
          <h1>Пусто</h1>
        )}
      </div>
    </div>
  );
};

export default Cart;
