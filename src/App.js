import React, { useState, useEffect } from "react";
import Shop from "./components/Shop/Shop";
import Header from "./components/Header/Header";
import styles from "./styles/App.module.scss";
import { Context } from "./Context/context.js";
import { fetchItemsData } from "./components/API/Requests";

function App() {
  const [currentPrice, setCurrentPrice] = useState(0);
  const [isLoading, setIsLoading] = useState(false);

  //Data from server
  const [items, setItems] = useState([]);
  const [addedItems, setAddedItems] = useState([]);

  const [errorCard, setErrorCard] = useState("");
  const [errorCart, setErrorCart] = useState("");

  useEffect(() => {
    async function fetchData() {
      setIsLoading(true);

      await fetchItemsData("Cart", setAddedItems, setErrorCart);
      await fetchItemsData("items", setItems, setErrorCard);

      setIsLoading(false);
    }

    fetchData();
  }, []);

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
        // updateData,
        // setUpdateData,
        setErrorCart,
      }}
    >
      <div className={styles.App}>
        <Header errorCart={errorCart} />
        <main className={styles.container}>
          <Shop items={items} error={errorCard} isLoading={isLoading} />
        </main>
      </div>
    </Context.Provider>
  );
}

export default App;
