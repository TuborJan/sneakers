import React, { useState, useContext } from "react";
import { Context } from "../../Context/context";
import styles from "./Card.module.scss";
import ContentLoader from "react-content-loader";
import { fetchItemsData, postData, deleteData } from "../API/Requests";

const Card = ({ item, isItemAdded, isLoading = true }) => {
  const { addedItems, setAddedItems, setErrorCart } = useContext(Context);

  const [favBtn, setFavBtn] = useState(false);

  const activeFavorite = () => {
    setFavBtn(!favBtn);
  };

  const addToCart = (item) => {
    if (
      addedItems.find((obj) => Number(obj.parentid) === Number(item.parentid))
    ) {
      for (let obj of addedItems) {
        if (Number(obj.parentid) === Number(item.parentid)) {
          async function serverRequestUpdate() {
            await deleteData("Cart", obj.id);
            await fetchItemsData("Cart", setAddedItems, setErrorCart);
          }
          serverRequestUpdate();
          break;
        }
      }
    } else {
      async function serverRequestUpdate() {
        await postData("Cart", item);
        await fetchItemsData("Cart", setAddedItems, setErrorCart);
      }
      serverRequestUpdate();
    }
  };

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
                onClick={activeFavorite}
                src={favBtn ? "img/favorite.svg" : "img/unfavorite.png"}
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
                  onClick={() => addToCart(item)}
                  src={
                    isItemAdded(item.parentid)
                      ? "img/addactive.png"
                      : "img/add.svg"
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

export default Card;
