import React, { useState, useEffect } from "react";
import { Route, Routes, BrowserRouter } from "react-router-dom";
import { Context } from "./Context/context.js";
import { fetchItemsData } from "./components/API/Requests";
import Layout from "./components/Layout/Layout.jsx";
import Shop from "./components/Shop/Shop";
import Favorite from "./components/Favorite/Favorite.jsx";
import Profile from "./components/Profile/Profile.jsx";

function App() {
  const [currentPrice, setCurrentPrice] = useState(0);
  const [isLoading, setIsLoading] = useState(false);

  //Data from server
  const [items, setItems] = useState([]);
  const [addedItems, setAddedItems] = useState([]);
  const [addedFavorite, setAddedFavorite] = useState([]);

  const [error, setError] = useState("");

  useEffect(() => {
    async function fetchData() {
      setIsLoading(true);

      await fetchItemsData("items", setItems, setError);
      await fetchItemsData("cart", setAddedItems, setError);
      await fetchItemsData("favorite", setAddedFavorite, setError);

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
        addedFavorite,
        setAddedFavorite,
        setError,
      }}
    >
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Layout />}>
            <Route
              index
              element={
                <Shop items={items} error={error} isLoading={isLoading} />
              }
            />
            <Route path="favorite" element={<Favorite />} />
            <Route path="profile" element={<Profile />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </Context.Provider>
  );
}

export default App;
