import axios from "axios";

export const GetProduct = (setItems, setError) => {
  axios
    .get("https://63a57287318b23efa793b328.mockapi.io/items")
    .then((data) => {
      setItems(data.data);
    })
    .catch((error) => {
      setError(error);
    });
};
