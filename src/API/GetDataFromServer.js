export const GetCardItems = (setItems, setErrorCard) => {
  axios
    .get("https://63a57287318b23efa793b328.mockapi.io/items")
    .then((res) => {
      setItems(res.data);
    })
    .catch((error) => {
      setErrorCard(error);
    });
};

export const GetCartItems = (setAddedItems, setErrorCart) => {
  axios
    .get("https://63a57287318b23efa793b328.mockapi.io/Cart")
    .then((res) => {
      setAddedItems(res.data);
    })
    .catch((error) => {
      setErrorCart(error);
    });
};
