import styles from "../../styles/Cart/CartItem.module.scss";

const CartItem = ({ item }) => {
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
          src="https://i.postimg.cc/MHkS9tXK/exitbtn.png"
          alt="delete button"
        />
      </div>
    </div>
  );
};

export default CartItem;
