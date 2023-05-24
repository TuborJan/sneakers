import React, { useContext } from "react";
import { Context } from "../../../../Service/Context/context";
import { deleteData } from "../../../../Service/API/Requests";
import styles from "./CartItem.module.scss";

const CartItem = ({ item }) => {
  const { setAddedItems } = useContext(Context);

  const deleteItem = (id) => {
    deleteData("cart", id);
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
          src="https://i.postimg.cc/MHkS9tXK/exitbtn.png"
          alt="delete button"
        />
      </div>
    </div>
  );
};

export default CartItem;
