import React, { useContext, useState } from "react";
import { Context } from "../../Context/context";
import Card from "../Card/Card";
import styles from "./shop.module.scss";

const Shop = ({ items, error, isLoading }) => {
  const [searchValue, setSearchValue] = useState("");
  const { addedItems } = useContext(Context);

  const isItemAdded = (id) => {
    return addedItems.some((obj) => obj.parentid === id);
  };

  const changeSearchInput = (event) => {
    setSearchValue(event.target.value);
  };

  //Render products card
  const renderItems = () => {
    items = items.filter((item) =>
      item.description.toLowerCase().includes(searchValue.toLowerCase())
    );
    console.log(items.length);
    if (items.length < 9) {
      document.body.style.marginRight = "17px";
    } else {
      document.body.style.marginRight = "0px";
    }
    return (
      <div className={styles.items}>
        {error ? (
          <h1 className={styles.error}>{error.message}</h1>
        ) : (
          (isLoading ? [...Array(12)] : items).map((item, index) => (
            <Card
              key={index}
              item={item}
              isItemAdded={isItemAdded}
              isLoading={isLoading}
            />
          ))
        )}
      </div>
    );
  };

  return (
    <div className={styles.shop}>
      <div className={styles.header}>
        <h1>{searchValue ? `Поиск: ${searchValue}` : "Все кросовки"}</h1>
        <input
          type="text"
          placeholder="Поиск..."
          onChange={(event) => changeSearchInput(event)}
        />
      </div>

      {renderItems()}
    </div>
  );
};

export default Shop;
