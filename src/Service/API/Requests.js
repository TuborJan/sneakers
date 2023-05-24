import axios from "axios";
import { setProductsCard } from "../Store/store";

export const postData = async (to, item) => {
  await axios
    .post(`https://63a57287318b23efa793b328.mockapi.io/${to}`, item)
    .catch((error) => {
      alert(error.message);
    });
};

export const deleteData = async (from, item) => {
  await axios
    .delete(`https://63a57287318b23efa793b328.mockapi.io/${from}/${item}`)
    .catch((error) => {
      alert(error.message);
    });
};

export const getItemsData = (from, setError, setIsLoading) => {
  const response = axios
    .get(`https://63a57287318b23efa793b328.mockapi.io/${from}`)
    .catch((error) => {
      setError(error.message);
    })
    .then((response) => {
      setProductsCard(response.data);
      setIsLoading(false);
    });
};
