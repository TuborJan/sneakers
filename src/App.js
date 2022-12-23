import Shop from "./components/Body/Shop/Shop";
import Header from "./components/Header/Header";
import styles from "./styles/App.module.scss";

function App() {
  return (
    <div className={styles.App}>
      <Header />
      <div className={styles.container}>
        <Shop />
      </div>
    </div>
  );
}

export default App;
