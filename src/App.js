import React, { useState, useEffect } from "react";
import axios from "axios";
import Shop from "./components/Shop/Shop";
import Header from "./components/Header/Header";
import styles from "./styles/App.module.scss";
import { Context } from "./Context/context.js";

function App() {
  const [currentPrice, setCurrentPrice] = useState(0);

  //Update data
  const [updateData, setUpdateData] = useState(false);

  //Data from server
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

  //Update total price
  useEffect(() => {
    function updatePrice() {
      let price = 0;
      for (let item of addedItems) {
        price += item.price;
      }
      setCurrentPrice(price);
    }

    updatePrice();
  });

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
        <Header errorCart={errorCart} />
        <main className={styles.container}>
          <Shop items={items} error={errorCard} />;
        </main>
      </div>
    </Context.Provider>
  );
}

export default App;
