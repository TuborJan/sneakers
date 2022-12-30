import React, { useContext } from "react";
import { Context } from "../../Context/context";
import { Link } from "react-router-dom";
import FavoriteItems from "../FavoriteItems/FavoriteItems";
import styles from "./Favorite.module.scss";

const Favorite = () => {
  const { addedFavorite, addedItems } = useContext(Context);

  const isItemAdded = (id) => {
    return addedItems.some((obj) => obj.parentid === id);
  };

  return (
    <div className={styles.favorite}>
      {addedFavorite.length > 0 ? (
        <div className={styles.notEmpty}>
          <div className={styles.header}>
            <Link to="/">
              <img
                src="https://i.postimg.cc/NFywxBn3/backbtn.png"
                alt="back btm"
              />
            </Link>
            <h1>Мои закладки</h1>
          </div>
          <div className={styles.items}>
            {addedFavorite.map((item, index) => (
              <FavoriteItems
                key={index}
                item={item}
                isItemAdded={isItemAdded}
              />
            ))}
          </div>
        </div>
      ) : (
        <div className={styles.empty}>
          <h1>Закладок нет</h1>
          <p>Вы ничего не добавляли в закладки</p>
          <Link to="/" className={styles.button}>
            <span className={styles.arrow}>
              <img src="https://i.postimg.cc/NjbQQ1Cp/arrow.png" alt="arrow" />
            </span>{" "}
            Вернуться назад
          </Link>
        </div>
      )}
    </div>
  );
};

export default Favorite;
