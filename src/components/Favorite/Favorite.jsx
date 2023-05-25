import { Link } from "react-router-dom";
import { FavoriteItems } from "./FavoriteItems";
import styles from "../../styles/Favorite/Favorite.module.scss";
import { useEffect, useState } from "react";
import { $productsCardStore } from "../../Service/Store/store";
import { useStore } from "effector-react";

export const Favorite = () => {
  const [favoriteItems, setFavoriteItems] = useState([]);
  const productsCard = useStore($productsCardStore);

  useEffect(() => {
    setFavoriteItems(productsCard.filter((item) => item.isFavorite));
  }, [productsCard]);

  return (
    <div className={styles.favorite}>
      {favoriteItems.length > 0 ? (
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
            {favoriteItems.map((item, index) => (
              <FavoriteItems key={index} item={item} />
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
