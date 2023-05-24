import React, { useCallback, useEffect, useState } from "react";
import { useStore } from "effector-react";
import styles from "../../styles/Shop/shop.module.scss";
import { Card } from "./Card";
import { $productsCardStore, setProductsCard } from "../../Service/Store/store";

export const Shop = ({ error, isLoading }) => {
  const [searchValue, setSearchValue] = useState("");
  const productsCards = useStore($productsCardStore);

  const changeSearchInput = (event) => {
    setSearchValue(event.target.value);
  };

  const toggleIsFavorite = (item) => {
    item.isFavorite = !item.isFavorite;
    setProductsCard([...productsCards]);
  };

  const toggleIsAddedToCart = (item) => {
    item.isAddedToCart = !item.isAddedToCart;
    setProductsCard([...productsCards]);
  };

  //Render products card
  const renderItems = (productsCards) => {
    productsCards = productsCards.filter((item) =>
      item.description.toLowerCase().includes(searchValue.toLowerCase())
    );

    return (
      <div className={styles.items}>
        {(isLoading ? [...Array(8)] : productsCards).map((item, index) => (
          <Card
            key={index}
            item={item}
            isLoading={isLoading}
            toggleIsFavorite={toggleIsFavorite}
            toggleIsAddedToCart={toggleIsAddedToCart}
          />
        ))}
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
      {error ? (
        <h1 className={styles.error}>{error}</h1>
      ) : (
        renderItems(productsCards)
      )}
    </div>
  );
};
