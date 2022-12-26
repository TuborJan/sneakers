import React, { useContext } from "react";
import { Context } from "../../Context/context";
import CartItem from "../CartItem/CartItem";
import styles from "./Cart.module.scss";

const Cart = ({ setOpenCart, currentPrice }) => {
  const { addedItems } = useContext(Context);

  const closeModal = () => {
    setOpenCart(false);
    document.body.style.overflow = "visible";
    document.body.style.marginRight = "0px";
  };

  return (
    <div className={styles.modal} onClick={closeModal}>
      <div
        className={
          addedItems.length < 6
            ? `${styles.cart}`
            : `${styles.cart} ${styles.cartscroll}`
        }
        onClick={(e) => e.stopPropagation()}
      >
        <div className={styles.header}>
          <h2>Корзина</h2>
          <img src="img/exitbtn.png" alt="exit" onClick={closeModal} />
        </div>
        {addedItems.length > 0 ? (
          <div className={styles.notAnEmpty}>
            <div
              className={
                addedItems.length < 6
                  ? `${styles.cartItems}`
                  : `${styles.cartItems} ${styles.scrollbar}`
              }
            >
              {addedItems.map((item, index) => (
                <CartItem item={item} key={index} />
              ))}
            </div>

            <div className={styles.price}>
              <p>Итого:</p>
              <span className={styles.dashed}></span>
              <div className={styles.currentPrice}>{currentPrice} руб.</div>
            </div>
            <div className={styles.orderbutton}>
              <button>
                Вернуться назад
                <span className={styles.arrow}>
                  <img src="img/arrow.png" alt="arrow" />
                </span>{" "}
              </button>
            </div>
          </div>
        ) : (
          <div className={styles.empty}>
            <div className={styles.emptyimg}>
              <img src="img/emptybox.png" alt="empty box" />
            </div>
            <div className={styles.emptyheader}>
              <h2>Корзина пустая</h2>
            </div>
            <div className={styles.description}>
              Добавьте хотя бы одну пару кроссовок, чтобы сделать заказ.
            </div>
            <div className={styles.button}>
              <button onClick={closeModal}>
                <span className={styles.arrow}>
                  <img src="img/arrow.png" alt="arrow" />
                </span>{" "}
                Вернуться назад
              </button>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default Cart;
