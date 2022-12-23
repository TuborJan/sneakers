import React from "react";
import Items from "../Items/Items";
import styles from "./styles/Items.module.scss";

const Shop = () => {
  return (
    <div className={styles.shop}>
      <div className={styles.header}>
        <h1>Все кросовки</h1>
        <input type="text" placeholder="Поиск..." />
      </div>
      <Items />
    </div>
  );
};

export default Shop;
