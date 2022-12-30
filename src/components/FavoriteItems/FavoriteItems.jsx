import React, { useContext } from "react";
import { Context } from "../../Context/context";
import { addToCart, addToFavorite } from "../../functions/addItems";
import styles from "./FavoriteItems.module.scss";

const FavoriteItems = ({ item, isItemAdded }) => {
  const {
    addedItems,
    setAddedItems,
    addedFavorite,
    setAddedFavorite,
    setError,
  } = useContext(Context);

  return (
    <div className={styles.item}>
      <div
        className={
          isItemAdded(item.parentid)
            ? `${styles.active} ${styles.card}`
            : styles.card
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
                addToFavorite(item, addedFavorite, setAddedFavorite, setError)
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
                  addToCart(item, addedItems, setAddedItems, setError)
                }
                src={
                  isItemAdded(item.parentid)
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

export default FavoriteItems;
