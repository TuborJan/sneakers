import React, { useContext } from "react";
import { Context } from "../../Context/context";
import Card from "../Card/Card";
import styles from "./Items.module.scss";

const Shop = ({ items, error }) => {
  const { addedItems } = useContext(Context);

  const isItemAdded = (id) => {
    return addedItems.some((obj) => obj.parentid === id);
  };

  return (
    <div className={styles.shop}>
      <div className={styles.header}>
        <h1>Все кросовки</h1>
        <input type="text" placeholder="Поиск..." />
      </div>

      <div className={styles.items}>
        {error ? (
          <h1 className={styles.error}>{error.message}</h1>
        ) : (
          items.map((item, index) => (
            <Card key={index} item={item} isItemAdded={isItemAdded} />
          ))
        )}
      </div>
    </div>
  );
};

export default Shop;
