import axios from "axios";
import React, { useState, useContext } from "react";
import { Context } from "../../Context/context";
import styles from "./Card.module.scss";

const Card = ({ item, isAdded = false }) => {
  const [favBtn, setFavBtn] = useState(false);
  const [addBtnItem, setAddBtnItem] = useState(isAdded);

  const {
    addedItems,
    setAddedItems,
    currentPrice,
    setCurrentPrice,
    updateData,
    setUpdateData,
  } = useContext(Context);

  const activeFavorite = () => {
    setFavBtn(!favBtn);
  };

  const addToCart = (item) => {
    setAddBtnItem(!addBtnItem);
    if (
      addedItems.find((obj) => Number(obj.parentid) === Number(item.parentid))
    ) {
      addedItems.find((obj) => {
        if (Number(obj.parentid) === Number(item.parentid)) {
          axios.delete(
            `https://63a57287318b23efa793b328.mockapi.io/Cart/${obj.id}`
          );
        }
      });
      setCurrentPrice(currentPrice - item.price);
      setAddedItems((prev) =>
        prev.filter((obj) => Number(obj.id) !== Number(item.parentid))
      );
      setUpdateData(!updateData);
    } else {
      axios.post("https://63a57287318b23efa793b328.mockapi.io/Cart", item);
      setCurrentPrice(currentPrice + item.price);
      setAddedItems((prev) => [...prev, item]);
      setUpdateData(!updateData);
    }
  };

  return (
    <div
      className={addBtnItem ? `${styles.active} ${styles.card}` : styles.card}
    >
      <div
        className={styles.img}
        style={{
          backgroundImage: `url(${item.url})`,
          backgroundRepeat: "no-repeat",
        }}
      >
        <img
          onClick={activeFavorite}
          src={favBtn ? "/img/favorite.svg" : "/img/unfavorite.png"}
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
            src={addBtnItem ? "/img/addactive.png" : "/img/add.svg"}
            alt="add btn"
          />
        </div>
      </div>
    </div>
  );
};

export default Card;
