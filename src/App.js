import React, { useState, useEffect } from "react";
import axios from "axios";
import Shop from "./components/Shop/Shop";
import Header from "./components/Header/Header";
import styles from "./styles/App.module.scss";
import { Context } from "./Context/context.js";

function App() {
  const [currentPrice, setCurrentPrice] = useState(0);

  //Обновить данные с сервера
  const [updateData, setUpdateData] = useState(false);

  //Получить данные с сервака
  const [items, setItems] = useState([]);
  const [addedItems, setAddedItems] = useState([]);

  const [errorCard, setErrorCard] = useState("");
  const [errorCart, setErrorCart] = useState("");

  useEffect(() => {
    async function fetchData() {
      const responseItems = await axios.get(
        "https://63a57287318b23efa793b328.mockapi.io/items"
      );
      const responseCart = await axios.get(
        "https://63a57287318b23efa793b328.mockapi.io/Cart"
      );

      setAddedItems(responseCart.data);
      setErrorCart(responseCart.error);

      setItems(responseItems.data);
      setErrorCard(responseItems.error);
    }

    fetchData();
  }, [updateData]);

  return (
    <Context.Provider
      value={{
        currentPrice,
        setCurrentPrice,
        addedItems,
        setAddedItems,
        updateData,
        setUpdateData,
      }}
    >
      <div className={styles.App}>
        <Header currentPrice={currentPrice} errorCart={errorCart} />
        <main className={styles.container}>
          <Shop items={items} error={errorCard} />;
        </main>
      </div>
    </Context.Provider>
  );
}

export default App;
