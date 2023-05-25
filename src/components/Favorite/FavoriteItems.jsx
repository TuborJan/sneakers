import { useStore } from "effector-react";
import {
  toggleIsAddedToCart,
  toggleIsFavorite,
} from "../../Service/Functions/toggleItems";
import styles from "../../styles/Favorite/FavoriteItems.module.scss";
import { $productsCardStore, setProductsCard } from "../../Service/Store/store";

export const FavoriteItems = ({ item }) => {
  const productsCards = useStore($productsCardStore);

  return (
    <div className={styles.item}>
      <div
        className={
          item.isAddedToCart ? `${styles.active} ${styles.card}` : styles.card
        }
      >
        <div>
          <div
            className={styles.img}
            style={{
              backgroundImage: `url(${item.url})`,
              backgroundRepeat: "no-repeat",
            }}
          >
            <img
              onClick={() =>
                toggleIsFavorite(item, productsCards, setProductsCard)
              }
              src={"https://i.postimg.cc/L6tHbdtd/favorite.png"}
              alt="favorite icon"
            />
          </div>
          <div className={styles.info}>
            <h3>{item.description}</h3>
            <div className={styles.price}>
              <p>
                ЦЕНА: <br />{" "}
                <span className={styles.bolder}>{`${item.price} руб.`}</span>
              </p>
              <img
                onClick={() =>
                  toggleIsAddedToCart(item, productsCards, setProductsCard)
                }
                src={
                  item.isAddedToCart
                    ? "https://i.postimg.cc/T3TR8k0K/addactive.png"
                    : "https://i.postimg.cc/nLzprC6Z/add.png"
                }
                alt="add btn"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
