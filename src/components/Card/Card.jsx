import axios from "axios";
import React, { useState, useContext } from "react";
import { Context } from "../../Context/context";
import styles from "./Card.module.scss";

const Card = ({ item, isItemAdded }) => {
  const { addedItems, setAddedItems, updateData, setUpdateData } =
    useContext(Context);

  const [favBtn, setFavBtn] = useState(false);

  const activeFavorite = () => {
    setFavBtn(!favBtn);
  };

  const addToCart = (item) => {
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
      setAddedItems((prev) =>
        prev.filter((obj) => Number(obj.id) !== Number(item.parentid))
      );
      setUpdateData(!updateData);
    } else {
      axios.post("https://63a57287318b23efa793b328.mockapi.io/Cart", item);
      setAddedItems((prev) => [...prev, item]);
      setUpdateData(!updateData);
    }
  };

  return (
    <div
      className={
        isItemAdded(item.parentid)
          ? `${styles.active} ${styles.card}`
          : styles.card
      }
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
            src={
              isItemAdded(item.parentid) ? "/img/addactive.png" : "/img/add.svg"
            }
            alt="add btn"
          />
        </div>
      </div>
    </div>
  );
};

export default Card;
