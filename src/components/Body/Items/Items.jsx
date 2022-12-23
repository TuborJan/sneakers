import React, { useEffect, useState } from "react";
import { GetProduct } from "../../../API/GetProduct";
import Card from "../Card/Card";
import styles from "./Items.module.scss";

const Items = () => {
  const [items, setItems] = useState([]);
  const [error, setError] = useState("");

  useEffect(() => {
    GetProduct(setItems, setError);
  }, []);

  return (
    <div className={styles.items}>
      {error ? (
        <h1 className={styles.error}>{error.message}</h1>
      ) : (
        items.map((item, index) => (
          <Card
            key={index}
            imgUrl={item.url}
            description={item.description}
            price={item.price}
          />
        ))
      )}
    </div>
  );
};

export default Items;
