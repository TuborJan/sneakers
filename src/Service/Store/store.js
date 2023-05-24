import { createEvent, createStore } from "effector";
import connectLocalStorage from "effector-localstorage";

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

//Favorite items
export const setFavoriteItems = createEvent();

const favoriteItemsLocalStorage = connectLocalStorage("favoriteItems").onError(
  (err) => console.log(err)
);

export const $favoriteItemsStore = createStore(
  favoriteItemsLocalStorage.init([])
);

$favoriteItemsStore.on(setFavoriteItems, (state, data) => {
  state = data;
  return state;
});

//Cart items
export const setCartItems = createEvent();

const cartItemsLocalStorage = connectLocalStorage("cartItems").onError((err) =>
  console.log(err)
);

export const $cartItemsStore = createStore(cartItemsLocalStorage.init([]));

$cartItemsStore.on(setCartItems, (state, data) => {
  state = data;
  return state;
});

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
