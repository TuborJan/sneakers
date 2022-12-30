import {
  deleteData,
  postData,
  fetchItemsData,
} from "../components/API/Requests";

export const addToCart = (item, addedItems, setAddedItems, setError) => {
  if (
    addedItems.find((obj) => Number(obj.parentid) === Number(item.parentid))
  ) {
    for (let obj of addedItems) {
      if (Number(obj.parentid) === Number(item.parentid)) {
        async function serverRequestUpdate() {
          await deleteData("cart", obj.id);
          await fetchItemsData("cart", setAddedItems, setError);
        }
        serverRequestUpdate();
        break;
      }
    }
  } else {
    async function serverRequestUpdate() {
      await postData("cart", item);
      await fetchItemsData("cart", setAddedItems, setError);
    }
    serverRequestUpdate();
  }
};

export const addToFavorite = (
  item,
  addedFavorite,
  setAddedFavorite,
  setError
) => {
  if (
    addedFavorite.find((obj) => Number(obj.parentid) === Number(item.parentid))
  ) {
    for (let obj of addedFavorite) {
      if (Number(obj.parentid) === Number(item.parentid)) {
        async function serverRequestUpdate() {
          await deleteData("favorite", obj.id);
          await fetchItemsData("favorite", setAddedFavorite, setError);
        }
        serverRequestUpdate();
        break;
      }
    }
  } else {
    async function serverRequestUpdate() {
      await postData("favorite", item);
      await fetchItemsData("favorite", setAddedFavorite, setError);
    }
    serverRequestUpdate();
  }
};
