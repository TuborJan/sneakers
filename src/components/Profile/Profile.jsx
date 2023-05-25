import { Link } from "react-router-dom";
import { PurchasedItems } from "./PurchasedItems";
import styles from "../../styles/Profile/Profile.module.scss";
import { $purchasedItemsStore } from "../../Service/Store/store";
import { useStore } from "effector-react";

export const Profile = () => {
  const purchasedItems = useStore($purchasedItemsStore);

  return (
    <div className={styles.profile}>
      {purchasedItems.length > 0 ? (
        <div className={styles.notEmpty}>
          <div className={styles.header}>
            <Link to="/">
              <img
                src="https://i.postimg.cc/NFywxBn3/backbtn.png"
                alt="back btm"
              />
            </Link>
            <h1>Мои покупки</h1>
          </div>
          <div className={styles.items}>
            {purchasedItems.map((item, index) => (
              <PurchasedItems key={index} item={item} />
            ))}
          </div>
        </div>
      ) : (
        <div className={styles.empty}>
          <h1>У вас нет заказов</h1>
          <p>Вы ничего не покупали. Совершите покупку чтобы увидеть заказы.</p>
          <Link to="/" className={styles.button}>
            <span className={styles.arrow}>
              <img src="https://i.postimg.cc/NjbQQ1Cp/arrow.png" alt="arrow" />
            </span>{" "}
            Вернуться назад
          </Link>
        </div>
      )}
    </div>
  );
};
