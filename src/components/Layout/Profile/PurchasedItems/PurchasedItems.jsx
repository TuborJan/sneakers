import React, { useContext } from "react";
import { Context } from "../../../Context/context";
import { addToServer } from "../../../functions/addItems";
import styles from "./PurchasedItems.module.scss";

const PurchasedItems = ({ item }) => {
  const { purchasedItems, setPurchasedItems, setError } = useContext(Context);

  return (
    <div className={styles.item}>
      <div className={styles.card}>
        <div>
          <div
            className={styles.img}
            style={{
              backgroundImage: `url(${item.url})`,
              backgroundRepeat: "no-repeat",
            }}
          >
            <img
              onClick={() =>
                addToServer(
                  item,
                  purchasedItems,
                  setPurchasedItems,
                  setError,
                  "purchases"
                )
              }
              src={"https://i.postimg.cc/MHkS9tXK/exitbtn.png"}
              alt="delete btn"
            />
          </div>
          <div className={styles.info}>
            <h3>{item.description}</h3>
            <div className={styles.price}>
              <p>
                ЦЕНА:
                <span className={styles.bolder}> {`${item.price} руб.`}</span>
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PurchasedItems;
