import ContentLoader from "react-content-loader";
import styles from "../../styles/Shop/Card.module.scss";
import {
  toggleIsAddedToCart,
  toggleIsFavorite,
} from "../../Service/Functions/toggleItems";
import { useStore } from "effector-react";
import { $productsCardStore, setProductsCard } from "../../Service/Store/store";

export const Card = ({ item, isLoading }) => {
  const productsCards = useStore($productsCardStore);

  return (
    <div className={styles.item}>
      {isLoading ? (
        <div className={`${styles.loading} ${styles.card}`}>
          <ContentLoader
            speed={2}
            width={210}
            height={260}
            viewBox="0 0 210 260"
            backgroundColor="#f6f6f6"
            foregroundColor="#e3e3e3"
          >
            <rect x="30" y="36" rx="10" ry="10" width="150" height="91" />
            <rect x="30" y="143" rx="3" ry="3" width="150" height="15" />
            <rect x="30" y="162" rx="3" ry="3" width="93" height="15" />
            <rect x="30" y="199" rx="8" ry="8" width="80" height="24" />
            <rect x="148" y="191" rx="8" ry="8" width="32" height="32" />
          </ContentLoader>
        </div>
      ) : (
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
                src={
                  item.isFavorite
                    ? "https://i.postimg.cc/L6tHbdtd/favorite.png"
                    : "https://i.postimg.cc/sfSyMF0B/unfavorite.png"
                }
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
      )}
    </div>
  );
};
