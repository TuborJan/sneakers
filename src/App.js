import React, { useState, useEffect } from "react";
import { Route, Routes } from "react-router-dom";
import Layout from "./Layout/Layout";
import { Shop } from "./components/Shop/Shop";
import { getItemsData } from "./Service/API/Requests";
import { $productsCardStore } from "./Service/Store/store";
import { useStore } from "effector-react";
// import Favorite from "./components/Layout/Favorite/Favorite.jsx";
// import Profile from "./components/Layout/Profile/Profile.jsx";

function App() {
  const [currentPrice, setCurrentPrice] = useState(0);
  const [isLoading, setIsLoading] = useState(true);
  const [productsError, setProductsError] = useState(false);

  const productsCardStore = useStore($productsCardStore);

  //Data from server
  useEffect(() => {
    getItemsData("items", setProductsError, setIsLoading);
  }, []);

  return (
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route
          index
          element={<Shop error={productsError} isLoading={isLoading} />}
        />
        {/* <Route path="favorite" element={<Favorite />} />
            <Route path="profile" element={<Profile />} /> */}
      </Route>
    </Routes>
  );
}

export default App;
