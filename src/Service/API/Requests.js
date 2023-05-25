import axios from "axios";
import { setProductsCard } from "../Store/store";

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
