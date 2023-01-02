import { deleteData, postData, fetchItemsData } from "../API/Requests";

export const addToServer = (
  item,
  localStorage,
  setLocalStorage,
  setError,
  serverStorage
) => {
  if (
    localStorage.find((obj) => Number(obj.parentid) === Number(item.parentid))
  ) {
    for (let obj of localStorage) {
      if (Number(obj.parentid) === Number(item.parentid)) {
        async function serverRequestUpdate() {
          await deleteData(serverStorage, obj.id);
          await fetchItemsData(serverStorage, setLocalStorage, setError);
        }
        serverRequestUpdate();
        break;
      }
    }
  } else {
    async function serverRequestUpdate() {
      await postData(serverStorage, item);
      await fetchItemsData(serverStorage, setLocalStorage, setError);
    }
    serverRequestUpdate();
  }
};
