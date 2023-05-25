import styles from "../../styles/Cart/CartItem.module.scss";
import { useStore } from "effector-react";
import { $productsCardStore, setProductsCard } from "../../Service/Store/store";

const CartItem = ({ item }) => {
  const productsCards = useStore($productsCardStore);

  const toggleIsAddedToCart = (item) => {
    item.isAddedToCart = !item.isAddedToCart;
    setProductsCard([...productsCards]);
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
          onClick={() => toggleIsAddedToCart(item)}
          src="https://i.postimg.cc/MHkS9tXK/exitbtn.png"
          alt="delete button"
        />
      </div>
    </div>
  );
};

export default CartItem;
