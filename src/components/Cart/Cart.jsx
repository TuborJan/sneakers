import React, { useState, useContext } from "react";
// import { Context } from "../../../Service/Context/context";
// import { deleteData, postData } from "../../../Service/API/Requests";
// import CartItem from "./CartItem/CartItem";
import styles from "../../styles/Cart/Cart.module.scss";

const Cart = ({ setOpenCart, currentPrice }) => {
  // const { addedItems, setAddedItems, setPurchasedItems } = useContext(Context);

  const [isPurchased, setIsPurchased] = useState(false);

  const closeModal = () => {
    setOpenCart(false);
    document.body.style.overflow = "visible";
    // document.body.style.marginRight = "0px";
  };

  // const makePurchase = () => {
  //   for (let item of addedItems) {
  //     async function purchase() {
  //       await postData("purchases", item);
  //       await deleteData("cart", item.id);
  //       setAddedItems([]);
  //       setPurchasedItems((prev) => [...prev, item]);
  //     }
  //     purchase();
  //   }
  //   setIsPurchased(true);
  // };

  return (
    <div className={styles.modal} onClick={closeModal}>
      <div
        className={`${styles.cart} ${styles.cartscroll}`}
        onClick={(e) => e.stopPropagation()}
      >
        <div className={styles.header}>
          <h2>Корзина</h2>
          <img
            src="https://i.postimg.cc/MHkS9tXK/exitbtn.png"
            alt="exit"
            onClick={closeModal}
          />
        </div>
        {/* {addedItems.length > 0 ? (
          <div className={styles.notAnEmpty}>
            <div className={`${styles.cartItems} ${styles.scrollbar}`}>
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
              <button onClick={() => makePurchase()}>
                Оформить заказ
                <span className={styles.arrow}>
                  <img
                    src="https://i.postimg.cc/NjbQQ1Cp/arrow.png"
                    alt="arrow"
                  />
                </span>{" "}
              </button>
            </div>
          </div>
        ) : isPurchased ? (
          <div className={styles.empty}>
            <div className={styles.purchaseImg}>
              <img
                src="https://i.postimg.cc/k53yR6sz/purchase.png"
                alt="purchase complite"
              />
            </div>
            <div className={styles.purchaseHeader}>
              <h2>Заказ оформлен!</h2>
            </div>
            <div className={styles.description}>
              Ваш заказ скоро будет передан курьерской службе доставки.
            </div>
            <div className={styles.button}>
              <button onClick={closeModal}>
                <span className={styles.arrow}>
                  <img
                    src="https://i.postimg.cc/NjbQQ1Cp/arrow.png"
                    alt="arrow"
                  />
                </span>{" "}
                Вернуться назад
              </button>
            </div>
          </div>
        ) : (
          <div className={styles.empty}>
            <div className={styles.emptyimg}>
              <img
                src="https://i.postimg.cc/qq8dSnCc/emptybox.png"
                alt="empty box"
              />
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
                  <img
                    src="https://i.postimg.cc/NjbQQ1Cp/arrow.png"
                    alt="arrow"
                  />
                </span>{" "}
                Вернуться назад
              </button>
            </div>
          </div>
        )} */}
        <div className={styles.empty}>
          <div className={styles.emptyimg}>
            <img
              src="https://i.postimg.cc/qq8dSnCc/emptybox.png"
              alt="empty box"
            />
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
                <img
                  src="https://i.postimg.cc/NjbQQ1Cp/arrow.png"
                  alt="arrow"
                />
              </span>{" "}
              Вернуться назад
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Cart;
