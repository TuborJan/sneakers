import React, { useState } from "react";
import styles from "./Card.module.scss";

const Card = ({ imgUrl, description, price }) => {
  const [favBtn, setFavBtn] = useState(false);
  const [addBtn, setAddBtn] = useState(false);

  const activeFavorite = () => {
    setFavBtn(!favBtn);
  };

  const addToCart = () => {
    setAddBtn(!addBtn);
  };

  return (
    <div className={addBtn ? `${styles.active} ${styles.card}` : styles.card}>
      <div
        className={styles.img}
        style={{
          backgroundImage: `url(${imgUrl})`,
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
        <h3>{description}</h3>
        <div className={styles.price}>
          <p>
            ЦЕНА: <br />{" "}
            <span className={styles.bolder}>{`${price} руб.`}</span>
          </p>
          <img
            onClick={addToCart}
            src={addBtn ? "/img/addactive.png" : "/img/add.svg"}
            alt="add btn"
          />
        </div>
      </div>
    </div>
  );
};

export default Card;
