import Items from "./components/Body/Items/Items";
import Header from "./components/Header/Header";
import styles from "./styles/App.module.scss";

function App() {
  return (
    <div className={styles.App}>
      <Header />
      <div className={styles.container}>
        <Items />
      </div>
    </div>
  );
}

export default App;
