import { Outlet } from "react-router-dom";
import Header from "../components/Header/Header";
import styles from "../styles/Layout/Layout.module.scss";

const Layout = () => {
  return (
    <div className={styles.App}>
      <Header />
      <main className={styles.container}>
        <Outlet />
      </main>
    </div>
  );
};

export default Layout;
