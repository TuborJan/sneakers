import { createEvent, createStore } from "effector";
import connectLocalStorage from "effector-localstorage/sync";

//Products Card
export const setProductsCard = createEvent();

const productsCardLocalStorage = connectLocalStorage("productsCard").onError(
  (err) => console.log(err)
);

export const $productsCardStore = createStore(
  productsCardLocalStorage.init([])
);

$productsCardStore.on(setProductsCard, (state, data) => {
  state = data;
  return state;
});

setProductsCard.watch(productsCardLocalStorage);

//Purchased items
export const setPurchasedItems = createEvent();

const purchasedItemsLocalStorage = connectLocalStorage(
  "purchasedItems"
).onError((err) => console.log(err));

export const $purchasedItemsStore = createStore(
  purchasedItemsLocalStorage.init([])
);

$purchasedItemsStore.on(setPurchasedItems, (state, data) => {
  state = data;
  return state;
});

setPurchasedItems.watch(purchasedItemsLocalStorage);
