import styles from "../../styles/Profile/PurchasedItems.module.scss";

export const PurchasedItems = ({ item }) => {
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
          ></div>
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
