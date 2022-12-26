import axios from "axios";
import React, { useContext } from "react";
import { Context } from "../../Context/context";
import styles from "./CartItem.module.scss";

const CartItem = ({ item }) => {
  const { setAddedItems } = useContext(Context);

  const deleteItem = (id) => {
    axios.delete(`https://63a57287318b23efa793b328.mockapi.io/Cart/${id}`);
    setAddedItems((prev) => prev.filter((item) => item.id !== id));
  };

  return (
    <div className={styles.cartItem}>
      <div className={styles.cartImg}>
        <img src={item.url} alt="" />
      </div>
      <div className={styles.info}>
        <div className={styles.description}>{item.description}</div>
        <div className={styles.price}>{item.price} руб.</div>
      </div>
      <div className={styles.deleteBtn}>
        <img
          onClick={() => deleteItem(item.id)}
          src="img/exitbtn.png"
          alt="delete button"
        />
      </div>
    </div>
  );
};

export default CartItem;
